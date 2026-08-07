import React, { useState, useEffect, useRef } from 'react';

/**
 * NotificationDrawer Component
 * Modernized React 18 + Tailwind CSS v4 Component
 * Implements Industry Standard Floating Dropdown Animation (Top-Right Origin Anchored Scale & Fade with Exit Lifecycle).
 */
export default function NotificationDrawer({ isOpen, onClose }) {
  const drawerRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const [notifications, setNotifications] = useState([
    { id: 1, title: 'New High-Value Order', desc: 'Order ORD-8492 received ($1,250.00)', time: '5m ago', icon: '🛒', unread: true },
    { id: 2, title: 'Quarterly Profit Target Reached', desc: 'Net profit reached 85% of Q3 goal ($84,250)', time: '1h ago', icon: '🎯', unread: true },
    { id: 3, title: 'System Security Backup', desc: 'Automated database backup completed successfully', time: '3h ago', icon: '🔒', unread: false },
    { id: 4, title: 'New Team Member Joined', desc: 'Amara Okafor joined Operations department', time: '1d ago', icon: '👤', unread: false }
  ]);

  // Handle Entrance & Exit Animation Lifecycle
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      let innerFrame;
      const outerFrame = requestAnimationFrame(() => {
        innerFrame = requestAnimationFrame(() => setIsMounted(true));
      });
      return () => {
        cancelAnimationFrame(outerFrame);
        if (innerFrame) cancelAnimationFrame(innerFrame);
      };
    } else {
      setIsMounted(false);
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 140); // 140ms Exit Animation Duration
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Handle Backdrop / Click Outside Dismissal
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event) => {
      const isOutsideDrawer = drawerRef.current && !drawerRef.current.contains(event.target);
      const isNotifButton = event.target.closest('[title="System Notifications"]');

      if (isOutsideDrawer && !isNotifButton) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!shouldRender) return null;

  const unreadCount = notifications.filter(n => n.unread).length;

  const handleMarkAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, unread: false })));
  };

  const handleItemClick = (id) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, unread: false } : n));
    onClose();
  };

  return (
    <>
      {/* Mobile Touch Backdrop Overlay */}
      <div
        className={`fixed inset-0 z-30 sm:hidden bg-slate-900/20 backdrop-blur-xs cursor-pointer transition-opacity duration-150 ease-out ${
          isMounted ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      {/* Top-Right Anchored Industry Standard Dropdown */}
      <div
        ref={drawerRef}
        className={`fixed top-16 right-3 left-3 sm:absolute sm:right-0 sm:left-auto sm:top-14 sm:w-80 z-40 bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 rounded-2xl shadow-2xl p-4 space-y-4 origin-top-right transition-all duration-180 ${
          isMounted
            ? 'opacity-100 scale-100 translate-y-0 ease-out'
            : 'opacity-0 scale-95 -translate-y-2 ease-in duration-140 pointer-events-none'
        }`}
        style={{
          willChange: 'transform, opacity',
          transform: isMounted ? 'scale(1) translateY(0) translateZ(0)' : 'scale(0.95) translateY(-8px) translateZ(0)'
        }}
      >
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700/60 pb-3">
          <div className="flex items-center space-x-2">
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm">Notifications</h3>
            {unreadCount > 0 ? (
              <span className="text-[10px] font-bold bg-accent text-white px-2 py-0.5 rounded-full transition-all animate-pulse">
                {unreadCount} New
              </span>
            ) : (
              <span className="text-[10px] font-semibold text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded-full">
                All Read
              </span>
            )}
          </div>
          {unreadCount > 0 && (
            <button
              type="button"
              onClick={handleMarkAllRead}
              className="text-slate-400 hover:text-accent dark:hover:text-slate-200 text-xs font-semibold cursor-pointer transition-colors"
            >
              Mark all read
            </button>
          )}
        </div>

        <div className="space-y-2.5 max-h-[70vh] sm:max-h-80 overflow-y-auto pr-1">
          {notifications.map(notif => (
            <button
              type="button"
              key={notif.id}
              onClick={() => handleItemClick(notif.id)}
              className={`w-full text-left p-3 rounded-xl transition-all flex items-start space-x-3 cursor-pointer ${
                notif.unread
                  ? 'bg-accent-light border border-accent/20 hover:brightness-95'
                  : 'bg-slate-50 dark:bg-slate-700/30 hover:bg-slate-100 dark:hover:bg-slate-700/50'
              }`}
            >
              <span className="text-lg shrink-0">{notif.icon}</span>
              <div className="flex-1 overflow-hidden">
                <div className="flex justify-between items-baseline">
                  <h4 className={`text-xs truncate ${notif.unread ? 'font-extrabold text-slate-900 dark:text-slate-100' : 'font-semibold text-slate-700 dark:text-slate-300'}`}>
                    {notif.title}
                  </h4>
                  <span className="text-[10px] text-slate-400 shrink-0 ml-1">{notif.time}</span>
                </div>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-2 mt-0.5">{notif.desc}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="border-t border-slate-100 dark:border-slate-700/60 pt-2 flex justify-between items-center text-[11px] text-slate-500">
          <span>Real-time System Monitor</span>
          <button
            type="button"
            onClick={onClose}
            className="text-accent font-semibold hover:underline cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}
