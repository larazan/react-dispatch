import React from 'react'

import Filter from "../components/Filter";
import Player from '../components/Player';
import PodcastPlayer from '../components/PodcastPlayer';
import Search from '../components/Search'
import MusicList from '../components/MusicList'

import podcast from "../assets/images/podcast-header-bg.jpg";

const Musics = () => {
  return (
    <>
      <div className="relative flex min-h-screen w-full bg-[#0e2439]">
        <PodcastPlayer />
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
      <Player />
    </>
  );
}

export default Musics