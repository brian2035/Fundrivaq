
import React from 'react';
import { Search, Book, MessageSquare, Shield, HelpCircle } from 'lucide-react';

const HelpCentre: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20 space-y-16">
      <div className="text-center space-y-6 max-w-3xl mx-auto">
        <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight">Help Centre</h1>
        <p className="text-xl text-slate-500">How can we help you today? Find guides, FAQs, and support channels below.</p>
        
        <div className="relative mt-10">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search for articles, guides..." 
            className="w-full pl-16 pr-8 py-5 rounded-3xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 shadow-lg shadow-slate-100"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { icon: Book, title: 'Basics', desc: 'Setting up your profile' },
          { icon: HelpCircle, title: 'Campaigns', desc: 'Starting and managing' },
          { icon: Shield, title: 'Security', desc: 'Trust and verification' },
          { icon: MessageSquare, title: 'Tips', desc: 'Using the TipJar' }
        ].map((item, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-emerald-500 transition-all cursor-pointer group shadow-sm">
            <div className="bg-emerald-50 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <item.icon className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">{item.title}</h3>
            <p className="text-slate-500 text-sm mt-2">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-slate-900 text-white rounded-3xl p-12 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Still need help?</h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Our support team is available globally to ensure your experience is seamless. We aim to respond to all inquiries as quickly as possible.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase">Support Email</p>
                <p className="font-medium">support@fundrivaq.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase">Legal & Privacy</p>
                <p className="font-medium">legal@fundrivaq.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-6">
          <h3 className="font-bold text-xl">Quick Links</h3>
          <ul className="space-y-4 text-slate-400">
            <li className="hover:text-emerald-400 cursor-pointer transition-colors">How to withdraw funds?</li>
            <li className="hover:text-emerald-400 cursor-pointer transition-colors">Campaign verification process</li>
            <li className="hover:text-emerald-400 cursor-pointer transition-colors">Fee structure explained</li>
            <li className="hover:text-emerald-400 cursor-pointer transition-colors">Privacy and donor anonymity</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HelpCentre;
