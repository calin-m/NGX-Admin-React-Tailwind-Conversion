import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import Icons from './Icons.jsx';

describe('Icons Corporate Component Suite', () => {
  it('renders correctly without crashing', () => {
    const { container } = render(<Icons />);
    expect(container.firstChild).toBeDefined();
    expect(screen.getByText(/Icon Gallery Catalog/i)).toBeInTheDocument();
  });
});
