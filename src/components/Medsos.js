import React from 'react'

const Medsos = () => {
  return (
    <>
    <div className="py-2 border-b-2 border-[#1f364d]">
              <div className="flex-col pt-4">
                <div>
                  <span className="font-semibold text-xl capitalize text-[#9cb3c9]">
                    Media sosial
                  </span>
                </div>
                <div className="pt-5">
                  <div></div>
                  <div>
                    <div className="flex justify-between bg-[#162c41] rounded shadow px-3 py-3">
                      <div className="flex space-x-2">
                        <button className="w-10 h-10 rounded-full bg-sky-400"></button>
                        <button className="hover:text-gray-400 text-white font-semibold">
                          <span>Top 10 Films of 2019</span>
                        </button>
                      </div>
                      <div className="flex items-center justify-center">
                        <span className="text-sm font-semibold text-[#9cb3c9]">Open</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <span className="text-sm font-semibold text-[#9cb3c9]">33</span>
                      </div>
                      <div className="flex-col items-center justify-center">
                        <span className="text-sm text-white">
                          Feb 11, 2021 at 7:30 PM
                        </span>
                        <div className="flex text-sm ">
                          <span className='text-white'>by{" "}</span>
                          <button>
                            <span className='ml-2 text-[#5aa3ed]'> JustinJackFlash</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-5">
                  <button>
                    <span className="text-md font-semibold text-[#5aa3ed]">
                      Go to discussion
                    </span>
                  </button>
                </div>
              </div>
            </div>
    </>
  )
}

export default Medsos