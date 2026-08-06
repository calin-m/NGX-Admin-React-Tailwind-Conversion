import React, { useState } from 'react';
import DeviceStatusCard from './status-card/DeviceStatusCard.jsx';

export default function StatusCard() {
  const [devices, setDevices] = useState([
    { id: 1, title: 'Light', icon: '💡', type: 'primary', on: true, detail: 'Living Room' },
    { id: 2, title: 'Roller Shades', icon: '🪟', type: 'success', on: true, detail: 'Master Bedroom' },
    { id: 3, title: 'Wireless Audio', icon: '🔊', type: 'info', on: false, detail: 'Dining Area' },
    { id: 4, title: 'Coffee Maker', icon: '☕', type: 'warning', on: true, detail: 'Kitchen Counter' }
  ]);

  const toggleDevice = id => {
    setDevices(prev => prev.map(d => d.id === id ? { ...d, on: !d.on } : d));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {devices.map(device => (
        <DeviceStatusCard
          key={device.id}
          title={device.title}
          detail={device.detail}
          icon={device.icon}
          on={device.on}
          onToggle={() => toggleDevice(device.id)}
        />
      ))}
    </div>
  );
}
