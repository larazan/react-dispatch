import React from 'react'

import Player from '../components/Player';
import PodcastPlayer from '../components/PodcastPlayer';

import AW from "../assets/images/AW.jpg";

const Music = () => {
  return (
    <>
      <div className="relative flex min-h-screen w-full bg-[#0e2439]">
        <PodcastPlayer />
        <div className="w-full " >
          <div className='bg-[#d02838]'>
            <div
            className="p-6"
            style={{ background: 'linear-gradient(transparent,#00000080)' }}
          >
            <div className="flex justify-between items-center md:hidden">
              <button className="text-white">
                <svg
                  className="fill-current"
                  role="img"
                  focusable="false"
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                >
                  <polyline
                    points="16 4 7 12 16 20"
                    fill="none"
                    stroke="#fff"
                  ></polyline>
                </svg>
              </button>
              <button className="text-gray-300">
                <svg
                  className="bg-black border rounded-full p-1"
                  width="32"
                  height="32"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                  xmlns="http://www.w3.org/2000/svg"
                  data-testid="user-icon"
                >
                  <path d="M15.216 13.717L12 11.869C11.823 11.768 11.772 11.607 11.757 11.521C11.742 11.435 11.737 11.267 11.869 11.111L13.18 9.57401C14.031 8.58001 14.5 7.31101 14.5 6.00001V5.50001C14.5 3.98501 13.866 2.52301 12.761 1.48601C11.64 0.435011 10.173 -0.0879888 8.636 0.0110112C5.756 0.198011 3.501 2.68401 3.501 5.67101V6.00001C3.501 7.31101 3.97 8.58001 4.82 9.57401L6.131 11.111C6.264 11.266 6.258 11.434 6.243 11.521C6.228 11.607 6.177 11.768 5.999 11.869L2.786 13.716C1.067 14.692 0 16.526 0 18.501V20H1V18.501C1 16.885 1.874 15.385 3.283 14.584L6.498 12.736C6.886 12.513 7.152 12.132 7.228 11.691C7.304 11.251 7.182 10.802 6.891 10.462L5.579 8.92501C4.883 8.11101 4.499 7.07201 4.499 6.00001V5.67101C4.499 3.21001 6.344 1.16201 8.699 1.00901C9.961 0.928011 11.159 1.35601 12.076 2.21501C12.994 3.07601 13.5 4.24301 13.5 5.50001V6.00001C13.5 7.07201 13.117 8.11101 12.42 8.92501L11.109 10.462C10.819 10.803 10.696 11.251 10.772 11.691C10.849 12.132 11.115 12.513 11.503 12.736L14.721 14.585C16.127 15.384 17.001 16.884 17.001 18.501V20H18.001V18.501C18 16.526 16.932 14.692 15.216 13.717Z"></path>
                </svg>
              </button>
            </div>
            <div className="hidden flex justify-between md:flex">
              <div className="flex">
                <svg
                  className="bg-black rounded-full bg-opacity-60 p-1"
                  role="img"
                  focusable="false"
                  height="32"
                  width="32"
                  viewBox="0 0 24 24"
                >
                  <polyline
                    points="16 4 7 12 16 20"
                    fill="none"
                    stroke="#fff"
                  ></polyline>
                </svg>
                
              </div>
              
            </div>
            <div className="flex flex-col justify-center items-center md:hidden">
              <img
                src={AW}
                alt="alan walker artist image"
                className="w-40 h-40"
                style={{ boxShadow: '0 4px 60px #00000080' }}
              />
              <h1 className="text-white capitalize font-semibold text-2xl mt-2">
                This is Alan Walker
              </h1>
              <p className="text-xs uppercase text-gray-100 mt-1">
                1,308,405 likes
              </p>
            </div>
            <div className="hidden mt-8 flex items-center md:flex">
              <img
                src={AW}
                alt="alan walker artist"
                className="w-56 h-56 mr-6"
                style={{ boxShadow: '0 4px 60px #00000080'}}
              />
              <div className="mt-16">
                <h2 className="text-gray-50 uppercase text-xs font-bold tracking-tighter mt-1">
                  Playlist
                </h2>
                <span className="text-white text-6xl capitalize font-extrabold tracking-tighter">
                  <h1>This is Alan Walker</h1>
                </span>
                <p className="text-white mt-6 text-sm font-normal leading-none opacity-70">
                  The essential Alan Walker tracks and remixes.
                </p>
                <div className="flex items-center mt-2">
                  <a className="text-white font-bold text-sm hover:text-underline cursor-pointer">
                    Spotify
                  </a>
                  <div className="font-extrabold text-md text-white opacity-70 mx-1 mb-1 pb-1">
                    .
                  </div>
                  <p className="text-white opacity-70 font-normal text-sm">
                    1,308,405 likes
                  </p>
                  <div className="font-extrabold text-md text-white opacity-70 mx-1 mb-1 pb-1">
                    .
                  </div>
                  <p className="text-white opacity-70 font-normal text-sm mr-1">
                    50 songs,
                  </p>
                  <p className="text-white opacity-70 font-normal text-sm">
                    2hr 36 min
                  </p>
                </div>
              </div>
            </div>
            </div>
          </div>
          {/*  */}
          <div className="flex flex-row space-x-0">
            <div className="w-full">
              
              <div className="flex flex-col py-5 px-4 space-y-2">
                
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
      <Player />
    </>
  );
}

export default Music