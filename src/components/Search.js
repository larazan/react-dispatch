import React from "react";

const Search = () => {
  return (
    <>
      <div className="flex-col relative bg-white px-8 pb-10">
        <div className="py-5">
          <div className="flex text-lg font-semibold space-x-2">
            <span className="text-[#0f82cc]">Home</span>
            <span className="flex text-[#0f82cc] items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
            <div>
              <span>News</span>
            </div>
          </div>
        </div>
        <div className="flex relative w-full py-8">
          <div className="flex-col w-full  space-y-10">
            <div className="md:text-3xl text-[#333333] font-bold">
                <span>News / Articles</span>
            </div>
            <div className="flex py-6 justify-center relative h-12">
              <div className="flex items-center w-full mx-auto text-[#333333]">
                <input
                  className="shadow rounded border p-4 text-md text-[#333333] w-full"
                  type="search"
                  name="search"
                  placeholder="Search for Articles or news"
                />
                <button
                  type="submit"
                  className="absolute text-[#333333] right-0 top-0 mt-4 mr-3"
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
    </>
  );
};

export default Search;
