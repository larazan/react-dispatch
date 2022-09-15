import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";

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

const MoviesHome = () => {
  return (
    <>
      <div className="min-h-full w-full px-6">
      <div className="flex justify-between items-center mb-2">
          <div className=" ">
            <span className="text-white text-xl font-bold">Movies</span>
          </div>
          <div>
            <Link to={"movies"}>
              <div className="flex items-center text-white hover:text-[#fe2c55]">
                <span className="font-bold ">View All</span>
                <svg
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
                </svg>
              </div>
            </Link>
          </div>
        </div>
        <div className="py-2 pb-5 overflow-auto">
        
          <div className="inline-flex space-x-4">
            {movies.map((movie, id) => (
              <div
                className="relative flex-col justify-center w-40 space-y-2"
                id={id}
              >
                <div className="relative block overflow-hidden bg-white shadow flex rounded">
                  <img
                    src={images(movie.image)}
                    alt=""
                    className="relative w-full"
                  />
                   <div className="absolute bottom-0">
                  <div className="h-10 w-10 rounded-full bg-[#0e2439]">
                    <CircularProgressbar
                      value={89}
                      text={`${89}%`}
                      styles={buildStyles({
                        textSize: "30px",
                        pathColor: "#20bd70",
                        textColor: "#fff",
                        trailColor: "#d6d6d6",
                        backgroundColor: "#fff",
                      })}
                    />
                    ;
                  </div>
                </div>
                </div>
                
                <div className="text-center2 pt-3 text-sm text-white capitalize">
                  <span>{movie.title}</span>
                </div>
               
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MoviesHome;
