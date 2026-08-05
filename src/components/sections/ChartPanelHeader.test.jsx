import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import ChartPanelHeader from './ChartPanelHeader.jsx';

describe('ChartPanelHeader Corporate Component Suite', () => {
  it('renders correctly without crashing', () => {
    const { container } = render(<ChartPanelHeader />);
    expect(container).toBeDefined();
    expect(screen.getByText(/Orders/i)).toBeInTheDocument();
  });
});

