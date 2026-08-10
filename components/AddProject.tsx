'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export function AddProject() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [year, setYear] = useState('');
  const [techInput, setTechInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    setIsSubmitting(true);

    // Convert comma-separated tech string into an array (e.g. "React, Tailwind" -> ["React", "Tailwind"])
    const techArray = techInput.split(',').map((t) => t.trim()).filter(Boolean);

    const { error } = await supabase.from('projects').insert([
      {
        title,
        category,
        description,
        year,
        tech: techArray,
      },
    ]);

    if (error) {
      console.error('Error adding project:', error);
      alert('Failed to upload project.');
    } else {
      alert('Project uploaded successfully!');
      setTitle('');
      setCategory('');
      setDescription('');
      setYear('');
      setTechInput('');
      window.location.reload(); // Refresh to show the new project
    }

    setIsSubmitting(false);
  };

  return (
    <div className="max-w-xl mx-auto my-12 p-6 md:p-8 rounded-2xl bg-blue-950/20 backdrop-blur-md border border-blue-500/20 shadow-2xl space-y-5">
      <div className="flex items-center gap-2 text-white font-semibold">
        <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
        </svg>
        <h3 className="tracking-wide">Upload New Project (Browser Form)</h3>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Project Title (e.g., School Management System)"
            className="w-full px-4 py-3 rounded-xl bg-black/30 border border-blue-500/20 text-white placeholder-blue-300/40 focus:outline-none focus:border-blue-400 text-sm font-sans"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Category (e.g., Web Portal)"
            className="w-full px-4 py-3 rounded-xl bg-black/30 border border-blue-500/20 text-white placeholder-blue-300/40 focus:outline-none focus:border-blue-400 text-sm font-sans"
          />
          <input
            type="text"
            required
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder="Year (e.g., 2026)"
            className="w-full px-4 py-3 rounded-xl bg-black/30 border border-blue-500/20 text-white placeholder-blue-300/40 focus:outline-none focus:border-blue-400 text-sm font-sans"
          />
        </div>
        <div>
          <textarea
            rows={3}
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Project Description..."
            className="w-full px-4 py-3 rounded-xl bg-black/30 border border-blue-500/20 text-white placeholder-blue-300/40 focus:outline-none focus:border-blue-400 text-sm font-sans resize-none"
          />
        </div>
        <div>
          <input
            type="text"
            value={techInput}
            onChange={(e) => setTechInput(e.target.value)}
            placeholder="Technologies (comma separated: React, Tailwind, Supabase)"
            className="w-full px-4 py-3 rounded-xl bg-black/30 border border-blue-500/20 text-white placeholder-blue-300/40 focus:outline-none focus:border-blue-400 text-sm font-sans"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-medium text-sm hover:from-blue-500 hover:to-emerald-500 transition-all shadow-md active:scale-[0.98] disabled:opacity-50 tracking-wide"
        >
          {isSubmitting ? 'Uploading...' : 'Publish Project'}
        </button>
      </form>
    </div>
  );
}