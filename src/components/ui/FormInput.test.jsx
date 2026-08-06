import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import FormInput from './FormInput.jsx';

describe('FormInput UI Primitive Component', () => {
  it('renders label and clearable text input correctly', () => {
    render(<FormInput label="Email Address" required value="test@example.com" onChange={() => {}} />);
    expect(screen.getByText('Email Address')).toBeInTheDocument();
    expect(screen.getByText('*')).toBeInTheDocument();
    expect(screen.getByDisplayValue('test@example.com')).toBeInTheDocument();
    expect(screen.getByText('ESC')).toBeInTheDocument();
  });

  it('renders dropdown select variant with options', () => {
    render(
      <FormInput
        label="Role"
        type="select"
        value="Admin"
        onChange={() => {}}
        options={['Admin', 'Editor', 'Viewer']}
      />
    );
    expect(screen.getByText('Role')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toHaveValue('Admin');
    expect(screen.getByText('Editor')).toBeInTheDocument();
  });

  it('renders toggle switch variant and handles click', () => {
    const handleChange = vi.fn();
    render(<FormInput label="Notifications" type="toggle" value={true} onChange={handleChange} />);
    const toggleButton = screen.getByRole('button');
    fireEvent.click(toggleButton);
    expect(handleChange).toHaveBeenCalledWith(false);
  });

  it('renders error message when error prop is supplied', () => {
    render(<FormInput label="Username" error="Username is required" value="" onChange={() => {}} />);
    expect(screen.getByText('⚠️ Username is required')).toBeInTheDocument();
  });
});
