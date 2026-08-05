import React, { useState } from 'react';

/**
 * ProfitChart Component
 * Modernized React 18 + Tailwind CSS v4 Component
 * Source Reference: old-src/ngx-admin-master <ngx-profit-chart>
 */
export default function ProfitChart(props) {
  const [quarter, setQuarter] = useState('Q1');

  const profitData = {
    Q1: [
      { month: 'Jan', profit: '$14,200' },
      { month: 'Feb', profit: '$18,500' },
      { month: 'Mar', profit: '$22,100' }
    ],
    Q2: [
      { month: 'Apr', profit: '$24,800' },
      { month: 'May', profit: '$27,300' },
      { month: 'Jun', profit: '$31,000' }
    ],
    Q3: [
      { month: 'Jul', profit: '$29,400' },
      { month: 'Aug', profit: '$33,800' },
      { month: 'Sep', profit: '$38,200' }
    ]
  };

  return (
    <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-xs border border-slate-200 dark:border-slate-700 space-y-4">
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-3">
        <div>
          <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
            Corporate Profit Metrics
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">Quarterly Net Revenue Breakdown</p>
        </div>

        <div className="flex items-center space-x-1 bg-slate-100 dark:bg-slate-700 p-1 rounded-xl">
          {['Q1', 'Q2', 'Q3'].map(q => (
            <button
              key={q}
              onClick={() => setQuarter(q)}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                quarter === q
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
              }`}
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 pt-2">
        {profitData[quarter].map((item, idx) => (
          <div key={idx} className="p-3.5 rounded-xl bg-emerald-50/50 dark:bg-emerald-900/20 border border-emerald-200/60 dark:border-emerald-800/60 text-center space-y-1">
            <span className="text-[11px] font-bold text-slate-500 block">{item.month}</span>
            <span className="text-lg font-extrabold text-emerald-600 dark:text-emerald-400 block">{item.profit}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

