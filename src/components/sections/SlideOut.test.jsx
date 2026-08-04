import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import SlideOut from './SlideOut.jsx';

describe('SlideOut Corporate Component Suite', () => {
  it('renders correctly without crashing', () => {
    const { container } = render(<SlideOut />);
    expect(container).toBeDefined();
    expect(screen.getByText('SlideOut')).toBeInTheDocument();
  });
});
