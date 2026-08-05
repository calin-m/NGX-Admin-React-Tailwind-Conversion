import React, { useState } from 'react';

export default function GoogleMaps() {
  const [mapType, setMapType] = useState('roadmap'); // 'roadmap' | 'satellite' | 'terrain' | 'hybrid'
  const [zoom, setZoom] = useState(12);
  const [selectedLocation, setSelectedLocation] = useState({ name: 'San Francisco, CA', lat: 37.7749, lng: -122.4194 });

  const locations = [
    { name: 'San Francisco, CA', lat: 37.7749, lng: -122.4194 },
    { name: 'New York, NY', lat: 40.7128, lng: -74.006 },
    { name: 'London, UK', lat: 51.5074, lng: -0.1278 },
    { name: 'Tokyo, Japan', lat: 35.6762, lng: 139.6503 }
  ];

  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-100 dark:border-slate-700/60 pb-3 gap-3">
        <div>
          <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Google Maps Direct Integration</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">Map View Modes & GIS Location Markers</p>
        </div>

        {/* Map Type Controls */}
        <div className="flex bg-slate-100 dark:bg-slate-700/60 p-1 rounded-xl text-xs font-medium">
          {['roadmap', 'satellite', 'terrain', 'hybrid'].map(type => (
            <button
              key={type}
              onClick={() => setMapType(type)}
              className={`px-2.5 py-1 rounded-lg transition-all capitalize ${
                mapType === type
                  ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 font-bold shadow-sm'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
              }`}

            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Map Display Container */}
      <div className="relative h-64 rounded-xl bg-slate-900 text-slate-300 flex items-center justify-center font-mono text-xs overflow-hidden shadow-inner border border-slate-700">
        {/* Grid Background Effect based on map type */}
        <div className={`absolute inset-0 opacity-20 ${
          mapType === 'satellite' ? 'bg-indigo-900' : mapType === 'terrain' ? 'bg-emerald-900' : 'bg-slate-900'
        }`} />

        <div className="z-10 text-center space-y-2 p-4">
          <div className="text-2xl animate-bounce">📍</div>
          <div className="font-bold text-white text-sm">{selectedLocation.name}</div>
          <div className="text-[11px] text-slate-400">
            Latitude: {selectedLocation.lat} | Longitude: {selectedLocation.lng}
          </div>
          <div className="inline-block bg-slate-800/90 text-indigo-400 text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase">
            Mode: {mapType} • Zoom: {zoom}x
          </div>
        </div>

        {/* Zoom Controls */}
        <div className="absolute right-4 bottom-4 flex flex-col space-y-1 z-20">
          <button
            onClick={() => setZoom(z => Math.min(z + 1, 20))}
            className="w-8 h-8 rounded-lg bg-slate-800/90 text-white font-extrabold text-sm hover:bg-slate-700 flex items-center justify-center shadow-md"
          >
            +
          </button>
          <button
            onClick={() => setZoom(z => Math.max(z - 1, 1))}
            className="w-8 h-8 rounded-lg bg-slate-800/90 text-white font-extrabold text-sm hover:bg-slate-700 flex items-center justify-center shadow-md"
          >
            -
          </button>
        </div>
      </div>

      {/* Location Presets */}
      <div className="flex flex-wrap gap-2 text-xs">
        <span className="text-slate-400 font-semibold py-1">Preset Pins:</span>
        {locations.map(loc => (
          <button
            key={loc.name}
            onClick={() => setSelectedLocation(loc)}
            className={`px-3 py-1 rounded-lg transition-all ${
              selectedLocation.name === loc.name
                ? 'bg-indigo-600 text-white font-bold shadow-sm'
                : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
            }`}
          >
            📍 {loc.name}
          </button>
        ))}
      </div>
    </div>
  );
}

