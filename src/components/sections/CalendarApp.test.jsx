import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import CalendarApp from './CalendarApp.jsx';

describe('CalendarApp Corporate Component Suite', () => {
  it('renders correctly without crashing', () => {
    const { container } = render(<CalendarApp />);
    expect(container.firstChild).toBeDefined();
    expect(screen.getByText(/Calendar Scheduler/i)).toBeInTheDocument();
  });
});
