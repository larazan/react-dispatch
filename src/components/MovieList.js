import React, { useState } from "react";

import Filter from "./Filter";
import Rating from "./Rating";
import Pagination from "./Pagination";

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

const MovieList = () => {
  return (
    <>
      <div className="flex w-full space-x-4">
        <div className="w-1/3">
          <Filter />
        </div>
        <div className="w-2/3 min-h-full ">
          {movies.map((movie, id) => (
            <div className="my-6 drop-shadow-sm hover:drop-shadow-lg">
              <div className="relative block overflow-hidden bg-white rounded shadow aspect-w-16 aspect-h-10 dark:bg-gray-800 flex bg-white rounded space-x-9">
                <div className="w-1/4">
                  <div className="relative block w-40 h-auto">
                    <img
                      src={images(movie.image)}
                      className="relative w-full "
                    />
                  </div>
                </div>
                <div className="w-3/4">
                  <div className="pt-3 pb-2 pr-3">
                    <div className="flex-col text-lg font-bold">
                      <span className="text-[#0f82cc]">{movie.title}</span>
                      <div className="text-sm text-gray-400 font-thin capitalize">
                        <span>{movie.category} </span>
                        <span>{movie.country}</span>
                        <span> - {movie.year},</span>
                        <span> 10 episodes</span>
                      </div>
                      <div className="">
                        <Rating count={5} value={3} />
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="text-sm">
                        {movie.description.substring(0, 230)}....
                      </div>
                    </div>
                    <div className="mt-2 flex justify-between">
                      <span className="text-gray-500 text-sm">9.6.2022</span>
                      <div className="flex space-x-3 text-sm">
                        <button className="flex text-gray-500 items-center space-x-1">
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
                        <button className="flex text-gray-500 items-center space-x-1">
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
          ))}

          <Pagination />
        </div>
      </div>
    </>
  );
};

export default MovieList;
