import React from 'react';

export default function Header({ isDarkMode, onToggleTheme, onToggleSidebar }) {
  return (
    <header className="sticky top-0 z-30 w-full h-16 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-700/80 px-6 flex items-center justify-between transition-colors duration-200">
      <div className="flex items-center space-x-4">
        <button
          onClick={onToggleSidebar}
          className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors"
          title="Toggle Navigation Menu"
        >
          ☰
        </button>
        <div className="hidden md:flex items-center space-x-2">
          <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">Corporate Overview</span>
          <span className="text-xs text-slate-400">/ Dashboard</span>
        </div>
      </div>

      <div className="flex items-center space-x-3">
        {/* Dark Mode Toggle Button */}
        <button
          onClick={onToggleTheme}
          className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all text-sm"
          title="Toggle Dark / Light Theme"
        >
          {isDarkMode ? '🌙 Dark' : '☀️ Light'}
        </button>

        {/* User Profile Badge */}
        <div className="flex items-center space-x-3 pl-2 border-l border-slate-200 dark:border-slate-700/80">
          <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white font-bold flex items-center justify-center text-sm shadow-sm">
            AD
          </div>
          <div className="hidden sm:block text-left">
            <span className="text-xs font-bold text-slate-900 dark:text-slate-100 block">Admin User</span>
            <span className="text-[10px] text-slate-400 block">admin@ngx-corporate.io</span>
          </div>
        </div>
      </div>
    </header>
  );
}
