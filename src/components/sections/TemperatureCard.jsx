import React, { useState } from 'react';
import useTemperatureHumidity from '../../hooks/useTemperatureHumidity.js';

export default function TemperatureCard() {
  const [temp, setTemp] = useState(24);
  const [mode, setMode] = useState('heat');
  const [fanSpeed, setFanSpeed] = useState('Med');
  const { data } = useTemperatureHumidity();

  const humidity = data?.humidity || '52%';
  const airQuality = data?.airQuality || 'Good (98 AQI)';
  const outdoorTemp = data?.outdoorTemp || '18°C';

  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 flex flex-col justify-between space-y-6">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700/60 pb-3">
        <div>
          <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Temperature Thermostat</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">Outdoor: {outdoorTemp} • HVAC Climate</p>
        </div>

        <div className="flex bg-slate-100 dark:bg-slate-700/60 p-1 rounded-xl text-xs font-medium">
          <button
            onClick={() => setMode('heat')}
            className={`px-2.5 py-1.5 rounded-lg transition-all ${
              mode === 'heat' ? 'bg-amber-500 text-white font-bold shadow-sm' : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            🔥 Heat
          </button>
          <button
            onClick={() => setMode('cool')}
            className={`px-2.5 py-1.5 rounded-lg transition-all ${
              mode === 'cool' ? 'bg-indigo-600 text-white font-bold shadow-sm' : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            ❄️ Cool
          </button>
          <button
            onClick={() => setMode('fan')}
            className={`px-2.5 py-1.5 rounded-lg transition-all ${
              mode === 'fan' ? 'bg-emerald-600 text-white font-bold shadow-sm' : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            🌀 Fan
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center py-2 space-y-4">
        {/* Thermostat Dial Circle */}
        <div className={`relative w-44 h-44 rounded-full border-8 ${
          mode === 'heat' ? 'border-amber-500/30' : mode === 'cool' ? 'border-indigo-500/30' : 'border-emerald-500/30'
        } flex items-center justify-center shadow-inner transition-colors duration-300`}>
          <div className="text-center">
            <span className="text-4xl font-extrabold text-slate-900 dark:text-slate-100">{temp}°C</span>
            <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mt-1">
              Target Temp
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => setTemp(prev => Math.max(prev - 1, 16))}
            className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 font-extrabold text-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
          >
            -
          </button>
          <span className="text-xs text-slate-500 font-medium">Adjust Range (16° - 30°)</span>
          <button
            onClick={() => setTemp(prev => Math.min(prev + 1, 30))}
            className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 font-extrabold text-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
          >
            +
          </button>
        </div>

        {/* Fan Speed Controls */}
        <div className="flex items-center space-x-2 text-xs pt-1">
          <span className="text-slate-400 font-medium mr-1">Fan Speed:</span>
          {['Low', 'Med', 'High', 'Auto'].map(speed => (
            <button
              key={speed}
              onClick={() => setFanSpeed(speed)}
              className={`px-2 py-0.5 rounded-md text-[11px] font-semibold transition-all ${
                fanSpeed === speed
                  ? 'bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-900 shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              {speed}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 pt-3 border-t border-slate-100 dark:border-slate-700/60 text-center">
        <div>
          <span className="text-[10px] text-slate-400 block">Humidity</span>
          <span className="text-sm font-bold text-slate-800 dark:text-slate-200">{humidity}</span>
        </div>
        <div>
          <span className="text-[10px] text-slate-400 block">Air Quality</span>
          <span className="text-sm font-bold text-emerald-500">{airQuality}</span>
        </div>
      </div>
    </div>
  );
}

