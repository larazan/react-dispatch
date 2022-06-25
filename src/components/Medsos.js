import React from 'react'

const Medsos = () => {
  return (
    <>
    <div className="py-2 border-b border-gray-300">
              <div className="flex-col pt-4">
                <div>
                  <span className="font-semibold text-xl capitalize">
                    Media sosial
                  </span>
                </div>
                <div className="pt-5">
                  <div></div>
                  <div>
                    <div className="flex justify-between border rounded shadow px-3 py-3">
                      <div className="flex space-x-2">
                        <button className="w-10 h-10 rounded-full bg-sky-400"></button>
                        <button className="hover:text-gray-400">
                          <span>Top 10 Films of 2019</span>
                        </button>
                      </div>
                      <div className="flex items-center justify-center">
                        <span className="text-sm font-thin">Open</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <span className="text-sm font-thin">33</span>
                      </div>
                      <div className="flex-col items-center justify-center">
                        <span className="text-sm font-thin">
                          Feb 11, 2021 at 7:30 PM
                        </span>
                        <div className="flex text-sm font-thin">
                          <span>by </span>
                          <button>
                            <span> JustinJackFlash</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-5">
                  <button>
                    <span className="text-md font-semibold">
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