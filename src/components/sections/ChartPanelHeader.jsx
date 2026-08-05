import React, { useState } from 'react';

export default function ChartPanelHeader({ type = 'Orders', period = 'week', onTypeChange, onPeriodChange }) {
  const [selectedType, setSelectedType] = useState(type);
  const [selectedPeriod, setSelectedPeriod] = useState(period);

  const handleTypeSelect = t => {
    setSelectedType(t);
    if (onTypeChange) onTypeChange(t);
  };

  const handlePeriodSelect = p => {
    setSelectedPeriod(p);
    if (onPeriodChange) onPeriodChange(p);
  };

  return (
    <div className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-xs border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div className="flex items-center space-x-2">
        <button
          onClick={() => handleTypeSelect('Orders')}
          className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
            selectedType === 'Orders'
              ? 'bg-indigo-600 text-white shadow-xs'
              : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
          }`}
        >
          Orders
        </button>
        <button
          onClick={() => handleTypeSelect('Profit')}
          className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
            selectedType === 'Profit'
              ? 'bg-emerald-600 text-white shadow-xs'
              : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
          }`}
        >
          Profit
        </button>
      </div>

      <div className="flex items-center space-x-1 text-xs">
        {['week', 'month', 'year'].map(p => (
          <button
            key={p}
            onClick={() => handlePeriodSelect(p)}
            className={`px-2.5 py-1 rounded-md font-semibold capitalize transition-colors ${
              selectedPeriod === p
                ? 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20'
                : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            {p}
          </button>
        ))}
      </div>
    </div>
  );
}

