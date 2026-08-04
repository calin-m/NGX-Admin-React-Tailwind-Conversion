import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import Header from './Header.jsx';

describe('Header Corporate Component Suite', () => {
  it('renders correctly without crashing', () => {
    const { container } = render(<Header />);
    expect(container.firstChild).toBeDefined();
    expect(screen.getByText(/Admin User/i)).toBeInTheDocument();
  });
});
