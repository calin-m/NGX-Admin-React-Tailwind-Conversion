import React, { useState } from 'react';

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 1, label: 'Overview', icon: '📊', badge: '12', content: 'Enterprise SaaS architecture overview and live metrics dashboard.' },
    { id: 2, label: 'Security & Auth', icon: '🛡️', badge: 'Active', content: 'Role-based access controls, JWT token authentication, and security audit logs.' },
    { id: 3, label: 'Settings', icon: '⚙️', badge: 'New', content: 'Theme customization, notification webhooks, and system API configurations.' }
  ];

  const currentTab = tabs.find(t => t.id === activeTab) || tabs[0];

  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 space-y-4">
      <div className="border-b border-slate-100 dark:border-slate-700/60 pb-3 flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Tabbed Panels</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">Content Navigation by Tab</p>
        </div>
      </div>

      <div className="flex space-x-2 border-b border-slate-200 dark:border-slate-700 pb-2">
        {tabs.map(t => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id)}
            className={`px-3.5 py-2 text-xs font-bold rounded-xl transition-all flex items-center space-x-2 ${
              activeTab === t.id
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700/50'
            }`}
          >
            <span>{t.icon}</span>
            <span>{t.label}</span>
            <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
              activeTab === t.id ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
            }`}>
              {t.badge}
            </span>
          </button>
        ))}
      </div>

      <div className="p-5 bg-slate-50 dark:bg-slate-700/40 rounded-xl text-xs text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-600/60 animate-in fade-in duration-200">
        <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-1">{currentTab.label} Panel</h4>
        <p className="leading-relaxed">{currentTab.content}</p>
      </div>
    </div>
  );
}

