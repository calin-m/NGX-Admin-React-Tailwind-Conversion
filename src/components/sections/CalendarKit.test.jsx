import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import CalendarKit from './CalendarKit.jsx';

describe('CalendarKit Corporate Component Suite', () => {
  it('renders correctly without crashing', () => {
    const { container } = render(<CalendarKit />);
    expect(container.firstChild).toBeDefined();
    expect(screen.getByText(/Calendar Kit Component/i)).toBeInTheDocument();
  });
});
