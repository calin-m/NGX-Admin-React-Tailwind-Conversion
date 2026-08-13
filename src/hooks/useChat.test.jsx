import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useChat } from './useChat';

describe('useChat Custom Hook Suite', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('initializes with default contacts and active contact messages', () => {
    const { result } = renderHook(() => useChat());

    expect(result.current.contacts).toHaveLength(3);
    expect(result.current.activeContact.name).toBe('Nick Jones');
    expect(result.current.activeMessages).toHaveLength(2);
  });

  it('switches active contact cleanly', () => {
    const { result } = renderHook(() => useChat());

    act(() => {
      result.current.setActiveContactId('2');
    });

    expect(result.current.activeContact.name).toBe('Eva Green');
    expect(result.current.activeMessages).toHaveLength(1);
  });

  it('sends user message and receives simulated reply', () => {
    const { result } = renderHook(() => useChat());

    act(() => {
      result.current.sendMessage('Hello team!');
    });

    expect(result.current.activeMessages).toHaveLength(3);
    expect(result.current.activeMessages[2].text).toBe('Hello team!');
    expect(result.current.activeMessages[2].sender).toBe('me');

    act(() => {
      vi.advanceTimersByTime(1100);
    });

    expect(result.current.activeMessages).toHaveLength(4);
    expect(result.current.activeMessages[3].sender).toBe('contact');
  });

  it('ignores empty whitespace messages', () => {
    const { result } = renderHook(() => useChat());

    act(() => {
      result.current.sendMessage('   ');
    });

    expect(result.current.activeMessages).toHaveLength(2);
  });
});
