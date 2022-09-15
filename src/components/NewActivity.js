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
      
        <div className="py-2 pb-5 overflow-auto">
        
          <div className="inline-flex space-x-4">
            {movies.map((movie, id) => (
              <div
                className="relative flex-col justify-center w-48 space-y-2 border rounded shadow"
                id={id}
              >
                <div className="relative block overflow-hidden bg-white shadow flex rounded">
                  <img
                    src={images(movie.image)}
                    alt=""
                    className="relative w-full"
                  />
                  
                </div>
                
                <div className="flex flex-col pt-1 space-y-1 px-2 text-sm capitalize">
                  <span className='font-semibold'>{movie.title}</span>
                  <div className='flex justify-between text-sm text-gray-600'>
                    <div>
                        <span>2 days ago</span>
                    </div>
                    <div>
                        <span>20 edit</span>
                    </div>
                  </div>
                </div>
               
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default NewActivity