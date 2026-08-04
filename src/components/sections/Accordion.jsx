import React, { useState } from 'react';

export default function Accordion() {
  const [openIdx, setOpenIdx] = useState(0);

  const items = [
    { title: 'What is NGX Admin React Tailwind?', content: 'NGX Admin React Tailwind is a 100% modernized React 18 + Tailwind CSS conversion of the popular NGX-Admin dashboard.' },
    { title: 'Is it fully responsive?', content: 'Yes! All layouts, components, charts, and data tables adapt seamlessly across Mobile, Tablet, and Desktop screen sizes.' },
    { title: 'Does it support Dark Mode?', content: 'Yes! Features a built-in dark mode toggle and theme customizer for primary color accents.' }
  ];

  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 space-y-4">
      <div className="border-b border-slate-100 dark:border-slate-700/60 pb-3">
        <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Accordion Panels</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">Expandable & Collapsible FAQ List</p>
      </div>

      <div className="space-y-3">
        {items.map((item, idx) => (
          <div key={idx} className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
            <button
              onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
              className="w-full p-4 text-left font-bold text-xs text-slate-800 dark:text-slate-200 flex justify-between items-center bg-slate-50/50 dark:bg-slate-700/40 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            >
              <span>{item.title}</span>
              <span>{openIdx === idx ? '▲' : '▼'}</span>
            </button>
            {openIdx === idx && (
              <div className="p-4 text-xs text-slate-600 dark:text-slate-300 border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
