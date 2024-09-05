import React from 'react'

const RightSidebar = () => {
  return (
    <>
        <div className="mt-8 md:mt-10">
            <div className="">
                {/* flex flex-col */}
                <div className='p-2 rounded-lg bg-[#F9F8F3]'> 
                    <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 justify-items-center justify-center'>
                        <div className='ps-2 mt-6 text-sm font-thin text-black'>
                            Hi, I’m Vincy. I help build websites, grow businesses, big and small. If that is what you want, contact me.
                        </div>
                        <div className='mt-6'>
                            <img src="awaisimage.jpg" className='border rounded-full' alt="Image" />
                        </div> 
                    </div>
                    <div className='px-2 pb-3'>
                        <p>I’m currently available for <b>freelance work</b>.</p>
                        <a className='text-gray-600 font-bold hover:underline hover:duration-300 cursor-pointer' href="http://abc@name.com">abc@name.com</a>
                    </div>            
                </div>

                <div className='border rounded-lg mt-8 p-3'> 
                    <h3 className='h3 font-bold'>Trending Now</h3>
                    <ul>
                        <li className='pt-2 hover:text-[#2F6BAE]'>
                            <a href="#">Simple PHP Shopping Cart</a>
                        </li>
                        <li className='pt-2 hover:text-[#2F6BAE]'>
                            <a href="#">Stripe Payment Gateway Integration using PHP</a>
                        </li>
                        <li className='pt-2 hover:text-[#2F6BAE]'>
                            <a href="#">User Registration in PHP with Login: Form with MySQL and Code Download</a>
                        </li>
                        <li className='pt-2 hover:text-[#2F6BAE]'>
                            <a href="#">PHP Contact Form</a>
                        </li>
                        <li className='pt-2 pb-3 hover:text-[#2F6BAE]'>
                            <a href="#">How to Create Dynamic Stacked Bar, Doughnut and Pie charts in PHP with Chart.js</a>
                        </li>
                    </ul>
                </div>
                
                <div className='border rounded-lg mt-8 p-3'> 
                    <h3 className='h3 font-bold cursor-default'>Testimonials</h3>
                    <p className='mt-3 cursor-default'>“Not only did she get back to me right away, but she provided exactly what I was looking for, and I was able to essentially drop the php code directly into my solution ...”</p>
                    <h3 className='h4 mt-3 text-gray-600 font-medium hover:text-gray-700 cursor-default'>Wendell Koi, SeaPro Solutions Inc, USA</h3>   
                    <a href="#" className="bg-[#FFB932] hover:bg-[#ffc85b] block w-full py-3 px-7 rounded mt-4 mb-2 text-black hover:text-gray-800">View more Testimonials</a>
                </div>

            </div>
        </div>
    </>
  )
}

export default RightSidebar

