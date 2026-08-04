import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import Maps from './Maps.jsx';

describe('Maps Corporate Component Suite', () => {
  it('renders correctly without crashing', () => {
    const { container } = render(<Maps />);
    expect(container.firstChild).toBeDefined();
    expect(screen.getByText(/Interactive Maps Suite/i)).toBeInTheDocument();
  });
});
