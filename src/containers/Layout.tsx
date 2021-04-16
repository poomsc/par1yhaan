import React, { ReactNode } from 'react';
import Navbar from 'components/Navbar';

type propType = {
  children?: ReactNode;
  navbarTitle?: string;
  modal?: JSX.Element;
};

const Layout: React.FC<propType> = ({ children, navbarTitle, modal }: propType): JSX.Element => {
  return (
    <div className="relative max-w-screen min-h-screen overflow-hidden bg-gray-200 font-sans">
      <Navbar />
      <div className="h-m-content w-screen text-light-gray pt-20">{children}</div>
      {modal ? modal : null}
    </div>
  );
};

export default Layout;
