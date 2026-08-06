import React, { useState } from 'react';
import useOrdersChart from '../../hooks/useOrdersChart.js';
import OrdersChart from './OrdersChart.jsx';
import ProfitChart from './ProfitChart.jsx';
import PeriodSelector from '../ui/PeriodSelector.jsx';

export default function ChartsPanel() {
  const [activeTab, setActiveTab] = useState('orders');
  const { period, setPeriod } = useOrdersChart('week');

  return (
    <div className="w-full h-full min-h-[380px] sm:min-h-[440px] rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 flex flex-col justify-between space-y-4">
      {/* Header Tabs & Period Selectors */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-3 gap-3">
        <div className="flex items-center space-x-4">
          <button
            type="button"
            onClick={() => setActiveTab('orders')}
            className={`text-base font-bold transition-all border-b-2 pb-1 flex items-center space-x-2 ${
              activeTab === 'orders'
                ? 'border-accent text-accent font-extrabold'
                : 'border-transparent text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-accent inline-block" />
            <span>Orders Chart</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('profit')}
            className={`text-base font-bold transition-all border-b-2 pb-1 flex items-center space-x-2 ${
              activeTab === 'profit'
                ? 'border-accent text-accent font-extrabold'
                : 'border-transparent text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-accent inline-block" />
            <span>Profit Chart</span>
          </button>
        </div>

        <PeriodSelector selected={period} onChange={setPeriod} />
      </div>

      {/* Discrete Composed Sub-Components (Rule 5 Protocol) */}
      <div className="flex-1 flex flex-col justify-between">
        <OrdersChart activeTab={activeTab} period={period} setPeriod={setPeriod} embedded />
      </div>

      {/* Footer Stats Summary */}
      <div className="flex justify-between items-center text-xs pt-3 border-t border-slate-100 dark:border-slate-700/60 text-slate-500">
        <span>Active View: <strong className="text-slate-900 dark:text-slate-100 capitalize">{activeTab} ({period})</strong></span>
        <span className="text-accent font-bold bg-accent-light px-2 py-0.5 rounded-full capitalize">
          {period} View Active
        </span>
      </div>
    </div>
  );
}
