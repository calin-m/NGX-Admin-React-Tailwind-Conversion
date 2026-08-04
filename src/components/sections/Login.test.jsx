import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import Login from './Login.jsx';

describe('Login Corporate Component Suite', () => {
  it('renders correctly without crashing', () => {
    const { container } = render(<Login />);
    expect(container.firstChild).toBeDefined();
    expect(screen.getByText(/Sign In to NGX Admin/i)).toBeInTheDocument();
  });
});
