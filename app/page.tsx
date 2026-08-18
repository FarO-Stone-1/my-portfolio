'use client';

import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { PortfolioShowcase } from '@/components/PortfolioShowcase';
import { Contact } from '@/components/Contact';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <main className="relative min-h-screen text-white overflow-x-hidden font-sans bg-slate-950">
      {/* 1. Background Image */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/Assets/background.jpg')` }}
      />

      {/* 2. Glass Overlay */}
      <div className="fixed inset-0 z-10 bg-black/40 backdrop-blur-sm pointer-events-none" />

      {/* 3. Main Content Container */}
      <div className="relative z-20 flex flex-col min-h-screen">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="flex-grow p-4 sm:p-6">
          <div key={activeTab} className="transition-all duration-300 ease-in-out animate-in fade-in zoom-in-95">
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