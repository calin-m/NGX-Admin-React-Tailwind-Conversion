import React from 'react';

export default function LeafletMaps() {
  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 space-y-4">
      <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Leaflet Maps OpenStreetMap</h3>
      <div className="h-64 rounded-xl bg-slate-900 text-slate-300 flex items-center justify-center font-mono text-xs font-bold">
        🗺️ Leaflet OpenStreetMap Layer View
      </div>
    </div>
  );
}
