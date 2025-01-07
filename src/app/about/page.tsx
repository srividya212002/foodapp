import React from "react";
import Image from "next/image";
import Dash from "@/components/Dash";
import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <main className="bg-gray-50 text-gray-800 py-10 px-4">

      
      <section className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold  mb-8">
          About <span className="text-accent">Us</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-lg text-gray-600 mb-6 md:mb-0 max-w-xl">
            <p>
              At Delicious Food, we combine tradition with innovation to create a dining experience that excites the senses and delights the palate. Our chefs focus on delivering an unforgettable culinary journey, using only the finest ingredients and age-old techniques passed down through generations.
            </p>
            <p className="mt-4">
              Whether you're looking for a casual meal with family or a special night out, we promise a memorable experience that you’ll want to share with others.
            </p>
          </div>
          <div className="w-full md:w-1/2 group">
            <Image
              src="/about.webp"
              alt="Delicious food"
              width={400} 
              height={280} 
              className="rounded-lg shadow-xl group-hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
        </div>
      </section>

      
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-center text-black mb-6">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center transform group hover:scale-105 transition-transform duration-300 ease-in-out">
            <Image
              src="/ingredients.webp"
              alt="Fresh Ingredients"
              width={60} 
              height={60} 
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-accent mb-2">Fresh Ingredients</h3>
            <p className="text-sm text-gray-500">
              We source only the finest, fresh ingredients, ensuring every dish bursts with authentic flavors.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center transform group hover:scale-105 transition-transform duration-300 ease-in-out">
            <Image
              src="/chiefs.jpeg"
              alt="Expert Chefs"
              width={60} 
              height={60} 
            />
            <h3 className="text-xl font-semibold text-accent mb-2">Expert Chefs</h3>
            <p className="text-sm text-gray-500">
              Our talented chefs craft exceptional dishes with passion, blending creativity and expertise.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center transform group hover:scale-105 transition-transform duration-300 ease-in-out">
            <Image
              src="/happy customers.jpeg"
              alt="Happy Customers"
              width={60} 
              height={60} 
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-accent mb-2">Happy Customers</h3>
            <p className="text-sm text-gray-500">
              Our guests are our priority. We ensure a memorable experience with every visit.
            </p>
          </div>
        </div>
      </section>

      
      <section className="bg-white text-gray-800 py-8 px-6 rounded-lg shadow-lg">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-black mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600">
            We aim to provide a dining experience that combines exceptional flavors, innovative cuisine, and a commitment to sustainability. Our mission is to make every guest feel valued and welcomed, while maintaining an unwavering commitment to quality and service.
          </p>
          <div className="w-fit mx-auto mt-8">
            <Dash />
          </div>
        </div>
      </section>
    </main>
  );
}
