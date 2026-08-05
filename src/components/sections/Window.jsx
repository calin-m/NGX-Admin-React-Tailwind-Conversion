import React, { useState } from 'react';

export default function Window() {
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);

  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 space-y-4">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700/60 pb-3">
        <div>
          <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Floating Window Component</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">Minimizable Docked Container</p>
        </div>
        <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 font-semibold">
          &lt;ngx-window&gt;
        </span>
      </div>

      <button
        onClick={() => { setOpen(true); setMinimized(false); }}
        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-sm transition-all"
      >
        Open Docked Window
      </button>

      {open && (
        <div className={`fixed bottom-6 right-6 ${minimized ? 'w-64 h-12' : 'w-80 h-64'} bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-2xl p-4 flex flex-col justify-between z-50 transition-all duration-300 animate-in fade-in`}>
          <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-700 pb-2">
            <h4 className="font-bold text-xs text-slate-900 dark:text-slate-100">💻 Docked Utility Window</h4>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setMinimized(prev => !prev)}
                className="text-xs font-bold text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 px-1"
              >
                {minimized ? '🗖' : '🗕'}
              </button>
              <button
                onClick={() => setOpen(false)}
                className="text-xs font-bold text-slate-500 hover:text-rose-600 px-1"
              >
                ✕
              </button>
            </div>
          </div>

          {!minimized && (
            <div className="flex-1 py-2 text-xs text-slate-600 dark:text-slate-300 space-y-2 overflow-y-auto">
              <p>This floating container supports minimize, restore, and drag-docking behaviors.</p>
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-700/50 text-[11px] font-semibold text-slate-700 dark:text-slate-200">
                ⚡ Live Process Status: Active (PID 4082)
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

