import React from 'react';
import { MdAccountCircle } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

type PropsType = {
  isLogin: boolean;
  handleLogout: Function;
};

const ProfileDropdown = ({ isLogin, handleLogout }: PropsType) => {
  return (
    <Menu as="div" className="ml-3 relative">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="bg-primary-dark flex rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <MdAccountCircle className="text-white h-8 w-8" aria-hidden="true" />
            </Menu.Button>
          </div>
          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              {isLogin ? (
                <Menu.Item>
                  {({ active }) => (
                    <div
                      className={classNames(
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700',
                      )}
                      onClick={() => handleLogout()}
                    >
                      Logout
                    </div>
                  )}
                </Menu.Item>
              ) : (
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/signin"
                      className={classNames(
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700',
                      )}
                    >
                      Sign in
                    </Link>
                  )}
                </Menu.Item>
              )}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

export default ProfileDropdown;
