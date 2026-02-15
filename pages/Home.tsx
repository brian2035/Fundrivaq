
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, ShieldCheck, Heart, Coffee, TrendingUp } from 'lucide-react';
import CampaignCard from '../components/CampaignCard';
import { MOCK_CAMPAIGNS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 animate-fade-in">
            Global Fundraising Platform
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 max-w-4xl mx-auto leading-[1.1]">
            Raise Funds. <span className="text-emerald-600">Support Globally.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Fundrivaq is the all-in-one platform for creators, communities, and NGOs to receive donations and launch powerful campaigns with ease.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link 
              to="/create" 
              className="w-full sm:w-auto bg-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-200/50 flex items-center justify-center gap-2"
            >
              Start Fundraising
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/explore" 
              className="w-full sm:w-auto bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-all"
            >
              Explore Campaigns
            </Link>
          </div>

          <div className="pt-12 flex flex-wrap justify-center items-center gap-8 opacity-60">
            <span className="flex items-center gap-2 text-slate-600 font-medium"><ShieldCheck className="w-5 h-5 text-emerald-500" /> SECURE PAYMENTS</span>
            <span className="flex items-center gap-2 text-slate-600 font-medium"><Heart className="w-5 h-5 text-emerald-500" /> TRUSTED BY 10K+</span>
            <span className="flex items-center gap-2 text-slate-600 font-medium"><Globe className="w-5 h-5 text-emerald-500" /> 150+ COUNTRIES</span>
          </div>
        </div>
      </section>

      {/* Featured Campaigns */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Featured Campaigns</h2>
            <p className="text-slate-500">Discover incredible projects making a difference around the world.</p>
          </div>
          <Link to="/explore" className="text-emerald-600 font-bold flex items-center gap-1 hover:gap-2 transition-all">
            View all campaigns <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_CAMPAIGNS.map(campaign => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-emerald-950 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">One Platform, Dual Power</h2>
            <p className="text-emerald-200/80 max-w-2xl mx-auto">Whether you need a simple tip jar or a massive community campaign, Fundrivaq has you covered.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/5 border border-white/10 p-10 rounded-3xl space-y-6 hover:bg-white/10 transition-colors">
              <div className="bg-emerald-500/20 w-16 h-16 rounded-2xl flex items-center justify-center">
                <Coffee className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold">TipJar for Creators</h3>
              <p className="text-emerald-100/70 leading-relaxed">
                A simple, elegant link to receive appreciation. Perfect for developers, artists, and writers. Accept one-time or recurring tips with just a click.
              </p>
              <ul className="space-y-3">
                {['Unique /username link', 'Custom appreciation notes', 'Recurring support options', 'Low platform fees'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-emerald-100/60">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/tipjar" className="inline-block pt-4 text-emerald-400 font-bold">Set up your TipJar →</Link>
            </div>

            <div className="bg-white/5 border border-white/10 p-10 rounded-3xl space-y-6 hover:bg-white/10 transition-colors">
              <div className="bg-emerald-500/20 w-16 h-16 rounded-2xl flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold">Full-Scale Campaigns</h3>
              <p className="text-emerald-100/70 leading-relaxed">
                Launch professional fundraising goals for medical needs, startups, or community projects. Robust tracking and social sharing built-in.
              </p>
              <ul className="space-y-3">
                {['Rich media support', 'Live progress tracking', 'Donor engagement tools', 'Verification badges'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-emerald-100/60">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/create" className="inline-block pt-4 text-emerald-400 font-bold">Start a campaign →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Security */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
        <h2 className="text-3xl font-bold text-slate-900">Your Security is Our Priority</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 grayscale opacity-60">
          <div className="flex flex-col items-center gap-2">
            <div className="text-xl font-bold text-slate-800">Stripe</div>
            <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Verified Partner</div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="text-xl font-bold text-slate-800">PCI-DSS</div>
            <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Compliant</div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="text-xl font-bold text-slate-800">PayPal</div>
            <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Accepted</div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="text-xl font-bold text-slate-800">SSL Secure</div>
            <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Encryption</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
