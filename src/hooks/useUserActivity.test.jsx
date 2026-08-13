import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useUserActivity } from './useUserActivity';

describe('useUserActivity Custom Hook Suite', () => {
  it('loads weekly user activity by default', () => {
    const { result } = renderHook(() => useUserActivity('week'));

    expect(result.current.period).toBe('week');
    expect(result.current.data).toHaveLength(7);
    expect(result.current.data[0].date).toBe('Mon');
  });

  it('updates activity dataset on period change', () => {
    const { result } = renderHook(() => useUserActivity('week'));

    act(() => {
      result.current.setPeriod('month');
    });

    expect(result.current.period).toBe('month');
    expect(result.current.data).toHaveLength(4);

    act(() => {
      result.current.setPeriod('year');
    });

    expect(result.current.period).toBe('year');
    expect(result.current.data).toHaveLength(4);
    expect(result.current.data[0].date).toBe('Q1');
  });
});
