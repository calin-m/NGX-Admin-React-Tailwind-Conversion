import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import TemperatureCard from './TemperatureCard.jsx';

describe('TemperatureCard Corporate Component Suite', () => {
  it('renders correctly without crashing', () => {
    const { container } = render(<TemperatureCard />);
    expect(container.firstChild).toBeDefined();
    expect(screen.getByText(/Temperature Thermostat/i)).toBeInTheDocument();
  });

  it('increments target temperature when plus button is clicked', () => {
    render(<TemperatureCard />);
    expect(screen.getByText(/24°C/i)).toBeInTheDocument();
    const plusButton = screen.getByRole('button', { name: /\+/i });
    fireEvent.click(plusButton);
    expect(screen.getByText(/25°C/i)).toBeInTheDocument();
  });
});
