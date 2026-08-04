import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import CountryOrders from './CountryOrders.jsx';

describe('CountryOrders Corporate Component Suite', () => {
  it('renders correctly without crashing', () => {
    const { container } = render(<CountryOrders />);
    expect(container.firstChild).toBeDefined();
    expect(screen.getByText(/Global Country Orders/i)).toBeInTheDocument();
  });
});
