import React from 'react'
import { Link } from 'react-router-dom';

import Filter from "../components/Filter";
import Pagination from "../components/Pagination";
import PodcastPlayer from '../components/PodcastPlayer';

import podcast from "../assets/images/podcast-header-bg.jpg";
import suzy from "../assets/images/suzy.jpg";
import photo1 from "../assets/images/1.jpg";
import photo2 from "../assets/images/2.jpg";
import photo3 from "../assets/images/3.jpg";
import photo4 from "../assets/images/4.jpg";
import photo5 from "../assets/images/5.jpg";
import photo6 from "../assets/images/6.jpg";
import photo7 from "../assets/images/7.jpg";
import photo8 from "../assets/images/8.jpg";
import photo9 from "../assets/images/9.jpg";
import photo10 from "../assets/images/10.jpg";
import photo11 from "../assets/images/11.jpg";
import photo12 from "../assets/images/12.jpg";

import casts from "../assets/data/casts.json";

const photos = (imgName) => {
  let photo = "";
  switch (imgName) {
    case "song kang-ho":
      photo = photo1;
      break;
    case "Lee Sun-kyun":
      photo = photo2;
      break;
    case "Cho Yeo-jeong":
      photo = photo3;
      break;
    case "Choi Woo-shik":
      photo = photo4;
      break;
    case "Park So-dam":
      photo = photo5;
      break;
    case "Lee Jung-eun":
      photo = photo6;
      break;
    case "Jang Hye-jin":
      photo = photo7;
      break;
    case "Park Myung-hoon":
      photo = photo8;
      break;
    case "Jung Ji-so":
      photo = photo9;
      break;
    case "Jung Hyeon-jun":
      photo = photo10;
      break;
    case "Park Keun-rok":
      photo = photo11;
      break;
    case "Jung Yi-seo":
      photo = photo12;
      break;
  }

  return photo;
};

const Actors = () => {
  return (
    <>
        <div className="relative flex min-h-screen w-full bg-[#0e2439]">
        <PodcastPlayer />
        <div className="w-full ">
          <div
            className="flex relative bg-gray-100  md:py-24 justify-center"
            style={{
              background: `url(${suzy}) center  no-repeat`,
            }}
          >
            <div className="p-4 md:p-12 max-w-2xl hero relative">
              <div className="md:text-5xl text-2xl leading-tight md:leading-loose font-semibold md:font-bold text-white">
                The best free asian movies & musics database.
              </div>
            </div>
          </div>
          {/*  */}
          <div className="flex flex-row space-x-0">
            <div className="hidden md:flex w-1/3 px-3">
              <Filter />
            </div>
            <div className="border-l border-[#0d2134] w-full md:w-2/3  ">
              <div className="relative w-full hidden2 flex px-3 py-5 border-b border-[#0d2134]">
                <input
                  type="search"
                  name="serch"
                  className="w-full border-1 px-4 py-2 md:py-3.5 outline-none bg-[#1f364d] pl-10 rounded-full text-lg md:text-xl text-[#9cb3c9] placeholder-[#9cb3c9] focus:placeholder-[#9cb3c9] focus:border-purple-300 focus:outline-none focus:shadow-outline-purple"
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
              <div className="px-4 mt-6 md:hidden">
              <div className="grid grid-cols-3 gap-y-4 gap-2">
              {casts.map((cast, id) => (
                <Link to={"/person"}>
                  <div
                    className="flex-col2 justify-center w-28 space-y-2"
                    key={id}
                  >
                    <div className="relative block overflow-hidden hover:bg-gray-800 hover:opacity-90 bg-white shadow flex rounded">
                      <img
                        src={photos(cast.name)}
                        alt=""
                        className="relative w-full"
                      />
                    </div>
                    <div className="flex-col leading-tight capitalize">
                      <div className="text-sm text-white">
                        <span className="font-semibold">{cast.name}</span>
                      </div>
                      {/* <div>
                        <span className="text-xs ">{cast.role}</span>
                      </div> */}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
              </div>
              <div className="px-4 hidden md:block">
              {casts.map((cast, id) => (
            <div className="my-6 drop-shadow-sm hover:drop-shadow-lg">
              <Link to={"/person"}>
              <div className="relative block overflow-hidden bg-[#162c41] hover:bg-[#1f364d] cursor-pointer rounded shadow aspect-w-16 aspect-h-10 dark:bg-gray-800 flex bg-white rounded space-x-9">
                <div className="w-1/4">
                  <div className="relative block w-40 h-auto">
                    <img src={photos(cast.name)} className="relative w-full " />
                  </div>
                </div>
                <div className="w-3/4">
                  <div className="pt-3 pb-2 pr-3">
                    <div className="flex justify-between">
                      <div className="flex-col text-lg font-bold ">
                        <span className="text-white capitalize">{cast.name}</span>
                        <div className="text-sm text-[#9cb3c9] capitalize">
                          <span>south korean</span>
                        </div>
                      </div>
                      <div className="flex ">
                        <button className="flex items-center justify-center space-x-1 text-[#9cb3c9]">
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
                          <span className="text-sm">15,343</span>
                        </button>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="text-sm text-[#9cb3c9]">
                        Song Joong Ki is a South Korean actor under History D&C
                        Entertainment. He rose to fame through the 2010
                        historical coming-of-age drama "Sungkyunkwan Scandal"
                        and the variety show "Running Man" as one of the
                        original cast members. Since then, he played a diverse
                        spectrum of roles in the television series,…
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </Link>
            </div>
          ))}
              </div>
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Actors