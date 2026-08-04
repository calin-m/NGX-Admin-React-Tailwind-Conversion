import React, { useState } from 'react';
import useTrafficChart from '../../hooks/useTrafficChart.js';
import useTrafficList from '../../hooks/useTrafficList.js';

export default function TrafficRevealCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const { data: chartData, period, setPeriod } = useTrafficChart('week');
  const { data: listData } = useTrafficList();

  const toggleFlip = () => setIsFlipped(prev => !prev);

  const trafficCategories = [
    { name: 'Direct Traffic', percentage: 42, color: 'bg-indigo-500' },
    { name: 'Search Engines', percentage: 35, color: 'bg-emerald-500' },
    { name: 'Social Networks', percentage: 15, color: 'bg-amber-500' },
    { name: 'Referrals', percentage: 8, color: 'bg-rose-500' }
  ];

  return (
    <div className="relative w-full min-h-[320px] rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 flex flex-col justify-between overflow-hidden transition-all duration-300">
      {!isFlipped ? (
        /* Front Side: Traffic Summary & Distribution Bars */
        <div className="flex flex-col h-full justify-between space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-lg">
                🚥
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Traffic Source Reveal</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Visitor Acquisition Channels</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex bg-slate-100 dark:bg-slate-700/60 p-1 rounded-lg text-xs font-medium">
                {['week', 'month', 'year'].map(p => (
                  <button
                    key={p}
                    onClick={() => setPeriod(p)}
                    className={`px-2 py-0.5 rounded-md transition-all capitalize ${
                      period === p
                        ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
              <button onClick={toggleFlip} className="p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700/50" title="Flip to detail list">
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
            Total Unique Sessions: <span className="font-semibold text-slate-700 dark:text-slate-300">142,850</span>
          </div>
        </div>
      ) : (
        /* Back Side: Traffic Detailed Feed List */
        <div className="flex flex-col h-full justify-between space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Traffic Source List</h3>
            <button onClick={toggleFlip} className="p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700/50" title="Flip to chart">
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
      )}
    </div>
  );
}
