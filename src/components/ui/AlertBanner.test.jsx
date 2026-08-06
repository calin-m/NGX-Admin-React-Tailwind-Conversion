import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import AlertBanner from './AlertBanner.jsx';

describe('AlertBanner UI Component Suite', () => {
  it('renders success variant with correct message', () => {
    render(<AlertBanner variant="success" message="Operation completed successfully" />);
    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.getByText('Operation completed successfully')).toBeInTheDocument();
  });

  it('triggers onDismiss handler when dismiss button is clicked', () => {
    const handleDismiss = vi.fn();
    render(<AlertBanner variant="error" message="Error occurred" onDismiss={handleDismiss} />);
    fireEvent.click(screen.getByLabelText('Dismiss alert'));
    expect(handleDismiss).toHaveBeenCalledTimes(1);
  });
});
