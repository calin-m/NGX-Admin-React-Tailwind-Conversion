import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import ResetPassword from './ResetPassword.jsx';

describe('ResetPassword Corporate Component Suite', () => {
  it('renders correctly without crashing', () => {
    const { container } = render(<ResetPassword />);
    expect(container.firstChild).toBeDefined();
    expect(screen.getByText(/Reset Password/i)).toBeInTheDocument();
  });
});
