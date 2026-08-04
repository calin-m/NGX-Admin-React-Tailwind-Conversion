import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import CkEditor from './CkEditor.jsx';

describe('CkEditor Corporate Component Suite', () => {
  it('renders correctly without crashing', () => {
    const { container } = render(<CkEditor />);
    expect(container.firstChild).toBeDefined();
    expect(screen.getByText(/CKEditor Rich Text Component/i)).toBeInTheDocument();
  });
});
