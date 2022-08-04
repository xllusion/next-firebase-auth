import React from 'react';
import { Testimonial } from '../../components';

const Testimonials2: React.FC = () => {
  return (
    <>
      <div className='py-8 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto'>
        <h2 className='text-4xl font-bold text-center'>What People Say</h2>
        <div className='h-[2px] mx-auto w-96 my-4 bg-gradient-to-r from-white via-blue-500 to-white opacity-50'></div>
        <div className='mx-auto pt-4 justify-items-center gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
          <Testimonial
            title='Outstandingly Reliable'
            quote='Outstandingly reliable and a pleasure to work with. Ed is a wonder; he solves problems with elegant and thoughtful solutions, produces work in an efficient and ordered manner...'
            name='Angela Schofield'
            job='Owner at Performance Sports Nutrition'
          />
          <Testimonial
            title='Extremely Reliable'
            quote='I have worked with Ed on countless occasions and for a variety of challenging projects. Not only am I consistently pleased with the results of his work, but he is extremely reliable...'
            name='Martin Blinder'
            job='Founder, CEO at Tictrac'
          />
          <Testimonial
            title='Good Quality'
            quote='Ed is a great web developer who is quick and thorough in his work. He can work off short briefs and can work at very short notice, his work is always of good quality and on time...'
            name='Guillaume Buat-Ménard'
            job='Director at Flipside Group'
          />
        </div>
      </div>
    </>
  );
};

export default Testimonials2;
