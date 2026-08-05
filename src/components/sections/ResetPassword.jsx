import React, { useState } from 'react';

export default function ResetPassword() {
  const [email, setEmail] = useState('');

  return (
    <div className="w-full max-w-md mx-auto p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-2xl space-y-6">
      <div className="text-center space-y-2">
        <h3 className="font-extrabold text-slate-900 dark:text-slate-100 text-xl">Reset Password</h3>
        <p className="text-xs text-slate-500">We will send you a password recovery link.</p>
      </div>

      <form onSubmit={e => e.preventDefault()} className="space-y-4">
        <div>
          <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">Email</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your-email@corporate.com" className="w-full px-4 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600" />
        </div>
        <button type="submit" className="w-full py-2.5 bg-accent hover:bg-accent-hover text-white font-bold text-xs rounded-xl shadow-md transition-colors">
          Send Recovery Link
        </button>

      </form>
    </div>
  );
}
