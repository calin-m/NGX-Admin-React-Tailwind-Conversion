import React, { useState } from 'react';

export default function Echarts() {
  const [chartType, setChartType] = useState('bar'); // 'bar' | 'line' | 'pie' | 'area'
  const [period, setPeriod] = useState('week');

  const barData = [
    { label: 'Mon', val: 65 },
    { label: 'Tue', val: 85 },
    { label: 'Wed', val: 45 },
    { label: 'Thu', val: 95 },
    { label: 'Fri', val: 75 },
    { label: 'Sat', val: 55 },
    { label: 'Sun', val: 90 }
  ];

  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-100 dark:border-slate-700/60 pb-3 gap-3">
        <div>
          <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">ECharts Advanced Visualization</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">Interactive Canvas Engine & Multi-Chart Views</p>
        </div>

        <div className="flex items-center space-x-2">
          {/* Chart Type Selector */}
          <div className="flex bg-slate-100 dark:bg-slate-700/60 p-1 rounded-xl text-xs font-medium">
            {['bar', 'line', 'pie', 'area'].map(type => (
              <button
                key={type}
                onClick={() => setChartType(type)}
                className={`px-2.5 py-1 rounded-lg transition-all capitalize ${
                  chartType === type
                    ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 font-bold shadow-sm'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Period Selector */}
          <div className="flex bg-slate-100 dark:bg-slate-700/60 p-1 rounded-xl text-xs font-medium">
            {['week', 'month', 'year'].map(p => (
              <button
                key={p}
                onClick={() => setPeriod(p)}
                className={`px-2 py-1 rounded-lg transition-all capitalize ${
                  period === p ? 'bg-indigo-600 text-white font-bold' : 'text-slate-500'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* SVG Canvas Viewports */}
      <div className="h-64 rounded-xl bg-slate-50 dark:bg-slate-700/40 border border-slate-200/60 dark:border-slate-600/60 p-4 flex items-center justify-center relative overflow-hidden">
        {chartType === 'bar' && (
          <div className="w-full h-full flex items-end justify-between gap-3 pt-6 px-4">
            {barData.map((d, i) => (
              <div key={i} className="flex-1 flex flex-col items-center h-full justify-end group">
                <div className="w-full flex justify-center items-end h-44 relative">
                  <div
                    style={{ height: `${d.val}%` }}
                    className="w-full max-w-[28px] bg-indigo-600 dark:bg-indigo-500 rounded-t-lg group-hover:bg-indigo-700 transition-all duration-300 shadow-md"
                  />
                  <span className="absolute -top-6 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 text-white text-[10px] py-0.5 px-1.5 rounded font-bold">
                    {d.val} pts
                  </span>
                </div>
                <span className="text-[10px] font-bold text-slate-500 mt-2">{d.label}</span>
              </div>
            ))}
          </div>
        )}

        {chartType === 'line' && (
          <div className="w-full h-full flex items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
              <path
                d="M 0 80 Q 50 20, 100 60 T 200 10 T 300 50"
                fill="none"
                stroke="#6366f1"
                strokeWidth="4"
                className="transition-all duration-500"
              />
              <path
                d="M 0 90 Q 50 40, 100 80 T 200 30 T 300 70"
                fill="none"
                stroke="#10b981"
                strokeWidth="3"
                strokeDasharray="4"
                className="transition-all duration-500 opacity-80"
              />
            </svg>
          </div>
        )}

        {chartType === 'area' && (
          <div className="w-full h-full flex items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path
                d="M 0 80 Q 50 20, 100 60 T 200 10 T 300 50 L 300 100 L 0 100 Z"
                fill="url(#areaGrad)"
              />
              <path
                d="M 0 80 Q 50 20, 100 60 T 200 10 T 300 50"
                fill="none"
                stroke="#6366f1"
                strokeWidth="4"
              />
            </svg>
          </div>
        )}

        {chartType === 'pie' && (
          <div className="flex items-center justify-center space-x-8">
            <div className="relative w-40 h-40">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <path className="text-amber-500 stroke-current" strokeWidth="6" strokeDasharray="40, 100" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path className="text-indigo-500 stroke-current" strokeWidth="6" strokeDasharray="35, 100" strokeDashoffset="-40" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path className="text-emerald-500 stroke-current" strokeWidth="6" strokeDasharray="25, 100" strokeDashoffset="-75" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              </svg>
            </div>
            <div className="space-y-2 text-xs font-semibold">
              <div className="flex items-center space-x-2 text-amber-500"><span>■</span><span>Market Share A (40%)</span></div>
              <div className="flex items-center space-x-2 text-indigo-500"><span>■</span><span>Market Share B (35%)</span></div>
              <div className="flex items-center space-x-2 text-emerald-500"><span>■</span><span>Market Share C (25%)</span></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

