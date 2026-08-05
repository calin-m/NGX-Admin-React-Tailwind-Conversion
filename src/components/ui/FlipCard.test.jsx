import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import React from 'react';
import FlipCard from './FlipCard.jsx';

describe('FlipCard UI Primitive Component', () => {
  it('renders front and back children content correctly', () => {
    render(
      <FlipCard
        isFlipped={false}
        front={<div>Front Content</div>}
        back={<div>Back Content</div>}
      />
    );
    expect(screen.getByText('Front Content')).toBeInTheDocument();
    expect(screen.getByText('Back Content')).toBeInTheDocument();
  });
});
