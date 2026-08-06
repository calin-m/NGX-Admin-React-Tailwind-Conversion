import React from 'react';
import FlipButton from '../../ui/FlipButton.jsx';

export default function StatsCardBack({ onFlip }) {
  return (
    <div className="flex flex-col h-full justify-between space-y-4 relative">
      <FlipButton onFlip={onFlip} isFlipped={true} title="Flip to overview" />

      <div className="flex items-center justify-between pr-10">
        <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Profit Breakdown</h3>
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
