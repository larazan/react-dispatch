import React, { useState } from 'react';
import Menu from './Menu';
import FilterSide from './FilterSide';

const HeaderStore = () => {
    const [catOpen, setCatOpen] = useState(false)
    const [cartOpen, setCartOpen] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const catToggle = () => {
        setCatOpen(!catOpen)
    }

    const cartToggle = () => {
        setCartOpen(!cartOpen)
    }

  return (
    <>
      <header class="z-10 sticky top-0 px-5 py-2 flex items-center justify-between bg-white border-b">
        <div class="hidden md:flex inline-flex space-x-4">
          
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
        <div className='flex flex-row w-full md:hidden items-center justify-between space-x-4'>
          <button class="h-5 w-5 " onClick={catToggle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-category"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 4h6v6h-6z"></path>
                <path d="M14 4h6v6h-6z"></path>
                <path d="M4 14h6v6h-6z"></path>
                <circle cx="17" cy="17" r="3"></circle>
              </svg>
            </button>
            <div className="w-full relative text-gray-600 border-2 border-gray-400/100">
              <input
                type="search"
                name="serch"
                placeholder="Search"
                className="w-full bg-white h-8 px-2 pr-10 text-sm "
                // {...bindInput}
              />
              <button
                type="submit"
                className="absolute right-0 top-0 mt-2 mr-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
              {/* {isBusy && <div className="w-4 h-4 border-2 border-dashed rounded-full border-slate-500 animate-spin"></div>} */}
            </div>
            <button onClick={toggle}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
</svg>
            </button>
        </div>

        <div class="flex inline-flex space-x-4"></div>
        <Menu catOpen={catOpen} catToggle={catToggle} />
        <FilterSide isOpen={isOpen} toggle={toggle} />
      </header>
    </>
  );
};

export default HeaderStore;
