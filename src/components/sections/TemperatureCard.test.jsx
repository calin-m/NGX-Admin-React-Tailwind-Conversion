import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import TemperatureCard from './TemperatureCard.jsx';

describe('TemperatureCard Corporate Component Suite', () => {
  it('renders correctly without crashing', () => {
    const { container } = render(<TemperatureCard />);
    expect(container.firstChild).toBeDefined();
    expect(screen.getByText(/Temperature Thermostat/i)).toBeInTheDocument();
  });
});
