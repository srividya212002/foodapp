"use client";
import React, { useState } from "react";
import Dash from "./Dash";
import Image from "next/image";
import MenuCard from "./MenuCard";

const menuData = [
  {
    img: "/cake.avif",
    title: "Delicious Cake",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
];

const Menu = () => {
  const [activeTab, setActiveTab] = useState("appetizers");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const getTabImage = () => {
    switch (activeTab) {
      case "appetizers":
        return "/menu_left.png";
      case "breakfast":
        return "/breakfast.webp";
      case "salads":
        return "/salads.webp";
      case "meat":
        return "/meat&fish.webp";
      default:
        return "/default_image.png";
    }
  };

  return (
    <div className="container pt-40">
      <div className="space-y-4 w-fit mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold">
          Our <span className="text-accent">Menu</span>
        </h2>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolorem
          <br />
          quidem esse eum animi?
        </p>
        <div className="w-fit mx-auto">
          <Dash />
        </div>
      </div>

      <div>
        {/* Navigation Tabs */}
        <ul className="flex flex-wrap border-b">
          <li
            className={`cursor-pointer text-sm sm:text-base px-2 sm:px-4 py-1 sm:py-2 ${
              activeTab === "appetizers" ? "bg-accent text-white p-1" : ""
            }`}
            onClick={() => handleTabClick("appetizers")}
          >
            Appetizers
          </li>
          <li
            className={`cursor-pointer text-sm sm:text-base px-2 sm:px-4 py-1 sm:py-2 ${
              activeTab === "breakfast" ? "bg-accent text-white p-1" : ""
            }`}
            onClick={() => handleTabClick("breakfast")}
          >
            Breakfast
          </li>
          <li
            className={`cursor-pointer text-sm sm:text-base px-2 sm:px-4 py-1 sm:py-2 ${
              activeTab === "salads" ? "bg-accent text-white p-1" : ""
            }`}
            onClick={() => handleTabClick("salads")}
          >
            Salads
          </li>
          <li
            className={`cursor-pointer text-sm sm:text-base px-2 sm:px-4 py-1 sm:py-2 ${
              activeTab === "meat" ? "bg-accent text-white p-1" : ""
            }`}
            onClick={() => handleTabClick("meat")}
          >
            Meat & Fish
          </li>
        </ul>

        {/* Tab Content */}
        <div className="p-4">
          <div className="grid lg:grid-cols-[35%,1fr] gap-10 pt-10">
            <div className="w-fit mx-auto">
              <h3>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h3>
              <Image
                className="w-[100%] max-w-[400px] h-auto"
                src={getTabImage()}
                width={500}
                height={500}
                alt="dish"
              />
            </div>

            <div className="grid w-fit mx-auto sm:grid-cols-2 gap-4">
              {menuData.map((item, index) => (
                <MenuCard
                  key={index}
                  img={item.img}
                  title={item.title}
                  desc={item.desc}
                  price={item.price}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
