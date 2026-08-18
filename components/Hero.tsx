'use client';

import { IdCard } from './IdCard';

export function Hero() {
  const techStack = ['TypeScript', 'React.js', 'Tailwind CSS', 'Next.js'];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-12 font-sans antialiased text-white">
      
      {/* Left Column: Intro, Details & Download CV */}
      <div className="space-y-6 max-w-xl w-full">
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

        {/* Download CV Button Action */}
        <div className="pt-4">
          <a
            href="/Asare_Kofi_Aikins_Frontend_CV.pdf"
            download="Asare_Kofi_Aikins_Frontend_CV.pdf"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-lg hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 transform hover:-translate-y-0.5 border border-blue-400/30 w-full sm:w-auto text-center"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download CV
          </a>
        </div>
      </div>

      {/* Right Column: Interactive ID Card Component */}
      <div className="w-full lg:w-auto flex justify-center">
        <IdCard />
      </div>

    </section>
  );
}