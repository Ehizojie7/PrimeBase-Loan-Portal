import { Sidebar } from 'components/Navbar/Sidebar';
import React from 'react';

export const AuthLayout = (prop) => {
  const { children } = prop;
  return (
    <div>
      <Sidebar />
      <div className="Home">{children}</div>
    </div>
  );
};
