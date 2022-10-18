import React from 'react'

import NewsList from '../components/NewsList' 
import Search from '../components/Search'
import PodcastPlayer from '../components/PodcastPlayer';

import hero from "../assets/images/21.jpg"
import NewsContent from '../components/NewsContent';
import PaginationTwo from '../components/PaginationTwo';
import HeadNews from '../components/HeadNews';
import SosmedNews from '../components/SosmedNews';
import PodcastHome from '../components/PodcastHome';

const News = () => {
  return (
    <>
      <div className="relative flex min-h-screen w-full bg-[#0e2439]">
        <PodcastPlayer />
        <div className="w-full ">
          
          <HeadNews />
          <NewsContent />
          <SosmedNews />
          <PodcastHome />
          <PaginationTwo />
        </div>
      </div>
      {/*  */}
    </>
  );
}

export default News