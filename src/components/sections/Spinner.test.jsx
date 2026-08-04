import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import Spinner from './Spinner.jsx';

describe('Spinner Corporate Component Suite', () => {
  it('renders correctly without crashing', () => {
    const { container } = render(<Spinner />);
    expect(container.firstChild).toBeDefined();
    expect(screen.getByText(/Loading Spinner Component/i)).toBeInTheDocument();
  });
});
