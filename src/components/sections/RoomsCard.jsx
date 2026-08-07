import React, { useState } from 'react';

export default function RoomsCard() {
  const [activeRoom, setActiveRoom] = useState('Living Room');
  const [rooms, setRooms] = useState([
    { id: 1, name: 'Living Room', temp: 24, lightsOn: true, acOn: true, icon: '🛋️' },
    { id: 2, name: 'Master Bedroom', temp: 22, lightsOn: false, acOn: true, icon: '🛏️' },
    { id: 3, name: 'Kitchen Counter', temp: 25, lightsOn: true, acOn: false, icon: '🍳' },
    { id: 4, name: 'Home Office', temp: 21, lightsOn: true, acOn: true, icon: '💻' }
  ]);

  const toggleLights = (id) => {
    setRooms(prev => prev.map(r => r.id === id ? { ...r, lightsOn: !r.lightsOn } : r));
  };

  const toggleAc = (id) => {
    setRooms(prev => prev.map(r => r.id === id ? { ...r, acOn: !r.acOn } : r));
  };

  const selectedRoom = rooms.find(r => r.name === activeRoom) || rooms[0];

  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 space-y-6">
      <div className="border-b border-slate-100 dark:border-slate-700/60 pb-3 flex flex-wrap items-center justify-between gap-2">
        <div>
          <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Smart Room Selector</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">Ambient Control by Zone</p>
        </div>
        <span className="text-xs font-semibold text-accent bg-accent-light px-2.5 py-1 rounded-full transition-colors">
          {rooms.filter(r => r.lightsOn).length} / {rooms.length} Active
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {rooms.map(room => (
          <button
            key={room.name}
            onClick={() => setActiveRoom(room.name)}
            className={`p-3.5 rounded-xl border text-left transition-all ${
              activeRoom === room.name
                ? 'border-accent bg-accent text-white shadow-md'
                : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700/40 text-slate-800 dark:text-slate-200'
            }`}
          >

            <span className="text-xl block mb-1">{room.icon}</span>
            <span className="text-xs font-bold block truncate">{room.name}</span>
            <span className="text-[10px] opacity-80 block truncate">
              {room.temp}°C • {room.lightsOn ? '💡 Lights On' : '🌑 Off'}
            </span>
          </button>
        ))}
      </div>


      {/* Interactive Controls for Selected Room */}
      <div className="pt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs">
        <span className="font-semibold text-slate-700 dark:text-slate-300">{selectedRoom.name} Controls:</span>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => toggleLights(selectedRoom.id)}
            className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
              selectedRoom.lightsOn
                ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30'
                : 'bg-slate-100 dark:bg-slate-700 text-slate-500'
            }`}
          >
            {selectedRoom.lightsOn ? '💡 Lights: ON' : '🌑 Lights: OFF'}
          </button>
          <button
            onClick={() => toggleAc(selectedRoom.id)}
            className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
              selectedRoom.acOn
                ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
                : 'bg-slate-100 dark:bg-slate-700 text-slate-500'
            }`}
          >
            {selectedRoom.acOn ? '❄️ AC: ON' : '🔌 AC: OFF'}
          </button>
        </div>
      </div>
    </div>
  );
}

