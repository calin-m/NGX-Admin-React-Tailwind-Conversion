import { useState, useMemo } from 'react';

export default function useSmartTableData() {
  const initialOrders = [
    { id: 'ORD-8492', customer: 'Sarah Jenkins', email: 'sarah.j@example.com', date: '2026-08-04', total: 1250.00, status: 'Completed', method: 'Credit Card' },
    { id: 'ORD-8491', customer: 'Michael Chen', email: 'm.chen@techcorp.io', date: '2026-08-04', total: 840.50, status: 'Processing', method: 'PayPal' },
    { id: 'ORD-8490', customer: 'Elena Rostova', email: 'elena@designstudio.de', date: '2026-08-03', total: 3200.00, status: 'Completed', method: 'Wire Transfer' },
    { id: 'ORD-8489', customer: 'David K. Miller', email: 'd.miller@global.net', date: '2026-08-03', total: 450.25, status: 'Pending', method: 'Credit Card' },
    { id: 'ORD-8488', customer: 'Amara Okafor', email: 'amara@ventures.co.uk', date: '2026-08-02', total: 1950.00, status: 'Completed', method: 'Apple Pay' },
    { id: 'ORD-8487', customer: 'Lucas Vance', email: 'lucas@vance.org', date: '2026-08-02', total: 610.00, status: 'Refunded', method: 'Credit Card' },
    { id: 'ORD-8486', customer: 'Sofia Rodriguez', email: 'sofia@creative.es', date: '2026-08-01', total: 2750.00, status: 'Completed', method: 'PayPal' },
    { id: 'ORD-8485', customer: 'Jameson Blake', email: 'jblake@enterprise.ca', date: '2026-08-01', total: 1120.00, status: 'Processing', method: 'Wire Transfer' }
  ];

  const [orders, setOrders] = useState(initialOrders);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState('date');
  const [sortDirection, setSortDirection] = useState('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleSort = field => {
    if (sortField === field) {
      setSortDirection(prev => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const filteredOrders = useMemo(() => {
    return orders.filter(order => {
      const term = searchTerm.toLowerCase();
      return (
        order.id.toLowerCase().includes(term) ||
        order.customer.toLowerCase().includes(term) ||
        order.email.toLowerCase().includes(term) ||
        order.status.toLowerCase().includes(term) ||
        order.method.toLowerCase().includes(term)
      );
    });
  }, [orders, searchTerm]);

  const sortedOrders = useMemo(() => {
    return [...filteredOrders].sort((a, b) => {
      let aVal = a[sortField];
      let bVal = b[sortField];

      if (typeof aVal === 'string') aVal = aVal.toLowerCase();
      if (typeof bVal === 'string') bVal = bVal.toLowerCase();

      if (aVal < bVal) return sortDirection === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }, [filteredOrders, sortField, sortDirection]);

  const paginatedOrders = useMemo(() => {
    const start = (currentPage - 1) * rowsPerPage;
    return sortedOrders.slice(start, start + rowsPerPage);
  }, [sortedOrders, currentPage, rowsPerPage]);

  const totalPages = Math.ceil(sortedOrders.length / rowsPerPage) || 1;

  return {
    orders: paginatedOrders,
    totalRecords: sortedOrders.length,
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
  };
}
