import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import TrafficRevealCard from './TrafficRevealCard.jsx';

describe('TrafficRevealCard Corporate Component Suite', () => {
  it('renders correctly without crashing', () => {
    const { container } = render(<TrafficRevealCard />);
    expect(container.firstChild).toBeDefined();
    expect(screen.getByText(/Traffic Source/i)).toBeInTheDocument();
  });
});
