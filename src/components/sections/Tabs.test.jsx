import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import Tabs from './Tabs.jsx';

describe('Tabs Corporate Component Suite', () => {
  it('renders correctly without crashing', () => {
    const { container } = render(<Tabs />);
    expect(container.firstChild).toBeDefined();
    expect(screen.getByText(/Tab 1: Overview/i)).toBeInTheDocument();
  });
});
