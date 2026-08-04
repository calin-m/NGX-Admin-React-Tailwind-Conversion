import React from 'react';

export default function ProgressBar() {
  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 space-y-4">
      <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Progress Bar Showcase</h3>
      <div className="w-full h-3 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
        <div className="h-full bg-indigo-600 rounded-full w-3/4 animate-pulse" />
      </div>
    </div>
  );
}
