import React, { useState } from 'react';

export default function CalendarApp() {
  const [selectedDay, setSelectedDay] = useState(15);

  const events = [
    { id: 1, title: 'Q3 Board Review Meeting', time: '10:00 AM', tag: 'Corporate' },
    { id: 2, title: 'Sprint Retrospective', time: '02:30 PM', tag: 'Engineering' },
    { id: 3, title: 'Product Launch Webinar', time: '04:00 PM', tag: 'Marketing' }
  ];

  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-700/60 pb-3">
        <div>
          <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Calendar Scheduler</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">August 2026</p>
        </div>
        <button className="px-3 py-1.5 bg-accent hover:bg-accent-hover text-white text-xs font-semibold rounded-xl transition-all">
          ➕ New Event
        </button>
      </div>

      <div className="grid grid-cols-7 gap-2 text-center text-xs">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
          <span key={d} className="font-bold text-slate-400 py-1">{d}</span>
        ))}
        {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`py-2.5 rounded-xl font-semibold transition-all ${
              selectedDay === day
                ? 'bg-accent text-white shadow-md transition-colors'
                : 'hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200'
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60 space-y-2">
        <h4 className="font-bold text-xs text-slate-700 dark:text-slate-300">Events for August {selectedDay}:</h4>
        {events.map(ev => (
          <div key={ev.id} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700/40 rounded-xl border border-slate-200/60 dark:border-slate-600/60 text-xs">
            <span className="font-semibold text-slate-800 dark:text-slate-200">{ev.title}</span>
            <span className="text-accent font-bold transition-colors">{ev.time}</span>
          </div>
        ))}

      </div>
    </div>
  );
}
