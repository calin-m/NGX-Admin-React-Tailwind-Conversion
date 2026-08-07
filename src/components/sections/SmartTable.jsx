import React, { useState } from 'react';
import useSmartTableData from '../../hooks/useSmartTableData.js';
import ClearableInput from '../ui/ClearableInput.jsx';

export default function SmartTable() {
  const {
    orders,
    totalRecords,
    searchTerm,
    setSearchTerm,
    sortField,
    sortDirection,
    handleSort,
    currentPage,
    setCurrentPage,
    rowsPerPage,
    setRowsPerPage,
    totalPages
  } = useSmartTableData();

  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ customer: '', total: '', status: '' });
  const [showAddModal, setShowAddModal] = useState(false);
  const [newOrder, setNewOrder] = useState({ customer: '', email: '', total: '', status: 'Completed', method: 'Credit Card' });

  const exportToCSV = () => {
    const headers = ['Order ID', 'Customer', 'Email', 'Date', 'Total ($)', 'Status', 'Payment Method'];
    const rows = orders.map(o => [o.id, o.customer, o.email, o.date, typeof o.total === 'number' ? o.total.toFixed(2) : o.total, o.status, o.method]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `ngx_corporate_orders_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleStartEdit = (order) => {
    setEditingId(order.id);
    setEditForm({ customer: order.customer, total: order.total, status: order.status });
  };

  const handleSaveEdit = () => {
    setEditingId(null);
  };

  const getStatusBadge = status => {
    switch (status) {
      case 'Completed':
        return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20';
      case 'Processing':
        return 'bg-accent-light text-accent border-accent/20';
      case 'Pending':
        return 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20';
      case 'Refunded':
        return 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20';
      default:
        return 'bg-slate-100 text-slate-600 border-slate-200';
    }
  };

  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 space-y-6">
      {/* Table Header Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-700/60 pb-4">
        <div>
          <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-lg">Orders & Invoices Data Table</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">Manage, Filter, Edit, and Export Enterprise Transaction Records</p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div className="w-56">
            <ClearableInput
              icon="🔍"
              placeholder="Search orders, customers..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              onClear={() => setSearchTerm('')}
            />
          </div>

          <button
            onClick={() => setShowAddModal(true)}
            className="px-3.5 py-2 text-xs font-semibold bg-accent hover:bg-accent-hover text-white rounded-xl shadow-sm transition-all flex items-center space-x-1"
          >
            <span>➕ Add Record</span>
          </button>

          <button
            onClick={exportToCSV}
            className="px-3.5 py-2 text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl shadow-sm transition-all flex items-center space-x-1"
          >
            <span>📥 Export CSV</span>
          </button>

          <select
            value={rowsPerPage}
            onChange={e => {
              setRowsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 text-slate-800 dark:text-slate-200 focus:outline-none"
          >
            <option value={5}>5 Rows</option>
            <option value={10}>10 Rows</option>
            <option value={20}>20 Rows</option>
          </select>
        </div>
      </div>

      {/* Main Data Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-700 text-slate-400 dark:text-slate-400 font-semibold uppercase tracking-wider">
              <th className="py-3 px-4 cursor-pointer hover:text-slate-700 dark:hover:text-slate-200" onClick={() => handleSort('id')}>
                Order ID {sortField === 'id' ? (sortDirection === 'asc' ? '▲' : '▼') : ''}
              </th>
              <th className="py-3 px-4 cursor-pointer hover:text-slate-700 dark:hover:text-slate-200" onClick={() => handleSort('customer')}>
                Customer {sortField === 'customer' ? (sortDirection === 'asc' ? '▲' : '▼') : ''}
              </th>
              <th className="py-3 px-4 cursor-pointer hover:text-slate-700 dark:hover:text-slate-200" onClick={() => handleSort('date')}>
                Date {sortField === 'date' ? (sortDirection === 'asc' ? '▲' : '▼') : ''}
              </th>
              <th className="py-3 px-4 cursor-pointer hover:text-slate-700 dark:hover:text-slate-200" onClick={() => handleSort('total')}>
                Total ($) {sortField === 'total' ? (sortDirection === 'asc' ? '▲' : '▼') : ''}
              </th>
              <th className="py-3 px-4 cursor-pointer hover:text-slate-700 dark:hover:text-slate-200" onClick={() => handleSort('status')}>
                Status {sortField === 'status' ? (sortDirection === 'asc' ? '▲' : '▼') : ''}
              </th>
              <th className="py-3 px-4">Payment</th>
              <th className="py-3 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">
            {orders.length > 0 ? (
              orders.map(order => (
                <tr key={order.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-accent">{order.id}</td>

                  <td className="py-3.5 px-4">
                    {editingId === order.id ? (
                      <input
                        type="text"
                        value={editForm.customer}
                        onChange={e => setEditForm({ ...editForm, customer: e.target.value })}
                        className="px-2 py-1 text-xs rounded border border-indigo-500 bg-white dark:bg-slate-800"
                      />
                    ) : (
                      <>
                        <span className="font-semibold text-slate-800 dark:text-slate-200 block">{order.customer}</span>
                        <span className="text-[10px] text-slate-400 block">{order.email}</span>
                      </>
                    )}
                  </td>

                  <td className="py-3.5 px-4 text-slate-600 dark:text-slate-300 font-medium">{order.date}</td>

                  <td className="py-3.5 px-4 font-extrabold text-slate-900 dark:text-slate-100">
                    {editingId === order.id ? (
                      <input
                        type="number"
                        value={editForm.total}
                        onChange={e => setEditForm({ ...editForm, total: e.target.value })}
                        className="w-20 px-2 py-1 text-xs rounded border border-indigo-500 bg-white dark:bg-slate-800"
                      />
                    ) : (
                      `$${typeof order.total === 'number' ? order.total.toFixed(2) : order.total}`
                    )}
                  </td>

                  <td className="py-3.5 px-4">
                    <span className={`px-2.5 py-1 rounded-full border text-[10px] font-bold capitalize ${getStatusBadge(order.status)}`}>
                      {order.status}
                    </span>
                  </td>

                  <td className="py-3.5 px-4 text-slate-500 dark:text-slate-400 font-medium">{order.method}</td>

                  <td className="py-3.5 px-4 text-right space-x-1">
                    {editingId === order.id ? (
                      <button
                        onClick={handleSaveEdit}
                        className="text-emerald-600 hover:text-emerald-700 font-bold px-2 py-1 rounded bg-emerald-500/10"
                      >
                        ✓ Save
                      </button>
                    ) : (
                      <button
                        onClick={() => handleStartEdit(order)}
                        className="text-slate-500 hover:text-accent font-semibold px-2 py-1 rounded hover:bg-slate-100 dark:hover:bg-slate-700"
                      >
                        ✏️ Edit
                      </button>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="py-8 text-center text-slate-400">
                  No order records match your search criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Record Insertion Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="w-full max-w-md bg-white dark:bg-slate-800 rounded-2xl p-6 space-y-4 border border-slate-200 dark:border-slate-700 shadow-2xl">
            <h4 className="font-bold text-slate-900 dark:text-slate-100 text-base">➕ Create New Order Record</h4>
            <div className="space-y-3 text-xs">
              <ClearableInput
                placeholder="Customer Name"
                value={newOrder.customer}
                onChange={e => setNewOrder({ ...newOrder, customer: e.target.value })}
                onClear={() => setNewOrder({ ...newOrder, customer: '' })}
              />
              <ClearableInput
                type="email"
                placeholder="Email Address"
                value={newOrder.email}
                onChange={e => setNewOrder({ ...newOrder, email: e.target.value })}
                onClear={() => setNewOrder({ ...newOrder, email: '' })}
              />
              <ClearableInput
                type="number"
                placeholder="Total ($)"
                value={newOrder.total}
                onChange={e => setNewOrder({ ...newOrder, total: e.target.value })}
                onClear={() => setNewOrder({ ...newOrder, total: '' })}
              />
            </div>
            <div className="flex justify-end space-x-2 pt-2">
              <button onClick={() => setShowAddModal(false)} className="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 text-xs font-semibold rounded-lg">Cancel</button>
              <button onClick={() => setShowAddModal(false)} className="px-3 py-1.5 bg-accent hover:bg-accent-hover text-white text-xs font-semibold rounded-lg">Save Record</button>
            </div>
          </div>
        </div>
      )}

      {/* Pagination Footer */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-4 border-t border-slate-100 dark:border-slate-700/60 text-xs">
        <span className="text-slate-500 dark:text-slate-400">
          Showing <span className="font-semibold text-slate-700 dark:text-slate-300">{orders.length}</span> of <span className="font-semibold text-slate-700 dark:text-slate-300">{totalRecords}</span> entries
        </span>

        <div className="flex items-center space-x-2">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
          >
            ◀ Previous
          </button>
          <span className="font-semibold px-2 text-slate-700 dark:text-slate-300">
            Page {currentPage} of {totalPages}
          </span>
          <button
            disabled={currentPage >= totalPages}
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
          >
            Next ▶
          </button>
        </div>
      </div>
    </div>
  );
}


