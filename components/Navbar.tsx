'use client';

import { useState, useEffect } from 'react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto h-14 px-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 shadow-lg flex items-center justify-between">
          {/* Brand */}
          <div 
            onClick={() => setActiveTab('home')}
            className="cursor-pointer font-mono font-bold text-sm tracking-tight text-white hover:text-emerald-400 transition-colors"
          >
            asaretonysmithaikins.dev
          </div>

          {/* Nav Links & CV Button Container */}
          <div className="flex items-center gap-3">
            <nav className="hidden sm:flex items-center space-x-2 md:space-x-4">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-white/20 text-white shadow-inner border border-white/20 font-semibold'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* CV Manager Button */}
            <button
              onClick={() => setIsCvModalOpen(true)}
              className="px-3.5 py-1.5 rounded-xl bg-blue-600/30 border border-blue-500/40 text-blue-200 text-xs md:text-sm font-semibold hover:bg-blue-600/40 transition-all shadow-md flex items-center gap-2"
            >
              <span>📄</span> CV Manager
            </button>
          </div>
        </div>
      </header>

      {/* CV Upload & Download Modal */}
      {isCvModalOpen && (
        <CVModal onClose={() => setIsCvModalOpen(false)} />
      )}
    </>
  );
}

interface CVModalProps {
  onClose: () => void;
}

function CVModal({ onClose }: CVModalProps) {
  const [fileName, setFileName] = useState<string | null>(null);
  const [fileDataUrl, setFileDataUrl] = useState<string | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  // Load saved CV from localStorage on component mount
  useEffect(() => {
    const savedName = localStorage.getItem('portfolio_cv_name');
    const savedData = localStorage.getItem('portfolio_cv_data');
    if (savedName && savedData) {
      setFileName(savedName);
      setFileDataUrl(savedData);
      setUploadSuccess(true);
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFileName(file.name);

      // Convert file to Base64 so it persists in localStorage
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result as string;
        setFileDataUrl(base64String);
        setUploadSuccess(true);

        // Save permanently to browser storage
        localStorage.setItem('portfolio_cv_name', file.name);
        localStorage.setItem('portfolio_cv_data', base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemove = () => {
    setFileName(null);
    setFileDataUrl(null);
    setUploadSuccess(false);
    localStorage.removeItem('portfolio_cv_name');
    localStorage.removeItem('portfolio_cv_data');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-md p-6 sm:p-8 rounded-3xl bg-slate-950/95 border border-white/15 shadow-2xl space-y-6 relative backdrop-blur-xl text-white">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-sm transition-all"
        >
          ✕
        </button>

        <div>
          <h3 className="text-xl font-bold">Curriculum Vitae</h3>
          <p className="text-xs text-gray-400 mt-1">Your uploaded CV is securely saved across sessions.</p>
        </div>

        {/* Upload Form */}
        <div className="space-y-4 p-4 rounded-2xl bg-white/5 border border-white/10">
          <label className="text-xs font-mono text-blue-300 block">Upload / Replace CV Document</label>
          <input 
            type="file" 
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="w-full text-xs text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-blue-600/30 file:text-blue-200 hover:file:bg-blue-600/50 cursor-pointer"
          />
          {uploadSuccess && fileName && (
            <div className="flex items-center justify-between pt-2 border-t border-white/10">
              <span className="text-[11px] text-emerald-400 font-mono truncate max-w-[200px]">✓ {fileName}</span>
              <button 
                onClick={handleRemove}
                className="text-[10px] text-red-400 hover:text-red-300 underline font-mono"
              >
                Remove
              </button>
            </div>
          )}
        </div>

        {/* Download Action for Viewers */}
        <div className="space-y-2">
          <span className="text-xs font-mono text-gray-400 block">Viewer Action</span>
          {fileDataUrl ? (
            <a
              href={fileDataUrl}
              download={fileName || "Asare_Tony-Smith_Aikins_CV.pdf"}
              className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-lg"
            >
              <span>📥</span> Download Saved CV
            </a>
          ) : (
            <div className="w-full py-3 rounded-xl bg-gray-800 text-gray-400 font-semibold text-sm flex items-center justify-center gap-2 border border-white/5 cursor-not-allowed">
              <span>⚠️</span> Please upload a CV first
            </div>
          )}
        </div>

      </div>
    </div>
  );
}