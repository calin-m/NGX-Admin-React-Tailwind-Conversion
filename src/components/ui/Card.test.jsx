import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import Card from './Card.jsx';

describe('Card UI Component', () => {
  it('renders children within container', () => {
    const { getByText } = render(<Card>Card Content</Card>);
    expect(getByText('Card Content')).toBeInTheDocument();
  });
});
