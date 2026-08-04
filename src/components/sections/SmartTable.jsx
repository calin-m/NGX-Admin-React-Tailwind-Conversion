import React from 'react';
import useSmartTableData from '../../hooks/useSmartTableData.js';

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

  const exportToCSV = () => {
    const headers = ['Order ID', 'Customer', 'Email', 'Date', 'Total ($)', 'Status', 'Payment Method'];
    const rows = orders.map(o => [o.id, o.customer, o.email, o.date, o.total.toFixed(2), o.status, o.method]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `ngx_corporate_orders_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getStatusBadge = status => {
    switch (status) {
      case 'Completed':
        return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20';
      case 'Processing':
        return 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20';
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
          <p className="text-xs text-slate-500 dark:text-slate-400">Manage, Filter, and Export Enterprise Transaction Records</p>
        </div>

        <div className="flex items-center space-x-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search orders, customers..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-64 pl-9 pr-4 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
            />
            <span className="absolute left-3 top-2.5 text-xs text-slate-400">🔍</span>
          </div>

          <button
            onClick={exportToCSV}
            className="px-3.5 py-2 text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl shadow-sm transition-all flex items-center space-x-1.5"
            title="Download Filtered Records as CSV"
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
                  <td className="py-3.5 px-4 font-bold text-indigo-600 dark:text-indigo-400">{order.id}</td>
                  <td className="py-3.5 px-4">
                    <span className="font-semibold text-slate-800 dark:text-slate-200 block">{order.customer}</span>
                    <span className="text-[10px] text-slate-400 block">{order.email}</span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-600 dark:text-slate-300 font-medium">{order.date}</td>
                  <td className="py-3.5 px-4 font-extrabold text-slate-900 dark:text-slate-100">${order.total.toFixed(2)}</td>
                  <td className="py-3.5 px-4">
                    <span className={`px-2.5 py-1 rounded-full border text-[10px] font-bold capitalize ${getStatusBadge(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-500 dark:text-slate-400 font-medium">{order.method}</td>
                  <td className="py-3.5 px-4 text-right">
                    <button className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 font-semibold px-2 py-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700">
                      📄 Invoice
                    </button>
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

      {/* Pagination Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700/60 text-xs">
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
