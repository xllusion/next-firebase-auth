import React from 'react';
import { ContactForm, DividerWave } from '..';

const ContactHero: React.FC = () => {
  return (
    <>
      <div className=' font-Fascinate grid w-full place-items-center -mt-16 pt-20 pb-8 px-4 md:px-6 lg:px-8 gap-4 bg-gradient-to-r from-blue-500 to-green-400'>
        <div className='flex flex-col md:flex-row place-items-start justify-center max-w-7xl xl:px-8'>
          <div className='grid md:basis-1/2 justify-items-center md:pr-4 pt-4 md:pt-6'>
            <img
              src={`${process.env.BASE_PATH}/img/contact.webp`}
              alt='Contact image'
              width='320'
              height='284'
              className='w-80 aspect-auto'
            />
            <h1 className='pt-8 leading-tight text-4xl text-gray-800 font-bold text-center md:text-left'>
              Get in touch and talk to our experts about your project.
            </h1>
          </div>

          <div className='grid grid-cols-1 pt-8 md:pt-6 md:basis-1/2 w-full justify-items-center gap-4'>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactHero;
