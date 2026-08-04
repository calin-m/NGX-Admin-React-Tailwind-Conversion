import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import ElectricityCard from './ElectricityCard.jsx';

describe('ElectricityCard Corporate Component Suite', () => {
  it('renders correctly without crashing', () => {
    const { container } = render(<ElectricityCard />);
    expect(container.firstChild).toBeDefined();
    expect(screen.getByText(/Electricity Consumption/i)).toBeInTheDocument();
  });
});
