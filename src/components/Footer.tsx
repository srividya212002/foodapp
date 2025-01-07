import React from 'react'
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsTwitter, BsPinterest } from "react-icons/bs";
import Dash from './Dash';
import Link from 'next/link';
const Footer = () => {
  return (
    <div className="pt-40 container">
      <div className="grid md:grid-cols-3 gap-16">
        <div className="space-y-4">
          <h2 className="text-xl font-bold">About Us</h2>
          <p className="leading-[1.8]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
            atque repudiandae consectetur quibusdam eius dignissimos recusandae,
            tenetur maiores quos veniam deleniti esse.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-bold">The Restaurant</h2>

          <ul className="space-y-2">
          <li><Link href="/about">About Us</Link></li> {/* About link */}
          <li><Link href="/">Food</Link></li>
          <li><Link href="/">Contact</Link></li>
            <li><Link href="/contact">Home</Link></li>
          </ul>
        </div>

        <div>
          <div className="flex gap-8 text-accent text-2xl pt-16">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><BsTwitter /></a>
            <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer"><BsPinterest /></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          </div>
        </div>
        </div>
        {/* Copyright Section */}
      <div className="text-center pt-8 text-gray-600 text-sm">
        <p>&copy; 2025 Delicious Food. All rights reserved.</p>
      </div>
      <div className="w-fit mx-auto">
          <Dash />
        </div>
        </div>
  )
}
export default Footer;