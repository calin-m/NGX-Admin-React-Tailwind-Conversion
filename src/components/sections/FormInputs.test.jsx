import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import FormInputs from './FormInputs.jsx';

describe('FormInputs Corporate Component Suite', () => {
  it('renders correctly without crashing', () => {
    const { container } = render(<FormInputs />);
    expect(container.firstChild).toBeDefined();
    expect(screen.getByText(/Form Controls & Inputs/i)).toBeInTheDocument();
  });
});
