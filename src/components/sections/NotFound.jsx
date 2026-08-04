import React from 'react';

export default function NotFound() {
  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-12 text-center space-y-4">
      <div className="text-6xl font-black text-indigo-600">404</div>
      <h3 className="font-bold text-slate-900 dark:text-slate-100 text-lg">Page Not Found</h3>
      <p className="text-xs text-slate-500 max-w-sm mx-auto">The requested page could not be located in the NGX-Admin routing matrix.</p>
    </div>
  );
}
