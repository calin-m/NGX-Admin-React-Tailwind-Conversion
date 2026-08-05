import React, { useState } from 'react';

export default function EarningPieChart({ onSelectPie }) {
  const [selectedSlice, setSelectedSlice] = useState('Bitcoin');

  const slices = [
    { name: 'Bitcoin', pct: '45%', color: 'text-amber-500 bg-amber-500/10' },
    { name: 'Tether', pct: '30%', color: 'text-emerald-500 bg-emerald-500/10' },
    { name: 'Ethereum', pct: '25%', color: 'text-accent bg-accent-light' }
  ];

  const handleSelect = name => {
    setSelectedSlice(name);
    if (onSelectPie) onSelectPie(name);
  };

  return (
    <div className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-xs border border-slate-200 dark:border-slate-700 space-y-3">
      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Crypto Earning Breakdown</h4>
      <div className="flex items-center justify-around gap-2">
        {slices.map(s => (
          <button
            key={s.name}
            onClick={() => handleSelect(s.name)}
            className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex flex-col items-center ${s.color} ${
              selectedSlice === s.name ? 'ring-2 ring-accent scale-105' : 'opacity-80 hover:opacity-100'
            }`}
          >
            <span>{s.name}</span>
            <span className="text-sm font-extrabold">{s.pct}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

