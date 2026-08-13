import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useStatsProgressBar } from './useStatsProgressBar';

describe('useStatsProgressBar Custom Hook Suite', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('loads initial stats progress metrics', () => {
    const { result } = renderHook(() => useStatsProgressBar('week'));

    expect(result.current.loading).toBe(true);

    act(() => {
      vi.advanceTimersByTime(200);
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.data).toHaveLength(3);
    expect(result.current.data[0].title).toBe('StatsProgressBar Metric A');
  });

  it('updates stats progress data on period switch', () => {
    const { result } = renderHook(() => useStatsProgressBar('week'));

    act(() => {
      vi.advanceTimersByTime(200);
    });

    act(() => {
      result.current.setPeriod('year');
    });

    expect(result.current.period).toBe('year');

    act(() => {
      vi.advanceTimersByTime(200);
    });

    expect(result.current.data[0].period).toBe('year');
  });
});
