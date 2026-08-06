import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import PeriodSelector from './PeriodSelector.jsx';

describe('PeriodSelector UI Component', () => {
  it('renders period options correctly', () => {
    render(<PeriodSelector periods={['week', 'month', 'year']} selected="week" onChange={() => {}} />);
    expect(screen.getByText('week')).toBeInTheDocument();
    expect(screen.getByText('month')).toBeInTheDocument();
    expect(screen.getByText('year')).toBeInTheDocument();
  });

  it('triggers onChange callback when a period button is clicked', () => {
    const handleChange = vi.fn();
    render(<PeriodSelector periods={['week', 'month', 'year']} selected="week" onChange={handleChange} />);
    
    fireEvent.click(screen.getByText('month'));
    expect(handleChange).toHaveBeenCalledWith('month');
  });
});
