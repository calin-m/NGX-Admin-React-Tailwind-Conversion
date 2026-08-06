import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import Login from './Login.jsx';
import { AuthProvider } from '../../context/AuthContext.jsx';

describe('Login Corporate Component Suite', () => {
  it('renders correctly without crashing', () => {
    const { container } = render(
      <AuthProvider>
        <Login />
      </AuthProvider>
    );
    expect(container.firstChild).toBeDefined();
    expect(screen.getByText(/Enterprise Login/i)).toBeInTheDocument();
  });
});
