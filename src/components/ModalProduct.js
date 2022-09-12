import React from 'react'

const ModalProduct = () => {
  return (
      <>
    <div>
      <div
        class="modal-root fixed bg-black bg-opacity-70 inset-0 z-50 cursor-pointer p-4 md:p-5"
        data-projection-id="13"
        style="opacity: 1;"
      >
        <div
          class="relative h-full mx-auto w-full"
          data-projection-id="14"
          style="transform: none;"
        >
          <div class="w-full md:w-auto absolute left-1/2 transform -translate-x-1/2 shadow-xl h-auto max-h-full top-1/2 -translate-y-1/2 rounded-lg">
            <button
              aria-label="Close panel"
              class="fixed z-10 inline-flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-white shadow text-gray-600 transition duration-200 focus:outline-none focus:text-gray-800 focus:shadow-md hover:text-gray-800 hover:shadow-md -top-3.5 md:-top-4 -end-3.5 md:-end-4"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                class="text-xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
              </svg>
            </button>
            <div
              class="overflow-y-auto h-full rounded-lg"
              style="max-height: calc(100vh - 120px);"
            >
              <div class="rounded-lg bg-white">
                <div class="flex flex-col lg:flex-row w-full md:w-[650px] lg:w-[960px] mx-auto overflow-hidden">
                  <div class="flex-shrink-0 flex items-center justify-center w-full lg:w-430px max-h-430px lg:max-h-full overflow-hidden bg-gray-300">
                    <img
                      src="https://chawkbazar.vercel.app/assets/images/products/featured/1.png"
                      alt="Adidas Woolen Cap"
                      class="lg:object-cover lg:w-full lg:h-full"
                    />
                  </div>
                  <div class="flex flex-col p-5 md:p-8 w-full">
                    <div class="pb-5">
                      <div class="mb-2 md:mb-2.5 block -mt-1.5" role="button">
                        <h2 class="text-heading text-lg md:text-xl lg:text-2xl font-semibold hover:text-black">
                          Adidas Woolen Cap
                        </h2>
                      </div>
                      <p class="text-sm leading-6 md:text-body md:leading-7">
                        Casual wear (casual attire or clothing) may be a Western
                        code that’s relaxed, occasional, spontaneous and fitted
                        to everyday use. Casual wear became popular within the
                        Western world following the counterculture of the 1960s.
                      </p>
                      <div class="flex items-center mt-3">
                        <div class="text-heading font-semibold text-base md:text-xl lg:text-2xl">
                          $16.00
                        </div>
                        <del class="font-segoe text-gray-400 text-base lg:text-xl ps-2.5 -mt-0.5 md:mt-0">
                          $20.00
                        </del>
                      </div>
                    </div>
                    <div class="mb-4">
                      <h3 class="text-base md:text-lg text-heading font-semibold mb-2.5 capitalize">
                        size
                      </h3>
                      <ul class="colors flex flex-wrap -me-3">
                        <li class="cursor-pointer rounded border border-gray-100 w-9 md:w-11 h-9 md:h-11 p-1 mb-2 md:mb-3 me-2 md:me-3 flex justify-center items-center text-heading text-xs md:text-sm uppercase font-semibold transition duration-200 ease-in-out hover:border-black">
                          S
                        </li>
                        <li class="cursor-pointer rounded border border-gray-100 w-9 md:w-11 h-9 md:h-11 p-1 mb-2 md:mb-3 me-2 md:me-3 flex justify-center items-center text-heading text-xs md:text-sm uppercase font-semibold transition duration-200 ease-in-out hover:border-black">
                          M
                        </li>
                        <li class="cursor-pointer rounded border border-gray-100 w-9 md:w-11 h-9 md:h-11 p-1 mb-2 md:mb-3 me-2 md:me-3 flex justify-center items-center text-heading text-xs md:text-sm uppercase font-semibold transition duration-200 ease-in-out hover:border-black">
                          L
                        </li>
                        <li class="cursor-pointer rounded border border-gray-100 w-9 md:w-11 h-9 md:h-11 p-1 mb-2 md:mb-3 me-2 md:me-3 flex justify-center items-center text-heading text-xs md:text-sm uppercase font-semibold transition duration-200 ease-in-out hover:border-black">
                          XL
                        </li>
                      </ul>
                    </div>
                    <div class="mb-4">
                      <h3 class="text-base md:text-lg text-heading font-semibold mb-2.5 capitalize">
                        color
                      </h3>
                      <ul class="colors flex flex-wrap -me-3">
                        <li class="cursor-pointer rounded border border-gray-100 w-9 md:w-11 h-9 md:h-11 p-1 mb-2 md:mb-3 me-2 md:me-3 flex justify-center items-center text-heading text-xs md:text-sm uppercase font-semibold transition duration-200 ease-in-out hover:border-black">
                          <span
                            class="h-full w-full rounded block"
                            style="background-color: rgb(232, 108, 37);"
                          ></span>
                        </li>
                        <li class="cursor-pointer rounded border border-gray-100 w-9 md:w-11 h-9 md:h-11 p-1 mb-2 md:mb-3 me-2 md:me-3 flex justify-center items-center text-heading text-xs md:text-sm uppercase font-semibold transition duration-200 ease-in-out hover:border-black">
                          <span
                            class="h-full w-full rounded block"
                            style="background-color: rgb(255, 165, 180);"
                          ></span>
                        </li>
                        <li class="cursor-pointer rounded border border-gray-100 w-9 md:w-11 h-9 md:h-11 p-1 mb-2 md:mb-3 me-2 md:me-3 flex justify-center items-center text-heading text-xs md:text-sm uppercase font-semibold transition duration-200 ease-in-out hover:border-black">
                          <span
                            class="h-full w-full rounded block"
                            style="background-color: rgb(130, 36, 227);"
                          ></span>
                        </li>
                        <li class="cursor-pointer rounded border border-gray-100 w-9 md:w-11 h-9 md:h-11 p-1 mb-2 md:mb-3 me-2 md:me-3 flex justify-center items-center text-heading text-xs md:text-sm uppercase font-semibold transition duration-200 ease-in-out hover:border-black">
                          <span
                            class="h-full w-full rounded block"
                            style="background-color: rgb(221, 51, 51);"
                          ></span>
                        </li>
                      </ul>
                    </div>
                    <div class="pt-2 md:pt-4">
                      <div class="flex items-center justify-between mb-4 space-s-3 sm:space-s-4">
                        <div class="group flex items-center justify-between rounded-md overflow-hidden flex-shrink-0 border h-11 md:h-12 border-gray-300">
                          <button
                            class="flex items-center justify-center flex-shrink-0 h-full transition ease-in-out duration-300 focus:outline-none w-10 md:w-12 text-heading border-e border-gray-300 hover:text-white hover:bg-heading"
                            disabled=""
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12px"
                              height="2px"
                              viewBox="0 0 12 1.5"
                            >
                              <rect
                                data-name="Rectangle 970"
                                width="12px"
                                height="2px"
                                fill="currentColor"
                              ></rect>
                            </svg>
                          </button>
                          <span class="font-semibold flex items-center justify-center h-full  transition-colors duration-250 ease-in-out cursor-default flex-shrink-0 text-base text-heading w-12  md:w-20 xl:w-24">
                            1
                          </span>
                          <button class="flex items-center justify-center h-full flex-shrink-0 transition ease-in-out duration-300 focus:outline-none w-10 md:w-12 text-heading border-s border-gray-300 hover:text-white hover:bg-heading">
                            <svg
                              data-name="plus (2)"
                              xmlns="http://www.w3.org/2000/svg"
                              width="12px"
                              height="12px"
                              viewBox="0 0 12 12"
                            >
                              <g data-name="Group 5367">
                                <path
                                  data-name="Path 17138"
                                  d="M6.749,5.251V0h-1.5V5.251H0v1.5H5.251V12h1.5V6.749H12v-1.5Z"
                                  fill="currentColor"
                                ></path>
                              </g>
                            </svg>
                          </button>
                        </div>
                        <button
                          data-variant="flat"
                          class="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none bg-heading text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-600 hover:shadow-cart cursor-not-allowed hover:cursor-not-allowed w-full h-11 md:h-12 px-1.5 bg-gray-400 hover:bg-gray-400"
                          disabled=""
                        >
                          Add To Cart
                        </button>
                      </div>
                      <button
                        data-variant="flat"
                        class="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none bg-heading text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-600 hover:shadow-cart w-full h-11 md:h-12"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default ModalProduct