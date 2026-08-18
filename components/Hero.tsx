'use client';

import Image from 'next/image';

export function Hero() {
  const technologies = ['TypeScript', 'React.js', 'Tailwind CSS', 'Next.js'];

  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] px-4 py-8 text-center">
      <div className="max-w-3xl mx-auto space-y-6 flex flex-col items-center">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Frontend Developer
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
          Crafting intuitive, performant, and modern web applications.
        </h1>

        {/* Description Paragraph */}
        <p className="text-gray-300 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
          I specialize in building responsive user interfaces with{' '}
          <span className="text-blue-400 font-medium">Next.js</span>,{' '}
          <span className="text-blue-400 font-medium">React</span>, and{' '}
          <span className="text-blue-400 font-medium">Tailwind CSS</span>. My focus is on delivering seamless user experiences through clean component architecture and smooth micro-animations.
        </p>

        {/* Technologies List */}
        <div className="pt-2">
          <p className="text-xs uppercase tracking-widest text-slate-400 font-mono mb-3">
            Technologies & Frameworks
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium bg-slate-900/40 border border-slate-800/80 text-slate-300 backdrop-blur-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Restored Glassy ID Card / Photo Badge */}
        <div className="mt-8 relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300" />
          <div className="relative p-2 bg-slate-900/60 border border-slate-700/60 rounded-2xl backdrop-blur-md shadow-2xl">
            <div className="relative w-44 h-56 sm:w-52 sm:h-64 overflow-hidden rounded-xl">
              <Image
                src="/Assets/profile.jpg"
                alt="Asare Kofi Aikins"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}