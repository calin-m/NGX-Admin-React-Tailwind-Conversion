import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import Sidebar from './Sidebar.jsx';

describe('Sidebar Corporate Component Suite', () => {
  it('renders correctly without crashing', () => {
    const { container } = render(<Sidebar isCollapsed={false} activeTab="dashboard" />);
    expect(container.firstChild).toBeDefined();
    expect(screen.getByText(/NGX Corporate/i)).toBeInTheDocument();
  });
});
