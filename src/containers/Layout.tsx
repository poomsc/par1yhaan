import React, { ReactNode } from 'react';
import Navbar from 'components/Navbar';

type propType = {
  children?: ReactNode;
  navbarTitle?: string;
};

const Layout: React.FC<propType> = ({ children, navbarTitle }: propType): JSX.Element => {
  return (
    <div className="relative max-w-screen min-h-screen overflow-hidden bg-gray-200 font-sans">
      <Navbar />
      <div className="h-m-content w-screen text-light-gray pt-20">{children}</div>
    </div>
  );
};

export default Layout;
