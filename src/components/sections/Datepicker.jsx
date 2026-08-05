import React, { useState } from 'react';

export default function Datepicker() {
  const [startDate, setStartDate] = useState('2026-08-01');
  const [endDate, setEndDate] = useState('2026-08-15');
  const [isRange, setIsRange] = useState(false);

  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 space-y-4">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700/60 pb-3">
        <div>
          <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Datepicker Control</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">Single & Date Range Selector</p>
        </div>
        <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 font-semibold">
          &lt;ngx-datepicker&gt;
        </span>
      </div>

      <div className="flex items-center space-x-3">
        <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center space-x-2">
          <input
            type="checkbox"
            checked={isRange}
            onChange={e => setIsRange(e.target.checked)}
            className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
          />
          <span>Enable Date Range Mode</span>
        </label>
      </div>

      <div className="flex flex-wrap gap-3 items-center">
        <div>
          <label className="text-[11px] font-bold text-slate-500 block mb-1">Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={e => setStartDate(e.target.value)}
            className="px-4 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {isRange && (
          <div>
            <label className="text-[11px] font-bold text-slate-500 block mb-1">End Date</label>
            <input
              type="date"
              value={endDate}
              onChange={e => setEndDate(e.target.value)}
              className="px-4 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 animate-in fade-in"
            />
          </div>
        )}
      </div>

      <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-xs font-semibold text-blue-700 dark:text-blue-300">
        📅 Selected: {startDate} {isRange ? `➔ ${endDate}` : ''}
      </div>
    </div>
  );
}

