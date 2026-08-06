import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import CircularProgress from './CircularProgress.jsx';

describe('CircularProgress UI Component', () => {
  it('renders percentage text correctly by default', () => {
    render(<CircularProgress value={75} />);
    expect(screen.getByText('75%')).toBeInTheDocument();
  });

  it('renders custom label when provided', () => {
    render(<CircularProgress value={50} label={<span>Halfway</span>} />);
    expect(screen.getByText('Halfway')).toBeInTheDocument();
  });
});
