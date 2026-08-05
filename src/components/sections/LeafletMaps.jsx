import React, { useState } from 'react';

export default function LeafletMaps() {
  const [tileLayer, setTileLayer] = useState('Standard OSM');
  const [activeMarker, setActiveMarker] = useState('HQ Hub');

  const markers = [
    { id: 'HQ Hub', lat: '51.5074 N', lng: '0.1278 W', desc: 'Enterprise SaaS London HQ' },
    { id: 'EU Node', lat: '48.8566 N', lng: '2.3522 E', desc: 'Paris Data Center Node' },
    { id: 'APAC Hub', lat: '1.3521 N', lng: '103.8198 E', desc: 'Singapore Regional Office' }
  ];

  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-100 dark:border-slate-700/60 pb-3 gap-3">
        <div>
          <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Leaflet OpenStreetMap Layer</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">Open-Source GIS Mapping & Popup Markers</p>
        </div>

        {/* Tile Layer Switcher */}
        <div className="flex bg-slate-100 dark:bg-slate-700/60 p-1 rounded-xl text-xs font-medium">
          {['Standard OSM', 'Topographic', 'Dark Canvas'].map(layer => (
            <button
              key={layer}
              onClick={() => setTileLayer(layer)}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                tileLayer === layer
                  ? 'bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 font-bold shadow-sm'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
              }`}

            >
              {layer}
            </button>
          ))}
        </div>
      </div>

      <div className="relative h-64 rounded-xl bg-slate-900 text-slate-300 flex items-center justify-center font-mono text-xs overflow-hidden border border-slate-700 shadow-inner">
        <div className={`absolute inset-0 opacity-25 ${
          tileLayer === 'Topographic' ? 'bg-emerald-950' : tileLayer === 'Dark Canvas' ? 'bg-slate-950' : 'bg-blue-950'
        }`} />

        <div className="z-10 text-center space-y-2 p-4">
          <div className="text-3xl animate-pulse">🗺️</div>
          <div className="font-bold text-white text-sm">{activeMarker}</div>
          <div className="text-emerald-400 text-xs font-semibold">
            {markers.find(m => m.id === activeMarker)?.desc}
          </div>
          <div className="text-[10px] text-slate-400">
            Tile Provider: Leaflet.js • {tileLayer}
          </div>
        </div>
      </div>

      {/* Markers Selection */}
      <div className="flex flex-wrap gap-2 text-xs">
        <span className="text-slate-400 font-semibold py-1">Active Markers:</span>
        {markers.map(m => (
          <button
            key={m.id}
            onClick={() => setActiveMarker(m.id)}
            className={`px-3 py-1 rounded-lg transition-all ${
              activeMarker === m.id
                ? 'bg-emerald-600 text-white font-bold shadow-sm'
                : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
            }`}
          >
            📌 {m.id}
          </button>
        ))}
      </div>
    </div>
  );
}

