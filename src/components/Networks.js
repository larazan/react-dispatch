import React from 'react'

import networks from "../assets/data/networks.json";

import netflix from "../assets/images/networks/netflix.svg";
import hulu from "../assets/images/networks/hulu.svg";
import disney from "../assets/images/networks/disney_plus.svg";
import apple_tv from "../assets/images/networks/apple_tv.svg";
import amazon from "../assets/images/networks/amazon_prime_video.svg";

const photos = (imgName) => {
  let photo = "";
  switch (imgName) {
    case "netflix":
      photo = netflix;
      break;
    case "hulu":
      photo = hulu;
      break;
    case "disney+":
      photo = disney;
      break;
    case "apple_tv":
      photo = apple_tv;
      break;
    case "prime_video":
      photo = amazon;
      break;
    
  }

//   return photo;
  return <img src={photo} className="flex items-center w-14 h-14 p-2 " alt={photo} />;
};

const Networks = () => {
  return (
    <>
        <div className="py-5 border-b pb-8 border-gray-200">
        <div className="flex-col space-y-2">
          <div>
            <span className="font-bold text-md">Networks</span>
          </div>
          <div className="">
            <div className="flex-inline">
              {networks.map((network, id) => (
                <button
                  key={id}
                  className="bg-white rounded-full w-14 h-14 border-2 hover:border-blue-500 hover:bg-gray-400  hover:opacity-80 leading-none  mr-1 mb-1"
                >
                  {photos(network.img)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Networks