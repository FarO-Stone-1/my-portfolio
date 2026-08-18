'use client';

import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { PortfolioShowcase } from '@/components/PortfolioShowcase';
import { Contact } from '@/components/Contact';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');
  const [animKey, setAnimKey] = useState(0);

  const handleTabChange = (tab: string) => {
    if (tab !== activeTab) {
      setActiveTab(tab);
      setAnimKey((prev) => prev + 1); // Triggers the floodlight re-render
    }
  };

  return (
    <main className="relative min-h-screen text-white overflow-x-hidden font-sans">
      {/* 1. Pure Background Image */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/Assets/background.jpg')` }}
      />

      {/* 2. Dark Glass Backdrop */}
      <div className="fixed inset-0 z-10 bg-black/30 backdrop-blur-sm pointer-events-none" />

      {/* 3. Page Layout */}
      <div className="relative z-20 flex flex-col min-h-screen">
        <Navbar activeTab={activeTab} setActiveTab={handleTabChange} />

        {/* Floodlight Beam Transition Layer */}
        <div className="relative flex-grow overflow-hidden">
          {/* Animated Light Sweep Beam */}
          <div
            key={`light-${animKey}`}
            className="pointer-events-none absolute inset-0 z-30 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent blur-xl animate-floodlight"
          />

          {/* Dynamic Tab Content with Smooth Entrance */}
          <div key={`content-${animKey}`} className="animate-tab-appear">
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