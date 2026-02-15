
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CreateCampaign from './pages/CreateCampaign';
import Dashboard from './pages/Dashboard';
import Explore from './pages/Explore';
import HowItWorks from './pages/HowItWorks';
import AboutUs from './pages/AboutUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import HelpCentre from './pages/HelpCentre';
import TipJar from './pages/TipJar';
import Login from './pages/Login';
import SetupProfile from './pages/SetupProfile';
import CampaignDetails from './pages/CampaignDetails';
import { User } from './types';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  // Simple auth simulation
  useEffect(() => {
    const savedUser = localStorage.getItem('fundrivaq_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (userData: User) => {
    setUser(userData);
    localStorage.setItem('fundrivaq_user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('fundrivaq_user');
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#f8fafc]">
        <Navbar user={user} onLogout={handleLogout} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/setup-profile" element={user ? <SetupProfile user={user} onUpdate={handleLogin} /> : <Navigate to="/login" />} />
            <Route path="/create" element={user ? <CreateCampaign /> : <Navigate to="/login" />} />
            <Route path="/dashboard" element={user ? <Dashboard user={user} /> : <Navigate to="/login" />} />
            <Route path="/campaign/:id" element={<CampaignDetails />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/help-centre" element={<HelpCentre />} />
            <Route path="/u/:username" element={<TipJar />} />
            <Route path="/tipjar" element={<HowItWorks />} />
          </Routes>
        </main>
        <footer className="bg-white border-t border-slate-200 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              <div className="col-span-1 md:col-span-1 space-y-4">
                <div className="flex items-center gap-2">
                  <img src="https://i.ibb.co/hRCYSndB/DIJITICKETS-LOGO-1.png" alt="Logo" className="h-8 w-auto" />
                  <span className="text-2xl font-bold text-emerald-600">Fundrivaq</span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  The global space where support meets purpose. Raise funds and support others securely, transparently, and without limits.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-4">Platform</h4>
                <ul className="space-y-2 text-sm text-slate-500">
                  <li><Link to="/explore" className="hover:text-emerald-600 transition-colors">Explore</Link></li>
                  <li><Link to="/how-it-works" className="hover:text-emerald-600 transition-colors">How it Works</Link></li>
                  <li><Link to="/create" className="hover:text-emerald-600 transition-colors">Start a Campaign</Link></li>
                  <li><Link to="/dashboard" className="hover:text-emerald-600 transition-colors">Dashboard</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-4">Resources</h4>
                <ul className="space-y-2 text-sm text-slate-500">
                  <li><Link to="/help-centre" className="hover:text-emerald-600 transition-colors">Help Centre</Link></li>
                  <li><Link to="/about-us" className="hover:text-emerald-600 transition-colors">About Us</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-4">Legal</h4>
                <ul className="space-y-2 text-sm text-slate-500">
                  <li><Link to="/privacy-policy" className="hover:text-emerald-600 transition-colors">Privacy Policy</Link></li>
                  <li><Link to="/terms-of-service" className="hover:text-emerald-600 transition-colors">Terms of Service</Link></li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-400 text-xs text-center md:text-left">© 2024 Fundrivaq Inc. All rights reserved. Global donation processing powered by secure gateways.</p>
              <div className="flex gap-4 text-slate-400">
                <Globe className="w-4 h-4" />
                <span className="text-xs font-medium">English (US)</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

const Globe = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
);

export default App;
