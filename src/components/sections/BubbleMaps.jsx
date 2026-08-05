import React, { useState } from 'react';

export default function BubbleMaps() {
  const [activeRegion, setActiveRegion] = useState('North America');

  const regions = [
    { name: 'North America', density: '4,850 Orders', size: 'w-24 h-24', color: 'bg-accent-light border-accent' },
    { name: 'Europe', density: '3,420 Orders', size: 'w-20 h-20', color: 'bg-amber-500/30 border-amber-500' },
    { name: 'Asia-Pacific', density: '5,910 Orders', size: 'w-28 h-28', color: 'bg-emerald-500/30 border-emerald-500' },
    { name: 'Latin America', density: '1,280 Orders', size: 'w-16 h-16', color: 'bg-rose-500/30 border-rose-500' }
  ];

  const currentRegion = regions.find(r => r.name === activeRegion) || regions[0];

  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-100 dark:border-slate-700/60 pb-3 gap-3">
        <div>
          <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Global Bubble Data Map</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">Order Density & Regional Bubble Heatmap</p>
        </div>

        <span className="text-xs font-bold text-accent bg-accent-light px-3 py-1 rounded-full transition-colors">
          Total Global Density: 15.4k
        </span>
      </div>

      <div className="relative h-64 rounded-xl bg-slate-900 text-slate-300 flex items-center justify-center font-mono text-xs overflow-hidden border border-slate-700 shadow-inner">
        <div className="absolute inset-0 bg-slate-950/80" />

        {/* Dynamic Animated Bubble */}
        <div className="z-10 flex flex-col items-center justify-center space-y-3">
          <div className={`${currentRegion.size} ${currentRegion.color} rounded-full border-4 flex items-center justify-center animate-pulse shadow-lg transition-all duration-500`}>
            <span className="font-extrabold text-white text-xs text-center">{currentRegion.name}</span>
          </div>

          <div className="text-center">
            <span className="font-bold text-slate-100 text-sm block">{currentRegion.density}</span>
            <span className="text-[10px] text-slate-400">Regional B2B Customer Concentration</span>
          </div>
        </div>
      </div>

      {/* Region Selector */}
      <div className="flex flex-wrap gap-2 text-xs">
        <span className="text-slate-400 font-semibold py-1">Select Region:</span>
        {regions.map(r => (
          <button
            key={r.name}
            onClick={() => setActiveRegion(r.name)}
            className={`px-3 py-1 rounded-lg transition-all ${
              activeRegion === r.name
                ? 'bg-accent text-white font-bold shadow-sm transition-colors'
                : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
            }`}
          >

            🌐 {r.name} ({r.density})
          </button>
        ))}
      </div>
    </div>
  );
}

