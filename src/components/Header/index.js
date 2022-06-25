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
      <header className="z-20 w-full h-18 top-0 px-5 py-4 flex items-center justify-between bg-[#007ac9]">
        <div className="flex ">
          <div className="flex items-center space-x-5">
            <div className="flex">
              <img className="h-4" src={logo} alt="liveuamap" />
            </div>
            <Link to="">
              <div className="flex text-white hidden md:flex">
                <span className="text-md font-bold">News</span>
              </div>
            </Link>
            <Link to="">
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
            </Link>
          </div>
        </div>

        <div className="px-2">
          <div className="flex pl-2 space-x-5 items-center">
            <Link to="">
              <div className="flex flex-col text-white hidden md:flex">
                <button className="h-6 w-6 hidden md:flex">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 46 53"
                    className=""
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#ffffff"
                      fillRule="nonzero"
                      d="M0 48.103l.005-.135c.087-1.306 1.303-6.075 3.647-14.308.803-2.214 1.84-3.763 3.113-4.649 1.273-.885 2.96-1.328 5.064-1.328h3.32c.913.969 2.047 1.792 3.403 2.47a9.523 9.523 0 0 0 4.317 1.016c1.466 0 2.884-.339 4.254-1.016 1.37-.678 2.525-1.501 3.465-2.47h3.32c2.159 0 3.874.443 5.147 1.328 1.273.886 2.255 2.435 2.947 4.649l.89 3.102c1.897 6.674 2.845 10.482 2.845 11.424 0 1.19-.484 1.923-1.452 2.2-1.024.553-3.113 1.01-6.267 1.37l-1.453-8.758h-1.536v8.84c-3.68.277-7.706.415-12.077.415-4.317 0-8.37-.138-12.161-.415v-8.84H9.546l-1.37 8.757c-2.822-.221-4.98-.678-6.474-1.37a2.463 2.463 0 0 1-1.225-.892A2.287 2.287 0 0 1 0 48.103zm9.712-34.78c0-2.435.609-4.67 1.826-6.703a13.61 13.61 0 0 1 4.877-4.835C18.448.595 20.683 0 23.118 0c2.38 0 4.579.595 6.599 1.785A13.333 13.333 0 0 1 34.53 6.62c1.19 2.034 1.785 4.268 1.785 6.703 0 2.435-.595 4.69-1.785 6.765a13.847 13.847 0 0 1-4.814 4.98 12.34 12.34 0 0 1-6.6 1.868h-.165c-2.38 0-4.587-.623-6.62-1.868a13.79 13.79 0 0 1-4.835-4.98c-1.19-2.075-1.785-4.33-1.785-6.765z"
                    ></path>
                  </svg>
                </button>
              </div>
            </Link>
            <Link to="/keys">
              <div className="flex flex-col text-white hidden md:flex">
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
           
              <div className="flex flex-col text-white hidden md:flex" onClick={navToggle}>
                <button className="h-8 w-8 hidden md:flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
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
              </div>
            
          </div>
        </div>

        <NavMenu navOpen={navOpen} navToggle={navToggle} />
      </header>
    </>
  );
};

export default Header;
