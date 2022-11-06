import React from 'react'
import { Link } from "react-router-dom";
import Avatar from "react-avatar";

const Medsos = () => {
  return (
    <>
    <div className="py-2 border-b pb-8 border-gray-200">
              <div className="flex-col pt-4">
              <div className="flex justify-between items-center ">
                <div className="">
                  <span className="text-lg font-bold capitalize">
                    discussion
                  </span>
                </div>
                <div>
                  <Link to={"movies"}>
                    <div className="flex items-center text-sm text-blue-500 hover:text-blue-600">
                      <span className="font-bold ">Go to discussion</span>
                    </div>
                  </Link>
                </div>
              </div>
                <div className="pt-3">
                  <div></div>
                  <div className='drop-shadow-md'>
                    <div className="flex w-full justify-between bg-white border rounded shadow-sm px-1.5 md:px-3 py-3">
                      <div className="flex w-4/12 leading-tight items-center space-x-1 md:space-x-2 ">
                        <Avatar name='Selena gomes' size={"36"} round={true} />
                        <button className="hover:text-gray-400 text-xs md:text-sm text-left md:font-semibold">
                          <span>Top 10 Films of 2019</span>
                        </button>
                      </div>
                      <div className="flex w-2/12 items-center text-left justify-center">
                        <span className="text-sm font-semibold">Open</span>
                      </div>
                      <div className="flex w-2/12 items-center justify-center ">
                        <span className="text-sm font-semibold">33</span>
                      </div>
                      <div className="flex-col w-4/12 leading-tight items-center justify-center">
                        <span className="text-xs">
                          Feb 11, 2021 at 7:30 PM
                        </span>
                        <div className="flex2 text-xs">
                          <span className=''>by{" "}</span>
                          <button>
                            <span className='ml-1 text-[#5aa3ed]'> JustinJackFlash</span>
                          </button>
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

export default Medsos