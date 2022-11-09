import React from 'react'

import batman from '../assets/images/batman.jpg'

const HeadNews = () => {
  return (
    <>
    {/* <div className="flex flex-row flex-wrap justify-center mx-10 md:mx-auto md:max-w-[560px] lg:max-w-container-lg mt-10 mb-16"> */}
      <div className="flex relative flex-col px-0 mb-4 md:mb-16 w-full max-w-container-lg md:mx-auto md:max-w-[560px] lg:flex-row lg:pr-0 lg:mx-auto lg:max-w-container-lg home-hero">
        <div className="">
          <div className="group pt-8 md:pt-16 mb-12 md:mb-12 lg:top-150 lg:pr-36 lg:mb-0 lg:min-h-[450px]">
            <div className="relative pl-10 md:pr-40 md:pl-0 lg:pr-0 lg:pl-20">
              <div className="block relative w-full aspect-five-four rounded-md">
                <a href="" className="block w-72 h-full">
                  <span>
                    <img src={batman} alt="" className='rounded-md' />
                  </span>
                </a>
              </div>
              <div class="hidden absolute top-auto bottom-0 w-[calc(100%-40px)] h-full bg-gradient-to-t from-black/10 to-transparent translate-y-0 pointer-events-none"></div>
              <div class="hidden absolute top-auto bottom-0 w-[calc(100%-40px)] h-1/3 bg-gradient-to-t from-black/30 to-transparent translate-y-0 pointer-events-none"></div>
            </div>
            <div className="relative -mt-14 pb-8 border-b border-gray-700 px-4 md:px-10 lg:border-none">
              <h2
                className="mb-2 md:mb-5 text-[40px] font-bold tracking-tighter leading-tight text-white md:mb-18 md:text-[40px]"
                style={{ lineHeight: 1 }}
              >
                Mark Zuckerberg on the Quest Pro, building the metaverse, and
                more
              </h2>
              <p
                class="mb-2 text-lg tracking-tight text-white md:text-[20px]"
                style={{ lineHeight: 1.2 }}
              >
                A year after rebranding Facebook to Meta, Mark Zuckerberg is
                still all in on building the metaverse
              </p>
              <span class="flex flex-wrap md:font-semibold text-[12px] tracking-tight text-green-500 uppercase" style={{ lineHeight: 1.4 }}>
                <span>
                  <a
                    class="text-franklin hover:shadow-underline-inherit"
                    href="/authors/alex-heath"
                  >
                    Alex Heath
                  </a>
                </span>
                <span>
                  <span className='text-gray-300 px-1 '>&nbsp;and&nbsp;</span>
                  <a
                    class="text-franklin hover:shadow-underline-inherit mr-8"
                    href="/authors/nilay-patel"
                  >
                    Nilay Patel
                  </a>
                </span>
                <span className='text-gray-300 font-light2'>51 minutes ago</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeadNews