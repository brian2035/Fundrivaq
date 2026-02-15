
import React from 'react';
import CampaignCard from '../components/CampaignCard';
import { MOCK_CAMPAIGNS } from '../constants';

const Explore: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div className="space-y-4">
        <h1 className="text-4xl font-extrabold text-slate-900">Explore Campaigns</h1>
        <p className="text-slate-500 text-lg">Support causes that matter to you, from anywhere in the world.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {MOCK_CAMPAIGNS.map(campaign => (
          <CampaignCard key={campaign.id} campaign={campaign} />
        ))}
      </div>
    </div>
  );
};

export default Explore;
