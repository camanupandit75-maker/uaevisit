import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { emirateDetails } from '@/data/uae/emirateDetails';
import { emirates } from '@/data/uae/emirates';

const VALID_EMIRATE_KEYS = new Set(emirates.map((emirate) => emirate.key));
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

function getOpenAIClient() {
  return new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
}

function isValidDateString(value) {
  if (!DATE_PATTERN.test(value)) return false;
  const date = new Date(`${value}T12:00:00`);
  return !Number.isNaN(date.getTime()) && value === date.toISOString().slice(0, 10);
}

function parseJsonValue(value) {
  if (value == null) return null;
  if (typeof value === 'object') return value;
  if (typeof value !== 'string') return { raw: value };

  const trimmed = value.trim();
  if (!trimmed) return null;

  const withoutFences = trimmed
    .replace(/^```(?:json)?\s*/i, '')
    .replace(/\s*```$/i, '')
    .trim();

  try {
    return JSON.parse(withoutFences);
  } catch {
    return { raw: value };
  }
}

function extractHotelSuggestions(outputItems) {
  const suggestions = [];
  const mcpCalls = (outputItems ?? []).filter((item) => item.type === 'mcp_call');

  for (const call of mcpCalls) {
    const parsed = parseJsonValue(call.output);
    if (!parsed) continue;

    if (Array.isArray(parsed)) {
      suggestions.push(...parsed);
      continue;
    }

    if (Array.isArray(parsed.hotels)) {
      suggestions.push(...parsed.hotels);
      continue;
    }

    if (Array.isArray(parsed.results)) {
      suggestions.push(...parsed.results);
      continue;
    }

    if (Array.isArray(parsed.hotelSuggestions)) {
      suggestions.push(...parsed.hotelSuggestions);
      continue;
    }

    suggestions.push(parsed);
  }

  return suggestions;
}

function buildSystemPrompt() {
  return `You are an expert UAE travel planner. Build a custom day-by-day itinerary for one emirate.

Use the Trivago MCP tools to search for live hotel options for the guest's check-in/check-out dates, party size, and destination. Prefer well-reviewed properties across price tiers when possible.

Respond with ONLY valid JSON (no markdown fences) in this exact shape:
{
  "narrative": "2-4 sentence intro tailored to their interests and dates",
  "schedule": [
    {
      "day": 1,
      "title": "Short theme for the day",
      "stops": [
        { "time": "Morning", "activity": "Activity name", "note": "Optional tip or empty string" },
        { "time": "Afternoon", "activity": "Activity name", "note": "" },
        { "time": "Evening", "activity": "Activity name", "note": "" }
      ]
    }
  ]
}

Rules:
- Match the requested number of days exactly in schedule.
- Each day should include Morning, Afternoon, and Evening stops.
- Activities must be realistic for the chosen emirate.
- Weave in the guest's selected interests where relevant.
- Do not invent hotel prices or availability in the JSON — use Trivago MCP for live hotel data.`;
}

function buildTrimmedContext(details, interests) {
  const selectedInterests = (interests ?? []).map((interest) =>
    interest.toLowerCase(),
  );
  const allWhatToDo = details.whatToDo ?? [];

  let whatToDo = allWhatToDo;
  if (selectedInterests.length > 0) {
    const filtered = allWhatToDo.filter((group) =>
      selectedInterests.includes(group.category.toLowerCase()),
    );
    if (filtered.length > 0) {
      whatToDo = filtered;
    }
  }

  return {
    whatToDo,
    whatToEat: details.whatToEat ?? [],
    suggestedItinerary: details.suggestedItinerary ?? null,
  };
}

function buildUserMessage({
  emirate,
  details,
  days,
  interests,
  checkIn,
  checkOut,
  adults,
}) {
  const interestList =
    interests?.length > 0 ? interests.join(', ') : 'general highlights';
  const trimmedContext = buildTrimmedContext(details, interests);

  return `Plan a ${days}-day itinerary for ${emirate.name}, UAE.

Emirate overview: ${details.intro}

Guest interests: ${interestList}
Check-in: ${checkIn}
Check-out: ${checkOut}
Adults: ${adults}

Emirate reference content (activities, food, pacing guide):
${JSON.stringify(trimmedContext)}

Search Trivago for hotels in ${emirate.name} for these dates and ${adults} adult(s), then return the JSON itinerary described in your instructions.`;
}

export async function POST(request) {
  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json(
      {
        error:
          'OPENAI_API_KEY is not configured. Add it to .env.local before generating itineraries.',
      },
      { status: 500 },
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 });
  }

  const { emirateKey, days, interests, checkIn, checkOut, adults } = body ?? {};

  if (!emirateKey || typeof emirateKey !== 'string' || !VALID_EMIRATE_KEYS.has(emirateKey)) {
    return NextResponse.json({ error: 'Invalid or missing emirateKey.' }, { status: 400 });
  }

  const parsedDays = Number(days);
  if (!Number.isInteger(parsedDays) || parsedDays < 1 || parsedDays > 14) {
    return NextResponse.json(
      { error: 'days must be an integer between 1 and 14.' },
      { status: 400 },
    );
  }

  if (!isValidDateString(checkIn) || !isValidDateString(checkOut)) {
    return NextResponse.json(
      { error: 'checkIn and checkOut must be valid YYYY-MM-DD dates.' },
      { status: 400 },
    );
  }

  if (new Date(`${checkOut}T12:00:00`) <= new Date(`${checkIn}T12:00:00`)) {
    return NextResponse.json(
      { error: 'checkOut must be after checkIn.' },
      { status: 400 },
    );
  }

  const parsedAdults = Number(adults);
  if (!Number.isInteger(parsedAdults) || parsedAdults < 1 || parsedAdults > 10) {
    return NextResponse.json(
      { error: 'adults must be an integer between 1 and 10.' },
      { status: 400 },
    );
  }

  if (
    interests != null &&
    (!Array.isArray(interests) || interests.some((item) => typeof item !== 'string'))
  ) {
    return NextResponse.json(
      { error: 'interests must be an array of strings when provided.' },
      { status: 400 },
    );
  }

  const emirate = emirates.find((item) => item.key === emirateKey);
  const details = emirateDetails[emirateKey];
  const systemPrompt = buildSystemPrompt();
  const userMessage = buildUserMessage({
    emirate,
    details,
    days: parsedDays,
    interests: interests ?? [],
    checkIn,
    checkOut,
    adults: parsedAdults,
  });

  let response;
  try {
    const openai = getOpenAIClient();
    response = await openai.responses.create({
      model: 'gpt-5.4-mini',
      max_output_tokens: 1500,
      input: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userMessage },
      ],
      tools: [
        {
          type: 'mcp',
          server_label: 'trivago',
          server_description:
            'Trivago hotel search for live availability and pricing in the UAE.',
          server_url: 'https://mcp.trivago.com/mcp',
          require_approval: 'never',
        },
      ],
    });
  } catch (err) {
    console.error('OpenAI API error:', err);
    return NextResponse.json(
      { error: 'Could not reach the OpenAI API. Try again shortly.' },
      { status: 502 },
    );
  }

  const outputText = response.output_text ?? '';
  const parsedModel = parseJsonValue(outputText);
  const narrative =
    parsedModel && typeof parsedModel === 'object' && !Array.isArray(parsedModel)
      ? typeof parsedModel.narrative === 'string'
        ? parsedModel.narrative
        : outputText
      : outputText;

  const schedule =
    parsedModel &&
    typeof parsedModel === 'object' &&
    !Array.isArray(parsedModel) &&
    Array.isArray(parsedModel.schedule)
      ? parsedModel.schedule
      : [];

  const hotelSuggestions = extractHotelSuggestions(response.output);

  return NextResponse.json({
    narrative,
    schedule,
    hotelSuggestions,
    raw: {
      responseId: response.id ?? null,
      outputText,
      mcpCalls: (response.output ?? [])
        .filter((item) => item.type === 'mcp_call')
        .map((item) => ({
          id: item.id ?? null,
          name: item.name ?? null,
          output: item.output ?? null,
        })),
    },
  });
}
