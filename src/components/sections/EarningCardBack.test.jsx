import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import EarningCardBack from './EarningCardBack.jsx';

describe('EarningCardBack Corporate Component Suite', () => {
  it('renders correctly without crashing', () => {
    const { container } = render(<EarningCardBack />);
    expect(container).toBeDefined();
    expect(screen.getByText('EarningCardBack')).toBeInTheDocument();
  });
});
