import React from 'react'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useLocation, Outlet, Link, NavLink } from "react-router-dom";

import cover from "../assets/images/cover_parasite.jpg";
import parasite from "../assets/images/parasite.jpg";

const Movie = () => {
    const location = useLocation();

  console.log(location.pathname);

  let urls = location.pathname.split("/");
  let lastUrl = urls[urls.length - 1];

  console.log(lastUrl);

  const renderContent = () => {
    return (
        <main>
            <div
        className="flex relative py-9 md:py-9 justify-center bg-[#0e2439] opacity-90"
        style={{
          background: `url(${cover}) center no-repeat`,
          backgroundSize: "cover",
          backgroundColor: "#0e2439",
          height: "500px",
        }}
      >
        <div className="flex-row md:flex px-4 md:px-6 md:space-x-7">
          <div className="hidden w-full md:block md:w-1/3 ">
            <div className="mx-auto w-full">
              <img src={parasite} className="" alt="" />
            </div>
          </div>
          <div className="flex-col mx-auto2 w-full md:w-2/3 justify-center ">
            <div className="items-center">
              <div className="flex justify-between">
                <div>
                  <div className="flex items-center text-white space-x-2">
                    <div className="">
                      <span className="text-3xl md:text-4xl font-bold">Parasite</span>
                    </div>
                    <div>
                      <span className="text-lg md:text-4xl text-gray-200">(2009)</span>
                    </div>
                  </div>
                  <div className="flex-row md:flex-col text-white">
                    <div className="flex space-x-2">
                      <div className=" border rounded px-1">
                        <span className="font-semibold">R</span>
                      </div>
                      <span>30/05/2019 (KR)</span>
                      <span className="hidden md:block">Komedi, Cerita Seru, Drama</span>
                      <span>2h 13m</span>
                    </div>
                    <span className="block md:hidden">Komedi, Cerita Seru, Drama</span>
                  </div>
                  <div className="flex py-2 md:py-5">
                    <div className="flex items-center space-x-1.5 md:space-x-5">
                      <div className="h-11 w-11 md:h-16 md:w-16 p-1 rounded-full bg-[#0e2439]">
                        <CircularProgressbar
                          value={79}
                          text={`${79}%`}
                          styles={buildStyles({
                            textSize: "30px",
                            pathColor: "#20bd70",
                            textColor: "#fff",
                            trailColor: "#d6d6d6",
                            backgroundColor: "#fff",
                          })}
                        />
                        ;
                      </div>
                      <div className="text-white">
                        <button className="rounded-full bg-[#032541] p-2.5 md:p-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                          </svg>
                        </button>
                      </div>
                      <div className="text-white">
                        <button className="rounded-full bg-[#032541] p-2.5 md:p-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="text-white">
                        <button className="rounded-full bg-[#032541] p-2.5 md:p-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                          </svg>
                        </button>
                      </div>
                      <div className="text-white">
                        <button className="rounded-full bg-[#032541] p-2.5 md:p-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </button>
                      </div>
                      <div className="hidden md:flex ">
                        <button className="flex items-center text-white hover:text-gray-300 space-x-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="font-bold text-lg ">Play Trailer</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="block md:hidden">
                  <div className="mx-auto w-24">
                    <img src={parasite} className="" alt="" />
                  </div>
                </div>
              </div>
              
              <div className="">
                <div>
                  <span className="text-gray-200 italic text-lg">
                    Act like you own the place.
                  </span>
                </div>
              </div>
              <div className="flex-col space-y-1 md:space-y-2">
                <div>
                  <span className="text-xl font-bold text-white">
                    Kilasan Singkat
                  </span>
                </div>
                <div className="leading-tight">
                  <span className="text-white ">
                    Semua menganggur, keluarga Ki-taek memiliki minat khusus
                    pada Taman kaya dan glamor untuk mata pencaharian mereka
                    sampai mereka terjerat dalam insiden tak terduga.
                  </span>
                </div>
              </div>
              <div className="flex py-2 space-x-10">
                <div className="flex-col text-white">
                  <div>
                    <span className="font-bold">Bong Joon-ho</span>
                  </div>
                  <div>
                    <span className="">Director, Screenplay, Story</span>
                  </div>
                </div>
                <div className="flex-col text-white">
                  <div>
                    <span className="font-bold">Han Jin-won</span>
                  </div>
                  <div>
                    <span className="">Screenplay</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  

      <div className="absolute2 bottom-0 px-2 md:px-3 overflow-x-auto overflow-hidden">
              <ul className="flex items-center  md:justify-around md:justify-center space-x-2 md:space-x-4 uppercase md:tracking-widest font-semibold text-xs  ">
                <li
                  className={` ${
                    lastUrl === "movie"
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
                    to="/movie"
                  >
                    <span className="hidden2 md:inline">Overview</span>
                  </Link>
                </li>
                <li
                  className={` ${
                    lastUrl === "cast"
                      ? "border-b-4 border-[#4799eb] "
                      : ""
                  } `}
                >
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "inline-block p-3  font-bold"
                        : "inline-block p-3"
                    }
                    to="cast"
                  >
                    <span className="flex truncate  inline-flex md:inline">Aktor & Kru</span>
                  </NavLink>
                </li>
                <li
                  className={` ${
                    lastUrl === "review"
                      ? "border-b-4 border-[#4799eb] md:-mt-px"
                      : ""
                  } `}
                >
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "inline-block p-3 font-bold"
                        : "inline-block p-3"
                    }
                    to="review"
                  >
                    <span className="hidden2 md:inline">Ulasan</span>
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
                      isActive
                        ? "inline-block p-3 font-bold"
                        : "inline-block p-3"
                    }
                    to="discussion"
                  >
                    <span className="hidden2 md:inline">discussion</span>
                  </NavLink>
                </li>
                
                <li
                  className={` ${
                    lastUrl === "media"
                      ? "border-b-4 border-[#4799eb] md:-mt-px"
                      : ""
                  } `}
                >
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "inline-block p-3 font-bold"
                        : "inline-block p-3"
                    }
                    to="media"
                  >
                    <span className="hidden2 md:inline">media</span>
                  </NavLink>
                </li>
                
              </ul>
            </div>
        </main>
     );
    };

  return (
    <>
      <div className="flex flex-col min-h-screen ">
        {renderContent()}
        <Outlet />
      </div>
    </>
  )
}

export default Movie