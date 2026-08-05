import React from 'react';

export default function StatsCardBack({ onFlip }) {
  return (
    <div className="flex flex-col h-full justify-between space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Profit Breakdown</h3>
        <button
          onClick={onFlip}
          className="p-2 rounded-xl text-slate-400 hover:text-accent hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors group"
          title="Flip to overview"
        >
          <svg className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 2.1l4 4-4 4" />
            <path d="M3 11V9a4 4 0 0 1 4-4h14" />
            <path d="M7 21.9l-4-4 4-4" />
            <path d="M21 13v2a4 4 0 0 1-4 4H3" />
          </svg>
        </button>
      </div>

      <div className="space-y-3 flex-1 flex flex-col justify-center">
        <div className="flex justify-between items-center p-3 rounded-xl bg-slate-50 dark:bg-slate-700/40">
          <span className="text-xs text-slate-500 dark:text-slate-400">Gross Revenue</span>
          <span className="text-sm font-bold text-slate-800 dark:text-slate-200">$124,500</span>
        </div>
        <div className="flex justify-between items-center p-3 rounded-xl bg-slate-50 dark:bg-slate-700/40">
          <span className="text-xs text-slate-500 dark:text-slate-400">Operating Expenses</span>
          <span className="text-sm font-bold text-rose-500">-$40,250</span>
        </div>
        <div className="flex justify-between items-center p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
          <span className="text-xs font-medium text-emerald-700 dark:text-emerald-300">Net Profit</span>
          <span className="text-base font-extrabold text-emerald-600 dark:text-emerald-400">$84,250</span>
        </div>
      </div>
    </div>
  );
}
