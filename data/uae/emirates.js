/** @typedef {'gold' | 'oasis' | 'sand'} EmirateTint */

/** @typedef {{
 *   key: string,
 *   name: string,
 *   nameAr: string,
 *   index: string,
 *   tint: EmirateTint,
 *   blurb: string,
 * }} Emirate */

/** @type {Emirate[]} */
export const emirates = [
  {
    key: 'abuDhabi',
    name: 'Abu Dhabi',
    nameAr: 'أبو ظبي',
    index: '01',
    tint: 'gold',
    blurb: 'Capital of culture, islands, and the vast Empty Quarter desert.',
  },
  {
    key: 'dubai',
    name: 'Dubai',
    nameAr: 'دبي',
    index: '02',
    tint: 'oasis',
    blurb: 'Global city of skylines, souks, and superlatives.',
  },
  {
    key: 'sharjah',
    name: 'Sharjah',
    nameAr: 'الشارقة',
    index: '03',
    tint: 'sand',
    blurb: 'The cultural and heritage heart of the Emirates.',
  },
  {
    key: 'ajman',
    name: 'Ajman',
    nameAr: 'عجمان',
    index: '04',
    tint: 'gold',
    blurb: 'The smallest emirate, with a quiet corniche and old harbour.',
  },
  {
    key: 'ummAlQuwain',
    name: 'Umm Al Quwain',
    nameAr: 'أم القيوين',
    index: '05',
    tint: 'oasis',
    blurb: 'Lagoons, mangroves, and unhurried coastal calm.',
  },
  {
    key: 'rasAlKhaimah',
    name: 'Ras Al Khaimah',
    nameAr: 'رأس الخيمة',
    index: '06',
    tint: 'sand',
    blurb: 'Mountains, the Hajar peaks, and adventure tourism.',
  },
  {
    key: 'fujairah',
    name: 'Fujairah',
    nameAr: 'الفجيرة',
    index: '07',
    tint: 'gold',
    blurb: 'The east coast, the Gulf of Oman, and diving reefs.',
  },
];

export const emirateIndexByKey = Object.fromEntries(
  emirates.map((e, i) => [e.key, i]),
);
