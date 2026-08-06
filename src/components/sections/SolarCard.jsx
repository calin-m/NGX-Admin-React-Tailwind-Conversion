import React from 'react';
import CardHeader from '../ui/CardHeader.jsx';
import CircularProgress from '../ui/CircularProgress.jsx';
import useSolar from '../../hooks/useSolar.js';

export default function SolarCard() {
  const { data, mode, setMode } = useSolar('solar');

  const title = data?.title || 'Solar Energy Output';
  const subtitle = data?.subtitle || 'Rooftop Solar Panel Production';
  const value = data?.value || '84%';
  const label = data?.label || 'Panel Efficiency';
  const energy = data?.energy || '4.2 kWh Generated';
  const subtext = data?.subtext || 'Peak Sun Hours: 6.5 hrs';

  const numericValue = parseInt(value, 10) || 84;

  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 space-y-6">
      <CardHeader
        icon={mode === 'solar' ? '☀️' : '🔋'}
        iconBgColor={mode === 'solar' ? 'bg-amber-500/10' : 'bg-indigo-500/10'}
        iconTextColor={mode === 'solar' ? 'text-amber-500' : 'text-indigo-400'}
        title={title}
        subtitle={subtitle}
        action={
          <div className="flex bg-slate-100 dark:bg-slate-700/60 p-1 rounded-xl text-xs font-medium">
            <button
              onClick={() => setMode('solar')}
              className={`px-3 py-1 rounded-lg transition-all ${
                mode === 'solar'
                  ? 'bg-emerald-500 text-white font-bold shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
              }`}
            >
              ☀️ Solar
            </button>
            <button
              onClick={() => setMode('battery')}
              className={`px-3 py-1 rounded-lg transition-all ${
                mode === 'battery'
                  ? 'bg-indigo-600 text-white font-bold shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
              }`}
            >
              🔋 Battery
            </button>
          </div>
        }
        className="border-b border-slate-100 dark:border-slate-700/60 pb-3"
      />

      <div className="flex flex-col items-center justify-center py-2 space-y-3">
        <CircularProgress
          value={numericValue}
          size={144}
          strokeWidth={8}
          colorClass={mode === 'solar' ? 'stroke-emerald-500' : 'stroke-indigo-500'}
          label={
            <div className="text-center">
              <span className={`text-3xl font-extrabold ${mode === 'solar' ? 'text-emerald-600 dark:text-emerald-400' : 'text-indigo-600 dark:text-indigo-400'}`}>{value}</span>
              <span className="text-[10px] text-slate-400 block font-semibold">{label}</span>
            </div>
          }
        />

        <div className="text-center">
          <span className="text-base font-bold text-slate-900 dark:text-slate-100 block">{energy}</span>
          <span className="text-xs text-slate-400 block">{subtext}</span>
        </div>
      </div>
    </div>
  );
}

