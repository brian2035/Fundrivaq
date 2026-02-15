
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Check, AlertCircle, Copy, CheckCircle2, CreditCard, Wallet, Globe, ArrowRight, Loader2 } from 'lucide-react';
import { User as UserType } from '../types';

interface SetupProfileProps {
  user: UserType;
  onUpdate: (user: UserType) => void;
}

const SetupProfile: React.FC<SetupProfileProps> = ({ user, onUpdate }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [profile, setProfile] = useState({
    name: user.name || '',
    username: user.username || '',
    bio: user.bio || '',
    avatar: user.avatar || ''
  });

  const [payoutMethods, setPayoutMethods] = useState([
    { id: '1', type: 'PayPal', details: 'p****@example.com', active: true },
    { id: '2', type: 'Stripe', details: 'Connected', active: false },
    { id: '3', type: 'Bank', details: 'IBAN ending in 4421', active: false }
  ]);

  const handleSave = () => {
    setLoading(true);
    setTimeout(() => {
      onUpdate({ ...user, ...profile });
      setLoading(false);
      navigate('/dashboard');
    }, 1000);
  };

  const shareLink = `fundrivaq.com/u/${profile.username || 'username'}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-20 animate-fade-in">
      <div className="mb-12 text-center md:text-left">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Complete Your Profile</h1>
        <p className="text-slate-500 text-lg">Personalize your fundraiser and set up how you'll receive global support.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-8">
          {/* Identity Section */}
          <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4">Personal Details</h3>
            
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="relative group cursor-pointer">
                <img src={profile.avatar} className="w-24 h-24 rounded-3xl border-2 border-emerald-100 shadow-md group-hover:opacity-75 transition-all" alt="Avatar" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] font-bold bg-white/90 px-2 py-1 rounded-full text-slate-700">Change</span>
                </div>
              </div>
              <div className="flex-1 w-full space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                    value={profile.name}
                    onChange={e => setProfile({...profile, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Username (Unique Link)</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">fundrivaq.com/u/</span>
                    <input 
                      type="text" 
                      className="w-full pl-[118px] pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 font-bold text-emerald-600"
                      value={profile.username}
                      onChange={e => setProfile({...profile, username: e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, '')})}
                    />
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">This will be your unique donation link.</p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Bio</label>
              <textarea 
                rows={4}
                className="w-full p-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                placeholder="Tell your story. Why should people support you?"
                value={profile.bio}
                onChange={e => setProfile({...profile, bio: e.target.value})}
              />
            </div>
          </section>

          {/* Payout Methods */}
          <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <h3 className="text-xl font-bold text-slate-900">Payout Methods</h3>
              <button className="text-emerald-600 text-sm font-bold hover:underline flex items-center gap-1">
                Add New <ArrowRight className="w-3 h-3" />
              </button>
            </div>
            
            <div className="space-y-3">
              {payoutMethods.map((method) => (
                <div key={method.id} className={`flex items-center justify-between p-4 rounded-2xl border-2 transition-all ${method.active ? 'border-emerald-500 bg-emerald-50' : 'border-slate-50 bg-slate-50 opacity-60'}`}>
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${method.active ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-500'}`}>
                      {method.type === 'PayPal' ? <CreditCard className="w-5 h-5" /> : method.type === 'Bank' ? <Globe className="w-5 h-5" /> : <Wallet className="w-5 h-5" />}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{method.type}</p>
                      <p className="text-xs text-slate-500">{method.details}</p>
                    </div>
                  </div>
                  {method.active ? <CheckCircle2 className="w-5 h-5 text-emerald-600" /> : <button className="text-xs font-bold text-slate-400 hover:text-emerald-600">Activate</button>}
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar Preview/CTA */}
        <div className="space-y-6">
          <div className="bg-emerald-950 text-white p-8 rounded-[2rem] shadow-xl space-y-6 sticky top-24">
            <div className="space-y-2">
              <h4 className="text-emerald-400 text-xs font-bold uppercase tracking-widest">Shareable Link</h4>
              <div className="bg-white/10 p-4 rounded-2xl flex items-center justify-between gap-4 overflow-hidden">
                <p className="text-sm font-medium truncate opacity-80">{shareLink}</p>
                <button 
                  onClick={copyToClipboard}
                  className="bg-white text-emerald-900 p-2 rounded-xl hover:bg-emerald-50 transition-colors flex-shrink-0"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0"><Check className="w-3 h-3 text-white" /></div>
                <span>Global donation support</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0"><Check className="w-3 h-3 text-white" /></div>
                <span>150+ countries accepted</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0"><Check className="w-3 h-3 text-white" /></div>
                <span>Secure PCI-compliant storage</span>
              </div>
            </div>

            <button 
              onClick={handleSave}
              disabled={loading}
              className="w-full bg-emerald-500 text-white py-4 rounded-2xl font-bold text-lg hover:bg-emerald-400 transition-all shadow-lg flex items-center justify-center gap-2"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Complete Setup'}
            </button>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 text-center space-y-2">
            <AlertCircle className="w-6 h-6 text-amber-500 mx-auto mb-2" />
            <h5 className="font-bold text-slate-800">Verification Pending</h5>
            <p className="text-xs text-slate-500 leading-relaxed">Most accounts are verified within 24 hours of their first donation.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetupProfile;
