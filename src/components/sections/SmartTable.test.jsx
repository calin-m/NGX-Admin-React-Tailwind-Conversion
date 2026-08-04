import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import SmartTable from './SmartTable.jsx';

describe('SmartTable Corporate Component Suite', () => {
  it('renders correctly without crashing', () => {
    const { container } = render(<SmartTable />);
    expect(container.firstChild).toBeDefined();
    expect(screen.getByText(/Orders & Invoices Data Table/i)).toBeInTheDocument();
  });
});
