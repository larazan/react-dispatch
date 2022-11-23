import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";

import parasite from "../assets/images/parasite.jpg";

const MoviesList = () => {
  let desk =
    "Semua menganggur, keluarga Ki-taek memiliki minat khusus pada Taman kaya dan glamor untuk mata pencaharian mereka sampai mereka terjerat dalam insiden tak terduga.";
  let MAX_LENGTH = 60;

  return (
    <>
      <div className="w-full py-2 md:py-4">
        {/* <div className="py-2 md:py-4">
          <div className="flex items-center justify-end">
            <div className="py-3 px-4 flex items-center text-sm font-medium leading-none text-gray-600 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded">
              <p>Sort By:</p>
              <select
                aria-label="select"
                className="focus:text-indigo-600 focus:outline-none bg-transparent ml-1"
              >
                <option className="text-sm text-indigo-800">Latest</option>
                <option className="text-sm text-indigo-800">Oldest</option>
                <option className="text-sm text-indigo-800">Latest</option>
              </select>
            </div>
          </div>
        </div> */}
        <div className="bg-white py-2 md:py-2 px-2 md:px-2 xl:px-10">
          {/* <div className="sm:flex items-center justify-between">
            <div className="flex items-center">
              <a
                className="rounded-full focus:outline-none focus:ring-2  focus:bg-indigo-50 focus:ring-indigo-800"
                href=" javascript:void(0)"
              >
                <div className="py-2 px-8 bg-indigo-100 text-indigo-700 rounded-full">
                  <p>All</p>
                </div>
              </a>
              <a
                className="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8"
                href="javascript:void(0)"
              >
                <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ">
                  <p>Done</p>
                </div>
              </a>
              <a
                className="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8"
                href="javascript:void(0)"
              >
                <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ">
                  <p>Pending</p>
                </div>
              </a>
            </div>
            <button
              onclick="popuphandler(true)"
              className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded"
            >
              <p className="text-sm font-medium leading-none text-white">
                Add Task
              </p>
            </button>
          </div> */}
          <div className="mt-2 overflow-x-auto">
            <table className="w-full whitespace-nowrap">
              <thead>
                <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th class="py-2 px-2 md:py-3 md:px-4 text-center w-1/6">Foto</th>
                  <th class="py-2 px-2 md:py-3 md:px-4 text-center w-1/6">Judul</th>
                  <th class="py-2 px-2 md:py-3 md:px-4 w-1/6">Deskripsi</th>
                  <th class="py-2 px-2 md:py-3 md:px-4 text-center w-1/6">Rating</th>
                  <th class="py-2 px-2 md:py-3 md:px-4 text-center w-1/6">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  tabindex="0"
                  className="focus:outline-none h-16 border border-gray-100 rounded"
                >
                  <td className="py-2 px-2 md:py-3 md:px-4 w-1/6 ">
                    <div className="">
                        <Link to={"/movie"}>
                        <img src={parasite} className="w-12" />
                      </Link>
                    </div>
                  </td>
                  <td className="py-2 px-2 md:py-3 md:px-4 w-1/6">
                    <div className="flex flex-col items-center">
                    <Link to={"/movie"}>
                      <div>
                        <p className="text-base font-medium  text-gray-700">
                          Parasite (2020)
                        </p>
                      </div>
                      </Link>
                      <div class="text-sm text-gray-400 leading-none capitalize">
                        <span>tv show </span>
                        <span>south korea</span>
                      </div>
                      <div class="text-sm text-gray-400 leading-none capitalize">
                        <span> 10 episodes</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-2 px-2 md:py-3 md:px-4 w-1/6">
                    <div className="flex text-sm items-center leading-tight">
                      {`${desk.substring(0, MAX_LENGTH)}...`}
                      <a href="#" className="text-sm text-blue-400">
                        Read more
                      </a>
                    </div>
                  </td>
                  <td className="py-2 px-2 md:py-3 md:px-4 w-1/6">
                    <div className="flex justify-center items-center">
                      <div className="h-8 w-8 md:h-10 md:w-10 p-1 rounded-full ">
                        <CircularProgressbar
                          value={79}
                          text={`${79}%`}
                          styles={buildStyles({
                            textSize: "34px",
                            pathColor: "#20bd70",
                            textColor: "#000000",
                            trailColor: "#d6d6d6",
                            backgroundColor: "#fff",
                          })}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="py-2 px-2 md:py-3 md:px-4">
                    <div className="flex items-center space-x-2">
                      <button className="flex items-center justify-center h-8 w-8 md:h-8 md:w-8 p-1  rounded-full border text-gray-300 hover:border-gray-400 hover:text-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </button>
                      <button className="flex items-center justify-center h-8 w-8 md:h-8 md:w-8 p-1 rounded-full border text-gray-300 hover:border-gray-400 hover:text-gray-400">
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
                      <button className="flex items-center justify-center h-8 w-8 md:h-8 md:w-8 p-1 rounded-full border text-gray-300 hover:border-gray-400 hover:text-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                        </svg>
                      </button>
                      <button className="flex items-center justify-center h-8 w-8 md:h-8 md:w-8 p-1 rounded-full border text-gray-300 hover:border-gray-400 hover:text-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoviesList;
