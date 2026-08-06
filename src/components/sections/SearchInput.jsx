import React, { useState, useEffect } from 'react';
import ClearableInput from '../ui/ClearableInput.jsx';

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
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-slate-900/60 backdrop-blur-xs transition-opacity duration-200 ease-out cursor-pointer"
    >
      <div
        onClick={e => e.stopPropagation()}
        className="w-full max-w-lg bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200/80 dark:border-slate-700 overflow-hidden cursor-default animate-scale-in"
      >
        <div className="p-3 border-b border-slate-100 dark:border-slate-700/60">
          <ClearableInput
            autoFocus
            icon="🔍"
            value={query}
            onChange={e => setQuery(e.target.value)}
            onClear={() => setQuery('')}
            placeholder="Type a command or search orders, users, metrics..."
          />
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
