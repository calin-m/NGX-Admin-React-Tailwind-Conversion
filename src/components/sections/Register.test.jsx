import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import Register from './Register.jsx';

describe('Register Corporate Component Suite', () => {
  it('renders correctly without crashing', () => {
    const { container } = render(<Register />);
    expect(container.firstChild).toBeDefined();
    expect(screen.getByText(/Create Account/i)).toBeInTheDocument();
  });
});
