# 🧩 SUB-COMPONENT & STORYBOOK SPECIFICATION GUIDE

> **Status**: Auto-Synchronized Coverage Matrix | **Format**: Storybook CSF 3 & Vitest RTL

Welcome to the **Sub-Component & Storybook Guide**. This document defines our component decomposition rules, Storybook CSF 3 story standards, and unit testing guidelines.

---

## 📏 1. Sub-Component Decomposition Protocol (Rule #5)

All UI presentation components must be decomposed into discrete, single-responsibility sub-components under dedicated subdirectories (`src/components/ui/`, `src/components/sections/`, etc.):
- **Line Limit Rule**: No component function may exceed **220 lines of code**.
- **File Limit Rule**: No file may exceed **350 lines of code**.

---

## 🎨 2. Storybook CSF 3 Story Format Standard

Every component in `src/components/` must have a corresponding `.stories.jsx` file written in Component Story Format (CSF 3):

```javascript
import React from 'react';
import Button from './Button.jsx';

export default {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs']
};

export const Primary = {
  args: {
    variant: 'primary',
    children: 'Click Me'
  }
};
```

---

## 🔬 3. Vitest & React Testing Library (RTL) Standard

Every component in `src/components/` must have a corresponding `.test.jsx` file:

```javascript
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import Button from './Button.jsx';

describe('Button Component', () => {
  it('renders children and handles click events', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Submit</Button>);
    
    const btn = screen.getByRole('button', { name: /submit/i });
    expect(btn).toBeInTheDocument();
    
    fireEvent.click(btn);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

---

## 🛡️ License
Copyright © 2026 Calin M. All rights reserved.
