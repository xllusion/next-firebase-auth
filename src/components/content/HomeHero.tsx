import Link from 'next/link';
import React from 'react';
import { DividerWave } from '..';

const HomeHero: React.FC = () => {
  return (
    <>
      <div className='grid w-full place-items-center -mt-16 pt-20 pb-8 px-4 md:px-6 lg:px-8  gap-4 bg-gradient-to-r from-blue-500 to-green-400'>
        <div className='flex flex-col md:flex-row-reverse place-items-center justify-center max-w-7xl xl:px-8'>
          <img
            src={`${process.env.BASE_PATH}/img/home.webp`}
            alt='Home image'
            width='320'
            height='356'
            className='w-80 aspect-auto pt-4 md:pt-6'
          />
          <div className='font-DancingScript pt-4 md:pt-6 grid justify-items-center md:justify-items-start md:pr-4 '>
            <h1 className='pb-8 leading-tight text-5xl text-gray-800 font-bold text-center md:text-left'>
              Create{' '}
              <span className='text-blue-800 capitalize underline decoration-double decoration-2 decoration-blue-800/60'>
                User-Centered Websites
              </span>{' '}
              That Grow With Your Business And{' '}
              <span className='text-blue-800 capitalize underline decoration-double decoration-2 decoration-blue-800/60'>
                Increase Sales
              </span>
              .
            </h1>
            {/* <p className='py-6 text-center md:text-left text-lg'>
              Create custom, user-centered websites & web apps which build trusts and increase
              sales.
            </p> */}
            <Link href={`/contact${process.env.HTML_PREFIX}`} passHref>
              <a className='btn btn-primary'>Get In Touch</a>
            </Link>
          </div>
        </div>
      </div>
      <DividerWave />
    </>
  );
};

export default HomeHero;
