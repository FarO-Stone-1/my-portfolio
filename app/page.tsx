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
    <main className="relative min-h-screen text-white overflow-x-hidden font-sans">
      {/* 1. Pure Background Image (Full Visibility) */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/Assets/background.jpg')` }}
      />

      {/* 2. Soft Light Glass Overlay (No dark masks, background is clearly seen) */}
      <div className="fixed inset-0 z-10 bg-black/20 backdrop-blur-sm pointer-events-none" />

      {/* 3. Page Content */}
      <div className="relative z-20 flex flex-col min-h-screen">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="pt-28 pb-16 flex-1 max-w-6xl w-full mx-auto px-6">
          {activeTab === 'home' && <Hero />}
          {activeTab === 'about' && <About />}
          {activeTab === 'portfolio' && <PortfolioShowcase />}
          {activeTab === 'contact' && <Contact />}
        </div>
      </div>
    </main>
  );
}