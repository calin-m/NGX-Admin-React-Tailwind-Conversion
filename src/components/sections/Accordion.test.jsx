import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import Accordion from './Accordion.jsx';

describe('Accordion Corporate Component Suite', () => {
  it('renders correctly without crashing', () => {
    const { container } = render(<Accordion />);
    expect(container.firstChild).toBeDefined();
    expect(screen.getByText(/Accordion Panels/i)).toBeInTheDocument();
  });
});
