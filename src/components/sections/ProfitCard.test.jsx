import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import ProfitCard from './ProfitCard.jsx';

describe('ProfitCard Corporate Component Suite', () => {
  it('renders correctly without crashing', () => {
    const { container } = render(<ProfitCard />);
    expect(container.firstChild).toBeDefined();
    expect(screen.getByText(/Profit Analytics/i)).toBeInTheDocument();
  });
});
