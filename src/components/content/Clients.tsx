import React from 'react';
import { Logo } from '../../components';

const Clients: React.FC = () => {
  return (
    <>
      <div className='py-8 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto'>
        <h2 className='text-4xl font-bold text-center'>Brands We Have Worked With</h2>
        <div className='h-[2px] mx-auto w-96 my-4 bg-gradient-to-r from-white via-blue-500 to-white opacity-50'></div>
        <div className='mx-auto py-4 justify-items-center bg-white gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5'>
          <Logo title='Adidas' filename='adidas' />
          <Logo title='Aviva' filename='aviva' />
          <Logo title='Barclays' filename='barclays' />
          <Logo title='Disney' filename='disney' />
          <Logo title='EA' filename='ea' />
          <Logo title='Ebay' filename='ebay' />
          <Logo title='Google' filename='google' />
          <Logo title='Marks and Spencer' filename='mns' />
          <Logo title='MTV' filename='mtv' />
          <Logo title='Reiss' filename='reiss' />
          <Logo title='Sainsburys' filename='sainsburys' />
          <Logo title='Sony' filename='sony' />
          <Logo title='Tesco' filename='tesco' />
          <Logo title='Uniqlo' filename='uniqlo' />
          <Logo title='Warnerbros' filename='warnerbros' />
        </div>
        <p className='pt-2 text-center md:text-left text-gray-300'>
          *Note: some clients were done while working with other agencies.
        </p>
      </div>
    </>
  );
};

export default Clients;
