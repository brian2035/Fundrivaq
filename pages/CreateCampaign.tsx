
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Image, Info, Loader2, BookOpen } from 'lucide-react';
import { CampaignCategory } from '../types';

const CreateCampaign: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: CampaignCategory.Community,
    goal: '',
    deadline: '',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Launch Your Campaign</h1>
        <p className="text-slate-500">Let's set up everything you need to start raising funds globally.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-10">
        <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3 text-emerald-600 font-bold text-lg border-b border-slate-100 pb-4">
            <Info className="w-5 h-5" />
            Basic Information
          </div>

          <div className="grid gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Campaign Title</label>
              <input 
                required
                type="text" 
                placeholder="e.g. Solar Power for Remote Villages"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                value={formData.title}
                onChange={e => setFormData(prev => ({ ...prev, title: e.target.value }))}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Category</label>
                <select 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-white"
                  value={formData.category}
                  onChange={e => setFormData(prev => ({ ...prev, category: e.target.value as CampaignCategory }))}
                >
                  {Object.values(CampaignCategory).map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Goal Amount (USD)</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                  <input 
                    required
                    type="number" 
                    placeholder="0.00"
                    className="w-full pl-8 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                    value={formData.goal}
                    onChange={e => setFormData(prev => ({ ...prev, goal: e.target.value }))}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center border-b border-slate-100 pb-4">
            <div className="flex items-center gap-3 text-emerald-600 font-bold text-lg">
              <BookOpen className="w-5 h-5" />
              Campaign Story
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Full Description</label>
              <textarea 
                required
                rows={10}
                placeholder="Tell your story in detail. Transparently explain how funds will be used."
                className="w-full p-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                value={formData.description}
                onChange={e => setFormData(prev => ({ ...prev, description: e.target.value }))}
              />
            </div>
          </div>
        </section>

        <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3 text-emerald-600 font-bold text-lg border-b border-slate-100 pb-4">
            <Image className="w-5 h-5" />
            Media & Visuals
          </div>
          
          <div className="border-2 border-dashed border-slate-200 rounded-3xl p-12 text-center hover:border-emerald-500 transition-colors cursor-pointer group">
            <div className="bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-50">
              <Image className="w-8 h-8 text-slate-400 group-hover:text-emerald-500" />
            </div>
            <p className="font-bold text-slate-700">Upload Campaign Image</p>
            <p className="text-slate-400 text-sm mt-1">PNG, JPG or WEBP. Max 5MB.</p>
            <input type="file" className="hidden" />
          </div>
        </section>

        <div className="flex justify-end gap-4">
          <button 
            type="button" 
            onClick={() => navigate('/')}
            className="px-8 py-3 rounded-full font-bold text-slate-600 hover:bg-slate-100 transition-all"
          >
            Cancel
          </button>
          <button 
            type="submit"
            disabled={loading}
            className="bg-emerald-600 text-white px-12 py-3 rounded-full font-bold hover:bg-emerald-700 shadow-lg shadow-emerald-200 transition-all flex items-center gap-2 disabled:opacity-70"
          >
            {loading && <Loader2 className="w-5 h-5 animate-spin" />}
            Publish Campaign
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCampaign;
