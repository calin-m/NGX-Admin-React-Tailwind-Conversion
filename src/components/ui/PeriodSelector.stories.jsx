import React, { useState } from 'react';
import PeriodSelector from './PeriodSelector.jsx';

export default {
  title: 'Corporate/UI/PeriodSelector',
  component: PeriodSelector,
  parameters: {
    layout: 'padded',
  },
};

export const Default = {
  render: () => {
    const [selected, setSelected] = useState('week');
    return <PeriodSelector periods={['week', 'month', 'year']} selected={selected} onChange={setSelected} />;
  }
};

export const YearsOption = {
  render: () => {
    const [selected, setSelected] = useState('2026');
    return <PeriodSelector periods={['2025', '2026']} selected={selected} onChange={setSelected} />;
  }
};
