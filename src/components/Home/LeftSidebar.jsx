import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const LeftSidebar = () => {

  const [expandedOption, setExpandedOption] = useState(null);

  const handleOptionClick = (option) => {
    if (expandedOption === option) {
      setExpandedOption(null);
    } else {
      setExpandedOption(option);
    }
  };

  return (
    <>
     <div className="mt-0 md:mt-10">
        <div className="flex flex-col">

        <button className="text-gray-800 border rounded-t-lg text-left py-1 px-4 bg-[#F2F2F2]"onClick={() => handleOptionClick('PHP')}>PHP</button>
        {expandedOption === 'PHP' && (
          <div>
            <a href="#" className="text-gray-800 hover:text-blue-500 text-left py-1 px-4 bg-white block">Sub Option A</a>
            <a href="#" className="text-gray-800 hover:text-blue-500 text-left py-1 px-4 bg-white block">Sub Option A</a>
            <a href="#" className="text-gray-800 hover:text-blue-500 text-left py-1 px-4 bg-white block">Sub Option A</a>
          </div>
        )}

        <button className="text-gray-800 text-left py-1 px-4 bg-[#FFEAEA]" onClick={() => handleOptionClick('jQuery')}>jQuery</button>
        {expandedOption === 'jQuery' && (
          <div>
            <a href="#" className="text-gray-800 hover:text-blue-500 text-left py-1 px-4 bg-white block">Sub Option B</a>
            <a href="#" className="text-gray-800 hover:text-blue-500 text-left py-1 px-4 bg-white block">Sub Option B</a>
            <a href="#" className="text-gray-800 hover:text-blue-500 text-left py-1 px-4 bg-white block">Sub Option B</a>
          </div>
        )}

        <button className="text-gray-800 text-left py-1 px-4 bg-[#E6FFF5]" onClick={() => handleOptionClick('JS')}>JavaScript</button>
        {expandedOption === 'JS' && (
          <div>
            <a href="#" className="text-gray-800 hover:text-blue-500 text-left py-1 px-4 bg-white block">Sub Option C</a>
            <a href="#" className="text-gray-800 hover:text-blue-500 text-left py-1 px-4 bg-white block">Sub Option C</a>
            <a href="#" className="text-gray-800 hover:text-blue-500 text-left py-1 px-4 bg-white block">Sub Option C</a>
          </div>
        )}

        <button className="text-gray-800 text-left py-1 px-4 bg-[#F1E7FE]" onClick={() => handleOptionClick('WordPress')}>WordPress</button>
        {expandedOption === 'WordPress' && (
          <div>
            <a href="#" className="text-gray-800 hover:text-blue-500 text-left py-1 px-4 bg-white block">Sub Option D</a>
            <a href="#" className="text-gray-800 hover:text-blue-500 text-left py-1 px-4 bg-white block">Sub Option D</a>
            <a href="#" className="text-gray-800 hover:text-blue-500 text-left py-1 px-4 bg-white block">Sub Option D</a>
          </div>
        )}

        <button className="text-gray-800 text-left py-1 px-4 bg-[#FEFFDE]" onClick={() => handleOptionClick('mysql')}>MYSQL</button>
        {expandedOption === 'mysql' && (
          <div>
            <a href="#" className="text-gray-800 hover:text-blue-500 text-left py-1 px-4 bg-white block">Sub Option E</a>
            <a href="#" className="text-gray-800 hover:text-blue-500 text-left py-1 px-4 bg-white block">Sub Option E</a>
            <a href="#" className="text-gray-800 hover:text-blue-500 text-left py-1 px-4 bg-white block">Sub Option E</a>
          </div>
        )}

        <button className="text-gray-800 text-left py-1 px-4 bg-[#FFE1A9]" onClick={() => handleOptionClick('css')}>CSS</button>
        {expandedOption === 'css' && (
          <div>
            <a href="#" className="text-gray-800 hover:text-blue-500 text-left py-1 px-4 bg-white block">Sub Option F</a>
            <a href="#" className="text-gray-800 hover:text-blue-500 text-left py-1 px-4 bg-white block">Sub Option F</a>
            <a href="#" className="text-gray-800 hover:text-blue-500 text-left py-1 px-4 bg-white block">Sub Option F</a>
          </div>
        )}
        </div> 
      </div> 
      <div className="sticky top-2 hidden lg:block h-[100px]">
        <div className='flex flex-col gap-y-5 mt-20  lg:ms-12'>
          <div className='flex flex-row bg-[#4267B2] hover:bg-blue-700 w-28 rounded-full'>
            <FaFacebook className='text-white ps-1 mt-1 text-3xl'/>
            <a href='#' className="ps-3 text-white hover:text- font-serif py-2">Share</a>
          </div>
          <div className='flex flex-row bg-[#1DA1F2] hover:bg-blue-700 w-28 rounded-full'>
            <FaTwitter className='text-white ps-1 mt-1 text-3xl'/>
            <a href='#' className="ps-3 text-white hover:text- font-serif py-2">Tweet</a>
          </div>
          <div className='flex flex-row bg-[#4267B2] hover:bg-blue-700 w-28 rounded-full'>
            <FaLinkedinIn className='text-white ps-1 mt-1 text-3xl'/>
            <a href='#' className="ps-3 text-white hover:text- font-serif py-2">Share</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSidebar;
