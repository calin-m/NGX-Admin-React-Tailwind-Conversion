import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { usePeriods } from './usePeriods';

describe('usePeriods Custom Hook Suite', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('initializes with default period and loads period metric dataset', () => {
    const { result } = renderHook(() => usePeriods('week'));

    expect(result.current.period).toBe('week');
    expect(result.current.loading).toBe(true);

    act(() => {
      vi.advanceTimersByTime(200);
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.data).toHaveLength(3);
    expect(result.current.data[0].period).toBe('week');
  });

  it('updates data when period changes', () => {
    const { result } = renderHook(() => usePeriods('week'));

    act(() => {
      vi.advanceTimersByTime(200);
    });

    expect(result.current.period).toBe('week');

    act(() => {
      result.current.setPeriod('month');
    });

    expect(result.current.period).toBe('month');
    expect(result.current.loading).toBe(true);

    act(() => {
      vi.advanceTimersByTime(200);
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.data[0].period).toBe('month');
  });
});
