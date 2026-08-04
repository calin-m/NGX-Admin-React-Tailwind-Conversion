import React, { useState } from 'react';

export default function Icons() {
  const [copied, setCopied] = useState('');

  const iconList = [
    { icon: '📊', name: 'Analytics' },
    { icon: '🛒', name: 'Orders' },
    { icon: '👥', name: 'Users' },
    { icon: '⚙️', name: 'Settings' },
    { icon: '🏠', name: 'Smart Home' },
    { icon: '💬', name: 'Chat' },
    { icon: '📅', name: 'Calendar' },
    { icon: '🔔', name: 'Notifications' },
    { icon: '🎨', name: 'Customizer' },
    { icon: '🔍', name: 'Search' },
    { icon: '📄', name: 'Invoice' },
    { icon: '📥', name: 'Export' }
  ];

  const handleCopy = name => {
    setCopied(name);
    setTimeout(() => setCopied(''), 2000);
  };

  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 space-y-6">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700/60 pb-3">
        <div>
          <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Icon Gallery Catalog</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">Click to Copy Icon Identifier</p>
        </div>
        {copied && <span className="text-xs font-bold text-emerald-500 animate-pulse">Copied "{copied}"!</span>}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3">
        {iconList.map(item => (
          <div
            key={item.name}
            onClick={() => handleCopy(item.name)}
            className="p-4 rounded-xl border border-slate-200/70 dark:border-slate-700/70 bg-slate-50/50 dark:bg-slate-700/30 hover:bg-indigo-50 dark:hover:bg-slate-700 transition-all cursor-pointer text-center space-y-2"
          >
            <span className="text-2xl block">{item.icon}</span>
            <span className="text-[10px] font-bold text-slate-700 dark:text-slate-300 block truncate">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
