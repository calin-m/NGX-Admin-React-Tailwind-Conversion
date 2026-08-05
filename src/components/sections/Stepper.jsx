import React, { useState } from 'react';

export default function Stepper() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: 'admin@enterprise.io',
    name: 'Calin M.',
    company: 'Enterprise SaaS Ltd'
  });

  const steps = [
    { title: 'Account Details', desc: 'Setup login & email address', key: 'email' },
    { title: 'Personal Info', desc: 'Enter full name & profile info', key: 'name' },
    { title: 'Confirmation', desc: 'Review corporate organization', key: 'company' }
  ];

  const handleInputChange = (field, val) => {
    setFormData(prev => ({ ...prev, [field]: val }));
  };

  const isCompleted = step > 3;

  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 space-y-6">
      <div className="border-b border-slate-100 dark:border-slate-700/60 pb-3 flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Multi-Step Form Wizard</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {isCompleted ? 'Registration Completed!' : `Step ${step} of 3`}
          </p>
        </div>
        {isCompleted && (
          <button
            onClick={() => setStep(1)}
            className="px-3 py-1 bg-accent-light text-accent text-xs font-bold rounded-lg transition-colors"
          >
            🔄 Reset Wizard
          </button>
        )}
      </div>

      <div className="flex items-center justify-between relative max-w-lg mx-auto">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 dark:bg-slate-700 -translate-y-1/2 z-0" />
        {steps.map((s, idx) => {
          const stepNum = idx + 1;
          const isDone = step > stepNum;
          const isCurrent = step === stepNum;
          return (
            <div key={idx} className="relative z-10 flex flex-col items-center space-y-1">
              <div className={`w-9 h-9 rounded-full font-extrabold text-xs flex items-center justify-center transition-all ${
                isCurrent ? 'bg-accent text-white ring-4 ring-accent shadow-md' : isDone ? 'bg-emerald-500 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-500'
              }`}>
                {isDone ? '✓' : stepNum}
              </div>
              <span className="text-[10px] font-bold text-slate-700 dark:text-slate-300">{s.title}</span>
            </div>
          );
        })}
      </div>

      {!isCompleted ? (
        <div className="p-6 bg-slate-50 dark:bg-slate-700/40 rounded-xl border border-slate-200/60 dark:border-slate-600/60 text-xs space-y-3 max-w-md mx-auto">
          <h4 className="font-bold text-slate-800 dark:text-slate-200">{steps[step - 1].title}</h4>
          <p className="text-slate-500">{steps[step - 1].desc}</p>
          <input
            type="text"
            value={formData[steps[step - 1].key]}
            onChange={e => handleInputChange(steps[step - 1].key, e.target.value)}
            placeholder={`Enter ${steps[step - 1].title}...`}
            className="w-full px-3 py-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
      ) : (
        <div className="p-6 bg-emerald-500/10 rounded-xl border border-emerald-500/30 text-xs space-y-2 max-w-md mx-auto text-slate-800 dark:text-slate-200">
          <h4 className="font-extrabold text-emerald-600 dark:text-emerald-400 text-sm">🎉 Setup Complete!</h4>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Organization:</strong> {formData.company}</p>
        </div>
      )}

      <div className="flex justify-between max-w-md mx-auto">
        <button
          disabled={step === 1 || isCompleted}
          onClick={() => setStep(prev => Math.max(prev - 1, 1))}
          className="px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold rounded-xl disabled:opacity-40"
        >
          ◀ Previous
        </button>
        <button
          disabled={isCompleted}
          onClick={() => setStep(prev => prev + 1)}
          className="px-4 py-2 bg-accent hover:bg-accent-hover text-white text-xs font-semibold rounded-xl disabled:opacity-40 shadow-sm transition-colors"
        >

          {step === 3 ? 'Complete Setup ✓' : 'Next Step ▶'}
        </button>
      </div>
    </div>
  );
}

