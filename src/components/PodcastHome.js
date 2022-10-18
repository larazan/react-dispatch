import React from "react";
import { Link } from "react-router-dom";

const PodcastHome = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center mx-10 md:mx-auto md:max-w-[560px] lg:max-w-container-lg mt-10 mb-16">
        <div className="flex flex-col-reverse items-center w-full lg:flex-row lg:items-start">
          <div className="duet--layout--rail max-w-desktop-breaker h-full block z-0 text-white lg:flex lg:flex-col lg:flex-1">
            <div className="flex-auto">
              <div className=" relative p-8 ml:m-auto mt-40 mb-50 ml-[65px] min-h-[300px] rounded-[4px] sm:w-tablet-breaker md:ml-14 lg:overflow-hidden lg:sticky lg:top-40 lg:my-0 lg:mb-10 lg:ml-0 lg:w-desktop-breaker lg:min-h-[500px] lg:rounded-[20px] bg-[#c3dd1e] text-black">
                <h2
                  className="flex absolute top-[15px] left-[-55px] -z-10 text-[60px] font-ultra tracking-1 leading-tight text-white rotate-180 lg:hidden"
                  style={{
                    writingMode: "vertical-rl",
                    textOrientation: "sideways",
                  }}
                >
                  Podcasts
                </h2>
                <div className="flex relative z-10 justify-between mb-[20px] font-semibold text-[11px] tracking-15 uppercase ">
                  <span>Podcasts</span>
                  <Link
                    to="/podcasts"
                    className="hover:text-[#309875] underline hover:shadow-underline-[#309875]"
                  >
                    See more Podcasts
                  </Link>
                </div>
                <div
                  className="hidden absolute right-0 bottom-[-10px] mr-[-25px] h-full font-manuka text-[200px] font-ultra leading-100 opacity-50 rotate-180 lg:flex text-[#309875]"
                  style={{
                    writingMode: "vertical-rl",
                    textOrientation: "sideways",
                  }}
                >
                  Podcasts
                </div>
                <ol className="w-full lg:mt-20 lg:w-2/3">
                  <li className="pb-[20px] last:pb-0 mb-[20px] last:mb-0 text-franklin last:border-0 border-b lg:last:mb-[20px] lg:w-[300px] border-b-[#309875]">
                    <div className="flex space-x-2">
                      <div className="w-8 text-[#309875]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-8 w-8"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <a
                          className="text-black hover:text-[#309875]"
                          href="/2022/10/14/23405083/todays-vergecast-rip-office-hello-quest-pro-whats-up-with-the-surface-laptop"
                        >
                          <h3 className="mb-1 text-lg font-medium tracking-1 leading-tight">
                            Today’s Vergecast: RIP Office, hello Quest Pro,
                            what’s up with the Surface Laptop?
                          </h3>
                        </a>
                        <p className="font-semibold text-[11px] tracking-15 leading-tight uppercase">
                          <a href="/authors/david-pierce">
                            <span className="mr-8 text-gray-700">
                              David Pierce
                            </span>
                          </a>
                          <span className="mr-8 text-gray-700">Oct 15</span>
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="pb-[20px] last:pb-0 mb-[20px] last:mb-0 text-franklin last:border-0 border-b lg:last:mb-[20px] lg:w-[300px] border-b-[#309875]">
                    <div className="flex space-x-2">
                      <div className="w-8 text-[#309875]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-8 w-8"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <a
                          className="text-black hover:text-[#309875]"
                          href="/2022/10/11/23399525/todays-vergecast-mixed-reality-virtual-reality-actual-reality"
                        >
                          <h3 className="mb-1 font-semibold text-lg font-medium tracking-1 leading-tight">
                            Today’s Vergecast: mixed reality, virtual reality,
                            actual reality.
                          </h3>
                        </a>
                        <p className="font-semibold text-[11px] tracking-15 leading-140 uppercase">
                          <a href="/authors/david-pierce">
                            <span className="mr-8 text-gray-700">
                              David Pierce
                            </span>
                          </a>
                          <span className="mr-8  text-gray-700">Oct 12</span>
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="pb-[20px] last:pb-0 mb-[20px] last:mb-0 text-franklin last:border-0 border-b lg:last:mb-[20px] lg:w-[300px] border-b-[#309875]">
                    <div className="flex space-x-2">
                      <div className="w-8 text-[#309875]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-8 w-8"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <a
                          className="text-black hover:text-[#309875]"
                          href="/23397187/mark-zuckerberg-quest-pro-metaverse-interview-decoder"
                        >
                          <h3 className="mb-1 font-semibold text-lg font-medium tracking-1 leading-tight">
                            Mark Zuckerberg on the Quest Pro, building the
                            metaverse, and more
                          </h3>
                        </a>
                        <p className=" font-semibold text-[11px] tracking-15 leading-140 uppercase">
                          <a href="/authors/alex-heath">
                            <span className="mr-8 text-gray-700">
                              Alex Heath
                            </span>
                          </a>
                          <span className="mr-8  text-gray-700">Oct 12</span>
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="pb-[20px] last:pb-0 mb-[20px] last:mb-0 text-franklin last:border-0 border-b lg:last:mb-[20px] lg:w-[300px] border-b-[#309875]">
                    <div className="flex space-x-2">
                      <div className="w-8 text-[#309875]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-8 w-8"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <a
                          className="text-black hover:text-[#309875]"
                          href="/2022/10/7/23392733/today-on-the-vergecast-pixel-phones-pixel-watches-and-elon"
                        >
                          <h3 className="mb-1 font-semibold text-lg font-medium tracking-1 leading-tight">
                            Today on The Vergecast: Pixel phones, Pixel watches,
                            and Elon.
                          </h3>
                        </a>
                        <p className=" font-semibold text-[11px] tracking-15 leading-140 uppercase">
                          <a href="/authors/david-pierce">
                            <span className="mr-8 text-gray-700">
                              David Pierce
                            </span>
                          </a>
                          <span className="mr-8  text-gray-700">Oct 7</span>
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="pb-[20px] last:pb-0 mb-[20px] last:mb-0 text-franklin last:border-0 border-b lg:last:mb-[20px] lg:w-[300px] border-b-[#309875]">
                    <div className="flex space-x-2">
                      <div className="w-8 text-[#309875]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-8 w-8"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <a
                          className="text-black hover:text-[#309875]"
                          href="/2022/10/5/23389020/amazon-dave-limp-interview-hp-printers-airpods-pro-test-podcast"
                        >
                          <h3 className="mb-1 font-semibold text-lg font-medium tracking-1 leading-tight">
                            Vergecast: Kindle Scribe feelings, printer problems,
                            and earbuds on a bike
                          </h3>
                        </a>
                        <p className=" font-semibold text-[11px] tracking-15 leading-140 uppercase">
                          <a href="/authors/andrew-marino">
                            <span className="mr-8 text-gray-700">
                              Andrew Marino
                            </span>
                          </a>
                          <span className="mr-8  text-gray-700">Oct 5</span>
                        </p>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PodcastHome;
