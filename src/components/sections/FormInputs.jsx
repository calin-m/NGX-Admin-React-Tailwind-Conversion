import React, { useState } from 'react';
import FormInput from '../ui/FormInput.jsx';

export default function FormInputs() {
  const [text, setText] = useState('');
  const [select, setSelect] = useState('Option 1 - Enterprise SaaS');
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
          <FormInput
            label="Standard Text Input"
            icon="✉️"
            value={text}
            onChange={e => setText(e.target.value)}
            onClear={() => setText('')}
            placeholder="Enter text..."
          />

          <FormInput
            label="Custom Select Field"
            type="select"
            value={select}
            onChange={e => setSelect(e.target.value)}
            options={[
              'Option 1 - Enterprise SaaS',
              'Option 2 - Corporate Analytics',
              'Option 3 - Developer Tooling'
            ]}
          />

          <FormInput
            label="Success Validation State"
            value={validationInput}
            onChange={e => setValidationInput(e.target.value)}
            onClear={() => setValidationInput('')}
            helpText="✓ Valid email format verified"
          />
        </div>

        <div className="space-y-5">
          <FormInput
            label="Interactive Toggle Switch"
            type="toggle"
            value={toggleState}
            onChange={setToggleState}
            placeholder={toggleState ? 'Enabled (Active)' : 'Disabled (Inactive)'}
          />

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

