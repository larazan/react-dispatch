import React, { useState } from "react";
import { Link } from "react-router-dom";


import NavMenu from "./NavMenu";
import SearchModal from "./SearchModal";
import Explore from "./Explore";
import SideMenu from "./SideMenu";
import Notifications from "./Notifications";
import UserMenu from "./UserMenu";
import MiniCart from "./MiniCart";

import logo from "../assets/images/logo.svg";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const openDrawer = () => {
    console.log("klik");
    setIsOpen(!isOpen);
  };

  const navToggle = () => {
    setNavOpen(!navOpen);
  };

  return (
    <>
      <header className="z-20 w-full h-18 top-0 px-3 md:px-5 py-3 flex items-center justify-between bg-[#1f364d]">
        <div className="flex md:w-1/3">
          <div className="flex items-center text-white space-x-1 md:space-x-5">
            <button
              className="h-5 w-5 md:h-6 md:w-6 flex "
              onClick={openDrawer}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 md:h-6 md:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <Explore className="hidden md:block" />

            <div className="flex md:hidden">
              <Link to="">
                <img className="h-4 md:h-4 mx-auto" src={logo} alt="tmdb" />
              </Link>
            </div>
          </div>
        </div>

        <div className="hidden md:flex justify-center md:w-1/3">
          <Link to="">
            <img className="h-3 md:h-4 mx-auto" src={logo} alt="tmdb" />
          </Link>
        </div>

        <div className="flex md:w-1/3 justify-end">
          <div className="flex flex-end  items-center">
            <div className="flex flex-col text-[#01b4e4] flex">
              <button
                className="h-5 w-5 md:h-6 md:w-6 flex"
                onClick={(e) => {
                  e.stopPropagation();
                  setSearchModalOpen(true);
                }}
                aria-controls="search-modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 md:w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
            <SearchModal
              id="search-modal"
              searchId="search"
              modalOpen={searchModalOpen}
              setModalOpen={setSearchModalOpen}
            />
            
            <Notifications />
            <MiniCart />
            <UserMenu />
            
            <div className="hidden md:flex pl-2 md:pl-3">
              <Link to={"login"}>
                <button className="flex inline-flex items-center justify-center rounded px-3 py-1.5 md:px-4 md:py-1.5 bg-[#4799eb] opacity-90 hover:opacity-100">
                  <span className="text-sm md:text-base md:font-semibold text-white">Login</span>
                </button>
              </Link>
            </div>

            <div className="hidden md:flex pl-2 md:pl-3">
              <Link to={"register"}>
                <button className="flex inline-flex items-center justify-center rounded  px-3 py-1.5 md:px-4 md:py-1.5 bg-[#fe2c55] opacity-90 hover:opacity-100">
                  <span className="text-sm md:text-base md:font-semibold text-white">Daftar</span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        <NavMenu navOpen={navOpen} navToggle={navToggle} />
      </header>
      <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Header;
