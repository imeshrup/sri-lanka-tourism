
export interface NavLinkItem {
  name: string;
  path: string;
}

export interface Destination {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  region?: string;
}

export interface Experience {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  category?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  imageUrl: string;
}

export interface MapRegion {
  id: string;
  name: string;
  coordinates?: { lat: number; lng: number }; // For future map integration
  description: string;
}
    