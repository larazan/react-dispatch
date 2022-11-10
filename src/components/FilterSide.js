import React from 'react'

const FilterSide = ({ isOpen, toggle }) => {
    const options = [
        "Running",
        "Wet Weather",
        "Everyday",
        "Cool Weather",
        "Warm Weather",
      ];
    
      const hue = [
        {
          name: "Grey",
          color: "#8c8c8c",
        },
        {
          name: "Green",
          color: "#69715e",
        },
        {
          name: "White",
          color: "#f5f4f0",
        },
        {
          name: "Blue",
          color: "#49607c",
        },
        {
          name: "Black",
          color: "#3b3b3b",
        },
        {
          name: "Red",
          color: "#b14754",
        },
        {
          name: "Pink",
          color: "#dfabb5",
        },
        {
          name: "Brown",
          color: "#bd9474",
        },
        {
          name: "Yellow",
          color: "#ead99a",
        },
      ];

  return (
    <>
        <aside
        className={`px-8 transform top-12 right-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <div className="mt-4">
            <button className="h-8 w-8" onClick={toggle}>
              <svg
                className="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="bg-white mt-6">
          <div>
            <div className="mt-4">
              <div className="font-semibold text-base">
                <p>Filter By:</p>
              </div>
              <div className="border-t mt-4"></div>
              <div>
                <div className="mt-4 font-semibold text-base uppercase">
                  <p>Material</p>
                </div>
                <div className="mt-2">
                  <div className="py-1">
                    <input type="checkbox" className="" />
                    <span className="text-xs px-2">Soft & Cozy Wool</span>
                  </div>
                  <div className="py-1">
                    <input type="checkbox" className="" />
                    <span className="text-xs px-2">Light & Breezy Tree</span>
                  </div>
                </div>
                <div className="border-t mt-4"></div>
                <div className="mt-4 font-semibold text-base uppercase">
                  <p>Best For</p>
                </div>
                <div className="mt-2">
                  {options.map((option) => (
                    <div className="py-1">
                      <input type="checkbox" className="" />
                      <span className="text-xs px-2">{option}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border-t mt-4"></div>
              <div>
                <div className="mt-4 font-semibold text-base uppercase">
                  <p>Hue</p>
                </div>
                <div className="flex mt-3">
                  <div>
                    {hue.map((color) => (
                      <div className="flex py-1.5">
                        <button className="h-6 w-6 flex flex-col border border-gray-300 rounded-full overflow-hidden focus:ring-2 focus:ring-offset-1 focus:ring-gray-900 focus:outline-none">
                          <span className="h-full w-full flex flex-col transform">
                            <span
                              className="h-6 w-6"
                              style={{ backgroundColor: color.color }}
                            ></span>
                          </span>
                        </button>
                        <span className="flex text-xs px-2 items-center">
                          {color.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}

export default FilterSide