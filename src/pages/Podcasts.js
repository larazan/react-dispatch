import React from 'react'
import { Link } from 'react-router-dom';

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
            className="flex relative bg-gray-100  md:py-24 justify-center"
            style={{
              background: `url(${podcast}) center  no-repeat`,
            }}
          >
            <div className="p-12 max-w-3xl hero relative ">
              <div className="md:text-5xl text-2xl leading-tight md:leading-loose font-bold text-white">
              Podcasts from The Verge

              </div>
              <div className='mt-2 md:mt-4 text-lg md:text-2xl leading-tight text-white'>
              Weekly shows to listen to with earbuds, headphones, Airpods, and more
              </div>
            </div>
          </div>
          {/*  */}
          <div className="flex flex-row space-x-0">
            
            <div className="border-l border-[#0d2134] w-full max-w-container-lg md:mx-auto md:max-w-[660px]">
              
              {/*  */}

              <div className="flex flex-col py-5 px-4 space-y-4">
                <div className="flex justify-between">
                  
                </div>
                <div className="relative">
                  <Link to={"/podcast"}>
                  
                  <div className="flex justify-between bg-[#162c41] hover:bg-[#1f364d] rounded shadow px-3 py-1 md:py-2 cursor-pointer">
                    <div className="flex space-x-1 md:space-x-3 justify-center items-center">
                      <div className="relative flex py-3 h-32 w-32">
                        <img src={indie} alt="" className='rounded' />
                        <div className="absolute left-1 top-4">
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
                      </div>
                      <div className="w-3/4">
                        <div className="md:pt-3 md:pb-2 md:pr-3">
                          <div className="flex justify-between">
                            <div className="flex-col text-lg font-bold leading-none">
                              <span className="text-[#3cffd0]">Ending the VC dream and pivoting to an indie company - David Kofoed Wind, Eduflow</span>
                            </div>
                          </div>
                          <div className="mt-2 hidden md:block">
                            <div className="text-sm leading-tight text-[#9cb3c9]">
                            <em>Aug 31st —</em>David Kofoed Wind is the co-founder and CEO of Eduflow an education platform started in 2015 as Peergrade, which was a peer to peer ...
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </Link>
                </div>
                <div className="relative">
                <Link to={"/podcast"}>
                  
                  <div className="flex justify-between bg-[#162c41] hover:bg-[#1f364d] rounded shadow px-3 py-1 md:py-2 cursor-pointer">
                    <div className="flex space-x-1 md:space-x-3 justify-center items-center">
                      <div className="relative flex py-3 h-32 w-32">
                        <img src={software} alt="" className='rounded' />
                        <div className="absolute left-1 top-4">
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
                      </div>
                      <div className="w-3/4">
                        <div className="md:pt-3 md:pb-2 md:pr-3">
                          <div className="flex justify-between">
                            <div className="flex-col text-lg font-bold leading-none">
                              <span className="text-[#3cffd0]">Ending the VC dream and pivoting to an indie company - David Kofoed Wind, Eduflow</span>
                            </div>
                          </div>
                          <div className="mt-2 hidden md:block">
                            <div className="text-sm leading-tight text-[#9cb3c9]">
                            <em>Aug 31st —</em>David Kofoed Wind is the co-founder and CEO of Eduflow an education platform started in 2015 as Peergrade, which was a peer to peer ...
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </Link>
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