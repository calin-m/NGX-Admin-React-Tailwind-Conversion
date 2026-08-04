import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import FormLayouts from './FormLayouts.jsx';

describe('FormLayouts Corporate Component Suite', () => {
  it('renders correctly without crashing', () => {
    const { container } = render(<FormLayouts />);
    expect(container.firstChild).toBeDefined();
    expect(screen.getByText(/Form Layout Templates/i)).toBeInTheDocument();
  });
});
