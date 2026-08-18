'use client';

import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { PortfolioShowcase } from '@/components/PortfolioShowcase';
import { Contact } from '@/components/Contact';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTabChange = (tab: string) => {
    if (tab !== activeTab) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveTab(tab);
        setIsTransitioning(false);
      }, 300);
    }
  };

  return (
    <main className="relative min-h-screen text-white overflow-x-hidden font-sans">
      {/* 1. Background Image */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/Assets/background.jpg')` }}
      />

      {/* 2. Glass Overlay */}
      <div className="fixed inset-0 z-10 bg-black/30 backdrop-blur-sm pointer-events-none" />

      {/* 3. Page Content */}
      <div className="relative z-20 flex flex-col min-h-screen">
        <Navbar activeTab={activeTab} setActiveTab={handleTabChange} />

        <div className="relative flex-grow overflow-hidden">
          {/* Animated Light Sweep Beam */}
          <div
            className={`pointer-events-none absolute inset-0 z-30 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent blur-xl transition-all duration-500 transform ${
              isTransitioning
                ? 'translate-x-full opacity-100'
                : '-translate-x-full opacity-0'
            }`}
          />

          {/* Dynamic Tab Content with Smooth Fade */}
          <div
            className={`transition-all duration-300 transform ${
              isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
            }`}
          >
            {activeTab === 'home' && <Hero />}
            {activeTab === 'about' && <About />}
            {activeTab === 'portfolio' && <PortfolioShowcase />}
            {activeTab === 'contact' && <Contact />}
          </div>
        </div>
      </div>
    </main>
  );
}