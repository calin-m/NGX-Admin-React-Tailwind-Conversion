import React, { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import ClearableInput from './ClearableInput.jsx';

function ControlledWrapper() {
  const [val, setVal] = useState('Initial Text');
  return (
    <ClearableInput
      value={val}
      onChange={e => setVal(e.target.value)}
      onClear={() => setVal('')}
      placeholder="Type here..."
    />
  );
}

describe('ClearableInput UI Component', () => {
  it('renders correctly with initial value and shows ✕ ESC badge', () => {
    render(<ControlledWrapper />);
    const input = screen.getByPlaceholderText('Type here...');
    expect(input).toHaveValue('Initial Text');
    expect(screen.getByTitle(/Clear field/i)).toBeInTheDocument();
  });

  it('clears value on ✕ ESC badge click', () => {
    render(<ControlledWrapper />);
    const clearBtn = screen.getByTitle(/Clear field/i);
    fireEvent.click(clearBtn);
    
    const input = screen.getByPlaceholderText('Type here...');
    expect(input).toHaveValue('');
  });

  it('clears value on Escape keypress', () => {
    render(<ControlledWrapper />);
    const input = screen.getByPlaceholderText('Type here...');
    fireEvent.keyDown(input, { key: 'Escape' });
    expect(input).toHaveValue('');
  });
});
