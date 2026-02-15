
import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, TrendingUp, ShieldCheck, Globe, CreditCard, Heart, ArrowRight } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="bg-emerald-600 text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">Simple. Global. Secure.</h1>
          <p className="text-xl text-emerald-50 leading-relaxed max-w-2xl mx-auto">
            Fundrivaq bridges the gap between those who need support and a global community ready to give. Here is how we make it happen.
          </p>
        </div>
      </section>

      {/* Feature Breakdown */}
      <div className="max-w-7xl mx-auto px-4 mt-20 space-y-32">
        {/* TipJar Section */}
        <section className="grid md:grid-cols-2 items-center gap-16">
          <div className="space-y-8">
            <div className="bg-emerald-50 w-16 h-16 rounded-3xl flex items-center justify-center">
              <Coffee className="w-8 h-8 text-emerald-600" />
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl font-extrabold text-slate-900">TipJar: Simple Appreciation</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Perfect for creators and individuals who want a low-pressure way to receive support. Set up your personal link in minutes and let your fans show their gratitude.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { title: 'Create Your Link', desc: 'Get a unique fundrivaq.com/yourname URL.' },
                { title: 'Accept Tips', desc: 'Allow one-time or monthly recurring donations.' },
                { title: 'Engagement', desc: 'Donors can leave messages with their tips.' }
              ].map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">{i + 1}</div>
                  <div>
                    <h4 className="font-bold text-slate-900">{step.title}</h4>
                    <p className="text-slate-500 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-100 rounded-3xl p-8 aspect-square relative overflow-hidden group">
            <div className="absolute inset-0 bg-emerald-600/5 group-hover:bg-emerald-600/0 transition-colors z-10"></div>
            <img src="https://picsum.photos/seed/tip/800/800" alt="TipJar illustration" className="w-full h-full object-cover rounded-2xl shadow-2xl" />
          </div>
        </section>

        {/* Campaign Section */}
        <section className="grid md:grid-cols-2 items-center gap-16">
          <div className="order-2 md:order-1 bg-slate-100 rounded-3xl p-8 aspect-square relative overflow-hidden group">
            <div className="absolute inset-0 bg-emerald-600/5 group-hover:bg-emerald-600/0 transition-colors z-10"></div>
            <img src="https://picsum.photos/seed/camp/800/800" alt="Campaign illustration" className="w-full h-full object-cover rounded-2xl shadow-2xl" />
          </div>
          <div className="order-1 md:order-2 space-y-8">
            <div className="bg-emerald-50 w-16 h-16 rounded-3xl flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-emerald-600" />
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl font-extrabold text-slate-900">Campaigns: Cause-Driven Impact</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Launch structured fundraising goals for bigger projects. Whether it's medical expenses, community initiatives, or startup funding, we provide the tools to reach your target.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { title: 'Set Your Goal', desc: 'Define exactly how much you need and by when.' },
                { title: 'Share Your Story', desc: 'Use AI-assisted descriptions and rich media.' },
                { title: 'Track Progress', desc: 'Live bar shows your community how close you are.' }
              ].map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">{i + 1}</div>
                  <div>
                    <h4 className="font-bold text-slate-900">{step.title}</h4>
                    <p className="text-slate-500 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Security Section */}
        <section className="bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-12 shadow-sm">
          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900">Trust Built-In</h2>
            <p className="text-slate-500">We prioritize the safety of every transaction and the privacy of every user.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="bg-emerald-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                <ShieldCheck className="w-6 h-6 text-emerald-600" />
              </div>
              <h4 className="font-bold text-slate-900">Secure Payments</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Every transaction is encrypted and handled by world-class partners like Stripe and PayPal.</p>
            </div>
            <div className="space-y-4">
              <div className="bg-emerald-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                <Globe className="w-6 h-6 text-emerald-600" />
              </div>
              <h4 className="font-bold text-slate-900">Global Reach</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Accept donations from 150+ countries in local currencies with automatic conversion.</p>
            </div>
            <div className="space-y-4">
              <div className="bg-emerald-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                <CreditCard className="w-6 h-6 text-emerald-600" />
              </div>
              <h4 className="font-bold text-slate-900">Multi-Currency</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Choose your payout currency and we handle the rest, ensuring you get exactly what you raised.</p>
            </div>
          </div>
        </section>

        <section className="text-center space-y-8">
          <h2 className="text-4xl font-extrabold text-slate-900">Ready to start?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/create" className="bg-emerald-600 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-emerald-200">
              Start Fundraising Now
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/explore" className="bg-white border border-slate-200 text-slate-900 px-10 py-5 rounded-full font-bold text-xl hover:bg-slate-50 transition-all">
              Explore Projects
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HowItWorks;
