import React, { ReactNode } from 'react';

type propType = {
  children?: ReactNode;
  navbarTitle?: string;
  modal?: JSX.Element;
};

const Layout: React.FC<propType> = ({ children, navbarTitle, modal }: propType): JSX.Element => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div className="h-m-content w-screen text-light-gray">{children}</div>
      {modal ? modal : null}
    </div>
  );
};

export default Layout;
