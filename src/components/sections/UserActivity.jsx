import React from 'react';
import useUserActivity from '../../hooks/useUserActivity.js';

export default function UserActivity() {
  const { data } = useUserActivity();

  const activityStream = [
    { user: 'Alan Vance', avatar: '👨‍💻', action: 'Purchased Enterprise Pro License', time: '2 mins ago', color: 'text-emerald-500' },
    { user: 'Sarah Connor', avatar: '👩‍💼', action: 'Upgraded Subscription Tier', time: '15 mins ago', color: 'text-indigo-500' },
    { user: 'Michael Scott', avatar: '👔', action: 'Submitted Support Ticket #402', time: '42 mins ago', color: 'text-amber-500' },
    { user: 'Elena Rostova', avatar: '👩‍🔬', action: 'Exported Monthly Financial CSV', time: '1 hr ago', color: 'text-blue-500' }
  ];

  return (
    <div className="w-full min-h-[320px] rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-lg">
            👥
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">User Activity Stream</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">Live User Actions Feed</p>
          </div>
        </div>
        <span className="flex items-center space-x-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-1 rounded-lg">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Live Stream</span>
        </span>
      </div>

      {/* Stream Feed */}
      <div className="space-y-3 py-4 flex-1">
        {activityStream.map((act, idx) => (
          <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-700/40 hover:bg-slate-100 dark:hover:bg-slate-700/70 transition-colors">
            <div className="flex items-center space-x-3">
              <span className="text-xl p-1.5 rounded-lg bg-white dark:bg-slate-800 shadow-sm">{act.avatar}</span>
              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100">{act.user}</h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">{act.action}</p>
              </div>
            </div>
            <span className="text-[10px] font-medium text-slate-400 whitespace-nowrap">{act.time}</span>
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
