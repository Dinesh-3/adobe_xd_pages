import React, { Component } from "react";
import { Link } from "react-router-dom";
import {useState} from "react"

const Header = () => {
  const [currentPath, setcurrentPath] = useState(0)
  const changePath = (index) => {
    setcurrentPath(index)
  }
  return (
        <div class="bg-skin_light w-full h-auto">
          <div class="relative px-10 w-full flex justify-between pt-7 pb-4">
            <div class="relative w-1/4">
              <input
                type="text"
                name="product_search"
                id="product_search"
                placeholder="Search for anything"
                class="focus:ring-1 z-20 absolute focus:ring-copperfield-500 focus:outline-none h-9 px-5 bg-skin_thin ml-1 md:ml-2 lg:ml-3 w-11/12 rounded-lg"
              />
              <button
                type="submit"
                class="w-11 h-9 z-20 text-center px-2.5 absolute inline-block rounded-full text-lg top-0 mr-2 right-0 focus:outline-none"
              >
                <i class='text-xl bx bx-search' ></i>
              </button>
            </div>
            <h1 class="text-3xl">LOGO</h1>
            <div class="p-0 m-0 relative">
              <button class="w-9 h-9 mr-5 text-center focus:outline-none bg-skin_thin rounded-full">
                <i class='text-xl bx bx-location-plus'></i>
              </button>
              <button class="w-9 h-9 mr-5 text-center focus:outline-none bg-skin_thin rounded-full">
                <i class='text-xl bx bx-user' ></i>
              </button>
              <Link to="/carts">
                <button class="w-9 h-9 text-center focus:outline-none bg-skin_thin rounded-full">
                <i class='text-xl bx bx-shopping-bag' ></i>
                </button>
              </Link>
            </div>
          </div>
          <hr class="border-primary "></hr>
          <div class="hidden lg:flex justify-evenly">
            <Link to="/">
              <div class="px-4 pt-4 text-center" onClick={() => changePath(0)}>
                Home
                { currentPath ==0 &&  <div class="bg-skin_dark h-1 mt-4"></div>}
              </div>
            </Link>
            <Link to="/detail/1">
              <div class="px-4 py-4 text-center dropdown" onClick={() => changePath(1)}>
                <div class="flex ">
                  <span> Shop <i class='text-lg bx bxs-chevron-down' ></i> </span>
                </div>
                { currentPath ==1 &&  <div class="bg-skin_dark h-1 mt-4"></div>}
                </div>
            </Link>
            <Link to="/all-products">
              <div class="px-4 py-4 text-center" onClick={() => changePath(2)}>
                Flowers
                { currentPath ==2 &&  <div class="bg-skin_dark h-1 mt-4"></div>}  
              </div>
              
            </Link>
          </div>
        </div>
    )
}

export default Header;
