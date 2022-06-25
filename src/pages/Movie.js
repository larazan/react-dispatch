import React from "react";

import Medsos from "../components/Medsos";
import Review from "../components/Review";
import Comment from "../components/Comment";

import cover from "../assets/images/cover_parasite.jpg";
import parasite from "../assets/images/parasite.jpg";
import casts from "../assets/data/casts.json";
import tags from "../assets/data/tags.json";

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

const Movie = () => {
  return (
    <>
      <div
        className="flex relative py-9 justify-center bg-sky-600 opacity-400"
        style={{
          background: `url(${cover}) center no-repeat`,
          backgroundSize: "cover",
          height: "500px",
        }}
      >
        <div className="flex px-6 space-x-7">
          <div className="flex w-1/3 ">
            <div className=" w-full">
              <img src={parasite} className="" />
            </div>
          </div>
          <div className="flex-col w-2/3 justify-center ">
            <div className="items-center">
              <div className="flex text-white space-x-2">
                <div className="">
                  <span className="text-4xl font-bold">Parasite</span>
                </div>
                <div>
                  <span className="text-4xl text-gray-200">(2009)</span>
                </div>
              </div>
              <div className="flex text-white">
                <div className="flex space-x-2">
                  <div className=" border rounded px-1">
                    <span className="font-semibold">R</span>
                  </div>
                  <span>30/05/2019 (KR)</span>
                  <span>Komedi, Cerita Seru, Drama</span>
                  <span>2h 13m</span>
                </div>
              </div>
              <div className="flex py-5">
                <div className="flex space-x-5">
                  <div></div>
                  <div className="text-white">
                    <button className="rounded-full bg-[#032541] p-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                      </svg>
                    </button>
                  </div>
                  <div className="text-white">
                    <button className="rounded-full bg-[#032541] p-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="text-white">
                    <button className="rounded-full bg-[#032541] p-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                      </svg>
                    </button>
                  </div>
                  <div className="text-white">
                    <button className="rounded-full bg-[#032541] p-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex ">
                    <button className="flex items-center text-white hover:text-gray-300 space-x-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="font-bold text-lg ">Play Trailer</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="">
                <div>
                  <span className="text-gray-200 italic text-lg">
                    Act like you own the place.
                  </span>
                </div>
              </div>
              <div className="flex-col space-y-2">
                <div>
                  <span className="text-xl font-bold text-white">
                    Kilasan Singkat
                  </span>
                </div>
                <div>
                  <span className="text-white leading-none">
                    Semua menganggur, keluarga Ki-taek memiliki minat khusus
                    pada Taman kaya dan glamor untuk mata pencaharian mereka
                    sampai mereka terjerat dalam insiden tak terduga.
                  </span>
                </div>
              </div>
              <div className="flex py-2 space-x-10">
                <div className="flex-col text-white">
                  <div>
                    <span className="font-bold">Bong Joon-ho</span>
                  </div>
                  <div>
                    <span className="">Director, Screenplay, Story</span>
                  </div>
                </div>
                <div className="flex-col text-white">
                  <div>
                    <span className="font-bold">Han Jin-won</span>
                  </div>
                  <div>
                    <span className="">Screenplay</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-col h-full relative bg-white px-8 py-8">
        <div className="flex space-x-6">
          <div className="w-2/3">
            <div className="border-b border-gray-300">
              <div>
                <span className="text-xl font-semibold">Aktor Utama</span>
              </div>
              <div className="">
                <div className="py-2 overflow-auto">
                  <div className="inline-flex space-x-3">
                    {casts.map((cast, id) => (
                      <div
                        className="flex-col justify-center w-32 space-y-2"
                        id={id}
                      >
                        <div className="relative block overflow-hidden bg-white shadow flex rounded">
                          <img
                            src={photos(cast.name)}
                            alt=""
                            className="relative w-full"
                          />
                        </div>
                        <div className="flex-col capitalize">
                          <div className="text-md">
                            <span className="font-bold">{cast.name}</span>
                          </div>
                          <div>
                            <span className="text-sm">{cast.role}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="py-5">
                  <button>
                    <span className="text-md font-semibold">
                      Pemeran & kru lainnya
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <Medsos />
            <Review />
            <Comment />
            
          </div>
          <div className="w-1/3">
            <div className="flex-col">
              <div className="">
                <div className="">
                  {/* <button>facebook</button>
                  <button>twitter</button>
                  <button>instagram</button>
                  <button>link</button> */}
                  <div class="flex justify-around my-4">
            <div
              class="border hover:bg-[#1877f2] w-10 h-10 fill-[#1877f2] hover:fill-white border-blue-200 rounded-full flex items-center justify-center shadow-xl hover:shadow-blue-500/50 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"
                ></path>
              </svg>
            </div>

            <div
              class="border hover:bg-[#1d9bf0] w-10 h-10 fill-[#1d9bf0] hover:fill-white border-blue-200 rounded-full flex items-center justify-center shadow-xl hover:shadow-sky-500/50 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                ></path>
              </svg>
            </div>

            <div
              class="border hover:bg-[#bc2a8d] w-10 h-10 fill-[#bc2a8d] hover:fill-white border-pink-200 rounded-full flex items-center justify-center shadow-xl hover:shadow-pink-500/50 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"
                ></path>
                <circle cx="16.806" cy="7.207" r="1.078"></circle>
                <path
                  d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"
                ></path>
              </svg>
            </div>

            <div
              class="border hover:bg-[#25D366] w-10 h-10 fill-[#25D366] hover:fill-white border-green-200 rounded-full flex items-center justify-center shadow-xl hover:shadow-green-500/50 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"
                ></path>
              </svg>
            </div>

            <div
              class="border hover:bg-[#229ED9] w-10 h-10 fill-[#229ED9] hover:fill-white border-sky-200 rounded-full flex items-center justify-center shadow-xl hover:shadow-sky-500/50 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"
                ></path>
              </svg>
            </div>
          </div>
                </div>
              </div>
              <div>
                <div className="flex-col space-y-3">
                  <div className="flex-col">
                    <div>
                      <span className="text-md font-bold capitalize">
                        judul asli
                      </span>
                    </div>
                    <div>
                      <span>기생충</span>
                    </div>
                  </div>
                  <div className="flex-col">
                    <div>
                      <span className="text-md font-bold capitalize">
                        status
                      </span>
                    </div>
                    <div>
                      <span className="capitalize">Rilis</span>
                    </div>
                  </div>
                  <div className="flex-col">
                    <div>
                      <span className="text-md font-bold capitalize">
                        bahasa
                      </span>
                    </div>
                    <div>
                      <span className="capitalize">korea</span>
                    </div>
                  </div>
                  <div className="flex-col">
                    <div>
                      <span className="text-md font-bold capitalize">
                        anggaran
                      </span>
                    </div>
                    <div>
                      <span className="capitalize">$11,363,000.00</span>
                    </div>
                  </div>
                  <div className="flex-col">
                    <div>
                      <span className="text-md font-bold capitalize">
                        pemasukan
                      </span>
                    </div>
                    <div>
                      <span className="capitalize">$257,591,776.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-5">
                <div className="flex-col space-y-2">
                  <div>
                    <span className="font-bold text-md">Kata kunci</span>
                  </div>
                  <div>
                    <div className="flex-inline">
                      {tags.map((tag, id) => (
                        <button className="bg-[#e5e5e5] rounded border border-gray-300 leading-none px-2 py-1 mr-2 mb-2">
                          <span className="text-sm ">{tag.name}</span>
                        </button>
                      ))}
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

export default Movie;
