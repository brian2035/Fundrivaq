
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Heart, 
  Share2, 
  ShieldCheck, 
  Globe, 
  ChevronRight, 
  Check, 
  ArrowLeft,
  Calendar,
  User,
  MessageSquare
} from 'lucide-react';
import { MOCK_CAMPAIGNS } from '../constants';
import { CATEGORY_ICONS } from '../constants';

const CURRENCIES = [
  { code: 'USD', symbol: '$' },
  { code: 'EUR', symbol: '€' },
  { code: 'GBP', symbol: '£' },
];

const CampaignDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const campaign = MOCK_CAMPAIGNS.find(c => c.id === id) || MOCK_CAMPAIGNS[0];
  
  const [currency, setCurrency] = useState(CURRENCIES[0]);
  const [amount, setAmount] = useState<number>(25);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [step, setStep] = useState(1);

  const progress = Math.min((campaign.currentAmount / campaign.goalAmount) * 100, 100);

  const handleDonate = () => {
    setStep(2);
    setTimeout(() => setStep(3), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 space-y-12 animate-fade-in">
      <Link to="/explore" className="inline-flex items-center gap-2 text-slate-500 hover:text-emerald-600 font-bold transition-colors">
        <ArrowLeft className="w-4 h-4" />
        Back to Explore
      </Link>

      <div className="grid lg:grid-cols-3 gap-12 items-start">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          <div className="space-y-6">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
              <img src={campaign.imageUrl} alt={campaign.title} className="w-full h-full object-cover" />
              <div className="absolute top-6 left-6 flex items-center gap-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-emerald-700 shadow-lg">
                {CATEGORY_ICONS[campaign.category]}
                {campaign.category}
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              {campaign.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-slate-500 border-y border-slate-100 py-6">
              <div className="flex items-center gap-2">
                <img src={campaign.creator.avatar} className="w-10 h-10 rounded-full border border-emerald-100" alt="" />
                <span className="font-bold text-slate-900">{campaign.creator.name}</span>
                {campaign.creator.isVerified && <ShieldCheck className="w-4 h-4 text-emerald-500" />}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-slate-400" />
                <span className="font-medium text-sm">Launched 2 weeks ago</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-slate-400" />
                <span className="font-medium text-sm">Global Campaign</span>
              </div>
            </div>
          </div>

          <div className="prose prose-lg prose-slate max-w-none">
            <h3 className="text-2xl font-bold text-slate-900">About this campaign</h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              {campaign.description}
            </p>
            <p className="text-slate-600 leading-relaxed text-lg">
              We are working around the clock to ensure every dollar raised goes directly to the project. Transparency is our priority, and we'll be providing weekly updates to all our donors.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-emerald-600" />
              Recent Donations
            </h3>
            <div className="space-y-4">
              {[
                { name: 'Michael R.', amount: 50, msg: 'Rooting for this project! Great cause.', time: '2 hours ago' },
                { name: 'Anonymous', amount: 100, msg: '', time: '5 hours ago' },
                { name: 'Elena G.', amount: 25, msg: 'Small contribution for a big impact.', time: 'Yesterday' }
              ].map((d, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-700 font-bold flex-shrink-0">
                    {d.name[0]}
                  </div>
                  <div className="space-y-1">
                    <p className="font-bold text-slate-900">{d.name} <span className="text-slate-400 font-normal">donated ${d.amount}</span></p>
                    {d.msg && <p className="text-slate-500 italic text-sm">"{d.msg}"</p>}
                    <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">{d.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Donation Box */}
        <div className="lg:sticky lg:top-24 space-y-6">
          <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-2xl p-8 space-y-8">
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <div>
                  <span className="text-3xl font-extrabold text-slate-900">${campaign.currentAmount.toLocaleString()}</span>
                  <p className="text-slate-500 text-sm">raised of ${campaign.goalAmount.toLocaleString()}</p>
                </div>
                <div className="text-emerald-600 font-extrabold text-xl">{Math.round(progress)}%</div>
              </div>
              <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${progress}%` }} />
              </div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest text-center">452 global donors</p>
            </div>

            {step === 1 && (
              <div className="space-y-6 animate-fade-in">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Contribution</label>
                    <select 
                      className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md outline-none"
                      value={currency.code}
                      onChange={e => setCurrency(CURRENCIES.find(c => c.code === e.target.value) || CURRENCIES[0])}
                    >
                      {CURRENCIES.map(c => <option key={c.code} value={c.code}>{c.code}</option>)}
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {[10, 25, 50, 100].map(p => (
                      <button 
                        key={p} 
                        onClick={() => { setAmount(p); setCustomAmount(''); }}
                        className={`py-3 rounded-xl font-bold transition-all border-2 ${amount === p && !customAmount ? 'border-emerald-500 bg-emerald-50 text-emerald-600' : 'border-slate-100 text-slate-400 hover:border-slate-200'}`}
                      >
                        {currency.symbol}{p}
                      </button>
                    ))}
                  </div>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-slate-400">{currency.symbol}</span>
                    <input 
                      type="number"
                      placeholder="Custom Amount"
                      className={`w-full pl-8 pr-4 py-3 rounded-xl border-2 font-bold focus:outline-none transition-all ${customAmount ? 'border-emerald-500 bg-emerald-50 text-emerald-600' : 'border-slate-100'}`}
                      value={customAmount}
                      onChange={e => { setCustomAmount(e.target.value); setAmount(0); }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <span className="font-bold text-sm text-slate-700">Donate Anonymously</span>
                  <button 
                    onClick={() => setIsAnonymous(!isAnonymous)}
                    className={`w-12 h-6 rounded-full transition-all relative ${isAnonymous ? 'bg-emerald-500' : 'bg-slate-300'}`}
                  >
                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${isAnonymous ? 'left-7' : 'left-1'}`} />
                  </button>
                </div>

                <button 
                  onClick={handleDonate}
                  className="w-full bg-emerald-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-100 flex items-center justify-center gap-2"
                >
                  Give {currency.symbol}{customAmount || amount}
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
                <p className="font-bold text-slate-700">Processing Contribution...</p>
              </div>
            )}

            {step === 3 && (
              <div className="py-8 text-center space-y-6 animate-fade-in">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                  <Check className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-slate-900">Contribution Received!</h3>
                  <p className="text-slate-500">Thank you for supporting this cause.</p>
                </div>
                <button onClick={() => setStep(1)} className="text-emerald-600 font-bold text-sm hover:underline">Donate again</button>
              </div>
            )}
          </div>

          <div className="bg-slate-900 text-white p-6 rounded-3xl space-y-4">
            <div className="flex items-center gap-3">
              <Share2 className="w-5 h-5 text-emerald-400" />
              <h4 className="font-bold">Share & Support</h4>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">Sharing this campaign is just as powerful as donating. Every share brings an average of $15 in support.</p>
            <button className="w-full bg-white/10 hover:bg-white/20 py-3 rounded-xl font-bold text-sm transition-all">Copy Link</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
