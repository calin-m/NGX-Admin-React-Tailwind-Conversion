import React from 'react';
import TrendBadge from './TrendBadge.jsx';

export default {
  title: 'UI Primitives/TrendBadge',
  component: TrendBadge,
};

export const Positive = {
  render: () => <TrendBadge value="+14.5%" type="positive" />,
};

export const Negative = {
  render: () => <TrendBadge value="-3.2%" type="negative" />,
};
