import React, { useState } from 'react';

export default function CountryOrdersChart({ countries = ['USA', 'Germany', 'UK', 'France', 'Japan'], onSelectCountry }) {
  const [activeCountry, setActiveCountry] = useState('USA');
  const [hoverCountry, setHoverCountry] = useState(null);

  const handleCountryClick = c => {
    setActiveCountry(c);
    if (onSelectCountry) onSelectCountry(c);
  };

  const chartData = [
    { country: 'USA', val: 78, color: 'bg-accent' },
    { country: 'Germany', val: 62, color: 'bg-emerald-500' },
    { country: 'UK', val: 54, color: 'bg-amber-500' },
    { country: 'France', val: 41, color: 'bg-rose-500' },
    { country: 'Japan', val: 33, color: 'bg-purple-500' }
  ];

  return (
    <div className="p-5 bg-white dark:bg-slate-800 rounded-xl shadow-xs border border-slate-200 dark:border-slate-700 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-700 pb-2">
        <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">Country Orders Breakdown</h4>
        <span className="text-xs font-semibold text-accent bg-accent-light px-2.5 py-0.5 rounded-full">
          Active: {activeCountry}
        </span>
      </div>

      <div className="space-y-3">
        {chartData.map(item => (
          <div
            key={item.country}
            onClick={() => handleCountryClick(item.country)}
            onMouseEnter={() => setHoverCountry(item.country)}
            onMouseLeave={() => setHoverCountry(null)}
            className={`p-2.5 rounded-xl cursor-pointer transition-all border relative ${
              activeCountry === item.country
                ? 'border-accent/40 bg-accent-light'
                : 'border-transparent hover:bg-slate-50 dark:hover:bg-slate-700/50'
            }`}
          >
            {/* 0ms Instant Tooltip */}
            {hoverCountry === item.country && (
              <div className="absolute right-2 -top-7 z-30 pointer-events-none transition-none">
                <div className="backdrop-blur-md bg-slate-900/95 text-white text-[10px] px-2 py-1 rounded-lg shadow-xl font-bold border border-slate-700 whitespace-nowrap">
                  {item.country}: {item.val}% Volume
                </div>
              </div>
            )}

            <div className="flex justify-between text-xs font-semibold mb-1.5">
              <span className="text-slate-800 dark:text-slate-200">{item.country}</span>
              <span className="text-slate-500 font-extrabold">{item.val}%</span>
            </div>
            <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
              <div style={{ width: `${item.val}%` }} className={`h-full rounded-full transition-all duration-300 ${item.color}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

