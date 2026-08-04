import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import EarningCard from './EarningCard.jsx';

describe('EarningCard Corporate Component Suite', () => {
  it('renders correctly without crashing', () => {
    const { container } = render(<EarningCard />);
    expect(container).toBeDefined();
    expect(screen.getByText('EarningCard')).toBeInTheDocument();
  });
});
