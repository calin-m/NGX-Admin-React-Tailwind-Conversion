import React, { useState } from 'react';

export default function Popover() {
  const [show, setShow] = useState(false);

  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 space-y-4">
      <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Popover Component</h3>
      <div className="relative inline-block">
        <button onClick={() => setShow(prev => !prev)} className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold">
          Toggle Popover
        </button>
        {show && (
          <div className="absolute top-full left-0 mt-2 p-3 bg-slate-900 text-white text-xs rounded-xl shadow-xl z-30 w-48">
            This is a contextual popover box!
          </div>
        )}
      </div>
    </div>
  );
}
