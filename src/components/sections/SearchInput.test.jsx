import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import SearchInput from './SearchInput.jsx';

describe('SearchInput Corporate Component Suite', () => {
  it('renders correctly when open', () => {
    const { container } = render(<SearchInput isOpen={true} onClose={() => {}} />);
    expect(container.firstChild).toBeDefined();
  });
});
