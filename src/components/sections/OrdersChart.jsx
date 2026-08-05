import React, { useState } from 'react';

/**
 * OrdersChart Component
 * Modernized React 18 + Tailwind CSS v4 Component
 * Source Reference: old-src/ngx-admin-master <ngx-orders-chart>
 */
export default function OrdersChart(props) {
  const [period, setPeriod] = useState('Week');
  const [hoverIndex, setHoverIndex] = useState(null);

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
  const maxCount = Math.max(...currentList.map(item => item.count), 1);
  const gridSteps = [1, 0.5, 0];

  return (
    <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200/80 dark:border-slate-700/80 space-y-4">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700/60 pb-3">
        <div>
          <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
            Orders Metrics Chart
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">Order Volume per Period</p>
        </div>

        {/* Period Selector Tabs */}
        <div className="flex items-center space-x-1 bg-slate-100 dark:bg-slate-700/60 p-1 rounded-lg text-xs font-semibold">
          {['Week', 'Month', 'Year'].map(p => (
            <button
              key={p}
              type="button"
              onClick={() => setPeriod(p)}
              className={`px-3 py-1 rounded-md transition-all ${
                period === p
                  ? 'bg-accent text-white font-bold shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100'
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Compact Chart Area */}
      <div className="relative h-44 w-full flex-1 flex flex-col justify-between pt-1">
        {/* Y-Axis Gridlines */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-5">
          {gridSteps.map((step, idx) => (
            <div key={idx} className="w-full flex items-center gap-2">
              <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 w-8 text-right">
                {Math.round(maxCount * step).toLocaleString()}
              </span>
              <div className="flex-1 border-b border-dashed border-slate-200 dark:border-slate-700/60" />
            </div>
          ))}
        </div>

        {/* Bar Chart Visualization */}
        <div className="relative z-10 pl-10 h-full flex items-end justify-between gap-3 pb-5">
          {currentList.map((item, idx) => {
            const heightPercent = Math.round((item.count / maxCount) * 98);
            const isHovered = hoverIndex === idx;

            return (
              <div
                key={idx}
                onMouseEnter={() => setHoverIndex(idx)}
                onMouseLeave={() => setHoverIndex(null)}
                className="flex-1 flex flex-col items-center gap-1 group h-full justify-end relative cursor-pointer"
              >
                {/* Tooltip Card */}
                {isHovered && (
                  <div className="absolute bottom-full mb-2 z-30 pointer-events-none flex flex-col items-center animate-in fade-in duration-150">
                    <div className="backdrop-blur-md bg-slate-900/90 text-white text-[10px] p-2 rounded-lg shadow-xl space-y-0.5 border border-slate-700 whitespace-nowrap">
                      <p className="font-bold text-slate-400">{item.label}</p>
                      <p className="font-extrabold text-accent">{item.count.toLocaleString()} Orders</p>
                    </div>
                    <div className="w-1.5 h-1.5 bg-slate-900 transform rotate-45 -mt-1 border-r border-b border-slate-700" />
                  </div>
                )}

                {/* Track Column & Active Column Bar */}
                <div className="w-full flex justify-center items-end h-full relative">
                  <div className="w-full max-w-[28px] h-full bg-slate-100/50 dark:bg-slate-700/30 rounded-t-lg absolute inset-0 mx-auto" />
                  <div
                    style={{ height: `${heightPercent}%` }}
                    className={`w-full max-w-[28px] rounded-t-lg transition-all duration-500 relative z-10 ${
                      isHovered ? 'scale-105 shadow-md shadow-accent/20' : ''
                    } bg-gradient-to-t from-accent/90 to-blue-400`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* X-Axis Labels */}
        <div className="pl-10 flex justify-between border-t border-slate-100 dark:border-slate-700/60 pt-2">
          {currentList.map((item, idx) => (
            <span key={idx} className="flex-1 text-center text-[10px] sm:text-xs font-bold text-slate-500 dark:text-slate-400 truncate max-w-[40px] mx-auto">
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

