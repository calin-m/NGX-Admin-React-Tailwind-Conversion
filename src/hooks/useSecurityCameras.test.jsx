import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useSecurityCameras } from './useSecurityCameras';

describe('useSecurityCameras Custom Hook Suite', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('loads security camera feeds and initializes with camera #1 selected', () => {
    const { result } = renderHook(() => useSecurityCameras());

    expect(result.current.loading).toBe(true);

    act(() => {
      vi.advanceTimersByTime(150);
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.cameras).toHaveLength(4);
    expect(result.current.selectedCamera.title).toBe('Camera #1');
  });

  it('switches active selected camera', () => {
    const { result } = renderHook(() => useSecurityCameras());

    act(() => {
      vi.advanceTimersByTime(150);
    });

    act(() => {
      result.current.setSelectedCamera(result.current.cameras[2]);
    });

    expect(result.current.selectedCamera.title).toBe('Camera #3');
    expect(result.current.selectedCamera.status).toBe('Paused');
  });
});
