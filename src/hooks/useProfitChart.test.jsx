import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useProfitChart } from './useProfitChart';

describe('useProfitChart Custom Hook Suite', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('loads initial profit chart metrics', () => {
    const { result } = renderHook(() => useProfitChart('week'));

    expect(result.current.loading).toBe(true);

    act(() => {
      vi.advanceTimersByTime(200);
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.data).toHaveLength(3);
    expect(result.current.data[0].title).toBe('ProfitChart Metric A');
  });

  it('updates profit chart data on period change', () => {
    const { result } = renderHook(() => useProfitChart('week'));

    act(() => {
      vi.advanceTimersByTime(200);
    });

    act(() => {
      result.current.setPeriod('month');
    });

    expect(result.current.period).toBe('month');

    act(() => {
      vi.advanceTimersByTime(200);
    });

    expect(result.current.data[0].period).toBe('month');
  });
});
