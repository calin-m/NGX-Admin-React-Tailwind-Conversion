import React from 'react';

export default function Typography() {
  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 space-y-6">
      <div className="border-b border-slate-100 dark:border-slate-700/60 pb-3">
        <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Typography & Scale</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">Headings, Lead Paragraphs & Blockquotes</p>
      </div>

      <div className="space-y-4">
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100">H1 Heading - Enterprise Dashboard</h1>
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">H2 Heading - Analytics Overview</h2>
        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">H3 Heading - Section Title</h3>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Lead Paragraph: NGX Admin React Tailwind provides a sleek, responsive, and modular architecture designed for high-performance enterprise web applications.
        </p>
        <blockquote className="p-4 border-l-4 border-accent bg-slate-50 dark:bg-slate-700/40 text-xs italic text-slate-700 dark:text-slate-300 rounded-r-xl transition-colors">
          "Design is not just what it looks like and feels like. Design is how it works."
        </blockquote>

      </div>
    </div>
  );
}
