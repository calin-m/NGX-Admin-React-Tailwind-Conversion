import React from 'react';
import PeriodSelector from '../ui/PeriodSelector.jsx';
import useUserActivity from '../../hooks/useUserActivity.js';

export default function UserActivity() {
  const { data, period, setPeriod } = useUserActivity('week');

  const activityStream = (data && data.length > 0) ? data.map(item => ({
    user: `User ${item.date}`,
    avatar: item.deltaUp ? '📈' : '📉',
    action: `Visits: ${item.pagesVisitCount} • New: ${item.newVisits}`,
    time: item.deltaUp ? 'Growth' : 'Steady',
    color: item.deltaUp ? 'text-emerald-500' : 'text-amber-500'
  })) : [
    { user: 'Alan Vance', avatar: '👨‍💻', action: 'Purchased Enterprise Pro License', time: '2 mins ago', color: 'text-emerald-500' },
    { user: 'Sarah Connor', avatar: '👩‍💼', action: 'Upgraded Subscription Tier', time: '15 mins ago', color: 'text-accent' },
    { user: 'Michael Scott', avatar: '👔', action: 'Submitted Support Ticket #402', time: '42 mins ago', color: 'text-amber-500' },
    { user: 'Elena Rostova', avatar: '👩‍🔬', action: 'Exported Monthly Financial CSV', time: '1 hr ago', color: 'text-accent' }

  ];

  return (
    <div className="w-full h-full min-h-[460px] rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 flex flex-col justify-between space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-lg">
            👥
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">User Activity Stream</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 capitalize">{period} Activity Summary</p>
          </div>
        </div>

        <PeriodSelector selected={period} onChange={setPeriod} />
      </div>

      {/* Stream Feed */}
      <div className="space-y-3 py-2 flex-1 h-[315px] max-h-[315px] overflow-y-auto scrollbar-thin pr-1">
        {activityStream.map((act, idx) => (
          <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-700/40 hover:bg-slate-100 dark:hover:bg-slate-700/70 transition-colors">
            <div className="flex items-center space-x-3">
              <span className="text-xl p-1.5 rounded-lg bg-white dark:bg-slate-800 shadow-sm">{act.avatar}</span>
              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100">{act.user}</h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate max-w-[160px] sm:max-w-none">{act.action}</p>
              </div>
            </div>
            <span className={`text-[10px] font-bold ${act.color} whitespace-nowrap`}>{act.time}</span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="text-xs text-center text-slate-400 pt-3 border-t border-slate-100 dark:border-slate-700/60">
        Active Users Online: <span className="font-bold text-slate-800 dark:text-slate-200">1,482 Users</span>
      </div>
    </div>
  );
}

