import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import EarningCard from './EarningCard.jsx';

describe('EarningCard Corporate Component Suite', () => {
  it('renders correctly without crashing', () => {
    const { container } = render(<EarningCard />);
    expect(container.firstChild).toBeDefined();
    expect(screen.getByText(/Earning Live Stats/i)).toBeInTheDocument();
  });
});
