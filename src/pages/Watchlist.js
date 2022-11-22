import React, { useState } from 'react'
import MoviesList from '../components/MoviesList';

const Watchlist = () => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <>
      <main className="container mx-auto mb-20">
        <div className="flex flex-col space-y-6 min-h-full relative py-4">
          
          <div>
            <div className="py-1">
              <span className="text-xl font-semibold">Daftar tonton saya</span>
            </div>
            <div className="flex justify-between w-full items-center">
              <ul
                className="flex mb-0 list-none flex-row2  justify-start"
                role="tablist"
              >
                <li
                  className={
                    "-mb-px mr-2 last:mr-0 flex-auto2 text-center " +
                    (openTab === 1 ? "border-b-4 border-indigo-400" : "")
                  }
                >
                  <a
                    className="text-sm font-bold px-5 py-2 block leading-normal"
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(1);
                    }}
                    data-toggle="tab"
                    href="#link1"
                    role="tablist"
                  >
                    <div className="flex flex-col items-center hidden md:flex">
                      <span className="text-md font-semibold text-gray-800">
                        Film
                      </span>
                    </div>
                  </a>
                </li>
                <li
                  className={
                    "-mb-px mr-2 last:mr-0 flex-auto2 text-center " +
                    (openTab === 2 ? "border-b-4 border-indigo-400" : "")
                  }
                >
                  <a
                    className="text-sm font-bold px-5 py-2 block leading-normal"
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(2);
                    }}
                    data-toggle="tab"
                    href="#link2"
                    role="tablist"
                  >
                    <div className="flex flex-col items-center hidden md:flex">
                      <span className="text-md font-semibold text-gray-800">
                        TV
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
              
            </div>
            <div className="tab-content tab-space">
              <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <MoviesList />
              </div>
              <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <MoviesList />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Watchlist