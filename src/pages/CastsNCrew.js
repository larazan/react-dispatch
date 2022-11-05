import React from "react";
import { Link } from "react-router-dom";

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

import men from "../assets/images/man.svg";
import women from "../assets/images/women.svg";

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

const CastsNCrew = () => {
  return (
    <>
      <div className="flex-col h-full relative bg-white px-4 md:px-8 py-8">
        <div className="flex-row hidden md:flex md:space-x-6">
          <div className="flex md:flex-row w-full">
            <div className="w-1/2">
              <div className="py-2">
                <span className="text-2xl font-semibold2 capitalize">
                  Pemeran
                </span>
              </div>
              {casts.map((cast, id) => (
                <Link to={""}>
                  <div
                    key={id}
                    className="flex flex-row items-center md:flex justify-center2 py-2 md:justify-between2 w-32 md:w-full space-y-2 md:space-x-5"
                  >
                    <div className="relative block overflow-hidden hover:bg-gray-800 hover:opacity-90 bg-white shadow flex rounded">
                      <img
                        src={photos(cast.name)}
                        alt=""
                        className="relative w-20"
                      />
                    </div>
                    <div className="flex-col leading-tight capitalize">
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
            <div className="w-1/2">
              <div className="py-2">
                <span className="text-2xl font-semibold2 capitalize">Kru</span>
              </div>
              <Link to={""}>
                <div className="flex flex-row items-center md:flex justify-center2 py-2 md:justify-between2 w-32 md:w-full md:space-x-5">
                  <div className="relative w-14 h-14 justify-center block overflow-hidden hover:bg-gray-300 hover:opacity-90 bg-gray-200 shadow flex rounded">
                    <img src={men} alt="" className="relative w-13 p-2" />
                  </div>
                  <div className="flex-col leading-tight capitalize">
                    <div className="text-md">
                      <span className="font-semibold">Nicolas Plotquin</span>
                    </div>
                    <div>
                      <span className="text-sm capitalize">art direction</span>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to={""}>
                <div className="flex flex-row items-center md:flex justify-center2 py-2 md:justify-between2 w-32 md:w-full md:space-x-5">
                  <div className="relative w-14 h-14 justify-center block overflow-hidden hover:bg-gray-300 hover:opacity-90 bg-gray-200 shadow flex rounded">
                    <img src={women} alt="" className="relative w-13 p-2" />
                  </div>
                  <div className="flex-col leading-tight capitalize">
                    <div className="text-md">
                      <span className="font-semibold">Rahma Farahat</span>
                    </div>
                    <div>
                      <span className="text-sm capitalize">
                        asistant art director
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-col md:hidden space-y-4">
          <div>
            <div className="w-full py-2">
              <span className="text-lg font-semibold capitalize">
                Pemeran
              </span>
            </div>
            <div className="grid grid-cols-3  gap-2">
              {casts.map((cast, id) => (
                <Link to={""}>
                  <div
                    className="flex-col2 justify-center w-28 space-y-2"
                    key={id}
                  >
                    <div className="relative block overflow-hidden hover:bg-gray-800 hover:opacity-90 bg-white shadow flex rounded">
                      <img
                        src={photos(cast.name)}
                        alt=""
                        className="relative w-full"
                      />
                    </div>
                    <div className="flex-col leading-tight capitalize">
                      <div className="text-sm">
                        <span className="font-semibold">{cast.name}</span>
                      </div>
                      <div>
                        <span className="text-xs ">{cast.role}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="w-full py-2">
              <span className="text-lg font-semibold capitalize">Kru</span>
            </div>
            <div className="grid grid-cols-3  gap-2">
              <Link to={""}>
                <div className="flex-col2 justify-center w-28 space-y-2">
                  <div className="relative block overflow-hidden hover:bg-gray-300 hover:opacity-90 bg-gray-200 shadow flex rounded">
                    <img src={men} alt="" className="relative w-13 p-2" />
                  </div>
                  <div className="flex-col leading-tight capitalize">
                    <div className="text-sm">
                      <span className="font-semibold">Nicolas Plotquin</span>
                    </div>
                    <div>
                      <span className="text-xs capitalize">art direction</span>
                    </div>
                  </div>
                </div>
              </Link>

              <Link to={""}>
                <div className="flex-col2 justify-center w-28 space-y-2">
                  <div className="relative block overflow-hidden hover:bg-gray-300 hover:opacity-90 bg-gray-200 shadow flex rounded">
                    <img src={women} alt="" className="relative w-13 p-2" />
                  </div>
                  <div className="flex-col leading-tight capitalize">
                    <div className="text-sm">
                      <span className="font-semibold">Rahma Farahat</span>
                    </div>
                    <div>
                      <span className="text-xs capitalize">
                        asistant art director
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CastsNCrew;
