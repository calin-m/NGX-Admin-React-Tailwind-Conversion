import React, { useState } from 'react';

export default function Datepicker() {
  const [date, setDate] = useState('2026-08-04');

  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 space-y-4">
      <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Datepicker Control</h3>
      <input
        type="date"
        value={date}
        onChange={e => setDate(e.target.value)}
        className="px-4 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-slate-100"
      />
    </div>
  );
}
