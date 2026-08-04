import React from 'react';

export default function Alert() {
  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 space-y-4">
      <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Alert Banner Showcase</h3>
      <div className="p-4 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 text-xs font-bold">
        ℹ️ Info Alert: System maintenance scheduled for midnight UTC.
      </div>
    </div>
  );
}
