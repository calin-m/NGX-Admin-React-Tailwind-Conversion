import React from 'react';

export default function FormLayouts() {
  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 space-y-6">
      <div className="border-b border-slate-100 dark:border-slate-700/60 pb-3">
        <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Form Layout Templates</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">Horizontal & Grid Layout Form Cards</p>
      </div>

      <form onSubmit={e => e.preventDefault()} className="space-y-4 max-w-lg">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">First Name</label>
            <input type="text" placeholder="John" className="w-full px-4 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600" />
          </div>
          <div>
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">Last Name</label>
            <input type="text" placeholder="Doe" className="w-full px-4 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600" />
          </div>
        </div>

        <button type="submit" className="px-4 py-2 bg-indigo-600 text-white text-xs font-bold rounded-xl shadow-sm">
          Submit Form
        </button>
      </form>
    </div>
  );
}
