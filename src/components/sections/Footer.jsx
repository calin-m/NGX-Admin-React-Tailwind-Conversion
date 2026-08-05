import React from 'react';

export default function Footer() {
  return (
    <footer className="sticky bottom-0 z-20 w-full py-3 px-4 sm:px-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-t border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center text-xs text-slate-500 dark:text-slate-400 transition-colors">
      <div className="flex flex-col sm:flex-row items-center justify-center text-center gap-1 sm:gap-2">
        {/* Row 1 on Mobile / Part 1 on Desktop */}
        <div className="flex items-center space-x-1">
          <span>Converted by</span>
          <a
            href="https://github.com/calin-m/NGX-Admin-React-Tailwind-Conversion"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-accent hover:underline transition-colors"
          >
            Calin M
          </a>
          <span className="ml-0.5">• 2026</span>
        </div>

        <span className="hidden sm:inline text-slate-300 dark:text-slate-600">•</span>

        {/* Row 2 on Mobile / Part 2 on Desktop */}
        <div>
          <span>React 18 + Tailwind CSS v4</span>
        </div>
      </div>
    </footer>
  );
}
