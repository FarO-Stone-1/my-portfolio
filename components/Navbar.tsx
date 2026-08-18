'use client';

import Link from 'next/link';

interface NavbarProps {
  activeTab?: string;
  setActiveTab?: (tab: string) => void;
}

export function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    if (setActiveTab) {
      setActiveTab(id);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-slate-950/60 border-b border-slate-800/80 shadow-lg shadow-black/20">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2">
        
        {/* Brand / Logo */}
        <button 
          onClick={() => handleNavClick('home')}
          className="text-white font-mono font-bold text-xs sm:text-base tracking-tight hover:text-blue-400 transition-colors text-left truncate"
        >
          asaretonysmithaikins.dev
        </button>

        {/* Always Visible Glassy Navigation Buttons */}
        <nav className="flex items-center gap-1 sm:gap-2">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-2.5 sm:px-4 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 backdrop-blur-md border ${
                  isActive
                    ? 'bg-blue-600/30 border-blue-400/50 text-white shadow-md shadow-blue-900/30'
                    : 'bg-slate-900/40 border-slate-800/60 text-gray-300 hover:bg-slate-800/60 hover:text-white hover:border-slate-700'
                }`}
              >
                {link.name}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}