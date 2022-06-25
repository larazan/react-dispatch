import React from "react";

import Filter from "./Filter";
import Pagination from "./Pagination";

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

const ActorList = () => {
  return (
    <>
      <div className="flex w-full space-x-4">
        <div className="w-1/3">
          <Filter />
        </div>
        <div className="w-2/3 min-h-full ">
          {casts.map((cast, id) => (
            <div className="my-6 drop-shadow-sm hover:drop-shadow-lg">
              <div className="relative block overflow-hidden bg-white rounded shadow aspect-w-16 aspect-h-10 dark:bg-gray-800 flex bg-white rounded space-x-9">
                <div className="w-1/4">
                  <div className="relative block w-40 h-auto">
                    <img src={photos(cast.name)} className="relative w-full " />
                  </div>
                </div>
                <div className="w-3/4">
                  <div className="pt-3 pb-2 pr-3">
                    <div className="flex justify-between">
                      <div className="flex-col text-lg font-bold ">
                        <span className="text-[#0f82cc]">{cast.name}</span>
                        <div className="text-sm text-gray-400 font-thin capitalize">
                          <span>south korean</span>
                        </div>
                      </div>
                      <div className="flex ">
                        <button className="flex items-center justify-center space-x-1">
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
                      <div className="text-sm">
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
            </div>
          ))}

          <Pagination />
        </div>
      </div>
    </>
  );
};

export default ActorList;
