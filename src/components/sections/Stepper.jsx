import React, { useState } from 'react';

export default function Stepper() {
  const [step, setStep] = useState(1);

  const steps = [
    { title: 'Account Details', desc: 'Setup login credentials' },
    { title: 'Personal Info', desc: 'Enter name & profile info' },
    { title: 'Confirmation', desc: 'Review and complete setup' }
  ];

  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 space-y-6">
      <div className="border-b border-slate-100 dark:border-slate-700/60 pb-3">
        <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Multi-Step Form Wizard</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">Step {step} of 3</p>
      </div>

      <div className="flex items-center justify-between relative max-w-lg mx-auto">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 dark:bg-slate-700 -translate-y-1/2 z-0" />
        {steps.map((s, idx) => {
          const stepNum = idx + 1;
          const isComplete = step > stepNum;
          const isCurrent = step === stepNum;
          return (
            <div key={idx} className="relative z-10 flex flex-col items-center space-y-1">
              <div className={`w-9 h-9 rounded-full font-extrabold text-xs flex items-center justify-center transition-all ${
                isCurrent ? 'bg-indigo-600 text-white ring-4 ring-indigo-500/20 shadow-md' : isComplete ? 'bg-emerald-500 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-500'
              }`}>
                {isComplete ? '✓' : stepNum}
              </div>
              <span className="text-[10px] font-bold text-slate-700 dark:text-slate-300">{s.title}</span>
            </div>
          );
        })}
      </div>

      <div className="p-6 bg-slate-50 dark:bg-slate-700/40 rounded-xl border border-slate-200/60 dark:border-slate-600/60 text-xs space-y-3 max-w-md mx-auto">
        <h4 className="font-bold text-slate-800 dark:text-slate-200">{steps[step - 1].title}</h4>
        <p className="text-slate-500">{steps[step - 1].desc}</p>
        <input type="text" placeholder={`Enter ${steps[step - 1].title}...`} className="w-full px-3 py-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-slate-100" />
      </div>

      <div className="flex justify-between max-w-md mx-auto">
        <button disabled={step === 1} onClick={() => setStep(prev => Math.max(prev - 1, 1))} className="px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold rounded-xl disabled:opacity-40">
          ◀ Previous
        </button>
        <button disabled={step === 3} onClick={() => setStep(prev => Math.min(prev + 1, 3))} className="px-4 py-2 bg-indigo-600 text-white text-xs font-semibold rounded-xl disabled:opacity-40 shadow-sm">
          Next Step ▶
        </button>
      </div>
    </div>
  );
}
