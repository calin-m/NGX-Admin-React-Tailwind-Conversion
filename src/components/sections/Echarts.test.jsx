import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import Echarts from './Echarts.jsx';

describe('Echarts Corporate Component Suite', () => {
  it('renders correctly without crashing', () => {
    const { container } = render(<Echarts />);
    expect(container.firstChild).toBeDefined();
    expect(screen.getByText(/ECharts Advanced Visualization/i)).toBeInTheDocument();
  });
});
