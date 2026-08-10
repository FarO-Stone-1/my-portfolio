'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

export function PortfolioShowcase() {
  const [activeTab, setActiveTab] = useState<'Projects' | 'Certificates' | 'Tech Stack'>('Projects');
  const [items, setItems] = useState<any[]>([]);
  const [showAdmin, setShowAdmin] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Modal / Popup States
  const [itemToDelete, setItemToDelete] = useState<{ id: number | string; title: string } | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Form Fields
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [year, setYear] = useState('');
  const [techInput, setTechInput] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [issuer, setIssuer] = useState('');
  const [proficiency, setProficiency] = useState('');

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const fetchData = async () => {
    let tableName = 'projects';
    if (activeTab === 'Certificates') tableName = 'certificates';
    if (activeTab === 'Tech Stack') tableName = 'tech_stack';

    const { data, error } = await supabase.from(tableName).select('*').order('id', { ascending: false });

    if (error) {
      console.error(`Error fetching ${tableName}:`, error);
    } else if (data) {
      setItems(data);
    }
  };

  const handleAddItem = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    let tableName = 'projects';
    let payload: any = {};

    if (activeTab === 'Projects') {
      let finalImageUrl = null;

      if (imageFile) {
        const fileExt = imageFile.name.split('.').pop();
        const fileName = `${Date.now()}.${fileExt}`;
        const filePath = `${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('portfolio-images')
          .upload(filePath, imageFile);

        if (uploadError) {
          console.error('Image Upload Error:', uploadError);
          alert(`Image upload failed: ${uploadError.message}`);
          setIsSubmitting(false);
          return;
        }

        const { data: publicURLData } = supabase.storage
          .from('portfolio-images')
          .getPublicUrl(filePath);

        finalImageUrl = publicURLData.publicUrl;
      }

      tableName = 'projects';
      payload = {
        title: title.trim(),
        category: category.trim() || 'Projects',
        description: description.trim(),
        year: year.trim() || '2026',
        tech: techInput.split(',').map((t) => t.trim()).filter(Boolean),
        image_url: finalImageUrl,
      };
    } else if (activeTab === 'Certificates') {
      tableName = 'certificates';
      payload = {
        title: title.trim(),
        issuer: issuer.trim() || 'Institution',
        year: year.trim() || '2026',
      };
    } else if (activeTab === 'Tech Stack') {
      tableName = 'tech_stack';
      payload = {
        name: title.trim(),
        category: category.trim() || 'Core',
        proficiency: proficiency.trim() || 'Advanced',
      };
    }

    const { error } = await supabase.from(tableName).insert([payload]);

    if (error) {
      console.error('Supabase Error:', error);
      alert(`Failed to add item: ${error.message}`);
    } else {
      setTitle('');
      setCategory('');
      setDescription('');
      setYear('');
      setTechInput('');
      setImageFile(null);
      setIssuer('');
      setProficiency('');
      setShowAdmin(false);
      fetchData();
      setSuccessMessage('Item added successfully!');
    }

    setIsSubmitting(false);
  };

  const confirmDelete = async () => {
    if (!itemToDelete) return;

    let tableName = 'projects';
    if (activeTab === 'Certificates') tableName = 'certificates';
    if (activeTab === 'Tech Stack') tableName = 'tech_stack';

    // Permanently delete from Supabase database table
    const { error } = await supabase.from(tableName).delete().eq('id', itemToDelete.id);

    if (error) {
      console.error('Delete Error:', error);
      alert(`Failed to delete item: ${error.message}`);
      setItemToDelete(null);
    } else {
      // Instantly remove the deleted item from local state so it vanishes immediately and permanently
      setItems((prevItems) => prevItems.filter((item) => item.id !== itemToDelete.id));
      setItemToDelete(null);
      setSuccessMessage('Permanently deleted successfully!');
    }
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 font-sans antialiased text-white relative">
      
      {/* Custom Confirmation Dialog Modal */}
      {itemToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-md p-6 rounded-3xl bg-slate-900 border border-white/10 shadow-2xl space-y-6 text-center animate-in fade-in zoom-in duration-200">
            <div className="w-12 h-12 mx-auto rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 text-xl">
              ⚠️
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">Are you sure?</h3>
              <p className="text-sm text-gray-300">
                Do you really want to permanently delete <span className="text-white font-semibold">"{itemToDelete.title}"</span>? This action cannot be undone.
              </p>
            </div>
            <div className="flex gap-3 justify-center">
              <button
                onClick={() => setItemToDelete(null)}
                className="flex-1 py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-sm transition-all"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="flex-1 py-2.5 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-medium text-sm transition-all shadow-lg"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Notification Modal */}
      {successMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-sm p-6 rounded-3xl bg-slate-900 border border-emerald-500/30 shadow-2xl space-y-5 text-center animate-in fade-in zoom-in duration-200">
            <div className="w-12 h-12 mx-auto rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 text-xl">
              ✨
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-white">Success</h3>
              <p className="text-sm text-gray-300">{successMessage}</p>
            </div>
            <button
              onClick={() => setSuccessMessage(null)}
              className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm transition-all shadow-lg"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* Header section */}
      <div className="space-y-3">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
          Portfolio Showcase
        </h2>
        <p className="text-gray-300 text-sm sm:text-base font-normal max-w-2xl leading-relaxed">
          Explore my journey through projects, certifications, and technical expertise.
        </p>
      </div>

      {/* Mini Navbar (Tabs) & Admin Button */}
      <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4">
        <div className="flex overflow-x-auto gap-2 p-1.5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 w-full sm:w-fit">
          {(['Projects', 'Certificates', 'Tech Stack'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setShowAdmin(false);
              }}
              className={`flex-1 sm:flex-none px-5 py-2 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === tab ? 'bg-white text-black shadow-lg' : 'text-gray-300 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <button
          onClick={() => setShowAdmin(!showAdmin)}
          className="px-4 py-2.5 rounded-xl bg-blue-600/30 border border-blue-500/40 text-blue-300 text-xs font-mono hover:bg-blue-600/50 transition-all shadow-md text-center"
        >
          {showAdmin ? 'Close Admin Form' : `+ Add ${activeTab === 'Tech Stack' ? 'Tech Item' : activeTab.slice(0, -1)} (Admin)`}
        </button>
      </div>

      {/* Dynamic Admin Form */}
      {showAdmin && (
        <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-blue-950/40 backdrop-blur-md border border-blue-500/30 shadow-2xl space-y-4">
          <h3 className="text-lg font-bold text-white">Add New {activeTab === 'Tech Stack' ? 'Tech Item' : activeTab.slice(0, -1)}</h3>
          <form className="space-y-3" onSubmit={handleAddItem}>
            {activeTab === 'Projects' && (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Project Title" className="px-4 py-2 rounded-xl bg-black/40 border border-blue-500/20 text-white text-sm focus:outline-none focus:border-blue-400" />
                  <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category (e.g., School project)" className="px-4 py-2 rounded-xl bg-black/40 border border-blue-500/20 text-white text-sm focus:outline-none focus:border-blue-400" />
                  <input type="text" value={year} onChange={(e) => setYear(e.target.value)} placeholder="Year (e.g., 2026)" className="px-4 py-2 rounded-xl bg-black/40 border border-blue-500/20 text-white text-sm focus:outline-none focus:border-blue-400 sm:col-span-2 md:col-span-1" />
                </div>
                <textarea rows={2} required value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Project Description..." className="w-full px-4 py-2 rounded-xl bg-black/40 border border-blue-500/20 text-white text-sm focus:outline-none focus:border-blue-400 resize-none" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
                  <input type="text" value={techInput} onChange={(e) => setTechInput(e.target.value)} placeholder="Technologies (comma separated: XAMPP, PHP)" className="px-4 py-2 rounded-xl bg-black/40 border border-blue-500/20 text-white text-sm focus:outline-none focus:border-blue-400" />
                  <div className="flex flex-col gap-1">
                    <label className="text-xs text-gray-400 font-mono">Upload Project Screenshot</label>
                    <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files?.[0] || null)} className="text-xs text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-blue-600/40 file:text-blue-200 hover:file:bg-blue-600/60 transition-all cursor-pointer" />
                  </div>
                </div>
              </>
            )}

            {activeTab === 'Certificates' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Certificate Title" className="px-4 py-2 rounded-xl bg-black/40 border border-blue-500/20 text-white text-sm focus:outline-none focus:border-blue-400" />
                <input type="text" required value={issuer} onChange={(e) => setIssuer(e.target.value)} placeholder="Issuing Organization" className="px-4 py-2 rounded-xl bg-black/40 border border-blue-500/20 text-white text-sm focus:outline-none focus:border-blue-400" />
                <input type="text" value={year} onChange={(e) => setYear(e.target.value)} placeholder="Year Earned (e.g., 2026)" className="px-4 py-2 rounded-xl bg-black/40 border border-blue-500/20 text-white text-sm focus:outline-none focus:border-blue-400 sm:col-span-2 md:col-span-1" />
              </div>
            )}

            {activeTab === 'Tech Stack' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Technology Name (e.g., React)" className="px-4 py-2 rounded-xl bg-black/40 border border-blue-500/20 text-white text-sm focus:outline-none focus:border-blue-400" />
                <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category (e.g., Frontend)" className="px-4 py-2 rounded-xl bg-black/40 border border-blue-500/20 text-white text-sm focus:outline-none focus:border-blue-400" />
                <input type="text" value={proficiency} onChange={(e) => setProficiency(e.target.value)} placeholder="Proficiency (e.g., Advanced)" className="px-4 py-2 rounded-xl bg-black/40 border border-blue-500/20 text-white text-sm focus:outline-none focus:border-blue-400 sm:col-span-2 md:col-span-1" />
              </div>
            )}

            <button type="submit" disabled={isSubmitting} className="py-2.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-medium text-sm hover:opacity-90 transition-all shadow-md">
              {isSubmitting ? 'Publishing...' : `Save to ${activeTab}`}
            </button>
          </form>
        </div>
      )}

      {/* Dynamic Content Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {activeTab === 'Projects' && (
          items.length > 0 ? (
            items.map((item) => (
              <div key={item.id} className="p-5 sm:p-6 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl space-y-4 hover:border-white/20 transition-all group flex flex-col justify-between relative">
                
                <div className="w-full aspect-video rounded-2xl overflow-hidden relative border border-white/10 group-hover:border-blue-500/30 transition-all bg-black/20">
                  {item.image_url ? (
                    <img src={item.image_url} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-950/60 to-emerald-950/40 flex items-center justify-center text-gray-400 font-mono text-xs">
                      [ {item.title} Preview ]
                    </div>
                  )}
                </div>
                <div className="space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-mono text-emerald-400 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">{item.category}</span>
                      <span className="text-xs text-gray-400 font-mono">{item.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-wide">{item.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                  </div>
                  {item.tech && item.tech.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {item.tech.map((t: string, i: number) => (
                        <span key={i} className="text-xs px-2.5 py-1 rounded-md bg-blue-500/20 text-blue-300 border border-blue-500/30 font-mono">{t}</span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Smaller Dustbin Delete Button moved to the bottom */}
                <div className="flex justify-end pt-2">
                  <button
                    onClick={() => setItemToDelete({ id: item.id, title: item.title })}
                    className="z-20 bg-red-600/80 hover:bg-red-600 text-white p-1.5 rounded-lg shadow-md transition-all opacity-40 group-hover:opacity-100 flex items-center justify-center text-xs backdrop-blur-md"
                    title="Delete Project Permanently"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full p-12 text-center rounded-3xl bg-white/5 border border-white/10 text-gray-400 font-mono text-sm">No projects added yet.</div>
          )
        )}

        {activeTab === 'Certificates' && (
          items.length > 0 ? (
            items.map((item) => (
              <div key={item.id} className="p-6 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl space-y-4 hover:border-white/20 transition-all flex flex-col justify-between relative group">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-mono text-emerald-400 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">{item.issuer}</span>
                    <span className="text-xs text-gray-400 font-mono">{item.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-wide">{item.title}</h3>
                </div>
                <div className="pt-2 flex items-center justify-between border-t border-white/10 text-xs font-mono text-blue-300">
                  <span>🔒 Verified Credential</span>
                  <span className="text-gray-400">Securely Listed</span>
                </div>

                {/* Smaller Dustbin Delete Button moved to the bottom */}
                <div className="flex justify-end pt-2">
                  <button
                    onClick={() => setItemToDelete({ id: item.id, title: item.title })}
                    className="z-20 bg-red-600/80 hover:bg-red-600 text-white p-1.5 rounded-lg shadow-md transition-all opacity-40 group-hover:opacity-100 flex items-center justify-center text-xs backdrop-blur-md"
                    title="Delete Certificate Permanently"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full p-12 text-center rounded-3xl bg-white/5 border border-white/10 text-gray-400 font-mono text-sm">No certificates added yet.</div>
          )
        )}

        {activeTab === 'Tech Stack' && (
          items.length > 0 ? (
            items.map((item) => (
              <div key={item.id} className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl space-y-3 hover:border-white/20 transition-all flex justify-between items-center relative group">
                <div>
                  <span className="text-xs font-mono text-emerald-400 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">{item.category}</span>
                  <h3 className="text-xl font-bold text-white tracking-wide mt-2">{item.name}</h3>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs px-3 py-1.5 rounded-xl bg-blue-500/20 text-blue-300 border border-blue-500/30 font-mono">{item.proficiency}</span>
                  
                  {/* Smaller Dustbin Delete Button positioned cleanly to the side */}
                  <button
                    onClick={() => setItemToDelete({ id: item.id, title: item.name })}
                    className="z-20 bg-red-600/80 hover:bg-red-600 text-white p-1.5 rounded-lg shadow-md transition-all opacity-40 group-hover:opacity-100 flex items-center justify-center text-xs backdrop-blur-md"
                    title="Delete Tech Item Permanently"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full p-12 text-center rounded-3xl bg-white/5 border border-white/10 text-gray-400 font-mono text-sm">No tech stack items added yet.</div>
          )
        )}
      </div>
    </section>
  );
}