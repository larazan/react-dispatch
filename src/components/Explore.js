import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Transition from "../utils/Transition";

function Explore() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="relative inline-flex ml-3">
      <button
        ref={trigger}
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        {/* <span className="sr-only">Notifications</span> */}
        <div className="flex text-[#9cb3c9] hidden md:flex">
          <span className="text-md font-bold capitalize">explore</span>
        </div>
      </button>

      <Transition
        className="origin-top-right z-10 absolute top-full left-0 -mr-48 sm:mr-0 min-w-80 w-72 bg-[#274059] border border-[#274059] py-1.5 rounded shadow-lg overflow-hidden mt-1"
        show={dropdownOpen}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
        >
          <div className="text-xs font-semibold text-slate-400 uppercase pt-1.5 pb-2 px-4">
            Explore
          </div>
          <ul>
            
            <li className=" last:border-0">
              <Link
                className="flex justify-center2 items-center space-x-3 block py-3 px-4  hover:bg-[#162c41]"
                to="/movies"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <div className="flex justify-center items-center w-12 h-12 rounded-full bg-[#e6375a] text-white">
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
                      d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <div>
                    <span className="text-lg text-[#e6375a] font-semibold">
                      Movies
                    </span>
                  </div>
                  <span className="text-sm">see what everyone working on</span>
                </div>
              </Link>
            </li>
            <li className=" last:border-0">
              <Link
                className="flex justify-center2 items-center space-x-3 block py-3 px-4  hover:bg-[#162c41]"
                to="musics"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <div className="flex justify-center items-center w-12 h-12 rounded-full bg-[#f9af1a] text-white">
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
                      d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <div>
                    <span className="text-lg text-[#f9af1a] font-semibold">
                      Musics
                    </span>
                  </div>
                  <span className="text-sm">see what everyone working on</span>
                </div>
              </Link>
            </li>
            <li className=" last:border-0">
              <Link
                className="flex justify-center2 items-center space-x-3 block py-3 px-4  hover:bg-[#162c41]"
                to="actors"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <div className="flex justify-center items-center w-12 h-12 rounded-full bg-[#49b66d] text-white">
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
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <div>
                    <span className="text-lg text-[#49b66d] font-semibold">
                      Actors
                    </span>
                  </div>
                  <span className="text-sm">see what everyone working on</span>
                </div>
              </Link>
            </li>
            <li className=" last:border-0">
              <Link
                className="flex justify-center2 items-center space-x-3 block py-3 px-4  hover:bg-[#162c41]"
                to="podcasts"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <div className="flex justify-center items-center w-12 h-12 rounded-full bg-[#4799eb] text-white">
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
                      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <div>
                    <span className="text-lg text-[#4799eb] font-semibold">
                      Podcasts
                    </span>
                  </div>
                  <span className="text-sm">see what everyone working on</span>
                </div>
              </Link>
            </li>
            <li className=" last:border-0">
              <Link
                className="flex justify-center2 items-center space-x-3 block py-3 px-4  hover:bg-[#162c41]"
                to="news"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <div className="flex justify-center items-center w-12 h-12 rounded-full bg-[#e25a91] text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                </div>
                <div className="flex flex-col">
                  <div>
                    <span className="text-lg text-[#e25a91] font-semibold">
                      News
                    </span>
                  </div>
                  <span className="text-sm">see what everyone working on</span>
                </div>
              </Link>
            </li>
            <li className=" last:border-0">
              <Link
                className="flex justify-center2 items-center space-x-3 block py-3 px-4  hover:bg-[#162c41]"
                to="store"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <div className="flex justify-center items-center w-12 h-12 rounded-full bg-[#9270c2] text-white">
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
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <div>
                    <span className="text-lg text-[#9270c2] font-semibold">
                      Store
                    </span>
                  </div>
                  <span className="text-sm">see what everyone working on</span>
                </div>
              </Link>
            </li>
           
          </ul>
        </div>
      </Transition>
    </div>
  );
}

export default Explore;
