import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useAuth } from '../../store/firebase-auth-context';

const Sidebar: React.FC<{ show: boolean; onNavClick?: () => void }> = ({ show, onNavClick }) => {
  const { authStatus, user, signOutFB } = useAuth();
  const router = useRouter();

  return (
    <nav
      className={`absolute sm:hidden z-20 transition-all left-0 top-0 h-screen p-3 space-y-2 w-full bg-gray-200 text-gray-800 ${
        show ? 'translate-x-0' : '-translate-x-full'
      }`}>
      {authStatus === 'authenticated' && user && (
        <div className='flex items-center p-2 space-x-4'>
          {user.photoURL ? (
            <img
              src={user.photoURL}
              alt='User image'
              loading='lazy'
              referrerPolicy='no-referrer'
              className='w-12 h-12 rounded-full bg-gray-500'
            />
          ) : (
            <img
              src='/img/user.png'
              alt='User image'
              loading='lazy'
              referrerPolicy='no-referrer'
              className='w-12 h-12 rounded-full bg-gray-500'
            />
          )}
          <div>
            <h2 className='text-lg font-semibold'>
              {user.displayName ? user.displayName : user.email}
            </h2>
            <span className='flex items-center space-x-1'>
              <a
                rel='noopener noreferrer'
                href='#'
                className='text-xs hover:underline text-gray-600'>
                View profile
              </a>
            </span>
          </div>
        </div>
      )}
      <div className='divide-y divide-gray-300'>
        <ul className='pt-2 pb-4 space-y-1 text-sm'>
          <li className='hover:bg-gray-100'>
            <Link href='/'>
              <a
                className='flex items-center p-2 space-x-3 rounded-md'
                onClick={() => {
                  if (onNavClick) onNavClick();
                }}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 512 512'
                  width='20px'
                  height='20px'
                  className='w-5 h-5 fill-current text-gray-600'>
                  <path d='M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z'></path>
                </svg>
                <span>Home</span>
              </a>
            </Link>
          </li>
          <li className='hover:bg-gray-100'>
            <Link href='/contact'>
              <a
                className='flex items-center p-2 space-x-3 rounded-md'
                onClick={() => {
                  if (onNavClick) onNavClick();
                }}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 512 512'
                  width='20px'
                  height='20px'
                  className='w-5 h-5 fill-current text-gray-600'>
                  <path d='M448.205,392.507c30.519-27.2,47.8-63.455,47.8-101.078,0-39.984-18.718-77.378-52.707-105.3C410.218,158.963,366.432,144,320,144s-90.218,14.963-123.293,42.131C162.718,214.051,144,251.445,144,291.429s18.718,77.378,52.707,105.3c33.075,27.168,76.861,42.13,123.293,42.13,6.187,0,12.412-.273,18.585-.816l10.546,9.141A199.849,199.849,0,0,0,480,496h16V461.943l-4.686-4.685A199.17,199.17,0,0,1,448.205,392.507ZM370.089,423l-21.161-18.341-7.056.865A180.275,180.275,0,0,1,320,406.857c-79.4,0-144-51.781-144-115.428S240.6,176,320,176s144,51.781,144,115.429c0,31.71-15.82,61.314-44.546,83.358l-9.215,7.071,4.252,12.035a231.287,231.287,0,0,0,37.882,67.817A167.839,167.839,0,0,1,370.089,423Z'></path>
                  <path d='M60.185,317.476a220.491,220.491,0,0,0,34.808-63.023l4.22-11.975-9.207-7.066C62.918,214.626,48,186.728,48,156.857,48,96.833,109.009,48,184,48c55.168,0,102.767,26.43,124.077,64.3,3.957-.192,7.931-.3,11.923-.3q12.027,0,23.834,1.167c-8.235-21.335-22.537-40.811-42.2-56.961C270.072,30.279,228.3,16,184,16S97.928,30.279,66.364,56.206C33.886,82.885,16,118.63,16,156.857c0,35.8,16.352,70.295,45.25,96.243a188.4,188.4,0,0,1-40.563,60.729L16,318.515V352H32a190.643,190.643,0,0,0,85.231-20.125,157.3,157.3,0,0,1-5.071-33.645A158.729,158.729,0,0,1,60.185,317.476Z'></path>
                </svg>
                <span>Contact</span>
              </a>
            </Link>
          </li>
        </ul>
        <ul className='pt-4 pb-2 space-y-1 text-sm'>
          {authStatus !== 'loading' && (
            <li className='hover:bg-gray-100'>
              <a
                href='#'
                onClick={() => {
                  authStatus === 'authenticated' && user
                    ? signOutFB()
                    : router.replace('/auth/signin');
                  if (onNavClick) onNavClick();
                }}
                className='flex items-center p-2 space-x-3 rounded-md'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 512 512'
                  className='w-5 h-5 fill-current text-gray-600'>
                  <path d='M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z'></path>
                  <rect width='32' height='64' x='256' y='232'></rect>
                </svg>
                <span>{authStatus === 'authenticated' && user ? 'Sign out' : 'Sign in'}</span>
              </a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
