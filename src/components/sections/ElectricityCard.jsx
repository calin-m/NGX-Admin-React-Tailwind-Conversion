import React from 'react';
import useElectricity from '../../hooks/useElectricity.js';

export default function ElectricityCard() {
  const { data, year, setYear } = useElectricity('2026');

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

  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 space-y-6">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700/60 pb-3">
        <div>
          <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Electricity Consumption</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">Total: {totalKwh} • Cost: {avgCost}</p>
        </div>

        <div className="flex bg-slate-100 dark:bg-slate-700/60 p-1 rounded-xl text-xs font-medium">
          {['2025', '2026'].map(y => (
            <button
              key={y}
              onClick={() => setYear(y)}
              className={`px-3 py-1 rounded-lg transition-all ${
                year === y ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 font-bold shadow-sm' : 'text-slate-500 dark:text-slate-400'
              }`}
            >
              {y}
            </button>
          ))}
        </div>
      </div>

      <div className="h-44 w-full flex items-end justify-between gap-2 pt-2">
        {usageData.map((pt, idx) => (
          <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group relative">
            <div className="w-full flex justify-center items-end h-32 relative">
              <div
                style={{ height: `${(pt.kwh / 650) * 100}%` }}
                className="w-full max-w-[24px] bg-indigo-500 dark:bg-indigo-400 rounded-t-md group-hover:bg-indigo-600 transition-all duration-300 shadow-sm"
              />
              {/* Tooltip on hover */}
              <div className="absolute -top-7 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 text-white text-[10px] py-0.5 px-1.5 rounded-md pointer-events-none whitespace-nowrap shadow-md z-10">
                {pt.kwh} kWh
              </div>
            </div>
            <span className="text-[10px] text-slate-400 font-medium">{pt.month}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

