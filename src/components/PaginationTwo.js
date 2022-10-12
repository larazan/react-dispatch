import React from 'react'

const PaginationTwo = () => {
  return (
    <>
        <div className="flex justify-center my-10 w-full md:w-auto">
          <button
            className={`text-gray-400 block font-bold py-2 px-3 mr-2 flex items-center  hover:bg-green-500}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <div className="flex border-x-2 px-4">
            <button className="border border-[#0074c4] text-[#0074c4] block rounded-full font-bold py-2 px-4  mr-2 flex items-center">
              1
            </button>
            <button className="text-[#0074c4] block font-bold py-2 px-4 mr-2 flex items-center">
              2
            </button>
            <button className="text-[#0074c4] block font-bold py-2 px-4 mr-2 flex items-center">
              3
            </button>
            <button className="text-[#0074c4] block font-bold py-2 px-4 mr-2 flex items-center">
              4
            </button>
            <button className="text-[#0074c4] block font-bold py-2 px-4 mr-2 flex items-center">
              5
            </button>
            <button className="text-[#0074c4] block font-bold py-2 px-4 mr-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
            </button>
            <button className="text-[#0074c4] block font-bold py-2 px-4 mr-2 flex items-center">
              300
            </button>
          </div>
          <button
            className={`text-[#0074c4] block font-bold py-2 px-3 ml-2 flex items-center  hover:bg-green-500}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
    </>
  )
}

export default PaginationTwo