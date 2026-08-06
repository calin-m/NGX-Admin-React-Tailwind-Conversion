import React, { useState } from 'react';
import useAuth from '../../context/AuthContext.jsx';
import FormInput from '../ui/FormInput.jsx';

export default function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState('admin@ngx-corporate.io');
  const [password, setPassword] = useState('password');
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const { login } = useAuth();

  const handleSubmit = e => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in both Email and Password fields.');
      return;
    }

    const isOk = login(email, password);
    if (isOk) {
      setSuccess(true);
      setTimeout(() => {
        if (onLoginSuccess) onLoginSuccess();
      }, 600);
    } else {
      setError('Invalid email or password credentials.');
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-2xl space-y-6">
      <div className="text-center space-y-2">
        <h3 className="font-extrabold text-slate-900 dark:text-slate-100 text-2xl tracking-tight">Enterprise Login</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">Welcome back! Sign in to access your corporate dashboard.</p>
      </div>

      {error && (
        <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-900/30 border border-rose-200 dark:border-rose-800 text-xs font-semibold text-rose-600 dark:text-rose-400">
          ⚠️ {error}
        </div>
      )}

      {success && (
        <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
          ✓ Authentication Successful! Redirecting to Dashboard...
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <FormInput
          label="Email Address"
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          onClear={() => setEmail('')}
          placeholder="admin@ngx-corporate.io"
        />

        <FormInput
          label="Password"
          type="password"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
          onClear={() => setPassword('')}
        />

        <div className="flex items-center justify-between text-xs">
          <FormInput
            type="checkbox"
            value={rememberMe}
            onChange={setRememberMe}
            placeholder="Remember me"
          />
          <a href="#reset" className="text-accent font-semibold hover:underline transition-colors">Forgot password?</a>
        </div>

        <button type="submit" className="w-full py-2.5 bg-accent hover:bg-accent-hover text-white font-bold text-xs rounded-xl shadow-md transition-all">
          Sign In
        </button>

      </form>
    </div>
  );
}

