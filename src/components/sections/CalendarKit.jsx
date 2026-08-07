import React, { useState } from 'react';

export default function CalendarKit() {
  const [selectedDate, setSelectedDate] = useState(15);
  const [currentMonth, setCurrentMonth] = useState('August 2026');

  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-700/60 pb-3">
        <div>
          <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Calendar Kit Primitive</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">Standalone Inline Date Selector</p>
        </div>
        <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 font-semibold">
          &lt;ngx-calendar-kit&gt;
        </span>
      </div>

      {/* Month Header Controls */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setCurrentMonth('July 2026')}
          className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 text-slate-700 dark:text-slate-200 text-xs font-bold"
        >
          ◀
        </button>
        <span className="text-xs font-bold text-slate-900 dark:text-slate-100">{currentMonth}</span>
        <button
          onClick={() => setCurrentMonth('September 2026')}
          className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 text-slate-700 dark:text-slate-200 text-xs font-bold"
        >
          ▶
        </button>
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-7 gap-1.5 text-center">
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => (
          <span key={d} className="text-[10px] font-bold text-slate-400 uppercase py-1">{d}</span>
        ))}
        {days.map(day => (
          <button
            key={day}
            onClick={() => setSelectedDate(day)}
            className={`py-1.5 rounded-lg text-xs font-semibold transition-all ${
              selectedDate === day
                ? 'bg-blue-600 text-white shadow-xs font-bold scale-105'
                : 'hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-xs font-medium text-blue-700 dark:text-blue-300">
        📅 Selected Date: <strong>{currentMonth.split(' ')[0]} {selectedDate}, {currentMonth.split(' ')[1]}</strong>
      </div>
    </div>
  );
}

