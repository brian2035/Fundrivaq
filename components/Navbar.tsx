
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, User, PlusCircle, LogOut, Settings } from 'lucide-react';
import { User as UserType } from '../types';

interface NavbarProps {
  user: UserType | null;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ user, onLogout }) => {
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center gap-2">
              <img src="https://i.ibb.co/hRCYSndB/DIJITICKETS-LOGO-1.png" alt="Fundrivaq Logo" className="h-8 w-auto" />
              <span className="text-2xl font-bold tracking-tight text-emerald-600 hidden sm:block">Fundrivaq</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/explore" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">Explore</Link>
            <Link to="/how-it-works" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">How it Works</Link>
            {user && <Link to="/dashboard" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">Dashboard</Link>}
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-slate-500 hover:text-emerald-600 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            
            {user ? (
              <div className="flex items-center gap-2">
                <Link 
                  to="/create" 
                  className="hidden sm:flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-full font-medium hover:bg-emerald-700 transition-all shadow-sm"
                >
                  <PlusCircle className="w-4 h-4" />
                  Create
                </Link>
                <div className="relative group">
                  <button className="flex items-center gap-2 p-1 rounded-full hover:bg-slate-100 transition-all border border-transparent hover:border-slate-200">
                    <img src={user.avatar} className="w-8 h-8 rounded-full border border-emerald-100" alt={user.name} />
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-200 rounded-2xl shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform origin-top-right scale-95 group-hover:scale-100 z-50">
                    <Link to="/dashboard" className="flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">
                      <User className="w-4 h-4" /> Dashboard
                    </Link>
                    <Link to="/setup-profile" className="flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">
                      <Settings className="w-4 h-4" /> Profile Setup
                    </Link>
                    <hr className="my-1 border-slate-100" />
                    <button 
                      onClick={() => { onLogout(); navigate('/'); }}
                      className="w-full flex items-center gap-3 px-4 py-2 text-sm text-rose-600 hover:bg-rose-50"
                    >
                      <LogOut className="w-4 h-4" /> Logout
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <Link 
                to="/login" 
                className="bg-emerald-600 text-white px-6 py-2 rounded-full font-bold hover:bg-emerald-700 transition-all shadow-md"
              >
                Sign In
              </Link>
            )}
            
            <button className="md:hidden p-2 text-slate-500">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
