import React from "react";
import { Link } from "react-router-dom";

const NewsHome = () => {
  return (
    <>
      <div className="min-h-full mt-8">
        <div className="flex justify-between items-center mb-4 border-b-4 border-[#fe2c55]">
          <div className="px-6 py-2 bg-[#fe2c55]">
            <span className="text-white text-xl font-bold">News</span>
          </div>
          <div>
            <Link to={"news"}>
              <div className="flex items-center text-white hover:text-[#fe2c55]">
                <span className="font-bold ">View All</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
        <div className="grid grid-flow-row gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className=" ">
            <div className="my-2 drop-shadow-sm hover:drop-shadow-lg ">
              <div className="relative block overflow-hidden bg-[#274059] rounded shadow aspect-w-16 aspect-h-10 dark:bg-gray-800 flex-col bg-white rounded space-y-0">
                <div className="relative block w-auto h-auto">
                  <img
                    src="https://hslfi.azureedge.net/globalassets/hsl/uutiskuvat/metro_sillalla.jpg?preset=800w"
                    className="relative w-full "
                  />
                </div>
                <div className="px-3">
                  <div className="py-4 px-4">
                    <div className="text-lg">
                      <span className="p-1 bg-[#ffc500] text-gray-900 font-bold">
                        News
                      </span>
                      <span className="text-[#b6ccd7] text-xl font-bold">
                        {" "}
                        |{" "}
                      </span>
                      <span className="text-[#b6ccd7] font-bold">
                        Ukrainian passport holders can travel free of charge on
                        Helsinki region public transport also during the summer
                        months
                      </span>
                    </div>
                    <div className="mt-4 pb-7">
                      <div className="text-white">
                        Ukrainian passport holders can travel free of charge on
                        Helsinki region public transport also during the summer
                        months,i.e. until 31 August. We want to.....
                      </div>
                    </div>
                    <div className="absolute bottom-3 left-7">
                      <span className="text-[#526e88] text-sm font-semibold">
                        9.6.2022
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-7">
                      <div className="flex items-center space-x-3">
                        <button className="flex text-[#526e88] items-center space-x-1">
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
                          <span className="text-sm font-semibold">33</span>
                        </button>
                        <button className="flex text-[#526e88] items-center space-x-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-sm font-semibold">33</span>
                        </button>
                      </div>
                    </div>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>

          <div className=" ">
            <div className="my-2 drop-shadow-sm hover:drop-shadow-lg ">
              <div className="relative block overflow-hidden bg-[#274059] rounded shadow aspect-w-16 aspect-h-10 dark:bg-gray-800 flex-col bg-white rounded space-y-0">
                <div className="relative block w-auto h-auto">
                  <img
                    src="https://hslfi.azureedge.net/globalassets/hsl/uutiskuvat/metro_sillalla.jpg?preset=800w"
                    className="relative w-full "
                  />
                </div>
                <div className="px-3">
                  <div className="py-4 px-4">
                    <div className="text-lg">
                      <span className="p-1 bg-[#ffc500] text-gray-900 font-bold">
                        News
                      </span>
                      <span className="text-[#b6ccd7] text-xl font-bold">
                        {" "}
                        |{" "}
                      </span>
                      <span className="text-[#b6ccd7] font-bold">
                        Ukrainian passport holders can travel free of charge on
                        Helsinki region public transport also during the summer
                        months
                      </span>
                    </div>
                    <div className="mt-4 pb-7">
                      <div className="text-white">
                        Ukrainian passport holders can travel free of charge on
                        Helsinki region public transport also during the summer
                        months,i.e. until 31 August. We want to.....
                      </div>
                    </div>
                    <div className="absolute bottom-3 left-7">
                      <span className="text-[#526e88] text-sm font-semibold">
                        9.6.2022
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-7">
                      <div className="flex items-center space-x-3">
                        <button className="flex text-[#526e88] items-center space-x-1">
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
                          <span className="text-sm font-semibold">33</span>
                        </button>
                        <button className="flex text-[#526e88] items-center space-x-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-sm font-semibold">33</span>
                        </button>
                      </div>
                    </div>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsHome;
