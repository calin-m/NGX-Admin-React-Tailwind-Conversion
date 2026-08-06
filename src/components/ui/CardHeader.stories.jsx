import React from 'react';
import CardHeader from './CardHeader.jsx';
import PeriodSelector from './PeriodSelector.jsx';

export default {
  title: 'UI Primitives/CardHeader',
  component: CardHeader,
};

export const Default = {
  render: () => (
    <div className="w-96 p-4 bg-white dark:bg-slate-800 border rounded-2xl">
      <CardHeader
        icon="📊"
        title="Profit Analytics"
        subtitle="Week Profit vs Orders"
        action={<PeriodSelector selected="week" onChange={() => {}} />}
      />
    </div>
  ),
};
