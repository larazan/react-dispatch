import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/images/logo.svg";

const NavMenu = ({ navOpen, navToggle }) => {
  return (
    <>
      <aside
        className={`px-0 transform top-0 left-0 w-full bg-white bg-[#007ac9] fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${
          navOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <header className="z-10 sticky h-18 top-0 px-5 py-4 flex items-center justify-between bg-[#007ac9] border-b border-gray-700 ">
          <div className="flex">
            <img className="h-4" src={logo} alt="liveuamap" />
          </div>

          <div className="flex inline-flex items-center space-x-4">
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
            <button className="h-8 w-8 md:hidden2 text-white" onClick={navToggle}>
              <svg
                className="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </header>
        <div className="bg-[#007ac9] text-white">
          <div className="flex-none">
            <div className="">
              <div className="">
                <div className="flex justify-between px-8 py-4 border-b border-gray-700">
                  <div className="flex">
                    <a
                      href="#"
                      className="block text-sm font-bold uppercase whitespace-nowrap "
                    >
                      News
                    </a>
                  </div>
                  <div className="flex">
                    <button className="h-5 w-5">
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex justify-between px-8 py-4 border-b border-gray-700">
                  <div className="flex">
                    <a
                      href="#"
                      className="block text-sm font-bold uppercase whitespace-nowrap "
                    >
                      Film
                    </a>
                  </div>
                  <div className="flex">
                    <button className="h-5 w-5">
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex justify-between px-8 py-4 border-b border-gray-700">
                  <div className="flex">
                    <a
                      href="#"
                      className="block text-sm font-bold uppercase whitespace-nowrap "
                    >
                      Serial TV
                    </a>
                  </div>
                  <div className="flex">
                    <button className="h-5 w-5">
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex justify-between px-8 py-4 border-b border-gray-700">
                  <div className="flex">
                    <a
                      href="#"
                      className="block text-sm font-bold uppercase whitespace-nowrap "
                    >
                      Music
                    </a>
                  </div>
                  <div className="flex">
                    <button className="h-5 w-5">
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="flex justify-between px-8 py-4 border-b border-gray-700">
                  <div className="flex">
                    <a
                      href="#"
                      className="block text-sm font-bold uppercase whitespace-nowrap "
                    >
                      Artis
                    </a>
                  </div>
                  <div className="flex">
                    <button className="h-5 w-5">
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <a
                  href="#"
                  className="block text-sm font-bold uppercase whitespace-nowrap px-8 py-4 border-b border-gray-700 "
                >
                  Terbaru
                </a>
                <a
                  href="#"
                  className="block text-sm font-bold uppercase whitespace-nowrap px-8 py-4 border-b border-gray-700 "
                >
                  Terpopuler
                </a>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default NavMenu;
