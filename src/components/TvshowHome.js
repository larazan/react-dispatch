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
import andor from "../assets/images/andro.jpg";
import doctor from "../assets/images/doctor.jpg";
import dragon from "../assets/images/dragon.jpg";
import power from "../assets/images/power.jpg";
import peripheral from "../assets/images/peripheral.jpg";
import chainshaw from "../assets/images/chainshaw.jpg";

import tv from "../assets/data/tv.json";

const images = (imgName) => {
  let cover = "";
  switch (imgName) {
    case "andor":
      cover = andor;
      break;
    case "doctor":
      cover = doctor;
      break;
    case "dragon":
      cover = dragon;
      break;
    case "power":
      cover = power;
      break;
    case "peripheral":
      cover = peripheral;
      break;
    case "chainshaw":
      cover = chainshaw;
      break;
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

const TvshowHome = () => {
  return (
    <>
      <div className="min-h-full w-full px-4 md:px-6">
        <div className="flex justify-between items-center mb-2">
          <div className="border-l-4 border-red-500 pl-2">
            <span className="text-white text-md md:text-lg font-bold uppercase">TV show</span>
          </div>
          <div>
            <Link to={"movies"}>
              <div className="flex items-center text-sm text-[#37d36e] hover:text-green-600">
                <span className="font-bold ">View All</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="py-2 pb-5 overflow-auto overflow-y-auto custom-scrollbar">
          <div className="inline-flex space-x-4">
            {tv.map((movie, id) => (
              <Link to={"movies"}>
              <div
                className="relative flex-col justify-center w-32 md:w-48 space-y-2"
                id={id}
              >
                <div className="relative block overflow-hidden bg-white shadow flex rounded">
                  <img
                    src={images(movie.image)}
                    alt=""
                    className="relative w-full"
                  />
                  <div className="absolute bottom-1 left-1 md:bottom-2 md:left-2">
                    <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-[#0e2439]">
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
                <div className="flex flex-col space-y-1">
                  <div className="text-center2 pt-1 text-sm text-white capitalize">
                    <span>{movie.title}</span>
                  </div>
                  <span className="text-white text-xs md:font-semibold">
                    {" "}
                    12 Episode
                  </span>
                </div>
              </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TvshowHome;
