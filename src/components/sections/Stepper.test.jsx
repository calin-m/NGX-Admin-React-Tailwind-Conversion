import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import Stepper from './Stepper.jsx';

describe('Stepper Corporate Component Suite', () => {
  it('renders correctly without crashing', () => {
    const { container } = render(<Stepper />);
    expect(container.firstChild).toBeDefined();
    expect(screen.getByText(/Multi-Step Form Wizard/i)).toBeInTheDocument();
  });

  it('navigates to next step on Next button click', () => {
    render(<Stepper />);
    const nextButtons = screen.getAllByRole('button', { name: /next/i });
    expect(nextButtons.length).toBeGreaterThan(0);
    fireEvent.click(nextButtons[0]);
    expect(screen.getAllByText(/Personal Info/i).length).toBeGreaterThan(0);
  });
});
