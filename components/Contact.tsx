'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

export function Contact() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [guestbookNotes, setGuestbookNotes] = useState<any[]>([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    const { data, error } = await supabase
      .from('guestbook')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching messages:', error);
    } else if (data) {
      setGuestbookNotes(data);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);

    const { error } = await supabase
      .from('guestbook')
      .insert([{ name, message }]);

    if (error) {
      console.error('Error adding message:', error);
      alert('Failed to post message. Please try again.');
    } else {
      setName('');
      setMessage('');
      fetchMessages(); 
    }

    setIsSubmitting(false);
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <section className="max-w-6xl mx-auto py-8 space-y-10 font-sans antialiased text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        
        {/* Left Side: Contact Information */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-emerald-400 font-mono font-semibold">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed font-normal">
              Have a project in mind, a collaboration inquiry, or just want to say hi? 
              Feel free to reach out directly through any of these channels.
            </p>
          </div>

          <div className="space-y-4">
            {/* Email */}
            <div className="p-4 rounded-xl bg-blue-950/25 backdrop-blur-md border border-blue-500/20 flex items-center gap-4 hover:border-blue-400/40 hover:bg-blue-900/20 transition-all shadow-lg">
              <div className="p-3 rounded-lg bg-blue-500/20 border border-blue-500/30 text-blue-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-blue-300 font-medium uppercase tracking-wide font-mono">Email</p>
                <a href="mailto:kofiasareaikins94@gmail.com" className="text-sm font-semibold text-white hover:text-blue-300 transition-colors">
                  kofiasareaikins94@gmail.com
                </a>
              </div>
            </div>

            {/* GitHub Profile */}
            <div className="p-4 rounded-xl bg-slate-900/40 backdrop-blur-md border border-white/10 flex items-center gap-4 hover:border-blue-400/40 hover:bg-white/5 transition-all shadow-lg">
              <div className="p-3 rounded-lg bg-white/10 border border-white/15 text-white flex items-center justify-center">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-300 font-medium uppercase tracking-wide font-mono">GitHub Profile</p>
                <a href="https://github.com/FarO-Stone-1" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white hover:text-blue-300 transition-colors">
                  github.com/FarO-Stone-1
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="p-4 rounded-xl bg-emerald-950/20 backdrop-blur-md border border-emerald-500/20 flex items-center gap-4 hover:border-emerald-400/40 hover:bg-emerald-900/20 transition-all shadow-lg">
              <div className="p-3 rounded-lg bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </div>
              <div>
                <p className="text-xs text-emerald-300 font-medium uppercase tracking-wide font-mono">WhatsApp</p>
                <a href="https://wa.me/233557815752" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white hover:text-emerald-300 transition-colors">
                  +233 55 781 5752
                </a>
              </div>
            </div>

            {/* Phone Call */}
            <div className="p-4 rounded-xl bg-blue-950/20 backdrop-blur-md border border-blue-500/20 flex items-center gap-4 hover:border-blue-400/40 hover:bg-blue-900/20 transition-all shadow-lg">
              <div className="p-3 rounded-lg bg-blue-500/20 border border-blue-500/30 text-blue-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-blue-300 font-medium uppercase tracking-wide font-mono">Phone Call</p>
                <a href="tel:+233204904397" className="text-sm font-semibold text-white hover:text-blue-300 transition-colors">
                  +233 20 490 4397
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form & Displayed Messages */}
        <div className="space-y-6">
          <div className="p-6 md:p-8 rounded-2xl bg-blue-950/20 backdrop-blur-md border border-blue-500/20 shadow-2xl space-y-5">
            <div className="flex items-center gap-2 text-white font-semibold">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              <h3 className="tracking-wide">Leave a Note in the Guestbook</h3>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl bg-black/30 border border-blue-500/20 text-white placeholder-blue-300/40 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all text-sm font-sans"
                />
              </div>
              <div>
                <textarea
                  rows={3}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Say something nice..."
                  className="w-full px-4 py-3 rounded-xl bg-black/30 border border-blue-500/20 text-white placeholder-blue-300/40 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all text-sm font-sans resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-medium text-sm hover:from-blue-500 hover:to-emerald-500 transition-all shadow-md shadow-blue-900/30 active:scale-[0.98] disabled:opacity-50 tracking-wide"
              >
                {isSubmitting ? 'Posting...' : 'Post Message'}
              </button>
            </form>
          </div>

          {/* Display Messages with Dates */}
          <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2">
            {guestbookNotes.length > 0 ? (
              guestbookNotes.map((note, index) => (
                <div key={index} className="p-4 rounded-xl bg-blue-950/10 backdrop-blur-md border border-blue-500/15 shadow-sm space-y-1 hover:border-blue-500/30 transition-all">
                  <div className="flex justify-between items-center">
                    <p className="text-white font-semibold text-sm tracking-wide">{note.name}</p>
                    <span className="text-xs text-emerald-400 font-mono">
                      {formatDate(note.created_at)}
                    </span>
                  </div>
                  <p className="text-blue-100/80 text-sm font-normal">{note.message}</p>
                </div>
              ))
            ) : (
              <p className="text-blue-300/60 text-sm text-center py-4 bg-blue-950/10 rounded-xl border border-blue-500/10 font-mono">
                Be the first to leave a note!
              </p>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}