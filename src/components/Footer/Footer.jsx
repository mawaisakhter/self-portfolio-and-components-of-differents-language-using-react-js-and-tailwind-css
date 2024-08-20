import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-[#FFC72C] mt-20">
        <div className="ms-10 md:ms-20">
          <p className="text-2xl font-normal pt-8">Looking for an expert PHP freelance web developer?</p>
          <p className="text-normal pt-4 pb-10 md:flex md:flex-row">Do you want to build a modern, lightweight, responsive website quickly?
            <div className="mt-5 md:mt-0">
              <Link className="bg-[#FFC72C] hover:bg-gray-300 text-gray-600 py-2 px-8 ms-10 border border-gray-600 rounded-full">Contact Me
              </Link>
            </div>
          </p>
        </div>
      </div>
      <div className="pt-4 pb-10">
        <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 mt-4'>
            <div className="ps-20">
                <h1 className="text-normal font-semibold">Free Weekly Newsletter</h1>
                <div className="mt-2">
                    <input type="email" name="" id="" className="border p-1" placeholder="Enter your email here"/>
                    <button type="button" className="bg-[#CDCDCD] border-2 py-1 px-4 rounded-r-full">subscribe</button>
                </div>
                <p className="pt-1 text-gray-500">Privacy guaranteed, no spam ever.</p>
            </div>
            <div className="mt-6 text-gray-500">
                <ul className="flex flex-row gap-x-6 justify-center">
                    <li><a href="#">LinkedIn</a></li>
                    <li>|</li>
                    <li><a href="#">Facebook</a></li>
                    <li>|</li>
                    <li>© 2013 - 2024</li>
                    <li><a href="#">Name</a></li>
                </ul>
            </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
