import React from "react";

import Filter from "../components/Filter";

import podcast from "../assets/images/podcast-header-bg.jpg";
import hero from "../assets/images/hero.jpg";

import Rating from "../components/Rating";
import Pagination from "../components/Pagination";

import parasite from "../assets/images/parasite.jpg";
import allofus from "../assets/images/allofus.jpg";
import batman from "../assets/images/batman.jpg";
import blackphone from "../assets/images/blackphone.jpg";
import boys from "../assets/images/boys.jpg";
import django from "../assets/images/django.jpg";
import invisible from "../assets/images/invisible.jpg";
import joker from "../assets/images/joker.jpg";
import lotr from "../assets/images/lotr.jpg";
import moon from "../assets/images/moon.jpg";
import nobody from "../assets/images/nobody.jpg";
import obiwan from "../assets/images/obiwan.jpg";
import pianist from "../assets/images/pianist.jpg";
import spirited from "../assets/images/spirited.jpg";
import stranger from "../assets/images/stranger.jpg";
import topgun from "../assets/images/topgun.jpg";
import memory from "../assets/images/memory.jpg";

import movies from "../assets/data/movies.json";

const images = (imgName) => {
  let cover = "";
  switch (imgName) {
    case "allofus":
      cover = allofus;
      break;
    case "batman":
      cover = batman;
      break;
    case "blackphone":
      cover = blackphone;
      break;
    case "parasite":
      cover = parasite;
      break;
    case "boys":
      cover = boys;
      break;
    case "django":
      cover = django;
      break;
    case "invisible":
      cover = invisible;
      break;
    case "joker":
      cover = joker;
      break;
    case "lotr":
      cover = lotr;
      break;
    case "moon":
      cover = moon;
      break;
    case "nobody":
      cover = nobody;
      break;
    case "obiwan":
      cover = obiwan;
      break;
    case "pianist":
      cover = pianist;
      break;
    case "stranger":
      cover = stranger;
      break;
    case "topgun":
      cover = topgun;
      break;
    case "spirited":
      cover = spirited;
      break;
    case "memory":
      cover = memory;
      break;
  }

  return cover;
};

const Content = () => {
  return (
    <>
      <div className="relative flex min-h-screen w-full bg-[#0e2439]">
        <div className=" sticky top-0 left-0 flex flex-col justify-between2 items-center w-[5rem] h-screen bg-[#ffc500]">
          <div className="mt-5  h-1/4">
            <button className="text-white p-4 rounded-full bg-[#ef5753] shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
              {/* <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5 4h3v12H5V4zm7 0h3v12h-3V4z"/></svg> */}
            </button>
          </div>
          <div className="relative">
            <div className="flex flex-col justify-start w-[38rem] transform -rotate-90 inline-block">
              <div className="text-xl font-bold">Podcast in the morning</div>
              <span className="font-semibold text-sm">host by DJ Berlian</span>
            </div>
          </div>
          <div className="absolute bottom-0 flex bottom-5">
            <span className="">
              <svg
                width="41"
                height="89"
                viewBox="0 0 41 89"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="38.9138"
                  cy="87.4849"
                  r="1.42021"
                  transform="rotate(180 38.9138 87.4849)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.9138"
                  cy="74.9871"
                  r="1.42021"
                  transform="rotate(180 38.9138 74.9871)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.9138"
                  cy="62.4892"
                  r="1.42021"
                  transform="rotate(180 38.9138 62.4892)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.9138"
                  cy="38.3457"
                  r="1.42021"
                  transform="rotate(180 38.9138 38.3457)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.9138"
                  cy="13.634"
                  r="1.42021"
                  transform="rotate(180 38.9138 13.634)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.9138"
                  cy="50.2754"
                  r="1.42021"
                  transform="rotate(180 38.9138 50.2754)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.9138"
                  cy="26.1319"
                  r="1.42021"
                  transform="rotate(180 38.9138 26.1319)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.9138"
                  cy="1.42021"
                  r="1.42021"
                  transform="rotate(180 38.9138 1.42021)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="87.4849"
                  r="1.42021"
                  transform="rotate(180 26.4157 87.4849)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="74.9871"
                  r="1.42021"
                  transform="rotate(180 26.4157 74.9871)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="62.4892"
                  r="1.42021"
                  transform="rotate(180 26.4157 62.4892)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="38.3457"
                  r="1.42021"
                  transform="rotate(180 26.4157 38.3457)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="13.634"
                  r="1.42021"
                  transform="rotate(180 26.4157 13.634)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="50.2754"
                  r="1.42021"
                  transform="rotate(180 26.4157 50.2754)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="26.1319"
                  r="1.42021"
                  transform="rotate(180 26.4157 26.1319)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="1.4202"
                  r="1.42021"
                  transform="rotate(180 26.4157 1.4202)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="87.4849"
                  r="1.42021"
                  transform="rotate(180 13.9177 87.4849)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="74.9871"
                  r="1.42021"
                  transform="rotate(180 13.9177 74.9871)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="62.4892"
                  r="1.42021"
                  transform="rotate(180 13.9177 62.4892)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="38.3457"
                  r="1.42021"
                  transform="rotate(180 13.9177 38.3457)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="13.634"
                  r="1.42021"
                  transform="rotate(180 13.9177 13.634)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="50.2754"
                  r="1.42021"
                  transform="rotate(180 13.9177 50.2754)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="26.1319"
                  r="1.42021"
                  transform="rotate(180 13.9177 26.1319)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="1.42019"
                  r="1.42021"
                  transform="rotate(180 13.9177 1.42019)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="87.4849"
                  r="1.42021"
                  transform="rotate(180 1.41963 87.4849)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="74.9871"
                  r="1.42021"
                  transform="rotate(180 1.41963 74.9871)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="62.4892"
                  r="1.42021"
                  transform="rotate(180 1.41963 62.4892)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="38.3457"
                  r="1.42021"
                  transform="rotate(180 1.41963 38.3457)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="13.634"
                  r="1.42021"
                  transform="rotate(180 1.41963 13.634)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="50.2754"
                  r="1.42021"
                  transform="rotate(180 1.41963 50.2754)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="26.1319"
                  r="1.42021"
                  transform="rotate(180 1.41963 26.1319)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="1.4202"
                  r="1.42021"
                  transform="rotate(180 1.41963 1.4202)"
                  fill="#3056D3"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="w-full ">
          <div
            className="flex relative bg-gray-100  py-24 justify-center"
            style={{
              background: `url(${podcast}) center  no-repeat`,
            }}
          >
            <div className="p-12 max-w-2xl hero relative">
              <div className="md:text-5xl text-3xl leading-loose font-bold text-white">
                The best free asian movies & musics database.
              </div>
            </div>
          </div>
          {/*  */}
          <div className="flex flex-row space-x-0">
            <div className="flex w-1/3 px-3">
              <Filter />
            </div>
            <div className="border-l border-[#0d2134] w-2/3  ">
              <div className="relative w-full flex px-3 py-5 border-b border-[#0d2134]">
                <input
                  type="search"
                  name="serch"
                  className="w-full border-1 px-4 py-3.5 outline-none bg-[#1f364d] pl-10 rounded-full text-xl text-[#9cb3c9] placeholder-[#9cb3c9] focus:placeholder-[#9cb3c9] focus:border-purple-300 focus:outline-none focus:shadow-outline-purple"
                  // value={value}
                  // onChange={(e) => handleChange(e.target.value)}
                  // onFocus={() => setShowOptions(true)}
                  // onKeyDown={handleNav}
                  placeholder="search something"
                />
                <div className="absolute inset-y-0 left-7 flex items-center  cursor-pointer">
                  <svg
                    className="w-4 h-4 text-[#9cb3c9]"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="fill-current text-[#4799eb]"
                      d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
                    ></path>
                    <path
                      className="fill-current text-[#4799eb]"
                      d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"
                    ></path>
                  </svg>
                </div>
              </div>
              {/*  */}
              <div className="px-4 ">
              {movies.map((movie, id) => (
            <div className="my-6 drop-shadow-sm hover:drop-shadow-lg">
              <div className="relative block overflow-hidden bg-[#182e42] rounded shadow aspect-w-16 aspect-h-10 dark:bg-gray-800 flex bg-white rounded space-x-9">
                <div className="w-1/4">
                  <div className="relative block w-40 h-auto">
                    <img
                      src={images(movie.image)}
                      className="relative w-full "
                    />
                  </div>
                </div>
                <div className="w-3/4">
                  <div className=" pt-3 pb-2 pr-3">
                    <div className="flex-col text-lg font-bold">
                      <span className="text-white">{movie.title}</span>
                      <div className="text-sm text-[#9cb3c9]  capitalize">
                        <span>{movie.category} </span>
                        <span>{movie.country}</span>
                        <span> - {movie.year},</span>
                        <span> 10 episodes</span>
                      </div>
                      <div className="text-white">
                        <Rating count={5} value={3} />
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="text-sm text-[#9cb3c9]">
                        {movie.description.substring(0, 230)}....
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div className="absolute bottom-3">
                      <span className="text-white text-sm">9.6.2022</span>
                      </div>
                      <div className="absolute bottom-3 right-3">
                      
                        
                        <div className="flex space-x-3 text-sm">
                        <button className="flex text-white items-center space-x-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                          </svg>
                          <span>33</span>
                        </button>
                        <button className="flex text-white items-center space-x-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                            />
                          </svg>
                          <span>33</span>
                        </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
