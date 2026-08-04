import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import StatsCardFront from './StatsCardFront.jsx';

describe('StatsCardFront Corporate Component Suite', () => {
  it('renders correctly without crashing', () => {
    const { container } = render(<StatsCardFront />);
    expect(container).toBeDefined();
    expect(screen.getByText('StatsCardFront')).toBeInTheDocument();
  });
});
