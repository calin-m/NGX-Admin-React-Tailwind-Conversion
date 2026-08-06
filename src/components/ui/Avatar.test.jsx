import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import Avatar from './Avatar.jsx';

describe('Avatar UI Component Suite', () => {
  it('computes initials correctly from full name', () => {
    render(<Avatar name="Sarah Jenkins" status="Online" />);
    expect(screen.getByText('SJ')).toBeInTheDocument();
  });

  it('renders image when src prop is provided', () => {
    render(<Avatar name="User Image" src="/avatar.jpg" />);
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/avatar.jpg');
  });
});
