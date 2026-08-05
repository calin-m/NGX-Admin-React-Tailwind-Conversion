import React, { useState } from 'react';
import useOrdersChart from '../../hooks/useOrdersChart.js';

export default function ChartsPanel() {
  const [activeTab, setActiveTab] = useState('orders');
  const [hoverIndex, setHoverIndex] = useState(null);
  const { data: ordersData, period, setPeriod } = useOrdersChart('week');

  const labels = ordersData.labels && ordersData.labels.length > 0 ? ordersData.labels : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const ordersValues = ordersData.orders && ordersData.orders.length > 0 ? ordersData.orders : [184, 267, 326, 366, 389, 399, 392];
  const profitValues = ordersData.profit && ordersData.profit.length > 0 ? ordersData.profit : [158, 178, 193, 205, 212, 213, 204];

  const values = activeTab === 'orders' ? ordersValues : profitValues;
  const activeData = labels.map((lbl, idx) => ({
    label: lbl,
    orders: ordersValues[idx] || 0,
    profit: profitValues[idx] || 0,
    val: values[idx] || 100
  }));

  const maxVal = Math.max(...activeData.map(d => d.val), 1);
  const gridSteps = [1, 0.5, 0];

  // Generate SVG Path String for smooth Bezier curve
  const points = activeData.map((d, i) => {
    const x = (i / (activeData.length - 1 || 1)) * 100;
    const y = 95 - (d.val / maxVal) * 90;
    return { x, y };
  });

  const pathD = points.reduce((acc, point, i, a) => {
    if (i === 0) return `M ${point.x} ${point.y}`;
    const prev = a[i - 1];
    const cx = (prev.x + point.x) / 2;
    return `${acc} C ${cx} ${prev.y}, ${cx} ${point.y}, ${point.x} ${point.y}`;
  }, '');

  const areaD = `${pathD} L 100 100 L 0 100 Z`;

  return (
    <div className="w-full h-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 flex flex-col justify-between space-y-4">
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
                ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400 font-extrabold'
                : 'border-transparent text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
            <span>Profit Chart</span>
          </button>
        </div>

        <div className="flex bg-slate-100 dark:bg-slate-700/60 p-1 rounded-lg text-xs font-semibold">
          {['week', 'month', 'year'].map(p => (
            <button
              key={p}
              type="button"
              onClick={() => setPeriod(p)}
              className={`px-3 py-1 rounded-md transition-all capitalize ${
                period === p
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow-xs font-bold'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* SVG Canvas & Y-Axis Area (2-Card Height Viewport) */}
      <div className="relative h-80 w-full flex-1 flex flex-col justify-between pt-1">
        {/* Horizontal Dashed Y-Axis Gridlines */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-5">
          {gridSteps.map((step, idx) => (
            <div key={idx} className="w-full flex items-center gap-2">
              <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 w-8 text-right">
                {activeTab === 'orders'
                  ? Math.round(maxVal * step).toLocaleString()
                  : `$${(Math.round((maxVal * step) / 1000))}k`}
              </span>
              <div className="flex-1 border-b border-dashed border-slate-200 dark:border-slate-700/60" />
            </div>
          ))}
        </div>

        {/* SVG Bezier Area Curve Layer */}
        <div className="absolute inset-0 pl-10 pb-5 pt-1">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chartAreaGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={activeTab === 'orders' ? '#3b82f6' : '#10b981'} stopOpacity="0.3" />
                <stop offset="100%" stopColor={activeTab === 'orders' ? '#3b82f6' : '#10b981'} stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <path d={areaD} fill="url(#chartAreaGrad)" className="transition-all duration-500" />
            <path
              d={pathD}
              fill="none"
              stroke={activeTab === 'orders' ? '#3b82f6' : '#10b981'}
              strokeWidth="3"
              strokeLinecap="round"
              className="transition-all duration-500 drop-shadow-xs"
            />
          </svg>
        </div>

        {/* Column Interactive Overlay Bars */}
        <div className="relative z-10 pl-10 h-full flex items-end justify-between gap-2 pb-5">
          {activeData.map((item, idx) => {
            const isHovered = hoverIndex === idx;
            return (
              <div
                key={idx}
                onMouseEnter={() => setHoverIndex(idx)}
                onMouseLeave={() => setHoverIndex(null)}
                className="flex-1 flex flex-col items-center h-full justify-end group relative cursor-pointer"
              >
                {/* Tooltip Card */}
                {isHovered && (
                  <div className="absolute bottom-full mb-2 z-30 pointer-events-none flex flex-col items-center animate-in fade-in duration-150">
                    <div className="backdrop-blur-md bg-slate-900/90 text-white text-[11px] p-2 rounded-lg shadow-xl space-y-0.5 border border-slate-700 whitespace-nowrap">
                      <p className="font-bold text-slate-400">{item.label}</p>
                      <p className="font-extrabold text-xs text-white">
                        {activeTab === 'orders' ? `${item.orders.toLocaleString()} Orders` : `$${item.profit.toLocaleString()} Profit`}
                      </p>
                    </div>
                    <div className="w-1.5 h-1.5 bg-slate-900 transform rotate-45 -mt-1 border-r border-b border-slate-700" />
                  </div>
                )}

                {/* Track Column & Active Pillar */}
                <div className="w-full flex justify-center items-end h-full relative">
                  <div className="w-full max-w-[28px] h-full bg-slate-100/50 dark:bg-slate-700/30 rounded-t-lg absolute inset-0 mx-auto" />
                  <div
                    style={{ height: `${(item.val / maxVal) * 98}%` }}
                    className={`w-full max-w-[28px] rounded-t-lg transition-all duration-500 relative z-10 ${
                      isHovered ? 'scale-105 shadow-md' : ''
                    } ${
                      activeTab === 'orders'
                        ? 'bg-gradient-to-t from-accent/90 to-blue-400'
                        : 'bg-gradient-to-t from-emerald-600 to-emerald-400'
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* X-Axis Labels */}
        <div className="pl-10 flex justify-between border-t border-slate-100 dark:border-slate-700/60 pt-2">
          {activeData.map((item, idx) => (
            <span key={idx} className="flex-1 text-center text-[10px] sm:text-xs font-bold text-slate-500 dark:text-slate-400 truncate max-w-[40px] mx-auto">
              {item.label}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Stats Summary */}
      <div className="flex justify-between items-center text-xs pt-3 border-t border-slate-100 dark:border-slate-700/60 text-slate-500">
        <span>Peak Volume: <strong className="text-slate-900 dark:text-slate-100">{maxVal.toLocaleString()} {activeTab === 'orders' ? 'Units' : '$'}</strong></span>
        <span className="text-accent font-bold bg-accent-light px-2 py-0.5 rounded-full capitalize">
          {period} View Active
        </span>
      </div>
    </div>
  );
}
