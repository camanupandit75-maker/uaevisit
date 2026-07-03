/** @typedef {'ideal' | 'hot' | 'extreme'} WeatherRating */

/** @typedef {{
 *   month: string,
 *   tempRange: string,
 *   humidity: string,
 *   verdict: string,
 *   rating: WeatherRating,
 * }} WeatherMonth */

/** @typedef {{
 *   id: string,
 *   title: string,
 *   type?: 'weather',
 *   intro?: string,
 *   items?: { heading?: string, body: string }[],
 * }} EssentialsSection */

/** @type {WeatherMonth[]} */
export const weatherByMonth = [
  {
    month: 'Jan',
    tempRange: '18–26°C',
    humidity: 'Moderate humidity; occasional light rain in the north.',
    verdict: 'Excellent for sightseeing, desert camps, and outdoor dining.',
    rating: 'ideal',
  },
  {
    month: 'Feb',
    tempRange: '19–27°C',
    humidity: 'Comfortable evenings; humidity still manageable.',
    verdict: 'Peak festival season — ideal for walking tours and beaches.',
    rating: 'ideal',
  },
  {
    month: 'Mar',
    tempRange: '21–30°C',
    humidity: 'Warming up; humidity rises slightly toward month-end.',
    verdict: 'Still a strong visit window before summer heat builds.',
    rating: 'ideal',
  },
  {
    month: 'Apr',
    tempRange: '24–34°C',
    humidity: 'Noticeably warmer and more humid, especially inland.',
    verdict: 'Plan mornings and evenings; pools and malls become essential.',
    rating: 'hot',
  },
  {
    month: 'May',
    tempRange: '28–38°C',
    humidity: 'High humidity along the coast; hazy skies common.',
    verdict: 'Outdoor sightseeing is tiring — favour air-conditioned attractions.',
    rating: 'hot',
  },
  {
    month: 'Jun',
    tempRange: '30–42°C',
    humidity: 'Very high humidity; midday heat is intense.',
    verdict: 'Extreme heat — limit outdoor activity to early morning or after sunset.',
    rating: 'extreme',
  },
  {
    month: 'Jul',
    tempRange: '32–43°C',
    humidity: 'Peak summer humidity; feels hotter than the thermometer suggests.',
    verdict: 'Hottest month — indoor and evening plans strongly recommended.',
    rating: 'extreme',
  },
  {
    month: 'Aug',
    tempRange: '32–43°C',
    humidity: 'Sustained high humidity with little relief.',
    verdict: 'Similar to July — beach only at dawn or dusk; hydrate constantly.',
    rating: 'extreme',
  },
  {
    month: 'Sep',
    tempRange: '30–40°C',
    humidity: 'Still very hot, though humidity may ease slightly late month.',
    verdict: 'Summer lingers — wait for cooler evenings before long walks.',
    rating: 'extreme',
  },
  {
    month: 'Oct',
    tempRange: '26–36°C',
    humidity: 'Cooling trend begins; humidity gradually drops.',
    verdict: 'Transitional month — outdoor plans become viable again.',
    rating: 'hot',
  },
  {
    month: 'Nov',
    tempRange: '22–31°C',
    humidity: 'Pleasant humidity returns; clear skies more common.',
    verdict: 'Ideal shoulder season — great for desert, culture, and coast.',
    rating: 'ideal',
  },
  {
    month: 'Dec',
    tempRange: '19–27°C',
    humidity: 'Low to moderate; comfortable all day in most emirates.',
    verdict: 'Prime travel season — festivals, beaches, and outdoor markets shine.',
    rating: 'ideal',
  },
];

/** @type {EssentialsSection[]} */
export const essentialsSections = [
  {
    id: 'weather',
    title: 'Weather by Month',
    type: 'weather',
    intro:
      'Coastal UAE climate at a glance — temperatures in Celsius, with humidity notes for planning outdoor time.',
  },
  {
    id: 'dress-code',
    title: 'Dress Code',
    intro:
      'The UAE is modern and cosmopolitan, but modest dress is appreciated in public and required in certain places.',
    items: [
      {
        heading: 'General',
        body:
          'Light, breathable fabrics work year-round. In malls, souks, and public transport, cover shoulders and knees. Casual smart dress is fine for restaurants; beachwear belongs at the pool or beach only.',
      },
      {
        heading: 'Mosques & religious sites',
        body:
          'Women should wear loose clothing covering arms and legs, and bring a headscarf. Men should wear long trousers and covered shoulders. You may be asked to remove shoes — socks are fine.',
      },
      {
        heading: 'Beaches & pools',
        body:
          'Swimwear is acceptable at designated beach and hotel pool areas. Topless sunbathing is not permitted. Cover up when leaving the beach or walking through hotel lobbies.',
      },
    ],
  },
  {
    id: 'getting-around',
    title: 'Getting Around',
    intro:
      'Each emirate has its own transport quirks — Dubai and Abu Dhabi are the easiest without a car.',
    items: [
      {
        heading: 'Nol card (Dubai)',
        body:
          'Rechargeable tap card for Dubai Metro, trams, buses, and some water taxis. Buy at any metro station or major bus stop; Silver Nol is the standard tourist option. Tap in and out — fines apply for missing tap-out.',
      },
      {
        heading: 'Hafilat card (Abu Dhabi)',
        body:
          'Abu Dhabi\'s equivalent for buses and the growing public network. Purchase and top up at bus stations and select retail points. Useful if you are staying on the mainland without a rental car.',
      },
      {
        heading: 'Taxis',
        body:
          'Official cream-coloured taxis (Dubai) and silver/gold taxis (Abu Dhabi) are metered and widely available. Airport ranks and mall stands are reliable. Ask drivers to use the meter if it is not already running.',
      },
      {
        heading: 'Careem & Uber',
        body:
          'Ride-hailing apps operate across major emirates. Often cheaper and more predictable than street hails at peak times. Careem is the regional staple; Uber is available in Dubai and Abu Dhabi.',
      },
      {
        heading: 'Inter-emirate buses',
        body:
          'Economic coaches connect Dubai, Abu Dhabi, Sharjah, Ajman, and other emirates. Ibn Battuta and Al Ghubaiba are key Dubai terminals. Journeys are air-conditioned and inexpensive — allow extra time for traffic near city centres.',
      },
    ],
  },
  {
    id: 'alcohol-nightlife',
    title: 'Alcohol & Nightlife',
    intro:
      'Rules differ from many Western countries — alcohol is regulated, not banned, for visitors in licensed venues.',
    items: [
      {
        body:
          'Alcohol is served only in licensed hotels, bars, and clubs — not in standard restaurants or cafés unless they hold a licence. Public drinking, carrying open alcohol in streets or beaches, and drunk and disorderly behaviour are illegal and can result in fines or arrest.',
      },
      {
        body:
          'You must be 21+ to drink. Residents need an alcohol licence for home consumption; tourists should not purchase from off-licence shops without understanding current rules. During Ramadan, daytime service pauses in many venues and nightlife hours shift.',
      },
      {
        body:
          'Nightlife clusters in Dubai (DIFC, Marina, Downtown) and Abu Dhabi (Saadiyat, Yas Island, hotels on the Corniche). Dress codes apply in upscale venues — smart casual is a safe default.',
      },
    ],
  },
  {
    id: 'prayer-friday',
    title: 'Prayer Times & Friday',
    intro:
      'Islam shapes the weekly rhythm — Friday is the holy day, and the call to prayer is heard five times daily.',
    items: [
      {
        heading: 'Prayer times',
        body:
          'The adhan (call to prayer) sounds at dawn, midday, afternoon, sunset, and evening — times shift slightly each day. Shops and offices do not close for every prayer, but you may hear a brief pause in some workplaces. Mosques are most active at Friday midday prayers.',
      },
      {
        heading: 'Friday (Jumu\'ah)',
        body:
          'Friday replaces Saturday/Sunday as the main communal day — government offices and many businesses open later or close for the midday sermon (roughly 12:00–14:00). Brunch culture fills the gap; book popular restaurants ahead for Friday lunch.',
      },
      {
        heading: 'Ramadan',
        body:
          'During the holy month, eating, drinking, and smoking in public during daylight hours is discouraged for non-Muslims in most emirates. Many restaurants curtain off dining areas or serve only after sunset. Evenings come alive after iftar.',
      },
    ],
  },
  {
    id: 'tipping',
    title: 'Tipping Norms',
    intro:
      'Tipping is appreciated but not always obligatory — service charges are often included in restaurant bills.',
    items: [
      {
        body:
          'Restaurants: check the bill for a service charge (often 10%). If none is included, 10–15% is customary for good service. For casual cafés, rounding up or leaving small change is fine.',
      },
      {
        body:
          'Taxis: round up to the nearest dirham or add AED 5–10 for longer trips. Ride-hail apps allow in-app tipping.',
      },
      {
        body:
          'Hotels: AED 10–20 per bag for porters; AED 10–20 per night left for housekeeping at stay\'s end. Spa and tour guides: 10–15% if service charge is not included.',
      },
    ],
  },
  {
    id: 'emergency',
    title: 'Emergency Numbers',
    intro:
      'Save these numbers in your phone — operators typically speak Arabic and English.',
    items: [
      {
        heading: '999 — Police',
        body:
          'General emergencies, theft, road accidents requiring police attendance, and safety threats. Stay on the line; location sharing helps response teams.',
      },
      {
        heading: '998 — Ambulance',
        body:
          'Medical emergencies. Hospitals in Dubai and Abu Dhabi are modern; carry insurance documents and ID. Pharmacies are widespread for minor issues.',
      },
      {
        heading: '997 — Fire',
        body:
          'Fire, chemical spills, and rescue situations. High-rise buildings have strict fire protocols — know your hotel evacuation route on check-in.',
      },
    ],
  },
  {
    id: 'power-sim',
    title: 'Power Plugs & SIM Cards',
    intro:
      'Connectivity is excellent — staying online is straightforward for short visits.',
    items: [
      {
        heading: 'Power plugs',
        body:
          'UAE uses Type G sockets (British three-pin, 230V / 50Hz). Bring a universal adapter if your devices use US or EU plugs. USB chargers are easy to find in airports and malls.',
      },
      {
        heading: 'SIM cards',
        body:
          'Tourist SIMs from Etisalat (e&), du, and Virgin Mobile are sold at airport arrivals and mall kiosks. Passport required. Prepaid data packs are inexpensive — 10–20 GB for a week is typical for navigation and messaging.',
      },
      {
        heading: 'eSIM',
        body:
          'Many visitors activate an eSIM before landing via airline apps or third-party providers. Confirm your phone is unlocked and eSIM-compatible. Wi‑Fi is free in most hotels, malls, and metro stations.',
      },
    ],
  },
];

/** @param {WeatherRating} rating */
export function getWeatherRatingLabel(rating) {
  const labels = {
    ideal: 'Ideal',
    hot: 'Hot',
    extreme: 'Extreme heat',
  };
  return labels[rating] ?? rating;
}
