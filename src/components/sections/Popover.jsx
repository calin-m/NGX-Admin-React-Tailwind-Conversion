import React, { useState } from 'react';

export default function Popover() {
  const [activePos, setActivePos] = useState('top');
  const [show, setShow] = useState(false);

  const positions = ['top', 'right', 'bottom', 'left'];

  const posClasses = {
    top: 'bottom-full mb-2 left-1/2 -translate-x-1/2',
    bottom: 'top-full mt-2 left-1/2 -translate-x-1/2',
    left: 'right-full mr-2 top-1/2 -translate-y-1/2',
    right: 'left-full ml-2 top-1/2 -translate-y-1/2'
  };

  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 space-y-4">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700/60 pb-3">
        <div>
          <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Popover Component</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">Contextual Overlay Position Controls</p>
        </div>
        <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 font-semibold">
          &lt;ngx-popover&gt;
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {positions.map(pos => (
          <button
            key={pos}
            onClick={() => { setActivePos(pos); setShow(true); }}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold uppercase transition-all ${
              activePos === pos && show
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
            }`}
          >
            {pos}
          </button>
        ))}
      </div>

      <div className="pt-8 pb-8 flex items-center justify-center">
        <div className="relative inline-block">
          <button
            onClick={() => setShow(prev => !prev)}
            className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-md transition-all"
          >
            {show ? 'Hide Popover' : 'Show Popover'}
          </button>
          {show && (
            <div className={`absolute ${posClasses[activePos]} p-3.5 bg-slate-900 text-white text-xs rounded-xl shadow-2xl z-30 w-52 animate-in fade-in`}>
              <h4 className="font-bold text-indigo-400 mb-1 uppercase tracking-wider text-[10px]">Popover ({activePos})</h4>
              <p className="text-[11px] leading-snug">This is an interactive contextual popover placed at position: <strong>{activePos}</strong>.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

