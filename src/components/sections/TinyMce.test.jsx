import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import TinyMce from './TinyMce.jsx';

describe('TinyMce Corporate Component Suite', () => {
  it('renders correctly without crashing', () => {
    const { container } = render(<TinyMce />);
    expect(container).toBeDefined();
    expect(screen.getByText('TinyMce')).toBeInTheDocument();
  });
});
