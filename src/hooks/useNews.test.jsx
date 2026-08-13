import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useNews } from './useNews';

describe('useNews Custom Hook Suite', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('loads default articles and supports category filtering', () => {
    const { result } = renderHook(() => useNews());

    expect(result.current.articles).toHaveLength(5);
    expect(result.current.category).toBe('All');

    act(() => {
      result.current.filterCategory('Tech');
    });

    expect(result.current.category).toBe('Tech');
    expect(result.current.articles).toHaveLength(1);
    expect(result.current.articles[0].category).toBe('Tech');
  });

  it('handles loadMore pagination action', () => {
    const { result } = renderHook(() => useNews());

    act(() => {
      result.current.loadMore();
    });

    expect(result.current.isLoading).toBe(true);

    act(() => {
      vi.advanceTimersByTime(900);
    });

    expect(result.current.isLoading).toBe(false);
    expect(result.current.articles).toHaveLength(6);
  });
});
