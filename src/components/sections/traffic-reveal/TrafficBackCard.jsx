import React from 'react';
import FlipButton from '../../ui/FlipButton.jsx';

export default function TrafficBackCard({ onFlip }) {
  return (
    <div className="flex flex-col h-full justify-between space-y-4 relative">
      <FlipButton onFlip={onFlip} isFlipped={true} title="Flip to chart" />

      <div className="flex flex-wrap items-center justify-between gap-2 pr-10">
        <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Traffic Source List</h3>
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
