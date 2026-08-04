import React from 'react';

export default function TrafficBackCard({ onFlip }) {
  return (
    <div className="flex flex-col h-full justify-between space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Traffic Source List</h3>
        <button onClick={onFlip} className="p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700/50" title="Flip to chart">
          🔄
        </button>
      </div>

      <div className="space-y-2.5 flex-1 overflow-y-auto pr-1">
        {[
          { source: 'google.com', visits: '48,200', change: '+12%' },
          { source: 'direct / none', visits: '38,400', change: '+5%' },
          { source: 'github.com', visits: '18,900', change: '+24%' },
          { source: 'twitter.com', visits: '12,300', change: '-2%' }
        ].map((row, idx) => (
          <div key={idx} className="flex justify-between items-center p-2.5 rounded-xl bg-slate-50 dark:bg-slate-700/40 text-xs">
            <span className="font-medium text-slate-800 dark:text-slate-200">{row.source}</span>
            <div className="space-x-3">
              <span className="font-semibold text-slate-900 dark:text-slate-100">{row.visits}</span>
              <span className={`font-bold ${row.change.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'}`}>{row.change}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
