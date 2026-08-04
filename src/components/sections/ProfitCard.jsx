import React, { useState } from 'react';
import useOrdersProfit from '../../hooks/useOrdersProfit.js';

export default function ProfitCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const { data, loading, period, setPeriod } = useOrdersProfit('week');

  const toggleFlip = () => setIsFlipped(prev => !prev);

  // Mock bar heights for SVG visualization
  const barData = [
    { label: 'Mon', profit: 45, orders: 30 },
    { label: 'Tue', profit: 70, orders: 50 },
    { label: 'Wed', profit: 60, orders: 40 },
    { label: 'Thu', profit: 90, orders: 65 },
    { label: 'Fri', profit: 80, orders: 55 },
    { label: 'Sat', profit: 95, orders: 75 },
    { label: 'Sun', profit: 110, orders: 85 }
  ];

  return (
    <div className="relative w-full min-h-[320px] rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 flex flex-col justify-between overflow-hidden transition-all duration-300">
      {/* Front Side View */}
      {!isFlipped ? (
        <div className="flex flex-col h-full justify-between space-y-4">
          {/* Header Bar */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-lg">
                $
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Profit Analytics</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Weekly Profit vs Orders</p>
              </div>
            </div>

            {/* Period selector & Flip toggle */}
            <div className="flex items-center space-x-2">
              <div className="flex bg-slate-100 dark:bg-slate-700/60 p-1 rounded-lg text-xs font-medium">
                {['week', 'month', 'year'].map(p => (
                  <button
                    key={p}
                    onClick={() => setPeriod(p)}
                    className={`px-2.5 py-1 rounded-md transition-all capitalize ${
                      period === p
                        ? 'bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 shadow-sm'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
              <button
                onClick={toggleFlip}
                className="p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors"
                title="Flip to breakdown"
              >
                🔄
              </button>
            </div>
          </div>

          {/* Metric Summary */}
          <div className="flex items-baseline justify-between py-1">
            <div>
              <span className="text-2xl font-bold text-slate-900 dark:text-slate-100">$84,250</span>
              <span className="ml-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                +14.5%
              </span>
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              Orders: <span className="font-semibold text-slate-700 dark:text-slate-300">1,840</span>
            </div>
          </div>

          {/* SVG Animated Bar Chart */}
          <div className="h-40 w-full flex items-end justify-between gap-2 pt-4 border-t border-slate-100 dark:border-slate-700/60">
            {barData.map((item, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center gap-1 group h-full justify-end">
                <div className="w-full flex justify-center items-end gap-1 h-32 relative">
                  <div
                    style={{ height: `${(item.orders / 110) * 100}%` }}
                    className="w-2 bg-slate-300 dark:bg-slate-600 rounded-t-sm group-hover:bg-slate-400 dark:group-hover:bg-slate-500 transition-all duration-300"
                  />
                  <div
                    style={{ height: `${(item.profit / 110) * 100}%` }}
                    className="w-3.5 bg-emerald-500 dark:bg-emerald-400 rounded-t-md group-hover:bg-emerald-600 dark:group-hover:bg-emerald-300 transition-all duration-300 shadow-sm"
                  />
                </div>
                <span className="text-[10px] text-slate-400 dark:text-slate-500 font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Back Side View (Breakdown) */
        <div className="flex flex-col h-full justify-between space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Profit Breakdown</h3>
            <button
              onClick={toggleFlip}
              className="p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors"
              title="Flip to overview"
            >
              🔄
            </button>
          </div>

          <div className="space-y-3 flex-1 flex flex-col justify-center">
            <div className="flex justify-between items-center p-3 rounded-xl bg-slate-50 dark:bg-slate-700/40">
              <span className="text-xs text-slate-500 dark:text-slate-400">Gross Revenue</span>
              <span className="text-sm font-bold text-slate-800 dark:text-slate-200">$124,500</span>
            </div>
            <div className="flex justify-between items-center p-3 rounded-xl bg-slate-50 dark:bg-slate-700/40">
              <span className="text-xs text-slate-500 dark:text-slate-400">Operating Expenses</span>
              <span className="text-sm font-bold text-rose-500">-$40,250</span>
            </div>
            <div className="flex justify-between items-center p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
              <span className="text-xs font-medium text-emerald-700 dark:text-emerald-300">Net Profit</span>
              <span className="text-base font-extrabold text-emerald-600 dark:text-emerald-400">$84,250</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
