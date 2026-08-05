import React, { useState, useEffect } from 'react';

export default function Dialogs() {
  const [activeModal, setActiveModal] = useState(null); // 'confirm' | 'prompt' | 'info'
  const [promptText, setPromptText] = useState('');
  const [lastAction, setLastAction] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveModal(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 space-y-6">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700/60 pb-3">
        <div>
          <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Modal & Dialog Overlays</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">Confirmation, Prompt & Info Windows</p>
        </div>
        {lastAction && (
          <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full">
            Last: {lastAction}
          </span>
        )}
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => setActiveModal('confirm')}
          className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-semibold shadow-sm hover:bg-indigo-700 transition-colors"
        >
          ❓ Confirmation Dialog
        </button>
        <button
          onClick={() => setActiveModal('prompt')}
          className="px-4 py-2 bg-amber-500 text-white rounded-xl text-xs font-semibold shadow-sm hover:bg-amber-600 transition-colors"
        >
          ✏️ Input Prompt Modal
        </button>
        <button
          onClick={() => setActiveModal('info')}
          className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-semibold shadow-sm hover:bg-emerald-700 transition-colors"
        >
          ℹ️ Info Announcement
        </button>
      </div>

      {/* Backdrop & Active Modal */}
      {activeModal && (
        <div
          onClick={() => setActiveModal(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs"
        >
          <div
            onClick={e => e.stopPropagation()}
            className="w-full max-w-sm bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 p-6 space-y-4 animate-in fade-in zoom-in duration-200"
          >
            {activeModal === 'confirm' && (
              <>
                <h4 className="font-bold text-slate-900 dark:text-slate-100 text-base">Confirm Action</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">Are you sure you want to proceed with this operation?</p>
                <div className="flex justify-end space-x-3 pt-2">
                  <button onClick={() => setActiveModal(null)} className="px-3.5 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl text-xs font-semibold">
                    Cancel
                  </button>
                  <button onClick={() => { setLastAction('Confirmed Action'); setActiveModal(null); }} className="px-3.5 py-1.5 bg-indigo-600 text-white rounded-xl text-xs font-semibold">
                    Confirm
                  </button>
                </div>
              </>
            )}

            {activeModal === 'prompt' && (
              <>
                <h4 className="font-bold text-slate-900 dark:text-slate-100 text-base">Enter Name</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">Please type a name to confirm update:</p>
                <input
                  type="text"
                  value={promptText}
                  onChange={e => setPromptText(e.target.value)}
                  placeholder="Enter name..."
                  className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-slate-100 focus:outline-none"
                />
                <div className="flex justify-end space-x-3 pt-2">
                  <button onClick={() => setActiveModal(null)} className="px-3.5 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl text-xs font-semibold">
                    Cancel
                  </button>
                  <button onClick={() => { setLastAction(`Submitted: ${promptText || 'Name'}`); setActiveModal(null); }} className="px-3.5 py-1.5 bg-amber-500 text-white rounded-xl text-xs font-semibold">
                    Submit
                  </button>
                </div>
              </>
            )}

            {activeModal === 'info' && (
              <>
                <h4 className="font-bold text-slate-900 dark:text-slate-100 text-base">System Update</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">The 7-Gateway Quality Engine has validated all active component blueprints.</p>
                <div className="flex justify-end pt-2">
                  <button onClick={() => setActiveModal(null)} className="px-4 py-1.5 bg-emerald-600 text-white rounded-xl text-xs font-semibold">
                    Dismiss
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

