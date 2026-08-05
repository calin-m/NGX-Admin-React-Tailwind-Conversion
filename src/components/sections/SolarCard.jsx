import React from 'react';
import useSolar from '../../hooks/useSolar.js';

export default function SolarCard() {
  const { data, mode, setMode } = useSolar('solar');

  const title = data?.title || 'Solar Energy Output';
  const subtitle = data?.subtitle || 'Rooftop Solar Panel Production';
  const value = data?.value || '84%';
  const label = data?.label || 'Panel Efficiency';
  const energy = data?.energy || '4.2 kWh Generated';
  const subtext = data?.subtext || 'Peak Sun Hours: 6.5 hrs';

  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 space-y-6">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700/60 pb-3">
        <div>
          <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">{title}</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">{subtitle}</p>
        </div>

        <div className="flex bg-slate-100 dark:bg-slate-700/60 p-1 rounded-xl text-xs font-medium">
          <button
            onClick={() => setMode('solar')}
            className={`px-3 py-1 rounded-lg transition-all ${
              mode === 'solar'
                ? 'bg-emerald-500 text-white font-bold shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            ☀️ Solar
          </button>
          <button
            onClick={() => setMode('battery')}
            className={`px-3 py-1 rounded-lg transition-all ${
              mode === 'battery'
                ? 'bg-indigo-600 text-white font-bold shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            🔋 Battery
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center py-2 space-y-3">
        <div className={`w-36 h-36 rounded-full border-8 ${mode === 'solar' ? 'border-emerald-500/30' : 'border-indigo-500/30'} flex items-center justify-center relative shadow-inner`}>
          <div className="text-center">
            <span className={`text-3xl font-extrabold ${mode === 'solar' ? 'text-emerald-600 dark:text-emerald-400' : 'text-indigo-600 dark:text-indigo-400'}`}>{value}</span>
            <span className="text-[10px] text-slate-400 block font-semibold">{label}</span>
          </div>
        </div>

        <div className="text-center">
          <span className="text-base font-bold text-slate-900 dark:text-slate-100 block">{energy}</span>
          <span className="text-xs text-slate-400 block">{subtext}</span>
        </div>
      </div>
    </div>
  );
}

