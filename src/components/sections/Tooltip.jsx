import React, { useState } from 'react';

export default function Tooltip() {
  const [activeTooltip, setActiveTooltip] = useState(null);

  const tooltips = [
    { id: 'top', label: 'Hover Top', text: 'Top aligned tooltip message', pos: 'bottom-full mb-2 left-1/2 -translate-x-1/2' },
    { id: 'bottom', label: 'Hover Bottom', text: 'Bottom aligned tooltip message', pos: 'top-full mt-2 left-1/2 -translate-x-1/2' },
    { id: 'right', label: 'Hover Right', text: 'Right aligned tooltip message', pos: 'left-full ml-2 top-1/2 -translate-y-1/2' }
  ];

  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-700/60 pb-3">
        <div>
          <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Tooltip Showcase</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">Interactive Floating Tooltip Hints</p>
        </div>
        <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 font-semibold">
          &lt;ngx-tooltip&gt;
        </span>
      </div>

      <div className="flex flex-wrap gap-4 pt-4 pb-4">
        {tooltips.map(item => (
          <div key={item.id} className="relative inline-block">
            <button
              onMouseEnter={() => setActiveTooltip(item.id)}
              onMouseLeave={() => setActiveTooltip(null)}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-sm transition-all"
            >
              {item.label}
            </button>

            {activeTooltip === item.id && (
              <div className={`absolute ${item.pos} px-3 py-1.5 bg-slate-900 text-white text-[11px] font-medium rounded-lg shadow-xl whitespace-nowrap z-30 animate-in fade-in pointer-events-none`}>
                {item.text}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

