import React, { useState } from 'react';
import FormInput from '../ui/FormInput.jsx';

export default function ResetPassword() {
  const [email, setEmail] = useState('');

  return (
    <div className="w-full max-w-md mx-auto p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-2xl space-y-6">
      <div className="text-center space-y-2">
        <h3 className="font-extrabold text-slate-900 dark:text-slate-100 text-xl">Reset Password</h3>
        <p className="text-xs text-slate-500">We will send you a password recovery link.</p>
      </div>

      <form onSubmit={e => e.preventDefault()} className="space-y-4">
        <FormInput
          label="Email Address"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          onClear={() => setEmail('')}
          placeholder="your-email@corporate.com"
        />
        <button type="submit" className="w-full py-2.5 bg-accent hover:bg-accent-hover text-white font-bold text-xs rounded-xl shadow-md transition-colors active:scale-[0.98]">
          Send Recovery Link
        </button>
      </form>
    </div>
  );
}
