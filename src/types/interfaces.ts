// client

export interface Client {
  imageUrl: string;
  alt: string;
}

// features card

export interface Feature {
  imageUrl: string;
  title: string;
  content: string;
}

export interface FeatureBlock extends Feature {
  isReversed: boolean;
}

// pricing
export interface Pricing {
  title: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  isMostPopular?: boolean;
  glowPosition?: 'right' | 'left';
}

// pricing Mode

export type PricingMode = 'monthly' | 'yearly';

// testimonial

export interface Testimonial {
  name: string;
  imageUrl: string;
  content: string;
  company: string;
  icon: string;
}

// social media
export type icons = 'instagram' | 'facebook' | 'twitter' | 'linkedin';
export interface SocialMedia {
  name: string;
  icon: icons;
  url: string;
}

// footer links
export interface link {
  title: string;
  link: string;
}
export interface FooterLinks {
  title: string;
  links: link[];
}
