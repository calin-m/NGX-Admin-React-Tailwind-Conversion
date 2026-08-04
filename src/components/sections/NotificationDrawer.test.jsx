import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import NotificationDrawer from './NotificationDrawer.jsx';

describe('NotificationDrawer Corporate Component Suite', () => {
  it('renders correctly when open', () => {
    const { container } = render(<NotificationDrawer isOpen={true} onClose={() => {}} />);
    expect(container.firstChild).toBeDefined();
    expect(screen.getByText(/Notifications/i)).toBeInTheDocument();
  });
});
