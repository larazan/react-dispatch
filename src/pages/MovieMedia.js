import React from "react";

import parasite2 from "../assets/images/parasite2.jpg";
import parasite3 from "../assets/images/parasite3.jpg";
import parasite4 from "../assets/images/parasite4.jpg";
import parasite5 from "../assets/images/parasite5.jpg";
import parasite6 from "../assets/images/parasite6.jpg";

const MovieMedia = () => {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class=" px-5 py-5 md:py-10 mx-auto">
          <div class=" container flex flex-col text-center w-full mb-10 mx-auto">
            <h1 class="md:text-3xl text-lg font-medium title-font mb-4 text-gray-900">
              Gambar Latar
            </h1>
            <p class="lg:w-2/3 mx-auto leading-tight md:leading-snug text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom.
            </p>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="md:w-1/3 sm:w-1/2 p-2 md:p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src={parasite2}
                />
                <div class="px-3 py-3 md:px-8 md:py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 md:mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 class="title-font text-base md:text-lg font-medium text-gray-900 mb-3 leading-tight">
                    Ditambahkan oleh: Selena Gomes
                  </h1>
                  <p class="leading-tight md:leading-tight text-sm md:text-base mb-2">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div className="flex  pt-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex space-x-4 md:space-x-8">
                        <div className="flex cursor-pointer items-center transition ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-1.5 h-4 w-4 md:h-5 md:w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 110-2h4a1 1 0 011 1v4a1 1 0 11-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 112 0v1.586l2.293-2.293a1 1 0 011.414 1.414L6.414 15H8a1 1 0 110 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 110-2h1.586l-2.293-2.293a1 1 0 011.414-1.414L15 13.586V12a1 1 0 011-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-xs md:text-sm">1920x1080</span>
                        </div>
                        <div className="flex cursor-pointer items-center transition hover:text-[#9cb3c9]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-1.5 h-4 w-4 md:h-5 md:w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-xs md:text-sm">Download</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="md:w-1/3 sm:w-1/2 p-2 md:p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src={parasite3}
                />
                <div class="px-3 py-5 md:px-8 md:py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    The Catalyzer
                  </h1>
                  <p class="leading-tight md:leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div class="md:w-1/3 sm:w-1/2 p-2 md:p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src={parasite4}
                />
                <div class="px-3 py-5 md:px-8 md:py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    The 400 Blows
                  </h1>
                  <p class="leading-tight md:leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div class="md:w-1/3 sm:w-1/2 p-2 md:p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src={parasite5}
                />
                <div class="px-3 py-5 md:px-8 md:py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    Neptune
                  </h1>
                  <p class="leading-tight md:leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div class="md:w-1/3 sm:w-1/2 p-2 md:p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src={parasite6}
                />
                <div class="px-3 py-5 md:px-8 md:py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    Holden Caulfield
                  </h1>
                  <p class="leading-tight md:leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div class="md:w-1/3 sm:w-1/2 p-2 md:p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://dummyimage.com/606x366"
                />
                <div class="px-3 py-5 md:px-8 md:py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    Alper Kamu
                  </h1>
                  <p class="leading-tight md:leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MovieMedia;
