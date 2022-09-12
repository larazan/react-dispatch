import React, { useState } from "react";
import { Carousel } from "@trendyol-js/react-carousel";

import { initalState } from "../assets/data/related.js";
import products from "../assets/data/related.json";

const CarouselWrapper = () => {
  const [cards, setCards] = useState(initalState);

  const handleLeftClick = () => {
    const prevState = [...cards];
    // find next inactive card index - top
    const nextCardIdx = prevState
      .filter((ft) => ft.active === true)
      .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))[0].idx;
    // reset
    prevState.find((f) => f.active === false).active = true;
    // update
    prevState.find((f) => f.idx === nextCardIdx).active = false;
    // maximize pos
    prevState.find((f) => f.idx === nextCardIdx).pos =
      Math.max.apply(
        null,
        prevState.map(function (o) {
          return o.pos;
        })
      ) + 1;

    // update state
    setCards(prevState);
  };

  const handleRightClick = () => {
    const prevState = [...cards];
    // find next inactive card index - bottom
    const nextCardIdx = prevState
      .filter((ft) => ft.active === true)
      .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))
      .pop(1).idx;
    // minimize pos
    prevState.find((f) => f.active === false).pos =
      Math.min.apply(
        null,
        prevState.map(function (o) {
          return o.pos;
        })
      ) - 1;
    // reset
    prevState.find((f) => f.active === false).active = true;
    // update
    prevState.find((f) => f.idx === nextCardIdx).active = false;

    // update state
    setCards(prevState);
  };

  return (
    <>
      <div className="mb-10 md:mb-12">
        <div className="flex justify-between items-center flex-wrap mb-5 md:mb-6">
          <div className="flex items-center justify-between -mt-2 mb-0">
            <h3 className="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold">
              Flash Sale
            </h3>
          </div>
        </div>
        <div className="relative">
          <div className="relative overflow-hidden mx-0 p-0 z-10">
            <div className="relative flex w-full h-full z-10 box-content">
              {/*  */}
              {cards
                .filter((f) => f.active === true)
                .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))
                .map((card, index) => (
                  <div
                    className="swiper-slide swiper-slide-duplicate relative shrink-0 w-[276px] pb-1 h-auto mr-[20px] bg-white"
                    // data-swiper-slide-index="7"
                    key={index}
                  >
                    <div
                      className="group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 md:pb-1 flex-col items-start bg-white"
                      role="button"
                      title="Gucci Carlton UK"
                    >
                      <div className="flex mb-3 md:mb-3.5 pb-0">
                        <span className="inline-block relative m-0 p-0 w-full overflow-hidden box-border">
                          <img
                            alt="Gucci Carlton UK"
                            src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-3.png&w=384&q=100"
                            decoding="async"
                            data-nimg="intrinsic"
                            className="bg-gray-300 object-cover rounded-s-md rounded-md transition duration-150 ease-linear transform group-hover:scale-105"
                          />
                        </span>
                      </div>
                      <div className="w-full overflow-hidden px-3">
                        <h2 className="text-heading font-semibold truncate mb-1 md:mb-1.5 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg">
                          Gucci Carlton UK
                        </h2>
                        <p className="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate">
                          Knitted midi A-line dress, has a scoop neck,
                          sleeveless, straight hem
                        </p>
                        <div className="text-heading font-semibold text-sm sm:text-base mt-1.5 space-s-2 sm:text-xl md:text-base lg:text-xl md:mt-2.5 2xl:mt-3">
                          <span className="inline-block">$14.99</span>
                          <del className="sm:text-base font-normal text-gray-800">
                            $19.99
                          </del>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              {/*  */}
            </div>
          </div>
          <div className="flex items-center w-full absolute top-2/4 z-10 -mt-10 md:-mt-12 xl:-mt-14">
            <button
              className="w-7 h-7 lg:w-8 lg:h-8 text-sm md:text-base lg:text-lg text-black flex items-center justify-center rounded-full bg-white absolute transition duration-250 hover:bg-gray-900 hover:text-white focus:outline-none transform shadow-navigation -translate-x-1/2 lg:w-9 lg:h-9 xl:w-10 xl:h-10 3xl:w-12 3xl:h-12 text-sm md:text-base lg:text-xl 3xl:text-2xl left-0"
              aria-label="prev-button"
              onClick={() => handleLeftClick()}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path>
              </svg>
            </button>
            <button
              className="w-7 h-7 lg:w-8 lg:h-8 text-sm md:text-base lg:text-lg text-black flex items-center justify-center rounded-full bg-white absolute transition duration-250 hover:bg-gray-900 hover:text-white focus:outline-none transform shadow-navigation translate-x-1/2 lg:w-9 lg:h-9 xl:w-10 xl:h-10 3xl:w-12 3xl:h-12 text-sm md:text-base lg:text-xl 3xl:text-2xl right-0"
              aria-label="next-button"
              onClick={() => handleRightClick()}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarouselWrapper;
