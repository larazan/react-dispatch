import React, { useState } from "react";

import genres from "../assets/data/genres.json";

const FilterTop = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [showFilter1, setShowFilter1] = useState(false);
  const [showFilter2, setShowFilter2] = useState(false);
  const [showFilter3, setShowFilter3] = useState(false);

  const openFilter = () => {
    setShowFilter((prev) => !prev);
  };

  const openFilter1 = () => {
    setShowFilter1((prev) => !prev);
  };

  const openFilter2 = () => {
    setShowFilter2((prev) => !prev);
  };

  const openFilter3 = () => {
    setShowFilter3((prev) => !prev);
  };

  const colors = [
    "#f44336",
    "#673ab7",
    "#673ab7",
    "#2196f3",
    "#009688",
    "#4caf50",
    "#ffeb3b",
    "#795548",
    "#ffffff",
    "#000000",
  ];

  const countries = [
    {
      name: "south korea",
      slug: "south_korea",
    },
    {
  name: "china",
  slug: "china",
},
{
  name: "hong kong",
  slug: "hong_kong",
},
{
  name: "japan",
  slug: "japan",
},
{
  name: "taiwan",
  slug: "taiwan",
},
{
  name: "thailand",
  slug: "thailand",
},
{
  name: "philippines",
  slug: "philippines",
},
];

const statuses = [
{
  name: "Ongoing",
  slug: "Ongoing",
},
{
  name: "Upcoming",
  slug: "Upcoming",
},
{
  name: "Completed",
  slug: "Completed",
}
]

const sorts = [
{
  name: "Relevance",
  slug: "Relevance",
},
{
  name: "Most Popular",
  slug: "Popular",
},
{
  name: "Top Ranked",
  slug: "Top",
},
{
  name: "Top Rated",
  slug: "Rated",
},
{
  name: "Newest",
  slug: "Newest",
},
{
  name: "Release Date",
  slug: "Release",
},
{
  name: "Recently Added",
  slug: "Recently",
},
]

const ratings = [
  {
    name: "G",
    slug: "g"
  },
  {
    name: "PG",
    slug: "pg"
  },
  {
    name: "PG-13",
    slug: "pg-13"
  },
  {
    name: "R",
    slug: "r"
  },
  {
    name: "NC-17",
    slug: "nc-17"
  },
  {
    name: "Not Rated",
    slug: "not-rated"
  },
  {
    name: "Unrated",
    slug: "Unrated"
  }
]

  return (
    <>
      <div className="top-0 px-4 flex items-center justify-between2">
        <div className="hidden flex inline-flex space-x-2">
          <button className="inline-flex items-center justify-center px-4 py-2 bg-white text-gray-900 hover:bg-gray-200 text-white rounded-sm border border-gray-300 cursor-pointer hover:bg-white hover:text-black font-medium">
            <svg
              className="h-4 w-4 hover:text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="text-sm ml-2">Photos</span>
          </button>
          <button className="inline-flex items-center justify-center px-4 py-2 bg-white text-gray-900 hover:bg-gray-200 text-white rounded-sm border border-gray-300 cursor-pointer hover:bg-white hover:text-black font-medium">
            <svg
              className="h-4 w-4 hover:text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            <span className="text-sm ml-2">Videos</span>
          </button>
          <button className="inline-flex items-center justify-center px-4 py-2 bg-white text-gray-900 hover:bg-gray-200 text-white rounded-sm border border-gray-300 cursor-pointer hover:bg-white hover:text-black font-medium">
            <svg
              className="h-4 w-4 hover:text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <span className="text-sm ml-2">Users</span>
          </button>
        </div>

        <div className="flex z-10 w-full2 inline-flex space-x-2 overflow-x-auto overflow-hidden">
          <div
            className="flex "
            onMouseEnter={openFilter}
            onMouseLeave={openFilter}
          >
            <button className="inline-flex items-center justify-center bg-white px-4 py-2 text-gray-900 rounded-full border border-gray-300 cursor-pointer hover:border-gray-300  font-medium">
              {/* <svg
                  className="h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.48 2.52c3.27 1.55 5.61 4.72 5.97 8.48h1.5C23.44 4.84 18.29 0 12 0l-.66.03 3.81 3.81 1.33-1.32zm-6.25-.77c-.59-.59-1.54-.59-2.12 0L1.75 8.11c-.59.59-.59 1.54 0 2.12l12.02 12.02c.59.59 1.54.59 2.12 0l6.36-6.36c.59-.59.59-1.54 0-2.12L10.23 1.75zm4.6 19.44L2.81 9.17l6.36-6.36 12.02 12.02-6.36 6.36zm-7.31.29C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32z"></path>
                </svg> */}
              <span className="text-sm mr-2">Genre</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div
              className={`absolute ${
                showFilter === false ? "hidden" : ""
              } w-60 mt-9  font-normal bg-white shadow-md rounded-sm overflow-hidden border`}
            >
              <div className="py-2">
                <ul className="font-semibold text-xs divide-y divide-slate-200 overflow-y-auto max-h-80">
                  <li className="hover:bg-gray-300">
                    <a
                      className="h-10 py-2 px-3 flex justify-between items-center "
                      href="#"
                    >
                      <span>All Genres</span>
                      <button className="h-4 w-4 pl-5 pr-3">
                        <svg
                          className="h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </button>
                    </a>
                  </li>
                  {genres.map((genre, id) => (
                      <li className="hover:bg-gray-300 " key={id}>
                      <div className="h-10 py-2 px-3 flex justify-between items-center">
                        <div className="flex inline-flex items-center">
                          <span className="">{genre.name}</span>
                        </div>
                        <input
                          type="checkbox"
                          name=""
                          id=""
                          className="w-4 h-4 bg-white shadow "
                        />
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="flex px-3 py-2 border-t-2 justify-between">
                    <button className="text-blue-600 hover:text-blue-700 text-sm">clear all</button>
                    <button
                    type="submit"
                    className=" px-4 py-2 text-white text-sm bg-green-600 rounded hover:bg-green-700 focus:bg-green-700 focus:outline-none"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex "
            onMouseEnter={openFilter1}
            onMouseLeave={openFilter1}
          >
            <button className="inline-flex items-center justify-center bg-white px-4 py-2 text-gray-900 rounded-full border border-gray-300 cursor-pointer hover:border-gray-300  font-medium">
              {/* <svg
                  className="h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 11.5V13H9v2.5L5.5 12 9 8.5V11h6V8.5l3.5 3.5-3.5 3.5z"></path>
                </svg> */}
              <span className="text-sm mr-2">Rating</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div
              className={`absolute ${
                showFilter1 === false ? "hidden" : ""
              } w-60 mt-9 font-normal bg-white shadow-md rounded-sm overflow-hidden border`}
            >
              <div className="py-2">
                <ul className="font-semibold text-xs divide-y divide-slate-200 overflow-y-auto max-h-80">
                  <li className="hover:bg-gray-300">
                    <a
                      className="h-10 py-2 px-3 flex justify-between items-center "
                      href="#"
                    >
                      <span>All Ratings</span>
                      <button className="h-4 w-4 pl-5 pr-3">
                        <svg
                          className="h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </button>
                    </a>
                  </li>
                  {ratings.map((rating, id) => (
                      <li className="hover:bg-gray-300 " key={id}>
                      <div className="h-10 py-2 px-3 flex justify-between items-center">
                        <div className="flex inline-flex items-center">
                          <span className="">{rating.name}</span>
                        </div>
                        <input
                          type="checkbox"
                          name=""
                          id=""
                          className="w-4 h-4 bg-white shadow "
                        />
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="flex px-3 py-2 border-t-2 justify-between">
                    <button className="text-blue-600 hover:text-blue-700 text-sm">clear all</button>
                    <button
                    type="submit"
                    className=" px-4 py-2 text-white text-sm bg-green-600 rounded hover:bg-green-700 focus:bg-green-700 focus:outline-none"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex "
            onMouseEnter={openFilter2}
            onMouseLeave={openFilter2}
          >
            <button className="inline-flex items-center justify-center bg-white px-4 py-2 text-gray-900 rounded-full border border-gray-300 cursor-pointer hover:border-gray-300  font-medium">
              {/* <svg
                  className="h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.71 5.63l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-3.12 3.12-1.93-1.91-1.41 1.41 1.42 1.42L3 16.25V21h4.75l8.92-8.92 1.42 1.42 1.41-1.41-1.92-1.92 3.12-3.12c.4-.4.4-1.03.01-1.42zM6.92 19L5 17.08l8.06-8.06 1.92 1.92L6.92 19z"></path>
                </svg> */}
              <span className="text-sm mr-2">Sort</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div
              className={`absolute ${
                showFilter2 === false ? "hidden" : ""
              } w-60 mt-9 font-normal bg-white shadow-md rounded-sm overflow-hidden border`}
            >
              <div className="py-2">
                <ul className="font-semibold text-xs divide-y divide-slate-200 overflow-y-auto max-h-80">
                  <li className="hover:bg-gray-300">
                    <a
                      className="h-10 py-2 px-3 flex justify-between items-center "
                      href="#"
                    >
                      <span>All Sorts</span>
                      <button className="h-4 w-4 pl-5 pr-3">
                        <svg
                          className="h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </button>
                    </a>
                  </li>
                  {sorts.map((sort, id) => (
                      <li className="hover:bg-gray-300 " key={id}>
                      <div className="h-10 py-2 px-3 flex justify-between items-center">
                        <div className="flex inline-flex items-center">
                          <span className="">{sort.name}</span>
                        </div>
                        <input
                          type="checkbox"
                          name=""
                          id=""
                          className="w-4 h-4 bg-white shadow "
                        />
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="flex px-3 py-2 border-t-2 justify-between">
                    <button className="text-blue-600 hover:text-blue-700 text-sm">clear all</button>
                    <button
                    type="submit"
                    className=" px-4 py-2 text-white text-sm bg-green-600 rounded hover:bg-green-700 focus:bg-green-700 focus:outline-none"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex "
            onMouseEnter={openFilter3}
            onMouseLeave={openFilter3}
          >
            <button className="inline-flex items-center justify-center bg-white px-4 py-2 text-gray-900 rounded-full border border-gray-300 cursor-pointer hover:border-gray-300  font-medium">
              {/* <svg
                  className="h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.71 5.63l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-3.12 3.12-1.93-1.91-1.41 1.41 1.42 1.42L3 16.25V21h4.75l8.92-8.92 1.42 1.42 1.41-1.41-1.92-1.92 3.12-3.12c.4-.4.4-1.03.01-1.42zM6.92 19L5 17.08l8.06-8.06 1.92 1.92L6.92 19z"></path>
                </svg> */}
              <span className="text-sm mr-2">Country</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div
              className={`absolute ${
                showFilter3 === false ? "hidden" : ""
              } w-60 mt-9 font-normal bg-white shadow-md rounded-sm overflow-hidden border`}
            >
              <div className="py-2">
                <ul className="font-semibold text-xs divide-y divide-slate-200 overflow-y-auto max-h-80">
                  <li className="hover:bg-gray-300">
                    <a
                      className="h-10 py-2 px-3 flex justify-between items-center "
                      href="#"
                    >
                      <span>All Countries</span>
                      <button className="h-4 w-4 pl-5 pr-3">
                        <svg
                          className="h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </button>
                    </a>
                  </li>
                  {countries.map((country, id) => (
                      <li className="hover:bg-gray-300 " key={id}>
                      <div className="h-10 py-2 px-3 flex justify-between items-center">
                        <div className="flex inline-flex items-center">
                          <span className="">{country.name}</span>
                        </div>
                        <input
                          type="checkbox"
                          name=""
                          id=""
                          className="w-4 h-4 bg-white shadow "
                        />
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="flex px-3 py-2 border-t-2 justify-between">
                    <button className="text-blue-600 hover:text-blue-700 text-sm">clear all</button>
                    <button
                    type="submit"
                    className=" px-4 py-2 text-white text-sm bg-green-600 rounded hover:bg-green-700 focus:bg-green-700 focus:outline-none"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterTop;
