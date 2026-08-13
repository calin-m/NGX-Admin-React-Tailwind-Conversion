import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useTemperatureHumidity } from './useTemperatureHumidity';

describe('useTemperatureHumidity Custom Hook Suite', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('loads IoT temperature and humidity telemetry data', () => {
    const { result } = renderHook(() => useTemperatureHumidity());

    expect(result.current.loading).toBe(true);

    act(() => {
      vi.advanceTimersByTime(150);
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.data.targetTemp).toBe(24);
    expect(result.current.data.humidity).toBe('52%');
    expect(result.current.data.modes).toHaveLength(3);
  });
});
