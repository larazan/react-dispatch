import React from 'react'

import Filter from "../components/Filter";
import PodcastPlayer from '../components/PodcastPlayer';

import podcast from "../assets/images/podcast-header-bg.jpg";
import software from "../assets/images/software.jpg";
import indie from "../assets/images/Indie.png";

const Podcasts = () => {
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

              <div className="flex flex-col py-5 px-4 space-y-4">
                <div className="flex justify-between">
                  <div>
                    <span className="text-xl font-bold text-[#9cb3c9]">
                      This Week
                    </span>
                  </div>
                  {/* <div className="flex justify-center items-center text-[#5aa3ed] text-sm cursor-pointer">
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
                  </div> */}
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
                    <div className="flex space-x-2 justify-center items-center">
                      <div className="h-32 w-32">
                        <img src={indie} alt="" />
                      </div>
                      <div className="w-3/4">
                        <div className="pt-3 pb-2 pr-3">
                          <div className="flex justify-between">
                            <div className="flex-col text-lg font-bold ">
                              <span className="text-white">Ending the VC dream and pivoting to an indie company - David Kofoed Wind, Eduflow</span>
                            </div>
                          </div>
                          <div className="mt-4">
                            <div className="text-sm text-[#9cb3c9]">
                            <em>Aug 31st —</em>David Kofoed Wind is the co-founder and CEO of Eduflow an education platform started in 2015 as Peergrade, which was a peer to peer ...
                            </div>
                          </div>
                        </div>
                      </div>
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
                    <div className="flex space-x-2 justify-center items-center">
                      <div className="h-32 w-32">
                        <img src={software} alt="" />
                      </div>
                      <div className="w-3/4">
                        <div className="pt-3 pb-2 pr-3">
                          <div className="flex justify-between">
                            <div className="flex-col text-lg font-bold ">
                              <span className="text-white">Ending the VC dream and pivoting to an indie company - David Kofoed Wind, Eduflow</span>
                            </div>
                          </div>
                          <div className="mt-4">
                            <div className="text-sm text-[#9cb3c9]">
                            <em>Aug 31st —</em>David Kofoed Wind is the co-founder and CEO of Eduflow an education platform started in 2015 as Peergrade, which was a peer to peer ...
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Player /> */}
    </>
  );
}

export default Podcasts