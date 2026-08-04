import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import Chat from './Chat.jsx';

describe('Chat Corporate Component Suite', () => {
  it('renders correctly without crashing', () => {
    const { container } = render(<Chat />);
    expect(container.firstChild).toBeDefined();
    expect(screen.getByText(/NGX Live Support Chat/i)).toBeInTheDocument();
  });
});
