// components/Navbar.js
import React from 'react';
import Image from 'next/image';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="container pt-6">
      <div className="flex justify-between items-center">
        <Image src="/logo.png" width={50} height={50} alt="logo" />
        
        {/* Desktop menu */}
        <ul className="md:flex hidden gap-7 items-center font-semibold text-[15px]">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/food">Food</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <Link href="/signup">
            <button className="bg-accent text-white px-6 py-2 rounded-full text-[14px] font-semibold ml-6">
              Sign Up
            </button>
          </Link>
        </ul>

        {/* Mobile menu toggle */}
        <label htmlFor="menu-toggle" className="md:hidden cursor-pointer">
          <AiOutlineMenu className="text-accent" size={30} />
        </label>
        <input type="checkbox" id="menu-toggle" className="hidden peer" />

        {/* Mobile menu */}
        <div className="peer-checked:block hidden mt-4 bg-white shadow-lg rounded-lg">
          <div className="flex justify-end p-4">
            <label htmlFor="menu-toggle">
              <AiOutlineClose className="text-accent" size={30} />
            </label>
          </div>
          <ul className="flex flex-col gap-4 items-center font-semibold text-[15px]">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/food">Food</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li>
              <Link href="/signup">
                <button className="bg-accent text-white px-6 py-2 rounded-full text-[14px] font-semibold">
                  Sign Up
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
