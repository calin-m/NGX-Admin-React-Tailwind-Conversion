import React, { useState } from 'react';

export default function TrafficBarChart({ onBarSelect }) {
  const [activeDay, setActiveDay] = useState('Wed');

  const days = [
    { day: 'Mon', val: 42 },
    { day: 'Tue', val: 68 },
    { day: 'Wed', val: 89 },
    { day: 'Thu', val: 75 },
    { day: 'Fri', val: 94 },
    { day: 'Sat', val: 56 },
    { day: 'Sun', val: 38 }
  ];

  const handleSelectDay = d => {
    setActiveDay(d);
    if (onBarSelect) onBarSelect(d);
  };

  return (
    <div className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-xs border border-slate-200 dark:border-slate-700 space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-700 pb-3 mb-4">
        <span className="text-slate-900 dark:text-slate-100">Daily Traffic Flow</span>
        <span className="text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-full">
          Day: {activeDay}
        </span>
      </div>

      <div className="h-28 flex items-end justify-between gap-1.5 pt-2">
        {days.map(d => (
          <button
            key={d.day}
            onClick={() => handleSelectDay(d.day)}
            className="flex-1 flex flex-col items-center gap-1 group h-full justify-end"
          >
            <div className="w-full flex justify-center items-end h-20">
              <div
                style={{ height: `${d.val}%` }}
                className={`w-full max-w-[16px] rounded-t transition-all ${
                  activeDay === d.day ? 'bg-indigo-600 dark:bg-indigo-400 scale-105' : 'bg-slate-200 dark:bg-slate-700 group-hover:bg-indigo-400/50'
                }`}
              />
            </div>
            <span className="text-[10px] font-semibold text-slate-400">{d.day}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

