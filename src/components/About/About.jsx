import React from 'react'
import LeftSidebar from '../Home/LeftSidebar';
import RightSidebar from '../Home/RightSidebar';
import AboutCenter from './AboutCenter';

const About = () => {
  return (
    <div className='px-10 md:px-10 lg:px-24'>
      <section className="grid grid-cols-3 lg:grid-cols-10 md:grid-cols-8 mb-5 gap-x-4">
        <div className='col-span-3 md:col-span-2 order-2 md:order-3 lg:order-1'><LeftSidebar/></div>
        <div className='col-span-4 md:col-span-5 order-1 md:order-1 lg:order-2'><AboutCenter/></div>
        <div className='col-span-3 md:col-span-3 order-3 md:order-2 lg:order-3'><RightSidebar/></div>  
      </section>
    </div>
  )
}

export default About