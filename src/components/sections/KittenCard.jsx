import React from 'react';

export default function KittenCard() {
  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 space-y-4">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700/60 pb-3">
        <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Pet Monitor</h3>
        <span className="text-xs font-bold text-indigo-500 bg-indigo-500/10 px-2 py-0.5 rounded-full">Active</span>
      </div>

      <div className="h-40 rounded-xl bg-slate-900 text-slate-400 flex items-center justify-center font-mono text-xs font-bold relative overflow-hidden">
        🐱 Kitten Live Feed - Resting
      </div>
    </div>
  );
}
