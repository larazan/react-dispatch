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
              <div className="flex items-center w-full mx-auto text-[#333333] ">
                <input
                  className="shadow rounded border p-4 text-md text-[#333333] w-full"
                  type="search"
                  name="search"
                  placeholder="Search for Articles or news"
                />
                <button
                  type="reset"
                  className="absolute text-[#333333] right-8 top-0 mt-4 mr-3"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
</svg>
                </button>
                <button
                  type="submit"
                  className="absolute text-[#333333] right-0 top-0 mt-4 mr-3"
                >
                  <svg
                    className="h-5 w-5"
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
