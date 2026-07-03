/** @typedef {'festival' | 'sport' | 'cultural' | 'religious' | 'shopping'} EventCategory */

/** @typedef {{
 *   id: string,
 *   name: string,
 *   emirate: string,
 *   months: string[],
 *   category: EventCategory,
 *   blurb: string,
 *   officialUrl: string,
 *   dateVaries?: boolean,
 * }} UaeEvent */

/** @type {readonly string[]} */
export const EVENT_MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

/** @type {UaeEvent[]} */
export const events = [
  {
    id: 'dubai-shopping-festival',
    name: 'Dubai Shopping Festival',
    emirate: 'dubai',
    months: ['Dec', 'Jan'],
    category: 'shopping',
    blurb:
      'The region\'s longest-running retail celebration turns malls, souks, and waterfront districts into a month-long festival of discounts, raffles, and live entertainment. Expect late-night openings, family shows, and headline concerts alongside serious savings on fashion, electronics, and gold.',
    officialUrl: 'https://www.visitdubai.com/en/dsf',
  },
  {
    id: 'abu-dhabi-f1',
    name: 'Abu Dhabi F1 Grand Prix',
    emirate: 'abuDhabi',
    months: ['Nov', 'Dec'],
    category: 'sport',
    blurb:
      'The Formula 1 season finale unfolds at Yas Marina Circuit, where twilight racing, concert line-ups, and island hospitality create one of the sport\'s most atmospheric weekends. Even non-race days, the circuit district buzzes with fan zones, dining, and Ferrari World next door.',
    officialUrl: 'https://www.yasmarinacircuit.com',
  },
  {
    id: 'ramadan-eid',
    name: 'Ramadan & Eid',
    emirate: 'uae',
    dateVaries: true,
    months: [],
    category: 'religious',
    blurb:
      'The Islamic holy month reshapes daily rhythms across the Emirates — shorter work hours, evening iftar gatherings, and beautifully lit mosques. Eid al-Fitr and Eid al-Adha follow with public holidays, family visits, and festive markets; dates shift each year on the lunar calendar.',
    officialUrl: 'https://u.ae/en/information-and-services/public-holidays',
  },
  {
    id: 'dubai-food-festival',
    name: 'Dubai Food Festival',
    emirate: 'dubai',
    months: ['Feb', 'Mar'],
    category: 'festival',
    blurb:
      'A city-wide celebration of Dubai\'s dining scene, from street-food pop-ups and chef collaborations to hidden-gem restaurant weeks. Beach canteens, food trucks, and fine-dining tastings run in parallel, making it an easy season to plan a trip around new flavours.',
    officialUrl: 'https://www.visitdubai.com/en/events/dubai-food-festival',
  },
  {
    id: 'sharjah-light-festival',
    name: 'Sharjah Light Festival',
    emirate: 'sharjah',
    months: ['Feb'],
    category: 'cultural',
    blurb:
      'Historic facades, mosques, and cultural landmarks across Sharjah become canvases for large-scale light and projection art. Nightly installations draw families along the corniche and heritage quarters, pairing contemporary visuals with the emirate\'s reputation as the UAE\'s cultural capital.',
    officialUrl: 'https://www.sharjahevents.ae',
  },
  {
    id: 'al-dhafra-camel-festival',
    name: 'Al Dhafra Camel Festival',
    emirate: 'abuDhabi',
    months: ['Dec', 'Jan'],
    category: 'cultural',
    blurb:
      'A major celebration of Bedouin heritage west of Abu Dhabi, centred on camel beauty contests, traditional crafts, and desert culture. The festival draws breeders and visitors from across the Gulf, with auctions, poetry, and falconry alongside the main parade grounds.',
    officialUrl: 'https://www.visitabudhabi.ae/en/events',
  },
  {
    id: 'rak-fine-arts-festival',
    name: 'RAK Fine Arts Festival',
    emirate: 'rasAlKhaimah',
    months: ['Feb', 'Mar'],
    category: 'cultural',
    blurb:
      'Ras Al Khaimah\'s annual arts programme brings exhibitions, workshops, and performances to galleries and public spaces against a mountain-and-sea backdrop. Local and international artists feature across mediums, making it a strong reason to explore RAK beyond its adventure resorts.',
    officialUrl: 'https://visitrasalkhaimah.com',
  },
  {
    id: 'dubai-world-cup',
    name: 'Dubai World Cup',
    emirate: 'dubai',
    months: ['Mar'],
    category: 'sport',
    blurb:
      'One of the world\'s richest horse-racing nights caps the Dubai Racing Carnival at Meydan, with fashion, hospitality suites, and a global field of thoroughbreds. The evening builds to the main race under floodlights, drawing serious punters and first-time visitors alike.',
    officialUrl: 'https://www.dubaiworldcup.com',
  },
  {
    id: 'abu-dhabi-art',
    name: 'Abu Dhabi Art',
    emirate: 'abuDhabi',
    months: ['Nov'],
    category: 'cultural',
    blurb:
      'The capital\'s flagship contemporary art fair gathers galleries, collectors, and public programmes on Saadiyat Island and beyond. Talks, installations, and satellite exhibitions spill into the city, aligning with Abu Dhabi\'s growing museum district and cultural season.',
    officialUrl: 'https://abudhabiart.ae',
  },
  {
    id: 'uae-national-day',
    name: 'UAE National Day',
    emirate: 'uae',
    months: ['Dec'],
    category: 'festival',
    blurb:
      'On 2 December the country marks unification with parades, fireworks, and flag displays in every emirate. Public spaces fill with concerts and family activities; many venues extend celebrations across a long weekend of national pride.',
    officialUrl: 'https://u.ae/en/about-the-uae/the-uae-national-day',
  },
];

export function getCurrentMonthAbbr() {
  return EVENT_MONTHS[new Date().getMonth()];
}

/** @param {string} emirateKey */
export function getEventsForEmirate(emirateKey) {
  return events.filter(
    (event) => event.emirate === emirateKey || event.emirate === 'uae',
  );
}

/**
 * @param {{ emirate?: string, month?: string }} filters
 * @returns {UaeEvent[]}
 */
export function filterEvents({ emirate, month } = {}) {
  return events.filter((event) => {
    const emirateMatch =
      !emirate ||
      emirate === 'all' ||
      event.emirate === emirate ||
      (emirate !== 'uae' && event.emirate === 'uae');

    const monthMatch =
      !month ||
      month === 'all' ||
      event.dateVaries ||
      event.months.includes(month);

    return emirateMatch && monthMatch;
  });
}

/** @param {string} emirateKey */
export function getEmirateLabel(emirateKey) {
  if (emirateKey === 'uae') return 'All Emirates';
  const labels = {
    abuDhabi: 'Abu Dhabi',
    dubai: 'Dubai',
    sharjah: 'Sharjah',
    ajman: 'Ajman',
    ummAlQuwain: 'Umm Al Quwain',
    rasAlKhaimah: 'Ras Al Khaimah',
    fujairah: 'Fujairah',
  };
  return labels[emirateKey] ?? emirateKey;
}

/** @param {EventCategory} category */
export function getCategoryLabel(category) {
  const labels = {
    festival: 'Festival',
    sport: 'Sport',
    cultural: 'Cultural',
    religious: 'Religious',
    shopping: 'Shopping',
  };
  return labels[category] ?? category;
}
