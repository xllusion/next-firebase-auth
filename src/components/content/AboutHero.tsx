import Link from 'next/link';
import React from 'react';
import { DividerWave } from '..';

const canPassHref: boolean = true;

const AboutHero: React.FC = () => {
  return (
    <>
      <div className='grid w-full place-items-center -mt-16 pt-20 pb-8 px-4 md:px-6 lg:px-8  gap-4 bg-gradient-to-r from-blue-500 to-green-400'>
        <div className='flex flex-col md:flex-row place-items-center justify-center max-w-7xl xl:px-8'>
          <img
            src={`${process.env.BASE_PATH}/img/about.webp`}
            alt='About image'
            width='320'
            height='356'
            className='w-80 aspect-auto pt-4 md:pt-6'
          />
          <div className='pt-4 md:pt-6 grid justify-items-center md:justify-items-start md:pl-8'>
            <h1 className='text-4xl text-gray-800 font-bold text-center md:text-left'>About Us</h1>
            <p className='pt-6 text-center md:text-left text-lg'>
              Xllusion is an independent software consultancy based in London, specialising in{' '}
              <span className='text-blue-800 capitalize'>web design, web development, SEO</span> and{' '}
              <span className='text-blue-800 capitalize'>
                cross-platform mobile interactive app / game development
              </span>
              . The company was founded by Ed Liang who has over a decade of experience in web and
              mobile development.
            </p>
            <p className='py-6 text-center md:text-left text-lg'>
              We can help your company to create a custom, user-centered website / app which{' '}
              <span className='text-blue-800 capitalize'>build trusts</span> and{' '}
              <span className='text-blue-800 capitalize'>increase sales</span>. Alternatively, we
              can find solutions with gamification to improve customer engagement.
            </p>
          </div>
        </div>
      </div>
      <DividerWave />
    </>
  );
};

export default AboutHero;
