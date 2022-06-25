import React from "react";

import hero from '../../assets/images/hero.jpg'

const Jumbotron = () => {
  return (
    <>
      {/* <div class="relative w-full sm:w-3/4 mx-auto p-4 sm:p-12 bg-gradient-to-r from-green-500 to-green-400 rounded-md mt-12 overflow-hidden">
        <div class="absolute -bottom-1 -left-1 z-40 opacity-50">
          <img
            src="https://cdn-icons-png.flaticon.com/128/1970/1970023.png"
            alt="icon 1"
            class="w-8 h-8 md:w-10 md:h-10 rotate-45"
          />
        </div>
        <div class="absolute -top-2 lg:left-40 z-40 opacity-50">
          <img
            src="https://cdn-icons-png.flaticon.com/128/937/937552.png"
            alt="icon 2"
            class="w-8 h-8 md:w-10 md:h-10 rotate-12"
          />
        </div>
        <div class="absolute -top-3 md:right-1/4 right-0 z-40 opacity-50">
          <img
            src="https://cdn-icons-png.flaticon.com/128/4371/4371206.png"
            alt="icon 3"
            class="w-8 h-8 md:w-10 md:h-10 rotate-90 md:rotate-180"
          />
        </div>
        <div class="absolute -top-2 lg:top-1/3 right-1/2 opacity-50">
          <img
            src="https://cdn-icons-png.flaticon.com/128/1828/1828469.png"
            alt="icon 4"
            class="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12"
          />
        </div>
        <div class="absolute bottom-1/4 md:-bottom-3 -right-3 md:right-1/3 z-40 opacity-50">
          <img
            src="https://cdn-icons-png.flaticon.com/128/1826/1826848.png"
            alt="icon 5"
            class="w-6 h-6 md:w-10 md:h-10 rotate-45"
          />
        </div>
        <div class="absolute -bottom-6 lg:bottom-1 left-1/3 z-40 opacity-50">
          <img
            src="https://cdn-icons-png.flaticon.com/128/3089/3089787.png"
            alt="icon 6"
            class="w-10 h-10 rotate-12"
          />
        </div>
        <div class="text-center flex flex-col sm:text-left sm:flex-row sm:items-center sm:justify-between ">
          <div class="flex flex-row items-center text-center mx-auto mt-4 sm:mx-0 sm:mt-0">
            <h2 class="text-5xl mr-2 font-semibold text-white">$3</h2>
            <div class>
              <div class="text-left text-white text-sm lg:text-base">
                / month
              </div>
              <div class="text-white text-left text-sm lg:text-base">
                to unlock full spectifications
              </div>
            </div>
          </div>
          <div class="my-4 sm:my-0 sm:ml-2">
            <div class="inline-block cursor-pointer rounded-md text-lg font-semibold py-2 px-4 text-white bg-green-500 shadow-md hover:bg-green-100 hover:text-green-500">
              Get ezzel.ly.pro
            </div>
          </div>
        </div>
      </div> */}
      <div
        className="flex relative bg-gray-100 py-24 justify-center bg-top bg-hero"
        style={{
          background: `url(${hero}) center  no-repeat`,
        }}
      >
        <div className="p-12 max-w-2xl hero relative">
          <div className="md:text-3xl text-3xl font-bold text-white">
            The best free stock photos & videos shared by talented creators.
          </div>
          <div className="mt-6 flex justify-center h-12 relative">
            <div className="flex items-center relative w-full mx-auto text-gray-600">
              <input
                className="bg-purple-white shadow rounded border-0 p-4 text-sm focus:outline-none w-full"
                type="search"
                name="search"
                placeholder="Search for free photos and videos"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 mt-4 mr-3"
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
    </>
  );
};

export default Jumbotron;
