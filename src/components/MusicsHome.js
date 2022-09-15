import React from "react";
import { Link } from "react-router-dom";

import musics from "../assets/data/musics.json";

import miwa from "../assets/images/miwa.jpg";
import milet from "../assets/images/milet.jpg";
import aimer from "../assets/images/aimer.jpg";
import lisa from "../assets/images/lisa.jpg";
import yui from "../assets/images/yui.jpg";
import radwimps from "../assets/images/radwimps.jpg";
import kanaboon from "../assets/images/kanaboon.jpg";
import okrock from "../assets/images/okrock.jpg";
import asiankungfu from "../assets/images/asiankungfu.jpg";
import kenshi from "../assets/images/kenshi.jpg";
import doinfinity from "../assets/images/doinfinity.jpg";

const images = (imgName) => {
  let cover = "";
  switch (imgName) {
    case "miwa":
      cover = miwa;
      break;
    case "milet":
      cover = milet;
      break;
    case "aimer":
      cover = aimer;
      break;
    case "lisa":
      cover = lisa;
      break;
    case "yui":
      cover = yui;
      break;
    case "radwimps":
      cover = radwimps;
      break;
    case "kanaboon":
      cover = kanaboon;
      break;
    case "okrock":
      cover = okrock;
      break;
    case "asiankungfu":
      cover = asiankungfu;
      break;
    case "kenshi":
      cover = kenshi;
      break;
    case "doinfinity":
      cover = doinfinity;
      break;
  }

  return cover;
};

const MusicsHome = () => {
  return (
    <>
      <div className="min-h-full w-full px-6">
        <div className="flex justify-between items-center mb-2">
          <div className=" ">
            <span className="text-white text-xl font-bold">Musics</span>
          </div>
          <div>
            <Link to={"musics"}>
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
        <div className="py-2 pb-6 overflow-auto">
          <div className="inline-flex space-x-4">
            {musics.map((music, id) => (
              <div
                className="relative flex-col rounded-md justify-center w-52 space-y-2 bg-[#162c41] p-4"
                id={id}
              >
                <div className="relative block overflow-hidden bg-white shadow flex rounded">
                  <img
                    src={images(music.image)}
                    alt=""
                    className="relative w-full h-40 object-cover"
                  />
                </div>

                <div className="flex flex-col text-center2 pt-3 text-sm text-white capitalize space-y-1">
                  <span>{music.title}</span>
                  <div className="text-sm text-[#b6ccd7]">
                  Explore the dazzling sound of Japanese City Pop from the ‘80s
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MusicsHome;
