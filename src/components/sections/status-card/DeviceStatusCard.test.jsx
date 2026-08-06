import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { describe, it, expect, vi } from 'vitest';
import DeviceStatusCard from './DeviceStatusCard.jsx';

describe('DeviceStatusCard Component Suite', () => {
  it('renders title, detail, and icon correctly', () => {
    render(
      <DeviceStatusCard
        title="Light"
        detail="Living Room"
        icon="💡"
        on={true}
        onToggle={() => {}}
      />
    );

    expect(screen.getByText('Light')).toBeInTheDocument();
    expect(screen.getByText('Living Room')).toBeInTheDocument();
    expect(screen.getByText('💡')).toBeInTheDocument();
    expect(screen.getByText('ON')).toBeInTheDocument();
  });

  it('triggers onToggle callback when clicked', () => {
    const handleToggle = vi.fn();
    render(
      <DeviceStatusCard
        title="Roller Shades"
        detail="Master Bedroom"
        icon="🪟"
        on={false}
        onToggle={handleToggle}
      />
    );

    expect(screen.getByText('OFF')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Roller Shades'));
    expect(handleToggle).toHaveBeenCalledTimes(1);
  });
});
