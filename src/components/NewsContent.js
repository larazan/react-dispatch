import React from "react";
import { Link } from "react-router-dom";

import news1 from "../assets/images/news1.jpg";

const NewsContent = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center md:px-10 md:mx-auto md:max-w-[560px] lg:max-w-container-lg mt-1 mb-16">
        <div className="flex flex-col-reverse items-center w-full lg:flex-row lg:items-start">
          <div className="flex flex-col flex-1 max-w-[560px] mx-auto sm:max-w-container-sm ">
            <div className="flex relative flex-row justify-between items-center px-3 py-6 first-of-type:pt-0 text-white border-b last-of-type:border-b-0 border-gray-700 last-of-type:pb-0 max-w-container-sm md:px-10 lg:py-10">
              <div className="hidden md:block w-1/12">
                <div className="text-[12px] tracking-tight leading-tight text-green-500 font-semibold uppercase hidden md:block pl-0 border-l border-l-green-500 -rotate-180" style={{ writingMode: 'vertical-lr', textOrientation: 'sideways'}}>
                  <span className="capitalize">movie</span>
                </div>
              </div>
              <div className="w-8/12">
                <div className="flex flex-col space-y-2">
                  <div class="flex md:hidden">
                  <span class="text-[11px] tracking-tight leading-tight text-gray-100 uppercase pb-1 border-b border-green-400" >
                    <a href="/tesla">Tesla</a>
                    </span>
                  </div>
                  <Link to={"/blog"}>
                  <div className="text-white font-bold text-[20px]  tracking-tight md:text-[24px]" style={{ lineHeight: 1 }}>
                    <span className="capitalize" >
                      The best tablet and phone deals from Amazon prime early
                      access sale
                    </span>
                  </div>
                  </Link>
                  <div className="flex flex-wrap font-polysans text-[11px] tracking-15 leading-140 text-white uppercase">
                    <span>
                      <a
                        class="text-green-400 hover:shadow-underline-inherit mr-8"
                        href="/authors/cameron-faulkner"
                      >
                        Cameron Faulkner
                      </a>
                    </span>
                    <span>An hour ago</span>
                  </div>
                </div>
              </div>
              <div className="w-3/12">
                <div className="relative w-full rounded-[3px] border border-gray-800 border-solid ">
                  <div className="block relative w-full aspect-square2">
                    <a href="" className="block  md:w-full md:h-full">
                      <span>
                        <img className="rounded-sm object-fill w-32 h-20" src={news1} alt="" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex relative flex-row justify-between items-center px-3 py-6 first-of-type:pt-0 text-white border-b last-of-type:border-b-0 border-gray-700 last-of-type:pb-0 max-w-container-sm md:px-10 lg:py-10">
              <div className="hidden md:block w-1/12">
                <div className="text-[12px] tracking-tight leading-tight text-green-500 font-semibold uppercase hidden md:block pl-0 border-l border-l-green-500 -rotate-180" style={{ writingMode: 'vertical-lr', textOrientation: 'sideways'}}>
                  <span className="capitalize">movie</span>
                </div>
              </div>
              <div className="w-8/12">
                <div className="flex flex-col space-y-2">
                  <div class="flex md:hidden">
                  <span class="text-[11px] tracking-tight leading-tight text-gray-100 uppercase pb-1 border-b border-green-400" >
                    <a href="/tesla">Tesla</a>
                    </span>
                  </div>
                  <Link to={"/blog"}>
                  <div className="text-white font-bold text-[20px]  tracking-tight md:text-[24px]" style={{ lineHeight: 1 }}>
                    <span className="capitalize" >
                      The best tablet and phone deals from Amazon prime early
                      access sale
                    </span>
                  </div>
                  </Link>
                  <div className="flex flex-wrap font-polysans text-[11px] tracking-15 leading-140 text-white uppercase">
                    <span>
                      <a
                        class="text-green-400 hover:shadow-underline-inherit mr-8"
                        href="/authors/cameron-faulkner"
                      >
                        Cameron Faulkner
                      </a>
                    </span>
                    <span>An hour ago</span>
                  </div>
                </div>
              </div>
              <div className="w-3/12">
                <div className="relative w-full rounded-[3px] border border-gray-800 border-solid ">
                  <div className="block relative w-full aspect-square2">
                    <a href="" className="block  md:w-full md:h-full">
                      <span>
                        <img className="rounded-sm object-fill w-32 h-20" src={news1} alt="" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="flex relative flex-row justify-between items-center py-6 first-of-type:pt-0 text-white border-b last-of-type:border-b-0 border-gray-700 last-of-type:pb-0 max-w-container-sm md:px-10 lg:py-10">
              <div className="w-1/12">
                <div className="text-[12px] tracking-15 leading-120 text-green-500 font-semibold uppercase hidden md:block pl-0 border-l border-l-green-500 -rotate-180" style={{ writingMode: 'vertical-lr', textOrientation: 'sideways'}}>
                  <span className="capitalize">movie</span>
                </div>
              </div>
              <div className="w-8/12">
                <div className="flex flex-col space-y-2">
                  <div className="text-white font-bold text-[20px]  tracking-tight md:text-[24px]" style={{ lineHeight: 1 }}>
                    <span className="capitalize" >
                      The best tablet and phone deals from Amazon prime early
                      access sale
                    </span>
                  </div>
                  <div className="flex flex-wrap font-polysans text-[11px] tracking-15 leading-140 text-white uppercase">
                    <span>
                      <a
                        class="text-green-400 hover:shadow-underline-inherit mr-8"
                        href="/authors/cameron-faulkner"
                      >
                        Cameron Faulkner
                      </a>
                    </span>
                    <span>An hour ago</span>
                  </div>
                </div>
              </div>
              <div className="w-3/12">
                <div className="relative w-full rounded-[3px] border border-gray-800 border-solid ">
                  <div className="block relative w-full aspect-square2">
                    <a href="" className="block w-full h-full">
                      <span>
                        <img className="rounded-sm" src={news1} alt="" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsContent;
