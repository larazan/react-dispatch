import React from 'react'
import { Link } from 'react-router-dom';

import albums from "../assets/data/albums.json";
import photo1 from "../assets/images/album/1.jpg";
import photo2 from "../assets/images/album/2.jpg";
import photo3 from "../assets/images/album/3.jpg";
import photo4 from "../assets/images/album/4.jpg";
import photo5 from "../assets/images/album/5.jpg";

const images = (imgName) => {
  let photo = "";
  switch (imgName) {
    case "1":
      photo = photo1;
      break;
    case "2":
      photo = photo2;
      break;
    case "3":
      photo = photo3;
      break;
    case "4":
      photo = photo4;
      break;
    case "5":
      photo = photo5;
      break;
    
  }

  return photo;
};

const AlbumRelated = () => {
  return (
    <>
        <div className="min-h-full w-full px-4 md:px-6">
        <div className="flex justify-between items-center mb-2">
          <div className="border-l-4x border-red-500x pl-2x">
            <span className="text-white text-md md:text-lg font-semibold md:font-bold uppercase">Album</span>
          </div>
          
        </div>
        <div className="py-2 pb-5 overflow-auto overflow-y-auto custom-scrollbar">
          <div className="inline-flex space-x-4">
            {albums.map((album, id) => (
              <Link to={"/music"}>
              <div
                className="relative flex-col justify-center w-32 md:w-48 space-y-2"
                id={id}
              >
                <div className="relative block overflow-hidden bg-white shadow flex rounded">
                  <img
                    src={images(album.image)}
                    alt=""
                    className="relative w-full object-cover"
                  />
                </div>

                <div className='flex flex-col'>
                    <div className="text-center2 pt-1 md:pt-3 text-sm text-white capitalize">
                        <span>{album.title}</span>
                    </div>
                    <span className='text-white text-sm'>{album.year}</span>
                </div>    
                
              </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default AlbumRelated