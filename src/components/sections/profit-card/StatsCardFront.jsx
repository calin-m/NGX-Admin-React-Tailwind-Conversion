import React from 'react';

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
    <div className="flex flex-col h-full justify-between space-y-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-lg">
            $
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Profit Analytics</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 capitalize">{period} Profit vs Orders</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <div className="flex bg-slate-100 dark:bg-slate-700/60 p-1 rounded-lg text-xs font-medium">
            {['week', 'month', 'year'].map(p => (
              <button
                key={p}
                type="button"
                onClick={() => setPeriod && setPeriod(p)}
                className={`px-2.5 py-1 rounded-md transition-all capitalize ${
                  period === p
                    ? 'bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 shadow-sm font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={onFlip}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors"
            title="Flip to breakdown"
          >
            🔄
          </button>
        </div>
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
              {/* Tooltip Card */}
              {isHovered && (
                <div className="absolute bottom-full mb-2 z-30 pointer-events-none flex flex-col items-center animate-in fade-in duration-150">
                  <div className="backdrop-blur-md bg-slate-900/90 text-white text-[10px] p-2 rounded-lg shadow-xl space-y-0.5 border border-slate-700 whitespace-nowrap">
                    <p className="font-bold text-slate-400">{item.label}</p>
                    <p className="font-extrabold text-emerald-400">Profit pts: {item.profit}</p>
                  </div>
                  <div className="w-1.5 h-1.5 bg-slate-900 transform rotate-45 -mt-1 border-r border-b border-slate-700" />
                </div>
              )}

              <div className="w-full flex justify-center items-end gap-1 h-32 relative">
                <div
                  style={{ height: `${(item.orders / maxVal) * 98}%` }}
                  className="w-2.5 bg-slate-300 dark:bg-slate-600 rounded-t-sm group-hover:bg-slate-400 dark:group-hover:bg-slate-500 transition-all duration-300"
                />
                <div
                  style={{ height: `${(item.profit / maxVal) * 98}%` }}
                  className={`w-4 sm:w-5 rounded-t-md transition-all duration-300 shadow-xs ${
                    isHovered ? 'scale-105 shadow-emerald-500/30' : ''
                  } bg-gradient-to-t from-emerald-600 to-emerald-400`}
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
