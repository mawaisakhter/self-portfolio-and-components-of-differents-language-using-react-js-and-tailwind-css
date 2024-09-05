import React from 'react'

const Contact = () => {
  return (
    <div className='px-10 md:px-10 lg:px-24 mt-14'>
      <section className="grid grid-cols-3 lg:grid-cols-6 md:grid-cols-6 mb-5 gap-x-8">
   
        <div className='col-span-5 md:col-span-4 order-1 md:order-1 lg:order-2 px-16'>
          <div>
            <h1 className='text-3xl font-semibold' >Contact</h1>
            <p className='ps-2 text-lg'>You will get a response to all messages within a day.</p>
            <div className="mb-4 mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" for="username">Your Email *</label>
              <input className=" border rounded  py-1 px-3 text-gray-700" id="username" type="email"/>
            </div>
            <div>              
              <label className="block text-gray-700 text-sm font-bold mb-2" for="username">Message *</label>
              <textarea rows="10" className="block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight hover:border-gray-500"></textarea>
            </div>
            <button className="bg-[#FFB932] hover:bg-[#ffb547] block py-2 px-10 rounded mt-4 mb-2 text-black hover:text-gray-800">Send Message</button>
            <hr className='text-gray-400 mt-10' />
            <h5 className='mt-1 float-end'>Powered by FormApe</h5>
            <p className='mt-20'>* Your email and message will be kept confidential.</p>
          </div>
        </div>

        <div className='col-span-5 md:col-span-2 order-3 md:order-2 lg:order-3'>
          <div>
            <div className='p-2 rounded-lg bg-[#F9F8F3]'> 
                <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 justify-items-center justify-center'>
                  <div className='ps-2 mt-6 text-sm font-thin text-black'>
                    Hi, I’m Awais. I help build websites, grow businesses, big and small. If that is what you want, contact me.
                  </div>
                  <div className='mt-6'>
                    <img src="awaisimage.jpg" className='border rounded-full' alt="Image" />
                  </div> 
                </div>
                <div className='px-2 pb-3'>
                  <p>I’m currently available for <b>freelance work</b>.</p>
                  <a className='text-gray-600 font-bold hover:underline hover:duration-300 cursor-pointer' href="http://vincy@phppot.com">vincy@phppot.com</a>
                </div>            
            </div>
            <div className='border rounded-lg mt-8 p-3'> 
              <blockquote className='text-base  text-gray-900 dark:text-white'>
                <p className='mt-3 cursor-default'>"Vincy is talented. I am very impressed by her work and diligence. I highly recommend Vincy, and I am eager to work with her in my next project ..."</p>
              </blockquote>
              <h3 className='h4 mt-3 mb-4 text-gray-600 font-medium hover:text-gray-700 cursor-default'>Stephen Opiyo, Patira Data Science, USA</h3>   
            </div>
          </div>
        </div> 

      </section>
    </div>
  )
}

export default Contact
