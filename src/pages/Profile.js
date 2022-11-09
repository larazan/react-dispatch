import React, { useState, useRef, useEffect } from "react";
import Avatar from "react-avatar";
import { useLocation, Outlet, Link, NavLink } from "react-router-dom";
import { useOnClickOutside } from "../hooks/useOnClickOutside";

const Profile = () => {
  const [showDrop, setShowDrop] = useState(false);

  const ref = useRef();
  useOnClickOutside(ref, () => setShowDrop(false));

  const openDrop = (e) => {
    e.stopPropagation();
    console.log("open drop");
    setShowDrop((prev) => !prev);
  };

  const location = useLocation();

  console.log(location.pathname);

  let urls = location.pathname.split("/");
  let lastUrl = urls[urls.length - 1];

  console.log(lastUrl);

  return (
    <>
      <main className="bg-[#1f364d] bg-opacity-252">
        <div className="flex flex-col translate-x-0 mt-0 translate-x-0">
          <div className="relative w-full">
            {/* <img
              className="w-full md:w-full h-full  md:object-cover"
              src="https://preview.cruip.com/mosaic/images/profile-bg.jpg"
              width="979"
              height="420"
              alt="Profile background"
            /> */}
            <button
              className="absolute left-2 block md:hidden text-white top-2 cursor-pointer"
              aria-controls="profile-sidebar"
              aria-expanded="false"
            >
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
                  d="M11 17l-5-5m0 0l5-5m-5 5h12"
                />
              </svg>
            </button>
          </div>

          <div className="p-2 relative">
            <div className="mb-1 ">
              <div className="flex flex-row px-2 md:px-4 items-center space-x-4">
                <div className="inline-flex  ">
                  {/* <img
                    className="rounded-full border-8 border-[#284057]"
                    src="https://preview.cruip.com/mosaic/images/user-128-01.jpg"
                    width="158"
                    height="158"
                    alt="Avatar"
                  /> */}
                  <Avatar name={"Selena Gomes"} size={"30"} round={true} />
                </div>

                <div className="">
                  <div className="flex flex-col items-center space-x-4">
                    <div className="text-3xl text-[#b6cce2]">
                      <span className="font-semibold text-white">@vincepolston</span> Vince Polston
                    </div>
                    <div className="flex ">
                      <div className="w-1/2">

                      </div>
                      <div className="w-1/2">

                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>

           
            <div className=" md:px-3">
              <ul className="flex items-center justify-around md:justify-center space-x-12 uppercase tracking-widest font-semibold text-xs text-[#b6cce2] border-b">
                <li
                  className={` ${
                    lastUrl === "profile"
                      ? "border-b-4 border-blue-400 md:-mt-px text-white"
                      : ""
                  } `}
                >
                  <NavLink
                    className={` ${
                      lastUrl === "profile"
                        ? "inline-block p-3 text-white font-bold"
                        : "inline-block p-3"
                    }`}
                    to="/profile"
                  >
                    <span className="hidden2 md:inline text-white">post</span>
                  </NavLink>
                </li>
                <li
                  className={` ${
                    lastUrl === "detail"
                      ? "border-b-2 border-indigo-500 md:border-indigo-500 md:-mt-px md:text-gray-700"
                      : ""
                  } `}
                >
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "inline-block p-3 text-indigo-500 md:text-indigo-500 font-bold"
                        : "inline-block p-3"
                    }
                    to="detail"
                  >
                    <span className="hidden2 md:inline">detail</span>
                  </NavLink>
                </li>
                <li
                  className={` ${
                    lastUrl === "more"
                      ? "border-b-2 border-indigo-500 md:border-indigo-500 md:-mt-px md:text-gray-700"
                      : ""
                  } `}
                >
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "inline-block p-3 text-indigo-500 md:text-indigo-500 font-bold"
                        : "inline-block p-3"
                    }
                    to="more"
                  >
                    <span className="hidden2 md:inline">more</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Profile;
