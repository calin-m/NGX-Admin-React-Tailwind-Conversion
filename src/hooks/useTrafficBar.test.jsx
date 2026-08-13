import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useTrafficBar } from './useTrafficBar';

describe('useTrafficBar Custom Hook Suite', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('loads daily traffic bar comparison metrics', () => {
    const { result } = renderHook(() => useTrafficBar());

    expect(result.current.loading).toBe(true);

    act(() => {
      vi.advanceTimersByTime(150);
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.data).toHaveLength(7);
    expect(result.current.data[0].day).toBe('Mon');
    expect(result.current.data[0].value).toBe(300);
  });
});
