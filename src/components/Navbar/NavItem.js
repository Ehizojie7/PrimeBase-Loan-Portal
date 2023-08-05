import React from 'react';
import { CircleStackIcon, BanknotesIcon } from '@heroicons/react/24/outline';

import { NavLinks } from './NavLink';

export const NavItem = ({ closeSidebar }) => {
  return (
    <div className="h-[90%] overflow-y-auto side-bar mt-5">
      <nav className="flex-1 space-y-7 px-2 pb-4">
        <NavLinks
          to="/"
          name="Loan Request"
          icon={<BanknotesIcon />}
          current={true}
          onClick={closeSidebar}
        />
        <NavLinks
          to="/all-loans"
          icon={<CircleStackIcon />}
          name="Loan Applications"
          current={false}
          onClick={closeSidebar}
        />
      </nav>
    </div>
  );
};
