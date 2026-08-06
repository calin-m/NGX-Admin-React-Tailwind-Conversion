import React, { useState } from 'react';
import FormInput from '../ui/FormInput.jsx';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className="w-full max-w-md mx-auto p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-2xl space-y-6">
      <div className="text-center space-y-2">
        <h3 className="font-extrabold text-slate-900 dark:text-slate-100 text-xl">Create Account</h3>
        <p className="text-xs text-slate-500">Register a new enterprise account.</p>
      </div>

      <form onSubmit={e => e.preventDefault()} className="space-y-4">
        <FormInput
          label="Full Name"
          value={name}
          onChange={e => setName(e.target.value)}
          onClear={() => setName('')}
          placeholder="Jane Doe"
        />

        <FormInput
          label="Email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          onClear={() => setEmail('')}
          placeholder="jane@corporate.com"
        />
        <button type="submit" className="w-full py-2.5 bg-accent hover:bg-accent-hover text-white font-bold text-xs rounded-xl shadow-md transition-colors active:scale-[0.98]">
          Register
        </button>
      </form>
    </div>
  );
}
