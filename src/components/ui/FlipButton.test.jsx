import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import FlipButton from './FlipButton.jsx';

describe('FlipButton UI Component', () => {
  it('renders correctly with default title', () => {
    render(<FlipButton onFlip={() => {}} />);
    expect(screen.getByTitle('Flip to breakdown')).toBeInTheDocument();
  });

  it('triggers onFlip callback when clicked', () => {
    const handleFlip = vi.fn();
    render(<FlipButton onFlip={handleFlip} />);
    
    fireEvent.click(screen.getByTitle('Flip to breakdown'));
    expect(handleFlip).toHaveBeenCalledTimes(1);
  });
});
