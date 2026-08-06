import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import Modal from './Modal.jsx';

describe('Modal UI Component Suite', () => {
  it('renders modal content when isOpen is true', () => {
    render(
      <Modal isOpen={true} title="Create Order Modal">
        <div>Modal Body Content</div>
      </Modal>
    );
    expect(screen.getByText('Create Order Modal')).toBeInTheDocument();
    expect(screen.getByText('Modal Body Content')).toBeInTheDocument();
  });

  it('triggers onClose when Esc key is pressed', () => {
    const handleClose = vi.fn();
    render(
      <Modal isOpen={true} onClose={handleClose} title="Esc Test">
        <div>Test Content</div>
      </Modal>
    );
    fireEvent.keyDown(window, { key: 'Escape' });
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('does not render when isOpen is false', () => {
    const { container } = render(
      <Modal isOpen={false} title="Hidden Modal">
        <div>Hidden Content</div>
      </Modal>
    );
    expect(container.firstChild).toBeNull();
  });
});
