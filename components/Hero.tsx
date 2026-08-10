'use client';

import { IdCard } from './IdCard';

export function Hero() {
  const techStack = ['TypeScript', 'React.js', 'Tailwind CSS', 'Next.js'];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-12 font-sans antialiased text-white">
      
      {/* Left Column: Intro & Details */}
      <div className="space-y-6 max-w-xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-600/40 text-emerald-400 text-xs font-mono shadow-md">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Frontend Developer
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
          Crafting intuitive, performant, and modern web applications.
        </h1>

        <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
          I specialize in building responsive user interfaces with <span className="text-blue-400 font-semibold">Next.js, React, and Tailwind CSS</span>. My focus is on delivering seamless user experiences through clean component architecture and smooth micro-animations.
        </p>

        {/* Technologies List */}
        <div className="space-y-3 pt-2">
          <h3 className="text-sm font-mono text-gray-400 uppercase tracking-wider">Technologies & Frameworks</h3>
          <div className="flex flex-wrap gap-2.5">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3.5 py-1.5 rounded-xl bg-blue-950/40 border border-blue-500/30 text-blue-300 text-xs font-mono shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column: Interactive ID Card Component */}
      <div className="w-full lg:w-auto flex justify-center">
        <IdCard />
      </div>

    </section>
  );
}