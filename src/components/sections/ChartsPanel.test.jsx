import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import ChartsPanel from './ChartsPanel.jsx';

describe('ChartsPanel Corporate Component Suite', () => {
  it('renders correctly without crashing', () => {
    const { container } = render(<ChartsPanel />);
    expect(container.firstChild).toBeDefined();
    expect(screen.getByText(/Orders Chart/i)).toBeInTheDocument();
  });
});
