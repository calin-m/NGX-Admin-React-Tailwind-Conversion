import React, { useState } from 'react';

export default function Dialogs() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 space-y-6">
      <div className="border-b border-slate-100 dark:border-slate-700/60 pb-3">
        <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Modal & Dialog Overlays</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">Confirmation Windows & Dialog Modals</p>
      </div>

      <button onClick={() => setIsOpen(true)} className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-semibold shadow-sm">
        Open Confirmation Dialog
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
          <div className="w-full max-w-sm bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 p-6 space-y-4">
            <h4 className="font-bold text-slate-900 dark:text-slate-100 text-base">Confirm Action</h4>
            <p className="text-xs text-slate-500">Are you sure you want to proceed with this operation?</p>
            <div className="flex justify-end space-x-3 pt-2">
              <button onClick={() => setIsOpen(false)} className="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl text-xs font-semibold">
                Cancel
              </button>
              <button onClick={() => setIsOpen(false)} className="px-3 py-1.5 bg-indigo-600 text-white rounded-xl text-xs font-semibold">
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
