import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import SecurityCameras from './SecurityCameras.jsx';

describe('SecurityCameras Corporate Component Suite', () => {
  it('renders correctly without crashing', () => {
    const { container } = render(<SecurityCameras />);
    expect(container.firstChild).toBeDefined();
    expect(screen.getByText(/Security Cameras Grid/i)).toBeInTheDocument();
  });
});
