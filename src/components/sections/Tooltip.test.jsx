import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import Tooltip from './Tooltip.jsx';

describe('Tooltip Corporate Component Suite', () => {
  it('renders correctly without crashing', () => {
    const { container } = render(<Tooltip />);
    expect(container.firstChild).toBeDefined();
    expect(screen.getByText(/Tooltip Showcase/i)).toBeInTheDocument();
  });
});

