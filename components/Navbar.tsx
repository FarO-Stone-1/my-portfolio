'use client';

import { useState } from 'react';
import Link from 'next/link';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-slate-950/70 border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <button 
          onClick={() => handleNavClick('home')}
          className="text-white font-mono font-bold text-sm sm:text-base tracking-tight hover:text-blue-400 transition-colors text-left"
        >
          asarekofiaikins.dev
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`transition-colors cursor-pointer ${
                activeTab === link.id ? 'text-blue-400 font-semibold' : 'hover:text-white'
              }`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-slate-800/60 focus:outline-none transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              // Close X Icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Menu Icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-slate-950/95 border-b border-slate-800/80 backdrop-blur-xl px-4 py-6 shadow-2xl transition-all">
          <div className="flex flex-col gap-4 text-base font-medium text-gray-300">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left px-3 py-2 rounded-lg transition-colors ${
                  activeTab === link.id ? 'bg-slate-900 text-blue-400 font-semibold' : 'hover:bg-slate-900 hover:text-white'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}