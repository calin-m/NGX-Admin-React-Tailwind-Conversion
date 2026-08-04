import React, { useState } from 'react';

export default function RoomsCard() {
  const [activeRoom, setActiveRoom] = useState('Living Room');

  const rooms = [
    { name: 'Living Room', temp: '24°C', lights: '4 On', icon: '🛋️' },
    { name: 'Master Bedroom', temp: '22°C', lights: '2 On', icon: '🛏️' },
    { name: 'Kitchen Counter', temp: '25°C', lights: '6 On', icon: '🍳' },
    { name: 'Home Office', temp: '21°C', lights: '3 On', icon: '💻' }
  ];

  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 space-y-6">
      <div className="border-b border-slate-100 dark:border-slate-700/60 pb-3">
        <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Smart Room Selector</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">Ambient Control by Zone</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {rooms.map(room => (
          <button
            key={room.name}
            onClick={() => setActiveRoom(room.name)}
            className={`p-3.5 rounded-xl border text-left transition-all ${
              activeRoom === room.name
                ? 'border-indigo-600 bg-indigo-600 text-white shadow-md'
                : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700/40 text-slate-800 dark:text-slate-200'
            }`}
          >
            <span className="text-xl block mb-1">{room.icon}</span>
            <span className="text-xs font-bold block truncate">{room.name}</span>
            <span className="text-[10px] opacity-80 block">{room.temp} • {room.lights}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
