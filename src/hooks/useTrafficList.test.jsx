import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useTrafficList } from './useTrafficList';

describe('useTrafficList Custom Hook Suite', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('initializes with default period and fetches traffic data', () => {
    const { result } = renderHook(() => useTrafficList('week'));

    expect(result.current.period).toBe('week');
    expect(result.current.loading).toBe(true);

    act(() => {
      vi.advanceTimersByTime(200);
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.data).toHaveLength(3);
    expect(result.current.data[0].title).toBe('TrafficList Metric A');
  });

  it('handles period updates', () => {
    const { result } = renderHook(() => useTrafficList('week'));

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

    expect(result.current.loading).toBe(false);
    expect(result.current.data[0].period).toBe('month');
  });
});
