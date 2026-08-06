import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import ToggleSwitch from './ToggleSwitch.jsx';

describe('ToggleSwitch UI Component', () => {
  it('renders with correct ARIA attributes', () => {
    render(<ToggleSwitch enabled={true} label="Dark Mode" />);
    const switchEl = screen.getByRole('switch');
    expect(switchEl).toHaveAttribute('aria-checked', 'true');
  });

  it('triggers onChange callback when toggled', () => {
    const handleChange = vi.fn();
    render(<ToggleSwitch enabled={false} onChange={handleChange} label="Toggle Light" />);
    
    fireEvent.click(screen.getByRole('switch'));
    expect(handleChange).toHaveBeenCalledWith(true);
  });
});
