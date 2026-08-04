import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import TreeGrid from './TreeGrid.jsx';

describe('TreeGrid Corporate Component Suite', () => {
  it('renders correctly without crashing', () => {
    const { container } = render(<TreeGrid />);
    expect(container.firstChild).toBeDefined();
    expect(screen.getByText(/Hierarchical Tree Grid Table/i)).toBeInTheDocument();
  });
});
