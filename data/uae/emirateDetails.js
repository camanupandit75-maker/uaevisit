/** @typedef {{ label: string, value: string }} DetailRow */

/** @typedef {{ dish: string, description: string }} EatItem */

/** @typedef {{ name: string, description: string }} ActivityItem */

/** @typedef {{ category: string, activities: ActivityItem[] }} DoCategory */

/** @typedef {{ time: string, activity: string, note?: string }} ItineraryStop */

/** @typedef {{ day: number, title: string, stops: ItineraryStop[] }} ItineraryDay */

/** @typedef {{ days: number, blurb: string, schedule: ItineraryDay[] }} SuggestedItinerary */

/** @typedef {{
 *   name: string,
 *   area: string,
 *   score: number,
 *   reviews: number,
 *   pricePerNight: number,
 *   currency: 'AED',
 *   note?: string,
 * }} StayPick */

/** @typedef {{
 *   fiveStar: StayPick,
 *   fourStar: StayPick,
 *   threeStar: StayPick,
 *   value: StayPick,
 * }} Stays */

/** @typedef {{
 *   intro: string,
 *   overview: DetailRow[],
 *   stays: Stays,
 *   youtubeVideos: import('./youtubeVideos.js').YouTubeVideoTheme[],
 *   whatToEat: EatItem[],
 *   whatToDo: DoCategory[],
 *   suggestedItinerary?: SuggestedItinerary,
 * }} EmirateDetail */

/** @type {Record<string, EmirateDetail>} */
export const emirateDetails = {
  abuDhabi: {
    intro:
      'The largest emirate and seat of the federal capital, Abu Dhabi blends island resorts, desert landscapes, and world-class museums along the Arabian Gulf.',
    overview: [
      { label: 'Capital / Main City', value: 'Abu Dhabi City' },
      {
        label: 'Known For',
        value:
          'Cultural institutions, desert safaris, Yas Island, and the Liwa oasis dunes',
      },
      { label: 'Best Season', value: 'October – April (mild, dry weather)' },
    ],
    stays: {
      fiveStar: {
        name: 'Emirates Palace Mandarin Oriental',
        area: 'Corniche, Abu Dhabi',
        score: 9.5,
        reviews: 36578,
        pricePerNight: 1072,
        currency: 'AED',
        note: "The capital's flagship luxury landmark.",
      },
      fourStar: {
        name: 'Al Maha Arjaan by Rotana',
        area: 'Corniche Beach area',
        score: 8.9,
        reviews: 7805,
        pricePerNight: 225,
        currency: 'AED',
        note: 'Serviced apartments, strong value for the rating.',
      },
      threeStar: {
        name: 'ibis Abu Dhabi Gate',
        area: 'Near Sheikh Zayed Grand Mosque',
        score: 8.5,
        reviews: 20408,
        pricePerNight: 176,
        currency: 'AED',
        note: 'Reliable budget chain, well-reviewed.',
      },
      value: {
        name: 'Premier Inn Abu Dhabi Capital Centre',
        area: 'Capital Centre',
        score: 8.5,
        reviews: 19262,
        pricePerNight: 132,
        currency: 'AED',
        note: 'Best-reviewed budget pick in the capital.',
      },
    },
    youtubeVideos: [
      {
        theme: 'Start Here — Abu Dhabi Overview',
        blurb: 'The capital emirate — culture, islands, and the edge of the Empty Quarter.',
        videos: [
          {
            title: 'Abu Dhabi Travel Guide',
            url: 'https://www.youtube.com/results?search_query=abu+dhabi+travel+guide',
            type: 'search',
          },
          {
            title: 'Abu Dhabi City Tour',
            url: 'https://www.youtube.com/results?search_query=abu+dhabi+city+tour',
            type: 'search',
          },
        ],
      },
      {
        theme: 'Sheikh Zayed Grand Mosque',
        blurb: "One of the world's largest mosques and a defining landmark of the capital.",
        videos: [
          {
            title: 'Sheikh Zayed Grand Mosque Tour',
            url: 'https://www.youtube.com/results?search_query=sheikh+zayed+grand+mosque+tour',
            type: 'search',
          },
        ],
      },
      {
        theme: 'Louvre Abu Dhabi & Saadiyat Island',
        blurb: "The cultural district anchoring Abu Dhabi's museum island.",
        videos: [
          {
            title: 'Louvre Abu Dhabi',
            url: 'https://www.youtube.com/results?search_query=louvre+abu+dhabi',
            type: 'search',
          },
          {
            title: 'Saadiyat Island Guide',
            url: 'https://www.youtube.com/results?search_query=saadiyat+island+abu+dhabi',
            type: 'search',
          },
        ],
      },
      {
        theme: 'Yas Island',
        blurb: 'Ferrari World, Yas Waterworld, and the Yas Marina Circuit.',
        videos: [
          {
            title: 'Yas Island Travel Guide',
            url: 'https://www.youtube.com/results?search_query=yas+island+travel+guide',
            type: 'search',
          },
          {
            title: 'Ferrari World Abu Dhabi',
            url: 'https://www.youtube.com/results?search_query=ferrari+world+abu+dhabi',
            type: 'search',
          },
        ],
      },
      {
        theme: 'Corniche & Waterfront',
        blurb: "The capital's long waterfront promenade and skyline views.",
        videos: [
          {
            title: 'Abu Dhabi Corniche',
            url: 'https://www.youtube.com/results?search_query=abu+dhabi+corniche',
            type: 'search',
          },
          {
            title: 'Qasr Al Watan Palace',
            url: 'https://www.youtube.com/results?search_query=qasr+al+watan',
            type: 'search',
          },
        ],
      },
      {
        theme: 'Empty Quarter & Desert',
        blurb: "The Liwa Oasis and the edge of the Rub' al Khali — one of the world's great sand seas.",
        videos: [
          {
            title: 'Liwa Oasis Desert Guide',
            url: 'https://www.youtube.com/results?search_query=liwa+oasis+abu+dhabi',
            type: 'search',
          },
          {
            title: 'Empty Quarter Desert Safari',
            url: 'https://www.youtube.com/results?search_query=empty+quarter+desert+safari+uae',
            type: 'search',
          },
        ],
      },
      {
        theme: 'Food of Abu Dhabi',
        blurb: "Emirati cuisine and the city's international food scene.",
        videos: [
          {
            title: 'Abu Dhabi Food Tour',
            url: 'https://www.youtube.com/results?search_query=abu+dhabi+food+tour',
            type: 'search',
          },
          {
            title: 'Emirati Food Guide',
            url: 'https://www.youtube.com/results?search_query=emirati+food+guide',
            type: 'search',
          },
        ],
      },
    ],
    whatToEat: [
      { dish: 'Machboos', description: 'Spiced rice dish with meat or fish, the Emirati equivalent of biryani.' },
      { dish: 'Luqaimat', description: 'Sweet fried dumplings drizzled with date syrup, a Ramadan and everyday favorite.' },
      { dish: 'Balaleet', description: 'Sweet vermicelli with cardamom and saffron, traditionally topped with an omelet.' },
      { dish: 'Harees', description: 'A slow-cooked wheat and meat porridge, common at celebrations.' },
      { dish: 'Camel Meat Dishes', description: 'Grilled or slow-cooked camel meat, a traditional Bedouin protein.' },
    ],
    whatToDo: [
      {
        category: 'Culture',
        activities: [
          { name: 'Sheikh Zayed Grand Mosque', description: "Tour one of the world's largest mosques." },
          { name: 'Louvre Abu Dhabi', description: 'Explore the art museum on Saadiyat Island.' },
          { name: 'Qasr Al Watan', description: 'Visit the presidential palace, open to the public.' },
        ],
      },
      {
        category: 'Adventure',
        activities: [
          { name: 'Ferrari World', description: "Ride the world's fastest roller coaster on Yas Island." },
          { name: 'Desert Safari (Liwa/Empty Quarter)', description: 'Dune bashing and overnight desert camps.' },
          { name: 'Yas Waterworld', description: 'A full-day waterpark on Yas Island.' },
        ],
      },
      {
        category: 'Waterfront',
        activities: [
          { name: 'Corniche Walk or Cycle', description: "Stroll or bike along Abu Dhabi's long waterfront promenade." },
          { name: 'Mangrove Kayaking', description: "Paddle through Abu Dhabi's protected mangrove channels." },
        ],
      },
    ],
    suggestedItinerary: {
      days: 2,
      blurb: 'A two-day balance of grand monuments, island culture, and desert edge.',
      schedule: [
        {
          day: 1,
          title: 'Culture & Capital',
          stops: [
            { time: 'Morning', activity: 'Sheikh Zayed Grand Mosque', note: 'Go early to avoid crowds and the midday heat.' },
            { time: 'Afternoon', activity: 'Louvre Abu Dhabi & Saadiyat Island', note: 'Allow at least 2-3 hours for the museum.' },
            { time: 'Evening', activity: 'Corniche walk and waterfront dinner', note: 'Sunset views over the water.' },
          ],
        },
        {
          day: 2,
          title: 'Adventure & Desert',
          stops: [
            { time: 'Morning', activity: 'Qasr Al Watan presidential palace', note: '' },
            { time: 'Afternoon', activity: 'Yas Island — Ferrari World or Yas Waterworld', note: 'Pick one; both are full half-days.' },
            { time: 'Evening', activity: 'Desert safari toward Liwa or the Empty Quarter edge', note: 'Book an overnight camp if time allows.' },
          ],
        },
      ],
    },
  },
  dubai: {
    intro:
      'A cosmopolitan hub where historic creek-side souks meet record-setting towers, themed attractions, and a shoreline of beaches and marinas.',
    overview: [
      { label: 'Capital / Main City', value: 'Dubai City' },
      {
        label: 'Known For',
        value:
          'Skylines, shopping, desert experiences, and the Dubai Creek heritage quarter',
      },
      { label: 'Best Season', value: 'November – March (pleasant temperatures)' },
    ],
    stays: {
      fiveStar: {
        name: 'Sofitel Dubai Jumeirah Beach',
        area: 'Jumeirah Beach',
        score: 9.4,
        reviews: 47223,
        pricePerNight: 402,
        currency: 'AED',
        note: 'Beachfront, exceptional review volume and score.',
      },
      fourStar: {
        name: 'Crowne Plaza Dubai Marina by IHG',
        area: 'Dubai Marina',
        score: 9.6,
        reviews: 16834,
        pricePerNight: 303,
        currency: 'AED',
        note: 'Highest review score of any Dubai pick in this list.',
      },
      threeStar: {
        name: 'Rove Downtown',
        area: 'Downtown, near Burj Khalifa',
        score: 9.5,
        reviews: 43123,
        pricePerNight: 165,
        currency: 'AED',
        note: "Rove's design-led budget chain, consistently excellent reviews.",
      },
      value: {
        name: 'Citymax Hotel Al Barsha at the Mall',
        area: 'Al Barsha',
        score: 8.2,
        reviews: 16458,
        pricePerNight: 94,
        currency: 'AED',
        note: 'Cheapest solid-rated option found.',
      },
    },
    youtubeVideos: [
      {
        theme: 'Start Here — Dubai Overview',
        blurb: 'Global city of skylines, souks, and superlatives.',
        videos: [
          {
            title: 'Dubai Travel Guide',
            url: 'https://www.youtube.com/results?search_query=dubai+travel+guide',
            type: 'search',
          },
          {
            title: 'Dubai City Tour',
            url: 'https://www.youtube.com/results?search_query=dubai+city+tour',
            type: 'search',
          },
        ],
      },
      {
        theme: 'Burj Khalifa & Downtown',
        blurb: "The world's tallest building and the Dubai Fountain show.",
        videos: [
          {
            title: 'Burj Khalifa Tour',
            url: 'https://www.youtube.com/results?search_query=burj+khalifa+tour',
            type: 'search',
          },
          {
            title: 'Dubai Fountain Show',
            url: 'https://www.youtube.com/results?search_query=dubai+fountain+show',
            type: 'search',
          },
        ],
      },
      {
        theme: 'Burj Al Arab & Jumeirah',
        blurb: 'The sail-shaped icon of the Dubai coastline.',
        videos: [
          {
            title: 'Burj Al Arab Inside Tour',
            url: 'https://www.youtube.com/results?search_query=burj+al+arab+inside+tour',
            type: 'search',
          },
          {
            title: 'Jumeirah Beach Guide',
            url: 'https://www.youtube.com/results?search_query=jumeirah+beach+dubai',
            type: 'search',
          },
        ],
      },
      {
        theme: 'Old Dubai — Souks & Creek',
        blurb: 'Al Fahidi historic district, the gold and spice souks, and an abra ride across the Creek.',
        videos: [
          {
            title: 'Al Fahidi Historic District',
            url: 'https://www.youtube.com/results?search_query=al+fahidi+historic+district',
            type: 'search',
          },
          {
            title: 'Dubai Gold Souk',
            url: 'https://www.youtube.com/results?search_query=dubai+gold+souk',
            type: 'search',
          },
          {
            title: 'Dubai Creek Abra Ride',
            url: 'https://www.youtube.com/results?search_query=dubai+creek+abra+ride',
            type: 'search',
          },
        ],
      },
      {
        theme: 'Palm Jumeirah & Atlantis',
        blurb: 'The man-made island and its landmark resort.',
        videos: [
          {
            title: 'Palm Jumeirah Guide',
            url: 'https://www.youtube.com/results?search_query=palm+jumeirah+guide',
            type: 'search',
          },
          {
            title: 'Atlantis The Palm Tour',
            url: 'https://www.youtube.com/results?search_query=atlantis+the+palm+tour',
            type: 'search',
          },
        ],
      },
      {
        theme: 'Desert Safari & Adventure',
        blurb: 'Dune bashing, camel treks, and desert camps just outside the city.',
        videos: [
          {
            title: 'Dubai Desert Safari',
            url: 'https://www.youtube.com/results?search_query=dubai+desert+safari',
            type: 'search',
          },
          {
            title: 'Dubai Skydiving',
            url: 'https://www.youtube.com/results?search_query=dubai+skydiving',
            type: 'search',
          },
        ],
      },
      {
        theme: 'Food of Dubai',
        blurb: "From Emirati classics to one of the world's most international food scenes.",
        videos: [
          {
            title: 'Dubai Food Tour',
            url: 'https://www.youtube.com/results?search_query=dubai+food+tour',
            type: 'search',
          },
          {
            title: 'Old Dubai Street Food',
            url: 'https://www.youtube.com/results?search_query=old+dubai+street+food',
            type: 'search',
          },
        ],
      },
    ],
    whatToEat: [
      { dish: 'Shawarma', description: "Dubai's most ubiquitous street food, found everywhere from carts to fine dining." },
      { dish: 'Al Machboos', description: "Dubai's take on the Emirati spiced rice classic." },
      { dish: 'International Food Halls', description: "Dubai's food scene spans nearly every global cuisine — a defining trait of the city." },
      { dish: 'Karak Chai', description: 'Strong, sweet, cardamom-spiced tea sold at roadside karak stands across the city.' },
      { dish: 'Luqaimat', description: "Sweet date-syrup dumplings, widely available at Dubai's night markets." },
    ],
    whatToDo: [
      {
        category: 'Iconic Sights',
        activities: [
          { name: 'Burj Khalifa Observation Deck', description: "Views from the world's tallest building." },
          { name: 'Dubai Fountain Show', description: 'The choreographed fountain show at Burj Khalifa Lake.' },
          { name: 'Palm Jumeirah & Atlantis', description: 'Explore the man-made island and its landmark resort.' },
        ],
      },
      {
        category: 'Adventure',
        activities: [
          { name: 'Desert Safari & Dune Bashing', description: 'Off-road desert excursions just outside the city.' },
          { name: 'Skydive Dubai', description: 'Tandem skydiving over Palm Jumeirah.' },
          { name: 'Ski Dubai', description: 'Indoor skiing and snow play at Mall of the Emirates.' },
        ],
      },
      {
        category: 'Culture & Old Dubai',
        activities: [
          { name: 'Al Fahidi Historic District', description: "Wander Dubai's restored old quarter." },
          { name: 'Dubai Creek Abra Ride', description: 'Cross the creek on a traditional wooden boat.' },
          { name: 'Gold & Spice Souks', description: 'Browse the old trading markets of Deira.' },
        ],
      },
    ],
    suggestedItinerary: {
      days: 3,
      blurb: "Three days covering Dubai's icons, old town, and a desert day trip.",
      schedule: [
        {
          day: 1,
          title: 'Modern Dubai',
          stops: [
            { time: 'Morning', activity: 'Burj Khalifa observation deck', note: 'Book tickets in advance for sunset slots.' },
            { time: 'Afternoon', activity: 'Dubai Mall & Dubai Fountain', note: '' },
            { time: 'Evening', activity: 'Dubai Fountain Show', note: 'Shows run on a schedule — check times.' },
          ],
        },
        {
          day: 2,
          title: 'Old Dubai & Creek',
          stops: [
            { time: 'Morning', activity: 'Al Fahidi Historic District', note: '' },
            { time: 'Afternoon', activity: 'Gold & Spice Souks, abra ride across the Creek', note: '' },
            { time: 'Evening', activity: 'Jumeirah Beach & Burj Al Arab views', note: '' },
          ],
        },
        {
          day: 3,
          title: 'Desert & Palm',
          stops: [
            { time: 'Morning', activity: 'Palm Jumeirah & Atlantis The Palm', note: '' },
            { time: 'Afternoon', activity: 'Desert safari — dune bashing and camel rides', note: 'Most safaris run afternoon into evening.' },
            { time: 'Evening', activity: 'Desert camp dinner under the stars', note: '' },
          ],
        },
      ],
    },
  },
  sharjah: {
    intro:
      'Sharjah preserves Emirati heritage through museums, restored neighbourhoods, and a thriving arts scene — often called the cultural capital of the UAE.',
    overview: [
      { label: 'Capital / Main City', value: 'Sharjah City' },
      {
        label: 'Known For',
        value:
          'Heritage areas, art biennials, family museums, and the Al Noor Island waterfront',
      },
      { label: 'Best Season', value: 'October – April' },
    ],
    stays: {
      fiveStar: {
        name: 'The Chedi Al Bait, Sharjah',
        area: 'Heritage Area',
        score: 9.5,
        reviews: 3273,
        pricePerNight: 460,
        currency: 'AED',
        note: 'Restored heritage-house luxury hotel in the old quarter.',
      },
      fourStar: {
        name: 'DoubleTree by Hilton Sharjah Waterfront Hotel & Residences',
        area: 'Waterfront',
        score: 9.3,
        reviews: 7801,
        pricePerNight: 224,
        currency: 'AED',
      },
      threeStar: {
        name: 'ibis Styles Sharjah',
        area: 'City center',
        score: 8.5,
        reviews: 8539,
        pricePerNight: 123,
        currency: 'AED',
      },
      value: {
        name: 'TIME Express Hotel Al Khan',
        area: 'Al Khan',
        score: 8.4,
        reviews: 2412,
        pricePerNight: 112,
        currency: 'AED',
      },
    },
    youtubeVideos: [
      {
        theme: 'Start Here — Sharjah Overview',
        blurb: 'The cultural and heritage heart of the Emirates.',
        videos: [
          {
            title: 'Sharjah Travel Guide',
            url: 'https://www.youtube.com/results?search_query=sharjah+travel+guide',
            type: 'search',
          },
        ],
      },
      {
        theme: 'Heritage & Arts Areas',
        blurb: "Sharjah's restored old quarters, dedicated to museums and traditional architecture.",
        videos: [
          {
            title: 'Sharjah Heritage Area',
            url: 'https://www.youtube.com/results?search_query=sharjah+heritage+area',
            type: 'search',
          },
          {
            title: 'Sharjah Arts Area',
            url: 'https://www.youtube.com/results?search_query=sharjah+arts+area',
            type: 'search',
          },
        ],
      },
      {
        theme: 'Museums',
        blurb: 'Sharjah has more museums per capita than any other emirate.',
        videos: [
          {
            title: 'Sharjah Museum of Islamic Civilization',
            url: 'https://www.youtube.com/results?search_query=sharjah+museum+of+islamic+civilization',
            type: 'search',
          },
          {
            title: 'Sharjah Art Museum',
            url: 'https://www.youtube.com/results?search_query=sharjah+art+museum',
            type: 'search',
          },
        ],
      },
      {
        theme: 'Al Noor Island & Corniche',
        blurb: 'A small island known for its butterfly house and lakeside walks.',
        videos: [
          {
            title: 'Al Noor Island Sharjah',
            url: 'https://www.youtube.com/results?search_query=al+noor+island+sharjah',
            type: 'search',
          },
          {
            title: 'Sharjah Corniche',
            url: 'https://www.youtube.com/results?search_query=sharjah+corniche',
            type: 'search',
          },
        ],
      },
      {
        theme: 'Mleiha Desert',
        blurb: "Archaeological sites and stargazing in Sharjah's desert interior.",
        videos: [
          {
            title: 'Mleiha Desert Sharjah',
            url: 'https://www.youtube.com/results?search_query=mleiha+desert+sharjah',
            type: 'search',
          },
        ],
      },
      {
        theme: 'Food of Sharjah',
        blurb: 'A quieter, more traditional food scene than nearby Dubai.',
        videos: [
          {
            title: 'Sharjah Food Tour',
            url: 'https://www.youtube.com/results?search_query=sharjah+food+tour',
            type: 'search',
          },
        ],
      },
    ],
    whatToEat: [
      { dish: 'Emirati Thali-style Spreads', description: "Sharjah's restaurants lean more traditional than Dubai's, with classic Gulf home cooking." },
      { dish: 'Machboos', description: "The Emirati spiced rice staple, found across Sharjah's family restaurants." },
      { dish: 'Regag Bread', description: 'A thin, crispy Emirati flatbread, often served with cheese or egg.' },
      { dish: 'Karak Chai', description: 'A Sharjah café staple, best enjoyed in the old heritage area.' },
    ],
    whatToDo: [
      {
        category: 'Culture',
        activities: [
          { name: 'Sharjah Museum of Islamic Civilization', description: "One of the region's best collections of Islamic art and artifacts." },
          { name: 'Heritage & Arts Areas', description: "Walk through Sharjah's restored historic quarters." },
          { name: 'Sharjah Art Foundation', description: 'Contemporary art spaces spread across converted heritage buildings.' },
        ],
      },
      {
        category: 'Nature',
        activities: [
          { name: 'Al Noor Island', description: 'Visit the butterfly house and lakeside gardens.' },
          { name: 'Mleiha Desert', description: "Archaeology, dune drives, and stargazing in Sharjah's interior." },
        ],
      },
    ],
    suggestedItinerary: {
      days: 2,
      blurb: "Two days centered on Sharjah's museums and heritage areas.",
      schedule: [
        {
          day: 1,
          title: 'Heritage & Museums',
          stops: [
            { time: 'Morning', activity: 'Sharjah Heritage Area', note: '' },
            { time: 'Afternoon', activity: 'Sharjah Museum of Islamic Civilization', note: '' },
            { time: 'Evening', activity: 'Al Noor Island & Corniche walk', note: '' },
          ],
        },
        {
          day: 2,
          title: 'Arts & Desert',
          stops: [
            { time: 'Morning', activity: 'Sharjah Arts Area & Art Museum', note: '' },
            { time: 'Afternoon', activity: 'Mleiha Desert excursion', note: 'Combine with a guided archaeology tour if available.' },
            { time: 'Evening', activity: 'Stargazing at Mleiha', note: "Sharjah's desert interior has some of the region's darkest skies." },
          ],
        },
      ],
    },
  },
  ajman: {
    intro:
      'Compact and unhurried, Ajman offers a relaxed corniche, a historic fort, and easy access to the wider northern emirates.',
    overview: [
      { label: 'Capital / Main City', value: 'Ajman City' },
      {
        label: 'Known For',
        value: 'Corniche walks, Ajman Museum, and mangrove kayaking nearby',
      },
      { label: 'Best Season', value: 'October – April' },
    ],
    stays: {
      fiveStar: {
        name: 'Ajman Saray, a Luxury Collection Resort',
        area: 'Ajman Corniche',
        score: 9.0,
        reviews: 8135,
        pricePerNight: 367,
        currency: 'AED',
        note: "Ajman's flagship beach resort.",
      },
      fourStar: {
        name: 'Wyndham Garden Ajman Corniche',
        area: 'Corniche',
        score: 9.1,
        reviews: 7501,
        pricePerNight: 233,
        currency: 'AED',
      },
      threeStar: {
        name: 'Onyx Hotel Apartments',
        area: 'Ajman city',
        score: 7.6,
        reviews: 1524,
        pricePerNight: 114,
        currency: 'AED',
        note: "Ajman's 3-star inventory is thin — this is the best-reviewed option available, not a standout.",
      },
      value: {
        name: 'Al Smou Hotel Apartments',
        area: 'Ajman city',
        score: 7.4,
        reviews: 1148,
        pricePerNight: 90,
        currency: 'AED',
        note: "Budget pick; modest reviews reflect Ajman's smaller hotel market.",
      },
    },
    youtubeVideos: [
      {
        theme: 'Start Here — Ajman Overview',
        blurb: 'The smallest emirate, with a quiet corniche and old harbour.',
        videos: [
          {
            title: 'Ajman Travel Guide',
            url: 'https://www.youtube.com/results?search_query=ajman+travel+guide',
            type: 'search',
          },
        ],
      },
      {
        theme: 'Corniche & Beach',
        blurb: "A relaxed waterfront stretch, quieter than Dubai's.",
        videos: [
          {
            title: 'Ajman Corniche',
            url: 'https://www.youtube.com/results?search_query=ajman+corniche',
            type: 'search',
          },
          {
            title: 'Ajman Beach',
            url: 'https://www.youtube.com/results?search_query=ajman+beach',
            type: 'search',
          },
        ],
      },
      {
        theme: 'Ajman Museum & Old Town',
        blurb: 'An 18th-century fort turned museum, and the old harbour district.',
        videos: [
          {
            title: 'Ajman Museum',
            url: 'https://www.youtube.com/results?search_query=ajman+museum',
            type: 'search',
          },
          {
            title: 'Ajman Old Town',
            url: 'https://www.youtube.com/results?search_query=ajman+old+town',
            type: 'search',
          },
        ],
      },
      {
        theme: "Masfout (Ajman's Exclave)",
        blurb: 'A small mountain exclave belonging to Ajman, inland near the Hajar foothills.',
        videos: [
          {
            title: 'Masfout Ajman',
            url: 'https://www.youtube.com/results?search_query=masfout+ajman',
            type: 'search',
          },
        ],
      },
      {
        theme: 'Food of Ajman',
        blurb: 'Simple, local seafood and Emirati fare along the corniche.',
        videos: [
          {
            title: 'Ajman Food Tour',
            url: 'https://www.youtube.com/results?search_query=ajman+food+tour',
            type: 'search',
          },
        ],
      },
    ],
    whatToEat: [
      { dish: 'Fresh Seafood', description: "Ajman's corniche restaurants serve some of the freshest catch in the northern Emirates." },
      { dish: 'Machboos', description: 'The Emirati spiced rice classic, widely available along the waterfront.' },
      { dish: 'Grilled Fish', description: 'Simple, locally caught grilled fish is an Ajman specialty.' },
    ],
    whatToDo: [
      {
        category: 'Waterfront',
        activities: [
          { name: 'Ajman Corniche', description: 'A relaxed walk or cycle along the waterfront.' },
          { name: 'Ajman Beach', description: "A quieter alternative to Dubai's busier beaches." },
        ],
      },
      {
        category: 'Culture',
        activities: [
          { name: 'Ajman Museum', description: "Housed in an 18th-century fort, covering the emirate's history." },
          { name: 'Ajman Old Town', description: 'Explore the old harbour district.' },
        ],
      },
    ],
    suggestedItinerary: {
      days: 1,
      blurb: "Ajman's small scale makes it an easy single-day visit.",
      schedule: [
        {
          day: 1,
          title: 'Corniche & Old Town',
          stops: [
            { time: 'Morning', activity: 'Ajman Museum (the old fort)', note: '' },
            { time: 'Afternoon', activity: 'Ajman Corniche & Old Town harbour', note: '' },
            { time: 'Evening', activity: 'Ajman Beach sunset', note: '' },
          ],
        },
      ],
    },
  },
  ummAlQuwain: {
    intro:
      'The quietest of the seven emirates, Umm Al Quwain is shaped by lagoons, mangroves, and low-key coastal escapes away from the main tourist trail.',
    overview: [
      { label: 'Capital / Main City', value: 'Umm Al Quwain City' },
      {
        label: 'Known For',
        value: 'Mangrove creeks, birdwatching, and laid-back waterfront time',
      },
      { label: 'Best Season', value: 'November – March' },
    ],
    stays: {
      fiveStar: {
        name: 'Vida Beach Resort Umm Al Quwain',
        area: 'UAQ Beach',
        score: 9.2,
        reviews: 7210,
        pricePerNight: 202,
        currency: 'AED',
        note: 'The clear standout property in this emirate.',
      },
      fourStar: {
        name: 'Umm Al Quwain Beach Hotel',
        area: 'City center',
        score: 7.8,
        reviews: 947,
        pricePerNight: 411,
        currency: 'AED',
        note: 'Only 4-star option found in UAQ — limited inventory, included for completeness rather than as a strong recommendation.',
      },
      threeStar: {
        name: 'Barracuda Beach Resort',
        area: 'Al Salam Resort area',
        score: 8.4,
        reviews: 3688,
        pricePerNight: 252,
        currency: 'AED',
        note: 'Better-reviewed than the 4-star listed above.',
      },
      value: {
        name: 'Royal Residence Hotel Apartments',
        area: 'UAQ',
        score: 6.8,
        reviews: 570,
        pricePerNight: 180,
        currency: 'AED',
        note: "Weakest-reviewed pick in this dataset — UAQ's budget tier is genuinely limited; consider pairing UAQ as a day trip from Sharjah/Ajman rather than an overnight stay if this is a concern.",
      },
    },
    youtubeVideos: [
      {
        theme: 'Start Here — Umm Al Quwain Overview',
        blurb: 'Lagoons, mangroves, and unhurried coastal calm.',
        videos: [
          {
            title: 'Umm Al Quwain Travel Guide',
            url: 'https://www.youtube.com/results?search_query=umm+al+quwain+travel+guide',
            type: 'search',
          },
        ],
      },
      {
        theme: 'Lagoon & Mangroves',
        blurb: "Kayaking and birdwatching through UAQ's mangrove channels.",
        videos: [
          {
            title: 'Umm Al Quwain Mangroves',
            url: 'https://www.youtube.com/results?search_query=umm+al+quwain+mangroves',
            type: 'search',
          },
          {
            title: 'UAQ Lagoon Kayaking',
            url: 'https://www.youtube.com/results?search_query=umm+al+quwain+lagoon+kayaking',
            type: 'search',
          },
        ],
      },
      {
        theme: 'Dreamland Aqua Park & Beaches',
        blurb: "One of the UAE's older waterparks, plus quiet stretches of coastline.",
        videos: [
          {
            title: 'Dreamland Aqua Park',
            url: 'https://www.youtube.com/results?search_query=dreamland+aqua+park+uaq',
            type: 'search',
          },
        ],
      },
      {
        theme: 'Old Town & Heritage',
        blurb: "Falaj Al Mualla and UAQ's smaller, quieter old town.",
        videos: [
          {
            title: 'Umm Al Quwain Old Town',
            url: 'https://www.youtube.com/results?search_query=umm+al+quwain+old+town',
            type: 'search',
          },
        ],
      },
      {
        theme: 'Food of Umm Al Quwain',
        blurb: "Local seafood from one of the UAE's quieter fishing communities.",
        videos: [
          {
            title: 'Umm Al Quwain Food',
            url: 'https://www.youtube.com/results?search_query=umm+al+quwain+food',
            type: 'search',
          },
        ],
      },
    ],
    whatToEat: [
      { dish: 'Fresh Lagoon Seafood', description: "UAQ's calm lagoon waters support a strong local fishing tradition." },
      { dish: 'Machboos', description: "The Emirati spiced rice staple, found in UAQ's small family-run restaurants." },
      { dish: 'Grilled Hammour', description: 'A prized local Gulf fish, often grilled simply with lemon and spices.' },
    ],
    whatToDo: [
      {
        category: 'Nature & Water',
        activities: [
          { name: 'Mangrove Kayaking', description: "Paddle through UAQ's lagoon and mangrove channels." },
          { name: 'Birdwatching', description: "UAQ's wetlands attract a wide range of migratory birds." },
        ],
      },
      {
        category: 'Adventure',
        activities: [
          { name: 'Dreamland Aqua Park', description: "One of the UAE's longer-running waterparks." },
          { name: 'Jet Skiing on the Lagoon', description: 'Calm, sheltered lagoon waters good for watersports.' },
        ],
      },
    ],
    suggestedItinerary: {
      days: 1,
      blurb: 'A relaxed day of lagoon and nature, best paired with a neighboring emirate.',
      schedule: [
        {
          day: 1,
          title: 'Lagoon & Nature',
          stops: [
            { time: 'Morning', activity: 'Mangrove kayaking on the lagoon', note: 'Calmest water early in the day.' },
            { time: 'Afternoon', activity: 'Umm Al Quwain Old Town', note: '' },
            { time: 'Evening', activity: 'Quiet beach time away from the crowds', note: '' },
          ],
        },
      ],
    },
  },
  rasAlKhaimah: {
    intro:
      'Backed by the Hajar Mountains and fronted by Gulf beaches, Ras Al Khaimah draws visitors for hiking, wadis, heritage forts, and adventure resorts.',
    overview: [
      { label: 'Capital / Main City', value: 'Ras Al Khaimah City' },
      {
        label: 'Known For',
        value:
          'Jebel Jais, mountain trails, Dhayah Fort, and beach-and-spa getaways',
      },
      { label: 'Best Season', value: 'October – April (cooler in the mountains)' },
    ],
    stays: {
      fiveStar: {
        name: 'Anantara Mina Ras Al Khaimah Resort',
        area: 'Mina Al Arab',
        score: 9.4,
        reviews: 6855,
        pricePerNight: 539,
        currency: 'AED',
        note: 'Top-scoring property in RAK.',
      },
      fourStar: {
        name: 'Hampton by Hilton Marjan Island',
        area: 'Al Marjan Island',
        score: 8.9,
        reviews: 14769,
        pricePerNight: 200,
        currency: 'AED',
      },
      threeStar: {
        name: 'Action Hotel Ras Al Khaimah',
        area: 'City center',
        score: 8.0,
        reviews: 4646,
        pricePerNight: 109,
        currency: 'AED',
        note: "Best-reviewed 3-star found; RAK's 3-star tier is otherwise weak.",
      },
      value: {
        name: 'SH Hotel',
        area: 'City center',
        score: 5.4,
        reviews: 1730,
        pricePerNight: 79,
        currency: 'AED',
        note: 'Cheapest option found, but low-scoring — flagged as budget-only, not a quality pick.',
      },
    },
    youtubeVideos: [
      {
        theme: 'Start Here — Ras Al Khaimah Overview',
        blurb: 'Mountains, the Hajar peaks, and adventure tourism.',
        videos: [
          {
            title: 'Ras Al Khaimah Travel Guide',
            url: 'https://www.youtube.com/results?search_query=ras+al+khaimah+travel+guide',
            type: 'search',
          },
        ],
      },
      {
        theme: 'Jebel Jais',
        blurb: "The UAE's highest peak, home to the world's longest zipline.",
        videos: [
          {
            title: 'Jebel Jais Zipline',
            url: 'https://www.youtube.com/results?search_query=jebel+jais+zipline',
            type: 'search',
          },
          {
            title: 'Jebel Jais Mountain Guide',
            url: 'https://www.youtube.com/results?search_query=jebel+jais+travel+guide',
            type: 'search',
          },
        ],
      },
      {
        theme: 'Beaches & Resorts',
        blurb: "A quieter, more laid-back coastline than Dubai's.",
        videos: [
          {
            title: 'Ras Al Khaimah Beaches',
            url: 'https://www.youtube.com/results?search_query=ras+al+khaimah+beaches',
            type: 'search',
          },
          {
            title: 'Al Marjan Island',
            url: 'https://www.youtube.com/results?search_query=al+marjan+island+ras+al+khaimah',
            type: 'search',
          },
        ],
      },
      {
        theme: 'Old Town & Dhayah Fort',
        blurb: "RAK's historic old town and the hilltop ruins of Dhayah Fort.",
        videos: [
          {
            title: 'Dhayah Fort',
            url: 'https://www.youtube.com/results?search_query=dhayah+fort+ras+al+khaimah',
            type: 'search',
          },
          {
            title: 'Ras Al Khaimah Old Town',
            url: 'https://www.youtube.com/results?search_query=ras+al+khaimah+old+town',
            type: 'search',
          },
        ],
      },
      {
        theme: 'Food of Ras Al Khaimah',
        blurb: "Mountain and coastal influences both show up in RAK's food scene.",
        videos: [
          {
            title: 'Ras Al Khaimah Food Tour',
            url: 'https://www.youtube.com/results?search_query=ras+al+khaimah+food+tour',
            type: 'search',
          },
        ],
      },
    ],
    whatToEat: [
      { dish: 'Mountain & Coastal Fusion', description: "RAK's food scene blends Hajar Mountain produce with Gulf seafood." },
      { dish: 'Machboos', description: "The Emirati spiced rice staple, served across RAK's local restaurants." },
      { dish: 'Dates & Local Honey', description: "RAK's farms produce some of the UAE's best dates and mountain honey." },
    ],
    whatToDo: [
      {
        category: 'Adventure',
        activities: [
          { name: 'Jebel Jais Zipline', description: "Ride the world's longest zipline down the UAE's highest peak." },
          { name: 'Via Ferrata & Hiking', description: 'Climbing routes and hiking trails on Jebel Jais.' },
          { name: 'Dune Bashing & Desert Camps', description: "Desert excursions in RAK's interior." },
        ],
      },
      {
        category: 'Culture',
        activities: [
          { name: 'Dhayah Fort', description: 'Climb to the hilltop ruins overlooking the plains.' },
          { name: 'Ras Al Khaimah Old Town', description: "Explore the emirate's historic core." },
        ],
      },
      {
        category: 'Beach',
        activities: [
          { name: 'Al Marjan Island Beaches', description: "RAK's man-made island with resort beaches." },
        ],
      },
    ],
    suggestedItinerary: {
      days: 2,
      blurb: 'Two days split between mountain adventure and the coast.',
      schedule: [
        {
          day: 1,
          title: 'Mountains',
          stops: [
            { time: 'Morning', activity: 'Drive up to Jebel Jais', note: '' },
            { time: 'Afternoon', activity: 'Jebel Jais Zipline or Via Ferrata', note: 'Book the zipline ahead — slots fill up.' },
            { time: 'Evening', activity: 'Dhayah Fort at sunset', note: '' },
          ],
        },
        {
          day: 2,
          title: 'Coast & Heritage',
          stops: [
            { time: 'Morning', activity: 'Ras Al Khaimah Old Town', note: '' },
            { time: 'Afternoon', activity: 'Al Marjan Island beaches', note: '' },
            { time: 'Evening', activity: 'Waterfront dinner on Al Marjan', note: '' },
          ],
        },
      ],
    },
  },
  fujairah: {
    intro:
      'On the Gulf of Oman east coast, Fujairah is the emirate of rugged wadis, historic forts, and coral reefs — a contrast to the western Gulf shoreline.',
    overview: [
      { label: 'Capital / Main City', value: 'Fujairah City' },
      {
        label: 'Known For',
        value:
          'East-coast diving, Al-Bidyah Mosque, Hajar wadis, and Friday market towns',
      },
      { label: 'Best Season', value: 'October – May (best for diving and hiking)' },
    ],
    stays: {
      fiveStar: {
        name: 'Palace Beach Resort Fujairah',
        area: 'Fujairah Beach',
        score: 9.3,
        reviews: 5131,
        pricePerNight: 314,
        currency: 'AED',
      },
      fourStar: {
        name: 'Nour Arjaan by Rotana',
        area: 'City center',
        score: 8.9,
        reviews: 4067,
        pricePerNight: 241,
        currency: 'AED',
      },
      threeStar: {
        name: 'City Tower Hotel',
        area: 'City center',
        score: 7.1,
        reviews: 6756,
        pricePerNight: 118,
        currency: 'AED',
        note: "Highest review volume among Fujairah's 3-star options.",
      },
      value: {
        name: 'Clifton International Hotel',
        area: 'City center',
        score: 6.3,
        reviews: 2232,
        pricePerNight: 80,
        currency: 'AED',
        note: 'Cheapest pick; modest score.',
      },
    },
    youtubeVideos: [
      {
        theme: 'Start Here — Fujairah Overview',
        blurb: 'The east coast, the Gulf of Oman, and diving reefs.',
        videos: [
          {
            title: 'Fujairah Travel Guide',
            url: 'https://www.youtube.com/results?search_query=fujairah+travel+guide',
            type: 'search',
          },
        ],
      },
      {
        theme: 'Diving & Snorkeling',
        blurb: "Fujairah's Gulf of Oman coastline is the UAE's main diving hub.",
        videos: [
          {
            title: 'Fujairah Diving Guide',
            url: 'https://www.youtube.com/results?search_query=fujairah+diving+guide',
            type: 'search',
          },
          {
            title: 'Snoopy Island Fujairah',
            url: 'https://www.youtube.com/results?search_query=snoopy+island+fujairah',
            type: 'search',
          },
        ],
      },
      {
        theme: 'Al Bidya Mosque',
        blurb: 'Believed to be the oldest mosque in the UAE.',
        videos: [
          {
            title: 'Al Bidya Mosque',
            url: 'https://www.youtube.com/results?search_query=al+bidya+mosque+fujairah',
            type: 'search',
          },
        ],
      },
      {
        theme: 'Fujairah Fort & Heritage Village',
        blurb: 'The hilltop fort overlooking the old town, and a recreated traditional village nearby.',
        videos: [
          {
            title: 'Fujairah Fort',
            url: 'https://www.youtube.com/results?search_query=fujairah+fort',
            type: 'search',
          },
          {
            title: 'Fujairah Heritage Village',
            url: 'https://www.youtube.com/results?search_query=fujairah+heritage+village',
            type: 'search',
          },
        ],
      },
      {
        theme: 'Wadi Wurayah',
        blurb: "The UAE's first protected mountain reserve, with rare year-round waterfalls.",
        videos: [
          {
            title: 'Wadi Wurayah National Park',
            url: 'https://www.youtube.com/results?search_query=wadi+wurayah+national+park',
            type: 'search',
          },
        ],
      },
      {
        theme: 'Food of Fujairah',
        blurb: 'Fresh seafood from the east coast, distinct from the Gulf-side emirates.',
        videos: [
          {
            title: 'Fujairah Food Tour',
            url: 'https://www.youtube.com/results?search_query=fujairah+food+tour',
            type: 'search',
          },
        ],
      },
    ],
    whatToEat: [
      { dish: 'Fresh Gulf of Oman Seafood', description: "Fujairah's east-coast waters yield some of the UAE's best fresh fish." },
      { dish: 'Machboos', description: "The Emirati spiced rice staple, common across Fujairah's coastal towns." },
      { dish: 'Grilled Kingfish', description: 'A local favorite, often grilled whole and served with rice and lime.' },
    ],
    whatToDo: [
      {
        category: 'Diving & Water',
        activities: [
          { name: 'Snoopy Island Snorkeling', description: "One of the UAE's most popular snorkel spots." },
          { name: 'Scuba Diving', description: "Fujairah is the UAE's main diving hub on the Gulf of Oman." },
        ],
      },
      {
        category: 'Culture',
        activities: [
          { name: 'Al Bidya Mosque', description: 'Believed to be the oldest mosque in the UAE.' },
          { name: 'Fujairah Fort', description: 'A hilltop fort overlooking the old town.' },
          { name: 'Heritage Village', description: 'A recreated traditional Emirati village.' },
        ],
      },
      {
        category: 'Nature',
        activities: [
          { name: 'Wadi Wurayah National Park', description: "The UAE's first protected mountain reserve, with rare waterfalls." },
        ],
      },
    ],
    suggestedItinerary: {
      days: 2,
      blurb: "Two days for the east coast's diving and heritage sites.",
      schedule: [
        {
          day: 1,
          title: 'Diving & Coast',
          stops: [
            { time: 'Morning', activity: 'Snorkeling at Snoopy Island', note: '' },
            { time: 'Afternoon', activity: 'Scuba diving trip', note: 'Book ahead with a local dive operator.' },
            { time: 'Evening', activity: 'Fujairah Corniche', note: '' },
          ],
        },
        {
          day: 2,
          title: 'Heritage & Nature',
          stops: [
            { time: 'Morning', activity: 'Al Bidya Mosque', note: 'Believed to be the oldest mosque in the UAE.' },
            { time: 'Afternoon', activity: 'Fujairah Fort & Heritage Village', note: '' },
            { time: 'Evening', activity: 'Wadi Wurayah National Park', note: 'Good light for photos in late afternoon.' },
          ],
        },
      ],
    },
  },
};
