import Link from 'next/link';
import React from 'react';
import { DividerWave, Service } from '..';

const ServicesHero: React.FC = () => {
  return (
    <>
      <div className='grid w-full place-items-center -mt-16 pt-20 pb-8 px-4 md:px-6 lg:px-8 gap-4 bg-gradient-to-r from-blue-500 to-green-400'>
        <div className='flex flex-col md:flex-row place-items-start justify-center max-w-7xl xl:px-8'>
          <div className='grid md:basis-1/2 justify-items-center md:pr-4 pt-4 md:pt-6'>
            <img
              src={`${process.env.BASE_PATH}/img/work.webp`}
              alt='Work image'
              width='320'
              height='320'
              className='w-80 aspect-auto'
            />
            <h1 className='pt-8 leading-tight text-4xl text-gray-800 font-bold text-center md:text-left '>
              Design top performing user-centric, responsive websites and marketing landing pages.
            </h1>
          </div>

          <div className='grid grid-cols-1 pt-8 md:pt-6 md:basis-1/2 w-full justify-items-center gap-4'>
            <Service title='Web Design & UI/UX'>
              <p>
                Design user and mobile friendly{' '}
                <span className='font-semibold text-blue-700 capitalize'>responsive websites</span>{' '}
                with{' '}
                <span className='font-semibold text-blue-700 capitalize'>best user experience</span>{' '}
                across common devices and browsers. From wireframes, user flows, prototyping to
                final designs, we ensure that the process goes as smooth as possible.
              </p>
            </Service>
            <Service title='Web Development'>
              <p>
                Create custom-tailor{' '}
                <span className='font-semibold text-blue-700 capitalize'>web applications</span> to
                fit your business requirements with complete scalability that is{' '}
                <span className='font-semibold text-blue-700 capitalize'>fast loading</span> and{' '}
                <span className='font-semibold text-blue-700 capitalize'>reliable</span>. We use
                modern web tech stacks like React, Node, Next Js and headless CMS such as Sanity
              </p>
            </Service>
            <Service title='Marketing & SEO'>
              <p>
                Create <span className='font-semibold text-blue-700 capitalize'>landing pages</span>{' '}
                and improve search engine ranks with{' '}
                <span className='font-semibold text-blue-700 capitalize'>SEO</span> best practices
                such as keyword research, technical and on-page optimisation. This provides more
                exposure to potential consumers and{' '}
                <span className='font-semibold text-blue-700 capitalize'>increases sales</span>.
              </p>
            </Service>
            <Service title='Mobile App & Game'>
              <p>
                Develop cross-platform{' '}
                <span className='font-semibold text-blue-700 capitalize'>mobile games</span> and{' '}
                <span className='font-semibold text-blue-700 capitalize'>interactive apps</span>{' '}
                through <span className='font-semibold text-blue-700 capitalize'>gamification</span>{' '}
                using Unity. Start bringing your vision to life today!
              </p>
            </Service>
          </div>
        </div>
      </div>
      <DividerWave />
    </>
  );
};

export default ServicesHero;
