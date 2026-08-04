import React, { useState } from 'react';
import useOrdersChart from '../../hooks/useOrdersChart.js';

export default function ChartsPanel() {
  const [activeTab, setActiveTab] = useState('orders');
  const { data: ordersData, period, setPeriod } = useOrdersChart('week');

  const labels = ordersData.labels && ordersData.labels.length > 0 ? ordersData.labels : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const values = activeTab === 'orders'
    ? (ordersData.orders && ordersData.orders.length > 0 ? ordersData.orders : [184, 267, 326, 366, 389, 399, 392])
    : (ordersData.profit && ordersData.profit.length > 0 ? ordersData.profit : [158, 178, 193, 205, 212, 213, 204]);

  const activeData = labels.map((lbl, idx) => ({
    label: lbl,
    val: values[idx] || 100
  }));

  const maxVal = Math.max(...activeData.map(d => d.val), 1);

  return (
    <div className="w-full min-h-[320px] rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 flex flex-col justify-between">
      {/* Header Tabs */}
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-4">
        <div className="flex space-x-4">
          <button
            onClick={() => setActiveTab('orders')}
            className={`text-base font-bold transition-colors border-b-2 pb-1 ${
              activeTab === 'orders'
                ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400'
                : 'border-transparent text-slate-400 hover:text-slate-600'
            }`}
          >
            Orders Chart
          </button>
          <button
            onClick={() => setActiveTab('profit')}
            className={`text-base font-bold transition-colors border-b-2 pb-1 ${
              activeTab === 'profit'
                ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400'
                : 'border-transparent text-slate-400 hover:text-slate-600'
            }`}
          >
            Profit Chart
          </button>
        </div>

        <div className="flex bg-slate-100 dark:bg-slate-700/60 p-1 rounded-lg text-xs font-medium">
          {['week', 'month', 'year'].map(p => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`px-3 py-1 rounded-md transition-all capitalize ${
                period === p
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow-sm font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* SVG Line / Bar Combination Chart */}
      <div className="h-44 w-full flex items-end justify-between gap-3 pt-6">
        {activeData.map((item, idx) => (
          <div key={idx} className="flex-1 flex flex-col items-center gap-2 group h-full justify-end">
            <div className="w-full flex justify-center items-end h-32 relative">
              <div
                style={{ height: `${(item.val / maxVal) * 100}%` }}
                className={`w-full max-w-[28px] rounded-t-lg transition-all duration-500 ${
                  activeTab === 'orders'
                    ? 'bg-gradient-to-t from-indigo-500/80 to-indigo-400 group-hover:from-indigo-600 group-hover:to-indigo-300'
                    : 'bg-gradient-to-t from-emerald-500/80 to-emerald-400 group-hover:from-emerald-600 group-hover:to-emerald-300'
                }`}
              />
            </div>
            <span className="text-[10px] sm:text-xs text-slate-400 dark:text-slate-500 font-medium truncate max-w-[40px] text-center">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Footer stats */}
      <div className="flex justify-between items-center text-xs pt-3 border-t border-slate-100 dark:border-slate-700/60 text-slate-500">
        <span>Peak {activeTab === 'orders' ? 'Orders' : 'Profit'}: <strong className="text-slate-900 dark:text-slate-100">{maxVal.toLocaleString()} {activeTab === 'orders' ? 'Units' : '$'}</strong></span>
        <span className="text-indigo-600 font-bold bg-indigo-500/10 px-2 py-0.5 rounded-full capitalize">{period} View Active</span>
      </div>
    </div>
  );
}
