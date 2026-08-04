import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import WeatherCard from './WeatherCard.jsx';

describe('WeatherCard Corporate Component Suite', () => {
  it('renders correctly without crashing', () => {
    const { container } = render(<WeatherCard />);
    expect(container.firstChild).toBeDefined();
    expect(screen.getByText(/San Francisco/i)).toBeInTheDocument();
  });
});
