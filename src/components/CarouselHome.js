import React, { useState, useEffect } from "react";

import sliders from "../assets/data/swiper.json";
import slides from "../assets/data/swiper.json";

import strange from "../assets/images/strange.jpg"
import mandalorian from "../assets/images/mandalorian.jpg"
import ring from "../assets/images/ring.jpg"

const getImage = (imgName) => {
    let imgGal = "";
    switch (imgName) {
      case "strange":
        imgGal = strange;
        break;
      case "mandalorian":
        imgGal = mandalorian;
        break;
      case "ring":
        imgGal = ring;
        break;
    }
  
    return imgGal;
  };

const CarouselHome = () => {
    const [current, setCurrent] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);
    const length = slides.length;
    let timeOut = null;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // if (!Array.isArray(slides) || slides.length <= 0) {
  //   return null;
  // }

  const slideRight = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const slideLeft = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 2500);
  }, [slideRight]);

  return (
    <>
      {/* <div className="w-screen">
        <div className="relative2">
          <header>
            
            <div
              className="relative2 "
              data-carousel="static"
              onMouseEnter={() => {
                setAutoPlay(false);
                clearTimeout(timeOut);
              }}
              onMouseLeave={() => {
                setAutoPlay(true);
              }}
            >
              <div className="overflow-hidden relative h-64 md:h-96 object-fill">
                  {sliders.map((slide, index) => (

                <div
                  className={`duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20 ${index === current ? 'slide active' : 'slide'} `}
                  data-carousel-item="active"
                  key={index}
                >
                    {index === current && (
                        <img
                        src={slide.image}
                        className="object-contain absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                        alt="..."
                      />
                    )}
                  
                  <div className="absolute top-1/2 lg:left-1/3 md:h-1/4 left-1/4 text-white font-bold md:text-4xl sm:text-2xl text-center">
                    Fast & Easy Booking
                  </div>
                </div>
                ))}
                
              </div>
              <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
              {sliders.map((_, index) => {
            return (
                <button
                  type="button"
                  key={index}
                  className={`w-3 h-3 rounded-full ${index === current ? 'bg-gray-700' : 'bg-white' } bg-white dark:bg-gray-800`}
                  aria-current="true"
                  aria-label="Slide 1"
                  data-carousel-slide-to="0"
                  onClick={() => setCurrent(index)}
                ></button>
                );
              })}
              </div>
              <button
                type="button"
                className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
                data-carousel-prev=""
                // onClick={prevSlide}
                onClick={slideLeft}
              >
                <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 19l-7-7 7-7"
                    ></path>
                  </svg>
                  <span className="hidden">Previous</span>
                </span>
              </button>
              <button
                type="button"
                className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
                data-carousel-next=""
                // onClick={nextSlide}
                onClick={slideRight}
              >
                <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                  <span className="hidden">Next</span>
                </span>
              </button>
            </div>
          </header>
        </div>
      </div> */}

      <div
        id="carouselExampleCaptions"
        className="carousel slide relative"
        data-bs-ride="carousel"
        onMouseEnter={() => {
          setAutoPlay(false);
          clearTimeout(timeOut);
        }}
        onMouseLeave={() => {
          setAutoPlay(true);
        }}
      >
        <div className="flex absolute bottom-0 left-1/2 z-10 space-x-3 -translate-x-1/2 absolute  justify-center p-0 mb-4">
          {sliders.map((_, index) => {
            return (
              <button
                type="button"
                key={index}
                className={`w-5 md:w-10 h-1 md:h-1.5 rounded-full2 ${
                  index === current ? "bg-gray-70000 opacity-50" : "bg-white"
                } bg-white dark:bg-gray-800`}
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                aria-current="true"
                aria-label="Slide 1"
                onClick={() => setCurrent(index)}
              ></button>
            );
          })}
        </div>
        <div className="carousel-inner relative w-full overflow-hidden">
          {sliders.map((slide, index) => (
            <div
              className="carousel-item active relative2 float-left2 w-full"
              key={index}
            >
              {index === current && (
                <img
                  // src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
                  className="block w-full"
                  src={getImage(slide.image)}
                  alt="..."
                />
                
              )}
              <div className="carousel-caption hidden md:block w-full absolute bottom-9 left-10 ">
                <div className="flex flex-col space-y-1 bg-gray-900 opacity-80 w-full opacity-40 h-20 px-3 py-3 border-l-4 border-green-400">
                  <div className="opacity-100">
                  <h5 className="text-xl text-white font-semibold uppercase">First slide label</h5>
                  </div>
                  <p className="text-white leading-tight">
                  Some representative placeholder content for the first slide.
                </p>
                </div>
                
              </div>
            </div>
          ))}
        </div>
        <button
          // className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          className="flex absolute top-0 left-0 z-10 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
          onClick={slideLeft}
        >
          <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <span className="hidden">Previous</span>
          </span>
        </button>
        <button
          // className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          className="flex absolute top-0 right-0 z-10 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
          onClick={slideRight}
        >
          <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <span className="hidden">Next</span>
          </span>
        </button>
      </div>
    </>
  );
};

export default CarouselHome;
