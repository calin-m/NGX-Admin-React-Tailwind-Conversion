import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import OrderModal from './OrderModal.jsx';

describe('OrderModal Corporate Component Suite', () => {
  it('renders correctly when open', () => {
    const { container } = render(<OrderModal isOpen={true} onClose={() => {}} />);
    expect(container.firstChild).toBeDefined();
    expect(screen.getByText(/Create New Order/i)).toBeInTheDocument();
  });
});
