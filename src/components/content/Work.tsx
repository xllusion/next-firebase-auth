import React from 'react';

const Work: React.FC = () => {
  return (
    <>
      <div className='py-8 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto'>
        <h2 className='text-4xl font-bold text-center'>Case Studies</h2>
        <div className='h-[2px] mx-auto w-96 my-4 bg-gradient-to-r from-white via-blue-500 to-white opacity-50'></div>
        <div className='card w-full bg-base-100 shadow-md image-full opacity-75 mt-4'>
          <figure>
            <img
              src={`${process.env.BASE_PATH}/img/work-collage.jpg`}
              alt='Work image'
              loading='lazy'
              className='aspect-auto'
            />
          </figure>
          <div className='card-body self-center items-center'>
            <h2 className='card-title font-sans font-bold text-4xl'>Case studies coming soon...</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
