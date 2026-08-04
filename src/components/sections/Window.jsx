import React, { useState } from 'react';

export default function Window() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 space-y-4">
      <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Floating Window Modal</h3>
      <button onClick={() => setOpen(true)} className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold">
        Open Floating Window
      </button>
      {open && (
        <div className="fixed bottom-6 right-6 w-80 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-2xl p-4 space-y-2 z-50">
          <div className="flex justify-between items-center border-b pb-2">
            <h4 className="font-bold text-xs">Floating Window</h4>
            <button onClick={() => setOpen(false)} className="text-xs">✕</button>
          </div>
          <p className="text-xs text-slate-500">Floating window content area.</p>
        </div>
      )}
    </div>
  );
}
