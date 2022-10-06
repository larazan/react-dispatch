import React, { useState } from 'react';
import Menu from './Menu';


const HeaderStore = () => {
    const [catOpen, setCatOpen] = useState(false)
    const [cartOpen, setCartOpen] = useState(false)

    const catToggle = () => {
        setCatOpen(!catOpen)
    }

    const cartToggle = () => {
        setCartOpen(!cartOpen)
    }

  return (
    <>
      <header class="z-10 sticky top-0 px-5 py-2 flex items-center justify-between bg-white border-b">
        <div class="flex inline-flex space-x-4">
          <button class="h-5 w-5 md:hidden" onClick={catToggle}>
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
          <div class="flex items-center hidden md:flex">
            <a class="text-sm font-semibold text-gray-800 uppercase " href="#">
              Men
            </a>
          </div>
          <div class="flex items-center hidden md:flex">
            <a class="text-sm font-semibold text-gray-800 uppercase" href="#">
              Women
            </a>
          </div>
          <div class="flex items-center hidden md:flex">
            <a class="text-sm font-semibold text-gray-800 uppercase" href="#">
              kids
            </a>
          </div>
        </div>
        
        <div class="flex inline-flex space-x-4">
          
          
        </div>
        <Menu catOpen={catOpen} catToggle={catToggle} />
       
      </header>
    </>
  );
};

export default HeaderStore;
