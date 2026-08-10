'use client';

import React from 'react';
import { TECH_STACK } from '@/data/portfolioData';
import { motion } from 'framer-motion';
import { Code2, FileCode, Palette, Globe, FileJson, Layout, Paintbrush } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-8 h-8 text-cyan-400" />,
  FileCode: <FileCode className="w-8 h-8 text-blue-400" />,
  Palette: <Palette className="w-8 h-8 text-teal-400" />,
  Globe: <Globe className="w-8 h-8 text-white" />,
  FileJson: <FileJson className="w-8 h-8 text-yellow-400" />,
  Layout: <Layout className="w-8 h-8 text-orange-400" />,
  Paintbrush: <Paintbrush className="w-8 h-8 text-sky-400" />,
};

export const TechStack = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {TECH_STACK.map((tech, index) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          whileHover={{ y: -5 }}
          className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center gap-3 text-center border border-white/5 hover:border-white/20 transition-all"
        >
          <div className="p-3 rounded-xl bg-white/5">
            {iconMap[tech.icon] || <Code2 className="w-8 h-8 text-gray-400" />}
          </div>
          <span className="font-mono text-sm font-medium text-gray-200">
            {tech.name}
          </span>
        </motion.div>
      ))}
    </div>
  );
};