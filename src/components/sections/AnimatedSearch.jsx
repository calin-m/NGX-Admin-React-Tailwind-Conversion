import React, { useState } from 'react';

export default function AnimatedSearch() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 space-y-4">
      <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Animated Search Field</h3>
      <div className="flex items-center space-x-2">
        <button onClick={() => setExpanded(prev => !prev)} className="p-2 rounded-xl bg-indigo-600 text-white">
          🔍
        </button>
        {expanded && (
          <input type="text" placeholder="Search..." className="px-4 py-1.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 animate-in fade-in" />
        )}
      </div>
    </div>
  );
}
