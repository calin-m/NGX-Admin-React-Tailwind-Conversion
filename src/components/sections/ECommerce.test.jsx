import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import ECommerce from './ECommerce.jsx';

describe('ECommerce Corporate Component Suite', () => {
  it('renders correctly without crashing', () => {
    const { container } = render(<ECommerce />);
    expect(container.firstChild).toBeDefined();
    expect(screen.getByText(/Total Revenue/i)).toBeInTheDocument();
  });
});
