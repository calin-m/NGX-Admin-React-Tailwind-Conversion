import React, { useState } from 'react';
import PeriodSelector from '../ui/PeriodSelector.jsx';

export default function Echarts() {
  const [chartType, setChartType] = useState('bar'); // 'bar' | 'line' | 'pie' | 'area'
  const [period, setPeriod] = useState('week');
  const [hoverIndex, setHoverIndex] = useState(null);

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
    <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 space-y-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-100 dark:border-slate-700/60 pb-3 gap-3">
        <div>
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base">ECharts Advanced Visualization</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">Interactive Canvas Engine & Multi-Chart Views</p>
        </div>

        <div className="flex items-center space-x-2">
          {/* Chart Type Selector */}
          <div className="flex bg-slate-100 dark:bg-slate-700/60 p-1 rounded-lg text-xs font-semibold">
            {['bar', 'line', 'pie', 'area'].map(type => (
              <button
                key={type}
                type="button"
                onClick={() => setChartType(type)}
                className={`px-2.5 py-1 rounded-md transition-all capitalize ${
                  chartType === type
                    ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 font-bold shadow-xs'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          <PeriodSelector selected={period} onChange={setPeriod} />
        </div>
      </div>

      {/* SVG Canvas Viewports */}
      <div className="h-64 rounded-xl bg-slate-50/50 dark:bg-slate-700/30 border border-slate-200/60 dark:border-slate-600/60 p-4 flex items-center justify-center relative overflow-hidden">
        {chartType === 'bar' && (
          <div className="w-full h-full flex items-end justify-between gap-3 pt-4 px-2">
            {barData.map((d, i) => {
              const isHovered = hoverIndex === i;
              return (
                <div
                  key={i}
                  onMouseEnter={() => setHoverIndex(i)}
                  onMouseLeave={() => setHoverIndex(null)}
                  className="flex-1 flex flex-col items-center h-full justify-end group relative cursor-pointer"
                >
                  {/* Tooltip */}
                  {isHovered && (
                    <div className="absolute bottom-full mb-2 z-30 pointer-events-none flex flex-col items-center animate-in fade-in duration-150">
                      <div className="backdrop-blur-md bg-slate-900/90 text-white text-[10px] p-2 rounded-lg shadow-xl space-y-0.5 border border-slate-700 whitespace-nowrap">
                        <p className="font-bold text-slate-400">{d.label}</p>
                        <p className="font-extrabold text-indigo-400">{d.val} pts</p>
                      </div>
                      <div className="w-1.5 h-1.5 bg-slate-900 transform rotate-45 -mt-1 border-r border-b border-slate-700" />
                    </div>
                  )}

                  <div className="w-full flex justify-center items-end h-44 relative">
                    <div className="w-full max-w-[28px] h-full bg-slate-100/50 dark:bg-slate-700/30 rounded-t-lg absolute inset-0 mx-auto" />
                    <div
                      style={{ height: `${d.val}%` }}
                      className={`w-full max-w-[28px] rounded-t-lg transition-all duration-500 relative z-10 ${
                        isHovered ? 'scale-105 shadow-md shadow-indigo-500/20' : ''
                      } bg-gradient-to-t from-indigo-600 to-indigo-400`}
                    />
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 mt-2">{d.label}</span>
                </div>
              );
            })}
          </div>
        )}

        {chartType === 'line' && (
          <div className="w-full h-full flex items-center justify-center p-2">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 300 100" preserveAspectRatio="none">
              <path
                d="M 0 80 Q 50 20, 100 60 T 200 10 T 300 50"
                fill="none"
                stroke="#6366f1"
                strokeWidth="3.5"
                className="transition-all duration-500"
              />
              <path
                d="M 0 90 Q 50 40, 100 80 T 200 30 T 300 70"
                fill="none"
                stroke="#10b981"
                strokeWidth="2.5"
                strokeDasharray="4 4"
                className="transition-all duration-500 opacity-80"
              />
            </svg>
          </div>
        )}

        {chartType === 'area' && (
          <div className="w-full h-full flex items-center justify-center p-2">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 300 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="echartAreaGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path
                d="M 0 80 Q 50 20, 100 60 T 200 10 T 300 50 L 300 100 L 0 100 Z"
                fill="url(#echartAreaGrad)"
              />
              <path
                d="M 0 80 Q 50 20, 100 60 T 200 10 T 300 50"
                fill="none"
                stroke="#6366f1"
                strokeWidth="3.5"
              />
            </svg>
          </div>
        )}

        {chartType === 'pie' && (
          <div className="flex items-center justify-center space-x-8">
            <div className="relative w-36 h-36">
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

