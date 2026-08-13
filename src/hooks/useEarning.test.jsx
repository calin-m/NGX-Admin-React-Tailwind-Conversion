import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useEarning } from './useEarning';

describe('useEarning Custom Hook Suite', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('loads earning dataset for default week period', () => {
    const { result } = renderHook(() => useEarning('week'));

    expect(result.current.loading).toBe(true);

    act(() => {
      vi.advanceTimersByTime(150);
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.data.totalEarnings).toBe('$64.2k');
    expect(result.current.data.portfolio).toHaveLength(3);
  });

  it('loads monthly and yearly earning datasets on period switch', () => {
    const { result } = renderHook(() => useEarning('month'));

    act(() => {
      vi.advanceTimersByTime(150);
    });

    expect(result.current.data.totalEarnings).toBe('$284.5k');

    act(() => {
      result.current.setPeriod('year');
    });

    act(() => {
      vi.advanceTimersByTime(150);
    });

    expect(result.current.data.totalEarnings).toBe('$1.42M');
  });
});
