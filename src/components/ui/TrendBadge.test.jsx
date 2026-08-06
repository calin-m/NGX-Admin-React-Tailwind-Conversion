import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import TrendBadge from './TrendBadge.jsx';

describe('TrendBadge UI Component', () => {
  it('renders positive growth badge correctly', () => {
    render(<TrendBadge value="+14.5%" type="positive" />);
    expect(screen.getByText('+14.5%')).toBeInTheDocument();
  });

  it('renders negative trend badge correctly', () => {
    render(<TrendBadge value="-3.2%" type="negative" />);
    expect(screen.getByText('-3.2%')).toBeInTheDocument();
  });
});
