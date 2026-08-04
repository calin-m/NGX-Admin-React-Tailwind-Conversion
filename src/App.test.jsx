import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import App from './App.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';
import { AuthProvider } from './context/AuthContext.jsx';

describe('App Auto-Generated Test Suite', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <ThemeProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ThemeProvider>
    );
    expect(container.firstChild).toBeDefined();
  });
});
