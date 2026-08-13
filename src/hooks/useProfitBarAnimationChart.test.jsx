import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useProfitBarAnimationChart } from './useProfitBarAnimationChart';

describe('useProfitBarAnimationChart Custom Hook Suite', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('loads initial animation chart metrics', () => {
    const { result } = renderHook(() => useProfitBarAnimationChart('week'));

    expect(result.current.loading).toBe(true);

    act(() => {
      vi.advanceTimersByTime(200);
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.data).toHaveLength(3);
    expect(result.current.data[0].title).toBe('ProfitBarAnimationChart Metric A');
  });

  it('updates animation chart on period switch', () => {
    const { result } = renderHook(() => useProfitBarAnimationChart('week'));

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
