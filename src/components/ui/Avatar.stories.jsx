import React from 'react';
import Avatar from './Avatar.jsx';

export default {
  title: 'UI Primitives/Avatar',
  component: Avatar,
};

export const InitialsWithOnlineStatus = () => (
  <div className="p-6 flex space-x-4 items-center">
    <Avatar name="Sarah Jenkins" status="Online" size="sm" />
    <Avatar name="Michael Chen" status="Busy" size="md" />
    <Avatar name="Elena Rostova" status="Offline" size="lg" />
  </div>
);
