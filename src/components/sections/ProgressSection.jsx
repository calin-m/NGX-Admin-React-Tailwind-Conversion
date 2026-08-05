import React from 'react';
import useStatsProgressBar from '../../hooks/useStatsProgressBar.js';

export default function ProgressSection() {
  const { data } = useStatsProgressBar();

  const progressItems = [
    { title: 'Order Target', value: 78, max: 100, color: 'bg-emerald-500', note: '780 / 1,000 Orders' },
    { title: 'Profit Goal', value: 85, max: 100, color: 'bg-accent', note: '$85,000 / $100,000' },

    { title: 'Customer Retention', value: 62, max: 100, color: 'bg-amber-500', note: '62% Loyal Returning' },
    { title: 'System Uptime', value: 99.8, max: 100, color: 'bg-teal-500', note: '99.8% High Availability' }
  ];

  return (
    <div className="w-full h-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 flex flex-col justify-between space-y-6">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700/60 pb-3">
        <div>
          <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Corporate Targets</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">Quarterly Progress Breakdown</p>
        </div>
        <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full">
          On Track
        </span>
      </div>

      <div className="space-y-5 flex-1 justify-center flex flex-col">
        {progressItems.map((item, idx) => (
          <div key={idx} className="space-y-1.5">
            <div className="flex justify-between items-center text-xs font-medium">
              <span className="text-slate-800 dark:text-slate-200 font-semibold">{item.title}</span>
              <span className="text-slate-500 dark:text-slate-400">{item.note}</span>
            </div>
            <div className="w-full h-3 bg-slate-100 dark:bg-slate-700/60 rounded-full overflow-hidden">
              <div
                className={`h-full ${item.color} rounded-full transition-all duration-500 shadow-sm`}
                style={{ width: `${item.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
