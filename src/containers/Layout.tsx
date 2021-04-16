import React, { ReactNode } from 'react';
import Navbar from 'components/Navbar';

type propType = {
  children?: ReactNode;
  navbarTitle?: string;
};

const Layout: React.FC<propType> = ({ children, navbarTitle }: propType): JSX.Element => {
  return (
    <div
      className="relative max-w-screen min-h-screen overflow-hidden font-sans"
      style={{
        backgroundImage:
          'linear-gradient(to right top, #3e5151, #587068, #7b907b, #a8ae8d, #decba4)',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      <Navbar />
      <div className="h-m-content w-screen text-light-gray pt-20">{children}</div>
    </div>
  );
};

export default Layout;
