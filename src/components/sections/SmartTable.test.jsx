import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import SmartTable from './SmartTable.jsx';

describe('SmartTable Corporate Component Suite', () => {
  it('renders correctly without crashing', () => {
    const { container } = render(<SmartTable />);
    expect(container.firstChild).toBeDefined();
    expect(screen.getByText(/Orders & Invoices Data Table/i)).toBeInTheDocument();
  });

  it('filters table rows dynamically on search input change', () => {
    render(<SmartTable />);
    const searchInput = screen.getByPlaceholderText(/search/i);
    expect(searchInput).toBeInTheDocument();
    fireEvent.change(searchInput, { target: { value: 'Sarah' } });
    expect(screen.getByText(/Sarah Jenkins/i)).toBeInTheDocument();
  });
});
