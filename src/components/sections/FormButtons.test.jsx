import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import FormButtons from './FormButtons.jsx';

describe('FormButtons Corporate Component Suite', () => {
  it('renders correctly without crashing', () => {
    const { container } = render(<FormButtons />);
    expect(container.firstChild).toBeDefined();
    expect(screen.getByText(/Button Showcase/i)).toBeInTheDocument();
  });
});
