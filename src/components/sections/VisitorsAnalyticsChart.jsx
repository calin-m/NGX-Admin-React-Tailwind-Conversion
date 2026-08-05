import React, { useState } from 'react';

export default function VisitorsAnalyticsChart({ onChartClick }) {
  const [activeMetric, setActiveMetric] = useState('New Visitors');

  const metrics = [
    { label: 'New Visitors', val: '43.8%', color: 'border-accent text-accent bg-accent-light' },
    { label: 'Return Visitors', val: '56.2%', color: 'border-emerald-500 text-emerald-600 dark:text-emerald-400 bg-emerald-500/10' }
  ];

  const handleMetricSelect = m => {
    setActiveMetric(m);
    if (onChartClick) onChartClick(m);
  };

  return (
    <div className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-xs border border-slate-200 dark:border-slate-700 space-y-3">
      <div className="flex items-center justify-between">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Visitor Analytics Graph</h4>
        <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">View: {activeMetric}</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">

        {metrics.map(m => (
          <button
            key={m.label}
            onClick={() => handleMetricSelect(m.label)}
            className={`p-2.5 rounded-xl border text-xs font-bold transition-all flex flex-col items-center justify-center ${m.color} ${
              activeMetric === m.label ? 'ring-2 ring-accent shadow-xs' : 'opacity-70 hover:opacity-100'
            }`}
          >
            <span>{m.label}</span>
            <span className="text-base font-extrabold">{m.val}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

