import React, { useState } from 'react';
import DeviceStatusCard from './DeviceStatusCard.jsx';

export default {
  title: 'Corporate/Sections/StatusCard/DeviceStatusCard',
  component: DeviceStatusCard,
  argTypes: {
    title: { control: 'text' },
    detail: { control: 'text' },
    icon: { control: 'text' },
    on: { control: 'boolean' },
  },
};

const Template = (args) => {
  const [on, setOn] = useState(args.on);
  return (
    <div className="p-6 bg-slate-100 dark:bg-slate-900 max-w-xs">
      <DeviceStatusCard {...args} on={on} onToggle={() => setOn(!on)} />
    </div>
  );
};

export const ActiveLight = Template.bind({});
ActiveLight.args = {
  title: 'Light',
  detail: 'Living Room',
  icon: '💡',
  on: true,
};

export const InactiveAudio = Template.bind({});
InactiveAudio.args = {
  title: 'Wireless Audio',
  detail: 'Dining Area',
  icon: '🔊',
  on: false,
};
