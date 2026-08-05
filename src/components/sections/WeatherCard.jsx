import React, { useState } from 'react';

export default function WeatherCard() {
  const [city, setCity] = useState('San Francisco');
  const [unit, setUnit] = useState('C');

  const weatherData = {
    'San Francisco': { tempC: 26, condition: 'Sunny & Clear', icon: '☀️', forecast: [{ day: 'Mon', temp: 26, icon: '☀️' }, { day: 'Tue', temp: 24, icon: '⛅' }, { day: 'Wed', temp: 22, icon: '🌧️' }, { day: 'Thu', temp: 25, icon: '🌤️' }] },
    'New York': { tempC: 18, condition: 'Light Rain', icon: '🌧️', forecast: [{ day: 'Mon', temp: 18, icon: '🌧️' }, { day: 'Tue', temp: 20, icon: '⛅' }, { day: 'Wed', temp: 23, icon: '☀️' }, { day: 'Thu', temp: 21, icon: '🌤️' }] },
    'London': { tempC: 15, condition: 'Cloudy & Fog', icon: '🌫️', forecast: [{ day: 'Mon', temp: 15, icon: '🌫️' }, { day: 'Tue', temp: 16, icon: '🌧️' }, { day: 'Wed', temp: 17, icon: '⛅' }, { day: 'Thu', temp: 14, icon: '🌧️' }] }
  };

  const current = weatherData[city];
  const formatTemp = tempC => unit === 'C' ? `${tempC}°C` : `${Math.round(tempC * 1.8 + 32)}°F`;

  return (
    <div className="w-full rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600 text-white shadow-lg p-6 flex flex-col justify-between space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center space-x-2">
            <select
              value={city}
              onChange={e => setCity(e.target.value)}
              className="bg-white/20 hover:bg-white/30 text-white font-bold text-base rounded-xl px-2.5 py-1 focus:outline-none cursor-pointer"
            >
              <option value="San Francisco" className="text-slate-900">San Francisco</option>
              <option value="New York" className="text-slate-900">New York</option>
              <option value="London" className="text-slate-900">London</option>
            </select>
          </div>
          <p className="text-xs text-sky-100 mt-1">{current.condition}</p>
        </div>

        {/* Unit Toggle */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setUnit(prev => prev === 'C' ? 'F' : 'C')}
            className="px-2.5 py-1 rounded-xl bg-white/20 hover:bg-white/30 text-xs font-extrabold uppercase transition-all"
          >
            °{unit}
          </button>
          <span className="text-4xl">{current.icon}</span>
        </div>
      </div>

      <div className="flex items-baseline space-x-2">
        <span className="text-5xl font-extrabold">{formatTemp(current.tempC)}</span>
        <span className="text-xs text-sky-200">Feels like {formatTemp(current.tempC + 1)}</span>
      </div>

      <div className="grid grid-cols-4 gap-2 pt-4 border-t border-white/20 text-center">
        {current.forecast.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <span className="text-[10px] text-sky-200 block">{item.day}</span>
            <span className="text-lg block">{item.icon}</span>
            <span className="text-xs font-bold block">{formatTemp(item.temp)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

