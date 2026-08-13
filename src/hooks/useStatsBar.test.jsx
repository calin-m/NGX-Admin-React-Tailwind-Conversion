import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useStatsBar } from './useStatsBar';

describe('useStatsBar Custom Hook Suite', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('loads initial stats bar metrics', () => {
    const { result } = renderHook(() => useStatsBar('week'));

    expect(result.current.loading).toBe(true);

    act(() => {
      vi.advanceTimersByTime(200);
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.data).toHaveLength(3);
    expect(result.current.data[0].title).toBe('StatsBar Metric A');
  });

  it('updates stats bar data on period change', () => {
    const { result } = renderHook(() => useStatsBar('week'));

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
