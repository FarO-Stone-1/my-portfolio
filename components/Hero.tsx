'use client';

import Image from 'next/image';

export function Hero() {
  const technologies = ['TypeScript', 'React.js', 'Tailwind CSS', 'Next.js'];

  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] px-4 py-8 text-center relative overflow-hidden">
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

        {/* Hanging Swinging Lanyard Badge */}
        <div className="relative mt-2 flex flex-col items-center animate-[swing_5s_ease-in-out_infinite] origin-top">
          {/* Lanyard Rope/String */}
          <div className="w-1 h-20 bg-gradient-to-b from-blue-500 via-slate-400 to-slate-200 shadow-md" />

          {/* Metal Clip Ring */}
          <div className="w-5 h-5 rounded-full border-2 border-slate-300 bg-slate-800 -mt-1 z-10 flex items-center justify-center shadow-md">
            <div className="w-2 h-2 rounded-full bg-slate-400" />
          </div>

          {/* Glass ID Badge */}
          <div className="relative -mt-1 p-2.5 bg-slate-900/70 border border-slate-700/80 rounded-2xl backdrop-blur-lg shadow-2xl max-w-[200px] sm:max-w-[220px]">
            {/* Lanyard Hole Clip Slot */}
            <div className="w-10 h-1.5 bg-slate-800 rounded-full mx-auto mb-2 border border-slate-600" />

            <div className="relative w-44 h-52 sm:w-48 sm:h-56 overflow-hidden rounded-xl border border-slate-700/50">
              <Image
                src="/Assets/Asare1.jpg"
                alt="Asare Kofi Aikins"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="mt-2 text-center">
              <p className="text-xs font-bold text-white tracking-wide">Asare Kofi Aikins</p>
              <p className="text-[10px] text-blue-400 font-mono">Frontend Developer</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}