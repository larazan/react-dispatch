import React from "react";

import Riwayat from "../components/Riwayat";

import roles from "../assets/data/roles.json";
import photo from "../assets/images/1.jpg";
import parasite from "../assets/images/parasite.jpg";
import snowpiercer from "../assets/images/snowpiercer.jpg";
import memory from "../assets/images/memory.jpg";
import host from "../assets/images/host.jpg";
import lady from "../assets/images/lady.jpg";
import taxi from "../assets/images/taxi.jpg";
import thirst from "../assets/images/thirst.jpg";

const images = (imgName) => {
  let cover = "";
  switch (imgName) {
    case "parasite":
      cover = parasite;
      break;
    case "snowpiercer":
      cover = snowpiercer;
      break;
    case "memory":
      cover = memory;
      break;
    case "host":
      cover = host;
      break;
    case "lady":
      cover = lady;
      break;
    case "taxi":
      cover = taxi;
      break;
    case "thirst":
      cover = thirst;
      break;
  }

  return cover;
};

const Person = () => {
  return (
    <>
      <div className="flex-col min-h-screen relative bg-white px-8 pb-10">
        <div className="py-5">
          <div className="flex space-x-4">
            <div className="w-1/3">
              <div className="relative block overflow-hidden bg-white shadow flex rounded">
                <img src={photo} alt="" className="relative w-full" />
              </div>
              <div className="flex-col py-4">
                <span className="text-xl font-semibold">Tentang</span>
                <div className="flex-col space-y-3 pt-4">
                  <div className="flex-col">
                    <div className="">
                      <span className="font-semibold">Peran</span>
                    </div>
                    <div>
                      <span>Riwayat Perfilman</span>
                    </div>
                  </div>
                  <div className="flex-col">
                    <div>
                      <span className="font-semibold">Jenis kelamin</span>
                    </div>
                    <div>
                      <span>Pria</span>
                    </div>
                  </div>
                  <div className="flex-col">
                    <div>
                      <span className="font-semibold">Kelahiran</span>
                    </div>
                    <div>
                      <span>1967-01-17 (55 years old)</span>
                    </div>
                  </div>
                  <div className="flex-col">
                    <div>
                      <span className="font-semibold">Peran</span>
                    </div>
                    <div>
                      <span>Riwayat Perfilman</span>
                    </div>
                  </div>
                  <div className="flex-col">
                    <div>
                      <span className="font-semibold">Lokasi Kelahiran</span>
                    </div>
                    <div>
                      <span>Gimhae, South Gyeongsang, South Korea</span>
                    </div>
                  </div>
                  <div className="flex-col">
                    <div>
                      <span className="font-semibold">
                        Juga Dikenal Sebagai
                      </span>
                    </div>
                    <div>
                      <span>????????? Song Kang Ho</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-2/3 pl-3">
              <div>
                <div className="">
                  <span className="text-3xl font-bold">Song Kang-ho</span>
                </div>
                <div className="pt-6">
                  <div className="text-lg font-semibold">Biografi</div>
                  <div className="py-2">
                    <span>
                      Song Kang-ho (?????????) is a South Korean actor. Born on
                      January 17, 1967, he first worked in plays, entering a
                      troupe. He started working in films as a supporting actor
                      in minor roles. He made the breakthrough in 'Green Fish'
                      in a supporting role which had a major impact. In 'No. 3'
                      he actually created a syndrome from his role, when people
                      started imitating his acting.
                    </span>
                  </div>
                </div>
                <div className="py-3">
                  <div>
                    <span className="text-lg font-semibold">Peran</span>
                  </div>
                  <div className="py-2 overflow-auto">
                    <div className="inline-flex space-x-3">
                      {roles.map((role, id) => (
                        <div
                          className="flex-col justify-center w-32 space-y-2"
                          id={id}
                        >
                          <div className="relative block overflow-hidden bg-white shadow flex rounded">
                            <img
                              src={images(role.image)}
                              alt=""
                              className="relative w-full"
                            />
                          </div>
                          <div className="text-center text-sm capitalize">
                            <span>{role.title}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="">
                  <div>
                    <div>
                      <span className="text-xl font-semibold">Riwayat Perfilman</span>
                    </div>
                    <div>
                      <Riwayat />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Person;
