import React, { useState } from 'react';

export default function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState('admin@ngx-corporate.io');
  const [password, setPassword] = useState('password123');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitted(true);
    if (onLoginSuccess) setTimeout(onLoginSuccess, 1000);
  };

  return (
    <div className="w-full max-w-md mx-auto p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-2xl space-y-6">
      <div className="text-center space-y-2">
        <div className="w-12 h-12 rounded-2xl bg-accent text-white font-black text-2xl flex items-center justify-center mx-auto shadow-md transition-colors">
          N
        </div>
        <h3 className="font-extrabold text-slate-900 dark:text-slate-100 text-xl">Sign In to NGX Admin</h3>
        <p className="text-xs text-slate-500">Welcome back! Please enter your credentials.</p>
      </div>

      {isSubmitted && (
        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold text-center animate-in fade-in">
          ✓ Authentication Successful! Redirecting to Dashboard...
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">Email Address</label>
          <input
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="admin@ngx-corporate.io"
            className="w-full px-4 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        <div>
          <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">Password</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button
              type="button"
              onClick={() => setShowPassword(prev => !prev)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs text-slate-400 hover:text-slate-600"
            >
              {showPassword ? '🙈 Hide' : '👁️ Show'}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs">
          <label className="flex items-center space-x-2 cursor-pointer text-slate-600 dark:text-slate-400">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={e => setRememberMe(e.target.checked)}
              className="rounded text-accent focus:ring-accent"
            />
            <span>Remember me</span>
          </label>
          <a href="#reset" className="text-accent font-semibold hover:underline transition-colors">Forgot password?</a>
        </div>

        <button type="submit" className="w-full py-2.5 bg-accent hover:bg-accent-hover text-white font-bold text-xs rounded-xl shadow-md transition-all">
          Sign In
        </button>

      </form>
    </div>
  );
}

