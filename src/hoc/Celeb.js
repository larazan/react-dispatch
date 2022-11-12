import React from "react";
import { useLocation, Outlet, Link, NavLink } from "react-router-dom";
import ShareMenu from "../components/ShareMenu";

const Celeb = () => {
  const location = useLocation();

  console.log(location.pathname);

  let urls = location.pathname.split("/");
  let lastUrl = urls[urls.length - 1];

  console.log(lastUrl);

  const renderContent = () => {
    return (
      <div className="relative  px-2 md:px-3  bg-white border-b border-gray-300 shadow">
        <ul className="flex items-center justify-center space-x-2 md:space-x-6 uppercase md:tracking-widest font-semibold text-xs">
          <li
            className={` ${
              lastUrl === "person"
                ? "border-b-4 border-[#4799eb] md:-mt-px "
                : ""
            } `}
          >
            <Link
              className={` ${
                lastUrl === "movie"
                  ? "inline-block p-3  font-bold"
                  : "inline-block p-3 "
              }`}
              to="/person"
            >
              <span className="hidden2 md:inline">Overview</span>
            </Link>
          </li>
          <li
            className={` ${
              lastUrl === "media" ? "border-b-4 border-[#4799eb] " : ""
            } `}
          >
            <NavLink
              className={({ isActive }) =>
                isActive ? "inline-block p-3  font-bold" : "inline-block p-3"
              }
              to="media"
            >
              <span className="flex truncate  inline-flex md:inline">
                Media
              </span>
            </NavLink>
          </li>
         
          <li
            className={` ${
              lastUrl === "discussion"
                ? "border-b-4 border-[#4799eb] md:-mt-px"
                : ""
            } `}
          >
            <NavLink
              className={({ isActive }) =>
                isActive ? "inline-block p-3 font-bold" : "inline-block p-3"
              }
              to="discussion"
            >
              <span className="hidden2 md:inline">discussion</span>
            </NavLink>
          </li>
          <li className="" >
              
                <ShareMenu />
              
            </li>
        </ul>
        
      </div>
    );
  };

  return (
    <>
      <div className="flex flex-col min-h-screen ">
        {renderContent()}
        <Outlet />
      </div>
    </>
  );
};

export default Celeb;
