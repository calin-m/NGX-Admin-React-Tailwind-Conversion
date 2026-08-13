import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useSolar } from './useSolar';

describe('useSolar Custom Hook Suite', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('loads solar mode metrics by default', () => {
    const { result } = renderHook(() => useSolar('solar'));

    expect(result.current.loading).toBe(true);

    act(() => {
      vi.advanceTimersByTime(150);
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.data.title).toBe('Solar Energy Output');
    expect(result.current.data.value).toBe('84%');
  });

  it('switches to battery storage mode dynamically', () => {
    const { result } = renderHook(() => useSolar('solar'));

    act(() => {
      vi.advanceTimersByTime(150);
    });

    act(() => {
      result.current.setMode('battery');
    });

    act(() => {
      vi.advanceTimersByTime(150);
    });

    expect(result.current.data.title).toBe('Battery Energy Storage');
    expect(result.current.data.value).toBe('92%');
  });
});
