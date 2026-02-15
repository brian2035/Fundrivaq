
import React, { useState } from 'react';
import { 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  AreaChart, 
  Area 
} from 'recharts';
import { 
  DollarSign, 
  TrendingUp, 
  Users, 
  Plus, 
  Settings,
  Wallet,
  Check,
  Copy,
  ExternalLink,
  ArrowUpRight,
  Loader2,
  X
} from 'lucide-react';
import { MOCK_CAMPAIGNS, COLORS } from '../constants';
import { Link } from 'react-router-dom';
import { User } from '../types';

const data = [
  { name: 'Mon', amount: 400 },
  { name: 'Tue', amount: 300 },
  { name: 'Wed', amount: 900 },
  { name: 'Thu', amount: 700 },
  { name: 'Fri', amount: 1500 },
  { name: 'Sat', amount: 2100 },
  { name: 'Sun', amount: 1800 },
];

interface DashboardProps {
  user: User;
}

const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  const [copied, setCopied] = useState(false);
  const [showWithdraw, setShowWithdraw] = useState(false);
  const [withdrawing, setWithdrawing] = useState(false);
  const shareLink = `fundrivaq.com/u/${user.username}`;

  const copyLink = () => {
    navigator.clipboard.writeText(shareLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWithdraw = () => {
    setWithdrawing(true);
    setTimeout(() => {
      setWithdrawing(false);
      setShowWithdraw(false);
      alert('Withdrawal successful! Funds will arrive in 1-3 business days.');
    }, 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-10 animate-fade-in relative">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-extrabold text-slate-900">Dashboard</h1>
          <p className="text-slate-500">Welcome back, {user.name.split(' ')[0]}. Here's your global reach today.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/create" className="bg-emerald-600 text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-emerald-700 transition-all shadow-md">
            <Plus className="w-5 h-5" />
            New Campaign
          </Link>
          <Link to="/setup-profile" className="bg-white border border-slate-200 p-3 rounded-full hover:bg-slate-50 transition-all">
            <Settings className="w-5 h-5 text-slate-600" />
          </Link>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Raised', value: '$1,240.00', icon: DollarSign, trend: '+5.4%' },
          { label: 'Campaign Reach', value: '452', icon: TrendingUp, trend: '+12%' },
          { label: 'Global Donors', value: '28', icon: Users, trend: '+3 today' },
          { label: 'Available Payout', value: '$850.00', icon: Wallet, trend: 'Ready', action: () => setShowWithdraw(true) }
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between hover:border-emerald-200 transition-all group">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-emerald-50 p-2 rounded-xl group-hover:bg-emerald-100 transition-colors">
                <stat.icon className="w-6 h-6 text-emerald-600" />
              </div>
              <span className={`text-xs font-bold px-2 py-1 rounded-full ${stat.trend.startsWith('+') ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-600'}`}>
                {stat.trend}
              </span>
            </div>
            <div>
              <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
              <div className="flex items-end justify-between">
                <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                {stat.action && (
                  <button onClick={stat.action} className="text-xs font-bold text-emerald-600 flex items-center gap-1 hover:underline">
                    Withdraw <ArrowUpRight className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Chart */}
        <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-900">Donation Activity</h3>
            <div className="flex gap-2">
              <select className="bg-slate-50 border border-slate-200 text-xs font-bold text-slate-500 rounded-xl px-3 py-1.5 focus:ring-0 outline-none">
                <option>Week</option>
                <option>Month</option>
              </select>
            </div>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={COLORS.primary} stopOpacity={0.1}/>
                    <stop offset="95%" stopColor={COLORS.primary} stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
                />
                <Area type="monotone" dataKey="amount" stroke={COLORS.primary} strokeWidth={3} fillOpacity={1} fill="url(#colorAmount)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-8">
          <div className="bg-emerald-950 text-white p-8 rounded-[2rem] shadow-xl space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">Your TipJar</h3>
              <div className="bg-emerald-500/20 px-2 py-1 rounded-full text-[10px] font-bold text-emerald-400 uppercase tracking-widest border border-emerald-500/30">Active</div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white/10 p-4 rounded-2xl space-y-2">
                <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest opacity-60">Personal Link</p>
                <div className="flex items-center justify-between gap-3 overflow-hidden">
                  <p className="text-sm font-medium truncate flex-1">{shareLink}</p>
                  <div className="flex gap-1 flex-shrink-0">
                    <button onClick={copyLink} className="p-2 hover:bg-white/10 rounded-xl transition-colors text-emerald-400">
                      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                    <Link to={`/u/${user.username}`} className="p-2 hover:bg-white/10 rounded-xl transition-colors text-emerald-400">
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between border-t border-white/10">
              <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <img key={i} src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i+10}`} className="w-8 h-8 rounded-full border-2 border-emerald-950 bg-white" alt="Supporter" />
                ))}
                <div className="w-8 h-8 rounded-full border-2 border-emerald-950 bg-emerald-800 flex items-center justify-center text-[10px] font-bold text-emerald-200">+25</div>
              </div>
              <p className="text-xs text-emerald-200/60 font-medium">Recent Supporters</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900">Active Campaign</h3>
              <Link to={`/campaign/${MOCK_CAMPAIGNS[0].id}`} className="text-emerald-600 text-xs font-bold hover:underline">Manage</Link>
            </div>
            <div className="flex items-center gap-4">
              <img src={MOCK_CAMPAIGNS[0].imageUrl} alt="" className="w-16 h-16 rounded-2xl object-cover" />
              <div className="flex-1 min-w-0">
                <p className="font-bold text-slate-900 truncate">{MOCK_CAMPAIGNS[0].title}</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex-1 h-1.5 bg-slate-100 rounded-full">
                    <div className="h-full bg-emerald-500 rounded-full" style={{width: '65%'}} />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400">65%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Withdrawal Modal Simulation */}
      {showWithdraw && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white max-w-md w-full rounded-[2.5rem] shadow-2xl p-8 space-y-8 animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center">
              <div className="bg-emerald-50 p-3 rounded-2xl">
                <Wallet className="w-8 h-8 text-emerald-600" />
              </div>
              <button onClick={() => setShowWithdraw(false)} className="p-2 hover:bg-slate-100 rounded-full transition-all">
                <X className="w-6 h-6 text-slate-400" />
              </button>
            </div>
            
            <div className="space-y-2">
              <h2 className="text-3xl font-extrabold text-slate-900">Withdraw Funds</h2>
              <p className="text-slate-500 leading-relaxed">Your available balance of <span className="text-slate-900 font-bold">$850.00</span> will be sent to your primary payout method.</p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Payout Method</p>
                <p className="font-bold text-slate-800">PayPal (p****@example.com)</p>
              </div>
              <Settings className="w-5 h-5 text-slate-400" />
            </div>

            <button 
              onClick={handleWithdraw}
              disabled={withdrawing}
              className="w-full bg-emerald-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-200 flex items-center justify-center gap-2"
            >
              {withdrawing ? <Loader2 className="w-6 h-6 animate-spin" /> : 'Confirm Withdrawal'}
            </button>
            
            <p className="text-center text-xs text-slate-400">Withdrawals usually process within 24-48 hours.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
