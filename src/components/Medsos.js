import React from 'react'
import { Link } from "react-router-dom";

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
                    <div className="flex justify-between bg-[#162c41] rounded shadow px-3 py-3">
                      <div className="flex space-x-2">
                        <button className="w-10 h-10 rounded-full bg-sky-400"></button>
                        <button className="hover:text-gray-400 text-white font-semibold">
                          <span>Top 10 Films of 2019</span>
                        </button>
                      </div>
                      <div className="flex items-center justify-center">
                        <span className="text-sm font-semibold text-white">Open</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <span className="text-sm font-semibold text-white">33</span>
                      </div>
                      <div className="flex-col items-center justify-center">
                        <span className="text-xs text-white">
                          Feb 11, 2021 at 7:30 PM
                        </span>
                        <div className="flex text-xs ">
                          <span className='text-white'>by{" "}</span>
                          <button>
                            <span className='ml-2 text-[#5aa3ed]'> JustinJackFlash</span>
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