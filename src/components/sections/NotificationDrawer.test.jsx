import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import NotificationDrawer from './NotificationDrawer.jsx';

describe('NotificationDrawer Component Suite', () => {
  it('renders unread notifications and badge when open', () => {
    render(<NotificationDrawer isOpen={true} onClose={() => {}} />);
    expect(screen.getByText(/Notifications/i)).toBeInTheDocument();
    expect(screen.getByText(/2 New/i)).toBeInTheDocument();
  });

  it('marks all notifications as read when clicking Mark all read', () => {
    render(<NotificationDrawer isOpen={true} onClose={() => {}} />);
    const markReadBtn = screen.getByRole('button', { name: /Mark all read/i });
    fireEvent.click(markReadBtn);
    expect(screen.getByText(/All Read/i)).toBeInTheDocument();
    expect(screen.queryByText(/2 New/i)).not.toBeInTheDocument();
  });
});
