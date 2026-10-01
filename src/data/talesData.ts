export interface ResidentBrand {
  id: string;
  name: string;
  category: string;
  origin: string;
  tagline: string;
  description: string;
  established: string;
  showroomLocation: string;
  image: string;
  secondaryImage?: string;
  featuredQuote: string;
  specialties: string[];
}

export interface HouseExperience {
  number: string;
  title: string;
  headline: string;
  subtitle: string;
  description: string;
  details: string[];
  image: string;
  curatorNote: string;
}

export interface HouseEvent {
  id: string;
  title: string;
  date: string;
  displayDate: string;
  time: string;
  category: string;
  description: string;
  image: string;
  featured?: boolean;
  speaker: string;
  capacity: string;
  location: string;
}

export interface ShowcaseOpportunity {
  id: string;
  category: string;
  priceTag: string;
  billing: string;
  discountNote?: string;
  overview: string;
  features: string[];
  recommendedFor: string;
}

export interface JournalStory {
  id: string;
  category: 'DESIGN' | 'PEOPLE' | 'HOUSE STORIES';
  title: string;
  readTime: string;
  author: string;
  date: string;
  excerpt: string;
  image: string;
  contentParagraphs: string[];
  pullQuote?: string;
}

export const VIDEO_REELS = [
  {
    id: 'showroom',
    title: 'The Showroom Experience',
    subtitle: 'Cavendish Square, London',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-fashion-model-in-a-red-dress-walking-in-a-studio-41138-large.mp4',
    poster: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'craft',
    title: 'Artisanal Craft & Weave',
    subtitle: 'Heritage Meets Savile Row',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-tailor-working-with-a-measuring-tape-41142-large.mp4',
    poster: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'haute',
    title: 'Contemporary Silhouette',
    subtitle: 'Diaspora Haute Couture',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-portrait-of-a-woman-posing-with-a-hat-41135-large.mp4',
    poster: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1600&auto=format&fit=crop',
  }
];

export const RESIDENT_BRANDS: ResidentBrand[] = [
  {
    id: 'atelier-omoluabi',
    name: 'Atelier Omoluabi',
    category: 'Haute Couture & Tailoring',
    origin: 'Lagos & London',
    tagline: 'Ancestral Aso-Oke woven into structural architectural tailoring',
    description: 'Bridging hand-loomed Nigerian textiles with Mayfair bespoke sartorial standards. Each suit requires over 80 hours of hand-weaving and precise London tailoring.',
    established: '2021',
    showroomLocation: 'First Floor Salon, North Gallery',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1000&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop',
    featuredQuote: 'We do not preserve tradition by freezing it; we preserve it by wearing it to the highest rooms in the world.',
    specialties: ['Hand-Loomed Aso Oke', 'Double-Breasted Overcoats', 'Bespoke Eveningwear']
  },
  {
    id: 'sankofa-cuir',
    name: 'Sankofa Cuir',
    category: 'Fine Leather & Bags',
    origin: 'Accra & Paris',
    tagline: 'Sculptural vegetable-tanned leathergoods with brass talisman closures',
    description: 'Handcrafted in limited runs using full-grain Ghanaian leather and lost-wax brass castings by Ashanti master metalsmiths.',
    established: '2019',
    showroomLocation: 'Ground Floor Accessories Vault',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1000&auto=format&fit=crop',
    featuredQuote: 'Weight, grain, and the patina of time — luxury that deepens with every journey.',
    specialties: ['The Akoma Tote', 'Wax-Cast Brass Hardwares', 'Saddle-Stitched Crossbody']
  },
  {
    id: 'orisha-fine-objects',
    name: 'Oríṣà Atelier',
    category: 'Jewellery & Adornment',
    origin: 'Dakar & London',
    tagline: '22ct recycled gold & raw Ethiopian opals in modernist silhouettes',
    description: 'Modern heirlooms drawing from Senegalese filigree goldsmithing and brutalist geometry. Each piece is hallmarked in the Goldsmiths Hall of London.',
    established: '2020',
    showroomLocation: 'Curator Vitrine, Cavendish Room',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop',
    featuredQuote: 'Gold carries memory. We give that memory form for a contemporary world.',
    specialties: ['Filigree Ear Cuffs', 'Opal Talisman Rings', 'Sculpted Collar Necklaces']
  },
  {
    id: 'nzinga-resort',
    name: 'Nzinga Studio',
    category: 'Ready-to-Wear & Silks',
    origin: 'Nairobi & Milan',
    tagline: 'Fluid hand-dyed mulberry silks inspired by Great Rift Valley mineral landscapes',
    description: 'Celebrated for effortless fluid tailoring, botanical dye techniques, and sustainable silk twill sets created for modern global living.',
    established: '2022',
    showroomLocation: 'West Wing Pavilion',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1000&auto=format&fit=crop',
    featuredQuote: 'Elegance without stiffness — silk that breathes with movement and light.',
    specialties: ['Mulberry Silk Kaftans', 'Pleated Palazzo Sets', 'Botanical Dip-Dyed Robes']
  },
  {
    id: 'moyo-footwear',
    name: 'Moyo & Co.',
    category: 'Bespoke Footwear',
    origin: 'Cape Town & Northampton',
    tagline: 'Hand-welted Goodyear luxury footwear crafted with artisanal African leathers',
    description: 'Combining historic English Goodyear welt construction with ethical African ostrich, calfskin, and architectural wooden heels.',
    established: '2018',
    showroomLocation: 'Ground Floor Gentlemen & Ladies Footwear Saloon',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1000&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1000&auto=format&fit=crop',
    featuredQuote: 'From the soil of the Cape to the cobblestones of Mayfair, every step is grounded.',
    specialties: ['Hand-Welted Loafers', 'Architectural Heel Mules', 'Derby Boots']
  },
  {
    id: 'alkebulan-fragrance',
    name: 'Alkebulan Niche Parfums',
    category: 'Artisanal Fragrance & Living',
    origin: 'Kigali & Grasse',
    tagline: 'Rare botanicals, Somalian frankincense, and bourbon vanilla blended in Grasse',
    description: 'An olfactory dialogue exploring ancient African trade routes and rare indigenous resins, housed in hand-blown smoked flacons.',
    established: '2021',
    showroomLocation: 'The Fragrance Bar & Scent Library',
    image: 'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?q=80&w=1000&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1000&auto=format&fit=crop',
    featuredQuote: 'Scent is the most intimate form of storytelling. It lingers long after the encounter.',
    specialties: ['Oud & Frankincense Extrait', 'Orange Blossom Absolute', 'Vessel Candles']
  }
];

export const EXPERIENCE_STEPS: HouseExperience[] = [
  {
    number: '01',
    title: 'SHOP',
    headline: 'Discover curated African and diaspora brands.',
    subtitle: 'Permanent physical retail in the heart of London',
    description: 'Step into a meticulously curated gallery environment where every garment, leather piece, and object represents the pinnacle of contemporary African luxury. Try on garments with dedicated stylists, examine artisanal textures, and acquire rare capsule editions not available anywhere else in the United Kingdom.',
    details: [
      'Rotating seasonal capsule edits and exclusive House editions',
      'Private styling suites and bespoke alteration services',
      'Direct provenance and authentication for every resident piece'
    ],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop',
    curatorNote: 'Our retail floor is designed as an architectural gallery — each brand receives the spatial dignity and curatorial reverence it deserves.'
  },
  {
    number: '02',
    title: 'MEET',
    headline: 'Connect with founders and creators.',
    subtitle: 'Direct dialogue with the minds shaping global luxury',
    description: 'TALES House eliminates the distance between patron and maker. Founders travel from Lagos, Nairobi, Paris, and Accra to host residencies, trunk shows, and one-on-one appointments. Here, luxury is deeply personal and rooted in human connection.',
    details: [
      'Founder trunk shows and private salon discussions',
      'One-on-one custom commissions with master tailors',
      'Designer cocktail hours every Thursday and Friday evening'
    ],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop',
    curatorNote: 'When you purchase at TALES House, you often meet the hands that designed the silhouette.'
  },
  {
    number: '03',
    title: 'EXPERIENCE',
    headline: 'Attend workshops, launches and cultural moments.',
    subtitle: 'A vibrant calendar of talks, tastings and exhibitions',
    description: 'From live botanical scent-making masterclasses to panel debates on the future of sustainable diaspora manufacturing, TALES House is a dynamic cultural beacon. We host exhibition openings, acoustic performances, and literary salons throughout the year.',
    details: [
      'Textile appreciation & natural dye masterclasses',
      'Curated panel debates during London Fashion Week & Frieze',
      'Sensory fragrance blending & African coffee ceremonies'
    ],
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop',
    curatorNote: 'We believe true luxury is experiential. It expands your worldview while refining your senses.'
  },
  {
    number: '04',
    title: 'BELONG',
    headline: 'Join a community built around creativity and culture.',
    subtitle: 'The House membership & patron circle',
    description: 'TALES House is more than an address; it is an enduring creative sanctuary in central London. Patrons, collectors, diplomats, scholars, and tastemakers gather here to exchange ideas, support independent talent, and celebrate African creative excellence.',
    details: [
      'Access to The House Lounge and private library',
      'VIP invitations to private gallery previews and dinner salons',
      'Annual House Journal and collector print monograph'
    ],
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop',
    curatorNote: 'Cavendish Square is now the anchor where the global African creative renaissance meets London.'
  }
];

export const UPCOMING_EVENTS: HouseEvent[] = [
  {
    id: 'salon-textile-heritage',
    title: 'The Diaspora Salon: Textile Heritage & Contemporary Luxury',
    date: '2026-10-15',
    displayDate: 'Thursday, 15 October 2026',
    time: '18:30 – 21:00 BST',
    category: 'CULTURAL SALON',
    description: 'An intimate evening dialogue exploring how ancestral handloom traditions — from Yoruba Aso Oke to Ghanaian Kente — are being reclaimed and reinterpreted for 21st-century luxury tailoring. Followed by champagne reception and private viewing.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop',
    featured: true,
    speaker: 'Adeola Adeleke (Founder, Atelier Omoluabi) in conversation with Dr. Nana Mensah',
    capacity: '45 Seats · Invitation & RSVP Required',
    location: 'First Floor Grand Salon, 28 Cavendish Square'
  },
  {
    id: 'scent-botanicals',
    title: 'Fragrance Architecture: Somalian Resins & Grasse Alchemy',
    date: '2026-10-22',
    displayDate: 'Thursday, 22 October 2026',
    time: '14:00 – 16:30 BST',
    category: 'MASTERCLASS',
    description: 'Hands-on olfactory masterclass with master perfumer Amina Bello. Discover rare botanical distillations and blend your own bespoke 15ml House extrait.',
    image: 'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?q=80&w=800&auto=format&fit=crop',
    speaker: 'Amina Bello (Nose & Master Blender)',
    capacity: '12 Attendees',
    location: 'The Scent Library'
  },
  {
    id: 'collectors-breakfast',
    title: 'Private Collectors Breakfast: Modernist West African Gold',
    date: '2026-11-04',
    displayDate: 'Wednesday, 04 November 2026',
    time: '09:00 – 11:00 BST',
    category: 'COLLECTORS PREVIEW',
    description: 'An exclusive morning viewing of museum-grade 22ct gold sculptures and wearable talismans by Senegalese and Ghanaian metalsmiths, accompanied by Ethiopian single-origin coffee.',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop',
    speaker: 'Curated by TALES House Fine Jewellery Fellowship',
    capacity: '20 Guests',
    location: 'North Gallery Vitrine'
  },
  {
    id: 'founders-table-retail',
    title: 'In Conversation: Building Independent African Luxury Houses',
    date: '2026-11-12',
    displayDate: 'Thursday, 12 November 2026',
    time: '19:00 – 21:00 BST',
    category: 'FOUNDER FORUM',
    description: 'A candid conversation on direct-to-consumer luxury, cross-border supply chains, and establishing permanent commercial flagships in European capitals.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop',
    speaker: 'Panel of 4 Resident Founders with International Fashion Press',
    capacity: '50 Seats',
    location: 'Main Pavilion'
  }
];

export const SHOWCASE_OPPORTUNITIES: ShowcaseOpportunity[] = [
  {
    id: 'fashion-residencies',
    category: 'CLOTHING & FASHION',
    priceTag: 'Residencies from £1,500',
    billing: 'per month',
    overview: 'Full showroom rail presence, dedicated hangers, client styling support, and integration into TALES House trunk shows and VIP client previews.',
    features: [
      'Dedicated display rail in primary fashion salons',
      'Full visual merchandising & daily sales management',
      'Client styling assistance & private appointments handling',
      'Inclusion in monthly digital lookbooks & editorial features',
      'Invitation to host 1 private evening brand showcase'
    ],
    recommendedFor: 'Established and emerging ready-to-wear, couture, and tailored apparel brands.'
  },
  {
    id: 'accessories-vitrine',
    category: 'BAGS & ACCESSORIES',
    priceTag: 'Showcase opportunities from £500',
    billing: 'per month',
    overview: 'Dedicated bespoke plinths, glass vitrines, and museum-grade lighting in our ground floor accessories gallery just off Oxford Street.',
    features: [
      'Curated plinth or vitrine presentation at eye-level',
      'Daily customer handling by trained House concierges',
      'Inclusion in House curated gift guides & press displays',
      'White-glove packaging and point-of-sale processing'
    ],
    recommendedFor: 'Leathergoods, footwear, jewelry, fragrance, and sculptural home design.'
  },
  {
    id: 'daily-popup',
    category: 'DAILY POP-UP',
    priceTag: '£330',
    billing: 'per day',
    discountNote: '10% discount for bookings over 3 days',
    overview: 'Flexible short-term immersion to launch new collections, host dedicated brand days, or test the central London luxury clientele with zero long-term lease commitment.',
    features: [
      'Exclusive takeover of our central courtyard/entrance pavilion',
      'Branded window display on Cavendish Square',
      'House event production, sound system & staffing support',
      'Direct foot traffic from Oxford Circus and Cavendish Square'
    ],
    recommendedFor: 'Collection launches, press previews, international founder visits, and capsule activations.'
  }
];

export const JOURNAL_STORIES: JournalStory[] = [
  {
    id: 'sika-architecture-gold',
    category: 'DESIGN',
    title: 'Inside the World of Sika: The Architecture of West African Gold',
    readTime: '6 min read',
    author: 'Kweku Asamoah',
    date: 'October 2026',
    excerpt: 'How ancestral filigree and the lost-wax casting of Ashanti royalty are being translated into modern brutalist talismans on Cavendish Square.',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop',
    pullQuote: 'Every piece carries the weight of a lineage that was creating monumental gold sculpture centuries before the Renaissance.',
    contentParagraphs: [
      'To understand gold in West Africa is to understand that it has never been merely currency or decorative trinket. In the royal courts of the Ashanti Empire, gold was the physical embodiment of the sun, spiritual authority, and collective memory.',
      'Inside the North Gallery of TALES House London, the new Sika capsule collection takes these centuries-old lost-wax techniques and strips away Victorian excess, giving rise to clean, architectural cuffs that feel at home in both an art museum and an evening gala on Bond Street.',
      '“London has often viewed African adornment through ethnographic lenses,” explains the founder. “Here at 28 Cavendish Square, it is understood for what it is: peerless, unapologetic haute joaillerie.”'
    ]
  },
  {
    id: 'amina-bello-perfumery',
    category: 'PEOPLE',
    title: 'Meet the Founder: Amina Bello on Building a Heritage Perfumery in Mayfair',
    readTime: '5 min read',
    author: 'Elena Vance',
    date: 'September 2026',
    excerpt: 'From foraging wild frankincense in Somaliland to blending in Grasse, Amina Bello reflects on establishing the first permanent African luxury fragrance bar in Central London.',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1000&auto=format&fit=crop',
    pullQuote: 'True luxury takes time. We age our wild frankincense infusions for eighteen months before a single drop enters the flacon.',
    contentParagraphs: [
      'When you walk past the arched entryway of 28 Cavendish Square, a warm, resonant amber aura greets you before you see a single garment. It is the signature House scent created by Amina Bello.',
      'Trained in the historic laboratories of Grasse after growing up between Nairobi and London, Bello sought to reclaim Africa’s place at the core of the global perfume canon. "The finest myrrh, vanilla, neroli, and frankincense originate on the African continent, yet historically they were exported raw and stripped of their narratives," she observes.',
      'Now, at TALES House, collectors sit at bespoke marble counters to experience slow-extracted distillations, guided by noses who understand the botanical origins intimately.'
    ]
  },
  {
    id: 'opening-night-london',
    category: 'HOUSE STORIES',
    title: 'Inside The Opening Night: When London Welcomed the Continental Vanguard',
    readTime: '4 min read',
    author: 'House Editorial Desk',
    date: 'September 2026',
    excerpt: 'A retrospective look at the historic evening that transformed 28 Cavendish Square into a permanent sanctuary for African creativity and global connoisseurs.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000&auto=format&fit=crop',
    pullQuote: 'We were told for years to do another two-week pop-up. We refused. African luxury has built a permanent home.',
    contentParagraphs: [
      'On a crisp autumn Thursday, the Georgian doors of 28 Cavendish Square opened to a crowd that reflected the full spectrum of contemporary culture: designers flying in from Lagos and Johannesburg, London collectors, art directors, and diplomats.',
      'The mood was not one of tentative celebration, but of permanence. The architecture of the building — with its soaring ceilings, Portland stone moldings, and bespoke brass vitrines — signalled that this is not an ephemeral spectacle.',
      'As glasses of English sparkling wine and hibiscus infusions were raised, the message was clear: African luxury has arrived at the heart of London’s luxury district, and it is here to stay.'
    ]
  }
];

export const VISIT_DETAILS = {
  addressLine1: 'TALES House London',
  addressLine2: '28 Cavendish Square',
  city: 'London',
  postcode: 'W1G 0DB',
  landmark: 'Just off Oxford Street · Behind Oxford Circus',
  hours: [
    { days: 'Monday – Saturday', time: '10:00 – 19:00' },
    { days: 'Sunday', time: '12:00 – 18:00' },
    { days: 'Private Styling & VIP Appointments', time: 'By Arrangement' }
  ],
  transit: [
    { station: 'Oxford Circus', lines: 'Central, Bakerloo & Victoria Lines', walking: '2 min walk' },
    { station: 'Bond Street', lines: 'Elizabeth & Jubilee Lines', walking: '4 min walk' },
    { station: 'Cavendish Square Parking', lines: 'Q-Park Underground Parking', walking: 'Direct access' }
  ],
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=28+Cavendish+Square+London+W1G+0DB'
};
