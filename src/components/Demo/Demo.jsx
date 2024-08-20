import React from 'react'
import LeftSidebar from '../Home/LeftSidebar';
import RightSidebar from '../Home/RightSidebar';
import DemoCenter from './DemoCenter';

const Demo = () => {
  return (
    <div className='md:px-10 lg:px-24'>
      <section className="grid grid-cols-8 lg:grid-cols-10 md:grid-cols-10 md:mb-5 gap-x-4">
        <div className='hidden lg:block lg:col-span-2'><LeftSidebar /></div>
        <div className='col-span-8 md:col-span-6 lg:col-span-5'><DemoCenter /></div>
        <div className='hidden md:block md:col-span-4 lg:col-span-3'><RightSidebar /></div>  
      </section>
    </div>
  )
}

export default Demo;