import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useElectricity } from './useElectricity';

describe('useElectricity Custom Hook Suite', () => {
  it('loads electricity consumption data for default year', () => {
    const { result } = renderHook(() => useElectricity('2026'));

    expect(result.current.year).toBe('2026');
    expect(result.current.data.totalKwh).toBe('2,980 kWh YTD');
    expect(result.current.data.usage).toHaveLength(7);
  });

  it('switches consumption dataset when changing year', () => {
    const { result } = renderHook(() => useElectricity('2026'));

    act(() => {
      result.current.setYear('2025');
    });

    expect(result.current.year).toBe('2025');
    expect(result.current.data.totalKwh).toBe('3,840 kWh');
    expect(result.current.data.usage).toHaveLength(12);
  });
});
