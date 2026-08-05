import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import ProfitChart from './ProfitChart.jsx';

describe('ProfitChart Corporate Component Suite', () => {
  it('renders correctly without crashing', () => {
    const { container } = render(<ProfitChart />);
    expect(container).toBeDefined();
    expect(screen.getByText(/Corporate Profit Metrics/i)).toBeInTheDocument();
  });
});

