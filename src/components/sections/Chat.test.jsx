import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import Chat from './Chat.jsx';

describe('Chat Corporate Component Suite', () => {
  it('renders correctly without crashing', () => {
    const { container } = render(<Chat />);
    expect(container.firstChild).toBeDefined();
    expect(screen.getAllByText(/Nick Jones/i)[0]).toBeInTheDocument();
  });

  it('dispatches new user message into chat list on send click', () => {
    render(<Chat />);
    const input = screen.getByPlaceholderText(/Message/i);
    const sendButton = screen.getByRole('button', { name: /send/i });
    fireEvent.change(input, { target: { value: 'Hello Antigravity' } });
    fireEvent.click(sendButton);
    expect(screen.getByText(/Hello Antigravity/i)).toBeInTheDocument();
  });
});


