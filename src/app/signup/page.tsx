import React from 'react';
import Navbar from '@/components/Navbar';
const SignupForm = () => {
  return (
<div className="min-h-screen bg-gray-100">
      
      <Navbar />
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg" >

    <h2  className="text-3xl sm:text-3xl text-center font-bold">
    Sign<span className="text-accent">Up</span></h2>
      <form action="/signup" method="POST">
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Your Name"
            required
          />
        </div>

        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Your Email"
            required
          />
        </div>

        
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Your Password"
            required
          />
        </div>

        
        <div className="text-center">
          <button
            type="submit"
            className="bg-accent text-white px-6 py-2 rounded-full text-lg font-semibold w-full hover:bg-accent-dark transition duration-300"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default SignupForm;
