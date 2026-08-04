import React from 'react';
import useCountryOrder from '../../hooks/useCountryOrder.js';

export default function CountryOrders() {
  const { data } = useCountryOrder();

  const countries = [
    { name: 'United States', flag: '🇺🇸', orders: '42,500', share: '38%' },
    { name: 'Germany', flag: '🇩🇪', orders: '28,100', share: '25%' },
    { name: 'United Kingdom', flag: '🇬🇧', orders: '19,400', share: '17%' },
    { name: 'France', flag: '🇫🇷', orders: '14,200', share: '12%' },
    { name: 'Japan', flag: '🇯🇵', orders: '8,900', share: '8%' }
  ];

  return (
    <div className="w-full min-h-[320px] rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-lg">
            🌍
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Global Country Orders</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">Regional Distribution</p>
          </div>
        </div>
        <span className="text-xs font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 px-2.5 py-1 rounded-lg">
          5 Active Regions
        </span>
      </div>

      {/* Country List Feed */}
      <div className="space-y-3 py-4 flex-1">
        {countries.map((c, idx) => (
          <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-700/40 hover:bg-slate-100 dark:hover:bg-slate-700/70 transition-colors">
            <div className="flex items-center space-x-3">
              <span className="text-lg">{c.flag}</span>
              <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">{c.name}</span>
            </div>
            <div className="flex items-center space-x-3 text-xs">
              <span className="font-bold text-slate-900 dark:text-slate-100">{c.orders}</span>
              <span className="text-slate-400 font-medium w-8 text-right">{c.share}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="text-xs text-center text-slate-400 pt-3 border-t border-slate-100 dark:border-slate-700/60">
        Total International Orders: <span className="font-bold text-slate-800 dark:text-slate-200">113,100</span>
      </div>
    </div>
  );
}
