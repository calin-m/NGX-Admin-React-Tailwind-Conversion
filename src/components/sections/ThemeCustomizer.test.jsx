import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import ThemeCustomizer from './ThemeCustomizer.jsx';

describe('ThemeCustomizer Corporate Component Suite', () => {
  it('renders correctly when open', () => {
    const { container } = render(<ThemeCustomizer isOpen={true} onClose={() => {}} />);
    expect(container.firstChild).toBeDefined();
    expect(screen.getByText(/Theme Customizer/i)).toBeInTheDocument();
  });
});
