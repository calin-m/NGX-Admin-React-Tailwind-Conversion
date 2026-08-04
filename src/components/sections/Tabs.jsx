import React, { useState } from 'react';

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 space-y-4">
      <div className="flex space-x-2 border-b border-slate-200 dark:border-slate-700 pb-2">
        <button onClick={() => setActiveTab(1)} className={`px-4 py-2 text-xs font-bold rounded-xl ${activeTab === 1 ? 'bg-indigo-600 text-white' : 'text-slate-500'}`}>
          Tab 1: Overview
        </button>
        <button onClick={() => setActiveTab(2)} className={`px-4 py-2 text-xs font-bold rounded-xl ${activeTab === 2 ? 'bg-indigo-600 text-white' : 'text-slate-500'}`}>
          Tab 2: Details
        </button>
      </div>

      <div className="p-4 bg-slate-50 dark:bg-slate-700/40 rounded-xl text-xs text-slate-700 dark:text-slate-300">
        {activeTab === 1 ? 'Content for Overview Tab 1.' : 'Content for Details Tab 2.'}
      </div>
    </div>
  );
}
