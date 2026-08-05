import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import LeafletMaps from './LeafletMaps.jsx';

describe('LeafletMaps Corporate Component Suite', () => {
  it('renders correctly without crashing', () => {
    const { container } = render(<LeafletMaps />);
    expect(container.firstChild).toBeDefined();
    expect(screen.getByText(/Leaflet OpenStreetMap Layer/i)).toBeInTheDocument();
  });
});

