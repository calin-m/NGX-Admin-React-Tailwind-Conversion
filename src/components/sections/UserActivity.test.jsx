import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import UserActivity from './UserActivity.jsx';

describe('UserActivity Corporate Component Suite', () => {
  it('renders correctly without crashing', () => {
    const { container } = render(<UserActivity />);
    expect(container.firstChild).toBeDefined();
    expect(screen.getByText(/User Activity Stream/i)).toBeInTheDocument();
  });
});
