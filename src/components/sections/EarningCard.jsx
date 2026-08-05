import React, { useState } from 'react';
import useEarning from '../../hooks/useEarning.js';

export default function EarningCard() {
  const { data, loading, period, setPeriod } = useEarning('week');
  const [selectedSegment, setSelectedSegment] = useState('Bitcoin');

  const totalEarnings = data?.totalEarnings || '$64.2k';
  const dailyRate = data?.dailyRate || '$2,450 / day';
  const growth = data?.growth || '+18.2%';
  const portfolio = data?.portfolio || [
    { name: 'Bitcoin', value: 50, color: 'bg-amber-500', hex: '#f59e0b', strokeDash: '50, 100', strokeOffset: '0' },
    { name: 'Tether', value: 25, color: 'bg-indigo-500', hex: '#6366f1', strokeDash: '25, 100', strokeOffset: '-50' },
    { name: 'Ethereum', value: 25, color: 'bg-emerald-500', hex: '#10b981', strokeDash: '25, 100', strokeOffset: '-75' },
  ];

  return (
    <div className="w-full min-h-[320px] rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 flex flex-col justify-between overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-lg">
            💰
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Earning Live Stats</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">Revenue & Portfolio Shares</p>
          </div>
        </div>
        <div className="flex bg-slate-100 dark:bg-slate-700/60 p-1 rounded-lg text-xs font-medium">
          {['week', 'month', 'year'].map(p => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`px-2.5 py-1 rounded-md transition-all capitalize ${
                period === p
                  ? 'bg-white dark:bg-slate-800 text-amber-600 dark:text-amber-400 shadow-sm font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* SVG Pie / Donut Chart */}
      <div className="flex flex-col sm:flex-row items-center justify-around py-4 gap-4">

        <div className="relative w-36 h-36 flex items-center justify-center">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
            <path
              className="text-slate-100 dark:text-slate-700 stroke-current"
              strokeWidth="4"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            {portfolio.map((item) => (
              <path
                key={item.name}
                stroke={item.hex}
                strokeWidth={selectedSegment === item.name ? '5.5' : '4'}
                strokeDasharray={item.strokeDash}
                strokeDashoffset={item.strokeOffset}
                strokeLinecap="round"
                fill="none"
                className="transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedSegment(item.name)}
              />
            ))}
          </svg>
          <div className="absolute flex flex-col items-center justify-center text-center">
            <span className="text-xl font-extrabold text-slate-900 dark:text-slate-100">{totalEarnings}</span>
            <span className="text-[10px] text-slate-400 font-medium uppercase">Total Earnings</span>
          </div>
        </div>

        <div className="space-y-2 text-xs">
          {portfolio.map((item) => (
            <div
              key={item.name}
              onClick={() => setSelectedSegment(item.name)}
              className={`flex items-center space-x-2 cursor-pointer p-1 rounded-md transition-all ${
                selectedSegment === item.name ? 'bg-slate-100 dark:bg-slate-700/50 font-bold' : ''
              }`}
            >
              <span className={`w-3 h-3 rounded-full ${item.color}`} />
              <span className="text-slate-600 dark:text-slate-300">
                {item.name} ({item.value}%)
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center text-xs pt-3 border-t border-slate-100 dark:border-slate-700/60 text-slate-500 dark:text-slate-400">
        <span>Daily Earnings Rate: <strong className="text-emerald-500">{dailyRate}</strong></span>
        <span className="text-emerald-600 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full">{growth}</span>
      </div>
    </div>
  );
}

