import React, { useState } from 'react';

/**
 * OrdersChart Component
 * Modernized React 18 + Tailwind CSS v4 Component
 * Source Reference: old-src/ngx-admin-master <ngx-orders-chart>
 */
export default function OrdersChart(props) {
  const [period, setPeriod] = useState('Week');

  const chartData = {
    Week: [
      { label: 'Mon', count: 420 },
      { label: 'Tue', count: 680 },
      { label: 'Wed', count: 950 },
      { label: 'Thu', count: 710 },
      { label: 'Fri', count: 1120 },
      { label: 'Sat', count: 890 },
      { label: 'Sun', count: 640 }
    ],
    Month: [
      { label: 'W1', count: 2800 },
      { label: 'W2', count: 3400 },
      { label: 'W3', count: 4100 },
      { label: 'W4', count: 3900 }
    ],
    Year: [
      { label: 'Q1', count: 12400 },
      { label: 'Q2', count: 15800 },
      { label: 'Q3', count: 18200 },
      { label: 'Q4', count: 21500 }
    ]
  };

  const currentList = chartData[period];
  const maxCount = Math.max(...currentList.map(item => item.count));

  return (
    <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-xs border border-slate-200 dark:border-slate-700 space-y-4">
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-3">
        <div>
          <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
            Orders Metrics Chart
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">Order Volume per Period</p>
        </div>

        {/* Period Selector Tabs */}
        <div className="flex items-center space-x-1 bg-slate-100 dark:bg-slate-700 p-1 rounded-xl">
          {['Week', 'Month', 'Year'].map(p => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                period === p
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Bar Chart Visualization */}
      <div className="h-44 flex items-end justify-between gap-3 pt-6 px-2">
        {currentList.map((item, idx) => {
          const heightPercent = Math.round((item.count / maxCount) * 100);
          return (
            <div key={idx} className="flex-1 flex flex-col items-center gap-2 group">
              <span className="text-[10px] font-bold text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">
                {item.count}
              </span>
              <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-t-xl h-36 flex items-end overflow-hidden">
                <div
                  style={{ height: `${heightPercent}%` }}
                  className="w-full bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t-xl group-hover:from-indigo-500 group-hover:to-indigo-300 transition-all duration-500"
                />
              </div>
              <span className="text-[11px] font-bold text-slate-600 dark:text-slate-400">{item.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

