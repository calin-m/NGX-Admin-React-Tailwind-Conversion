import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import CardHeader from './CardHeader.jsx';

describe('CardHeader UI Component', () => {
  it('renders title, subtitle, and icon correctly', () => {
    render(<CardHeader icon="💎" title="Total Revenue" subtitle="Monthly Summary" />);
    expect(screen.getByText('Total Revenue')).toBeInTheDocument();
    expect(screen.getByText('Monthly Summary')).toBeInTheDocument();
    expect(screen.getByText('💎')).toBeInTheDocument();
  });

  it('renders action slot element when provided', () => {
    render(<CardHeader title="Card Title" action={<button>Action</button>} />);
    expect(screen.getByText('Action')).toBeInTheDocument();
  });
});
