

import React from 'react';
import Navbar from '@/components/Navbar';
import Dash from '@/components/Dash';

const Food = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      <header className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Delicious <span className="text-accent">Food</span>
        </h2>
        <p className="text-lg text-gray-600 mt-2">Delicious dishes just for you!</p>
      </header>

      
      <section className="text-center mb-12">
        <h2 className="text-2xl font-semibold text-gray-800">Food Categories</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <div className="bg-white p-4 rounded-lg shadow-md w-28 sm:w-32">
            <h3 className="text-sm sm:text-xl font-medium text-gray-700">Burgers</h3>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md w-28 sm:w-32">
            <h3 className="text-sm sm:text-xl font-medium text-gray-700">Pizza</h3>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md w-28 sm:w-32">
            <h3 className="text-sm sm:text-xl font-medium text-gray-700">Pasta</h3>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md w-28 sm:w-32">
            <h3 className="text-sm sm:text-xl font-medium text-gray-700">Sushi</h3>
          </div>
        </div>
      </section>

      
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <img
            src="/burger.jpeg"
            alt="Cheeseburger"
            className="w-full h-48 object-cover rounded-md transform transition duration-300 hover:scale-105"
          />
          <h3 className="text-lg font-medium text-gray-700 mt-4">Cheeseburger</h3>
          <p className="text-gray-600 mt-2">$12.99</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <img
            src="/pizza.jpeg"
            alt="Pepperoni Pizza"
            className="w-full h-48 object-cover rounded-md transform transition duration-300 hover:scale-105"
          />
          <h3 className="text-lg font-medium text-gray-700 mt-4">Pepperoni Pizza</h3>
          <p className="text-gray-600 mt-2">$15.99</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <img
            src="/pasta.jpg"
            alt="Spaghetti Pasta"
            className="w-full h-48 object-cover rounded-md transform transition duration-300 hover:scale-105"
          />
          <h3 className="text-lg font-medium text-gray-700 mt-4">Spaghetti Pasta</h3>
          <p className="text-gray-600 mt-2">$14.99</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <img
            src="/sushi.jpg"
            alt="Sushi Rolls"
            className="w-full h-48 object-cover rounded-md transform transition duration-300 hover:scale-105"
          />
          <h3 className="text-lg font-medium text-gray-700 mt-4">Sushi Rolls</h3>
          <p className="text-gray-600 mt-2">$18.99</p>
        </div>
      </section>

      <div className="w-fit mx-auto">
        <Dash />
      </div>
    </div>
  );
};

export default Food;
