import React from "react";

const SosmedNews = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center mx-10 md:mx-auto md:max-w-[560px] lg:max-w-container-lg mt-10 mb-16">
        <div className=" flex flex-row py-6 px-10 border-b last-of-type:border-b-0 border-gray-700 border-solid first-of-type:pt-0 last-of-type:pb-0 max-w-container-sm last-of-type:border-b-0 lg:py-14 lg:px-10 w-full max-w-container-lg md:mx-auto md:max-w-[560px] lg:flex-row lg:pr-0 lg:mx-auto lg:max-w-container-lg">
          <div className="flex relative flex-col pr-3 min-w-[20px]">
            <div className="flex flex-col z-10 space-y-1 justify-center items-center rounded-full bg-[#3cffd0] py-7 px-4 w-4 h-4 text-center">
              <div className="font-bold">E</div>
              <span className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-brand-twitter"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  fill="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"></path>
                </svg>
              </span>
            </div>
            <div className="flex z-10 justify-center p-[5px] mt-2 w-4 h-4 text-center text-black"></div>
          </div>
          <div className="flex flex-col flex-1 min-w-0 ">
            <div className="flex flex-wrap items-center mb-[3px] font-polysans text-[12px] tracking-tight leading-tight text-gray-300 uppercase">
              <a
                className="mr-8 font-bold hover:shadow-underline-inherit"
                href="/authors/emma-roth"
              >
                Emma Roth
              </a>
              <span className="flex items-center font-normal">
                1:55 AM GMT+7
                <button aria-label="Copy link">
                  <svg
                    className="ml-8 transition fill-gray-63 hover:fill-white"
                    width="20"
                    height="20"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Link</title>
                    <path d="M16.9691 32.9499C14.2358 35.6832 9.78321 35.6832 7.04996 32.9499C4.31671 30.2166 4.31665 25.764 7.04996 23.0307L12.5606 17.52C15.294 14.7867 19.7465 14.7867 22.4798 17.52C22.704 17.7383 22.8315 18.037 22.8337 18.3499C22.8359 18.6628 22.7125 18.9634 22.4912 19.1846C22.2702 19.4059 21.9693 19.5293 21.6568 19.5271C21.3439 19.5249 21.0449 19.3975 20.8266 19.1732C18.9805 17.3271 16.0599 17.3271 14.2137 19.1732L8.70306 24.6839C6.85694 26.53 6.85694 29.4507 8.70306 31.2968C10.5492 33.1429 13.4698 33.1426 15.3159 31.2968L20.551 26.0614V26.0617C20.7693 25.8375 21.0683 25.71 21.3811 25.7078C21.694 25.7056 21.9946 25.829 22.2159 26.0503C22.4368 26.2716 22.5602 26.5722 22.5581 26.885C22.5559 27.1979 22.4284 27.4966 22.2042 27.7149L16.9691 32.9499ZM27.4394 22.4796C24.706 25.2129 20.2535 25.2129 17.5202 22.4796V22.4799C17.296 22.2616 17.1685 21.9629 17.1663 21.65C17.1644 21.3372 17.2875 21.0366 17.5088 20.8153C17.7301 20.5941 18.0307 20.4707 18.3435 20.4728C18.6564 20.475 18.9551 20.6025 19.1734 20.8267C21.0195 22.6728 23.9401 22.6728 25.7863 20.8267L31.2969 15.316C33.1431 13.4699 33.1431 10.5493 31.2969 8.70316C29.4508 6.85704 26.5302 6.85704 24.6841 8.70316L19.449 13.9382C19.2307 14.1625 18.9317 14.2902 18.6189 14.2924C18.306 14.2946 18.0054 14.1712 17.7841 13.9499C17.5629 13.7286 17.4395 13.428 17.4417 13.1149C17.4438 12.802 17.5713 12.503 17.7958 12.285L23.0309 7.04999C25.7642 4.31667 30.2168 4.31667 32.95 7.04999C35.6833 9.7833 35.6834 14.2359 32.95 16.9691L27.4394 22.4798L27.4394 22.4796Z"></path>
                  </svg>
                </button>
              </span>
            </div>
            <div className="text-[16px] leading-normal text-white">
              <div className="inline pr-4 font-bold">
                Good news for Analogue Pocket preorders.
              </div>
              <p className="inline leading-[21px]">
                If you preordered{" "}
                <a href="/22831589/analogue-pocket-review">
                  an Analogue Pocket
                </a>
                , you’ll be happy to hear that{" "}
                <a href="https://www.analogue.co/announcements/pocket-preorder-shipping-analogue-pocket-adapters-preorder-super-nt-mega-sg-final">
                  95 percent of orders
                </a>{" "}
                (in Groups B and C) will be shipped by the end of 2022, while
                the “small amount of remaining orders” will get sent out in
                2023.{" "}
              </p>
              <p className="inline-block mt-3 font-fkroman leading-[21px]">
                Analogue’s also making its $99 Pocket Cartridge Adapters
                available for preorder on October 21st, but they aren’t set to
                start shipping until next year. The adapters will let you play
                games from the TurboGrafx-16, Atari Lynx, and Neo Geo Pocket
                (and Pocket Color) on your Pocket handheld.
              </p>
            </div>
            <div className="pt-2">
              <div className="duet--media--embed quickpost mb-0 w-full md:max-w-[460px] overflow-x-hidden max-w-[calc(100vw-56px)] md:max-w-full">
                <div>
                  <div className="twitter-tweet twitter-tweet-rendered flex max-w-[550px] w-full my-[10px]">
                    <iframe
                      id="twitter-widget-1"
                      scrolling="no"
                      frameborder="0"
                      allowtransparency="true"
                      allowfullscreen="true"
                      className="static w-[460px] h-[361px] block"
                      title="Twitter Tweet"
                      src="https://platform.twitter.com/embed/Tweet.html?dnt=false&amp;embedId=twitter-widget-1&amp;features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOlsibGlua3RyLmVlIiwidHIuZWUiLCJ0ZXJyYS5jb20uYnIiLCJ3d3cubGlua3RyLmVlIiwid3d3LnRyLmVlIiwid3d3LnRlcnJhLmNvbS5iciJdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2hvcml6b25fdGltZWxpbmVfMTIwMzQiOnsiYnVja2V0IjoidHJlYXRtZW50IiwidmVyc2lvbiI6bnVsbH0sInRmd190d2VldF9lZGl0X2JhY2tlbmQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3JlZnNyY19zZXNzaW9uIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19jaGluX3BpbGxzXzE0NzQxIjp7ImJ1Y2tldCI6ImNvbG9yX2ljb25zIiwidmVyc2lvbiI6bnVsbH0sInRmd190d2VldF9yZXN1bHRfbWlncmF0aW9uXzEzOTc5Ijp7ImJ1Y2tldCI6InR3ZWV0X3Jlc3VsdCIsInZlcnNpb24iOm51bGx9LCJ0Zndfc2Vuc2l0aXZlX21lZGlhX2ludGVyc3RpdGlhbF8xMzk2MyI6eyJidWNrZXQiOiJpbnRlcnN0aXRpYWwiLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2V4cGVyaW1lbnRzX2Nvb2tpZV9leHBpcmF0aW9uIjp7ImJ1Y2tldCI6MTIwOTYwMCwidmVyc2lvbiI6bnVsbH0sInRmd19kdXBsaWNhdGVfc2NyaWJlc190b19zZXR0aW5ncyI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdmlkZW9faGxzX2R5bmFtaWNfbWFuaWZlc3RzXzE1MDgyIjp7ImJ1Y2tldCI6InRydWVfYml0cmF0ZSIsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9mcm9udGVuZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9fQ%3D%3D&amp;frame=false&amp;hideCard=false&amp;hideThread=false&amp;id=1581661660728950784&amp;lang=en&amp;origin=https%3A%2F%2Fwww.theverge.com%2F&amp;sessionId=d3503cfd9a15d5b9b18989e6e13326ec38fcacbc&amp;siteScreenName=verge&amp;theme=dark&amp;widgetsVersion=1c23387b1f70c%3A1664388199485&amp;width=550px"
                      data-tweet-id="1581661660728950784"
                    ></iframe>
                  </div>
                  <script
                    async=""
                    src="https://platform.twitter.com/widgets.js"
                    charset="utf-8"
                  ></script>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-row py-6 px-10 border-b last-of-type:border-b-0 border-gray-700 border-solid first-of-type:pt-0 last-of-type:pb-0 max-w-container-sm last-of-type:border-b-0 lg:py-14 lg:px-10 w-full max-w-container-lg md:mx-auto md:max-w-[560px] lg:flex-row lg:pr-0 lg:mx-auto lg:max-w-container-lg">
          <div className="flex relative flex-col pr-3 min-w-[20px]">
            <div className="flex flex-col z-10 space-y-1 justify-center items-center rounded-full bg-[#3cffd0] py-7 px-4 w-4 h-4 text-center">
              <div className="font-bold">E</div>
              <span className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-brand-instagram"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <rect x="4" y="4" width="16" height="16" rx="4"></rect>
                  <circle cx="12" cy="12" r="3"></circle>
                  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501"></line>
                </svg>
              </span>
            </div>
            <div className="flex z-10 justify-center p-[5px] mt-2 w-4 h-4 text-center text-black"></div>
          </div>
          <div className="flex flex-col flex-1 min-w-0 ">
            <div className="flex flex-wrap items-center mb-[3px] font-polysans text-[12px] tracking-tight leading-tight text-gray-300 uppercase">
              <a
                className="mr-8 font-bold hover:shadow-underline-inherit"
                href="/authors/emma-roth"
              >
                Emma Roth
              </a>
              <span className="flex items-center font-normal">
                1:55 AM GMT+7
                <button aria-label="Copy link">
                  <svg
                    className="ml-8 transition fill-gray-63 hover:fill-white"
                    width="20"
                    height="20"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Link</title>
                    <path d="M16.9691 32.9499C14.2358 35.6832 9.78321 35.6832 7.04996 32.9499C4.31671 30.2166 4.31665 25.764 7.04996 23.0307L12.5606 17.52C15.294 14.7867 19.7465 14.7867 22.4798 17.52C22.704 17.7383 22.8315 18.037 22.8337 18.3499C22.8359 18.6628 22.7125 18.9634 22.4912 19.1846C22.2702 19.4059 21.9693 19.5293 21.6568 19.5271C21.3439 19.5249 21.0449 19.3975 20.8266 19.1732C18.9805 17.3271 16.0599 17.3271 14.2137 19.1732L8.70306 24.6839C6.85694 26.53 6.85694 29.4507 8.70306 31.2968C10.5492 33.1429 13.4698 33.1426 15.3159 31.2968L20.551 26.0614V26.0617C20.7693 25.8375 21.0683 25.71 21.3811 25.7078C21.694 25.7056 21.9946 25.829 22.2159 26.0503C22.4368 26.2716 22.5602 26.5722 22.5581 26.885C22.5559 27.1979 22.4284 27.4966 22.2042 27.7149L16.9691 32.9499ZM27.4394 22.4796C24.706 25.2129 20.2535 25.2129 17.5202 22.4796V22.4799C17.296 22.2616 17.1685 21.9629 17.1663 21.65C17.1644 21.3372 17.2875 21.0366 17.5088 20.8153C17.7301 20.5941 18.0307 20.4707 18.3435 20.4728C18.6564 20.475 18.9551 20.6025 19.1734 20.8267C21.0195 22.6728 23.9401 22.6728 25.7863 20.8267L31.2969 15.316C33.1431 13.4699 33.1431 10.5493 31.2969 8.70316C29.4508 6.85704 26.5302 6.85704 24.6841 8.70316L19.449 13.9382C19.2307 14.1625 18.9317 14.2902 18.6189 14.2924C18.306 14.2946 18.0054 14.1712 17.7841 13.9499C17.5629 13.7286 17.4395 13.428 17.4417 13.1149C17.4438 12.802 17.5713 12.503 17.7958 12.285L23.0309 7.04999C25.7642 4.31667 30.2168 4.31667 32.95 7.04999C35.6833 9.7833 35.6834 14.2359 32.95 16.9691L27.4394 22.4798L27.4394 22.4796Z"></path>
                  </svg>
                </button>
              </span>
            </div>
            <div className="text-[16px] leading-normal text-white">
              <div className="inline pr-4 font-bold">
                “A thumbprint in our cosmos.”
              </div>

              <p className="inline-block font-fkroman leading-[21px]">
                The latest picture captured by the James Webb Telescope shows 17
                dust rings surrounding a pair of stars, called Wolf-Rayet 140.
                This fingerprint-like phenomenon occurs every eight years when
                the two stars get too close to each other.
              </p>
            </div>
            <div className="pt-2">
              <div className="mb-0 w-full md:max-w-[460px] overflow-x-hidden max-w-[calc(100vw-56px)] md:max-w-full">
                <div>
                  <div className="twitter-tweet twitter-tweet-rendered flex max-w-[550px] w-full my-[10px]">
                    <iframe
                      class="instagram-media instagram-media-rendered"
                      id="instagram-embed-0"
                      src="https://www.instagram.com/p/CjxGJJLOpCq/embed/captioned/?cr=1&amp;v=14&amp;wp=458&amp;rd=https%3A%2F%2Fwww.theverge.com&amp;rp=%2F#%7B%22ci%22%3A0%2C%22os%22%3A5418111.799999982%7D"
                      allowtransparency="true"
                      allowfullscreen="true"
                      frameborder="0"
                      height="895"
                      data-instgrm-payload-id="instagram-media-payload-0"
                      scrolling="no"
                      style={{
                        background: "white",
                        maxWidth: "658px",
                        width: "calc(100% - 2px)",
                        borderRadius: "3px",
                        border: "1px solid rgb(219, 219, 219)",
                        boxShadow: "none",
                        display: "block",
                        margin: "0px 0px 12px",
                        minWidth: "326px",
                        padding: "0px",
                      }}
                    ></iframe>
                  </div>
                  <script
                    async=""
                    src="https://platform.twitter.com/widgets.js"
                    charset="utf-8"
                  ></script>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SosmedNews;
