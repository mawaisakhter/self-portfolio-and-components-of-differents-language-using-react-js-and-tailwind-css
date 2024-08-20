import React from 'react'

const Center = () => {
  return (
    <>
      <div className="mt-10 px-2">

        <div>
          <h1 className='h1 text-[#2F2F2F] font-bold text-3xl text-left'>Helping you build websites</h1>
          <p className='mt-5'>Do you want to build a modern, light-weight and responsive website? or wish to upgrade? <a className="text-blue-500 hover:underline" href="#">contact Vincy</a>. You can also order a <b>free review report</b>.</p>
          <p className='mt-5'>Thank you to the wonderful Phppot community for the millions of views. All source code published in the blog are uncopyrighted. Its free!</p>
        </div>

        <h2 className='mt-3 font-bold text-xl italic text-[#757575]'>New on Blog</h2>

        <div className='mt-2'>
          <a href="#" className='text-[#2F2F2F] font-bold text-2xl text-left hover:underline'>How to Add Input to Form using jQuery</a>
          <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center mt-4'>
            <div className='col-span-3 text-md font-semibold text-black'>
            How to Create Multi Step Form in WordPress with or without plugin.
            </div>
            <div>
              <img src="https://phppot.com/wp-content/uploads/2024/04/multi-step-form-wordpress-550x287.jpg" className='h-14 rounded-xl' alt="image"/>
            </div> 
          </div>
          <h2 className='mt-3 font-bold text-base italic text-[#757575]'>APRIL 4TH, 2024</h2>
        </div>

        <div className='mt-20'>
          <h1 className='h1 text-[#2F2F2F] font-bold text-xl text-left'>Build eCommerce Website (Shopping Cart)</h1>

          <div className='mt-5 flex flex-row gap-x-6'>
            <img src="https://phppot.com/wp-content/themes/solandra/images/icons/shopping-cart-ic.png?v2" className='h-5 mt-1' alt="" />
            <a href="#" className='hover:underline text-gray-900'>Simple PHP Shopping Cart</a>
          </div>

          <div className='mt-5 flex flex-row gap-x-6'>
            <img src="https://phppot.com/wp-content/themes/solandra/images/icons/rocket-ic.png?v2" className='h-5 mt-1' alt="" />
            <a href="#" className='hover:underline text-gray-900'> PHP Shopping Cart with PayPal Payment Gateway Integration</a>
          </div>

          <div className='mt-5 flex flex-row gap-x-6'>
            <img src="https://phppot.com/wp-content/themes/solandra/images/icons/shopping-store-ic.png?v2" className='h-5 mt-1' alt="" />
            <a href="#" className='hover:underline text-gray-900'> PHP Shopping Cart by jQuery Drag and Drop</a>
          </div>

          <div className='mt-5 flex flex-row gap-x-6'>
            <img src="https://phppot.com/wp-content/themes/solandra/images/icons/reward-ic.png?v2" className='h-5 mt-1' alt="" />
            <a href="#" className='hover:underline text-gray-900'>Top 10 Factors in eCommerce Shopping Cart Software Gallery Design</a>
          </div>

          <div className='mt-5 flex flex-row gap-x-6'>
            <img src="https://phppot.com/wp-content/themes/solandra/images/icons/persistence-ic.png?v2" className='h-5 mt-1' alt="" />
            <a href="#" className='hover:underline text-gray-900'>How to Build a Persistent Shopping Cart in PHP</a>
          </div>

        </div>

        <div className='mt-14'>
          <h1 className='h1 text-[#2F2F2F] font-bold text-2xl text-left'>Recent Articles</h1>

          <div className='mt-10'>
            <a href='#' className='hover:underline text-xl font-bold text-gray-900'>How to Add Input to Form using jQuery</a>
            <div className='mt-3 flex flex-row gap-x-6'>
              <div>
                <img src="https://phppot.com/wp-content/uploads/2024/03/jquery-add-input-to-form-output-150x150.jpg" className='w-72 h-40 border-2 rounded-3xl mt-1' alt="" />
              </div>
              <div>
                <p className='text-gray-900'>How to add or remove input fields to the form HTML dynamically using jQuery on the click events. ...</p>
                <h2 className='mt-3 font-bold text-sm italic text-[#757575]'>APRIL 4TH, 2024</h2>
              </div>
            </div>
          </div>

          <div className='mt-10'>
            <a href='#' className='hover:underline text-xl font-bold text-gray-900'>React Drag and drop</a>
            <div className='mt-3 flex flex-row gap-x-6'>
              <div>
                <img src="https://phppot.com/wp-content/uploads/2024/03/react-drag-and-drop-150x150.jpg" className='w-72 h-40 border-2 rounded-3xl mt-1' alt="" />
              </div>
              <div>
                <p className='text-gray-900'>A simple component to enable React drag and drop feature to drag an image element on a viewport. ...</p>
                <h2 className='mt-3 font-bold text-sm italic text-[#757575]'>APRIL 4TH, 2024</h2>
              </div>
            </div>
          </div>

          <div className='mt-10'>
            <a href='#' className='hover:underline text-xl font-bold text-gray-900'>Simple HTML 5 star rating code</a>
            <div className='mt-3 flex flex-row gap-x-6'>
              <div>
                <img src="https://phppot.com/wp-content/uploads/2024/03/html-star-rating-output-150x150.jpg" className='w-72 h-40 border-2 rounded-3xl mt-1' alt="" />
              </div>
              <div>
                <p className='text-gray-900'>How to create a simple code for HTML 5 star rating for a question and answer model. ...</p>
                <h2 className='mt-3 font-bold text-sm italic text-[#757575]'>APRIL 4TH, 2024</h2>
              </div>
            </div>
          </div>

          <div className='mt-10'>
            <a href='#' className='hover:underline text-xl font-bold text-gray-900'>Google Sheets PHP integration: Add form data to Sheets</a>
            <div className='mt-3 flex flex-row gap-x-6'>
              <div>
                <img src="https://phppot.com/wp-content/uploads/2024/03/google-sheets-record-set-150x150.jpg" className='w-72 h-40 border-2 rounded-3xl mt-1' alt="" />
              </div>
              <div>
                <p className='text-gray-900'>Easy steps with simple coding to learn how to add php form data to Google Sheets via API. ...</p>
                <h2 className='mt-3 font-bold text-sm italic text-[#757575]'>APRIL 4TH, 2024</h2>
              </div>
            </div>
          </div>

          <div className='mt-10'>
            <a href='#' className='hover:underline text-xl font-bold text-gray-900'>How to Add to Cart in Laravel</a>
            <div className='mt-3 flex flex-row gap-x-6'>
              <div>
                <img src="https://phppot.com/wp-content/uploads/2024/03/add-to-cart-in-laravel-150x150.jpg" className='w-72 h-40 border-2 rounded-3xl mt-1' alt="" />
              </div>
              <div>
                <p className='text-gray-900'>Easy code for learning how to create a multi-step wizard form in PHP with a step by step form validation. ...</p>
                <h2 className='mt-3 font-bold text-sm italic text-[#757575]'>APRIL 4TH, 2024</h2>
              </div>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default Center