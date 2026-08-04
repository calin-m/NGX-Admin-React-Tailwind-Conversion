import React from 'react';

export default function Tooltip() {
  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 space-y-4">
      <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Tooltip Component</h3>
      <button title="Hover Tooltip Information" className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold">
        Hover Over Me (Tooltip)
      </button>
    </div>
  );
}
