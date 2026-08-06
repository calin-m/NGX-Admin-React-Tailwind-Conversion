import React from 'react';

export default function TrafficFrontCard({ data, period, setPeriod, onFlip }) {
  const totalSessions = data?.totalSessions || '142,850';
  const trafficCategories = data?.categories || [
    { name: 'Direct Traffic', percentage: 42, color: 'bg-accent' },
    { name: 'Search Engines', percentage: 35, color: 'bg-emerald-500' },
    { name: 'Social Networks', percentage: 15, color: 'bg-amber-500' },
    { name: 'Referrals', percentage: 8, color: 'bg-rose-500' }
  ];

  return (
    <div className="flex flex-col h-full justify-between space-y-4 relative">
      <button
        type="button"
        onClick={onFlip}
        className="absolute top-0 right-0 p-2 rounded-xl text-slate-400 hover:text-accent hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors group z-20"
        title="Flip to detail list"
      >
        <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 2.1l4 4-4 4" />
          <path d="M3 11V9a4 4 0 0 1 4-4h14" />
          <path d="M7 21.9l-4-4 4-4" />
          <path d="M21 13v2a4 4 0 0 1-4 4H3" />
        </svg>
      </button>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pr-10">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-accent-light text-accent flex items-center justify-center font-bold text-lg">
            🚥
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Traffic Source Reveal</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 capitalize">{period} Visitor Channels</p>
          </div>
        </div>

        <div className="flex bg-slate-100 dark:bg-slate-700/60 p-1 rounded-lg text-xs font-medium">
          {['week', 'month', 'year'].map(p => (
            <button
              key={p}
              type="button"
              onClick={() => setPeriod && setPeriod(p)}
              className={`px-2.5 py-1 rounded-md transition-all capitalize ${
                period === p
                  ? 'bg-white dark:bg-slate-800 text-accent shadow-sm font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4 py-2">
        {trafficCategories.map((cat, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex justify-between text-xs font-medium">
              <span className="text-slate-700 dark:text-slate-300">{cat.name}</span>
              <span className="text-slate-900 dark:text-slate-100 font-bold">{cat.percentage}%</span>
            </div>
            <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
              <div className={`h-full ${cat.color} transition-all duration-500 rounded-full`} style={{ width: `${cat.percentage}%` }} />
            </div>
          </div>
        ))}
      </div>

      <div className="text-xs text-center text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-700/60">
        Total Unique Sessions: <span className="font-semibold text-slate-700 dark:text-slate-300">{totalSessions}</span>
      </div>
    </div>
  );
}

