import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import Grid from './Grid.jsx';

describe('Grid Corporate Component Suite', () => {
  it('renders correctly without crashing', () => {
    const { container } = render(<Grid />);
    expect(container.firstChild).toBeDefined();
    expect(screen.getByText(/Responsive Grid Layout/i)).toBeInTheDocument();
  });
});
