import React, { useState } from 'react';

export default function Toastr() {
  const [toasts, setToasts] = useState([]);

  const triggerToast = (type, title, message) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, type, title, message }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3000);
  };

  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 space-y-6">
      <div className="border-b border-slate-100 dark:border-slate-700/60 pb-3">
        <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Toastr Notifications</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">Trigger Alert Toasts</p>
      </div>

      <div className="flex flex-wrap gap-3">
        <button onClick={() => triggerToast('success', 'Success!', 'Record saved successfully.')} className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-semibold shadow-sm">
          Success Toast
        </button>
        <button onClick={() => triggerToast('danger', 'Error!', 'Failed to update user status.')} className="px-4 py-2 bg-rose-600 text-white rounded-xl text-xs font-semibold shadow-sm">
          Danger Toast
        </button>
        <button onClick={() => triggerToast('warning', 'Warning!', 'API connection timed out.')} className="px-4 py-2 bg-amber-500 text-white rounded-xl text-xs font-semibold shadow-sm">
          Warning Toast
        </button>
      </div>

      <div className="fixed bottom-6 right-6 space-y-2 z-50">
        {toasts.map(t => (
          <div key={t.id} className={`p-4 rounded-xl shadow-xl border text-xs font-medium min-w-[240px] text-white animate-in slide-in-from-bottom-5 ${
            t.type === 'success' ? 'bg-emerald-600 border-emerald-500' : t.type === 'danger' ? 'bg-rose-600 border-rose-500' : 'bg-amber-500 border-amber-400'
          }`}>
            <h5 className="font-bold">{t.title}</h5>
            <p>{t.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
