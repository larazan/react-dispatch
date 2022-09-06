import React, { useRef  } from "react";
import { useOnClickOutside } from "../hooks/useOnClickOutside";
import { Link, NavLink } from "react-router-dom";

import bmc from '../assets/images/bmc.svg'
import logo from "../assets/images/logo.svg";

const menus = [
    {
        "title": "edit profile",
        "link": ""
    },
    {
        "title": "Account Settings",
        "link": ""
    },
    {
        "title": "streaming services",
        "link": ""
    },
    {
        "title": "notification settings",
        "link": ""
    },
    {
        "title": "blocked user",
        "link": ""
    },
    {
        "title": "import list",
        "link": ""
    },
    {
        "title": "sharing settings",
        "link": ""
    },
    {
        "title": "sessions",
        "link": ""
    },
    {
        "title": "API",
        "link": ""
    },
    {
        "title": "delete account",
        "link": ""
    },
]

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
          <img src={logo} alt="Logo" className="h-auto w-32 mx-auto" />
        </span>
        {menus.map((menu, index) => (
          <Link to={menu.link}>
            <span className="flex items-center px-4 py-3 hover:bg-[#162c41] text-[#9cb3c9]">
              <span className="font-bold capitalize">{menu.title}</span>
            </span>
          </Link>
        ))}

        <div className="fixed bottom-0 w-full">
          <div className="flex text-white items-center ">
            <button className="flex items-center space-x-3 px-4 py-3 space-x-4 bg-orange-600 hover:bg-orange-700 w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
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
        </div>
      </aside>
    </>
  );
};

export default SideMenu;
