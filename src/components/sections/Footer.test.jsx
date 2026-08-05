import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import Footer from './Footer.jsx';

describe('Footer Corporate Component Suite', () => {
  it('renders correctly without crashing', () => {
    const { container } = render(<Footer />);
    expect(container.firstChild).toBeDefined();
    expect(screen.getByText(/Calin M/i)).toBeInTheDocument();

  });
});
