
import React from 'react';
import { Link } from 'react-router-dom';
import { Campaign } from '../types';
import { CATEGORY_ICONS } from '../constants';

interface CampaignCardProps {
  campaign: Campaign;
}

const CampaignCard: React.FC<CampaignCardProps> = ({ campaign }) => {
  const progress = Math.min((campaign.currentAmount / campaign.goalAmount) * 100, 100);

  return (
    <Link 
      to={`/campaign/${campaign.id}`}
      className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={campaign.imageUrl} 
          alt={campaign.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-emerald-700 shadow-sm border border-emerald-100">
          {CATEGORY_ICONS[campaign.category]}
          {campaign.category}
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-1 mb-2">
          {campaign.title}
        </h3>
        <p className="text-slate-500 text-sm line-clamp-2 mb-4 leading-relaxed">
          {campaign.description}
        </p>

        <div className="space-y-3">
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <div 
              className="bg-emerald-500 h-full rounded-full" 
              style={{ width: `${progress}%` }} 
            />
          </div>
          
          <div className="flex justify-between items-end">
            <div>
              <span className="text-lg font-bold text-slate-900">${campaign.currentAmount.toLocaleString()}</span>
              <span className="text-slate-400 text-sm ml-1">raised of ${campaign.goalAmount.toLocaleString()}</span>
            </div>
            <div className="text-emerald-600 font-semibold text-sm">
              {Math.round(progress)}%
            </div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2">
          <img src={campaign.creator.avatar} alt="" className="w-6 h-6 rounded-full" />
          <span className="text-xs text-slate-500">by <span className="font-medium text-slate-700">{campaign.creator.name}</span></span>
        </div>
      </div>
    </Link>
  );
};

export default CampaignCard;
