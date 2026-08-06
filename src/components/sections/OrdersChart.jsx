import React, { useState } from 'react';
import PeriodSelector from '../ui/PeriodSelector.jsx';

/**
 * OrdersChart Component
 * Modernized React 18 + Tailwind CSS v4 Component
 * Source Reference: old-src/ngx-admin-master <ngx-orders-chart>
 */
export default function OrdersChart({ activeTab = 'orders', period: propPeriod, setPeriod: propSetPeriod, embedded = false }) {
  const [internalPeriod, setInternalPeriod] = useState('week');
  const [hoverIndex, setHoverIndex] = useState(null);

  const activePeriod = propPeriod || internalPeriod;
  const changePeriod = propSetPeriod || setInternalPeriod;

  const ordersData = {
    week: [
      { label: 'Mon', count: 420 },
      { label: 'Tue', count: 680 },
      { label: 'Wed', count: 950 },
      { label: 'Thu', count: 710 },
      { label: 'Fri', count: 1120 },
      { label: 'Sat', count: 890 },
      { label: 'Sun', count: 640 }
    ],
    month: [
      { label: 'W1', count: 2800 },
      { label: 'W2', count: 3400 },
      { label: 'W3', count: 4100 },
      { label: 'W4', count: 3900 }
    ],
    year: [
      { label: 'Q1', count: 12400 },
      { label: 'Q2', count: 15800 },
      { label: 'Q3', count: 18200 },
      { label: 'Q4', count: 21500 }
    ]
  };

  const profitData = {
    week: [
      { label: 'Mon', count: 15800, text: '$15.8k' },
      { label: 'Tue', count: 17800, text: '$17.8k' },
      { label: 'Wed', count: 19300, text: '$19.3k' },
      { label: 'Thu', count: 20500, text: '$20.5k' },
      { label: 'Fri', count: 21200, text: '$21.2k' },
      { label: 'Sat', count: 21300, text: '$21.3k' },
      { label: 'Sun', count: 20400, text: '$20.4k' }
    ],
    month: [
      { label: 'W1', count: 68000, text: '$68k' },
      { label: 'W2', count: 74000, text: '$74k' },
      { label: 'W3', count: 82000, text: '$82k' },
      { label: 'W4', count: 79000, text: '$79k' }
    ],
    year: [
      { label: 'Q1', count: 248000, text: '$248k' },
      { label: 'Q2', count: 295000, text: '$295k' },
      { label: 'Q3', count: 340000, text: '$340k' },
      { label: 'Q4', count: 385000, text: '$385k' }
    ]
  };

  const selectedData = activeTab === 'profit' ? profitData : ordersData;
  const currentList = selectedData[activePeriod] || selectedData.week;
  const maxCount = Math.max(...currentList.map(item => item.count), 1);
  const gridSteps = [1, 0.5, 0];

  const content = (
    <div className="relative h-64 sm:h-80 min-h-[240px] w-full flex-1 flex flex-col justify-between pt-1">
      {/* Y-Axis Gridlines */}
      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-5">
        {gridSteps.map((step, idx) => (
          <div key={idx} className="w-full flex items-center gap-2">
            <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 w-8 text-right">
              {activeTab === 'profit'
                ? `$${Math.round((maxCount * step) / 1000)}k`
                : Math.round(maxCount * step).toLocaleString()}
            </span>
            <div className="flex-1 border-b border-dashed border-slate-200 dark:border-slate-700/60" />
          </div>
        ))}
      </div>

      {/* Bar Chart Visualization (Profit Analytics Pill Bar System) */}
      <div className="relative z-10 pl-10 h-full flex items-end justify-between gap-1 sm:gap-2 pb-5">
        {currentList.map((item, idx) => {
          const heightPercent = Math.round((item.count / maxCount) * 98);
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
                    <p className="font-bold text-slate-400 text-[10px] uppercase tracking-wider">{item.label}</p>
                    <p className="font-extrabold text-xs text-accent flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-accent" />
                      <span>
                        {activeTab === 'profit'
                          ? `${item.text || item.count.toLocaleString()} Profit`
                          : `${item.count.toLocaleString()} Orders`}
                      </span>
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
            {item.label}
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
            {activeTab === 'profit' ? 'Corporate Profit Metrics' : 'Orders Metrics Chart'}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {activeTab === 'profit' ? 'Quarterly Net Revenue Breakdown' : 'Order Volume per Period'}
          </p>
        </div>

        <PeriodSelector selected={activePeriod} onChange={changePeriod} />
      </div>

      {content}
    </div>
  );
}
