import React, { useRef } from 'react';
import { useOnClickOutside } from "../hooks/useOnClickOutside";
import { Link, NavLink } from "react-router-dom";

import logo from "../assets/images/logo.svg";

const menus = [
  {
    title: "edit profile",
    link: "settings",
  },
  {
    title: "Account Settings",
    link: "settings/account",
  },
  {
    title: "streaming services",
    link: "",
  },
  {
    title: "notification settings",
    link: "settings/notification",
  },
  {
    title: "blocked user",
    link: "",
  },
  {
    title: "import list",
    link: "",
  },
  {
    title: "sharing settings",
    link: "settings/sharing",
  },
  {
    title: "sessions",
    link: "settings/session",
  },
  {
    title: "API",
    link: "",
  },
  {
    title: "delete account",
    link: "settings/delete-account",
  },
];

const SideMenu = ({ isOpen, setIsOpen }) => {
  // Create a ref that we add to the element for which we want to detect outside clicks
  const ref = useRef();
  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(ref, () => setIsOpen(false));

  return (
    <>
      <div
        className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-10 lg:hidden lg:z-auto transition-opacity duration-200 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>
      <aside
        ref={ref}
        className={`transform top-0 left-0 w-64 bg-[#274059] fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <span className="flex w-full items-center p-5 border-b border-[#0d2134]">
          <img src={logo} alt="Logo" className="h-auto w-28 md:32 mx-auto" />
        </span>
        <div className='py-2'>
        <Link className="block md:hidden" to="news" onClick={() => setIsOpen(false)}>
          <span className="flex items-center px-4 py-2 md:py-3 space-x-3 hover:bg-[#162c41] text-[#9cb3c9]">
            <div className="flex justify-center items-center w-8 h-8 rounded-full bg-[#e25a91] text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
</svg>
            </div>
            <div className="flex flex-col">
              <div>
                <span className="text-md text-[#e25a91] font-semibold">
                  News
                </span>
              </div>
            </div>
          </span>
        </Link>
        <Link className="block md:hidden" to="movies" onClick={() => setIsOpen(false)}>
          <span className="flex items-center px-4 py-2 md:py-3 space-x-3 hover:bg-[#162c41] text-[#9cb3c9]">
            <div className="flex justify-center items-center w-8 h-8 rounded-full bg-[#e6375a] text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <div>
                <span className="text-md text-[#e6375a] font-semibold">
                  Movies
                </span>
              </div>
            </div>
          </span>
        </Link>
        <Link className="block md:hidden" to="musics" onClick={() => setIsOpen(false)}>
          <span className="flex items-center px-4 py-2 md:py-3 space-x-3 hover:bg-[#162c41] text-[#9cb3c9]">
            <div className="flex justify-center items-center w-8 h-8 rounded-full bg-[#f9af1a] text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <div>
                <span className="text-md text-[#f9af1a] font-semibold">
                  Musics
                </span>
              </div>
            </div>
          </span>
        </Link>
        <Link className="block md:hidden" to="actors" onClick={() => setIsOpen(false)}>
          <span className="flex items-center px-4 py-2 md:py-3 space-x-3 hover:bg-[#162c41] text-[#9cb3c9]">
            <div className="flex justify-center items-center w-8 h-8 rounded-full bg-[#49b66d] text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <div>
                <span className="text-md text-[#49b66d] font-semibold">
                  Celebs
                </span>
              </div>
            </div>
          </span>
        </Link>
        <Link className="block md:hidden" to="podcasts" onClick={() => setIsOpen(false)}>
          <span className="flex items-center px-4 py-2 md:py-3 space-x-3 hover:bg-[#162c41] text-[#9cb3c9]">
            <div className="flex justify-center items-center w-8 h-8 rounded-full bg-[#4799eb] text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <div>
                <span className="text-md text-[#4799eb] font-semibold">
                  Podcasts
                </span>
              </div>
            </div>
          </span>
        </Link>
        <Link className="block md:hidden" to="stores" onClick={() => setIsOpen(false)}>
          <span className="flex items-center px-4 py-2 md:py-3 space-x-3 hover:bg-[#162c41] text-[#9cb3c9]">
            <div className="flex justify-center items-center w-8 h-8 rounded-full bg-[#9270c2] text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <div>
                <span className="text-md text-[#9270c2] font-semibold">
                  Store
                </span>
              </div>
            </div>
          </span>
        </Link>
        </div>
        {menus.map((menu, index) => (
          <Link to={menu.link} onClick={() => setIsOpen(false)}>
            <span className="flex items-center px-4 py-2 md:py-3 hover:bg-[#162c41] text-[#9cb3c9]">
              <span className="font-bold text-sm md:text-base capitalize">{menu.title}</span>
            </span>
          </Link>
        ))}

        {/* <div className="fixed bottom-0 w-full">
          <div className="flex text-white items-center ">
            <button className="flex items-center space-x-3 px-4 py-3 space-x-4 bg-orange-600 hover:bg-orange-700 w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clipRule="evenodd"
                />
              </svg>{" "}
              <span className="text-white font-bold">Logout</span>
            </button>{" "}
          </div>
        </div> */}
      </aside>
    </>
  );
};

export default SideMenu;
