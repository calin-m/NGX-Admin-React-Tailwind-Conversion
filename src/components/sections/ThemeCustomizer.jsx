import React from 'react';

export default function ThemeCustomizer({ isOpen, onClose, accentColor, setAccentColor, isDarkMode, onToggleTheme }) {
  const accents = [
    { id: 'indigo', name: 'Indigo (Default)', class: 'bg-indigo-600' },
    { id: 'emerald', name: 'Emerald', class: 'bg-emerald-600' },
    { id: 'purple', name: 'Purple', class: 'bg-purple-600' },
    { id: 'teal', name: 'Teal', class: 'bg-teal-600' }
  ];

  return (
    <>
      {/* Backdrop Overlay with Smooth Fade In / Out */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Slide-over Drawer Panel with Smooth Slide In / Out on Right Edge */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm h-full bg-white dark:bg-slate-800 border-l border-slate-200 dark:border-slate-700 p-6 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-700/60 pb-4">
            <div>
              <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base">Theme Customizer</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Personalize Corporate Palette & Layout</p>
            </div>
            <button onClick={onClose} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-lg">✕</button>
          </div>

          {/* Color Accent Picker */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-slate-800 dark:text-slate-200 block uppercase tracking-wider">
              Brand Color Accent
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {accents.map(acc => (
                <button
                  key={acc.id}
                  onClick={() => setAccentColor && setAccentColor(acc.id)}
                  className={`flex items-center space-x-2.5 p-2.5 rounded-xl border text-xs font-semibold transition-all ${
                    accentColor === acc.id
                      ? 'border-current bg-slate-100 dark:bg-slate-700/60 font-bold shadow-xs'
                      : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/40'
                  }`}
                >
                  <span className={`w-3.5 h-3.5 rounded-full ${acc.class} shadow-xs`} />
                  <span className="truncate">{acc.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Mode Switcher */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-slate-800 dark:text-slate-200 block uppercase tracking-wider">
              Appearance Mode
            </label>
            <div className="flex bg-slate-100 dark:bg-slate-700/60 p-1 rounded-xl text-xs font-medium">
              <button
                onClick={() => isDarkMode && onToggleTheme()}
                className={`flex-1 py-2 rounded-lg text-center transition-all ${
                  !isDarkMode ? 'bg-white dark:bg-slate-800 font-bold text-slate-900 shadow-sm' : 'text-slate-500'
                }`}
              >
                ☀️ Light Mode
              </button>
              <button
                onClick={() => !isDarkMode && onToggleTheme()}
                className={`flex-1 py-2 rounded-lg text-center transition-all ${
                  isDarkMode ? 'bg-white dark:bg-slate-800 font-bold text-slate-100 shadow-sm' : 'text-slate-500'
                }`}
              >
                🌙 Dark Mode
              </button>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60">
          <button
            onClick={onClose}
            className="w-full py-2.5 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-xl text-xs font-bold shadow-md hover:opacity-90 transition-opacity"
          >
            Apply Settings
          </button>
        </div>
      </div>
    </>
  );
}
