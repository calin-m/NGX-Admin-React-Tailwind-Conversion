import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import EarningCardFront from './EarningCardFront.jsx';

describe('EarningCardFront Corporate Component Suite', () => {
  it('renders correctly without crashing', () => {
    const { container } = render(<EarningCardFront />);
    expect(container).toBeDefined();
    expect(screen.getByText('EarningCardFront')).toBeInTheDocument();
  });
});
