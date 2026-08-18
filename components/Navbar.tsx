'use client';

import { Download } from 'lucide-react';

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
          className="text-white font-mono font-bold text-xs sm:text-base tracking-tight hover:text-blue-400 transition-colors text-left truncate active:scale-95 transform duration-150"
        >
          asarekofiaikins.dev
        </button>

        {/* Right Section: Navigation Links & Glassy CV Button */}
        <div className="flex items-center gap-1.5 sm:gap-3">
          <nav className="flex items-center gap-1 sm:gap-2">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-2.5 sm:px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 backdrop-blur-md border ${
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

          {/* Frosted Glass CV Button */}
          <a
            href="/Asare_Kofi_Aikins_Frontend_CV.pdf"
            download="Asare_Kofi_Aikins_Frontend_CV.pdf"
            className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-xl text-xs sm:text-sm font-medium text-blue-300 bg-blue-950/40 backdrop-blur-md border border-blue-500/30 hover:bg-blue-600/20 hover:text-white hover:border-blue-400/60 transition-all duration-300 active:scale-95 shadow-sm shadow-blue-950/50"
          >
            <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400" />
            <span className="hidden xs:inline sm:inline">CV</span>
          </a>
        </div>
      </div>
    </header>
  );
}