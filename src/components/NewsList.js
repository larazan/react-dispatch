import React from "react";

import Pagination from "./Pagination";

const NewsList = () => {
  return (
    <>
      <div className="min-h-full ">
        
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

          {/* <div className="w-1/2">
            <div className="my-2 drop-shadow-sm hover:drop-shadow-lg">
              <div className="relative block overflow-hidden bg-white rounded shadow aspect-w-16 aspect-h-10 dark:bg-gray-800 flex-col bg-white rounded space-y-5">
                <div className="relative block w-auto h-auto">
                  <img
                    src="https://hslfi.azureedge.net/globalassets/hsl/uutiskuvat/bussi_24_osari.jpg?preset=800w"
                    className="relative w-full "
                  />
                </div>
                <div className="px-3">
                  <div className="py-4 px-4">
                    <div className="text-lg">
                      <span className="text-gray-500">News | </span>
                      <span className="text-gray-800 font-bold">
                        HSL’s economy hit hard by high gasoline prices and low
                        passenger numbers in early 2022
                      </span>
                    </div>
                    <div className="mt-4">
                      <div>
                        A slow recovery in passenger numbers and the surge in
                        gasoline prices put a strain on our economy during
                        January–April 2022. The challenging economic situation
                        is predicted to last the whole year.
                      </div>
                    </div>
                    <div className="mt-4 flex justify-between">
                      <span className="text-gray-500 text-md">9.6.2022</span>
                      <div className="flex space-x-3">
                        <button className="flex text-gray-500 items-center space-x-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                          </svg>
                          <span>33</span>
                        </button>
                        <button className="flex text-gray-500 items-center space-x-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                            />
                          </svg>
                          <span>33</span>
                        </button>
                      </div>
                    </div>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div> */}
        </div>

        {/* <div className="my-2 flex space-x-5">
          <div className="w-1/2">
            <div className="my-2 drop-shadow-sm shadow hover:drop-shadow-lg">
              <div className="w-full bg-white p-3 rounded">
                <div className="py-4 px-4">
                  <div className="text-lg">
                    <span className="text-gray-500">News | </span>
                    <span className="text-gray-800 font-bold">
                      Summer opening hours of our service point
                    </span>
                  </div>
                  <div className="mt-4">
                    <div>
                      Between 6 June and 31 July, our service point at the
                      Helsinki Central Railway Station will be open Monday to
                      Friday 9am to 6pm and on Saturdays 9.30am to 5pm. On
                      Sundays, the.....
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between">
                    <span className="text-gray-500 text-md">9.6.2022</span>
                    <div className="flex space-x-3">
                      <button className="flex text-gray-500 items-center space-x-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                        <span>33</span>
                      </button>
                      <button className="flex text-gray-500 items-center space-x-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                          />
                        </svg>
                        <span>33</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <div className="my-2 drop-shadow-sm shadow hover:drop-shadow-lg">
              <div className="w-full bg-white p-3 rounded">
                <div className="py-4 px-4">
                  <div className="text-lg">
                    <span className="text-gray-500">Service | </span>
                    <span className="text-gray-800 font-bold">
                      “Sipoonkatu” stops on Aleksis Kiven katu to be relocated
                      some 200 meters on 23 June
                    </span>
                  </div>
                  <div className="mt-4">
                    <div>
                      The “Sipoonkatu” stops on Aleksis Kiven katu will be moved
                      some 200 meters towards Sturenkatu on Thursday 23 June.
                      The stops are moved temporarily as.......
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between">
                    <span className="text-gray-500 text-md">9.6.2022</span>
                    <div className="flex space-x-3">
                      <button className="flex text-gray-500 items-center space-x-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                        <span>33</span>
                      </button>
                      <button className="flex text-gray-500 items-center space-x-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                          />
                        </svg>
                        <span>33</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="my-2 flex space-x-5">
          <div className="w-1/2">
            <div className="my-2 drop-shadow-sm shadow hover:drop-shadow-lg">
              <div className="w-full bg-white p-3 rounded">
                <div className="py-4 px-4">
                  <div className="text-lg">
                    <span className="text-gray-500">Service | </span>
                    <span className="text-gray-800 font-bold">
                      Metro to switch to summer timetables on 20 June – metro
                      trains to depart from both tracks in Matinkylä during
                      summer
                    </span>
                  </div>
                  <div className="mt-4">
                    <div>
                      The Metro will begin operating its summer timetable on
                      Monday 20 June. We increased the number of services
                      between Matinkylä and Tapiola on weekday and Saturday
                      evenings. Additionally, the turnaround track in Matinkylä
                      will no longer be used. Instead, the metro trains will be
                      turned.....
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between">
                    <span className="text-gray-500 text-md">9.6.2022</span>
                    <div className="flex space-x-3">
                      <button className="flex text-gray-500 items-center space-x-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                        <span>33</span>
                      </button>
                      <button className="flex text-gray-500 items-center space-x-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                          />
                        </svg>
                        <span>33</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <div className="my-2 drop-shadow-sm shadow hover:drop-shadow-lg">
              <div className="w-full bg-white p-3 rounded">
                <div className="py-4 px-4">
                  <div className="text-lg">
                    <span className="text-gray-500">Service | </span>
                    <span className="text-gray-800 font-bold">
                      E, U and L trains to be replaced with buses between Espoo
                      and Kirkkonummi stations from Saturday 25 June 1am to
                      Sunday 26 June 6.50am
                    </span>
                  </div>
                  <div className="mt-4">
                    <div>
                      E, U and L trains will not run west of Espoo station from
                      Saturday 25 June 1am to Sunday morning 26 June 6.50am. The
                      trains will run only between Helsinki and Espoo stations.
                      Bus 211X will.....
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between">
                    <span className="text-gray-500 text-md">9.6.2022</span>
                    <div className="flex space-x-3">
                      <button className="flex text-gray-500 items-center space-x-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                        <span>33</span>
                      </button>
                      <button className="flex text-gray-500 items-center space-x-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                          />
                        </svg>
                        <span>33</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="flex justify-center my-10 w-full md:w-auto">
          <button
            className={`text-gray-400 block font-bold py-2 px-3 mr-2 flex items-center  hover:bg-green-500}`}
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <div className="flex border-x-2 px-4">
            <button className="border border-[#0074c4] text-[#0074c4] block rounded-full font-bold py-2 px-4  mr-2 flex items-center">
              1
            </button>
            <button className="text-[#0074c4] block font-bold py-2 px-4 mr-2 flex items-center">
              2
            </button>
            <button className="text-[#0074c4] block font-bold py-2 px-4 mr-2 flex items-center">
              3
            </button>
            <button className="text-[#0074c4] block font-bold py-2 px-4 mr-2 flex items-center">
              4
            </button>
            <button className="text-[#0074c4] block font-bold py-2 px-4 mr-2 flex items-center">
              5
            </button>
            <button className="text-[#0074c4] block font-bold py-2 px-4 mr-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
            </button>
            <button className="text-[#0074c4] block font-bold py-2 px-4 mr-2 flex items-center">
              300
            </button>
          </div>
          <button
            className={`text-[#0074c4] block font-bold py-2 px-3 ml-2 flex items-center  hover:bg-green-500}`}
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default NewsList;
