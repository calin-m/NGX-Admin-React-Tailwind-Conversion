import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import Window from './Window.jsx';

describe('Window Corporate Component Suite', () => {
  it('renders correctly without crashing', () => {
    const { container } = render(<Window />);
    expect(container.firstChild).toBeDefined();
    expect(screen.getByText(/Floating Window/i)).toBeInTheDocument();
  });
});

