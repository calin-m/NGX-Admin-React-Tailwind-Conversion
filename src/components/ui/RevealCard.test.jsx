import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import React from 'react';
import RevealCard from './RevealCard.jsx';

describe('RevealCard UI Primitive Component', () => {
  it('renders front and back children content correctly', () => {
    render(
      <RevealCard
        isRevealed={false}
        front={<div>Front Reveal Content</div>}
        back={<div>Back Reveal Content</div>}
      />
    );
    expect(screen.getByText('Front Reveal Content')).toBeInTheDocument();
    expect(screen.getByText('Back Reveal Content')).toBeInTheDocument();
  });
});
