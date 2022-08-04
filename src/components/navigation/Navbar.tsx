import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useAuth } from '../../store/firebase-auth-context';
import { Sidebar, SidebarWithCheckbox } from '../index';

const Navbar: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [isFocus, setIsFocus] = useState(false);
  const { authStatus, user, signOutFB } = useAuth();
  const router = useRouter();

  const sidebarNavClickHandler = () => {
    setShowSidebar(false);
  }

  return (
    <header className='relative'>
      <nav className='flex justify-between p-4 mx-auto bg-gray-200 text-gray-800'>
        <Link href='/'>
          <a className='flex items-center text-4xl'>LOGO</a>
        </Link>

        <ul className='flex-1 justify-end items-center hidden space-x-3 sm:flex'>
          <li>
            <Link href='/'>
              <a
                className={`flex items-center px-4 -mb-1 border-b-2 border-transparent 
                  ${router.pathname === '/' ? ' text-blue-600' : ''}
                `}>
                Home
              </a>
            </Link>
          </li>
          {/* <li className='group relative'>
            <button
              onClick={(e) => {
                if (isFocus) {
                  e.currentTarget.blur();
                  setIsFocus(false);
                } else {
                  e.currentTarget.focus();
                  setIsFocus(true);
                }
              }}
              onBlur={() => {
                if (isFocus) {
                  setIsFocus(false);
                }
              }}
              className='flex items-center pl-4 -mb-1 border-b-2 border-transparent'>
              <span>Dropdown</span>
              <svg
                className='w-5 h-5 text-gray-800 dark:text-white transition-transform group-focus-within:rotate-180'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'>
                <path
                  fillRule='evenodd'
                  d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
            
            <div className='invisible opacity-0 transition-all group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-6 absolute top-0 left-0 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl dark:bg-gray-800'>
              <a
                href='#'
                className='block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white'>
                your profile
              </a>
              <a
                href='#'
                className='block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white'>
                Your projects
              </a>
              <a
                href='#'
                className='block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white'>
                Sign Out
              </a>
            </div>
          </li> */}
          <li>
            <Link href='/contact'>
              <a
                className={`flex items-center px-4 -mb-1 border-b-2 border-transparent 
                  ${router.pathname === '/contact' ? ' text-blue-600' : ''}
                `}>
                Contact
              </a>
            </Link>
          </li>

          {authStatus === 'unauthenticated' && (
            <li className='items-center hidden sm:flex pl-4'>
              <button
                onClick={() => router.replace('/auth/signin')}
                className='self-center px-8 py-2 font-semibold rounded bg-blue-600 text-gray-50'>
                Sign in
              </button>
            </li>
          )}

          {authStatus === 'authenticated' && user && (
            <li className='group relative hidden sm:flex items-center pl-4'>
              <button
                onClick={(e) => {
                  if (isFocus) {
                    e.currentTarget.blur();
                    setIsFocus(false);
                  } else {
                    e.currentTarget.focus();
                    setIsFocus(true);
                  }
                }}
                onBlur={() => {
                  if (isFocus) {
                    setIsFocus(false);
                  }
                }}
                className='flex items-center'>
                <img
                  src={user.photoURL ? user.photoURL : '/img/user.png'}
                  alt='User image'
                  loading='lazy'
                  referrerPolicy='no-referrer'
                  width='40px'
                  height='40px'
                  className='rounded-full bg-gray-500 border-[3px] border-gray-200 group-focus-within:border-blue-400'
                />
              </button>

              {/* Dropdown menu using group */}
              <div
                tabIndex={0}
                className='flex flex-col justify-center items-center gap-2 invisible opacity-0 transition-all group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-12 absolute top-0 right-0 z-20 w-48 py-4 bg-white rounded-md shadow-lg dark:bg-gray-800'>
                <img
                  src={user.photoURL ? user.photoURL : '/img/user.png'}
                  alt='User image'
                  loading='lazy'
                  referrerPolicy='no-referrer'
                  className='w-12 h-12 rounded-full bg-gray-500'
                />
                <h2 className='text-sm font-semibold text-center'>
                  {user.displayName ? user.displayName : user?.email}
                </h2>
                <a href='#' className='text-sm hover:underline text-gray-600'>
                  View profile
                </a>
                <hr className='w-[90%] h-1 my-1' />
                <button
                  onClick={() => signOutFB()}
                  className='self-center px-8 py-2 font-semibold rounded bg-blue-600 text-gray-50'>
                  Sign out
                </button>
              </div>
            </li>
          )}
        </ul>

        {/* Hamburger menu */}
        {/* <button
          className='relative p-4 sm:hidden z-30'
          onClick={() => setShowSidebar(!showSidebar)}>
          <span className='sr-only'>Open sliding menu</span>
          <div className='block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <span
              aria-hidden='true'
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                showSidebar ? 'rotate-45' : '-translate-y-1.5'
              }`}
            />
            <span
              aria-hidden='true'
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out" ${
                showSidebar ? 'opacity-0' : ''
              }`}
            />
            <span
              aria-hidden='true'
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                showSidebar ? '-rotate-45' : 'translate-y-1.5'
              }`}
            />
          </div>
        </button> */}

        <label htmlFor='my_slider' className='relative p-4 sm:hidden z-30 cursor-pointer'>
          <span className='sr-only'>Open sliding menu</span>
          <div className='block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <span
              aria-hidden='true'
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                showSidebar ? 'rotate-45' : '-translate-y-1.5'
              }`}
            />
            <span
              aria-hidden='true'
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out" ${
                showSidebar ? 'opacity-0' : ''
              }`}
            />
            <span
              aria-hidden='true'
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                showSidebar ? '-rotate-45' : 'translate-y-1.5'
              }`}
            />
          </div>
        </label>
      </nav>
      {/* Sidebar */}
      {/* <Sidebar show={showSidebar} onNavClick={sidebarNavClickHandler} /> */}
      <SidebarWithCheckbox
        id='my_slider'
        onOpen={() => setShowSidebar(true)}
        onClose={() => setShowSidebar(false)}
      />
    </header>
  );
};

export default Navbar;
