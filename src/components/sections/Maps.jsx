import React, { useState } from 'react';
import GoogleMaps from './GoogleMaps.jsx';
import LeafletMaps from './LeafletMaps.jsx';
import CountryOrdersMap from './CountryOrdersMap.jsx';

export default function Maps() {
  const [activeMap, setActiveMap] = useState('google');

  return (
    <div className="w-full space-y-6">
      <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 dark:border-slate-700/60 pb-3 gap-3">
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Interactive Maps Showcase</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">Google Maps, Leaflet OpenStreetMap & Bubble Data Maps</p>
          </div>

          <div className="flex bg-slate-100 dark:bg-slate-700/60 p-1 rounded-xl text-xs font-medium self-start sm:self-auto">
            {['google', 'leaflet', 'bubble'].map(m => (
              <button
                key={m}
                onClick={() => setActiveMap(m)}
                className={`px-3 py-1.5 rounded-lg capitalize transition-all ${
                  activeMap === m
                    ? 'bg-accent text-white font-bold shadow-sm transition-colors'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                }`}
              >
                {m} Maps
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Render Active Interactive Map View */}
      <div>
        {activeMap === 'google' && <GoogleMaps />}
        {activeMap === 'leaflet' && <LeafletMaps />}
        {activeMap === 'bubble' && <CountryOrdersMap />}
      </div>
    </div>
  );
}
