import {
  PricingTier,
  PricingTierFrequency,
} from '@/data/config/pricingDataInterface';

export const pricingSignupUrl = '#';

export const pricingFrequencies: PricingTierFrequency[] = [
  { id: '1', value: '1', label: 'Monthly', priceSuffix: '/month' },
  { id: '1', value: '2', label: 'Annually', priceSuffix: '/year' },
];

export const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    id: 'tier-1',
    href: '/login',
    price: { 1: '$0', 2: '$0' },
    discountPrice: { 1: '', 2: '' },
    description: 'Perfect for new tutors just getting started.',
    features: [
      'Up to 5 students',
      'Basic scheduling',
      'Simple payment tracking',
      'Student progress notes',
    ],
    featured: false,
    highlighted: false,
    cta: 'Start for Free',
  },
  {
    name: 'Professional',
    id: 'tier-2',
    href: '/login',
    discountPrice: { 1: '', 2: '' },
    price: { 1: '$15', 2: '$150' },
    description: 'For full-time tutors managing a growing business.',
    features: [
      'Unlimited students',
      'Advanced calendar & scheduling',
      'Automated payment reminders',
      'Financial reports & analytics',
      'Lesson material storage',
    ],
    featured: true,
    highlighted: true,
    cta: 'Get Professional',
    soldOut: false,
  },
];
