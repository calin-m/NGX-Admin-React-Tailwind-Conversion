import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full py-4 px-6 bg-white dark:bg-slate-800 border-t border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center text-xs text-slate-500 dark:text-slate-400 transition-colors">
      <div className="flex items-center space-x-1">
        <span>Created with ♥ by</span>
        <a
          href="https://github.com/calin-m/NGX-Admin-React-Tailwind-Conversion"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
        >
          Calin M
        </a>
        <span className="ml-1">2026 • Modernized React 18 + Tailwind CSS v4</span>
      </div>
    </footer>

  );
}
