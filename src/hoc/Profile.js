import React, { useState, useRef, useEffect } from "react";
import Avatar from "react-avatar";
import { useLocation, Outlet, Link, NavLink } from "react-router-dom";
import { useOnClickOutside } from "../hooks/useOnClickOutside";
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import Header from "../components/Header";

function Profile(props) {
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

  const renderHeader = () => {
    if (
      location.pathname !== "/login" &&
      location.pathname !== "/register" &&
      location.pathname !== "/forgot"
    ) {
      return <Header />;
    }
  };

  const renderContent = () => {
    return (
      <main className="bg-[#1f364d] bg-opacity-252">
        <div className="flex flex-col translate-x-0 mt-5 translate-x-0">
          <div className="relative w-full">
            {/* <img
            className="w-full md:w-full h-full  md:object-cover"
            src="https://preview.cruip.com/mosaic/images/profile-bg.jpg"
            width="979"
            height="420"
            alt="Profile background"
          /> */}
            <button
              className="absolute left-2 block md:hidden text-white top-0 -mt-2 cursor-pointer"
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

          <div className="px-2  relative">
            <div className="mb-1">
              <div className="hidden md:flex flex-col md:flex-row w-full px-2 md:px-4 items-center">
                <div className="md:w-1/4 ">
                  {/* <img
                  className="rounded-full border-8 border-[#284057]"
                  src="https://preview.cruip.com/mosaic/images/user-128-01.jpg"
                  width="158"
                  height="158"
                  alt="Avatar"
                /> */}
                  <Avatar
                    name={"Selena gomes"}
                    size={"140"}
                    round={true}
                    textSizeRatio={3}
                  />
                </div>

                <div className="w-3/4 ">
                  <div className="flex flex-col space-y-3">
                    <div className="text-2xl text-[#b6cce2]">
                      <span className="font-semibold text-white">
                        @vincepolston
                      </span>{" "}
                      Vince Polston
                    </div>
                    <div className="flex justify-round space-x-6">
                      <div className="w-1/2 flex items-center space-x-3">
                        <div className="h-14 w-14">
                          <CircularProgressbar
                            value={89}
                            text={`${89}%`}
                            styles={buildStyles({
                              textSize: "26px",
                              pathColor: "#01b4e4",
                              textColor: "#fff",
                              trailColor: "#d6d6d6",
                              backgroundColor: "#fff",
                            })}
                          />
                          ;
                        </div>
                        <div>
                          <span className="text-white">
                            Rata-rata Penilaian Film
                          </span>
                        </div>
                      </div>
                      <div className="w-1/2 flex items-center space-x-3">
                        <div className="h-14 w-14">
                          <CircularProgressbar
                            value={89}
                            text={`${89}%`}
                            styles={buildStyles({
                              textSize: "26px",
                              pathColor: "#20bd70",
                              textColor: "#fff",
                              trailColor: "#d6d6d6",
                              backgroundColor: "#fff",
                            })}
                          />
                          ;
                        </div>
                        <div>
                          <span className="text-white">
                            Rata-rata Penilaian TV
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:hidden w-full px-2 space-y-4">
                <div className="flex justify-center items-center w-full space-x-3">
                  <div>
                    {/* <img
                  className="rounded-full border-8 border-[#284057]"
                  src="https://preview.cruip.com/mosaic/images/user-128-01.jpg"
                  width="158"
                  height="158"
                  alt="Avatar"
                /> */}
                    <Avatar
                      name={"Selena gomes"}
                      size={"80"}
                      round={true}
                      textSizeRatio={3}
                    />
                  </div>
                  <div>
                    <div className="text-lg text-[#b6cce2] leading-tight">
                      <span className="font-semibold text-white capitalize">
                        selena gomes
                      </span>
                      <br />
                      <span className="text-white text-sm text-[#b2b7b8] font-semibold">
                        Anggota sejak juni 2022
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-round space-x-6">
                      <div className="w-1/2 flex flex-col items-center space-y-2">
                        <div className="h-12 w-12">
                          <CircularProgressbar
                            value={89}
                            text={`${89}%`}
                            styles={buildStyles({
                              textSize: "26px",
                              pathColor: "#01b4e4",
                              textColor: "#fff",
                              trailColor: "#d6d6d6",
                              backgroundColor: "#fff",
                            })}
                          />
                          ;
                        </div>
                        <div>
                          <span className="text-white text-sm">
                            Rata-rata Penilaian Film
                          </span>
                        </div>
                      </div>
                      <div className="w-1/2 flex flex-col items-center space-y-2">
                        <div className="h-12 w-12">
                          <CircularProgressbar
                            value={89}
                            text={`${89}%`}
                            styles={buildStyles({
                              textSize: "26px",
                              pathColor: "#20bd70",
                              textColor: "#fff",
                              trailColor: "#d6d6d6",
                              backgroundColor: "#fff",
                            })}
                          />
                          ;
                        </div>
                        <div>
                          <span className="text-white text-sm">
                            Rata-rata Penilaian TV
                          </span>
                        </div>
                      </div>
                    </div>
              </div>
            </div>

            <div className="absolute2 bottom-0 px-2 md:px-3 overflow-x-auto">
              <ul className="flex items-center md:justify-around md:justify-center space-x-2 md:space-x-4 uppercase md:tracking-widest font-semibold text-xs text-[#b6cce2] ">
                <li
                  className={` ${
                    lastUrl === "profile"
                      ? "border-b-4 border-[#4799eb] md:-mt-px text-white"
                      : ""
                  } `}
                >
                  <Link
                    className={` ${
                      lastUrl === "profile"
                        ? "inline-block p-3 text-white font-bold"
                        : "inline-block p-3 text-[#b6cce2]"
                    }`}
                    to="/profile"
                  >
                    <span className="hidden2 md:inline">overview</span>
                  </Link>
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
                      isActive
                        ? "inline-block p-3 text-white md:text-white font-bold"
                        : "inline-block p-3"
                    }
                    to="discussion"
                  >
                    <span className="hidden2 md:inline">discussion</span>
                  </NavLink>
                </li>
                <li
                  className={` ${
                    lastUrl === "list"
                      ? "border-b-4 border-[#4799eb] md:-mt-px"
                      : ""
                  } `}
                >
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "inline-block p-3 text-white md:text-white font-bold"
                        : "inline-block p-3"
                    }
                    to="list"
                  >
                    <span className="hidden2 md:inline">list</span>
                  </NavLink>
                </li>
                <li
                  className={` ${
                    lastUrl === "rating"
                      ? "border-b-4 border-[#4799eb] md:-mt-px"
                      : ""
                  } `}
                >
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "inline-block p-3 text-white md:text-white font-bold"
                        : "inline-block p-3"
                    }
                    to="rating"
                  >
                    <span className="hidden2 md:inline">rating</span>
                  </NavLink>
                </li>
                <li
                  className={` ${
                    lastUrl === "watchlist"
                      ? "border-b-4 border-[#4799eb] md:-mt-px"
                      : ""
                  } `}
                >
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "inline-block p-3 text-white md:text-white font-bold"
                        : "inline-block p-3"
                    }
                    to="watchlist"
                  >
                    <span className="hidden2 md:inline">watchlist</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    );
  };

  return (
    <>
      <div className="flex flex-col min-h-screen ">
        {/* {renderHeader()} */}
        {renderContent()}
        <Outlet />
      </div>
    </>
  );
}

export default Profile;
