import React, { useState } from 'react';

export default function StatusCard() {
  const [devices, setDevices] = useState([
    { id: 1, title: 'Light', icon: '💡', type: 'primary', on: true, detail: 'Living Room' },
    { id: 2, title: 'Roller Shades', icon: '🪟', type: 'success', on: true, detail: 'Master Bedroom' },
    { id: 3, title: 'Wireless Audio', icon: '🔊', type: 'info', on: false, detail: 'Dining Area' },
    { id: 4, title: 'Coffee Maker', icon: '☕', type: 'warning', on: true, detail: 'Kitchen Counter' }
  ]);

  const toggleDevice = id => {
    setDevices(prev => prev.map(d => d.id === id ? { ...d, on: !d.on } : d));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {devices.map(device => (
        <div
          key={device.id}
          onClick={() => toggleDevice(device.id)}
          className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between h-36 ${
            device.on
              ? 'bg-white dark:bg-slate-800 border-accent/40 shadow-lg shadow-accent/5'
              : 'bg-slate-50/80 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700/60 opacity-70'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl ${
              device.on ? 'bg-accent-light text-accent' : 'bg-slate-200 dark:bg-slate-700 text-slate-400'
            }`}>
              {device.icon}
            </div>
            <div className={`w-3 h-3 rounded-full transition-all ${
              device.on ? 'bg-emerald-500 shadow-sm shadow-emerald-500 animate-pulse' : 'bg-slate-300 dark:bg-slate-600'
            }`} />
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm">{device.title}</h4>
            <span className="text-[10px] text-slate-400 block">{device.detail}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
