import React, { useState } from 'react';
import useVisitorsAnalytics from '../../hooks/useVisitorsAnalytics.js';

export default function VisitorsAnalytics() {
  const [hoverIndex, setHoverIndex] = useState(null);
  const { data, period, setPeriod } = useVisitorsAnalytics('week');

  const chartPoints = data?.chartPoints || [
    { label: 'Mon', pageViews: 1200, uniqueVisitors: 850 },
    { label: 'Tue', pageViews: 1900, uniqueVisitors: 1200 },
    { label: 'Wed', pageViews: 1500, uniqueVisitors: 980 },
    { label: 'Thu', pageViews: 2400, uniqueVisitors: 1650 },
    { label: 'Fri', pageViews: 2100, uniqueVisitors: 1400 },
    { label: 'Sat', pageViews: 2800, uniqueVisitors: 1950 },
    { label: 'Sun', pageViews: 3200, uniqueVisitors: 2300 }
  ];

  const maxVal = Math.max(...chartPoints.map(p => Math.max(p.pageViews, p.uniqueVisitors)), 1);

  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 space-y-6">
      {/* Header & Period Selectors */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-700/60 pb-4">
        <div>
          <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Visitors & Traffic Analytics</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 capitalize">{period} Traffic & Engagement Metrics</p>
        </div>

        <div className="flex items-center space-x-3 self-start sm:self-auto">
          {/* Series Legend Indicators */}
          <div className="hidden md:flex items-center space-x-3 text-xs font-semibold">
            <span className="flex items-center space-x-1.5 text-slate-600 dark:text-slate-300">
              <span className="w-2.5 h-2.5 rounded-full bg-accent inline-block" />
              <span>Page Views</span>
            </span>
            <span className="flex items-center space-x-1.5 text-slate-600 dark:text-slate-300">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
              <span>Unique Visitors</span>
            </span>
          </div>

          {/* Period Selector Tabs */}
          <div className="flex bg-slate-100 dark:bg-slate-700/60 p-1 rounded-lg text-xs font-semibold">
            {['week', 'month', 'year'].map(p => (
              <button
                key={p}
                type="button"
                onClick={() => setPeriod && setPeriod(p)}
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
      </div>

      {/* KPI Cards Header */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-700/40 border border-slate-100 dark:border-slate-700/40">
          <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block">Total Visits</span>
          <span className="text-lg font-extrabold text-slate-900 dark:text-slate-100">{data?.totalVisits || '15,100'}</span>
        </div>
        <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-700/40 border border-slate-100 dark:border-slate-700/40">
          <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block">Avg Session</span>
          <span className="text-lg font-extrabold text-slate-900 dark:text-slate-100">{data?.avgSession || '4m 32s'}</span>
        </div>
        <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-700/40 border border-slate-100 dark:border-slate-700/40">
          <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block">Bounce Rate</span>
          <span className="text-lg font-extrabold text-emerald-600 dark:text-emerald-400">{data?.bounceRate || '28.4%'}</span>
        </div>
        <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-700/40 border border-slate-100 dark:border-slate-700/40">
          <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block">New Users</span>
          <span className="text-lg font-extrabold text-accent">{data?.newUsers || '68.2%'}</span>
        </div>
      </div>

      {/* Dual-Series Multi-Data Chart Section */}
      <div className="h-64 w-full flex items-end justify-between gap-3 pt-2 border-t border-slate-100 dark:border-slate-700/60 relative">
        {chartPoints.map((pt, idx) => {
          const isHovered = hoverIndex === idx;
          return (
            <div
              key={idx}
              onMouseEnter={() => setHoverIndex(idx)}
              onMouseLeave={() => setHoverIndex(null)}
              className="flex-1 flex flex-col items-center gap-1 group h-full justify-end relative cursor-pointer"
            >
              {/* Floating Tooltip Card */}
              {isHovered && (
                <div className="absolute bottom-full mb-2 z-30 pointer-events-none flex flex-col items-center animate-in fade-in duration-150">
                  <div className="backdrop-blur-md bg-slate-900/90 text-white text-[10px] p-2.5 rounded-lg shadow-xl space-y-0.5 border border-slate-700 whitespace-nowrap">
                    <p className="font-bold text-slate-400">{pt.label}</p>
                    <p className="font-extrabold text-accent">Page Views: {pt.pageViews.toLocaleString()}</p>
                    <p className="text-[10px] text-emerald-400 font-semibold">Unique Visitors: {pt.uniqueVisitors.toLocaleString()}</p>
                  </div>
                  <div className="w-1.5 h-1.5 bg-slate-900 transform rotate-45 -mt-1 border-r border-b border-slate-700" />
                </div>
              )}

              {/* Side-by-Side Dual Pillars */}
              <div className="w-full flex justify-center items-end gap-1.5 h-56 relative">
                {/* Page Views Pillar */}
                <div
                  style={{ height: `${(pt.pageViews / maxVal) * 98}%` }}
                  className={`w-3.5 sm:w-5 rounded-t-md transition-all duration-300 shadow-xs ${
                    isHovered ? 'scale-105 shadow-accent/30' : ''
                  } bg-gradient-to-t from-accent/90 to-blue-400`}
                />
                {/* Unique Visitors Pillar */}
                <div
                  style={{ height: `${(pt.uniqueVisitors / maxVal) * 98}%` }}
                  className={`w-3.5 sm:w-5 rounded-t-md transition-all duration-300 shadow-xs ${
                    isHovered ? 'scale-105 shadow-emerald-500/30' : ''
                  } bg-gradient-to-t from-emerald-600 to-emerald-400`}
                />
              </div>

              <span className="text-[10px] sm:text-xs text-slate-400 dark:text-slate-500 font-bold truncate max-w-[40px] text-center">{pt.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
