import React, { useState } from 'react';

export default function OrderModal({ isOpen, onClose, onSubmit }) {
  const [customer, setCustomer] = useState('');
  const [amount, setAmount] = useState('');
  const [method, setMethod] = useState('Credit Card');

  if (!isOpen) return null;

  const handleSubmit = e => {
    e.preventDefault();
    if (!customer || !amount) return;
    if (onSubmit) {
      onSubmit({ customer, total: parseFloat(amount), method });
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
      <div className="w-full max-w-md bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 p-6 space-y-6 animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700/60 pb-3">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base">Create New Order</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-lg">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Customer Name</label>
            <input
              type="text"
              required
              placeholder="e.g. Sarah Jenkins"
              value={customer}
              onChange={e => setCustomer(e.target.value)}
              className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Order Amount ($)</label>
            <input
              type="number"
              required
              step="0.01"
              placeholder="e.g. 1250.00"
              value={amount}
              onChange={e => setAmount(e.target.value)}
              className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-accent"
            />

          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Payment Method</label>
            <select
              value={method}
              onChange={e => setMethod(e.target.value)}
              className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-slate-100 focus:outline-none"
            >
              <option value="Credit Card">Credit Card</option>
              <option value="PayPal">PayPal</option>
              <option value="Apple Pay">Apple Pay</option>
              <option value="Wire Transfer">Wire Transfer</option>
            </select>
          </div>

          <div className="flex justify-end space-x-3 pt-4 border-t border-slate-100 dark:border-slate-700/60">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/50 rounded-xl transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-xs font-semibold bg-accent hover:bg-accent-hover text-white rounded-xl shadow-sm transition-colors"

            >
              Create Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
