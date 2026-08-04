import React from 'react';

export default function FormButtons() {
  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 space-y-4">
      <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Button Showcase</h3>
      <div className="flex flex-wrap gap-3">
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold shadow-sm">Primary</button>
        <button className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold shadow-sm">Success</button>
        <button className="px-4 py-2 bg-rose-600 text-white rounded-xl text-xs font-bold shadow-sm">Danger</button>
        <button className="px-4 py-2 bg-amber-500 text-white rounded-xl text-xs font-bold shadow-sm">Warning</button>
      </div>
    </div>
  );
}
