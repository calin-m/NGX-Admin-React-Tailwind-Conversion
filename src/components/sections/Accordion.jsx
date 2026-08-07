import React, { useState } from 'react';

export default function Accordion() {
  const [openIndexes, setOpenIndexes] = useState([0]);
  const [multiExpand, setMultiExpand] = useState(false);

  const items = [
    { title: 'What is NGX Admin React Tailwind?', content: 'NGX Admin React Tailwind is a 100% modernized React 18 + Tailwind CSS conversion of the popular NGX-Admin dashboard.' },
    { title: 'Is it fully responsive?', content: 'Yes! All layouts, components, charts, and data tables adapt seamlessly across Mobile, Tablet, and Desktop screen sizes.' },
    { title: 'Does it support Dark Mode?', content: 'Yes! Features a built-in dark mode toggle and theme customizer for primary color accents.' },
    { title: 'How does the 7-Gateway Engine work?', content: 'Executes automated AST verification, accessibility audits, living architecture synchronization, and Vitest unit testing.' }
  ];

  const toggleIndex = (idx) => {
    if (multiExpand) {
      setOpenIndexes(prev => prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]);
    } else {
      setOpenIndexes(prev => prev.includes(idx) ? [] : [idx]);
    }
  };

  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 space-y-4">
      <div className="border-b border-slate-100 dark:border-slate-700/60 pb-3 flex flex-wrap items-center justify-between gap-2">
        <div>
          <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Accordion Panels</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">Expandable & Collapsible FAQ List</p>
        </div>

        <div className="flex items-center space-x-2 text-xs">
          <span className="text-slate-500 font-medium">Multi-Expand:</span>
          <button
            onClick={() => setMultiExpand(prev => !prev)}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all ${
              multiExpand ? 'bg-accent text-white transition-colors' : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400'
            }`}

          >
            {multiExpand ? 'ON' : 'OFF'}
          </button>
        </div>
      </div>

      <div className="space-y-3">
        {items.map((item, idx) => {
          const isOpen = openIndexes.includes(idx);
          return (
            <div key={idx} className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden transition-all duration-300">
              <button
                onClick={() => toggleIndex(idx)}
                className="w-full p-4 text-left font-bold text-xs text-slate-800 dark:text-slate-200 flex justify-between items-center bg-slate-50/50 dark:bg-slate-700/40 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                <span>{item.title}</span>
                <span className={`text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-accent' : 'rotate-0'}`}>
                  ▼
                </span>
              </button>
              <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                  <div className="p-4 text-xs text-slate-600 dark:text-slate-300 border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
                    {item.content}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

