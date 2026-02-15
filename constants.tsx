
import React from 'react';
import { Campaign, CampaignCategory, User } from './types';
import { 
  Heart, 
  GraduationCap, 
  HandHelping, 
  Rocket, 
  AlertCircle, 
  Palette, 
  Users 
} from 'lucide-react';

export const COLORS = {
  primary: '#059669', // emerald-600
  secondary: '#10b981', // emerald-500
  accent: '#34d399', // emerald-400
  background: '#f8fafc',
  white: '#ffffff',
};

export const CATEGORY_ICONS: Record<CampaignCategory, React.ReactNode> = {
  [CampaignCategory.Medical]: <AlertCircle className="w-5 h-5" />,
  [CampaignCategory.Education]: <GraduationCap className="w-5 h-5" />,
  [CampaignCategory.Charity]: <Heart className="w-5 h-5" />,
  [CampaignCategory.Startup]: <Rocket className="w-5 h-5" />,
  [CampaignCategory.Emergency]: <HandHelping className="w-5 h-5" />,
  [CampaignCategory.Creative]: <Palette className="w-5 h-5" />,
  [CampaignCategory.Community]: <Users className="w-5 h-5" />,
};

export const MOCK_USER: User = {
  id: 'u1',
  username: 'alex_green',
  name: 'Alex Rivera',
  avatar: 'https://picsum.photos/seed/alex/200',
  bio: 'Building tools for a sustainable future.',
  isVerified: true
};

export const MOCK_CAMPAIGNS: Campaign[] = [
  {
    id: 'c1',
    title: 'Solar Power for Remote Villages',
    creator: MOCK_USER,
    description: 'Providing clean energy to underserved communities in rural areas. Our goal is to install solar panels in 50 households this year.',
    goalAmount: 25000,
    currentAmount: 12450,
    category: CampaignCategory.Community,
    imageUrl: 'https://picsum.photos/seed/solar/800/450',
    updates: [],
    donations: []
  },
  {
    id: 'c2',
    title: 'Tech for All: Coding Bootcamp for Kids',
    creator: { ...MOCK_USER, name: 'Sarah Chen', username: 'sarah_codes' },
    description: 'Empowering the next generation of developers by providing free coding workshops and laptops to underprivileged children.',
    goalAmount: 15000,
    currentAmount: 9800,
    category: CampaignCategory.Education,
    imageUrl: 'https://picsum.photos/seed/tech/800/450',
    updates: [],
    donations: []
  },
  {
    id: 'c3',
    title: 'Urgent: Help Restore The Local Park',
    creator: { ...MOCK_USER, name: 'Mayor Jenkins', username: 'city_hall' },
    description: 'The local community park was damaged in the recent storm. We need your help to rebuild the playground and plant new trees.',
    goalAmount: 8000,
    currentAmount: 2100,
    category: CampaignCategory.Emergency,
    imageUrl: 'https://picsum.photos/seed/park/800/450',
    updates: [],
    donations: []
  }
];
