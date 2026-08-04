import React, { useState } from 'react';

export default function Maps() {
  const [activeMap, setActiveMap] = useState('google');

  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 space-y-6">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700/60 pb-3">
        <div>
          <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Interactive Maps Suite</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">Google Maps, Leaflet & Bubble Data Maps</p>
        </div>

        <div className="flex bg-slate-100 dark:bg-slate-700/60 p-1 rounded-xl text-xs font-medium">
          {['google', 'leaflet', 'bubble'].map(m => (
            <button
              key={m}
              onClick={() => setActiveMap(m)}
              className={`px-3 py-1.5 rounded-lg capitalize transition-all ${
                activeMap === m ? 'bg-indigo-600 text-white font-bold shadow-sm' : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              {m} Maps
            </button>
          ))}
        </div>
      </div>

      <div className="h-80 rounded-xl bg-slate-900 text-slate-300 flex items-center justify-center font-mono text-xs font-bold relative overflow-hidden">
        <span className="absolute top-3 left-3 text-[10px] bg-indigo-600 text-white px-2 py-0.5 rounded-md uppercase font-bold">
          {activeMap} View Active
        </span>
        🗺️ Interactive {activeMap.toUpperCase()} Map Stream - Lat: 37.7749, Lng: -122.4194
      </div>
    </div>
  );
}
