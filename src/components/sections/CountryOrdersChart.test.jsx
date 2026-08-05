import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import CountryOrdersChart from './CountryOrdersChart.jsx';

describe('CountryOrdersChart Corporate Component Suite', () => {
  it('renders correctly without crashing', () => {
    const { container } = render(<CountryOrdersChart />);
    expect(container).toBeDefined();
    expect(screen.getByText(/Country Orders Breakdown/i)).toBeInTheDocument();
  });
});

