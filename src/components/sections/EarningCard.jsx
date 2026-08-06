import React, { useState } from 'react';
import PeriodSelector from '../ui/PeriodSelector.jsx';
import CardHeader from '../ui/CardHeader.jsx';
import useEarning from '../../hooks/useEarning.js';

export default function EarningCard() {
  const { data, loading, period, setPeriod } = useEarning('week');
  const [selectedSegment, setSelectedSegment] = useState('Bitcoin');

  const totalEarnings = data?.totalEarnings || '$64.2k';
  const dailyRate = data?.dailyRate || '$2,450 / day';
  const growth = data?.growth || '+18.2%';

  const portfolioRaw = data?.portfolio || [
    { name: 'Bitcoin', value: 50, color: 'bg-amber-500', hex: '#f59e0b' },
    { name: 'Tether', value: 25, color: 'bg-teal-600', hex: '#0d9488' },
    { name: 'Ethereum', value: 25, color: 'bg-emerald-500', hex: '#10b981' },
  ];

  const CIRCUMFERENCE = 2 * Math.PI * 44; // 276.46015

  let cumulativeOffset = 0;
  const portfolio = portfolioRaw.map(item => {
    const dashLength = (item.value / 100) * CIRCUMFERENCE;
    const strokeOffset = -(cumulativeOffset / 100) * CIRCUMFERENCE;
    cumulativeOffset += item.value;
    return {
      ...item,
      strokeDash: `${dashLength} ${CIRCUMFERENCE - dashLength}`,
      strokeOffset: `${strokeOffset}`
    };
  });

  return (
    <div className="w-full min-h-[320px] rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 flex flex-col justify-between overflow-hidden">
      <CardHeader
        icon="💰"
        iconBgColor="bg-amber-500/10"
        iconTextColor="text-amber-600 dark:text-amber-400"
        title="Earning Live Stats"
        subtitle="Revenue & Portfolio Shares"
        action={<PeriodSelector selected={period} onChange={setPeriod} />}
      />

      {/* Thick Lush SVG Donut Ring Chart */}
      <div className="flex flex-col sm:flex-row items-center justify-around py-4 gap-6">

        <div className="relative w-44 h-44 flex items-center justify-center shrink-0">
          <svg className="w-full h-full -rotate-90 drop-shadow-xs" viewBox="0 0 120 120">
            {/* Background Donut Track */}
            <circle
              cx="60"
              cy="60"
              r="44"
              strokeWidth="14"
              fill="none"
              className="stroke-slate-100 dark:stroke-slate-700/50"
            />
            {/* Colored Percentage Ring Segments */}
            {portfolio.map((item) => {
              const isSelected = selectedSegment === item.name;
              return (
                <circle
                  key={item.name}
                  cx="60"
                  cy="60"
                  r="44"
                  stroke={item.hex}
                  strokeWidth={isSelected ? '18' : '14'}
                  strokeDasharray={item.strokeDash}
                  strokeDashoffset={item.strokeOffset}
                  fill="none"
                  className="transition-all duration-300 cursor-pointer hover:opacity-90"
                  onClick={() => setSelectedSegment(item.name)}
                />
              );
            })}
          </svg>

          {/* Center Total Earnings Label */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-2 pointer-events-none">
            <span className="text-2xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">{totalEarnings}</span>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">TOTAL EARNINGS</span>
          </div>
        </div>

        {/* Legend Options */}
        <div className="space-y-2 text-xs font-semibold w-full sm:w-auto">
          {portfolio.map((item) => {
            const isSelected = selectedSegment === item.name;
            return (
              <div
                key={item.name}
                onClick={() => setSelectedSegment(item.name)}
                className={`flex items-center space-x-2.5 cursor-pointer px-3.5 py-2 rounded-xl border transition-all ${
                  isSelected
                    ? 'bg-slate-100 dark:bg-slate-700/60 text-slate-900 dark:text-slate-100 border-slate-200/80 dark:border-slate-700 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border-transparent hover:bg-slate-50 dark:hover:bg-slate-700/30'
                }`}
              >
                <span className={`w-3 h-3 rounded-full shrink-0 ${item.color}`} />
                <span className="whitespace-nowrap">
                  {item.name} ({item.value}%)
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-between items-center text-xs pt-3 border-t border-slate-100 dark:border-slate-700/60 text-slate-500 dark:text-slate-400">
        <span>Daily Earnings Rate: <strong className="text-emerald-500">{dailyRate}</strong></span>
        <span className="text-emerald-600 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full">{growth}</span>
      </div>
    </div>
  );
}

