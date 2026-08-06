import React, { useState } from 'react';
import PeriodSelector from '../ui/PeriodSelector.jsx';
import CardHeader from '../ui/CardHeader.jsx';
import useElectricity from '../../hooks/useElectricity.js';

/**
 * ElectricityCard Component
 * Modernized React 18 + Tailwind CSS v4 Component
 * Source Reference: old-src/ngx-admin-master <ngx-electricity>
 */
export default function ElectricityCard() {
  const { data, year, setYear } = useElectricity('2026');
  const [hoverIndex, setHoverIndex] = useState(null);

  const totalKwh = data?.totalKwh || '2,980 kWh YTD';
  const avgCost = data?.avgCost || '$417 YTD';
  const usageData = data?.usage || [
    { month: 'Jan', kwh: 420 },
    { month: 'Feb', kwh: 380 },
    { month: 'Mar', kwh: 450 },
    { month: 'Apr', kwh: 310 },
    { month: 'May', kwh: 290 },
    { month: 'Jun', kwh: 520 },
    { month: 'Jul', kwh: 610 }
  ];

  const maxKwh = Math.max(...usageData.map(i => i.kwh), 1);
  const gridSteps = [1, 0.5, 0];

  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 space-y-4">
      <CardHeader
        icon="⚡"
        iconBgColor="bg-amber-500/10"
        iconTextColor="text-amber-500"
        title="Electricity Consumption"
        subtitle={`Total: ${totalKwh} • Cost: ${avgCost}`}
        action={<PeriodSelector periods={['2025', '2026']} selected={year} onChange={setYear} />}
        className="border-b border-slate-100 dark:border-slate-700/60 pb-3"
      />

      {/* Plot Area */}
      <div className="relative h-64 sm:h-80 min-h-[240px] w-full flex-1 flex flex-col justify-between pt-1">
        {/* Y-Axis Gridlines */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-5">
          {gridSteps.map((step, idx) => (
            <div key={idx} className="w-full flex items-center gap-2">
              <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 w-10 text-right">
                {`${Math.round(maxKwh * step)} kWh`}
              </span>
              <div className="flex-1 border-b border-dashed border-slate-200 dark:border-slate-700/60" />
            </div>
          ))}
        </div>

        {/* Profit Analytics Pill Bars */}
        <div className="relative z-10 pl-12 h-full flex items-end justify-between gap-1 sm:gap-2 pb-5">
          {usageData.map((item, idx) => {
            const heightPercent = Math.round((item.kwh / maxKwh) * 98);
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
                        <span>{item.kwh.toLocaleString()} kWh Usage</span>
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
        <div className="pl-12 flex justify-between border-t border-slate-100 dark:border-slate-700/60 pt-2">
          {usageData.map((item, idx) => (
            <span key={idx} className="flex-1 text-center text-[10px] sm:text-xs font-bold text-slate-500 dark:text-slate-400 truncate max-w-[40px] mx-auto">
              {item.month}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
