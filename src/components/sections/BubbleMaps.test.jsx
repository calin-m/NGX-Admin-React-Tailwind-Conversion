import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import BubbleMaps from './BubbleMaps.jsx';

describe('BubbleMaps Corporate Component Suite', () => {
  it('renders correctly without crashing', () => {
    const { container } = render(<BubbleMaps />);
    expect(container.firstChild).toBeDefined();
    expect(screen.getByText(/Bubble Data Map/i)).toBeInTheDocument();
  });
});
