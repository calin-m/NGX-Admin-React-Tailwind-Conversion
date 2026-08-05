import React from 'react';

export default function Grid() {
  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 space-y-6">
      <div className="border-b border-slate-100 dark:border-slate-700/60 pb-3">
        <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Responsive Grid Layout</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">12-Column Responsive Layout System</p>
      </div>

      <div className="grid grid-cols-12 gap-3 text-center text-xs font-bold">
        <div className="col-span-12 p-3 bg-accent-light text-accent rounded-xl border border-accent/20 transition-colors">
          col-span-12 (Full Width)
        </div>

        <div className="col-span-6 p-3 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-xl border border-emerald-500/20">
          col-span-6 (Half Width)
        </div>
        <div className="col-span-6 p-3 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-xl border border-emerald-500/20">
          col-span-6 (Half Width)
        </div>
        <div className="col-span-4 p-3 bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-xl border border-amber-500/20">
          col-span-4 (1/3 Width)
        </div>
        <div className="col-span-4 p-3 bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-xl border border-amber-500/20">
          col-span-4 (1/3 Width)
        </div>
        <div className="col-span-4 p-3 bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-xl border border-amber-500/20">
          col-span-4 (1/3 Width)
        </div>
      </div>
    </div>
  );
}
