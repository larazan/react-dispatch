import React from 'react'

import FilterMusic from "./FilterMusic";
import Rating from "./Rating";
import Pagination from "./Pagination";

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

const MusicList = () => {
  return (
    <>
        <div className="flex w-full space-x-2">
        <div className="w-1/3 bg-[#ffe85c] px-3 py-3">
          <FilterMusic />
        </div>
        <div className="w-2/3 min-h-full px-2 ">
            <div className="grid grid-cols-2 md:lg:xl:grid-cols-3 group mt-3">
                {musics.map((music, id) => (
                <div className="p-5 flex flex-col items-center group md:lg:xl:border-r md:lg:xl:border-b bg-white hover:bg-gray-200 rounded m-2 cursor-pointer">
                    <span className="p-1 rounded bg-red-500 text-white shadow-lg shadow-red-200">
                        <img src={images(music.image)} />
                    </span>
                    <p className="text-base font-medium text-slate-700 mt-3">{music.title}</p>
                    <p className="mt-2 text-sm text-slate-500">{music.description.substring(0, 230)}....</p>
                </div>
                ))}
            </div>

          <Pagination />
        </div>
      </div>
    </>
  )
}

export default MusicList