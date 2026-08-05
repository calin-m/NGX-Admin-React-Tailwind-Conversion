import React from 'react';

export default function NotificationDrawer({ isOpen, onClose }) {
  if (!isOpen) return null;

  const notifications = [
    { id: 1, title: 'New High-Value Order', desc: 'Order ORD-8492 received ($1,250.00)', time: '5m ago', icon: '🛒', unread: true },
    { id: 2, title: 'Quarterly Profit Target Reached', desc: 'Net profit reached 85% of Q3 goal ($84,250)', time: '1h ago', icon: '🎯', unread: true },
    { id: 3, title: 'System Security Backup', desc: 'Automated database backup completed successfully', time: '3h ago', icon: '🔒', unread: false },
    { id: 4, title: 'New Team Member Joined', desc: 'Amara Okafor joined Operations department', time: '1d ago', icon: '👤', unread: false }
  ];

  return (
    <div className="fixed top-16 right-3 left-3 sm:absolute sm:right-0 sm:left-auto sm:top-14 sm:w-80 z-40 bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 rounded-2xl shadow-2xl p-4 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700/60 pb-3">
        <div className="flex items-center space-x-2">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm">Notifications</h3>
          <span className="text-[10px] font-bold bg-accent text-white px-2 py-0.5 rounded-full">2 New</span>
        </div>
        <button onClick={onClose} className="text-slate-400 hover:text-slate-600 text-xs font-semibold">Mark read</button>
      </div>

      <div className="space-y-2.5 max-h-[70vh] sm:max-h-80 overflow-y-auto pr-1">
        {notifications.map(notif => (
          <div
            key={notif.id}
            className={`p-3 rounded-xl transition-all flex items-start space-x-3 ${
              notif.unread ? 'bg-accent-light border border-accent/20' : 'bg-slate-50 dark:bg-slate-700/30'
            }`}
          >
            <span className="text-lg shrink-0">{notif.icon}</span>
            <div className="flex-1 overflow-hidden">
              <div className="flex justify-between items-baseline">
                <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100 truncate">{notif.title}</h4>
                <span className="text-[10px] text-slate-400 shrink-0 ml-1">{notif.time}</span>
              </div>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-2 mt-0.5">{notif.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
