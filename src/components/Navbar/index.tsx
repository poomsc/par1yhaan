import React from 'react';
import { Link } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { BiBell } from 'react-icons/bi';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import logo from 'assets/logo/goose.png';
import { observer } from 'mobx-react';
import { useStores } from 'hooks/useStore';
import ProfileDropdown from './ProfileDropdown';

const navigation = [
  { name: 'Explore Party', link: '/home' },
  { name: 'Create Party', link: '/create-party' },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = observer(() => {
  const currentPath = window.location.pathname;
  const {
    userStore: { isLogin, logout },
  } = useStores();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Disclosure
      as="nav"
      className="bg-white w-full fixed z-50 bg-opacity-60"
      style={{ backdropFilter: 'blur(20px)' }}
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:bg-white hover:bg-opacity-50 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  {open ? (
                    <AiOutlineClose className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <AiOutlineMenu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Link to="/home">
                    <img className="block lg:hidden h-8 w-auto" src={logo} alt="Par1yHaan-logo" />
                    <img className="hidden lg:block h-8 w-auto" src={logo} alt="Par1yHaan-logo" />
                  </Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <div
                        key={item.name}
                        className={classNames(
                          currentPath === item.link
                            ? 'bg-white bg-opacity-75 text-black'
                            : 'text-black hover:bg-white hover:bg-opacity-50 hover:text-gray-700',
                          'px-3 py-2 rounded-md text-sm font-medium',
                        )}
                        aria-current={currentPath === item.link ? 'page' : undefined}
                      >
                        <Link to={item.link}>{item.name}</Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button className="bg-white bg-opacity-75 p-1 rounded-full text-gray-600 hover:bg-white hover:bg-opacity-50 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className="sr-only">View notifications</span>
                  <BiBell className="h-6 w-6" aria-hidden="true" />
                </button>

                <ProfileDropdown isLogin={isLogin} handleLogout={handleLogout} />
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className={classNames(
                    currentPath === item.link
                      ? 'bg-white bg-opacity-75 text-black'
                      : 'text-black hover:bg-white hover:bg-opacity-50 hover:text-gray-700',
                    'px-3 py-2 rounded-md text-sm font-medium',
                  )}
                  aria-current={currentPath === item.link ? 'page' : undefined}
                >
                  <Link to={item.link}>{item.name}</Link>
                </div>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
});

export default Navbar;
