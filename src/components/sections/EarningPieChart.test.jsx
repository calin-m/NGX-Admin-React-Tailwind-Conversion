import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import EarningPieChart from './EarningPieChart.jsx';

describe('EarningPieChart Corporate Component Suite', () => {
  it('renders correctly without crashing', () => {
    const { container } = render(<EarningPieChart />);
    expect(container).toBeDefined();
    expect(screen.getByText('EarningPieChart')).toBeInTheDocument();
  });
});
