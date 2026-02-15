
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Heart, Coffee, ShieldCheck, CreditCard, ChevronRight, Check, Globe } from 'lucide-react';
import { MOCK_USER } from '../constants';

const CURRENCIES = [
  { code: 'USD', symbol: '$', name: 'US Dollar' },
  { code: 'EUR', symbol: '€', name: 'Euro' },
  { code: 'GBP', symbol: '£', name: 'British Pound' },
  { code: 'CAD', symbol: 'CA$', name: 'Canadian Dollar' },
  { code: 'AUD', symbol: 'A$', name: 'Australian Dollar' },
  { code: 'JPY', symbol: '¥', name: 'Japanese Yen' },
  { code: 'NGN', symbol: '₦', name: 'Nigerian Naira' },
  { code: 'INR', symbol: '₹', name: 'Indian Rupee' },
];

const TipJar: React.FC = () => {
  const { username } = useParams<{ username: string }>();
  const [currency, setCurrency] = useState(CURRENCIES[0]);
  const [amount, setAmount] = useState<number>(5);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isRecurring, setIsRecurring] = useState<boolean>(false);
  const [step, setStep] = useState<number>(1);

  const presets = [5, 10, 25];

  const handleDonate = () => {
    setStep(2);
    setTimeout(() => setStep(3), 2000);
  };

  const currentSymbol = currency.symbol;

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 md:py-20">
      <div className="grid md:grid-cols-5 gap-12 items-start">
        {/* Profile Info */}
        <div className="md:col-span-2 space-y-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
            <img src={MOCK_USER.avatar} alt={MOCK_USER.name} className="w-32 h-32 rounded-3xl object-cover shadow-xl" />
            <div className="space-y-2">
              <h1 className="text-3xl font-extrabold text-slate-900">{MOCK_USER.name}</h1>
              <p className="text-emerald-600 font-bold">@{(username || MOCK_USER.username).toLowerCase()}</p>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed">
              {MOCK_USER.bio} I'm creating tools to help the world move toward a more sustainable future. Your support helps me keep building and sharing.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="font-bold text-slate-900">Recent Supporters</h3>
            <div className="space-y-3">
              {[
                { name: 'Sarah', amount: 10, msg: 'Keep up the great work!' },
                { name: 'David', amount: 5, msg: 'Thanks for the awesome tools.' }
              ].map((s, i) => (
                <div key={i} className="flex gap-3 text-sm">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">
                    {s.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">{s.name} <span className="text-slate-400 font-normal">bought a coffee</span></p>
                    <p className="text-slate-500 italic">"{s.msg}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Donation Card */}
        <div className="md:col-span-3">
          <div className="bg-white rounded-[2rem] border border-slate-200 shadow-2xl overflow-hidden">
            <div className="bg-emerald-600 p-8 text-white">
              <div className="flex items-center gap-3">
                <Coffee className="w-8 h-8" />
                <h2 className="text-2xl font-bold">Support {MOCK_USER.name.split(' ')[0]}</h2>
              </div>
            </div>

            <div className="p-8 space-y-8">
              {step === 1 && (
                <>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Select Amount</label>
                      <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200">
                        <Globe className="w-3.5 h-3.5 text-slate-400" />
                        <select 
                          className="bg-transparent text-xs font-bold text-slate-600 outline-none cursor-pointer"
                          value={currency.code}
                          onChange={(e) => {
                            const found = CURRENCIES.find(c => c.code === e.target.value);
                            if (found) setCurrency(found);
                          }}
                        >
                          {CURRENCIES.map(c => (
                            <option key={c.code} value={c.code}>{c.code} ({c.symbol})</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-3">
                      {presets.map(p => (
                        <button
                          key={p}
                          onClick={() => { setAmount(p); setCustomAmount(''); }}
                          className={`py-4 rounded-2xl font-bold text-xl transition-all border-2 ${amount === p && !customAmount ? 'border-emerald-500 bg-emerald-50 text-emerald-700' : 'border-slate-100 bg-slate-50 text-slate-400 hover:border-slate-200'}`}
                        >
                          {currentSymbol}{p}
                        </button>
                      ))}
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold">{currentSymbol}</span>
                        <input
                          type="number"
                          placeholder="Other"
                          className={`w-full h-full pl-8 pr-3 rounded-2xl border-2 font-bold focus:outline-none transition-all ${customAmount ? 'border-emerald-500 bg-emerald-50 text-emerald-700' : 'border-slate-100 bg-slate-50'}`}
                          value={customAmount}
                          onChange={(e) => { setCustomAmount(e.target.value); setAmount(0); }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Leave a message (Optional)</label>
                    <textarea
                      rows={3}
                      placeholder="Say something nice..."
                      className="w-full p-4 rounded-2xl border-2 border-slate-100 bg-slate-50 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>

                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-slate-200">
                        <Heart className="w-5 h-5 text-rose-500" />
                      </div>
                      <span className="font-bold text-slate-700">Make this monthly</span>
                    </div>
                    <button 
                      onClick={() => setIsRecurring(!isRecurring)}
                      className={`w-14 h-8 rounded-full transition-all relative ${isRecurring ? 'bg-emerald-500' : 'bg-slate-300'}`}
                    >
                      <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all shadow-sm ${isRecurring ? 'left-7' : 'left-1'}`} />
                    </button>
                  </div>

                  <button 
                    onClick={handleDonate}
                    className="w-full bg-emerald-600 text-white py-5 rounded-2xl font-bold text-xl hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100 flex items-center justify-center gap-2"
                  >
                    Support with {currentSymbol}{customAmount || amount}
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              {step === 2 && (
                <div className="py-20 text-center space-y-6">
                  <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-900">Connecting to secure gateway...</h3>
                    <p className="text-slate-500">Processing your {currentSymbol}{customAmount || amount} donation</p>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="py-12 text-center space-y-6 animate-fade-in">
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                    <Check className="w-10 h-10" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-3xl font-extrabold text-slate-900">Thank you!</h3>
                    <p className="text-slate-500 text-lg">Your support means the world to {MOCK_USER.name.split(' ')[0]}.</p>
                  </div>
                  <button 
                    onClick={() => setStep(1)}
                    className="text-emerald-600 font-bold hover:underline"
                  >
                    Send another gift
                  </button>
                </div>
              )}

              <div className="pt-6 border-t border-slate-100 flex items-center justify-center gap-6 grayscale opacity-50">
                <CreditCard className="w-6 h-6" />
                <span className="text-xs font-bold">PayPal</span>
                <span className="text-xs font-bold">Apple Pay</span>
                <span className="text-xs font-bold">Stripe</span>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-2 text-slate-400">
            <ShieldCheck className="w-5 h-5" />
            <span className="text-sm font-medium">Secured by Fundrivaq Global Payments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipJar;
