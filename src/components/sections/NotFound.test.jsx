import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import NotFound from './NotFound.jsx';

describe('NotFound Corporate Component Suite', () => {
  it('renders correctly without crashing', () => {
    const { container } = render(<NotFound />);
    expect(container.firstChild).toBeDefined();
    expect(screen.getByText(/Page Not Found/i)).toBeInTheDocument();
  });
});
