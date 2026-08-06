import React, { useState } from 'react';
import FormInput from '../ui/FormInput.jsx';

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
      <div className="w-full max-w-md bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 p-6 space-y-6 animate-scale-in">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700/60 pb-3">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base">Create New Order</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-lg">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <FormInput
            label="Customer Name"
            required
            placeholder="e.g. Sarah Jenkins"
            value={customer}
            onChange={e => setCustomer(e.target.value)}
            onClear={() => setCustomer('')}
          />

          <FormInput
            label="Order Amount ($)"
            type="number"
            required
            step="0.01"
            placeholder="e.g. 1250.00"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            onClear={() => setAmount('')}
          />

          <FormInput
            label="Payment Method"
            type="select"
            value={method}
            onChange={e => setMethod(e.target.value)}
            options={['Credit Card', 'PayPal', 'Apple Pay', 'Wire Transfer']}
          />

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
