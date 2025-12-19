export interface Slide {
  src: string;
  title?: string;
  description?: string;
  type: 'image' | 'video';
}

export interface Service {
  id: string;
  name: string;
  description?: string;
}

export interface FeatureSection {
  title: string;
  content: string;
  slides: Slide[];
  reverse?: boolean;
}

export interface PortfolioItem {
  image: string;
  title: string;
  description: string;
}

export interface FormData {
  name: string;
  position?: string;
  company?: string;
  email: string;
  phone: string;
  message?: string;
  consent: boolean;
}

