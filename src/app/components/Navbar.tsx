"use client";


import Link from "next/link";
import { FaSearch } 
from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearchOutline } from "react-icons/io5";

import { FaAngleDown } from "react-icons/fa6";



import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between lg:justify-around items-center border-b">
        <div className="flex gap-6 items-center text-3xl font-black text-color">
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
           <GiHamburgerMenu />
          </button> 
          <Link href="/"> Hekto</Link>
        </div>

        <ul className="hidden md:flex gap-6">
          <li>
            <Link
              href="/"
              className="scroll text-lg text-gray-700 flex items-center gap-1 transition ease-in hover:text-color duration-300"
            >
              Home <FaAngleDown/>
            </Link>
          </li>
          <li>
            <Link
              href="/pages"
              className="scroll flex items-center gap-1 text-lg text-gray-700 transition ease-in hover:text-color duration-300"
            >
              Pages 
            </Link>
          </li>
          
          <li>
            <Link
              href="/product"
              className="text-lg flex items-center gap-1 text-gray-700 transition ease-in hover:text-color duration-300"
            >
              Products
            </Link>
          </li>
          
          <li>
            <Link
              href="/blog"
              className="text-lg text-gray-700 transition ease-in hover:text-color duration-300"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/shop"
              className="text-lg text-gray-700 transition ease-in hover:text-color duration-300"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-lg text-gray-700 transition ease-in hover:text-color duration-300"
            >
              Contact
            </Link>
          </li>
          
         
          
        </ul>

        <div className="hidden lg:flex items-center space-x-4">
  <div className="relative">
    <input
      type="text"
      placeholder="Search for yourself..."
      className="border border-gray-300 bg-gray-100 px-4 py-2 pl-10 w-[300px]  focus:outline-none focus:border-color focus:bg-white transition duration-100 ease"
    />
    <span className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#FB2E86] p-[12px] ">
      <FaSearch className="text-white" />
    </span>
  </div>
</div>

        <div className="flex space-x-4 items-center">
         
          <button className="lg:hidden transition ease-in hover:text-color">
            <IoSearchOutline size={28} />
          </button>

          

         
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-72 bg-gray-100 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <button
          className="absolute top-4 right-4 text-black font-bold text-xl"
          onClick={() => setIsMenuOpen(false)}
        >
          ✕
        </button>
        <ul className="flex flex-col items-center mt-52 space-y-6">
        <li>
            <Link
              href="/"
              className="scroll text-lg text-gray-700 flex items-center gap-1 transition ease-in hover:text-color duration-300"
            >
              Home <FaAngleDown/>
            </Link>
          </li>
          <li>
            <Link
              href="/pages"
              className="scroll flex items-center gap-1 text-lg text-gray-700 transition ease-in hover:text-color duration-300"
            >
              Pages 
            </Link>
          </li>
          
          <li>
            <Link
              href="/product"
              className="text-lg flex items-center gap-1 text-gray-700 transition ease-in hover:text-color duration-300"
            >
              Products
            </Link>
          </li>
          
          <li>
            <Link
              href="/blog"
              className="text-lg text-gray-700 transition ease-in hover:text-color duration-300"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/shop"
              className="text-lg text-gray-700 transition ease-in hover:text-color duration-300"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-lg text-gray-700 transition ease-in hover:text-color duration-300"
            >
              Contact
            </Link>
          </li>
          
         
          
        </ul>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;