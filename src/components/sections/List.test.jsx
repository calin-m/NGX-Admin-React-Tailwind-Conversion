import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import List from './List.jsx';

describe('List Corporate Component Suite', () => {
  it('renders correctly without crashing', () => {
    const { container } = render(<List />);
    expect(container.firstChild).toBeDefined();
    expect(screen.getByText(/Users List/i)).toBeInTheDocument();
  });
});
