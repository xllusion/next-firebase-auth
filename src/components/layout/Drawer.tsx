import React, { ReactNode } from 'react';

type DrawerElements = {
  id: string;
  sidebar?: React.ReactNode;
  children?: React.ReactNode;
};

const Drawer: React.FC<DrawerElements> = ({ id, sidebar, children }) => {

  const scrollHandler: React.EventHandler<React.UIEvent<HTMLDivElement>> = (
    e: React.UIEvent<HTMLDivElement>
  ) => {
    //document.querySelector('.drawer-content')?.scrollTop;
    //console.log('Scroll: ' + document.querySelector('.drawer-content')?.scrollTop);
  };

  return (
    <div className='drawer w-full mx-auto bg-white'>
      <label htmlFor={id} className='sr-only'>
        Sidebar toggle
      </label>
      <input id={id} type='checkbox' className='drawer-toggle' />
      <div className='drawer-content'>
        {/* Page content here  */}
        {children}
      </div>
      <div className='drawer-side'>
        <label htmlFor={id} className='drawer-overlay'></label>
        {/* Sidebar content here */}
        {sidebar}
      </div>
    </div>
  );
};

export default Drawer;
