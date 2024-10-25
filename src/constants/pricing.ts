import { Pricing } from '@/types/interfaces';

export const pricing: Pricing[] = [
  {
    title: 'Free',
    description: 'For small teams or office',
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      '10 users included',
      '2 GB of storage',
      'Help center access',
      'Email support',
    ],
    glowPosition: 'right',
  },
  {
    title: 'Team',
    description: 'For small teams or office',
    monthlyPrice: 9,
    yearlyPrice: 99,
    features: [
      '100 users included',
      '10 GB of storage',
      'Help center access',
      'Email support',
    ],
    isMostPopular: true,
    glowPosition: 'left',
  },
  {
    title: 'Enterprise',
    description: 'For small teams or office',
    monthlyPrice: 49,
    yearlyPrice: 499,
    features: [
      '1000 users included',
      '100 GB of storage',
      'Help center access',
      'Email support',
    ],
    glowPosition: 'right',
  },
];
