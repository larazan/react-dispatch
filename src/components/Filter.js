import React from "react";

import tags from "../assets/data/tags.json";

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

const faqs = [
  {
    title: "Sort by",
    desc: "",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
  },
  {
    title: "Type",
    desc: "",
    content: "content",
  },
  {
    title: "Country",
    desc: "",
    content: "content",
  },
  {
    title: "Tags",
    desc: "Click to include genre, or double click to exclude genre",
    content: "content",
  },
  {
    title: "Relese date",
    desc: "",
    content: "content",
  },
  {
    title: "Rating",
    desc: "",
    content: "content",
  },
  {
    title: "Status",
    desc: "",
    content: "content",
  },
];

const Filter = () => {
  return (
    <>
      <div className=" ">
        <div className="my-2 drop-shadow-sm2 shadow2 hover:drop-shadow-lg flex-col">
          <div className="w-full p-2 rounded">
            <div className="py-0">
              <div className="">
                <span className="text-lg text-white font-bold">
                  Advance filter
                </span>
              </div>
            </div>
          </div>
          <div className="w-full p-0 ">
            <div className="">
              {faqs.map((item, key) => (
                <div className="relative overflow-hidden items-center ">
                  <input
                    type="checkbox"
                    className=" peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                  />
                  <div className="min-h-[40px] py-2 w-[250px] pl-3 flex-col items-center leading-none">
                    <div className="py-2">
                      <h1 className="font-semibold text-sm text-[#2affc4]">{item.title}</h1>
                    </div>
                    <span className="text-[12px] text-[#9cb3c9]  ">
                      {item.desc}
                    </span>
                  </div>
                  <div className="absolute top-4 right-2 transition-transform duration-500 rotate-0 peer-checked:-rotate-90">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#9cb3c9]"
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
                  <div className="overflow-hidden  transition-all duration-500 max-h-0 peer-checked:max-h-40">
                    <div className="pl-3 py-3 px-3">
                      {/* <span className="">{item.content}</span> */}
                      {/* <div className="flex-inline">
                        {tags.map((tag, id) => (
                          <button className="bg-white rounded-full border border-gray-400 leading-none px-2.5 py-[3px] mr-2 mb-2 hover:bg-[#01b4e4] hover:border-[#01b4e4] hover:text-white ">
                            <span className="text-sm capitalize ">{tag.name}</span>
                          </button>
                        ))}
                      </div> */}
                      {/* <div className="flex flex-wrap w-full">
                        {countries.map((country, id) => (
                          <div className="flex items-center w-32 items-start mb-1 px-2">
                            <input
                              id="checkbox-1"
                              aria-describedby="checkbox-1"
                              type="checkbox"
                              className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                            />
                            <label
                              for="checkbox-1"
                              className="text-sm ml-1.5  text-gray-900 capitalize"
                            >
                              {country.name}
                            </label>
                          </div>
                        ))}
                      </div> */}

                      <div className="flex relative w-full">
                          <div className="flex items-center w-full mx-auto ">
                            <input
                              className="shadow rounded bg-[#1f364d] p-2 text-sm w-full text-[#9cb3c9] placeholder-[#9cb3c9] focus:placeholder-[#9cb3c9] focus:border-purple-300 focus:outline-none focus:shadow-outline-purple"
                              type="search"
                              name="search"
                              placeholder="Search"
                            />
                            <button
                              type="submit"
                              className="absolute text-[#bbb] right-0 top-0 mt-3 mr-3"
                            >
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
                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="my-5 w-full justify-center items-center text-center px-2">
          <button className="border border-blue-500 bg-sky-600 hover:bg-sky-700 text-lg text-white block rounded-full font-bold py-2 w-full  mr-2 ">
            <span>Search</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Filter;
