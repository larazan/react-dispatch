import React from "react";

import Jumbotron from "../components/Jumbotron";
import Carousel from "../components/Carousel";
import CarouselHome from "../components/CarouselHome";
import NewsHome from "../components/NewsHome";
import PodcastPlayer from "../components/PodcastPlayer";
import Quote from "../components/Quote";

import hero from "../assets/images/21.jpg";

const Home = () => {
  return (
    <>
      <div className="relative flex min-h-screen w-full bg-[#0e2439]">
        <PodcastPlayer />
        <div className="w-full ">
          <CarouselHome />

          {/*  */}
          <div className="flex flex-row space-x-0">
            <div className="px-2">
              <div className="flex flex-col py-2 px-4 space-y-4">
                <div className="">
                  <NewsHome />
                </div>
              </div>
            </div>
          </div>
          <Quote />
        </div>
      </div>
    </>
  );
};

export default Home;
