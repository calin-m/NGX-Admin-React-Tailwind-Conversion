import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans flex flex-col antialiased">
      {/* Top Header Placeholder (Ready for converted <Header />) */}
      <header className="h-16 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-6 flex items-center justify-between shadow-xs sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <span className="font-bold text-lg tracking-tight text-blue-600 dark:text-blue-400">
            NGX Admin Corporate
          </span>
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
            React + Tailwind v4
          </span>
        </div>
      </header>

      {/* Main Corporate Dashboard Container Shell */}
      <main className="flex-1 p-6 max-w-7xl mx-auto w-full space-y-6">
        <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl p-12 text-center bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm space-y-3">
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200">
            Corporate Dashboard Ready for Components
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Converted components from <code className="text-blue-600 dark:text-blue-400">old-src/ngx-admin-master</code> will be mounted here in <code className="text-blue-600 dark:text-blue-400">src/components/sections/</code>.
          </p>
        </div>
      </main>
    </div>
  );
}
