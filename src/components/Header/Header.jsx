import React from 'react'
import { FaFan } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <nav className="bg-white md:px-10 lg:px-24 font-sans border-gray-300 border-y-2">
        <div className="lg:mx-auto flex my-2 items-center justify-between flex-wrap md:flex-nowrap">
          <div className="flex items-center flex-shrink-0 mx-2 text-black mr-6">
            <Link to="/"><span className="font-semibold text-xl tracking-tight">Name</span></Link>
          </div>
          <div className="relative mt-2 md:mr-auto lg:mt-0 mx-2">
            <input type="text" placeholder="Search" className="bg-white lg:w-72 text-black rounded-full border-2 border-gray-400 focus:outline-gray-900 focus:border-white px-2 " />
            <button className="absolute right-0 top-0 mr-2">
            <svg className="h-6 w-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path  d="M21 21l-4.35-4.35M15 10.5A4.5 4.5 0 1015 15a4.5 4.5 0 000-9z"/>
          </svg>
            </button>
          </div>
          <div className="w-full mt-2 lg:mt-0 bg-[#F7F7F7] md:bg-white items-center justify-center flex md:items-end lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <FaFan className="inline-block mb-1 mr-2 text-2xl" />
              <Link to="/Demo" className="inline-block my-1 lg:mt-0 text-base text-[#212185] hover:text-gray-800 mr-10">
                Demo
              </Link>
              <Link to="/About" className="inline-block my-1 lg:mt-0 text-base text-gray-800 font-semibold hover:text-[#83B3E7] mr-8">
                About
              </Link>
              <Link to="/Contact" className="bg-[#FFC72C] hover:bg-[#ffb758f3] inline-block my-1 py-2 px-6 lg:px-8 rounded-full lg:mt-0  text-base text-black hover:text-gray-800">
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Header;