import React from 'react';

export default function TrafficFrontCard({ data, period, setPeriod, onFlip }) {
  const totalSessions = data?.totalSessions || '142,850';
  const trafficCategories = data?.categories || [
    { name: 'Direct Traffic', percentage: 42, color: 'bg-indigo-500' },
    { name: 'Search Engines', percentage: 35, color: 'bg-emerald-500' },
    { name: 'Social Networks', percentage: 15, color: 'bg-amber-500' },
    { name: 'Referrals', percentage: 8, color: 'bg-rose-500' }
  ];

  return (
    <div className="flex flex-col h-full justify-between space-y-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-lg">
            🚥
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Traffic Source Reveal</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 capitalize">{period} Visitor Channels</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex bg-slate-100 dark:bg-slate-700/60 p-1 rounded-lg text-xs font-medium">
            {['week', 'month', 'year'].map(p => (
              <button
                key={p}
                onClick={() => setPeriod && setPeriod(p)}
                className={`px-2.5 py-1 rounded-md transition-all capitalize ${
                  period === p
                    ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
          <button onClick={onFlip} className="p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700/50" title="Flip to detail list">
            🔄
          </button>
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

