import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import useSmartTableData from './useSmartTableData';

describe('useSmartTableData Custom Hook Suite', () => {
  it('loads initial orders and pagination parameters', () => {
    const { result } = renderHook(() => useSmartTableData());

    expect(result.current.totalRecords).toBe(8);
    expect(result.current.currentPage).toBe(1);
    expect(result.current.rowsPerPage).toBe(5);
    expect(result.current.orders).toHaveLength(5);
    expect(result.current.totalPages).toBe(2);
  });

  it('filters orders by search term across fields', () => {
    const { result } = renderHook(() => useSmartTableData());

    act(() => {
      result.current.setSearchTerm('Jenkins');
    });

    expect(result.current.orders).toHaveLength(1);
    expect(result.current.orders[0].customer).toBe('Sarah Jenkins');
    expect(result.current.totalRecords).toBe(1);

    act(() => {
      result.current.setSearchTerm('PayPal');
    });

    expect(result.current.totalRecords).toBe(2);
  });

  it('handles column sorting in ascending and descending orders', () => {
    const { result } = renderHook(() => useSmartTableData());

    act(() => {
      result.current.handleSort('total');
    });

    expect(result.current.sortField).toBe('total');
    expect(result.current.sortDirection).toBe('asc');
    expect(result.current.orders[0].total).toBe(450.25);

    act(() => {
      result.current.handleSort('total');
    });

    expect(result.current.sortDirection).toBe('desc');
    expect(result.current.orders[0].total).toBe(3200.00);
  });

  it('handles pagination page navigation', () => {
    const { result } = renderHook(() => useSmartTableData());

    act(() => {
      result.current.setCurrentPage(2);
    });

    expect(result.current.currentPage).toBe(2);
    expect(result.current.orders).toHaveLength(3);
  });
});
