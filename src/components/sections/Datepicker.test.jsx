import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import Datepicker from './Datepicker.jsx';

describe('Datepicker Corporate Component Suite', () => {
  it('renders correctly without crashing', () => {
    const { container } = render(<Datepicker />);
    expect(container.firstChild).toBeDefined();
    expect(screen.getByText(/Datepicker Control/i)).toBeInTheDocument();
  });
});
