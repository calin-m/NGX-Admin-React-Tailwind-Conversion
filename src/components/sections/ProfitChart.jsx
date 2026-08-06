import React, { useState } from 'react';

/**
 * ProfitChart Component
 * Modernized React 18 + Tailwind CSS v4 Component
 * Source Reference: old-src/ngx-admin-master <ngx-profit-chart>
 */
export default function ProfitChart({ period: propPeriod, setPeriod: propSetPeriod, embedded = false }) {
  const [internalPeriod, setInternalPeriod] = useState('week');
  const [hoverIndex, setHoverIndex] = useState(null);

  const activePeriod = propPeriod || internalPeriod;
  const changePeriod = propSetPeriod || setInternalPeriod;

  const profitData = {
    week: [
      { month: 'Mon', val: 15800, label: '$15.8k' },
      { month: 'Tue', val: 17800, label: '$17.8k' },
      { month: 'Wed', val: 19300, label: '$19.3k' },
      { month: 'Thu', val: 20500, label: '$20.5k' },
      { month: 'Fri', val: 21200, label: '$21.2k' },
      { month: 'Sat', val: 21300, label: '$21.3k' },
      { month: 'Sun', val: 20400, label: '$20.4k' }
    ],
    month: [
      { month: 'W1', val: 68000, label: '$68k' },
      { month: 'W2', val: 74000, label: '$74k' },
      { month: 'W3', val: 82000, label: '$82k' },
      { month: 'W4', val: 79000, label: '$79k' }
    ],
    year: [
      { month: 'Q1', val: 248000, label: '$248k' },
      { month: 'Q2', val: 295000, label: '$295k' },
      { month: 'Q3', val: 340000, label: '$340k' },
      { month: 'Q4', val: 385000, label: '$385k' }
    ]
  };

  const currentList = profitData[activePeriod] || profitData.week;
  const maxVal = Math.max(...currentList.map(i => i.val), 1);
  const gridSteps = [1, 0.5, 0];

  const content = (
    <div className="relative h-64 sm:h-80 min-h-[240px] w-full flex-1 flex flex-col justify-between pt-1">
      {/* Y-Axis Gridlines */}
      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-5">
        {gridSteps.map((step, idx) => (
          <div key={idx} className="w-full flex items-center gap-2">
            <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 w-8 text-right">
              {`$${Math.round((maxVal * step) / 1000)}k`}
            </span>
            <div className="flex-1 border-b border-dashed border-slate-200 dark:border-slate-700/60" />
          </div>
        ))}
      </div>

      {/* Profit Analytics Pill Bars */}
      <div className="relative z-10 pl-10 h-full flex items-end justify-between gap-1 sm:gap-2 pb-5">
        {currentList.map((item, idx) => {
          const heightPercent = Math.round((item.val / maxVal) * 98);
          const isHovered = hoverIndex === idx;

          return (
            <div
              key={idx}
              onMouseEnter={() => setHoverIndex(idx)}
              onMouseLeave={() => setHoverIndex(null)}
              className="flex-1 flex flex-col items-center group h-full justify-end relative cursor-pointer min-w-0"
            >
              {/* 0ms Instant Zero-Delay Tooltip */}
              {isHovered && (
                <div className="absolute bottom-full mb-2 z-30 pointer-events-none flex flex-col items-center transition-none">
                  <div className="backdrop-blur-md bg-slate-900/95 text-white text-[11px] px-2.5 py-1.5 rounded-xl shadow-2xl space-y-0.5 border border-slate-700 whitespace-nowrap">
                    <p className="font-bold text-slate-400 text-[10px] uppercase tracking-wider">{item.month}</p>
                    <p className="font-extrabold text-xs text-accent flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-accent" />
                      <span>{item.label} Profit</span>
                    </p>
                  </div>
                  <div className="w-2 h-2 bg-slate-900/95 transform rotate-45 -mt-1 border-r border-b border-slate-700" />
                </div>
              )}

              {/* Profit Analytics Pill Pillar */}
              <div className="w-full flex justify-center items-end gap-1 h-full relative">
                <div
                  style={{ height: `${heightPercent}%` }}
                  className={`w-2.5 sm:w-3.5 rounded-t-md transition-all duration-500 ease-out relative z-10 ${
                    isHovered ? 'scale-105 shadow-md brightness-110' : ''
                  } bg-accent`}
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
            {item.month}
          </span>
        ))}
      </div>
    </div>
  );

  if (embedded) return content;

  return (
    <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200/80 dark:border-slate-700/80 space-y-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-100 dark:border-slate-700/60 pb-3 gap-3">
        <div>
          <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
            Corporate Profit Metrics
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">Quarterly Net Revenue Breakdown</p>
        </div>

        <div className="flex items-center space-x-1 bg-slate-100 dark:bg-slate-700/60 p-1 rounded-lg text-xs font-semibold">
          {['week', 'month', 'year'].map(p => (
            <button
              key={p}
              type="button"
              onClick={() => changePeriod(p)}
              className={`px-3 py-1 rounded-md transition-all capitalize ${
                activePeriod === p
                  ? 'bg-accent text-white font-bold shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100'
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {content}
    </div>
  );
}
