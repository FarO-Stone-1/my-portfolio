'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

// Realistic Braided Lanyard Rope
const LanyardRope = () => (
  <div className="absolute -top-[250px] left-1/2 -translate-x-1/2 w-6 h-[260px] z-10 flex flex-col items-center">
    {/* Rope Strand */}
    <svg width="14" height="240" viewBox="0 0 14 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M7 0V240" 
        stroke="url(#rope-texture)" 
        strokeWidth="6" 
        strokeLinecap="round"
      />
      <path 
        d="M7 0V240" 
        stroke="white" 
        strokeWidth="1.5" 
        strokeDasharray="4 4" 
        strokeOpacity="0.4"
      />
      <defs>
        <linearGradient id="rope-texture" x1="0" y1="0" x2="14" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#e2e8f0" />
          <stop offset="0.5" stopColor="#94a3b8" />
          <stop offset="1" stopColor="#64748b" />
        </linearGradient>
      </defs>
    </svg>

    {/* Metallic Clip Ring */}
    <div className="w-5 h-5 -mt-1 rounded-full border-2 border-slate-300 bg-gradient-to-b from-gray-200 to-gray-500 shadow-md flex items-center justify-center" />
  </div>
);

export function IdCard() {
  const avatarPath = '/Assets/Asare1.jpg';

  return (
    <div className="relative group pt-4">
      <motion.div 
        initial={{ y: -300, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ 
          y: { 
            type: 'spring', 
            stiffness: 90, 
            damping: 18, 
            delay: 0.1 
          },
          opacity: { 
            duration: 0.2, 
            delay: 0.1 
          }
        }}
      >
        <motion.div 
          animate={{ rotate: [-3, 3, -3] }}
          transition={{ 
            duration: 4, 
            ease: "easeInOut", 
            repeat: Infinity, 
            repeatType: "reverse",
            delay: 0.8
          }}
          style={{ transformOrigin: 'top center' }}
          className="relative z-20 w-full max-w-xs mx-auto p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl hover:border-white/40 transition-all duration-300"
        >
          {/* Lanyard Attachment Clip */}
          <LanyardRope />

          {/* Metal Pin Head */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-3 rounded-full bg-gradient-to-r from-gray-300 via-white to-gray-400 border border-white/50 shadow-sm z-30" />

          {/* Glass Photo Frame */}
          <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-black/20 border border-white/20 group-hover:scale-[1.02] transition-transform duration-300">
            <Image 
              src={avatarPath}
              alt="Asare Kofi Aikins"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Card Details */}
          <div className="mt-4 pt-3 border-t border-white/15 text-center space-y-1">
            <div className="inline-block px-2.5 py-0.5 rounded-full bg-white/10 text-[10px] uppercase tracking-wider text-emerald-400 font-mono font-medium border border-emerald-500/30">
              SD Card
            </div>
            <h3 className="font-bold text-white text-lg tracking-wide">
              Name: Asare Kofi Aikins
            </h3>
            <p className="text-xs text-gray-200 font-light">
              Position: Frontend Developer
            </p>
            <p className="text-[11px] text-gray-300 font-mono pt-1">
              Location: Accra, Ghana
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}