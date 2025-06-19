
import { NavLinkItem, Destination, Experience, Testimonial, MapRegion } from './types';

export const NAV_LINKS: NavLinkItem[] = [
  { name: 'Home', path: '/' },
  { name: 'Destinations', path: '/destinations' },
  { name: 'Experiences', path: '/experiences' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export const SAMPLE_DESTINATIONS: Destination[] = [
  { id: '1', name: 'Sigiriya Rock Fortress', description: 'Ancient rock fortress with stunning views and frescoes.', imageUrl: 'https://picsum.photos/seed/sigiriya/600/400', region: 'Matale District' },
  { id: '2', name: 'Ella', description: 'Charming hill country town known for its tea plantations and Nine Arch Bridge.', imageUrl: 'https://picsum.photos/seed/ella/600/400', region: 'Badulla District' },
  { id: '3', name: 'Galle Fort', description: 'A UNESCO World Heritage site, a historic fort with Dutch colonial buildings.', imageUrl: 'https://picsum.photos/seed/galle/600/400', region: 'Galle District' },
  { id: '4', name: 'Yala National Park', description: 'Famous for leopard sightings and diverse wildlife.', imageUrl: 'https://picsum.photos/seed/yala/600/400', region: 'Hambantota District' },
  { id: '5', name: 'Kandy', description: 'Cultural capital, home to the Temple of the Tooth Relic.', imageUrl: 'https://picsum.photos/seed/kandy/600/400', region: 'Kandy District' },
  { id: '6', name: 'Mirissa', description: 'Popular for whale watching and beautiful beaches.', imageUrl: 'https://picsum.photos/seed/mirissa/600/400', region: 'Matara District' },
];

export const SAMPLE_EXPERIENCES: Experience[] = [
  { id: '1', name: 'Whale Watching in Mirissa', description: 'Witness majestic blue whales and dolphins in their natural habitat.', imageUrl: 'https://picsum.photos/seed/whale/600/400', category: 'Wildlife' },
  { id: '2', name: 'Tea Plantation Tour', description: 'Explore lush green tea estates and learn about tea production.', imageUrl: 'https://picsum.photos/seed/tea/600/400', category: 'Culture' },
  { id: '3', name: 'Surfing in Arugam Bay', description: 'Catch some waves at one of the world\'s top surfing spots.', imageUrl: 'https://picsum.photos/seed/surf/600/400', category: 'Adventure' },
  { id: '4', name: 'Cultural Dance Show', description: 'Experience vibrant traditional Sri Lankan dance performances.', imageUrl: 'https://picsum.photos/seed/dance/600/400', category: 'Culture' },
  { id: '5', name: 'Hot Air Ballooning', description: 'Get a bird\'s-eye view of Sri Lanka\'s stunning landscapes.', imageUrl: 'https://picsum.photos/seed/balloon/600/400', category: 'Adventure' },
  { id: '6', name: 'Ayurvedic Spa Treatment', description: 'Rejuvenate your body and mind with ancient healing therapies.', imageUrl: 'https://picsum.photos/seed/spa/600/400', category: 'Wellness' },
];

export const SAMPLE_TESTIMONIALS: Testimonial[] = [
  { id: '1', name: 'John Doe', quote: 'Sri Lanka was an unforgettable experience! The people, food, and scenery were incredible.', imageUrl: 'https://picsum.photos/seed/person1/100/100' },
  { id: '2', name: 'Jane Smith', quote: 'I loved exploring the ancient cities and beautiful beaches. Highly recommend!', imageUrl: 'https://picsum.photos/seed/person2/100/100' },
  { id: '3', name: 'Alex Johnson', quote: 'A truly magical country. The wildlife safari in Yala was a highlight.', imageUrl: 'https://picsum.photos/seed/person3/100/100' },
];

export const MAP_REGIONS: MapRegion[] = [
  { id: '1', name: 'Western Province', description: 'Home to the commercial capital, Colombo, and bustling city life.' },
  { id: '2', name: 'Central Province', description: 'Known for its scenic hill country, tea plantations, and Kandy.' },
  { id: '3', name: 'Southern Province', description: 'Famous for beautiful beaches, Galle Fort, and wildlife.' },
  { id: '4', name: 'Eastern Province', description: 'Offers pristine beaches, surfing spots, and unique culture.' },
  { id: '5', name: 'Northern Province', description: 'Rich in history and culture, recovering and developing rapidly.' },
];
    