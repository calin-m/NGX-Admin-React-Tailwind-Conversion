import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useTrafficChart } from './useTrafficChart';

describe('useTrafficChart Custom Hook Suite', () => {
  it('loads weekly traffic sessions by default', () => {
    const { result } = renderHook(() => useTrafficChart('week'));

    expect(result.current.period).toBe('week');
    expect(result.current.data.totalSessions).toBe('142,850');
    expect(result.current.data.categories).toHaveLength(4);
  });

  it('updates traffic sessions when switching period', () => {
    const { result } = renderHook(() => useTrafficChart('week'));

    act(() => {
      result.current.setPeriod('month');
    });

    expect(result.current.period).toBe('month');
    expect(result.current.data.totalSessions).toBe('618,400');

    act(() => {
      result.current.setPeriod('year');
    });

    expect(result.current.period).toBe('year');
    expect(result.current.data.totalSessions).toBe('7,890,000');
  });
});
