import React, { useState } from 'react';

export default function CountryOrdersChart({ countries = ['USA', 'Germany', 'UK', 'France', 'Japan'], onSelectCountry }) {
  const [activeCountry, setActiveCountry] = useState('USA');

  const handleCountryClick = c => {
    setActiveCountry(c);
    if (onSelectCountry) onSelectCountry(c);
  };

  const chartData = [
    { country: 'USA', val: 78, color: 'bg-indigo-500' },
    { country: 'Germany', val: 62, color: 'bg-emerald-500' },
    { country: 'UK', val: 54, color: 'bg-amber-500' },
    { country: 'France', val: 41, color: 'bg-rose-500' },
    { country: 'Japan', val: 33, color: 'bg-purple-500' }
  ];

  return (
    <div className="p-5 bg-white dark:bg-slate-800 rounded-xl shadow-xs border border-slate-200 dark:border-slate-700 space-y-4">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-2">
        <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">Country Orders Breakdown</h4>
        <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-full">
          Active: {activeCountry}
        </span>
      </div>

      <div className="space-y-3">
        {chartData.map(item => (
          <div
            key={item.country}
            onClick={() => handleCountryClick(item.country)}
            className={`p-2 rounded-lg cursor-pointer transition-all border ${
              activeCountry === item.country
                ? 'border-indigo-500/50 bg-indigo-500/5'
                : 'border-transparent hover:bg-slate-50 dark:hover:bg-slate-700/50'
            }`}
          >
            <div className="flex justify-between text-xs font-semibold mb-1">
              <span className="text-slate-800 dark:text-slate-200">{item.country}</span>
              <span className="text-slate-500">{item.val}%</span>
            </div>
            <div className="w-full h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
              <div style={{ width: `${item.val}%` }} className={`h-full rounded-full ${item.color}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

