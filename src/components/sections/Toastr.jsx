import React, { useState } from 'react';

export default function Toastr() {
  const [toasts, setToasts] = useState([]);
  const [position, setPosition] = useState('bottom-right'); // 'top-right' | 'top-left' | 'bottom-right'

  const triggerToast = (type, title, message) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, type, title, message }]);
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  const getPositionClasses = () => {
    switch (position) {
      case 'top-right': return 'top-6 right-6';
      case 'top-left': return 'top-6 left-6';
      case 'bottom-left': return 'bottom-6 left-6';
      default: return 'bottom-6 right-6';
    }
  };

  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 space-y-6">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700/60 pb-3">
        <div>
          <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Toastr Notifications</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">Positioning & Status Presets</p>
        </div>

        <div className="flex bg-slate-100 dark:bg-slate-700/60 p-1 rounded-xl text-xs font-medium">
          {['bottom-right', 'top-right', 'top-left'].map(pos => (
            <button
              key={pos}
              onClick={() => setPosition(pos)}
              className={`px-2.5 py-1 rounded-lg transition-all capitalize ${
                position === pos ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 font-bold shadow-sm' : 'text-slate-500'
              }`}
            >
              {pos.replace('-', ' ')}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <button onClick={() => triggerToast('success', 'Success!', 'Record saved successfully in database.')} className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-semibold shadow-sm hover:bg-emerald-700 transition-colors">
          ✅ Success Toast
        </button>
        <button onClick={() => triggerToast('info', 'Information', 'New system updates are available.')} className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-semibold shadow-sm hover:bg-indigo-700 transition-colors">
          ℹ️ Info Toast
        </button>
        <button onClick={() => triggerToast('warning', 'Warning!', 'API rate limit threshold at 85%.')} className="px-4 py-2 bg-amber-500 text-white rounded-xl text-xs font-semibold shadow-sm hover:bg-amber-600 transition-colors">
          ⚠️ Warning Toast
        </button>
        <button onClick={() => triggerToast('danger', 'Error!', 'Failed to connect to authentication provider.')} className="px-4 py-2 bg-rose-600 text-white rounded-xl text-xs font-semibold shadow-sm hover:bg-rose-700 transition-colors">
          🚨 Danger Toast
        </button>
      </div>

      <div className={`fixed space-y-2 z-50 transition-all duration-300 ${getPositionClasses()}`}>
        {toasts.map(t => (
          <div key={t.id} className={`p-4 rounded-xl shadow-xl border text-xs font-medium min-w-[280px] text-white flex items-start justify-between gap-3 animate-in slide-in-from-bottom-5 ${
            t.type === 'success' ? 'bg-emerald-600 border-emerald-500' : t.type === 'info' ? 'bg-indigo-600 border-indigo-500' : t.type === 'danger' ? 'bg-rose-600 border-rose-500' : 'bg-amber-500 border-amber-400'
          }`}>
            <div>
              <h5 className="font-bold">{t.title}</h5>
              <p className="opacity-90">{t.message}</p>
            </div>
            <button onClick={() => removeToast(t.id)} className="text-white/80 hover:text-white font-bold text-sm leading-none">
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

