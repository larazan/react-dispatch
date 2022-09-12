import React from "react";

const Detail = () => {
  return (
    <>
      <main
        className="relative flex-grow"
        style={{minHeight: "-webkit-fill-available"}}
      >
        <div className="border-t border-gray-300 mb-0"> </div>
        <div className="mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16">
          <div className="pt-8">
            <div className="chawkbazarBreadcrumb flex items-center">
              <ol className="flex items-center w-full overflow-hidden">
                <li className="text-sm text-body px-2.5 transition duration-200 ease-in first:ps-0 last:pe-0 hover:text-heading">
                  <a href="/">Home</a>
                </li>

                <li className="text-base text-body mt-0.5 ">/</li>
                <li className="text-sm text-body px-2.5 transition duration-200 ease-in first:ps-0 last:pe-0 hover:text-heading ">
                  <a className="capitalize" href="/products">
                    products
                  </a>
                </li>
                <li className="text-base text-body mt-0.5">/</li>
                <li
                  className="text-sm text-body px-2.5 transition duration-200 ease-in first:ps-0 last:pe-0 hover:text-heading "
                >
                  <a
                    className="capitalize"
                    href=" / products / armani-wide-leg-trousers "
                  >
                    armani wide leg trousers
                  </a>
                </li>
              </ol>
            </div>
          </div>
          <div className="block lg:grid grid-cols-9 gap-x-10 xl:gap-x-14 pt-7 pb-10 lg:pb-14 2 xl:pb-20 items-start ">
            <div className="carouselWrapper relative product-gallery ">
              <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events" dir="ltr ">
                <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal ">
                  <span className="swiper-pagination-bullet swiper-pagination-bullet-active "></span>
                  <span className="swiper-pagination-bullet "></span>
                  <span className="swiper-pagination-bullet "></span>
                  <span className="swiper-pagination-bullet "></span>
                </div>
                <div 
                  className="swiper-wrapper "
                  // style="transition-duration:0 ms; transform:translate3d(-868 px, 0 px, 0 px);"
                >
                  <div
                    className="swiper-slide swiper-slide-duplicate w-[434px]"
                    data-swiper-slide-index="2 "
                  >
                    <div className="col-span-1 transition duration-150 ease-in hover:opacity-90 ">
                      <img
                        src="/ assets / images / products / p-20-3. png "
                        alt="Maniac Red Boys--2"
                        className="object-cover w-full "
                      />
                    </div>
                  </div>
                  <div
                    className="swiper-slide swiper-slide-duplicate swiper-slide-prev w-[434px]"
                    data-swiper-slide-index="3 "
                  >
                    <div
                      className="col-span-1 transition duration-150 ease-in hover:opacity-90 "
                    >
                      <img
                        src=" / assets / images / products / p-20-4. png "
                        alt="Maniac Red Boys--3 "
                        className="object-cover w-full "
                      />
                    </div>
                  </div>
                  <div
                    className="swiper-slide swiper-slide-active w-[434px]"
                    data-swiper-slide-index="0 "
                  >
                    <div
                      className="col-span-1 transition duration-150 ease-in hover:opacity-90 "
                    >
                      <img
                        src=" / assets / images / products / p-20-1. png "
                        alt="Maniac Red Boys--0 "
                        className="object-cover w-full "
                      />
                    </div>
                  </div>
                  <div
                    className="swiper-slide swiper-slide-next w-[434px]"
                    data-swiper-slide-index="1 "
                  >
                    <div
                      className="col-span-1 transition duration-150 ease-in hover:opacity-90 "
                    >
                      <img
                        src=" / assets / images / products / p-20-2. png "
                        alt="Maniac Red Boys--1 "
                        className="object-cover w-full "
                      />
                    </div>
                  </div>
                  <div
                    className="swiper-slide w-[434px]"
                    data-swiper-slide-index="2 "
                  >
                    <div
                      className="col-span-1 transition duration-150 ease-in hover:opacity-90 "
                    >
                      <img
                        src=" / assets / images / products / p-20-3. png "
                        alt="Maniac Red Boys--2 "
                        className="object-cover w-full "
                      />
                    </div>
                  </div>
                  <div
                    className="swiper-slide swiper-slide-duplicate-prev w-[434px]"
                    data-swiper-slide-index="3 "
                  >
                    <div
                      className="col-span-1 transition duration-150 ease-in hover:opacity-90 "
                    >
                      <img
                        src=" / assets / images / products / p-20-4. png "
                        alt="Maniac Red Boys--3 "
                        className="object-cover w-full "
                      />
                    </div>
                  </div>
                  <div
                    className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active w-[434px]"
                    data-swiper-slide-index="0 "
                  >
                    <div
                      className="col-span-1 transition duration-150 ease-in hover:opacity-90 "
                    >
                      <img
                        src=" / assets / images / products / p-20-1. png "
                        alt="Maniac Red Boys--0 "
                        className="object-cover w-full "
                      />
                    </div>
                  </div>
                  <div
                    className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next w-[434px]"
                    data-swiper-slide-index="1 "
                  >
                    <div
                      className="col-span-1 transition duration-150 ease-in hover:opacity-90 "
                    >
                      <img
                        src=" / assets / images / products / p-20-2. png "
                        alt="Maniac Red Boys--1 "
                        className="object-cover w-full "
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="flex items-center w-full absolute top-2 / 4 z-10 hidden "
              >
                <button
                  className="w-7 h-7 lg:w-8 lg:h-8 text-sm md:text-base lg:text-lg text-black flex items-center justify-center rounded-full bg-white absolute transition duration-250 hover:bg-gray-900 hover:text-white focus:outline-none transform shadow-navigation-translate-x-1 / 2 lg:w-9 lg:h-9 xl:w-10 xl:h-10 3 xl:w-12 3 xl:h-12 text-sm md:text-base lg:text-xl 3 xl:text-2 xl start-0 "
                  aria-label="prev-button "
                >
                  <svg
                    stroke="currentColor "
                    fill="currentColor "
                    stroke-width="0 "
                    viewBox="0 0 512 512 "
                    height="1e m "
                    width="1e m "
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path>
                  </svg>
                </button>

                <div>
                  <button
                    className="w-7 h-7 lg:w-8 lg:h-8 text-sm md:text-base lg:text-lg text-black flex items-center justify-center rounded-full bg-white absolute transition duration-250 hover:bg-gray-900 hover:text-white focus:outline-none transform shadow-navigation translate-x-1/2 lg:w-9 lg:h-9 xl:w-10 xl:h-10 3xl:w-12 3xl:h-12 text-sm md:text-base lg:text-xl 3xl:text-2xl end-0"
                    aria-label="next-button"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
                    </svg>
                  </button>
                  <div className="col-span-4 pt-8 lg:pt-0">
                    <div className="pb-7 mb-7 border-b border-gray-300">
                      <h2 className="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold hover:text-black mb-3.5">
                        Maniac Red Boys
                      </h2>
                      <p className="text-body text-sm lg:text-base leading-6 lg:leading-8">
                        {" "}
                        Children 's clothing/ kids wear is usually more casual
                        than adult clothing, fit play and rest. Hosiery is
                        usually used. More recently, however, tons of
                        childrenswear is heavily influenced by trends in adult
                        fashion
                      </p>
                      <div className="flex items-center mt-5">
                        <div className="text-heading font-bold text-base md:text-xl lg:text-2xl 2xl:text-4xl pe-2 md:pe-0 lg:pe-2 2xl:pe-0">
                          $40.00
                        </div>
                        <span className="line-through font-segoe text-gray-400 text-sm md:text-base lg:text-lg xl:text-xl ps-2">
                          $50.00
                        </span>
                      </div>
                    </div>
                    <div className="pb-3 border-b border-gray-300">
                      <div className="mb-4">
                        <h3 className="text-base md:text-lg text-heading font-semibold mb-2.5 capitalize">
                          size
                        </h3>
                        <ul className="colors flex flex-wrap -me-3">
                          <li className="cursor-pointer rounded border border-gray-100 w-9 md:w-11 h-9 md:h-11 p-1 mb-2 md:mb-3 me-2 md:me-3 flex justify-center items-center text-heading text-xs md:text-sm uppercase font-semibold transition duration-200 ease-in-out hover:border-black">
                            S
                          </li>
                          <li className="cursor-pointer rounded border border-gray-100 w-9 md:w-11 h-9 md:h-11 p-1 mb-2 md:mb-3 me-2 md:me-3 flex justify-center items-center text-heading text-xs md:text-sm uppercase font-semibold transition duration-200 ease-in-out hover:border-black">
                            M
                          </li>
                          <li className="cursor-pointer rounded border border-gray-100 w-9 md:w-11 h-9 md:h-11 p-1 mb-2 md:mb-3 me-2 md:me-3 flex justify-center items-center text-heading text-xs md:text-sm uppercase font-semibold transition duration-200 ease-in-out hover:border-black">
                            L
                          </li>
                          <li className="cursor-pointer rounded border border-gray-100 w-9 md:w-11 h-9 md:h-11 p-1 mb-2 md:mb-3 me-2 md:me-3 flex justify-center items-center text-heading text-xs md:text-sm uppercase font-semibold transition duration-200 ease-in-out hover:border-black">
                            XL
                          </li>
                        </ul>
                      </div>
                      <div className="mb-4">
                        <h3 className="text-base md:text-lg text-heading font-semibold mb-2.5 capitalize">
                          color
                        </h3>
                        <ul className="colors flex flex-wrap -me-3">
                          <li className="cursor-pointer rounded border border-gray-100 w-9 md:w-11 h-9 md:h-11 p-1 mb-2 md:mb-3 me-2 md:me-3 flex justify-center items-center text-heading text-xs md:text-sm uppercase font-semibold transition duration-200 ease-in-out hover:border-black">
                            <span
                              className="h-full w-full rounded block"
                              style={{backgroundColor: "rgb(232, 108, 37)"}}
                            ></span>
                          </li>
                          <li className="cursor-pointer rounded border border-gray-100 w-9 md:w-11 h-9 md:h-11 p-1 mb-2 md:mb-3 me-2 md:me-3 flex justify-center items-center text-heading text-xs md:text-sm uppercase font-semibold transition duration-200 ease-in-out hover:border-black">
                            <span
                              className="h-full w-full rounded block"
                              style={{backgroundColor: "rgb(255, 165, 180)"}}
                            ></span>
                          </li>
                          <li className="cursor-pointer rounded border border-gray-100 w-9 md:w-11 h-9 md:h-11 p-1 mb-2 md:mb-3 me-2 md:me-3 flex justify-center items-center text-heading text-xs md:text-sm uppercase font-semibold transition duration-200 ease-in-out hover:border-black">
                            <span
                              className="h-full w-full rounded block"
                              style={{backgroundColor: "rgb(130, 36, 227)"}}
                            ></span>
                          </li>
                          <li className="cursor-pointer rounded border border-gray-100 w-9 md:w-11 h-9 md:h-11 p-1 mb-2 md:mb-3 me-2 md:me-3 flex justify-center items-center text-heading text-xs md:text-sm uppercase font-semibold transition duration-200 ease-in-out hover:border-black">
                            <span
                              className="h-full w-full rounded block"
                              style={{backgroundColor:"rgb(221, 51, 51)"}}
                            ></span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex items-center space-s-4 md:pe-32 lg:pe-12 2xl:pe-32 3xl:pe-48 border-b border-gray-300 py-8">
                      <div className="group flex items-center justify-between rounded-md overflow-hidden flex-shrink-0 border h-11 md:h-12 border-gray-300">
                        <button
                          className="flex items-center justify-center flex-shrink-0 h-full transition ease-in-out duration-300 focus:outline-none w-10 md:w-12 text-heading border-e border-gray-300 hover:text-white hover:bg-heading"
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
                        <span className="font-semibold flex items-center justify-center h-full  transition-colors duration-250 ease-in-out cursor-default flex-shrink-0 text-base text-heading w-12  md:w-20 xl:w-24">
                          1
                        </span>
                        <button className="flex items-center justify-center h-full flex-shrink-0 transition ease-in-out duration-300 focus:outline-none w-10 md:w-12 text-heading border-s border-gray-300 hover:text-white hover:bg-heading">
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
                        data-variant="slim"
                        className="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none h-11 md:h-12 px-5 bg-heading text-white py-2 transform-none normal-case hover:text-white hover:bg-gray-600 hover:shadow-cart cursor-not-allowed hover:cursor-not-allowed w-full md:w-6/12 xl:w-full bg-gray-400 hover:bg-gray-400"
                        disabled=""
                      >
                        <span className="py-2 3xl:px-8">Add to cart</span>
                      </button>
                    </div>
                    <div className="py-6">
                      <ul className="text-sm space-y-5 pb-1">
                        <li>
                          <span className="font-semibold text-heading inline-block pe-2">
                            SKU:
                          </span>
                          N/A
                        </li>
                        <li>
                          <span className="font-semibold text-heading inline-block pe-2">
                            Category:
                          </span>
                          <a
                            className="transition hover:underline hover:text-heading"
                            href="/"
                          >
                            kids
                          </a>
                        </li>
                        <li className="productTags">
                          <span className="font-semibold text-heading inline-block pe-2">
                            Tags:
                          </span>
                          <a
                            className="inline-block pe-1.5 transition hover:underline hover:text-heading last:pe-0"
                            href="/products/casual"
                          >
                            Casual<span className="text-heading">,</span>
                          </a>
                          <a
                            className="inline-block pe-1.5 transition hover:underline hover:text-heading last:pe-0"
                            href="/products/cotton"
                          >
                            Cotton<span className="text-heading">,</span>
                          </a>
                          <a
                            className="inline-block pe-1.5 transition hover:underline hover:text-heading last:pe-0"
                            href="/products/red"
                          >
                            Red<span className="text-heading">,</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="">
                      <header
                        className="cursor-pointer flex items-center justify-between transition-colors py-5 md:py-6 border-t border-gray-300"
                        data-projection-id="25"
                      >
                        <h2 className="text-sm font-semibold leading-relaxed text-heading pe-2 md:text-base lg:text-lg">
                          Product Details
                        </h2>
                        <div className="flex-shrink-0 relative w-4 h-4 flex justify-center items-center">
                          <div className="w-full h-0.5 bg-heading rounded-sm"></div>
                          <div className="origin-bottom transform w-0.5 h-full bg-heading rounded-sm absolute bottom-0 transition-transform duration-500 ease-in-out scale-100"></div>
                        </div>
                      </header>
                    </div>
                    <div className="">
                      <header
                        className="cursor-pointer flex items-center justify-between transition-colors py-5 md:py-6 border-t border-gray-300"
                        data-projection-id="27"
                      >
                        <h2 className="text-sm font-semibold leading-relaxed text-heading pe-2 md:text-base lg:text-lg">
                          Additional Information
                        </h2>
                        <div className="flex-shrink-0 relative w-4 h-4 flex justify-center items-center">
                          <div className="w-full h-0.5 bg-heading rounded-sm"></div>
                          <div className="origin-bottom transform w-0.5 h-full bg-heading rounded-sm absolute bottom-0 transition-transform duration-500 ease-in-out scale-100"></div>
                        </div>
                      </header>
                    </div>
                    <div className="">
                      <header
                        className="cursor-pointer flex items-center justify-between transition-colors py-5 md:py-6 border-t border-gray-300"
                        data-projection-id="28"
                      >
                        <h2 className="text-sm font-semibold leading-relaxed text-heading pe-2 md:text-base lg:text-lg">
                          Customer Reviews
                        </h2>
                        <div className="flex-shrink-0 relative w-4 h-4 flex justify-center items-center">
                          <div className="w-full h-0.5 bg-heading rounded-sm"></div>
                          <div className="origin-bottom transform w-0.5 h-full bg-heading rounded-sm absolute bottom-0 transition-transform duration-500 ease-in-out scale-100"></div>
                        </div>
                      </header>
                    </div>
                  </div>
                </div>
                <div className="mb-9 lg:mb-10 xl:mb-14">
                  <div className="flex items-center justify-between -mt-2 pb-0.5 mb-4 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8">
                    <h3 className="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold">
                      Related Products
                    </h3>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-x-3 md:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8">
                    <div
                      className="group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5 hover:shadow-product"
                      role="button"
                      title="Maniac Red Boys"
                    >
                      <div className="flex mb-3 md:mb-3.5">
                        <span 
                        className="relative box-border overflow-hidden inline-block w-full"
                        >
                          <span className="block box-border w-full">
                            <img
                              alt=""
                              aria-hidden="true"
                              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzQwIiBoZWlnaHQ9IjQ0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
                            />
                          </span>
                          <img
                            alt="Maniac Red Boys"
                            srcset="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-20.png&amp;w=384&amp;q=100 1x, /_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-20.png&amp;w=750&amp;q=100 2x"
                            src="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-20.png&amp;w=750&amp;q=100"
                            decoding="async"
                            data-nimg="intrinsic"
                            className="absolute inset-0 bg-gray-300 object-cover rounded-s-md w-full rounded-md transition duration-200 ease-in group-hover:rounded-b-none"
                          />
                          <noscript></noscript>
                        </span>
                      </div>
                      <div className="w-full overflow-hidden md:px-2.5 xl:px-4">
                        <h2 className="text-heading font-semibold truncate mb-1 text-sm md:text-base">
                          Maniac Red Boys
                        </h2>
                        <p className="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate">
                          Sporty essentials, these Under Armour athletic shorts
                          are smooth and lightweight in moisture-wicking
                          material.
                        </p>
                        <div className="text-heading font-semibold text-sm sm:text-base mt-1.5 space-s-2 lg:text-lg lg:mt-2.5">
                          <span className="inline-block">$15.00</span>
                          <del className="sm:text-base font-normal text-gray-800">
                            $20.00
                          </del>
                        </div>
                      </div>
                    </div>
                    <div
                      className="group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5 hover:shadow-product"
                      role="button"
                      title="12 Eco-Friendly Clothing Brands That"
                    >
                      <div className="flex mb-3 md:mb-3.5">
                        <span className="box-border w-full">
                          <span >
                            <img
                              alt=""
                              aria-hidden="true"
                              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzQwIiBoZWlnaHQ9IjQ0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
                              className="block "
                            />
                          </span>
                          <img
                            alt="12 Eco-Friendly Clothing Brands That"
                            srcset="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-5.png&amp;w=384&amp;q=100 1x, /_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-5.png&amp;w=750&amp;q=100 2x"
                            src="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-5.png&amp;w=750&amp;q=100"
                            decoding="async"
                            data-nimg="intrinsic"
                            className="absolute inset-0 bg-gray-300 object-cover rounded-s-md w-full rounded-md transition duration-200 ease-in group-hover:rounded-b-none"
                          />
                          <noscript></noscript>
                        </span>
                      </div>
                      <div className="w-full overflow-hidden md:px-2.5 xl:px-4">
                        <h2 className="text-heading font-semibold truncate mb-1 text-sm md:text-base">
                          12 Eco-Friendly Clothing Brands That
                        </h2>
                        <p className="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate">
                          12 Eco-Friendly Clothing Brands That, has a scoop
                          neck, sleeveless, straight hem
                        </p>
                        <div className="text-heading font-semibold text-sm sm:text-base mt-1.5 space-s-2 lg:text-lg lg:mt-2.5">
                          <span className="inline-block">$20.00</span>
                          <del className="sm:text-base font-normal text-gray-800">
                            $28.00
                          </del>
                        </div>
                      </div>
                    </div>
                    <div
                      className="group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5 hover:shadow-product"
                      role="button"
                      title="Long Sleeve Boy T-Shirt"
                    >
                      <div className="flex mb-3 md:mb-3.5">
                        <span>
                          <span >
                            <img
                              alt=""
                              aria-hidden="true"
                              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzQwIiBoZWlnaHQ9IjQ0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="

/>
                          </span>
                          <img
                            alt="Long Sleeve Boy T-Shirt"
                            srcset="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-23.png&amp;w=384&amp;q=100 1x, /_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-23.png&amp;w=750&amp;q=100 2x"
                            src="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-23.png&amp;w=750&amp;q=100"
                            decoding="async"
                            data-nimg="intrinsic"
                            className="absolute inset-0 bg-gray-300 object-cover rounded-s-md w-full rounded-md transition duration-200 ease-in group-hover:rounded-b-none"
                          />
                          <noscript></noscript>
                        </span>
                      </div>
                      <div className="w-full overflow-hidden md:px-2.5 xl:px-4">
                        <h2 className="text-heading font-semibold truncate mb-1 text-sm md:text-base">
                          Long Sleeve Boy T-Shirt
                        </h2>
                        <p className="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate">
                          100% cotton fabric Rollable sleeves and epaulette
                          Front double breast pocket
                        </p>
                        <div className="text-heading font-semibold text-sm sm:text-base mt-1.5 space-s-2 lg:text-lg lg:mt-2.5">
                          <span className="inline-block">$20.00</span>
                          <del className="sm:text-base font-normal text-gray-800">
                            $30.00
                          </del>
                        </div>
                      </div>
                    </div>
                    <div
                      className="group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5 hover:shadow-product"
                      role="button"
                      title="Regular Fit Flannel Shirt"
                    >
                      <div className="flex mb-3 md:mb-3.5">
                        <span >
                          <span >
                            <img
                              alt=""
                              aria-hidden="true"
                              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzQwIiBoZWlnaHQ9IjQ0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
                            />
                          </span>
                          <img
                            alt="Regular Fit Flannel Shirt"
                            srcset="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-4.png&amp;w=384&amp;q=100 1x, /_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-4.png&amp;w=750&amp;q=100 2x"
                            src="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-4.png&amp;w=750&amp;q=100"
                            decoding="async"
                            data-nimg="intrinsic"
                            className="bg-gray-300 object-cover rounded-s-md w-full rounded-md transition duration-200 ease-in group-hover:rounded-b-none"
                          />
                          <noscript></noscript>
                        </span>
                      </div>
                      <div className="w-full overflow-hidden md:px-2.5 xl:px-4">
                        <h2 className="text-heading font-semibold truncate mb-1 text-sm md:text-base">
                          Regular Fit Flannel Shirt
                        </h2>
                        <p className="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate">
                          The garments labelled as Committed are products that
                          have been produced using sustainable fibers or
                          processes, reducing their environmental impact. Mango'
                          s goal is to support the implementation of practices
                          more committed to the environment.{" "}
                        </p>
                        <div className="text-heading font-semibold text-sm sm:text-base mt-1.5 space-s-2 lg:text-lg lg:mt-2.5">
                          <span className="inline-block">$8.00</span>{" "}
                        </div>
                      </div>{" "}
                    </div>
                    <div
                      className="group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5 hover:shadow-product"
                      role="button"
                      title="Gucci Carlton UK"
                    >
                      <div className="flex mb-3 md:mb-3.5">
                        <span >
                          <span>
                            <img
                              alt=""
                              aria-hidden="true"
                              src="data:image/svg+xml;base64, PHN2ZyB3aWR0aD0iMzQwIiBoZWlnaHQ9IjQ0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4 = "
                              
                            />
                          </span>
                          <img
                            alt="Gucci Carlton UK "
                            srcset=""
                            src=""
                            decoding="async "
                            data-nimg="intrinsic "
                            className="absolute inset-0 bg-gray-300 object-cover rounded-s-md w-full rounded-md transition duration-200 ease-in group-hover:rounded-b-none "
                            
                          />
                          <noscript></noscript>
                        </span>
                      </div>
                      <div className="w-full overflow-hidden md:px-2.5 xl:px-4 ">
                        <h2 className="text-heading font-semibold truncate mb-1 text-sm md:text-base ">
                          Gucci Carlton UK
                        </h2>
                        <p className="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250 px] truncate ">
                          Knitted midi A-line dress, has a scoop neck,
                          sleeveless, straight hem
                        </p>
                        <div
                          className="text-heading font-semibold text-sm sm:text-base mt-1.5 space-s-2 lg:text-lg lg:mt-2.5 ">
                          <span className="inline-block ">
                            $14.99
                          </span>
                          <del className="sm:text-base font-normal text-gray-800 ">
                            $19.99
                          </del>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-5 sm:px-8 md:px-16 2 xl:px-24 flex flex-col xl:flex-row justify-center xl:justify-between items-center rounded-lg bg-gray-200 py-10 md:py-14 lg:py-16 " >
                  <div className="-mt-1.5 lg:-mt-2 xl:-mt-0.5 text-center xl:text-start mb-7 md:mb-8 lg:mb-9 xl:mb-0 ">
                    <h3 className="text-heading text-lg md:text-xl lg:text-2 xl 2 xl:text-3 xl xl:leading-10 font-bold mb-2 md:mb-2.5 lg:mb-3 xl:mb-3.5 ">
                      Get Expert Tips In Your Inbox
                    </h3>
                    <p className="text-body text-xs md:text-sm leading-6 md:leading-7 ">
                      Subscribe to our newsletter and stay updated.
                    </p>
                  </div>
                  <form
                    className="flex-shrink-0 w-full sm:w-96 md:w-[545 px]"
                    novalidate=""
                  >
                    <div className="flex flex-col sm:flex-row items-start justify-end " >
                      <div className="w-full " >
                        <input
                          id="subscription_email "
                          name="subscription_email "
                          type="email "
                          placeholder="Write your email here "
                          className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in -out border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in -out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 px-4 lg:px-7 h-12 lg:h-14 text-center sm:text-start bg-white "
                          autocomplete="off "
                          spellcheck="false "
                          aria-invalid="false "
                        />
                      </div>
                      <button
                        data-variant="flat " className="text-[13 px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in -out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none bg-heading text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-600 hover:shadow-cart mt-3 sm:mt-0 w-full sm:w-auto sm:ms-2 md:h-full flex-shrink-0 "
                      >
                        <span className="lg:py-0.5 ">
                          Subscribe
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Detail;
