import React from 'react';
import PeriodSelector from '../../ui/PeriodSelector.jsx';

export default function StatsCardFront({ data, period, setPeriod, onFlip }) {
  const [hoverIndex, setHoverIndex] = React.useState(null);

  const profitVal = data?.profit || '$84,250';
  const growthVal = data?.growth || '+14.5%';
  const ordersVal = data?.ordersCount || '1,840';
  const barData = data?.barData || [
    { label: 'Mon', profit: 45, orders: 30 },
    { label: 'Tue', profit: 70, orders: 50 },
    { label: 'Wed', profit: 60, orders: 40 },
    { label: 'Thu', profit: 90, orders: 65 },
    { label: 'Fri', profit: 80, orders: 55 },
    { label: 'Sat', profit: 95, orders: 75 },
    { label: 'Sun', profit: 110, orders: 85 }
  ];

  const maxVal = Math.max(...barData.map(b => Math.max(b.profit, b.orders)), 1);

  return (
    <div className="flex flex-col h-full justify-between space-y-4 relative">
      <button
        type="button"
        onClick={onFlip}
        className="absolute top-0 right-0 p-2 rounded-xl text-slate-400 hover:text-accent hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors group z-20"
        title="Flip to breakdown"
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
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-lg">
            $
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Profit Analytics</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 capitalize">{period} Profit vs Orders</p>
          </div>
        </div>

        <PeriodSelector selected={period} onChange={setPeriod} />
      </div>

      <div className="flex items-baseline justify-between py-1 border-b border-slate-100 dark:border-slate-700/60 pb-2">
        <div>
          <span className="text-2xl font-bold text-slate-900 dark:text-slate-100">{profitVal}</span>
          <span className="ml-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
            {growthVal}
          </span>
        </div>
        <div className="text-xs text-slate-500 dark:text-slate-400">
          Orders: <span className="font-semibold text-slate-700 dark:text-slate-300">{ordersVal}</span>
        </div>
      </div>

      {/* Compact h-40 Chart Container */}
      <div className="h-40 w-full flex items-end justify-between gap-2 pt-2 border-t border-slate-100 dark:border-slate-700/60 relative">
        {barData.map((item, idx) => {
          const isHovered = hoverIndex === idx;
          return (
            <div
              key={idx}
              onMouseEnter={() => setHoverIndex(idx)}
              onMouseLeave={() => setHoverIndex(null)}
              className="flex-1 flex flex-col items-center gap-1 group h-full justify-end relative cursor-pointer"
            >
              {/* 0ms Instant Tooltip Card */}
              {isHovered && (
                <div className="absolute bottom-full mb-2 z-30 pointer-events-none flex flex-col items-center transition-none">
                  <div className="backdrop-blur-md bg-slate-900/95 text-white text-[10px] px-2.5 py-1.5 rounded-xl shadow-2xl space-y-0.5 border border-slate-700 whitespace-nowrap">
                    <p className="font-bold text-slate-400 text-[9px] uppercase tracking-wider">{item.label}</p>
                    <p className="font-extrabold text-accent flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-accent inline-block" />
                      <span>Profit pts: {item.profit}</span>
                    </p>
                  </div>
                  <div className="w-2 h-2 bg-slate-900/95 transform rotate-45 -mt-1 border-r border-b border-slate-700" />
                </div>
              )}

              <div className="w-full flex justify-center items-end gap-1 h-32 relative">
                <div
                  style={{ height: `${(item.orders / maxVal) * 98}%` }}
                  className="w-1.5 sm:w-2 bg-slate-300 dark:bg-slate-600 rounded-t-sm group-hover:bg-slate-400 dark:group-hover:bg-slate-500 transition-all duration-300 relative z-10"
                />
                <div
                  style={{ height: `${(item.profit / maxVal) * 98}%` }}
                  className={`w-2.5 sm:w-3.5 rounded-t-md transition-all duration-300 relative z-10 ${
                    isHovered ? 'scale-105 shadow-md brightness-110' : ''
                  } bg-accent`}
                />
              </div>
              <span className="text-[10px] text-slate-400 dark:text-slate-500 font-medium truncate max-w-[40px] text-center">{item.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
