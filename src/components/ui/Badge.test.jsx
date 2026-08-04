import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import Badge from './Badge.jsx';

describe('Badge UI Component', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<Badge>Badge Label</Badge>);
    expect(getByText('Badge Label')).toBeInTheDocument();
  });
});
