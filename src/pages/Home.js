import React from "react";

import Jumbotron from "../components/Jumbotron";
import Carousel from "../components/Carousel";
import CarouselHome from "../components/CarouselHome";
import NewsHome from "../components/NewsHome";
import MoviesHome from "../components/MoviesHome";
import PodcastPlayer from "../components/PodcastPlayer";
import Quote from "../components/Quote";
import MusicsHome from "../components/MusicsHome";

import hero from "../assets/images/21.jpg";
import TvshowHome from "../components/TvshowHome";

const Home = () => {
  return (
    <>
      <div className="relative flex min-h-screen w-full bg-[#0e2439]">
        <div className="w-1/12">
          <PodcastPlayer />
        </div>
       
        <div className="w-full md:w-11/12 md:px-2">
          <CarouselHome />

          {/*  */}
          <div className="flex flex-row space-x-0">
            <div className="px-2">
              <div className="flex flex-col py-2 px-4 space-y-4">
                <div className="">
                  {/* <NewsHome /> */}
                </div>
              </div>
              
            </div>
          </div>
          <div className="relative md:py-5">
            <MoviesHome />
          </div>
          <div className="relative md:py-5">
            <TvshowHome />
          </div>
          <div className="relative md:py-5">
            <MusicsHome />
          </div>
         
          <Quote />
        </div>
      </div>
    </>
  );
};

export default Home;
