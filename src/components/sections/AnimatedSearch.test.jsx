import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import AnimatedSearch from './AnimatedSearch.jsx';

describe('AnimatedSearch Corporate Component Suite', () => {
  it('renders correctly without crashing', () => {
    const { container } = render(<AnimatedSearch />);
    expect(container.firstChild).toBeDefined();
    expect(screen.getByText(/Animated Search Field/i)).toBeInTheDocument();
  });
});
