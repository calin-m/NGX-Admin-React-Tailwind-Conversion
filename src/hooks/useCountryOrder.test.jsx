import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useCountryOrder } from './useCountryOrder';

describe('useCountryOrder Custom Hook Suite', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('initializes with default period and loads country metrics', () => {
    const { result } = renderHook(() => useCountryOrder('week'));

    expect(result.current.period).toBe('week');
    expect(result.current.loading).toBe(true);

    act(() => {
      vi.advanceTimersByTime(200);
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.data).toHaveLength(3);
    expect(result.current.data[0].title).toBe('CountryOrder Metric A');
  });

  it('updates metrics when switching period', () => {
    const { result } = renderHook(() => useCountryOrder('week'));

    act(() => {
      vi.advanceTimersByTime(200);
    });

    act(() => {
      result.current.setPeriod('year');
    });

    expect(result.current.period).toBe('year');
    expect(result.current.loading).toBe(true);

    act(() => {
      vi.advanceTimersByTime(200);
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.data[0].period).toBe('year');
  });
});
