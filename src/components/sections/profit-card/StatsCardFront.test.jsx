import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import StatsCardFront from './StatsCardFront.jsx';

describe('StatsCardFront Auto-Generated Test Suite', () => {
  it('renders without crashing', () => {
    const { container } = render(<StatsCardFront />);
    expect(container).toBeDefined();
  });
});
