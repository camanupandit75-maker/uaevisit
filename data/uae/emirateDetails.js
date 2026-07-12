/** @typedef {{ label: string, value: string }} DetailRow */

/** @typedef {{ dish: string, description: string }} EatItem */

/** @typedef {{ name: string, description: string }} ActivityItem */

/** @typedef {{ category: string, activities: ActivityItem[] }} DoCategory */

/** @typedef {{
 *   name: string,
 *   description: string,
 *   website: string,
 *   label: string,
 * }} AdventureActivity */

/** @typedef {{
 *   name: string,
 *   activities: AdventureActivity[],
 * }} AdventureCategory */

/** @typedef {{
 *   intro: string,
 *   categories: AdventureCategory[],
 * }} Adventures */

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
 *   officialWebsite: string | null,
 *   note?: string,
 * }} StayPick */

/** @typedef {{
 *   fiveStar: StayPick,
 *   fourStar: StayPick,
 *   threeStar: StayPick,
 *   value: StayPick,
 * }} Stays */

/** @typedef {{
 *   name: string,
 *   vibe: string,
 *   bestFor: string,
 *   highlights: string[],
 *   stayHere: boolean,
 * }} Neighborhood */

/** @typedef {'attraction' | 'hotel' | 'food'} MapPinType */

/** @typedef {{
 *   name: string,
 *   lat: number,
 *   lng: number,
 *   type: MapPinType,
 * }} MapPin */

/** @typedef {{
 *   intro: string,
 *   overview: DetailRow[],
 *   stays: Stays,
 *   youtubeVideos: import('./youtubeVideos.js').YouTubeVideoTheme[],
 *   whatToEat: EatItem[],
 *   whatToDo: DoCategory[],
 *   adventures?: Adventures,
 *   suggestedItinerary?: SuggestedItinerary,
 *   neighborhoods: Neighborhood[],
 *   mapPins: MapPin[],
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
        officialWebsite:
          'https://www.mandarinoriental.com/en/abu-dhabi/emirates-palace',
        note: "The capital's flagship luxury landmark.",
      },
      fourStar: {
        name: 'Al Maha Arjaan by Rotana',
        area: 'Corniche Beach area',
        score: 8.9,
        reviews: 7805,
        pricePerNight: 225,
        currency: 'AED',
        officialWebsite:
          'https://www.rotana.com/arjaanhotelapartments/unitedarabemirates/abudhabi/almahaarjaanbyrotana',
        note: 'Serviced apartments, strong value for the rating.',
      },
      threeStar: {
        name: 'ibis Abu Dhabi Gate',
        area: 'Near Sheikh Zayed Grand Mosque',
        score: 8.5,
        reviews: 20408,
        pricePerNight: 176,
        currency: 'AED',
        officialWebsite: 'https://all.accor.com/hotel/6949/index.en.shtml',
        note: 'Reliable budget chain, well-reviewed.',
      },
      value: {
        name: 'Premier Inn Abu Dhabi Capital Centre',
        area: 'Capital Centre',
        score: 8.5,
        reviews: 19262,
        pricePerNight: 132,
        currency: 'AED',
        officialWebsite:
          'https://mena.premierinn.com/en/hotel-directory/abu-dhabi/abu-dhabi-capital-centre-hotel/',
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
    adventures: {
      intro:
        "Abu Dhabi's adventure scene spans skydiving over the desert, F1-circuit driving, mangrove kayaking, and the vast dunes of the Empty Quarter's edge at Liwa.",
      categories: [
        {
          name: 'Sky & Air',
          activities: [
            {
              name: 'Tandem Skydiving',
              description:
                "Jump from 13,000ft over Abu Dhabi's desert landscape with a certified tandem instructor.",
              website: 'https://abudhabiskydive.com/',
              label: 'Book Now',
            },
          ],
        },
        {
          name: 'Motorsport',
          activities: [
            {
              name: 'Formula Yas 3000 — F1 Circuit Drive',
              description:
                'Drive a real single-seat race car with F1-style paddle shifts on the Abu Dhabi Grand Prix circuit at Yas Marina.',
              website: 'https://www.yasmarinacircuit.com/en/experience',
              label: 'Book Now',
            },
          ],
        },
        {
          name: 'Water & Mangroves',
          activities: [
            {
              name: 'Mangrove Kayaking — Jubail & Eastern Mangroves',
              description:
                "Guided kayak tours through Abu Dhabi's protected mangrove forests, including full-moon and sunset sessions.",
              website: 'https://mws.ae/',
              label: 'Book Now',
            },
            {
              name: 'Kayaking & Eco-Tours — Noukhada',
              description:
                'A pioneer of Abu Dhabi kayaking: mangrove tours, island explorations, SUP, and sailing from AED 150.',
              website: 'https://noukhada.ae/',
              label: 'Explore',
            },
          ],
        },
        {
          name: 'Desert',
          activities: [
            {
              name: 'Liwa Desert Safari & Dune Bashing',
              description:
                "4x4 dune bashing and overnight camping on the edge of the Rub' al Khali (Empty Quarter) — the most dramatic desert in the UAE.",
              website:
                'https://visitabudhabi.ae/en/what-to-do/outdoor-activities/desert-safaris',
              label: 'Discover',
            },
          ],
        },
      ],
    },
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

    neighborhoods: [
      {
        name: 'Corniche',
        vibe: 'Sweeping waterfront promenade with parks, beaches, and grand hotels.',
        bestFor: 'First-time visitors who want the classic capital skyline and sea views.',
        highlights: ['Corniche Beach', 'Emirates Palace views', 'Heritage Village', 'Evening cycling paths'],
        stayHere: true,
      },
      {
        name: 'Saadiyat',
        vibe: 'Cultural island of museums, galleries, and upscale beach resorts.',
        bestFor: 'Art lovers and slow-paced stays near Louvre Abu Dhabi.',
        highlights: ['Louvre Abu Dhabi', 'Saadiyat Beach', 'Manarat Al Saadiyat', 'Golf courses'],
        stayHere: true,
      },
      {
        name: 'Yas Island',
        vibe: 'Entertainment hub built around theme parks, a marina, and the F1 circuit.',
        bestFor: 'Families, thrill-seekers, and Grand Prix weekend visitors.',
        highlights: ['Ferrari World', 'Yas Waterworld', 'Warner Bros. World', 'Yas Marina Circuit'],
        stayHere: true,
      },
      {
        name: 'Al Reem',
        vibe: 'Modern island district of towers, malls, and marina walkways.',
        bestFor: 'Business travellers and longer stays with mall-and-dining convenience.',
        highlights: ['Reem Mall', 'Marina promenade', 'Canal views', 'Reem Central Park'],
        stayHere: false,
      },
      {
        name: 'Downtown / Al Markaziyah',
        vibe: 'The administrative heart — government quarter, souks, and city-center energy.',
        bestFor: 'Exploring the capital on foot and pairing museums with local dining.',
        highlights: ['Qasr Al Hosn', 'World Trade Center souk', 'Central Market', 'Cultural Foundation'],
        stayHere: true,
      },
    ],
    mapPins: [
      { name: 'Sheikh Zayed Grand Mosque', lat: 24.4129, lng: 54.4747, type: 'attraction' },
      { name: 'Louvre Abu Dhabi', lat: 24.5338, lng: 54.3982, type: 'attraction' },
      { name: 'Qasr Al Watan', lat: 24.4622, lng: 54.3048, type: 'attraction' },
      { name: 'Ferrari World', lat: 24.4838, lng: 54.6071, type: 'attraction' },
      { name: 'Yas Waterworld', lat: 24.4876, lng: 54.6006, type: 'attraction' },
      { name: 'Corniche Walk or Cycle', lat: 24.4709, lng: 54.3461, type: 'attraction' },
      { name: 'Mangrove Kayaking', lat: 24.452, lng: 54.4045, type: 'attraction' },
      { name: 'Emirates Palace Mandarin Oriental', lat: 24.4617, lng: 54.3176, type: 'hotel' },
      { name: 'Al Maha Arjaan by Rotana', lat: 24.4821, lng: 54.3542, type: 'hotel' },
      { name: 'ibis Abu Dhabi Gate', lat: 24.4133, lng: 54.474, type: 'hotel' },
      { name: 'Premier Inn Abu Dhabi Capital Centre', lat: 24.4208, lng: 54.4345, type: 'hotel' },
      { name: 'Machboos', lat: 24.4942, lng: 54.382, type: 'food' },
      { name: 'Luqaimat', lat: 24.4793, lng: 54.3575, type: 'food' },
    ],
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
        officialWebsite: 'https://sofitel.accor.com/en/hotels/6146.html',
        note: 'Beachfront, exceptional review volume and score.',
      },
      fourStar: {
        name: 'Crowne Plaza Dubai Marina by IHG',
        area: 'Dubai Marina',
        score: 9.6,
        reviews: 16834,
        pricePerNight: 303,
        currency: 'AED',
        officialWebsite:
          'https://www.ihg.com/crowneplaza/hotels/us/en/dubai/dxbmr/hoteldetail',
        note: 'Highest review score of any Dubai pick in this list.',
      },
      threeStar: {
        name: 'Rove Downtown',
        area: 'Downtown, near Burj Khalifa',
        score: 9.5,
        reviews: 43123,
        pricePerNight: 165,
        currency: 'AED',
        officialWebsite: 'https://www.rovehotels.com/en/hotels/downtown/',
        note: "Rove's design-led budget chain, consistently excellent reviews.",
      },
      value: {
        name: 'Citymax Hotel Al Barsha at the Mall',
        area: 'Al Barsha',
        score: 8.2,
        reviews: 16458,
        pricePerNight: 94,
        currency: 'AED',
        officialWebsite:
          'https://www.citymaxhotels.com/uae/dubai/citymax-hotels-al-barsha-at-the-mall/',
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
    adventures: {
      intro:
        "Dubai packs skydiving over the Palm, the world's longest urban zipline, indoor skiing in the desert, mountain kayaking in Hatta, and desert safari — often within an hour of the city center.",
      categories: [
        {
          name: 'Sky & Air',
          activities: [
            {
              name: 'Skydive Dubai — Tandem over the Palm',
              description:
                'Freefall at 200 km/h over Palm Jumeirah from 13,000ft — one of the most iconic skydives in the world.',
              website: 'https://www.skydivedubai.ae/',
              label: 'Book Now',
            },
          ],
        },
        {
          name: 'Zipline',
          activities: [
            {
              name: 'XLine Dubai Marina — World\'s Longest Urban Zipline',
              description:
                'Fly 1 km at 170 metres above Dubai Marina at speeds up to 80 km/h from AED 699.',
              website: 'https://www.xdubai.com/x-line',
              label: 'Book Now',
            },
          ],
        },
        {
          name: 'Snow',
          activities: [
            {
              name: 'Ski Dubai — Indoor Skiing & Snowboarding',
              description:
                'Real snow, real slopes, and -4°C in the middle of Dubai. Ski, snowboard, or meet the penguins.',
              website: 'https://www.skidxb.com/en-ae/ski-dubai',
              label: 'Book Now',
            },
          ],
        },
        {
          name: 'Hatta — Mountain Adventures',
          activities: [
            {
              name: 'Hatta Kayaking',
              description:
                'Kayak the calm, turquoise waters of Hatta Dam — open from 7am daily.',
              website: 'https://hattakayak.com/home',
              label: 'Visit',
            },
            {
              name: 'Hatta Mountain Biking, Hiking & Drop-In',
              description:
                "Dubai's Hajar Mountain park — free-to-ride trails, 35 km of hiking routes, and the high-speed Drop-In plunge.",
              website: 'https://www.visithatta.com/en/play',
              label: 'Explore',
            },
          ],
        },
        {
          name: 'Desert',
          activities: [
            {
              name: 'Desert Safari — Dune Bashing & Bedouin Camp',
              description:
                "4x4 dune bashing, sandboarding, camel rides, and a BBQ camp evening in Dubai's Arabian desert.",
              website:
                'https://www.visitdubai.com/en/things-to-do/outdoor/desert-safari-in-dubai',
              label: 'Discover',
            },
          ],
        },
      ],
    },
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

    neighborhoods: [
      {
        name: 'Downtown',
        vibe: 'The postcard skyline — Burj Khalifa, Dubai Mall, and fountain shows at your doorstep.',
        bestFor: 'Icon hunters and first-time Dubai visitors who want everything walkable.',
        highlights: ['Burj Khalifa', 'Dubai Mall', 'Dubai Fountain', 'Dubai Opera'],
        stayHere: true,
      },
      {
        name: 'Marina / JBR',
        vibe: 'High-rise marina living with a beach strip, yachts, and sunset promenades.',
        bestFor: 'Young travellers, joggers, and anyone who wants beach plus nightlife.',
        highlights: ['Marina Walk', 'JBR Beach', 'The Beach mall', 'Ain Dubai views'],
        stayHere: true,
      },
      {
        name: 'Deira / Old Dubai',
        vibe: "Creek-side souks, abras, and layered trading heritage on the city's original shore.",
        bestFor: 'Culture, bargain hunting, and authentic street-level Dubai.',
        highlights: ['Gold Souk', 'Spice Souk', 'Al Fahidi', 'Abra creek crossings'],
        stayHere: false,
      },
      {
        name: 'Jumeirah',
        vibe: 'Low-rise coastal villas, public beaches, and classic Dubai glamour.',
        bestFor: 'Beach days, café culture, and a calmer stay away from downtown crowds.',
        highlights: ['Jumeirah Beach', 'Burj Al Arab views', 'Mercato Mall', 'Kite Beach nearby'],
        stayHere: true,
      },
      {
        name: 'Business Bay',
        vibe: 'Glass towers along the Dubai Canal with strong dining and rooftop bar scene.',
        bestFor: 'Professionals and couples who want central access without Marina prices.',
        highlights: ['Dubai Canal walkways', 'Bay Avenue', 'Marasi Drive', 'Downtown proximity'],
        stayHere: true,
      },
      {
        name: 'Palm Jumeirah',
        vibe: 'The iconic palm-shaped island of resorts, beach clubs, and Atlantis.',
        bestFor: 'Resort stays, special occasions, and pool-and-beach holidays.',
        highlights: ['Atlantis The Palm', 'Palm West Beach', 'The Pointe', 'Monorail rides'],
        stayHere: true,
      },
    ],
    mapPins: [
      { name: 'Burj Khalifa Observation Deck', lat: 25.1972, lng: 55.2744, type: 'attraction' },
      { name: 'Dubai Fountain Show', lat: 25.1952, lng: 55.2754, type: 'attraction' },
      { name: 'Palm Jumeirah & Atlantis', lat: 25.1304, lng: 55.1177, type: 'attraction' },
      { name: 'Al Fahidi Historic District', lat: 25.2635, lng: 55.2974, type: 'attraction' },
      { name: 'Gold & Spice Souks', lat: 25.2868, lng: 55.301, type: 'attraction' },
      { name: 'Ski Dubai', lat: 25.1172, lng: 55.2006, type: 'attraction' },
      { name: 'Desert Safari & Dune Bashing', lat: 24.9998, lng: 55.556, type: 'attraction' },
      { name: 'Sofitel Dubai Jumeirah Beach', lat: 25.2282, lng: 55.2548, type: 'hotel' },
      { name: 'Crowne Plaza Dubai Marina by IHG', lat: 25.0816, lng: 55.1413, type: 'hotel' },
      { name: 'Rove Downtown', lat: 25.1925, lng: 55.28, type: 'hotel' },
      { name: 'Citymax Hotel Al Barsha at the Mall', lat: 25.1138, lng: 55.2012, type: 'hotel' },
      { name: 'Shawarma', lat: 25.2376, lng: 55.2805, type: 'food' },
      { name: 'Karak Chai', lat: 25.2048, lng: 55.2708, type: 'food' },
    ],
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
        officialWebsite: 'https://www.ghmhotels.com/en/the-chedi-al-bait-sharjah/',
        note: 'Restored heritage-house luxury hotel in the old quarter.',
      },
      fourStar: {
        name: 'DoubleTree by Hilton Sharjah Waterfront Hotel & Residences',
        area: 'Waterfront',
        score: 9.3,
        reviews: 7801,
        pricePerNight: 224,
        currency: 'AED',
        officialWebsite:
          'https://www.hilton.com/en/hotels/shjawdi-doubletree-sharjah-waterfront-hotel-and-residences/',
      },
      threeStar: {
        name: 'ibis Styles Sharjah',
        area: 'City center',
        score: 8.5,
        reviews: 8539,
        pricePerNight: 123,
        currency: 'AED',
        officialWebsite: 'https://all.accor.com/hotel/B046/index.en.shtml',
      },
      value: {
        name: 'TIME Express Hotel Al Khan',
        area: 'Al Khan',
        score: 8.4,
        reviews: 2412,
        pricePerNight: 112,
        currency: 'AED',
        officialWebsite: 'https://www.timehotels.com/time-express-hotel-al-khan-sharjah',
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
    adventures: {
      intro:
        "Sharjah's Mleiha desert is the UAE's most dramatic adventure landscape — 34 sq km of dunes, a UNESCO-listed palaeolandscape, and the only place in the country offering paragliding from natural dunes.",
      categories: [
        {
          name: 'Desert & Dunes',
          activities: [
            {
              name: 'Mleiha National Park — Dune Bashing, Camping & Stargazing',
              description:
                "Dune bashing, quad bikes, paragliding from the dunes, overnight desert camping, and world-class stargazing in Sharjah's 34 sq km desert reserve.",
              website:
                'https://www.visitsharjah.com/en/activities/adventure/mleiha-national-park/',
              label: 'Explore',
            },
            {
              name: 'Mleiha Archaeological Centre',
              description:
                'Horse riding, desert cycling, trekking, and guided archaeology tours at a UNESCO-nominated site spanning 210,000 years of human history.',
              website:
                'https://www.visitsharjah.com/en/regions/central-region/mleiha/',
              label: 'Plan Your Visit',
            },
          ],
        },
        {
          name: 'Glamping',
          activities: [
            {
              name: 'Moon Retreat & Al Faya Retreat — Desert Glamping',
              description:
                'Dome-style and boutique heritage glamping inside Mleiha National Park, sleeping under the desert stars.',
              website:
                'https://www.visitsharjah.com/en/regions/central-region/mleiha/',
              label: 'Discover',
            },
          ],
        },
      ],
    },
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

    neighborhoods: [
      {
        name: 'Al Majaz',
        vibe: 'Lagoon-front dining, fountains, and family-friendly waterfront evenings.',
        bestFor: 'Relaxed evenings after museum days and easy corniche strolls.',
        highlights: ['Al Majaz Waterfront', 'Sharjah Fountain', 'Lagoon restaurants', 'Al Noor Mosque views'],
        stayHere: true,
      },
      {
        name: 'Heart of Sharjah',
        vibe: 'Restored heritage quarter of coral-stone lanes, souks, and museums.',
        bestFor: "History buffs and photographers — the emirate's cultural core.",
        highlights: ['Sharjah Heritage Museum', 'Souk Al Arsah', 'Calligraphy Museum', 'Art Foundation spaces'],
        stayHere: false,
      },
      {
        name: 'Al Khan',
        vibe: 'Lagoon beach, resort strip, and a quieter coastal counterpoint to the city center.',
        bestFor: "Beach time paired with Sharjah's museum circuit.",
        highlights: ['Al Khan Beach', 'Sharjah Aquarium nearby', 'Lagoon cafés', 'Corniche links'],
        stayHere: true,
      },
    ],
    mapPins: [
      { name: 'Sharjah Museum of Islamic Civilization', lat: 25.3617, lng: 55.3878, type: 'attraction' },
      { name: 'Heritage & Arts Areas', lat: 25.3586, lng: 55.3842, type: 'attraction' },
      { name: 'Sharjah Art Foundation', lat: 25.3605, lng: 55.381, type: 'attraction' },
      { name: 'Al Noor Island', lat: 25.3339, lng: 55.3875, type: 'attraction' },
      { name: 'Mleiha Desert', lat: 25.13, lng: 55.783, type: 'attraction' },
      { name: 'The Chedi Al Bait, Sharjah', lat: 25.3542, lng: 55.3848, type: 'hotel' },
      { name: 'DoubleTree by Hilton Sharjah Waterfront Hotel & Residences', lat: 25.3325, lng: 55.3748, type: 'hotel' },
      { name: 'ibis Styles Sharjah', lat: 25.332, lng: 55.3965, type: 'hotel' },
      { name: 'TIME Express Hotel Al Khan', lat: 25.3275, lng: 55.3755, type: 'hotel' },
      { name: 'Machboos', lat: 25.3578, lng: 55.3865, type: 'food' },
      { name: 'Karak Chai', lat: 25.3592, lng: 55.3838, type: 'food' },
      { name: 'Regag Bread', lat: 25.3581, lng: 55.3849, type: 'food' },
    ],
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
        officialWebsite:
          'https://www.marriott.com/en-us/hotels/shjlc-ajman-saray-a-luxury-collection-resort-ajman/overview/',
        note: "Ajman's flagship beach resort.",
      },
      fourStar: {
        name: 'Wyndham Garden Ajman Corniche',
        area: 'Corniche',
        score: 9.1,
        reviews: 7501,
        pricePerNight: 233,
        currency: 'AED',
        officialWebsite:
          'https://www.wyndhamhotels.com/wyndham-garden/ajman-united-arab-emirates/wyndham-garden-ajman-corniche/overview',
      },
      threeStar: {
        name: 'Onyx Hotel Apartments',
        area: 'Ajman city',
        score: 7.6,
        reviews: 1524,
        pricePerNight: 114,
        currency: 'AED',
        officialWebsite: 'https://www.onyxhotelapartment.com/',
        note: "Ajman's 3-star inventory is thin — this is the best-reviewed option available, not a standout.",
      },
      value: {
        name: 'Al Smou Hotel Apartments',
        area: 'Ajman city',
        score: 7.4,
        reviews: 1148,
        pricePerNight: 90,
        currency: 'AED',
        officialWebsite: null,
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
    adventures: {
      intro:
        "Ajman's small size means adventure is understated but accessible — desert safaris run into the dunes east of the city, and the Corniche is the base for jet skiing and water sports on the Gulf.",
      categories: [
        {
          name: 'Desert',
          activities: [
            {
              name: 'Ajman Desert Safari — Dune Bashing & BBQ',
              description:
                'Evening dune bashing, camel rides, and a BBQ dinner camp from AED 60 per person.',
              website: 'https://ajmandesertsafari.com/',
              label: 'Book Now',
            },
          ],
        },
        {
          name: 'Water Sports',
          activities: [
            {
              name: 'Jet Skiing & Water Sports — Ajman Corniche',
              description:
                "Jet ski hire and watersports along Ajman's Gulf Corniche — multiple operators based along the waterfront.",
              website: 'https://visitajman.ae/en/activities',
              label: 'Explore',
            },
          ],
        },
      ],
    },
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

    neighborhoods: [
      {
        name: 'Ajman Corniche',
        vibe: 'A compact seafront of cafés, fishing dhows, and unhurried Gulf sunsets.',
        bestFor: 'Budget-friendly beach breaks and day trips from Sharjah or Dubai.',
        highlights: ['Corniche promenade', 'Public beaches', 'Sunset dining', 'Dhow harbour views'],
        stayHere: true,
      },
      {
        name: 'Al Nuaimiya',
        vibe: 'Central residential district with local malls, mosques, and everyday city life.',
        bestFor: 'Visitors who want an affordable base away from resort strips.',
        highlights: ['City Centre Ajman', 'Local souks', 'Easy highway access', 'Authentic dining'],
        stayHere: false,
      },
      {
        name: 'Al Zorah',
        vibe: 'Mangrove-backed lagoon development with golf, nature, and newer resorts.',
        bestFor: 'Nature-minded stays and golfers seeking a quieter emirate escape.',
        highlights: ['Al Zorah Golf Club', 'Mangrove kayaking', 'Birdwatching', 'Lagoon resorts'],
        stayHere: true,
      },
    ],
    mapPins: [
      { name: 'Ajman Corniche', lat: 25.4052, lng: 55.4318, type: 'attraction' },
      { name: 'Ajman Beach', lat: 25.4015, lng: 55.4285, type: 'attraction' },
      { name: 'Ajman Museum', lat: 25.4134, lng: 55.4453, type: 'attraction' },
      { name: 'Ajman Old Town', lat: 25.4148, lng: 55.4475, type: 'attraction' },
      { name: 'Ajman Saray, a Luxury Collection Resort', lat: 25.4048, lng: 55.4298, type: 'hotel' },
      { name: 'Wyndham Garden Ajman Corniche', lat: 25.4035, lng: 55.4325, type: 'hotel' },
      { name: 'Onyx Hotel Apartments', lat: 25.4075, lng: 55.5125, type: 'hotel' },
      { name: 'Al Smou Hotel Apartments', lat: 25.4085, lng: 55.5135, type: 'hotel' },
      { name: 'Fresh Seafood', lat: 25.4042, lng: 55.4305, type: 'food' },
      { name: 'Machboos', lat: 25.4068, lng: 55.4355, type: 'food' },
      { name: 'Grilled Fish', lat: 25.4028, lng: 55.4278, type: 'food' },
    ],
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
        officialWebsite:
          'https://www.vidahotels.com/en/resorts/vida-beach-resort-umm-al-quwain/',
        note: 'The clear standout property in this emirate.',
      },
      fourStar: {
        name: 'Umm Al Quwain Beach Hotel',
        area: 'City center',
        score: 7.8,
        reviews: 947,
        pricePerNight: 411,
        currency: 'AED',
        officialWebsite: 'https://thebeachhoteluaq.com/',
        note: 'Only 4-star option found in UAQ — limited inventory, included for completeness rather than as a strong recommendation.',
      },
      threeStar: {
        name: 'Barracuda Beach Resort',
        area: 'Al Salam Resort area',
        score: 8.4,
        reviews: 3688,
        pricePerNight: 252,
        currency: 'AED',
        officialWebsite: 'https://barracuda.ae/',
        note: 'Better-reviewed than the 4-star listed above.',
      },
      value: {
        name: 'Royal Residence Hotel Apartments',
        area: 'UAQ',
        score: 6.8,
        reviews: 570,
        pricePerNight: 180,
        currency: 'AED',
        officialWebsite: 'https://www.royalresidenceresort.com/',
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
    adventures: {
      intro:
        "Umm Al Quwain's protected lagoon and mangrove system creates some of the calmest, most wildlife-rich kayaking and kite-surfing waters in the UAE. Dreamland Aqua Park adds a classic waterpark experience.",
      categories: [
        {
          name: 'Water & Mangroves',
          activities: [
            {
              name: 'Mangrove Kayaking & Eco-Tours',
              description:
                "Paddle through UAQ's protected mangrove lagoon — calm, shallow, ideal for spotting flamingos and herons. Sunrise tours especially recommended.",
              website: 'https://noukhada.ae/',
              label: 'Book',
            },
          ],
        },
        {
          name: 'Water Park',
          activities: [
            {
              name: 'Dreamland Aqua Park',
              description:
                "The UAE's largest family waterpark — Kamikaze, Twisting Dragons, Black Hole, and more, open daily from 10am.",
              website: 'https://dreamlanduae.com/',
              label: 'Book Tickets',
            },
          ],
        },
        {
          name: 'Watersports',
          activities: [
            {
              name: 'Kitesurfing & Jet Skiing — UAQ Lagoon',
              description:
                'The sheltered UAQ lagoon creates ideal conditions for kitesurfing and beginner-friendly watersports, with flat water and reliable wind.',
              website: 'https://visituaq.ae/',
              label: 'Discover',
            },
          ],
        },
      ],
    },
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

    neighborhoods: [
      {
        name: 'UAQ Corniche & Old Town',
        vibe: "Sleepy waterfront lanes, a historic fort area, and the emirate's social heart.",
        bestFor: 'Slow travel and an off-the-radar glimpse of pre-boom UAE life.',
        highlights: ['UAQ Fort Museum', 'Corniche walks', 'Fishing harbour', 'Local fish markets'],
        stayHere: true,
      },
      {
        name: 'Dreamland & Falaj Al Mualla',
        vibe: 'Inland leisure zone around the lagoon and long-running family attractions.',
        bestFor: 'Families and day-trippers combining waterparks with mangrove outings.',
        highlights: ['Dreamland Aqua Park', 'Lagoon views', 'Picnic spots', 'Quiet residential streets'],
        stayHere: false,
      },
      {
        name: 'Khor Al Beidiyah',
        vibe: "Mangrove channels and bird-rich wetlands on the emirate's quiet edge.",
        bestFor: 'Kayakers, birdwatchers, and anyone escaping the northern city sprawl.',
        highlights: ['Mangrove forests', 'Flamingo sightings', 'Paddle tours', 'Sunrise photography'],
        stayHere: false,
      },
    ],
    mapPins: [
      { name: 'Mangrove Kayaking', lat: 25.5645, lng: 55.5595, type: 'attraction' },
      { name: 'Birdwatching', lat: 25.5785, lng: 55.5455, type: 'attraction' },
      { name: 'Dreamland Aqua Park', lat: 25.5885, lng: 55.6595, type: 'attraction' },
      { name: 'Jet Skiing on the Lagoon', lat: 25.5625, lng: 55.5555, type: 'attraction' },
      { name: 'Vida Beach Resort Umm Al Quwain', lat: 25.5505, lng: 55.5555, type: 'hotel' },
      { name: 'Umm Al Quwain Beach Hotel', lat: 25.5648, lng: 55.5538, type: 'hotel' },
      { name: 'Barracuda Beach Resort', lat: 25.5485, lng: 55.5525, type: 'hotel' },
      { name: 'Royal Residence Hotel Apartments', lat: 25.5515, lng: 55.5545, type: 'hotel' },
      { name: 'Fresh Lagoon Seafood', lat: 25.5635, lng: 55.5545, type: 'food' },
      { name: 'Machboos', lat: 25.5655, lng: 55.5525, type: 'food' },
      { name: 'Grilled Hammour', lat: 25.5615, lng: 55.5565, type: 'food' },
    ],
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
        officialWebsite: 'https://www.anantara.com/en/mina-al-arab-ras-al-khaimah',
        note: 'Top-scoring property in RAK.',
      },
      fourStar: {
        name: 'Hampton by Hilton Marjan Island',
        area: 'Al Marjan Island',
        score: 8.9,
        reviews: 14769,
        pricePerNight: 200,
        currency: 'AED',
        officialWebsite:
          'https://www.hilton.com/en/hotels/rktmahx-hampton-marjan-island/',
      },
      threeStar: {
        name: 'Action Hotel Ras Al Khaimah',
        area: 'City center',
        score: 8.0,
        reviews: 4646,
        pricePerNight: 109,
        currency: 'AED',
        officialWebsite:
          'https://www.actionhotels.com/portfolio/action-hotel-ras-al-khaimah/',
        note: "Best-reviewed 3-star found; RAK's 3-star tier is otherwise weak.",
      },
      value: {
        name: 'SH Hotel',
        area: 'City center',
        score: 5.4,
        reviews: 1730,
        pricePerNight: 79,
        currency: 'AED',
        officialWebsite: 'https://sh.rasalkhaimahotel.com/en/',
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
    adventures: {
      intro:
        "RAK is the UAE's adventure capital. The Jebel Jais mountain (1,934m — UAE's highest peak) hosts the world's longest zipline, a via ferrata, and hiking trails. Hot air ballooning, skydiving, and desert camping add to a genuinely world-class adventure roster.",
      categories: [
        {
          name: 'Jebel Jais — Mountain Adventures',
          activities: [
            {
              name: 'Jais Flight — World\'s Longest Zipline',
              description:
                "2.83 km at 1,680 m above sea level across Jebel Jais' canyons at up to 160 km/h — the longest zipline on Earth.",
              website: 'https://visitjebeljais.com/play',
              label: 'Book Now',
            },
            {
              name: 'Jais Via Ferrata',
              description:
                'Scale a 470-metre iron-path climbing route on Jebel Jais, with three difficulty routes and a 300m zip-line descent.',
              website: 'https://visitjebeljais.com/jais-via-ferrata',
              label: 'Book Now',
            },
            {
              name: 'Hiking & Jais Sky Tour',
              description:
                "Mountain hiking trails and a 5 km multi-zipline tour across Jebel Jais' canyons at 1,600m elevation.",
              website: 'https://visitjebeljais.com/',
              label: 'Explore',
            },
          ],
        },
        {
          name: 'Sky & Air',
          activities: [
            {
              name: 'Hot Air Balloon — ActionFlight RAK',
              description:
                "Sunrise hot air balloon over the Hajar Mountains and RAK's coastline from AED 999, operated by ActionFlight.",
              website: 'https://actionflight.ae/',
              label: 'Book Now',
            },
          ],
        },
        {
          name: 'Glamping',
          activities: [
            {
              name: 'Jebel Jais Glamping',
              description:
                "Stay overnight on the UAE's highest mountain — glamping pods and tented camps with views of the Hajar range.",
              website: 'https://visitjebeljais.com/',
              label: 'Explore',
            },
          ],
        },
        {
          name: 'Desert',
          activities: [
            {
              name: 'RAK Desert Safari & Dune Bashing',
              description:
                '4x4 dune bashing, sandboarding, and Bedouin camp experiences in the RAK desert interior.',
              website: 'https://visitrasalkhaimah.com/discover/activities/',
              label: 'Discover',
            },
          ],
        },
      ],
    },
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

    neighborhoods: [
      {
        name: 'Al Marjan Island',
        vibe: 'Man-made island arc of resorts, beaches, and waterfront dining.',
        bestFor: 'Beach holidays and resort pools with minimal driving.',
        highlights: ['Resort beaches', 'Waterfront restaurants', 'Promenade walks', 'Sunset views'],
        stayHere: true,
      },
      {
        name: 'RAK City & Old Town',
        vibe: 'Compact capital with souks, a historic fort, and mountain views inland.',
        bestFor: 'Balancing culture with easy access to both coast and Hajar trails.',
        highlights: ['RAK National Museum', 'Old Town souks', 'Corniche Al Qawasim', 'Dhayah Fort day trips'],
        stayHere: true,
      },
      {
        name: 'Jebel Jais Gateway',
        vibe: "Mountain-road base for the UAE's highest peak, ziplines, and wadi drives.",
        bestFor: 'Adventure travellers and cooler-weather hiking escapes.',
        highlights: ['Jebel Jais Viewing Deck', 'Toroverde zipline', 'Mountain roads', 'Wadi picnics'],
        stayHere: false,
      },
    ],
    mapPins: [
      { name: 'Jebel Jais Zipline', lat: 25.9435, lng: 56.1425, type: 'attraction' },
      { name: 'Via Ferrata & Hiking', lat: 25.9385, lng: 56.1385, type: 'attraction' },
      { name: 'Dhayah Fort', lat: 25.8885, lng: 56.0745, type: 'attraction' },
      { name: 'Ras Al Khaimah Old Town', lat: 25.7895, lng: 55.9432, type: 'attraction' },
      { name: 'Al Marjan Island Beaches', lat: 25.6795, lng: 55.7395, type: 'attraction' },
      { name: 'Anantara Mina Ras Al Khaimah Resort', lat: 25.6855, lng: 55.7365, type: 'hotel' },
      { name: 'Hampton by Hilton Marjan Island', lat: 25.6815, lng: 55.7385, type: 'hotel' },
      { name: 'Action Hotel Ras Al Khaimah', lat: 25.7865, lng: 55.9415, type: 'hotel' },
      { name: 'SH Hotel', lat: 25.7885, lng: 55.9455, type: 'hotel' },
      { name: 'Mountain & Coastal Fusion', lat: 25.7905, lng: 55.9445, type: 'food' },
      { name: 'Machboos', lat: 25.7875, lng: 55.9425, type: 'food' },
      { name: 'Dates & Local Honey', lat: 25.7855, lng: 55.9465, type: 'food' },
    ],
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
        officialWebsite:
          'https://www.addresshotels.com/en/resorts/palace-beach-resort-fujairah/',
      },
      fourStar: {
        name: 'Nour Arjaan by Rotana',
        area: 'City center',
        score: 8.9,
        reviews: 4067,
        pricePerNight: 241,
        currency: 'AED',
        officialWebsite:
          'https://www.rotana.com/arjaanhotelapartments/unitedarabemirates/fujairah/nourarjaanbyrotana',
      },
      threeStar: {
        name: 'City Tower Hotel',
        area: 'City center',
        score: 7.1,
        reviews: 6756,
        pricePerNight: 118,
        currency: 'AED',
        officialWebsite: 'https://omegagroupofhotels.com/city-tower-hotel/',
        note: "Highest review volume among Fujairah's 3-star options.",
      },
      value: {
        name: 'Clifton International Hotel',
        area: 'City center',
        score: 6.3,
        reviews: 2232,
        pricePerNight: 80,
        currency: 'AED',
        officialWebsite: null,
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
    adventures: {
      intro:
        "Fujairah sits on the Gulf of Oman — the UAE's only emirate on the Indian Ocean side — making it the country's undisputed diving and snorkeling capital. The Hajar Mountains add wadi exploration and hiking.",
      categories: [
        {
          name: 'Diving & Snorkeling',
          activities: [
            {
              name: 'Snoopy Island Snorkeling & Scuba',
              description:
                "One of the UAE's most iconic dive sites — turtles, blacktip reef sharks, and vibrant coral off Al Aqah beach in Fujairah.",
              website: 'https://divesandy.com/snoopy-island',
              label: 'Book Dive',
            },
            {
              name: 'Apex Divers UAE — SSI Dive Courses & Boat Dives',
              description:
                'SSI-certified dive courses, guided boat dives at Dibba Rock and Shark Island, and snorkel tours around Fujairah\'s coastline.',
              website: 'https://www.apexdiversuae.com/',
              label: 'Book Now',
            },
          ],
        },
        {
          name: 'Water & Coast',
          activities: [
            {
              name: 'Snorkeling at Snoopy Island — Aquanauts',
              description:
                'Guided snorkeling tours from Fujairah, including Snoopy Island, from AED 190 per person per hour.',
              website: 'https://aquanauts.ae/snorkeling/',
              label: 'Book',
            },
          ],
        },
        {
          name: 'Wadi & Mountains',
          activities: [
            {
              name: 'Wadi Wurayah National Park — Hiking & Waterfalls',
              description:
                "The UAE's first protected mountain reserve — hike to rare year-round waterfalls in the Hajar Mountains.",
              website: 'https://visitfujairah.ae/',
              label: 'Discover',
            },
          ],
        },
      ],
    },
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

    neighborhoods: [
      {
        name: 'Fujairah City & Corniche',
        vibe: 'East-coast capital with a historic fort, Friday market energy, and Gulf of Oman breezes.',
        bestFor: 'Divers and road-trippers using Fujairah as an east-coast hub.',
        highlights: ['Fujairah Fort', 'Heritage Village', 'Corniche walks', 'Central souks'],
        stayHere: true,
      },
      {
        name: 'Al Aqah',
        vibe: 'Resort strip beneath the Hajar foothills with sandy beaches and dive centres.',
        bestFor: 'Beach resorts, snorkelling, and mountain-backdrop sunsets.',
        highlights: ['Al Aqah Beach', 'Snoopy Island trips', 'Dive operators', 'Sandy Beach Resort area'],
        stayHere: true,
      },
      {
        name: 'Dibba & North Coast',
        vibe: 'Northern fjord-like coastline of dramatic bays, fishing villages, and dive sites.',
        bestFor: 'Multi-day diving itineraries and rugged coastal exploration.',
        highlights: ['Dibba Rock diving', 'Coastal drives', 'Hidden coves', 'Omani border scenery'],
        stayHere: false,
      },
    ],
    mapPins: [
      { name: 'Snoopy Island Snorkeling', lat: 25.5025, lng: 56.3615, type: 'attraction' },
      { name: 'Scuba Diving', lat: 25.4985, lng: 56.3585, type: 'attraction' },
      { name: 'Al Bidya Mosque', lat: 25.4215, lng: 56.3485, type: 'attraction' },
      { name: 'Fujairah Fort', lat: 25.1285, lng: 56.3385, type: 'attraction' },
      { name: 'Heritage Village', lat: 25.1295, lng: 56.3395, type: 'attraction' },
      { name: 'Wadi Wurayah National Park', lat: 25.2985, lng: 56.3115, type: 'attraction' },
      { name: 'Palace Beach Resort Fujairah', lat: 25.1245, lng: 56.3565, type: 'hotel' },
      { name: 'Nour Arjaan by Rotana', lat: 25.1288, lng: 56.3265, type: 'hotel' },
      { name: 'City Tower Hotel', lat: 25.1295, lng: 56.3275, type: 'hotel' },
      { name: 'Clifton International Hotel', lat: 25.1305, lng: 56.3285, type: 'hotel' },
      { name: 'Fresh Gulf of Oman Seafood', lat: 25.1275, lng: 56.3355, type: 'food' },
      { name: 'Machboos', lat: 25.1298, lng: 56.3268, type: 'food' },
      { name: 'Grilled Kingfish', lat: 25.1265, lng: 56.3345, type: 'food' },
    ],
  },
};
