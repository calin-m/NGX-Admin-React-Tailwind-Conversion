import React from 'react';
import useSolar from '../../hooks/useSolar.js';

export default function SolarCard() {
  const { data } = useSolar();

  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 space-y-6">
      <div className="border-b border-slate-100 dark:border-slate-700/60 pb-3">
        <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Solar Energy Output</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">Rooftop Solar Panel Production</p>
      </div>

      <div className="flex flex-col items-center justify-center py-2 space-y-3">
        <div className="w-36 h-36 rounded-full border-8 border-emerald-500/20 flex items-center justify-center relative">
          <div className="text-center">
            <span className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">84%</span>
            <span className="text-[10px] text-slate-400 block font-semibold">Efficiency</span>
          </div>
        </div>

        <div className="text-center">
          <span className="text-base font-bold text-slate-900 dark:text-slate-100">4.2 kWh Generated</span>
          <span className="text-xs text-slate-400 block">Peak Sun Hours: 6.5 hrs</span>
        </div>
      </div>
    </div>
  );
}
