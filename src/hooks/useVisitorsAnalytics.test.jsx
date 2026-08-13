import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useVisitorsAnalytics } from './useVisitorsAnalytics';

describe('useVisitorsAnalytics Custom Hook Suite', () => {
  it('loads weekly visitor analytics by default', () => {
    const { result } = renderHook(() => useVisitorsAnalytics('week'));

    expect(result.current.period).toBe('week');
    expect(result.current.data.totalVisits).toBe('15,100');
    expect(result.current.data.chartPoints).toHaveLength(7);
  });

  it('switches to monthly and yearly visitor analytics datasets', () => {
    const { result } = renderHook(() => useVisitorsAnalytics('week'));

    act(() => {
      result.current.setPeriod('month');
    });

    expect(result.current.period).toBe('month');
    expect(result.current.data.totalVisits).toBe('64,800');
    expect(result.current.data.chartPoints).toHaveLength(4);

    act(() => {
      result.current.setPeriod('year');
    });

    expect(result.current.period).toBe('year');
    expect(result.current.data.totalVisits).toBe('840,000');
    expect(result.current.data.chartPoints).toHaveLength(4);
  });
});
