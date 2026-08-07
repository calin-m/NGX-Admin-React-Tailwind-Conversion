import React, { useState } from 'react';
import NotificationDrawer from './NotificationDrawer.jsx';

export default function Header({ isDarkMode, onToggleTheme, onToggleSidebar, onOpenSearch, onOpenThemeCustomizer }) {
  const [isNotifOpen, setIsNotifOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 w-full h-16 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-700/80 px-3 sm:px-6 flex items-center justify-between transition-colors duration-200">
      <div className="flex items-center space-x-2 sm:space-x-4">
        <div className="laser-border-wrapper shrink-0">
          <button
            onClick={onToggleSidebar}
            className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors flex items-center justify-center leading-none"
            title="Toggle Navigation Menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Global Search Shortcut Button */}
        <button
          onClick={onOpenSearch}
          className="flex items-center justify-between w-24 xs:w-44 sm:w-64 px-2 sm:px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-700/60 border border-slate-200/60 dark:border-slate-600/60 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xs transition-colors"
        >
          <span className="flex items-center space-x-1 sm:space-x-2 truncate">
            <span className="shrink-0">🔍</span>
            <span className="truncate">Search <span className="hidden xs:inline">commands...</span></span>
          </span>
          <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[9px] font-bold bg-white dark:bg-slate-800 rounded-md border border-slate-200 dark:border-slate-600 text-slate-500">
            Ctrl+K
          </kbd>
        </button>
      </div>

      <div className="flex items-center space-x-1 sm:space-x-3 relative shrink-0">
        {/* Palette Theme Customizer Button */}
        <button
          onClick={onOpenThemeCustomizer}
          className="p-2 sm:p-2.5 rounded-xl bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all text-sm"
          title="Open Theme Customizer"
        >
          🎨
        </button>

        {/* Notification Bell Toggle */}
        <div className="relative">
          <button
            onClick={() => setIsNotifOpen(prev => !prev)}
            className="p-2 sm:p-2.5 rounded-xl bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all text-sm relative"
            title="System Notifications"
          >
            🔔
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-accent animate-ping" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-accent" />

          </button>

          <NotificationDrawer isOpen={isNotifOpen} onClose={() => setIsNotifOpen(false)} />
        </div>

        {/* Dark Mode Toggle Button */}
        <button
          onClick={onToggleTheme}
          className="p-2 sm:p-2.5 rounded-xl bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all text-sm"
          title="Toggle Dark / Light Theme"
        >
          {isDarkMode ? (
            <>
              <span className="hidden sm:inline">🌙 Dark</span>
              <span className="sm:hidden">🌙</span>
            </>
          ) : (
            <>
              <span className="hidden sm:inline">☀️ Light</span>
              <span className="sm:hidden">☀️</span>
            </>
          )}
        </button>

        {/* User Profile Badge */}
        <div className="flex items-center space-x-2.5 pl-2 border-l border-slate-200 dark:border-slate-700/80 min-w-0 shrink-0">
          <div className="w-9 h-9 rounded-xl bg-accent text-white font-bold flex items-center justify-center text-sm shadow-sm transition-colors shrink-0">
            AD
          </div>
          <div className="hidden sm:block text-left min-w-0 max-w-[100px] md:max-w-[140px]">
            <span className="text-xs font-bold text-slate-900 dark:text-slate-100 block truncate">Admin User</span>
            <span className="text-[10px] text-slate-400 block truncate" title="admin@ngx-corporate.io">admin@ngx-corporate.io</span>
          </div>
        </div>
      </div>
    </header>
  );
}
