import React, { useState } from 'react';

export default function Settings() {
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [compactView, setCompactView] = useState(false);
  const [apiKey, setApiKey] = useState('ngx_live_98410294810294');

  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 space-y-6">
      <div className="border-b border-slate-100 dark:border-slate-700/60 pb-4">
        <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-lg">Corporate Settings & System Preferences</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">Configure Dashboard Layout, Security Keys, and Notifications</p>
      </div>

      <div className="space-y-6 max-w-2xl">
        {/* Preference 1 */}
        <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-700/30">
          <div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100">Email Digest Notifications</h4>
            <p className="text-[10px] text-slate-400">Receive daily summary reports of orders and revenue targets.</p>
          </div>
          <button
            onClick={() => setEmailNotifs(prev => !prev)}
            className={`w-11 h-6 rounded-full transition-colors relative p-0.5 ${emailNotifs ? 'bg-indigo-600' : 'bg-slate-300 dark:bg-slate-600'}`}
          >
            <div className={`w-5 h-5 rounded-full bg-white transition-transform ${emailNotifs ? 'translate-x-5' : 'translate-x-0'}`} />
          </button>
        </div>

        {/* Preference 2 */}
        <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-700/30">
          <div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100">Compact Dashboard Cards</h4>
            <p className="text-[10px] text-slate-400">Reduce spacing and padding for high-density displays.</p>
          </div>
          <button
            onClick={() => setCompactView(prev => !prev)}
            className={`w-11 h-6 rounded-full transition-colors relative p-0.5 ${compactView ? 'bg-indigo-600' : 'bg-slate-300 dark:bg-slate-600'}`}
          >
            <div className={`w-5 h-5 rounded-full bg-white transition-transform ${compactView ? 'translate-x-5' : 'translate-x-0'}`} />
          </button>
        </div>

        {/* Preference 3 */}
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-700/30 space-y-2">
          <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100">Corporate API Key</h4>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              readOnly
              value={apiKey}
              className="flex-1 px-3 py-2 text-xs font-mono rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 text-slate-800 dark:text-slate-200"
            />
            <button
              onClick={() => alert('API Key copied to clipboard!')}
              className="px-3 py-2 bg-indigo-600 text-white rounded-lg text-xs font-semibold hover:bg-indigo-700 transition-colors"
            >
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
