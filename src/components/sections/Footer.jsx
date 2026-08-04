import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full py-4 px-6 bg-white dark:bg-slate-800 border-t border-slate-200/80 dark:border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400 transition-colors">
      <div className="flex items-center space-x-1">
        <span>Created with ♥ by</span>
        <a
          href="https://akveo.page.link/8V2f"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
        >
          Akveo
        </a>
        <span>2026 • Modernized React 18 + Tailwind CSS v4</span>
      </div>

      <div className="flex items-center space-x-4 text-base">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" title="GitHub">
          🌐
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" title="Facebook">
          📘
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" title="Twitter">
          🐦
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" title="LinkedIn">
          💼
        </a>
      </div>
    </footer>
  );
}
