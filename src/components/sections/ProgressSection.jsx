import React from 'react';
import CardHeader from '../ui/CardHeader.jsx';
import TrendBadge from '../ui/TrendBadge.jsx';
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
    <div className="w-full min-h-[260px] rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 flex flex-col justify-between space-y-4">
      <CardHeader
        icon="🎯"
        iconBgColor="bg-emerald-500/10"
        iconTextColor="text-emerald-600 dark:text-emerald-400"
        title="Corporate Targets"
        subtitle="Quarterly Progress Breakdown"
        action={<TrendBadge value="On Track" type="positive" />}
      />

      <div className="space-y-3.5 py-1">
        {progressItems.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex justify-between items-center text-xs font-medium">
              <span className="text-slate-800 dark:text-slate-200 font-semibold">{item.title}</span>
              <span className="text-slate-500 dark:text-slate-400">{item.note}</span>
            </div>
            <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-700/60 rounded-full overflow-hidden">
              <div
                className={`h-full ${item.color} rounded-full transition-all duration-500 shadow-xs`}
                style={{ width: `${item.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="text-xs text-center text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-700/60">
        Overall Quarterly Completion: <span className="font-semibold text-emerald-600 dark:text-emerald-400">81.2%</span>
      </div>
    </div>
  );
}
