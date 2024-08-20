import React from 'react'

const Try = () => {
  return (
    <div className="">
   
      {/* Use a 12-column layout */}
      <div className="grid grid-cols-12">
        {/* Main Content - uses 8-colspan*/}
        <div className="col-span-8 bg-gray-50 h-[2000px] p-2">
          <h1>Article Title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
            veniam accusamus aut maxime. Quia hic, tempora quod dolorem,
            exercitationem aliquid deleniti esse vel atque impedit, sapiente
            quis. Beatae, deserunt molestias!
          </p>
        </div>
        {/* Sidebar - uses 4 col span */}
        <div className="">
          <div className="sticky top-2  h-[100px]">
            <div className='flex flex-col gap-y-5 mt-20 ms-20'>
              <a href='#' className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-32 py-2 px-4 rounded-full">Share</a>
              <a href='#' className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-32 py-2 px-4 rounded-full">Tweet</a>
              <a href='#' className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-32 py-2 px-4 rounded-full">Share</a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bg-indigo-100 h-[1000px] p-2"> Content for demo purposes</div> */}
   
  </div>
  )
}

export default Try;