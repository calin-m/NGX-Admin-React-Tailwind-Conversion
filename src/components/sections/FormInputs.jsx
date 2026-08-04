import React, { useState } from 'react';

export default function FormInputs() {
  const [text, setText] = useState('');
  const [select, setSelect] = useState('Option 1');

  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 space-y-6">
      <div className="border-b border-slate-100 dark:border-slate-700/60 pb-3">
        <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Form Controls & Inputs</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">Standard Input Fields & Selects</p>
      </div>

      <div className="space-y-4 max-w-md">
        <div>
          <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">Text Field</label>
          <input
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Enter text..."
            className="w-full px-4 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-slate-100 focus:outline-none"
          />
        </div>

        <div>
          <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">Select Field</label>
          <select
            value={select}
            onChange={e => setSelect(e.target.value)}
            className="w-full px-4 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-slate-100 focus:outline-none"
          >
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </select>
        </div>
      </div>
    </div>
  );
}
