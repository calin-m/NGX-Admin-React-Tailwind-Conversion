import React, { useState, useEffect } from 'react';

export default function SearchInput({ isOpen, onClose }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = e => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (onClose) onClose();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        if (onClose) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const quickLinks = [
    { title: 'Orders & Invoices Data Table', category: 'Module', icon: '🛒' },
    { title: 'User Management Directory', category: 'Team', icon: '👥' },
    { title: 'Traffic Analytics & Page Views', category: 'Analytics', icon: '📈' },
    { title: 'System Preferences & API Keys', category: 'Settings', icon: '⚙️' }
  ];

  const filteredLinks = quickLinks.filter(item => item.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-slate-900/50 backdrop-blur-xs">
      <div className="w-full max-w-lg bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="p-4 border-b border-slate-100 dark:border-slate-700/60 flex items-center space-x-3">
          <span className="text-base text-slate-400">🔍</span>
          <input
            type="text"
            autoFocus
            placeholder="Type a command or search orders, users, metrics... (Press Esc to close)"
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none"
          />
          <kbd className="px-2 py-0.5 text-[10px] font-bold text-slate-400 bg-slate-100 dark:bg-slate-700 rounded-md">ESC</kbd>
        </div>

        <div className="p-2 space-y-1 max-h-64 overflow-y-auto">
          {filteredLinks.map((link, idx) => (
            <div
              key={idx}
              onClick={onClose}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700/50 cursor-pointer transition-colors"
            >
              <div className="flex items-center space-x-3">
                <span className="text-lg">{link.icon}</span>
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">{link.title}</span>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-500">
                {link.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
