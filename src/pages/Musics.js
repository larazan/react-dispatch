import React from 'react'

import Filter from "../components/Filter";
import Search from '../components/Search'
import MusicList from '../components/MusicList'

import podcast from "../assets/images/podcast-header-bg.jpg";


const Musics = () => {
  return (
    <>
      <div className="relative flex min-h-screen w-full bg-[#0e2439]">
        <div className=" sticky top-0 left-0 flex flex-col justify-between2 items-center w-[5rem] h-screen bg-[#ffc500]">
          <div className="mt-5  h-1/4">
            <button className="text-white p-4 rounded-full bg-[#ef5753] shadow-lg">
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
              {/* <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5 4h3v12H5V4zm7 0h3v12h-3V4z"/></svg> */}
            </button>
          </div>
          <div className="relative">
            <div className="flex flex-col justify-start w-[38rem] transform -rotate-90 inline-block">
              <div className="text-xl font-bold">Podcast in the morning</div>
              <span className="font-semibold text-sm">host by DJ Berlian</span>
            </div>
          </div>
          <div className="absolute bottom-0 flex bottom-5">
            <span className="">
              <svg
                width="41"
                height="89"
                viewBox="0 0 41 89"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="38.9138"
                  cy="87.4849"
                  r="1.42021"
                  transform="rotate(180 38.9138 87.4849)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.9138"
                  cy="74.9871"
                  r="1.42021"
                  transform="rotate(180 38.9138 74.9871)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.9138"
                  cy="62.4892"
                  r="1.42021"
                  transform="rotate(180 38.9138 62.4892)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.9138"
                  cy="38.3457"
                  r="1.42021"
                  transform="rotate(180 38.9138 38.3457)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.9138"
                  cy="13.634"
                  r="1.42021"
                  transform="rotate(180 38.9138 13.634)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.9138"
                  cy="50.2754"
                  r="1.42021"
                  transform="rotate(180 38.9138 50.2754)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.9138"
                  cy="26.1319"
                  r="1.42021"
                  transform="rotate(180 38.9138 26.1319)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.9138"
                  cy="1.42021"
                  r="1.42021"
                  transform="rotate(180 38.9138 1.42021)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="87.4849"
                  r="1.42021"
                  transform="rotate(180 26.4157 87.4849)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="74.9871"
                  r="1.42021"
                  transform="rotate(180 26.4157 74.9871)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="62.4892"
                  r="1.42021"
                  transform="rotate(180 26.4157 62.4892)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="38.3457"
                  r="1.42021"
                  transform="rotate(180 26.4157 38.3457)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="13.634"
                  r="1.42021"
                  transform="rotate(180 26.4157 13.634)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="50.2754"
                  r="1.42021"
                  transform="rotate(180 26.4157 50.2754)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="26.1319"
                  r="1.42021"
                  transform="rotate(180 26.4157 26.1319)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="1.4202"
                  r="1.42021"
                  transform="rotate(180 26.4157 1.4202)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="87.4849"
                  r="1.42021"
                  transform="rotate(180 13.9177 87.4849)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="74.9871"
                  r="1.42021"
                  transform="rotate(180 13.9177 74.9871)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="62.4892"
                  r="1.42021"
                  transform="rotate(180 13.9177 62.4892)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="38.3457"
                  r="1.42021"
                  transform="rotate(180 13.9177 38.3457)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="13.634"
                  r="1.42021"
                  transform="rotate(180 13.9177 13.634)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="50.2754"
                  r="1.42021"
                  transform="rotate(180 13.9177 50.2754)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="26.1319"
                  r="1.42021"
                  transform="rotate(180 13.9177 26.1319)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="1.42019"
                  r="1.42021"
                  transform="rotate(180 13.9177 1.42019)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="87.4849"
                  r="1.42021"
                  transform="rotate(180 1.41963 87.4849)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="74.9871"
                  r="1.42021"
                  transform="rotate(180 1.41963 74.9871)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="62.4892"
                  r="1.42021"
                  transform="rotate(180 1.41963 62.4892)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="38.3457"
                  r="1.42021"
                  transform="rotate(180 1.41963 38.3457)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="13.634"
                  r="1.42021"
                  transform="rotate(180 1.41963 13.634)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="50.2754"
                  r="1.42021"
                  transform="rotate(180 1.41963 50.2754)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="26.1319"
                  r="1.42021"
                  transform="rotate(180 1.41963 26.1319)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="1.4202"
                  r="1.42021"
                  transform="rotate(180 1.41963 1.4202)"
                  fill="#3056D3"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="w-full ">
          <div
            className="flex relative bg-gray-100  py-24 justify-center"
            style={{
              background: `url(${podcast}) center  no-repeat`,
            }}
          >
            <div className="p-12 max-w-2xl hero relative">
              <div className="md:text-5xl text-3xl leading-loose font-bold text-white">
                The best free asian movies & musics database.
              </div>
            </div>
          </div>
          {/*  */}
          <div className="flex flex-row space-x-0">
            <div className="flex w-1/3 px-3">
              <Filter />
            </div>
            <div className="border-l border-[#0d2134] w-2/3  ">
              <div className="relative w-full flex px-3 py-5 border-b border-[#0d2134]">
                <input
                  type="search"
                  name="serch"
                  className="w-full border-1 px-4 py-3.5 outline-none bg-[#1f364d] pl-10 rounded-full text-xl text-[#9cb3c9] placeholder-[#9cb3c9] focus:placeholder-[#9cb3c9] focus:border-purple-300 focus:outline-none focus:shadow-outline-purple"
                  // value={value}
                  // onChange={(e) => handleChange(e.target.value)}
                  // onFocus={() => setShowOptions(true)}
                  // onKeyDown={handleNav}
                  placeholder="search something"
                />
                <div className="absolute inset-y-0 left-7 flex items-center  cursor-pointer">
                  <svg
                    className="w-4 h-4 text-[#9cb3c9]"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="fill-current text-[#4799eb]"
                      d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
                    ></path>
                    <path
                      className="fill-current text-[#4799eb]"
                      d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"
                    ></path>
                  </svg>
                </div>
              </div>
              {/*  */}
              <div className="flex flex-col py-5 px-4 space-y-2">
                <div className="flex justify-between">
                  <div>
                    <span className="text-xl font-bold text-[#9cb3c9]">
                      Album
                    </span>
                  </div>
                  <div className="flex justify-center items-center text-[#5aa3ed] text-sm cursor-pointer">
                    <span>View All</span>
                    <div>
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
                  </div>
                </div>
                <div class="grid grid-cols-3 gap-4">
                  <div class="bg-[#162c41] hover:bg-[#1f364d] rounded-md shadow px-4 py-4 cursor-pointer">
                    <div class="relative pt-full mb-4">
                      <img
                        class="block w-full rounded-md inset-0"
                        src="https://picsum.photos/129.webp?random=1"
                        alt=""
                      />
                    </div>
                    <div class="text-[#9cb3c9] capitalize font-semibold mb-1 block">
                      Chinese Lo-FI
                    </div>
                    <div class="relative pb-2">
                      <span class="text-sm text-[#5aa3ed] font-semibold">
                        Nike1nike
                      </span>
                      <button class="absolute right-0 top-0 w-10 h-10 bg-[#5cd68d] rounded-full flex text-white">
                        <svg
                          class="fill-current h-5 w-5 m-auto"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M5 4h3v12H5V4zm7 0h3v12h-3V4z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div class="bg-[#162c41] hover:bg-[#1f364d] rounded-md shadow px-4 py-4 cursor-pointer">
                    <div class="relative pt-full mb-4">
                      <img
                        class="block w-full rounded-md inset-0"
                        src="https://picsum.photos/129.webp?random=2"
                        alt=""
                      />
                    </div>
                    <div class="text-[#9cb3c9] capitalize font-semibold mb-1 block">
                      FLY
                    </div>
                    <div class="relative pb-2">
                      <span class="text-sm text-[#5aa3ed] font-semibold">
                        Gaho
                      </span>
                    </div>
                  </div>
                  <div class="bg-[#162c41] hover:bg-[#1f364d] rounded-md shadow px-4 py-4 cursor-pointer">
                    <div class="relative pt-full mb-4">
                      <img
                        class="block w-full rounded-md inset-0"
                        src="https://picsum.photos/129.webp?random=3"
                        alt=""
                      />
                    </div>
                    <div class="text-[#9cb3c9] capitalize font-semibold mb-1 block">
                      Ludwig van Beethoven
                    </div>
                    <div class="relative pb-2">
                      <span class="text-sm text-[#5aa3ed] font-semibold">
                        Artist
                      </span>
                    </div>
                  </div>
                  <div class="bg-[#162c41] hover:bg-[#1f364d] rounded-md shadow px-4 py-4 cursor-pointer">
                    <div class="relative pt-full mb-4">
                      <img
                        class="block w-full rounded-md inset-0"
                        src="https://picsum.photos/129.webp?random=4"
                        alt=""
                      />
                    </div>
                    <div class="text-[#9cb3c9] capitalize font-semibold mb-1 block">
                      Hotel Del Luna OST
                    </div>
                    <div class="relative pb-2">
                      <span class="text-sm text-[#5aa3ed] font-semibold">
                        By Jamie Lee
                      </span>
                    </div>
                  </div>
                  <div class="bg-[#162c41] hover:bg-[#1f364d] rounded-md shadow px-4 py-4 cursor-pointer">
                    <div class="relative pt-full mb-4">
                      <img
                        class="block w-full rounded-md inset-0"
                        src="https://picsum.photos/129.webp?random=5"
                        alt=""
                      />
                    </div>
                    <div class="text-[#9cb3c9] capitalize font-semibold mb-1 block">
                      ITAEWON CLASS (Original Television Soundtrack) Pt.2
                    </div>
                    <div class="relative pb-2">
                      <span class="text-sm text-[#5aa3ed] font-semibold">
                        Gaho
                      </span>
                    </div>
                  </div>
                  <div class="bg-[#162c41] hover:bg-[#1f364d] rounded-md shadow px-4 py-4 cursor-pointer">
                    <div class="relative pt-full mb-4">
                      <img
                        class="block w-full rounded-md inset-0"
                        src="https://picsum.photos/129.webp?random=6"
                        alt=""
                      />
                    </div>
                    <div class="text-[#9cb3c9] capitalize font-semibold mb-1 block">
                      Preparation For a Journey
                    </div>
                    <div class="relative pb-2">
                      <span class="text-sm text-[#5aa3ed] font-semibold">
                        Gaho
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col py-5 px-4 space-y-2">
                <div className="flex justify-between">
                  <div>
                    <span className="text-xl font-bold text-[#9cb3c9]">
                      Music
                    </span>
                  </div>
                  <div className="flex justify-center items-center text-[#5aa3ed] text-sm cursor-pointer">
                    <span>View All</span>
                    <div>
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
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute left-4 top-4">
                    <button className="text-pink-600">
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
                    </button>
                  </div>
                  <div className="flex justify-between bg-[#162c41] hover:bg-[#1f364d] rounded shadow px-3 py-3 cursor-pointer">
                    <div className="flex space-x-2">
                      <button className="w-10 h-10 rounded bg-sky-400"></button>
                      <div className="flex flex-col">
                        <button className="hover:text-gray-400 text-white text-md">
                          <span>chAnge</span>
                        </button>
                        <span className="text-[#5aa3ed] text-sm cursor-pointer">
                          miwa
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <span className="text-sm font-semibold text-[#9cb3c9] capitalize">
                        Delight
                      </span>
                    </div>
                    <div className="flex items-center justify-center">
                      <span className="text-sm font-semibold text-[#9cb3c9]">
                        4:52
                      </span>
                    </div>
                    <div className="flex items-center justify-center space-x-4">
                      <button className="text-[#9cb3c9] hover:rounded-full hover:bg-[#0e2439] p-1.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 "
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                          />
                        </svg>
                      </button>
                      <button className="text-[#9cb3c9] hover:rounded-full hover:bg-[#0e2439] p-1.5">
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
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute left-4 top-4">
                    <button className="text-pink-600">
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
                    </button>
                  </div>
                  <div className="flex justify-between bg-[#162c41] hover:bg-[#1f364d] rounded shadow px-3 py-3 cursor-pointer">
                    <div className="flex space-x-2">
                      <button className="w-10 h-10 rounded bg-sky-400"></button>
                      <div className="flex flex-col">
                        <button className="hover:text-gray-400 text-white text-md">
                          <span>chAnge</span>
                        </button>
                        <span className="text-[#5aa3ed] text-sm cursor-pointer">
                          miwa
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <span className="text-sm font-semibold text-[#9cb3c9] capitalize">
                        Delight
                      </span>
                    </div>
                    <div className="flex items-center justify-center">
                      <span className="text-sm font-semibold text-[#9cb3c9]">
                        4:52
                      </span>
                    </div>
                    <div className="flex items-center justify-center space-x-4">
                      <button className="text-[#9cb3c9] hover:rounded-full hover:bg-[#0e2439] p-1.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 "
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                          />
                        </svg>
                      </button>
                      <button className="text-[#9cb3c9] hover:rounded-full hover:bg-[#0e2439] p-1.5">
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
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer class="bg-[#162c41] w-full sticky bottom-0 z-10 col-span-6 p-4 grid grid-cols-3 gap-6">
          <div class="flex items-center">
            <img
              class="h-14 w-14 mr-4 flex-shrink-0"
              src="https://picsum.photos/56.webp?random=10"
              alt=""
            />
            <div class="mr-4">
              <div class="text-sm text-white text-line-clamp-1 font-light">
                Heaven
              </div>
              <div class="text-xs text-gray-100 text-line-clamp-1">
                <span>Ludwig van Beethoven</span>
              </div>
            </div>
            <div class="flex items-center">
              <button class="text-green-200 p-2">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z" />
                </svg>
              </button>
              <button class="text-gray-100 p-2">
                <svg
                  class="w-4 h-4"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="currentColor" fill-rule="evenodd">
                    <path
                      d="M1 3v9h14V3H1zm0-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"
                      fill-rule="nonzero"
                    ></path>
                    <path d="M10 8h4v3h-4z"></path>
                  </g>
                </svg>
              </button>
            </div>
          </div>
          <div>
            <div class="flex items-center justify-center mb-3">
              <button class="w-5 h-5 text-gray-100 mr-6">
                <svg
                  class="fill-current w-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.59 12.83L4.4 15c-.58.58-1.59 1-2.4 1H0v-2h2c.29 0 .8-.2 1-.41l2.17-2.18 1.42 1.42zM16 4V1l4 4-4 4V6h-2c-.29 0-.8.2-1 .41l-2.17 2.18L9.4 7.17 11.6 5c.58-.58 1.59-1 2.41-1h2zm0 10v-3l4 4-4 4v-3h-2c-.82 0-1.83-.42-2.41-1l-8.6-8.59C2.8 6.21 2.3 6 2 6H0V4h2c.82 0 1.83.42 2.41 1l8.6 8.59c.2.2.7.41.99.41h2z" />
                </svg>
              </button>
              <button class="w-5 h-5 text-gray-100 mr-6">
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 5h3v10H4V5zm12 0v10l-9-5 9-5z" />
                </svg>
              </button>
              <button class="w-8 h-8 border border-gray-300 rounded-full flex text-gray-100 mr-6">
                <svg
                  class="fill-current h-5 w-5 m-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M5 4h3v12H5V4zm7 0h3v12h-3V4z" />
                </svg>
              </button>
              <button class="w-5 h-5 text-gray-100 mr-6">
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 5h3v10h-3V5zM4 5l9 5-9 5V5z" />
                </svg>
              </button>
              <button class="w-5 h-5 text-gray-100">
                <svg
                  class="fill-current w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 3v2a5 5 0 0 0-3.54 8.54l-1.41 1.41A7 7 0 0 1 10 3zm4.95 2.05A7 7 0 0 1 10 17v-2a5 5 0 0 0 3.54-8.54l1.41-1.41zM10 20l-4-4 4-4v8zm0-12V0l4 4-4 4z" />
                </svg>
              </button>
            </div>
            <div class="flex items-center">
              <span class="text-xs text-gray-100 font-light">4:18</span>
              <div class="overflow-hidden relative flex-1 mx-2 rounded">
                <div class="border-b-4 border-gray-400 rounded"></div>
                <div class="absolute inset-x-0 top-0 -translate-x-48 border-b-4 border-gray-100 rounded transform hover:border-green-200"></div>
              </div>
              <span class="text-xs text-gray-100 font-light">5:13</span>
            </div>
          </div>
        </footer>
    </>
  );
}

export default Musics