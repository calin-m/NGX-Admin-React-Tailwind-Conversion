import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import GoogleMaps from './GoogleMaps.jsx';

describe('GoogleMaps Corporate Component Suite', () => {
  it('renders correctly without crashing', () => {
    const { container } = render(<GoogleMaps />);
    expect(container.firstChild).toBeDefined();
    expect(screen.getByText(/Google Maps Direct Integration/i)).toBeInTheDocument();
  });
});
