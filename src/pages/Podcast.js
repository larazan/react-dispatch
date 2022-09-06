import React from "react";

import podcast from "../assets/images/podcast-header-bg.jpg";
import software from "../assets/images/software.jpg";
import indie from "../assets/images/Indie.png";

const Podcast = () => {
  return (
    <>
      <div className="relative flex min-h-screen w-full bg-[#0e2439]">
        <div className="w-full ">
          <div className="flex relative bg-[#1f364d] h-28 py-10 px-10 mx-auto justify-center mb-20">
            <div className="absolute w-5/6 -bottom-20 flex justify-between bg-white rounded shadow px-3 py-3">
              <div className="flex space-x-3 w-full justify-center items-center">
                <div className="w-1/6">
                  <div className="h-32 w-32">
                    <img className="rounded" src={software} alt="" />
                  </div>
                </div>
                <div class="w-5/6">
                  <div className="flex flex-col">
                    <div className="">
                      <span className="text-2xl font-bold capitalize">
                        one weekly win
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center text-gray-800 space-x-2 pr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-16 w-16"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <div className="flex flex-col w-full space-y-1">
                          <div className="bg-gray-300 border border-gray-300 rounded-full w-full h-2"></div>
                          <div className="flex justify-between items-center">
                            <div className="flex space-x-1.5">
                              <button class="w-5 h-5 text-gray-500">
                                <svg
                                  class="fill-current w-4"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M6.59 12.83L4.4 15c-.58.58-1.59 1-2.4 1H0v-2h2c.29 0 .8-.2 1-.41l2.17-2.18 1.42 1.42zM16 4V1l4 4-4 4V6h-2c-.29 0-.8.2-1 .41l-2.17 2.18L9.4 7.17 11.6 5c.58-.58 1.59-1 2.41-1h2zm0 10v-3l4 4-4 4v-3h-2c-.82 0-1.83-.42-2.41-1l-8.6-8.59C2.8 6.21 2.3 6 2 6H0V4h2c.82 0 1.83.42 2.41 1l8.6 8.59c.2.2.7.41.99.41h2z"></path>
                                </svg>
                              </button>
                              <button class="w-5 h-5 text-gray-500">
                                <svg
                                  class="fill-current w-5"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M10 3v2a5 5 0 0 0-3.54 8.54l-1.41 1.41A7 7 0 0 1 10 3zm4.95 2.05A7 7 0 0 1 10 17v-2a5 5 0 0 0 3.54-8.54l1.41-1.41zM10 20l-4-4 4-4v8zm0-12V0l4 4-4 4z"></path>
                                </svg>
                              </button>
                              <button class="w-5 h-5 text-gray-500">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </button>
                            </div>
                            <div>
                              <span class="text-xs text-gray-500 font-light2">
                                4:18
                              </span>{" "}
                              <span class="text-xs text-gray-500 font-light2">
                                -
                              </span>{" "}
                              <span class="text-xs text-gray-500 font-light2">
                                5:13
                              </span>
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
          {/*  */}
          <div className="flex flex-row space-x-0">
            <div className="flex w-1/3 px-3 mt-8">
              <div class="flex-col py-4 px-4 text-[#9cb3c9]">
                <span class="text-sm font-semibold">AUGUST 30, 2022</span>
                <div class="flex-col space-y-3 pt-4">
                 
                    <div>
                      <span className="text-sm">by Michele Hansen & Colleen Schnettler</span>
                    </div>
                  
                </div>
              </div>
            </div>
            <div className="border-l border-[#0d2134] w-2/3 mt-8 ">
              {/*  */}

              <div className="flex flex-col space-y-6 px-4 mt-3">
                <div className="text-[#9cb3c9]">
                  <p>
                  David wanted his startup, Peergrade, to be the next big thing in education. He went about it by raising VC funding. But as indies we know this story rarely ends well. So, David pivoted to a slow, sustainable company with Eduflow. Oh, and he's got a Ph.D. You can call him Dr. David.
                  </p>
                </div>
                <div className="text-[#9cb3c9]">
                  <p>
                  David Kofoed Wind is the co-founder and CEO of Eduflow an education platform started in 2015 as Peergrade, which was a peer to peer feedback tool. David is the definition of technical, having studied for a degree in applied math and computer science, then a Ph.D in machine learning. This is where the idea for Peergrade was born, as he started teach a course in data science and solved his own problem.
                  </p>
                </div>
              </div>

              <div className="flex flex-col py-5 px-4 space-y-4">
                <div className="flex justify-between">
                  <div>
                    <span className="text-xl font-bold text-[#9cb3c9]">
                      This Week
                    </span>
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
                    <div className="flex space-x-3 justify-center items-center">
                      <div className="h-32 w-32">
                        <img src={indie} />
                      </div>
                      <div class="w-3/4">
                        <div class="pt-3 pb-2 pr-3">
                          <div class="flex justify-between">
                            <div class="flex-col text-lg font-bold ">
                              <span class="text-white">
                                Ending the VC dream and pivoting to an indie
                                company - David Kofoed Wind, Eduflow
                              </span>
                            </div>
                          </div>
                          <div class="mt-4">
                            <div class="text-sm text-[#9cb3c9]">
                              <em>Aug 31st —</em>David Kofoed Wind is the
                              co-founder and CEO of Eduflow an education
                              platform started in 2015 as Peergrade, which was a
                              peer to peer ...
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
                    <div className="flex space-x-3 justify-center items-center">
                      <div className="h-32 w-32">
                        <img className="rounded" src={software} alt="" />
                      </div>
                      <div class="w-3/4">
                        <div class="pt-3 pb-2 pr-3">
                          <div class="flex justify-between">
                            <div class="flex-col text-lg font-bold ">
                              <span class="text-white">
                                Ending the VC dream and pivoting to an indie
                                company - David Kofoed Wind, Eduflow
                              </span>
                            </div>
                          </div>
                          <div class="mt-4">
                            <div class="text-sm text-[#9cb3c9]">
                              <em>Aug 31st —</em>David Kofoed Wind is the
                              co-founder and CEO of Eduflow an education
                              platform started in 2015 as Peergrade, which was a
                              peer to peer ...
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
    </>
  );
};

export default Podcast;