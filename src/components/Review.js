import React from 'react'
import { Link } from "react-router-dom";
import Avatar from "react-avatar";

const Review = () => {
  return (
    <>
    <div className="py-2 border-b pb-5 md:pb-8 border-gray-200">
              <div className="flex-col pt-4">
              <div className="flex justify-between items-center ">
                <div className="">
                  <span className="text-lg font-bold capitalize">
                    review
                  </span>
                </div>
                <div>
                  <Link to={"movies"}>
                    <div className="flex items-center text-sm text-blue-500 hover:text-blue-600">
                      <span className="font-bold ">View All</span>
                    </div>
                  </Link>
                </div>
              </div>
                <div className="py-4">
                  <div className="flex items-center justify-center">
                    {" "}
                    <div className="relative rounded p-2 md:p-3 shadow-md bg-[#162c41]">
                      <div className="flex w-full items-center justify-between border-b-2 border-[#0e2439] pb-3">
                        <div className="flex items-center space-x-3">
                          <Avatar name='Selena gomes' size={"36"} round={true} />
                          <div className="text-sm md:text-lg leading-tight font-bold text-[#5aa3ed]">
                            Joe Smith
                          </div>
                        </div>
                        <div className="flex items-center space-x-8">
                          <button className="rounded-2xl border border-green-300 bg-[#5cd68d] px-2 md:px-3 py-1 text-xs text-white font-semibold">
                            Completed
                          </button>
                          <div className="flex-col space-y-1 text-xs font-semibold2 text-white w-32">
                            <span>2 hours ago</span>
                            <div>
                              <span>49 people found this review helpful</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex mt-4 mb-10 space-x-3 md:space-x-4">
                        <div className="w-2/3">
                          <div className="mb-3 font-bold leading-snug text-white">
                            Nulla sed leo tempus, feugiat velit vel?
                          </div>
                          <div className="text-sm text-[#9cb3c9]">
                            Aliquam a tristique sapien, nec bibendum urna.
                            Maecenas convallis dignissim turpis, non suscipit
                            mauris interdum at. Morbi sed gravida nisl, a
                            pharetra nulla. Etiam tincidunt turpis leo, ut
                            mollis ipsum consectetur quis. Etiam faucibus est
                            risus, ac condimentum mauris consequat nec.
                            Curabitur eget feugiat massa
                          </div>
                        </div>
                        <div className="w-1/3">
                          <div className="rounded shadow">
                            <div className="flex rounded-t justify-between  bg-[#5aa3ed] px-2 md:px-4 py-1 md:py-1.5">
                              <div>
                                <span className="text-xs md:text-sm text-white font-semibold">
                                  Overall
                                </span>
                              </div>
                              <div>
                                <span className="text-xs md:text-sm text-white font-semibold">
                                  10
                                </span>
                              </div>
                            </div>
                            <div className="py-1 md:py-2 px-2 md:px-3 bg-[#0e2439]">
                              <div className="flex justify-between">
                                <div>
                                  <span className="text-xs md:text-sm text-white">
                                    Story
                                  </span>
                                </div>
                                <div>
                                  <span className="text-xs md:text-sm text-white">
                                    10
                                  </span>
                                </div>
                              </div>
                              <div className="flex justify-between">
                                <div>
                                  <span className="text-xs md:text-sm text-white">
                                    Acting/Cast
                                  </span>
                                </div>
                                <div>
                                  <span className="text-xs md:text-sm text-white">
                                    10
                                  </span>
                                </div>
                              </div>
                              <div className="flex justify-between">
                                <div>
                                  <span className="text-xs md:text-sm text-white">
                                    Music
                                  </span>
                                </div>
                                <div>
                                  <span className="text-xs md:text-sm text-white">
                                    10
                                  </span>
                                </div>
                              </div>
                              <div className="flex justify-between">
                                <div>
                                  <span className="text-xs md:text-sm text-white">
                                    Rewatch Value
                                  </span>
                                </div>
                                <div>
                                  <span className="text-xs md:text-sm text-white">
                                    10
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='absolute bottom-2 left-3'>
                        <div className="flex items-center justify-between text-white text-sm">
                          <div className="flex space-x-4 md:space-x-8">
                            <div className="flex cursor-pointer items-center transition hover:text-[#9cb3c9]">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="mr-1.5 h-4 w-4 md:h-5 md:w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                                />
                              </svg>
                              <span className='text-xs md:text-sm'>125</span>
                            </div>
                            <div className="flex cursor-pointer items-center transition hover:text-[#9cb3c9]">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="mr-1.5 h-4 w-4 md:h-5 md:w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                                />
                              </svg>
                              <span className='text-xs md:text-sm'>4</span>
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
  )
}

export default Review