'use client';

import { useState } from 'react';

interface TechItem {
  name: string;
  role: string;
  icon: string;
  description: string;
  features: string[];
  usage: string;
  cardStyle: string;
  iconStyle: string;
  roleStyle: string;
}

const technologies: TechItem[] = [
  {
    name: 'React.js',
    role: 'Frontend Library',
    icon: '⚛️',
    description: 'A component-based JavaScript library used for building interactive and high-performance user interfaces with seamless state management.',
    features: ['Virtual DOM for optimized rendering', 'Reusable component architecture', 'Rich ecosystem and hooks'],
    usage: 'Used to structure modular web application components and manage dynamic UI states efficiently.',
    cardStyle: 'bg-blue-950/20 border-blue-500/30 hover:border-blue-400/50',
    iconStyle: 'bg-blue-600/20 border-blue-500/40 text-blue-400',
    roleStyle: 'text-blue-300'
  },
  {
    name: 'TypeScript',
    role: 'Type Safety',
    icon: 'TS',
    description: 'A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale and early error detection.',
    features: ['Static type checking', 'Enhanced IDE autocompletion', 'Improved maintainability and code readability'],
    usage: 'Used to write robust, error-free code and enforce strict data contracts across frontend components.',
    cardStyle: 'bg-blue-950/20 border-blue-500/30 hover:border-blue-400/50',
    iconStyle: 'bg-blue-600/20 border-blue-500/40 text-blue-400',
    roleStyle: 'text-blue-300'
  },
  {
    name: 'Tailwind CSS',
    role: 'Styling Engine',
    icon: '🎨',
    description: 'A utility-first CSS framework packed with classes that can be composed to build any design directly in your markup.',
    features: ['Utility-first workflow', 'Responsive design modifiers', 'Customizable glassmorphism and theme configurations'],
    usage: 'Used to craft custom frosted, glassmorphic UI aesthetics, micro-animations, and responsive layouts rapidly.',
    cardStyle: 'bg-emerald-950/30 border-emerald-600/30 hover:border-emerald-500/50',
    iconStyle: 'bg-emerald-600/20 border-emerald-500/40 text-emerald-400',
    roleStyle: 'text-emerald-400'
  },
  {
    name: 'Next.js',
    role: 'Fullstack React',
    icon: '▲',
    description: 'A flexible React framework that gives you building blocks to create fast, full-stack web applications with server-side rendering.',
    features: ['Server-side rendering (SSR) & Static Site Generation (SSG)', 'File-system routing', 'Built-in API routes and optimization'],
    usage: 'Used to power scalable web application portals with optimized performance and clean routing structures.',
    cardStyle: 'bg-blue-950/20 border-blue-500/30 hover:border-blue-400/50',
    iconStyle: 'bg-blue-600/20 border-blue-500/40 text-blue-400',
    roleStyle: 'text-blue-300'
  },
  {
    name: 'JavaScript',
    role: 'Core Language',
    icon: 'JS',
    description: 'The high-level, dynamic programming language that powers modern web interactivity and application logic.',
    features: ['Asynchronous programming (Promises, async/await)', 'DOM manipulation and event handling', 'Modern ES6+ syntax'],
    usage: 'Used as the core programming foundation for building interactive logic and component behaviors.',
    cardStyle: 'bg-yellow-950/20 border-yellow-500/30 hover:border-yellow-400/50',
    iconStyle: 'bg-yellow-600/20 border-yellow-500/40 text-yellow-400',
    roleStyle: 'text-yellow-300'
  },
  {
    name: 'HTML5 & CSS3',
    role: 'Markup & Styling',
    icon: 'HTML',
    description: 'The foundational markup and styling languages used to structure and design responsive, accessible web pages.',
    features: ['Semantic markup structure', 'Flexbox & CSS Grid layouts', 'Modern styling and animations'],
    usage: 'Used to structure accessible web documents and apply custom styling foundations.',
    cardStyle: 'bg-orange-950/20 border-orange-500/30 hover:border-orange-400/50',
    iconStyle: 'bg-orange-600/20 border-orange-500/40 text-orange-400',
    roleStyle: 'text-orange-300'
  }
];

export function About() {
  const [selectedTech, setSelectedTech] = useState<TechItem | null>(null);

  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 font-sans antialiased text-white relative">
      
      {/* Hero / Header Section */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-600/40 text-emerald-400 text-xs font-mono shadow-md">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Frontend Developer & IT Professional
        </div>
        
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Crafting intuitive, performant, and modern web applications.
        </h1>
        
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-normal">
          I specialize in building responsive user interfaces with <span className="text-blue-400 font-semibold">React, Next.js, and Tailwind CSS</span>. My focus is on delivering seamless user experiences through clean component architecture, smooth micro-animations, and glassmorphic aesthetics.
        </p>
      </div>

      {/* Core Stack Grid */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-500"></span>
            Technologies & Frameworks
          </h2>
          <span className="text-xs font-mono text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/10 w-fit">
            💡 Click any card to see its description
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              onClick={() => setSelectedTech(tech)}
              className={`p-3.5 rounded-2xl backdrop-blur-md border shadow-lg space-y-2 transition-all group flex flex-col items-center text-center cursor-pointer ${tech.cardStyle}`}
            >
              <div className={`w-9 h-9 rounded-xl border flex items-center justify-center text-base group-hover:scale-110 transition-transform shadow-inner ${tech.iconStyle}`}>
                {tech.icon}
              </div>
              <div>
                <h3 className="font-bold text-white text-xs sm:text-sm group-hover:text-blue-200 transition-colors">{tech.name}</h3>
                <p className={`text-[10px] font-mono mt-0.5 ${tech.roleStyle}`}>{tech.role}</p>
              </div>
              <span className="text-[9px] font-mono text-gray-400 opacity-60 group-hover:opacity-100 pt-0.5">
                Explore →
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Background / Experience Summary Card with Deep Green & Blue accents */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-blue-950/50 via-slate-900 to-emerald-950/40 backdrop-blur-md border border-blue-500/30 shadow-2xl space-y-4">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
          Background & Journey
        </h3>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          Combining a strong foundation in Information Technology with hands-on development practice. I focus heavily on writing clean, maintainable code, implementing modern frosted UI designs with smooth animations, and ensuring responsive layouts across all devices. Also taking my Database studies seriously as I aspire to become a FULLSTACK Developer.I have worked with MySQL, PostgreSQL,PgAdmin4, PHPMyAdmin,XAMPP.
        </p>
        <div className="pt-2 flex flex-wrap gap-3">
          <span className="text-xs font-mono px-3 py-1.5 rounded-xl bg-blue-600/30 text-blue-200 border border-blue-500/40 shadow-sm">
            💻 Frontend Development
          </span>
          <span className="text-xs font-mono px-3 py-1.5 rounded-xl bg-emerald-900/50 text-emerald-300 border border-emerald-600/40 shadow-sm">
            🌐 Network Engineering Interest
          </span>
        </div>
      </div>

      {/* Interactive Detail Modal Popup */}
      {selectedTech && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <div className="w-full max-w-lg p-6 sm:p-8 rounded-3xl bg-slate-950/95 border border-white/15 shadow-2xl space-y-6 relative backdrop-blur-xl">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedTech(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-sm transition-all"
            >
              ✕
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-2xl font-bold font-mono text-blue-300">
                {selectedTech.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{selectedTech.name}</h3>
                <span className="text-xs font-mono text-emerald-400 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 inline-block mt-1">
                  {selectedTech.role}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2 text-sm text-gray-300 leading-relaxed">
              <p>{selectedTech.description}</p>
            </div>

            {/* Core Capabilities */}
            <div className="space-y-3">
              <h5 className="text-xs font-mono uppercase text-gray-400 tracking-wider">Core Capabilities</h5>
              <ul className="space-y-2">
                {selectedTech.features.map((feature, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-gray-200 flex items-center gap-2.5 bg-white/5 px-3.5 py-2 rounded-xl border border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Practical Application */}
            <div className="p-4 rounded-2xl bg-blue-950/30 border border-blue-500/20 space-y-1">
              <span className="text-xs font-mono text-blue-300 font-semibold block">Practical Application</span>
              <p className="text-xs text-gray-300 leading-relaxed">{selectedTech.usage}</p>
            </div>

            {/* Action Footer */}
            <button
              onClick={() => setSelectedTech(null)}
              className="w-full py-3 rounded-xl bg-white text-black font-semibold text-sm hover:bg-gray-200 transition-all shadow-lg"
            >
              Close
            </button>

          </div>
        </div>
      )}

    </section>
  );
}