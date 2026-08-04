import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import SolarCard from './SolarCard.jsx';

describe('SolarCard Corporate Component Suite', () => {
  it('renders correctly without crashing', () => {
    const { container } = render(<SolarCard />);
    expect(container.firstChild).toBeDefined();
    expect(screen.getByText(/Solar Energy Output/i)).toBeInTheDocument();
  });
});
