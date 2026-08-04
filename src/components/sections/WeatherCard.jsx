import React from 'react';

export default function WeatherCard() {
  const forecast = [
    { day: 'Mon', temp: '26°', icon: '☀️' },
    { day: 'Tue', temp: '24°', icon: '⛅' },
    { day: 'Wed', temp: '22°', icon: '🌧️' },
    { day: 'Thu', temp: '25°', icon: '🌤️' }
  ];

  return (
    <div className="w-full rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600 text-white shadow-lg p-6 flex flex-col justify-between space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-bold text-lg">San Francisco</h3>
          <p className="text-xs text-sky-100">Sunny & Clear Sky</p>
        </div>
        <span className="text-4xl">☀️</span>
      </div>

      <div className="flex items-baseline space-x-2">
        <span className="text-5xl font-extrabold">26°C</span>
        <span className="text-xs text-sky-200">Feels like 27°C</span>
      </div>

      <div className="grid grid-cols-4 gap-2 pt-4 border-t border-white/20 text-center">
        {forecast.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <span className="text-[10px] text-sky-200 block">{item.day}</span>
            <span className="text-lg block">{item.icon}</span>
            <span className="text-xs font-bold block">{item.temp}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
