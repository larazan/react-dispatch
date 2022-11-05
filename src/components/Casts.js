import React from 'react'
import { Link } from 'react-router-dom';

import casts from "../assets/data/casts.json";
import photo1 from "../assets/images/1.jpg";
import photo2 from "../assets/images/2.jpg";
import photo3 from "../assets/images/3.jpg";
import photo4 from "../assets/images/4.jpg";
import photo5 from "../assets/images/5.jpg";
import photo6 from "../assets/images/6.jpg";
import photo7 from "../assets/images/7.jpg";
import photo8 from "../assets/images/8.jpg";
import photo9 from "../assets/images/9.jpg";
import photo10 from "../assets/images/10.jpg";
import photo11 from "../assets/images/11.jpg";
import photo12 from "../assets/images/12.jpg";

const photos = (imgName) => {
  let photo = "";
  switch (imgName) {
    case "song kang-ho":
      photo = photo1;
      break;
    case "Lee Sun-kyun":
      photo = photo2;
      break;
    case "Cho Yeo-jeong":
      photo = photo3;
      break;
    case "Choi Woo-shik":
      photo = photo4;
      break;
    case "Park So-dam":
      photo = photo5;
      break;
    case "Lee Jung-eun":
      photo = photo6;
      break;
    case "Jang Hye-jin":
      photo = photo7;
      break;
    case "Park Myung-hoon":
      photo = photo8;
      break;
    case "Jung Ji-so":
      photo = photo9;
      break;
    case "Jung Hyeon-jun":
      photo = photo10;
      break;
    case "Park Keun-rok":
      photo = photo11;
      break;
    case "Jung Yi-seo":
      photo = photo12;
      break;
  }

  return photo;
};

const Casts = () => {
  return (
    <>
        <div className="border-b pb-8 border-gray-200">
              <div className="flex justify-between items-center mb-2">
                <div className="">
                  <span className="text-lg font-bold capitalize">
                    Aktor utama
                  </span>
                </div>
                <div>
                  <Link to={"movies"}>
                    <div className="flex items-center text-sm text-blue-500 hover:text-blue-600">
                      <span className="font-bold ">View All</span>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="">
                <div className="py-2 overflow-auto overflow-y-auto custom-scrollbar">
                  <div className="inline-flex space-x-3">
                    {casts.map((cast, id) => (
                        <Link to={""}>
                      <div
                        className="flex-col justify-center w-32 space-y-2"
                        key={id}
                      >
                        <div className="relative block overflow-hidden hover:bg-gray-800 hover:opacity-90 bg-white shadow flex rounded">
                          <img
                            src={photos(cast.name)}
                            alt=""
                            className="relative w-full"
                          />
                        </div>
                        <div className="flex-col capitalize">
                          <div className="text-md">
                            <span className="font-semibold">{cast.name}</span>
                          </div>
                          <div>
                            <span className="text-sm ">{cast.role}</span>
                          </div>
                        </div>
                      </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
    </>
  )
}

export default Casts