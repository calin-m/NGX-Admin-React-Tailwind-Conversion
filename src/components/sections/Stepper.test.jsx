import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import Stepper from './Stepper.jsx';

describe('Stepper Corporate Component Suite', () => {
  it('renders correctly without crashing', () => {
    const { container } = render(<Stepper />);
    expect(container.firstChild).toBeDefined();
    expect(screen.getByText(/Multi-Step Form Wizard/i)).toBeInTheDocument();
  });
});
