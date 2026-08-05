import React, { useState } from 'react';
import useVisitorsAnalytics from '../../hooks/useVisitorsAnalytics.js';

export default function VisitorsAnalytics() {
  const [activeTab, setActiveTab] = useState('pageViews');
  const { data } = useVisitorsAnalytics();

  const chartPoints = [
    { day: 'Mon', pageViews: 1200, uniqueVisitors: 850 },
    { day: 'Tue', pageViews: 1900, uniqueVisitors: 1200 },
    { day: 'Wed', pageViews: 1500, uniqueVisitors: 980 },
    { day: 'Thu', pageViews: 2400, uniqueVisitors: 1650 },
    { day: 'Fri', pageViews: 2100, uniqueVisitors: 1400 },
    { day: 'Sat', pageViews: 2800, uniqueVisitors: 1950 },
    { day: 'Sun', pageViews: 3200, uniqueVisitors: 2300 }
  ];

  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-700/60 pb-4">
        <div>
          <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Visitors & Traffic Analytics</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">Live Traffic & Engagement Metrics</p>
        </div>

        <div className="flex bg-slate-100 dark:bg-slate-700/60 p-1 rounded-xl text-xs font-medium self-start sm:self-auto">
          <button
            onClick={() => setActiveTab('pageViews')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'pageViews'
                ? 'bg-accent text-white font-semibold shadow-sm transition-colors'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            Page Views
          </button>
          <button
            onClick={() => setActiveTab('uniqueVisitors')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'uniqueVisitors'
                ? 'bg-emerald-600 text-white font-semibold shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            Unique Visitors
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-700/40">
          <span className="text-xs text-slate-500 dark:text-slate-400 block">Total Visits</span>
          <span className="text-xl font-bold text-slate-900 dark:text-slate-100">15,100</span>
        </div>
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-700/40">
          <span className="text-xs text-slate-500 dark:text-slate-400 block">Avg Session</span>
          <span className="text-xl font-bold text-slate-900 dark:text-slate-100">4m 32s</span>
        </div>
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-700/40">
          <span className="text-xs text-slate-500 dark:text-slate-400 block">Bounce Rate</span>
          <span className="text-xl font-bold text-emerald-600 dark:text-emerald-400">28.4%</span>
        </div>
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-700/40">
          <span className="text-xs text-slate-500 dark:text-slate-400 block">New Users</span>
          <span className="text-xl font-bold text-accent transition-colors">68.2%</span>
        </div>
      </div>

      <div className="h-48 w-full flex items-end justify-between gap-3 pt-4">
        {chartPoints.map((pt, idx) => {
          const val = activeTab === 'pageViews' ? pt.pageViews : pt.uniqueVisitors;
          const heightPct = (val / 3500) * 100;
          return (
            <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
              <div className="w-full flex justify-center items-end h-36 relative">
                <div
                  style={{ height: `${heightPct}%` }}
                  className={`w-full max-w-[28px] rounded-t-md transition-all duration-500 ${
                    activeTab === 'pageViews' ? 'bg-accent opacity-90 group-hover:opacity-100' : 'bg-teal-500 dark:bg-teal-400 group-hover:bg-teal-600'
                  }`}
                />
              </div>

              <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">{pt.day}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
