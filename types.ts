
export interface User {
  id: string;
  username: string;
  name: string;
  avatar: string;
  bio: string;
  isVerified: boolean;
  payoutMethods?: PayoutMethod[];
}

export interface PayoutMethod {
  id: string;
  type: 'PayPal' | 'Bank' | 'Stripe' | 'Crypto';
  details: string;
  isDefault: boolean;
}

export interface Campaign {
  id: string;
  title: string;
  creator: User;
  description: string;
  goalAmount: number;
  currentAmount: number;
  category: CampaignCategory;
  imageUrl: string;
  deadline?: string;
  updates: CampaignUpdate[];
  donations: Donation[];
}

export interface Donation {
  id: string;
  donorName: string;
  amount: number;
  currency: string;
  message?: string;
  timestamp: string;
  isAnonymous: boolean;
}

export interface CampaignUpdate {
  id: string;
  title: string;
  content: string;
  timestamp: string;
}

export enum CampaignCategory {
  Medical = 'Medical',
  Education = 'Education',
  Charity = 'Charity',
  Startup = 'Startup',
  Emergency = 'Emergency',
  Creative = 'Creative',
  Community = 'Community'
}

export interface TipJarProfile {
  user: User;
  totalDonations: number;
  supportLink: string;
}
