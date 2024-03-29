import React from 'react'
import { Link } from 'react-router-dom';

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


const NewActivity = () => {
  return (
    <>
      <div className="h-full w-full px-0">
        <div className="flex justify-between items-center mb-2">
          <div className="">
            <span className="text-md md:text-lg font-semibold md:font-bold">
              Aktivitas Terbaru
            </span>
          </div>
          <div>
            <Link to={"movies"}>
              <div className="flex items-center text-sm text-[#37d36e] hover:text-green-600">
                <span className="font-bold ">View All</span>
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg> */}
              </div>
            </Link>
          </div>
        </div>
        <div className="py-2 pb-5 overflow-auto custom-scrollbar">
          <div className="inline-flex space-x-2">
            {movies.map((movie, id) => (
              <div
                className="relative flex-col justify-center w-36 md:w-48 space-y-2 border rounded-md shadow"
                id={id}
              >
                <div className="relative block overflow-hidden bg-white shadow flex rounded-t">
                  <img
                    src={images(movie.image)}
                    alt=""
                    className="relative w-full"
                  />
                </div>

                <div className="flex flex-col pt-0 space-y-1 px-2 text-sm capitalize">
                  <span className="font-semibold">{movie.title}</span>
                </div>

                <div className="absolute bottom-2 left-2 flex text-sm text-gray-600">
                  <div>
                    <span>2 days ago</span>
                  </div>
                </div>

                <div className="absolute bottom-2 right-2 flex text-sm text-gray-600">
                  <div>
                    <span>20 edit</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default NewActivity