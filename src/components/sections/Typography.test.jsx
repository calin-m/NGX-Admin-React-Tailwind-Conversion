import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import Typography from './Typography.jsx';

describe('Typography Corporate Component Suite', () => {
  it('renders correctly without crashing', () => {
    const { container } = render(<Typography />);
    expect(container.firstChild).toBeDefined();
    expect(screen.getByText(/Typography & Scale/i)).toBeInTheDocument();
  });
});
