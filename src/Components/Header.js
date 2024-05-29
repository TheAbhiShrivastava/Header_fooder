// components/Header.js
import React from 'react';
import brandLogo from '../brand-logo.svg';
import { FaSearch } from "react-icons/fa";

function Header() {
  return (
    <header className=" p-4   bg-green-700">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <img src={brandLogo} className="h-20 w-60 mr-5" alt="logo" />
          <span className="text-black font-bold text-xl"></span>
        </div>
        <nav className="w-full block flex-grow lg:flex lg:items-center lg:w-auto gap-15">
          <ul className="text-xl lg:flex-grow ">
            <li className="block mt-10 lg:inline-block lg:mt-0 text-black hover:text-gray-400 mr-16">
              <a href="/">Solution</a>
            </li>
            <li className="block mt-10 lg:inline-block lg:mt-0 text-black hover:text-gray-400 mr-16">
              <a href="/about"> Document Serivce</a>
            </li>
            <li className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-400 mr-16">
              <a href="/contact">Support</a>
              </li>
              <li className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-400 mr-16">
              <a href="/contact">Company</a>
            </li>
            <li className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-400 mr-16">
              <a href="/contact">About</a>
            </li>
          </ul>
          <div className="relative mt-0 lg:mt-1 lg:ml-20">
            <input 
              type="text" 
              className="px-20 py-4 w-full lg:w-70 rounded-full text-black" 
              placeholder="Search..."
            />
            <FaSearch 
              className="absolute top-5 right-4 text-gray-500"
            />
          </div>
          
        </nav>
      </div>
    </header>
  );
}

export default Header;
