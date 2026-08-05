import React, { useState } from 'react';

export default function FormInputs() {
  const [text, setText] = useState('');
  const [select, setSelect] = useState('Option 1');
  const [toggleState, setToggleState] = useState(true);
  const [validationInput, setValidationInput] = useState('valid@example.com');
  const [selectedRadio, setSelectedRadio] = useState('Option A');

  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 space-y-6">
      <div className="border-b border-slate-100 dark:border-slate-700/60 pb-3">
        <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Form Controls & Inputs</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">Validation States, Toggles & Selects</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">Standard Text Input</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400 text-xs">✉️</span>
              <input
                type="text"
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="Enter text..."
                className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">Custom Select Field</label>
            <select
              value={select}
              onChange={e => setSelect(e.target.value)}
              className="w-full px-4 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-accent"
            >

              <option value="Option 1">Option 1 - Enterprise SaaS</option>
              <option value="Option 2">Option 2 - Corporate Analytics</option>
              <option value="Option 3">Option 3 - Developer Tooling</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">Success Validation State</label>
            <input
              type="text"
              value={validationInput}
              onChange={e => setValidationInput(e.target.value)}
              className="w-full px-4 py-2 text-xs rounded-xl bg-emerald-500/5 border border-emerald-500 text-emerald-900 dark:text-emerald-300 focus:outline-none"
            />
            <span className="text-[10px] text-emerald-600 dark:text-emerald-400 mt-1 block font-semibold">✓ Valid email format verified</span>
          </div>
        </div>

        <div className="space-y-5">
          {/* Custom Toggle Switch */}
          <div>
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-2">Interactive Toggle Switch</label>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setToggleState(prev => !prev)}
                className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ${
                  toggleState ? 'bg-accent' : 'bg-slate-300 dark:bg-slate-600'
                }`}
              >
                <div className={`w-4 h-4 rounded-full bg-white transition-transform duration-300 ${
                  toggleState ? 'translate-x-6' : 'translate-x-0'
                }`} />
              </button>
              <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                {toggleState ? 'Enabled (Active)' : 'Disabled (Inactive)'}
              </span>
            </div>
          </div>

          {/* Radio Button Group */}
          <div>
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-2">Radio Options</label>
            <div className="flex items-center space-x-4">
              {['Option A', 'Option B', 'Option C'].map(opt => (
                <label key={opt} className="flex items-center space-x-1.5 cursor-pointer text-xs text-slate-700 dark:text-slate-300">
                  <input
                    type="radio"
                    name="radioGroup"
                    value={opt}
                    checked={selectedRadio === opt}
                    onChange={() => setSelectedRadio(opt)}
                    className="text-accent focus:ring-accent"
                  />

                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

