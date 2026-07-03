/**
 * Fields marked TODO-verify must be confirmed against official ICP/GDRFA sources
 * before treating as travel advice.
 */
export const visaTodoVerify = [
  'Maximum stay duration for visa-on-arrival and visa-free entries by nationality',
  'India visa-on-arrival eligibility rules and stay length for US/UK/Schengen visa or Green Card holders',
  'Philippines passport visa-on-arrival duration and extension options',
  'Pakistan tourist visa processing requirements and typical validity',
  'Transit/layover rules when not clearing immigration vs. short visits',
  'Whether specific EU member states differ under unified UAE visa policy',
];

/** @typedef {'visa-free' | 'visa-on-arrival' | 'pre-arranged' | 'transit'} VisaType */

/** @typedef {{
 *   id: string,
 *   region: string,
 *   countriesExample: string,
 *   visaType: VisaType,
 *   duration: string,
 *   notes: string,
 * }} VisaRegion */

/** @type {VisaRegion[]} */
export const visaRegions = [
  {
    id: 'gcc',
    region: 'GCC nationals',
    countriesExample:
      'Bahrain, Kuwait, Oman, Qatar, Saudi Arabia (GCC citizens residing in or visiting the UAE)',
    visaType: 'visa-free',
    duration: 'TODO-verify — residency and entry governed by GCC agreements',
    notes:
      'GCC citizens generally move freely within member states under Gulf Cooperation Council arrangements. Carry a valid GCC passport or national ID as required at the border.',
  },
  {
    id: 'visa-on-arrival-eligible',
    region: 'Visa-on-arrival / visa-free (selected passports)',
    countriesExample:
      'United States, United Kingdom, Germany, France, Italy, Spain, Australia, Canada, Japan, South Korea, and other nationalities listed on the official ICP eligible-countries list',
    visaType: 'visa-on-arrival',
    duration: 'TODO-verify — commonly up to 30 or 90 days depending on nationality',
    notes:
      'Many Western and selected passport holders may enter the UAE without a pre-arranged visa, receiving entry permission at the border. Duration and extension rules vary by nationality — confirm your passport on the ICP website before booking flights.',
  },
  {
    id: 'india',
    region: 'India (special conditions)',
    countriesExample: 'Indian passport holders',
    visaType: 'pre-arranged',
    duration: 'TODO-verify — standard tourist/visit visa validity per ICP',
    notes:
      'Most Indian citizens need a UAE visit or tourist visa arranged before travel (online via ICP, airline, or authorised agent). Exception: Indian passport holders with a valid US visa, US Green Card, UK visa, or EU residence permit may qualify for visa-on-arrival in some cases — eligibility and stay length are subject to change; confirm on ICP before travel.',
  },
  {
    id: 'pre-arranged-south-asia',
    region: 'Pre-arranged visa (South & Central Asia)',
    countriesExample:
      'Pakistan, Bangladesh, Afghanistan, Iran, and other nationalities requiring advance approval',
    visaType: 'pre-arranged',
    duration: 'TODO-verify — validity period stamped on issued visa',
    notes:
      'Travellers from these countries typically must obtain a UAE visit or tourist visa before departure. Apply through ICP, your airline, or a licensed sponsor. Allow processing time and check document requirements carefully.',
  },
  {
    id: 'visa-on-arrival-southeast-asia',
    region: 'Visa-on-arrival (parts of Southeast Asia & selected passports)',
    countriesExample:
      'Philippines, Malaysia, Singapore, and other nationalities on the current ICP eligible list',
    visaType: 'visa-on-arrival',
    duration: 'TODO-verify — often up to 30 days; extension rules vary',
    notes:
      'Eligibility depends on your exact passport and current UAE policy. Filipino passport holders have historically been included in visa-on-arrival schemes, but rules change — verify Philippines specifically on ICP before travel.',
  },
  {
    id: 'pre-arranged-other',
    region: 'Pre-arranged visa (other nationalities)',
    countriesExample:
      'Nationalities not on the visa-free or visa-on-arrival lists — check ICP country lookup',
    visaType: 'pre-arranged',
    duration: 'TODO-verify',
    notes:
      'If your country is not on the eligible visa-free or visa-on-arrival list, arrange a visit visa through ICP, a UAE-based sponsor, or your airline before departure.',
  },
  {
    id: 'transit',
    region: 'Transit & short layovers',
    countriesExample:
      'Passengers connecting through Dubai, Abu Dhabi, or other UAE airports',
    visaType: 'transit',
    duration: 'TODO-verify — depends on whether you clear immigration',
    notes:
      'If you remain airside on a connecting flight and do not pass immigration, you may not need a UAE entry visa. If you plan to leave the airport or your layover requires clearing border control, you need an entry visa appropriate to your nationality. Confirm with your airline and ICP.',
  },
];

/** @typedef {{
 *   name: string,
 *   searchTerms: string[],
 *   regionId: string,
 * }} VisaCountry */

/** @type {VisaCountry[]} */
export const visaCountries = [
  { name: 'United States', searchTerms: ['united states', 'usa', 'us', 'america'], regionId: 'visa-on-arrival-eligible' },
  { name: 'United Kingdom', searchTerms: ['united kingdom', 'uk', 'britain', 'england', 'scotland', 'wales'], regionId: 'visa-on-arrival-eligible' },
  { name: 'Germany', searchTerms: ['germany', 'deutschland'], regionId: 'visa-on-arrival-eligible' },
  { name: 'France', searchTerms: ['france'], regionId: 'visa-on-arrival-eligible' },
  { name: 'Italy', searchTerms: ['italy'], regionId: 'visa-on-arrival-eligible' },
  { name: 'Spain', searchTerms: ['spain'], regionId: 'visa-on-arrival-eligible' },
  { name: 'Australia', searchTerms: ['australia'], regionId: 'visa-on-arrival-eligible' },
  { name: 'Canada', searchTerms: ['canada'], regionId: 'visa-on-arrival-eligible' },
  { name: 'Japan', searchTerms: ['japan'], regionId: 'visa-on-arrival-eligible' },
  { name: 'India', searchTerms: ['india', 'indian'], regionId: 'india' },
  { name: 'Pakistan', searchTerms: ['pakistan', 'pakistani'], regionId: 'pre-arranged-south-asia' },
  { name: 'Philippines', searchTerms: ['philippines', 'filipino', 'filipina'], regionId: 'visa-on-arrival-southeast-asia' },
  { name: 'Bangladesh', searchTerms: ['bangladesh', 'bangladeshi'], regionId: 'pre-arranged-south-asia' },
  { name: 'Saudi Arabia', searchTerms: ['saudi arabia', 'saudi'], regionId: 'gcc' },
  { name: 'Bahrain', searchTerms: ['bahrain'], regionId: 'gcc' },
  { name: 'Kuwait', searchTerms: ['kuwait'], regionId: 'gcc' },
  { name: 'Oman', searchTerms: ['oman'], regionId: 'gcc' },
  { name: 'Qatar', searchTerms: ['qatar'], regionId: 'gcc' },
  { name: 'Malaysia', searchTerms: ['malaysia'], regionId: 'visa-on-arrival-southeast-asia' },
  { name: 'Singapore', searchTerms: ['singapore'], regionId: 'visa-on-arrival-southeast-asia' },
  { name: 'South Africa', searchTerms: ['south africa'], regionId: 'visa-on-arrival-eligible' },
  { name: 'Brazil', searchTerms: ['brazil'], regionId: 'visa-on-arrival-eligible' },
  { name: 'China', searchTerms: ['china', 'chinese'], regionId: 'pre-arranged-other' },
  { name: 'Russia', searchTerms: ['russia', 'russian'], regionId: 'visa-on-arrival-eligible' },
  { name: 'Nigeria', searchTerms: ['nigeria', 'nigerian'], regionId: 'pre-arranged-other' },
  { name: 'Egypt', searchTerms: ['egypt', 'egyptian'], regionId: 'visa-on-arrival-eligible' },
  { name: 'Iran', searchTerms: ['iran', 'iranian'], regionId: 'pre-arranged-south-asia' },
  { name: 'Afghanistan', searchTerms: ['afghanistan', 'afghan'], regionId: 'pre-arranged-south-asia' },
];

export const officialVisaSources = [
  {
    label: 'UAE Government — Visa & Emirates ID (u.ae)',
    url: 'https://u.ae/en/information-and-services/visa-and-emirates-id',
  },
  {
    label: 'Federal Authority for Identity, Citizenship, Customs & Port Security (ICP)',
    url: 'https://icp.gov.ae/en/',
  },
  {
    label: 'GDRFA Dubai — visa services',
    url: 'https://www.gdrfad.gov.ae/en',
  },
];

const regionById = Object.fromEntries(visaRegions.map((region) => [region.id, region]));

/** @param {string} query */
export function findVisaCountry(query) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return null;

  return (
    visaCountries.find(
      (country) =>
        country.name.toLowerCase() === normalized ||
        country.searchTerms.some((term) => term === normalized),
    ) ??
    visaCountries.find(
      (country) =>
        country.name.toLowerCase().includes(normalized) ||
        country.searchTerms.some((term) => term.includes(normalized)),
    ) ??
    null
  );
}

/** @param {string} regionId */
export function getVisaRegion(regionId) {
  return regionById[regionId] ?? null;
}

/** @param {VisaType} visaType */
export function getVisaTypeLabel(visaType) {
  const labels = {
    'visa-free': 'Visa-free',
    'visa-on-arrival': 'Visa on arrival',
    'pre-arranged': 'Pre-arranged visa',
    transit: 'Transit / layover',
  };
  return labels[visaType] ?? visaType;
}

/** @returns {Record<VisaType, VisaRegion[]>} */
export function getRegionsGroupedByVisaType() {
  /** @type {Record<VisaType, VisaRegion[]>} */
  const grouped = {
    'visa-free': [],
    'visa-on-arrival': [],
    'pre-arranged': [],
    transit: [],
  };

  for (const region of visaRegions) {
    grouped[region.visaType].push(region);
  }

  return grouped;
}

export const visaTypeOrder = [
  'visa-free',
  'visa-on-arrival',
  'pre-arranged',
  'transit',
];
