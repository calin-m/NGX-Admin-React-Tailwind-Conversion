import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import RoomsCard from './RoomsCard.jsx';

describe('RoomsCard Corporate Component Suite', () => {
  it('renders correctly without crashing', () => {
    const { container } = render(<RoomsCard />);
    expect(container.firstChild).toBeDefined();
    expect(screen.getByText(/Smart Room Selector/i)).toBeInTheDocument();
  });
});
