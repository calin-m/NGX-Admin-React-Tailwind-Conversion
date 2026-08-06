import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import Card from './Card.jsx';

describe('Card UI Component Suite', () => {
  it('renders title, subtitle, extra action, and children content correctly', () => {
    render(
      <Card
        title="Corporate Card Title"
        subtitle="Detailed card subtitle description"
        extra={<button>Action</button>}
      >
        <div>Card Inner Content</div>
      </Card>
    );

    expect(screen.getByText('Corporate Card Title')).toBeInTheDocument();
    expect(screen.getByText('Detailed card subtitle description')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Action' })).toBeInTheDocument();
    expect(screen.getByText('Card Inner Content')).toBeInTheDocument();
  });
});
