import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import ProgressBar from './ProgressBar.jsx';

describe('ProgressBar Corporate Component Suite', () => {
  it('renders correctly without crashing', () => {
    const { container } = render(<ProgressBar />);
    expect(container.firstChild).toBeDefined();
    expect(screen.getByText(/Progress Bar Showcase/i)).toBeInTheDocument();
  });
});
