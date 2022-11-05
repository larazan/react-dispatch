import React from 'react'

const Pagination = () => {
  return (
    <>
    <div className="flex justify-center my-10 w-full md:w-auto">
          <button
            className={`text-gray-400 block font-bold py-2 px-2 md:px-3  md:mr-2 flex items-center  hover:bg-green-500}`}
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
          <div className="flex px-1">
            <button className="md:border md:border-[#2affc4] text-[#2affc4] block md:rounded-full font-semibold md:font-bold py-1 md:py-2 px-2 md:px-4 mr-1 md:mr-2 flex items-center">
              1
            </button>
            <button className="md:border md:border-[#2affc4] text-[#2affc4] block md:rounded-full font-semibold md:font-bold py-1 md:py-2 px-2 md:px-4 mr-1 md:mr-2 flex items-center">
              2
            </button>
            <button className="md:border md:border-[#2affc4] text-[#2affc4] block md:rounded-full font-semibold md:font-bold py-1 md:py-2 px-2 md:px-4 mr-1 md:mr-2 flex items-center">
              3
            </button>
            <button className="md:border md:border-[#2affc4] text-[#2affc4] block md:rounded-full font-semibold md:font-bold py-1 md:py-2 px-2 md:px-4 mr-1 md:mr-2 flex items-center">
              4
            </button>
            <button className="md:border md:border-[#2affc4] text-[#2affc4] block md:rounded-full font-semibold md:font-bold py-1 md:py-2 px-2 md:px-4 mr-1 md:mr-2 flex items-center">
              5
            </button>
            <button className="md:border md:border-[#2affc4] text-[#2affc4] block md:rounded-full font-semibold md:font-bold py-1 md:py-2 px-2 md:px-4 mr-1 md:mr-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
            </button>
            <button className="md:border md:border-[#2affc4] text-[#2affc4] block md:rounded-full font-semibold md:font-bold py-1 md:py-2 px-2 md:px-4 mr-1 md:mr-2 flex items-center">
              300
            </button>
          </div>
          <button
            className={`text-[#2affc4] block font-bold py-2 px-0 flex items-center hover:bg-green-500}`}
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

export default Pagination