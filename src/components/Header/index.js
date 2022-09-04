import React, { useState } from "react";
import { Link } from "react-router-dom";

import NavMenu from "../NavMenu";

import logo from "../../assets/images/logo.svg";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const navToggle = () => {
    setNavOpen(!navOpen);
  };

  return (
    <>
      <header className="z-20 w-full h-18 top-0 px-5 py-3 flex items-center justify-between bg-[#1f364d]">
        <div className="flex w-1/3">
          <div className="flex items-center text-[#9cb3c9] space-x-5">
            <button className="h-6 w-6 hidden md:flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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

            <Link to="">
              <div className="flex text-[#9cb3c9] hidden md:flex">
                <span className="text-md font-bold capitalize">explore</span>
              </div>
            </Link>
            {/* <Link to="">
              <div className="flex text-white hidden md:flex">
                <span className="text-md font-bold">Film</span>
              </div>
            </Link>
            <Link to="">
              <div className="flex text-white hidden md:flex">
                <span className="text-md font-bold">Serial TV</span>
              </div>
            </Link>
            <Link to="">
              <div className="flex text-white hidden md:flex">
                <span className="text-md font-bold">Musik</span>
              </div>
            </Link>
            <Link to="">
              <div className="flex text-white hidden md:flex">
                <span className="text-md font-bold">Artis</span>
              </div>
            </Link> */}
          </div>
        </div>

        <div className="flex justify-center w-1/3">
          <img className="h-4 mx-auto" src={logo} alt="tmdb" />
        </div>

        <div className="flex w-1/3 justify-end">
          <div className="flex flex-end pl-2 space-x-4 items-center">
            <Link to="/keys">
              <div className="flex flex-col text-[#9cb3c9] hidden md:flex">
                <button className="h-6 w-6 hidden md:flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </Link>
            <div className="flex">
              <button className="flex inline-flex items-center justify-center rounded px-4 py-1.5 bg-[#4799eb] opacity-90 hover:opacity-100">
                <span className="font-semibold text-white">Login</span>
              </button>
            </div>
            <div className="flex">
              <button className="flex inline-flex items-center justify-center rounded  px-4 py-1.5 bg-[#fe2c55] opacity-90 hover:opacity-100">
                <span className="font-semibold text-white">Daftar</span>
              </button>
            </div>
          </div>
        </div>

        <NavMenu navOpen={navOpen} navToggle={navToggle} />
      </header>
    </>
  );
};

export default Header;
