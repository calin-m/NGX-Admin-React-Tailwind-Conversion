import React from 'react';
import AlertBanner from './AlertBanner.jsx';

export default {
  title: 'UI Primitives/AlertBanner',
  component: AlertBanner,
};

export const SuccessAlert = () => (
  <div className="p-6 max-w-md">
    <AlertBanner variant="success" title="Success" message="Operation finished without errors." />
  </div>
);

export const ErrorAlert = () => (
  <div className="p-6 max-w-md">
    <AlertBanner variant="error" title="Error" message="Database transaction failed." />
  </div>
);
