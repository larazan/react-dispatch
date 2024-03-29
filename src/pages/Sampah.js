import React from 'react'

const Sampah = () => {
  return (
    <body class="flex flex-col w-full h-full font-sans">
    <div class="relative flex justify-center">
      <div
        class="hidden bg-black md:w-1/5 md:block px-6 py-4 h-full fixed left-0"
      >
        <div class="text-white my-6 cursor-pointer">
          <svg
            class="h-10 fill-current"
            viewBox="0 0 1134 340"
            class="spotify-logo--text"
          >
            <title>Spotify</title>
            <path
              fill="currentColor"
              d="M8 171c0 92 76 168 168 168s168-76 168-168S268 4 176 4 8 79 8 171zm230 78c-39-24-89-30-147-17-14 2-16-18-4-20 64-15 118-8 162 19 11 7 0 24-11 18zm17-45c-45-28-114-36-167-20-17 5-23-21-7-25 61-18 136-9 188 23 14 9 0 31-14 22zM80 133c-17 6-28-23-9-30 59-18 159-15 221 22 17 9 1 37-17 27-54-32-144-35-195-19zm379 91c-17 0-33-6-47-20-1 0-1 1-1 1l-16 19c-1 1-1 2 0 3 18 16 40 24 64 24 34 0 55-19 55-47 0-24-15-37-50-46-29-7-34-12-34-22s10-16 23-16 25 5 39 15c0 0 1 1 2 1s1-1 1-1l14-20c1-1 1-1 0-2-16-13-35-20-56-20-31 0-53 19-53 46 0 29 20 38 52 46 28 6 32 12 32 22 0 11-10 17-25 17zm95-77v-13c0-1-1-2-2-2h-26c-1 0-2 1-2 2v147c0 1 1 2 2 2h26c1 0 2-1 2-2v-46c10 11 21 16 36 16 27 0 54-21 54-61s-27-60-54-60c-15 0-26 5-36 17zm30 78c-18 0-31-15-31-35s13-34 31-34 30 14 30 34-12 35-30 35zm68-34c0 34 27 60 62 60s62-27 62-61-26-60-61-60-63 27-63 61zm30-1c0-20 13-34 32-34s33 15 33 35-13 34-32 34-33-15-33-35zm140-58v-29c0-1 0-2-1-2h-26c-1 0-2 1-2 2v29h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v58c0 23 11 35 34 35 9 0 18-2 25-6 1 0 1-1 1-2v-21c0-1 0-2-1-2h-2c-5 3-11 4-16 4-8 0-12-4-12-12v-54h30c1 0 2-1 2-2v-22c0-1-1-2-2-2h-30zm129-3c0-11 4-15 13-15 5 0 10 0 15 2h1s1-1 1-2V93c0-1 0-2-1-2-5-2-12-3-22-3-24 0-36 14-36 39v5h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v89c0 1 1 2 2 2h26c1 0 1-1 1-2v-89h25l37 89c-4 9-8 11-14 11-5 0-10-1-15-4h-1l-1 1-9 19c0 1 0 3 1 3 9 5 17 7 27 7 19 0 30-9 39-33l45-116v-2c0-1-1-1-2-1h-27c-1 0-1 1-1 2l-28 78-30-78c0-1-1-2-2-2h-44v-3zm-83 3c-1 0-2 1-2 2v113c0 1 1 2 2 2h26c1 0 1-1 1-2V134c0-1 0-2-1-2h-26zm-6-33c0 10 9 19 19 19s18-9 18-19-8-18-18-18-19 8-19 18zm245 69c10 0 19-8 19-18s-9-18-19-18-18 8-18 18 8 18 18 18zm0-34c9 0 17 7 17 16s-8 16-17 16-16-7-16-16 7-16 16-16zm4 18c3-1 5-3 5-6 0-4-4-6-8-6h-8v19h4v-6h4l4 6h5zm-3-9c2 0 4 1 4 3s-2 3-4 3h-4v-6h4z"
            ></path>
          </svg>
        </div>
        <button class="text-gray-200 hover:text-white flex items-center mt-4">
          <svg
            class="mr-4"
            viewBox="0 0 512 512"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 256.274 60.84 L 84.324 166.237 L 84.324 443.063 L 193.27 443.063 L 193.27 293.73 L 320.228 293.73 L 320.228 443.063 L 428.222 443.063 L 428.222 165.476 L 256.274 60.84 Z M 256.274 35.95 L 448.452 149.145 L 448.452 464.395 L 300 464.395 L 300 315.062 L 213.499 315.062 L 213.499 464.395 L 64.095 464.395 L 64.095 150.161 L 256.274 35.95 Z"
              fill="currentColor"
            ></path>
          </svg>
          <a class="text-gray-300 text-sm font-bold hover:text-white capitalize"
            >Home</a
          >
        </button>
        <button class="text-gray-200 hover:text-white flex items-center mt-4">
          <svg
            class="mr-4"
            viewBox="0 0 512 512"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z"
              fill="currentColor"
              fill-rule="evenodd"
            ></path>
          </svg>
          <a class="text-gray-300 text-sm font-bold hover:text-white capitalize"
            >Search</a
          >
        </button>
        <button class="text-gray-200 hover:text-white flex items-center mt-4">
          <svg
            class="mr-4"
            viewBox="0 0 512 512"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M291.301 81.778l166.349 373.587-19.301 8.635-166.349-373.587zM64 463.746v-384h21.334v384h-21.334zM192 463.746v-384h21.334v384h-21.334z"
              fill="currentColor"
            ></path>
          </svg>
          <a class="text-gray-300 text-sm font-bold hover:text-white capitalize"
            >Your Library</a
          >
        </button>
        <div class="mt-10 mb-3 border-b border-gray-700">
          <button class="flex items-center text-black">
            <svg
              class="fill-current bg-gray-200 hover:bg-white mr-4 p-1"
              role="img"
              height="24"
              width="24"
              viewBox="0 0 16 16"
              class="Svg-ulyrgf-0 hJgLcF"
            >
              <path d="M14 7H9V2H7v5H2v2h5v5h2V9h5z"></path>
              <path fill="none" d="M0 0h16v16H0z"></path>
            </svg>
            <a
              class="text-gray-300 text-sm font-bold hover:text-white capitalize"
              >Create Playlist</a
            >
          </button>
          <button
            class="flex items-center text-green-500 my-3 hover:text-white"
          >
            <svg
              class="fill-current mr-4"
              role="img"
              height="24"
              width="24"
              viewBox="0 0 16 16"
              class="Svg-ulyrgf-0 hJgLcF"
            >
              <path fill="none" d="M0 0h16v16H0z"></path>
              <path
                d="M13.797 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253c-.77.77-1.194 1.794-1.194 2.883s.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195a4.052 4.052 0 001.195-2.883 4.057 4.057 0 00-1.196-2.883z"
              ></path>
            </svg>
            <a
              class="text-gray-300 text-sm font-bold hover:text-white capitalize"
              >Liked Songs</a
            >
          </button>
        </div>
        <div class="overflow-y-auto h-40 mb-2">
          <ul
            id="sidebar-playlist"
            class="text-gray-400 font-semi-bold text-sm capitalize"
          ></ul>
        </div>
        <div class="flex items-center text-gray-300 my-6 hover:text-white">
          <svg
            class="fill-current mr-1"
            role="img"
            height="20"
            width="20"
            viewBox="0 0 24 24"
            class="Svg-ulyrgf-0 hJgLcF"
          >
            <path
              d="M11.5 0C5.149 0 0 5.148 0 11.5 0 17.851 5.149 23 11.5 23S23 17.851 23 11.5C23 5.148 17.851 0 11.5 0zm0 22C5.71 22 1 17.29 1 11.5S5.71 1 11.5 1 22 5.71 22 11.5 17.29 22 11.5 22zm.499-6.842V5h-1v10.149l-3.418-3.975-.758.652 4.678 5.44 4.694-5.439-.757-.653-3.439 3.984z"
            ></path>
          </svg>
          <a
            class="text-gray-300 text-sm font-semibold hover:text-white capitalize cursor-default"
            >Install app</a
          >
        </div>
      </div>
      <div
        class="w-full md:w-4/5 md:absolute md:right-0"
        style="background-color: #d02838"
      >
        <div
          class="p-6"
          style="background: linear-gradient(transparent, #00000080)"
        >
          <div class="flex justify-between items-center md:hidden">
            <button class="text-white">
              <svg
                class="fill-current"
                role="img"
                focusable="false"
                height="24"
                width="24"
                viewBox="0 0 24 24"
                class="Svg-sc-1usfroi-0 jUuLJy _6fe5d5efc9b4a07d5c424071ac7cdacb-scss"
              >
                <polyline
                  points="16 4 7 12 16 20"
                  fill="none"
                  stroke="#fff"
                ></polyline>
              </svg>
            </button>
            <button class="text-gray-300">
              <svg
                class="bg-black border rounded-full p-1"
                width="32"
                height="32"
                fill="currentColor"
                viewBox="0 0 18 20"
                xmlns="http://www.w3.org/2000/svg"
                data-testid="user-icon"
              >
                <path
                  d="M15.216 13.717L12 11.869C11.823 11.768 11.772 11.607 11.757 11.521C11.742 11.435 11.737 11.267 11.869 11.111L13.18 9.57401C14.031 8.58001 14.5 7.31101 14.5 6.00001V5.50001C14.5 3.98501 13.866 2.52301 12.761 1.48601C11.64 0.435011 10.173 -0.0879888 8.636 0.0110112C5.756 0.198011 3.501 2.68401 3.501 5.67101V6.00001C3.501 7.31101 3.97 8.58001 4.82 9.57401L6.131 11.111C6.264 11.266 6.258 11.434 6.243 11.521C6.228 11.607 6.177 11.768 5.999 11.869L2.786 13.716C1.067 14.692 0 16.526 0 18.501V20H1V18.501C1 16.885 1.874 15.385 3.283 14.584L6.498 12.736C6.886 12.513 7.152 12.132 7.228 11.691C7.304 11.251 7.182 10.802 6.891 10.462L5.579 8.92501C4.883 8.11101 4.499 7.07201 4.499 6.00001V5.67101C4.499 3.21001 6.344 1.16201 8.699 1.00901C9.961 0.928011 11.159 1.35601 12.076 2.21501C12.994 3.07601 13.5 4.24301 13.5 5.50001V6.00001C13.5 7.07201 13.117 8.11101 12.42 8.92501L11.109 10.462C10.819 10.803 10.696 11.251 10.772 11.691C10.849 12.132 11.115 12.513 11.503 12.736L14.721 14.585C16.127 15.384 17.001 16.884 17.001 18.501V20H18.001V18.501C18 16.526 16.932 14.692 15.216 13.717Z"
                ></path>
              </svg>
            </button>
          </div>
          <div class="hidden flex justify-between md:flex">
            <div class="flex">
              <svg
                class="bg-black rounded-full bg-opacity-60 p-1"
                role="img"
                focusable="false"
                height="32"
                width="32"
                viewBox="0 0 24 24"
                class="Svg-sc-1usfroi-0 jUuLJy _6fe5d5efc9b4a07d5c424071ac7cdacb-scss"
              >
                <polyline
                  points="16 4 7 12 16 20"
                  fill="none"
                  stroke="#fff"
                ></polyline>
              </svg>
              <svg
                class="bg-black rounded-full bg-opacity-80 p-1 ml-4"
                role="img"
                focusable="false"
                height="32"
                width="32"
                viewBox="0 0 24 24"
                class="Svg-sc-1usfroi-0 jUuLJy _6fe5d5efc9b4a07d5c424071ac7cdacb-scss"
              >
                <polyline
                  points="8 4 17 12 8 20"
                  fill="none"
                  stroke="#fff"
                ></polyline>
              </svg>
            </div>
            <div class="flex items-center">
              <button
                type="button"
                class="text-white uppercase text-xs font-extrabold text-opacity-90 tracking-widest bg-black bg-opacity-70 border border-gray-300 rounded-full px-8 py-2 mr-6 hover:bg-black"
              >
                Upgrade
              </button>
              <button
                type="button"
                class="text-white capitalize text-sm font-bold bg-black rounded-full px-1 py-1 flex items-center bg-opacity-80 hover:bg-gray-800"
              >
                <svg
                  class="bg-gray-800 rounded-full p-1 border border-gray-700"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                  xmlns="http://www.w3.org/2000/svg"
                  data-testid="user-icon"
                >
                  <path
                    d="M15.216 13.717L12 11.869C11.823 11.768 11.772 11.607 11.757 11.521C11.742 11.435 11.737 11.267 11.869 11.111L13.18 9.57401C14.031 8.58001 14.5 7.31101 14.5 6.00001V5.50001C14.5 3.98501 13.866 2.52301 12.761 1.48601C11.64 0.435011 10.173 -0.0879888 8.636 0.0110112C5.756 0.198011 3.501 2.68401 3.501 5.67101V6.00001C3.501 7.31101 3.97 8.58001 4.82 9.57401L6.131 11.111C6.264 11.266 6.258 11.434 6.243 11.521C6.228 11.607 6.177 11.768 5.999 11.869L2.786 13.716C1.067 14.692 0 16.526 0 18.501V20H1V18.501C1 16.885 1.874 15.385 3.283 14.584L6.498 12.736C6.886 12.513 7.152 12.132 7.228 11.691C7.304 11.251 7.182 10.802 6.891 10.462L5.579 8.92501C4.883 8.11101 4.499 7.07201 4.499 6.00001V5.67101C4.499 3.21001 6.344 1.16201 8.699 1.00901C9.961 0.928011 11.159 1.35601 12.076 2.21501C12.994 3.07601 13.5 4.24301 13.5 5.50001V6.00001C13.5 7.07201 13.117 8.11101 12.42 8.92501L11.109 10.462C10.819 10.803 10.696 11.251 10.772 11.691C10.849 12.132 11.115 12.513 11.503 12.736L14.721 14.585C16.127 15.384 17.001 16.884 17.001 18.501V20H18.001V18.501C18 16.526 16.932 14.692 15.216 13.717Z"
                  ></path>
                </svg>
                <span class="px-3">Jojo</span>
                <svg
                  class="fill-current"
                  role="img"
                  height="16"
                  width="16"
                  class="Svg-ulyrgf-0 hJgLcF f6406a56d35aea2a3598f6f270ef156c-scss"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 6l5 5.794L13 6z"></path>
                </svg>
              </button>
            </div>
          </div>
          <div class="flex flex-col justify-center items-center md:hidden">
            <img
              src="images/AW.jpg"
              alt="alan walker artist image"
              class="w-40 h-40"
              style="box-shadow: 0 4px 60px #00000080"
            />
            <h1 class="text-white capitalize font-semibold text-2xl mt-2">
              This is Alan Walker
            </h1>
            <p class="text-xs uppercase text-gray-100 mt-1">1,308,405 likes</p>
          </div>
          <div class="hidden mt-8 flex items-center md:flex">
            <img
              id="playlist-thumbnail"
              src="images/AW.jpg"
              alt="alan walker artist"
              class="w-56 h-56 mr-6"
              style="box-shadow: 0 4px 60px #00000080"
            />
            <div class="mt-16">
              <h2
                class="text-gray-50 uppercase text-xs font-bold tracking-tighter mt-1"
              >
                Playlist
              </h2>
              <span
                class="text-white text-6xl capitalize font-extrabold tracking-tighter"
                ><h1 id="playlist-title">This is Alan Walker</h1></span
              >
              <p
                id="playlist-description"
                class="text-white mt-6 text-sm font-normal leading-none opacity-70"
              >
                The essential Alan Walker tracks and remixes.
              </p>
              <div class="flex items-center mt-2">
                <a
                  class="text-white font-bold text-sm hover:text-underline cursor-pointer"
                  >Spotify</a
                >
                <div
                  class="font-extrabold text-md text-white opacity-70 mx-1 mb-1 pb-1"
                >
                  .
                </div>
                <p class="text-white opacity-70 font-normal text-sm">
                  1,308,405 likes
                </p>
                <div
                  class="font-extrabold text-md text-white opacity-70 mx-1 mb-1 pb-1"
                >
                  .
                </div>
                <p class="text-white opacity-70 font-normal text-sm mr-1">
                  50 songs,
                </p>
                <p class="text-white opacity-70 font-normal text-sm">
                  2hr 36 min
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full" style="background-color: #121212">
          <div
            class="w-full p-4"
            style="
              background-color: #d22839;
              background-image: linear-gradient(#00000099, #121212);
              z-index: -1;
            "
          >
            <div class="flex justify-center items-center m-4 md:hidden">
              <button
                class="bg-green-500 text-white uppercase text-xs rounded-full font-semibold tracking-widest px-8 py-3"
              >
                Shuffle Play
              </button>
            </div>
            <div
              class="hidden flex items-center text-white w-1/2 mx-4 my-6 md:flex"
              style="background-color: transparent"
            >
              <svg
                class="bg-green-500 rounded-full w-12 h-12 p-3 text-white"
                height="28"
                role="img"
                width="28"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <polygon
                  points="21.57 12 5.98 3 5.98 21 21.57 12"
                  fill="currentColor"
                ></polygon>
              </svg>
              <div class="text-green-500">
                <svg
                  class="mx-4 my-2 fill-current"
                  role="img"
                  height="32"
                  width="32"
                  viewBox="0 0 32 32"
                  class="Svg-ulyrgf-0 hJgLcF"
                >
                  <path
                    d="M27.319 5.927a7.445 7.445 0 00-10.02-.462s-.545.469-1.299.469c-.775 0-1.299-.469-1.299-.469a7.445 7.445 0 00-10.02 10.993l9.266 10.848a2.7 2.7 0 004.106 0l9.266-10.848a7.447 7.447 0 000-10.531z"
                  ></path>
                </svg>
              </div>
              <div class="text-gray-300">
                <svg
                  class="fill-current"
                  role="img"
                  height="32"
                  width="32"
                  viewBox="0 0 32 32"
                  class="Svg-ulyrgf-0 hJgLcF"
                >
                  <path
                    d="M5.998 13.999A2 2 0 105.999 18 2 2 0 005.998 14zm10.001 0A2 2 0 1016 18 2 2 0 0016 14zm10.001 0A2 2 0 1026.001 18 2 2 0 0026 14z"
                  ></path>
                </svg>
              </div>
            </div>
            <div
              class="my-10 mx-2 h-72 overflow-y-auto md:h-full md:overflow-hidden"
            >
              <table class="w-full cursor-default">
                <thead>
                  <tr
                    class="flex justify-around items-center text-gray-400 border-b border-gray-400 border-opacity-30 uppercase h-8"
                  >
                    <th class="text-md">
                      #<span class="text-xs ml-2">Title</span>
                    </th>
                    <th class="text-xs">Album</th>
                    <th class="text-xs">Date Added</th>
                    <th class="">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M7.999 3H6.999V7V8H7.999H9.999V7H7.999V3ZM7.5 0C3.358 0 0 3.358 0 7.5C0 11.642 3.358 15 7.5 15C11.642 15 15 11.642 15 7.5C15 3.358 11.642 0 7.5 0ZM7.5 14C3.916 14 1 11.084 1 7.5C1 3.916 3.916 1 7.5 1C11.084 1 14 3.916 14 7.5C14 11.084 11.084 14 7.5 14Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="flex justify-around items-center text-gray-400 m-2 font-mono hover:bg-gray-200 hover:bg-opacity-10 rounded-md py-2"
                  >
                    <td class="flex justify-center items-center">
                      <p class="mr-2">1</p>
                      <img
                        src="images/dead_girl.jpg"
                        alt="dead girl song poster"
                        height="50px"
                        width="50px"
                      />
                      <div class="ml-3">
                        <p class="text-white font-semi-bold">Dead Girl!</p>
                        <a
                          class="text-xs text-gray-400 hover:text-white hover:cursor-pointer"
                          ><span>Alan Walker</span></a
                        >
                      </div>
                    </td>
                    <td class="text-sm">Dead Girl!</td>
                    <td class="text-sm">5 days ago</td>
                    <td class="text-sm">3:14</td>
                  </tr>
                  <tr
                    class="flex justify-around items-center text-gray-400 m-2 font-mono hover:bg-gray-200 hover:bg-opacity-10 rounded-md py-2"
                  >
                    <td class="flex justify-center items-center">
                      <p class="mr-2">2</p>
                      <img
                        src="images/spectre.jpg"
                        alt="spectre song poster"
                        height="50px"
                        width="50px"
                      />
                      <div class="ml-3">
                        <p class="text-white font-semi-bold">The Spectre</p>
                        <a
                          class="text-xs text-gray-400 hover:text-white hover:cursor-pointer"
                          ><span>Alan Walker</span></a
                        >
                      </div>
                    </td>
                    <td class="text-sm">The Spectre</td>
                    <td class="text-sm">5 days ago</td>
                    <td class="text-sm">3:13</td>
                  </tr>
                  <tr
                    class="flex justify-around items-center text-gray-400 m-2 font-mono hover:bg-gray-200 hover:bg-opacity-10 rounded-md py-2"
                  >
                    <td class="flex justify-center items-center">
                      <p class="mr-2">3</p>
                      <img
                        src="images/faded.jpg"
                        alt="faded song poster"
                        height="50px"
                        width="50px"
                      />
                      <div class="ml-3">
                        <p class="text-white font-semi-bold">Faded</p>
                        <a
                          class="text-xs text-gray-400 hover:text-white hover:cursor-pointer"
                          ><span>Alan Walker</span></a
                        >
                      </div>
                    </td>
                    <td class="text-sm">Different World</td>
                    <td class="text-sm">5 days ago</td>
                    <td class="text-sm">3:32</td>
                  </tr>
                  <tr
                    class="flex justify-around items-center text-gray-400 m-2 font-mono hover:bg-gray-200 hover:bg-opacity-10 rounded-md py-2"
                  >
                    <td class="flex justify-center items-center">
                      <p class="mr-2">4</p>
                      <img
                        src="images/play.jpg"
                        alt="play song poster"
                        height="50px"
                        width="50px"
                      />
                      <div class="ml-3">
                        <p class="text-white font-semi-bold">Play</p>
                        <a
                          class="text-xs text-gray-400 hover:text-white hover:cursor-pointer"
                          ><span>Alan Walker</span></a
                        >
                      </div>
                    </td>
                    <td class="text-sm">Play (feat. K-391)</td>
                    <td class="text-sm">5 days ago</td>
                    <td class="text-sm">2:47</td>
                  </tr>
                  <tr
                    class="flex justify-around items-center text-gray-400 m-2 font-mono hover:bg-gray-200 hover:bg-opacity-10 rounded-md py-2"
                  >
                    <td class="flex justify-center items-center">
                      <p class="mr-2">5</p>
                      <img
                        src="images/sorry.jpg"
                        alt="sorry song poster"
                        height="50px"
                        width="50px"
                      />
                      <div class="ml-3">
                        <p class="text-white font-semi-bold">Sorry</p>
                        <a
                          class="text-xs text-gray-400 hover:text-white hover:cursor-pointer"
                          ><span>Alan Walker</span></a
                        >
                      </div>
                    </td>
                    <td class="text-sm">Sorry (feat. ISÁK)</td>
                    <td class="text-sm">5 days ago</td>
                    <td class="text-sm">2:45</td>
                  </tr>
                  <tr
                    class="flex justify-around items-center text-gray-400 m-2 font-mono hover:bg-gray-200 hover:bg-opacity-10 rounded-md py-2"
                  >
                    <td class="flex justify-center items-center">
                      <p class="mr-2">6</p>
                      <img
                        src="images/end_of_time.jpg"
                        alt="end of time song poster"
                        height="50px"
                        width="50px"
                      />
                      <div class="ml-3">
                        <p class="text-white font-semi-bold">End of Time</p>
                        <a
                          class="text-xs text-gray-400 hover:text-white hover:cursor-pointer"
                          ><span>Alan Walker</span></a
                        >
                      </div>
                    </td>
                    <td class="text-sm">End of Time</td>
                    <td class="text-sm">5 days ago</td>
                    <td class="text-sm">3:07</td>
                  </tr>
                  <tr
                    class="flex justify-around items-center text-gray-400 m-2 font-mono hover:bg-gray-200 hover:bg-opacity-10 rounded-md py-2"
                  >
                    <td class="flex justify-center items-center">
                      <p class="mr-2">7</p>
                      <img
                        src="images/fake-a-smile.jpg"
                        alt="fake a smile song poster"
                        height="50px"
                        width="50px"
                      />
                      <div class="ml-3">
                        <p class="text-white font-semi-bold">Fake A Smile</p>
                        <a
                          class="text-xs text-gray-400 hover:text-white hover:cursor-pointer"
                          ><span>Alan Walker</span></a
                        >
                      </div>
                    </td>
                    <td class="text-sm">Fake A Smile</td>
                    <td class="text-sm">5 days ago</td>
                    <td class="text-sm">2:48</td>
                  </tr>
                  <tr
                    class="flex justify-around items-center text-gray-400 m-2 font-mono hover:bg-gray-200 hover:bg-opacity-10 rounded-md py-2"
                  >
                    <td class="flex justify-center items-center">
                      <p class="mr-2">8</p>
                      <img
                        src="images/OMW.jpg"
                        alt="on my way song poster"
                        height="50px"
                        width="50px"
                      />
                      <div class="ml-3">
                        <p class="text-white font-semi-bold">On My Way</p>
                        <a
                          class="text-xs text-gray-400 hover:text-white hover:cursor-pointer"
                          ><span>Alan Walker</span></a
                        >
                      </div>
                    </td>
                    <td class="text-sm">On My Way</td>
                    <td class="text-sm">5 days ago</td>
                    <td class="text-sm">3:13</td>
                  </tr>
                  <tr
                    class="flex justify-around items-center text-gray-400 m-2 font-mono hover:bg-gray-200 hover:bg-opacity-10 rounded-md py-2"
                  >
                    <td class="flex justify-center items-center">
                      <p class="mr-2">9</p>
                      <img
                        src="images/alone_pt_II.jpg"
                        alt="alone part two song poster"
                        height="50px"
                        width="50px"
                      />
                      <div class="ml-3">
                        <p class="text-white font-semi-bold">Alone, Pt.II</p>
                        <a
                          class="text-xs text-gray-400 hover:text-white hover:cursor-pointer"
                          ><span>Alan Walker</span></a
                        >
                      </div>
                    </td>
                    <td class="text-sm">Alone, Pt.II</td>
                    <td class="text-sm">5 days ago</td>
                    <td class="text-sm">2:59</td>
                  </tr>
                  <tr
                    class="flex justify-around items-center text-gray-400 m-2 font-mono hover:bg-gray-200 hover:bg-opacity-10 rounded-md py-2"
                  >
                    <td class="flex justify-center items-center">
                      <p class="mr-2">10</p>
                      <img
                        src="images/ignite.jpg"
                        alt="ignite song poster"
                        height="50px"
                        width="50px"
                      />
                      <div class="ml-3">
                        <p class="text-white font-semi-bold">Ignite</p>
                        <a
                          class="text-xs text-gray-400 hover:text-white hover:cursor-pointer"
                          ><span>Alan Walker</span></a
                        >
                      </div>
                    </td>
                    <td class="text-sm">Ignite (feat. K-391)</td>
                    <td class="text-sm">5 days ago</td>
                    <td class="text-sm">3:30</td>
                  </tr>
                  <tr
                    class="flex justify-around items-center text-gray-400 m-2 font-mono hover:bg-gray-200 hover:bg-opacity-10 rounded-md py-2"
                  >
                    <td class="flex justify-center items-center">
                      <p class="mr-2">11</p>
                      <img
                        src="images/darkside.jpg"
                        alt="darkside song poster"
                        height="50px"
                        width="50px"
                      />
                      <div class="ml-3">
                        <p class="text-white font-semi-bold">Darkside</p>
                        <a
                          class="text-xs text-gray-400 hover:text-white hover:cursor-pointer"
                          ><span>Alan Walker</span></a
                        >
                      </div>
                    </td>
                    <td class="text-sm">Different World</td>
                    <td class="text-sm">5 days ago</td>
                    <td class="text-sm">3:31</td>
                  </tr>
                  <tr
                    class="flex justify-around items-center text-gray-400 m-2 font-mono hover:bg-gray-200 hover:bg-opacity-10 rounded-md py-2"
                  >
                    <td class="flex justify-center items-center">
                      <p class="mr-2">12</p>
                      <img
                        src="images/lily.jpg"
                        alt="lily song poster"
                        height="50px"
                        width="50px"
                      />
                      <div class="ml-3">
                        <p class="text-white font-semi-bold">Lily</p>
                        <a
                          class="text-xs text-gray-400 hover:text-white hover:cursor-pointer"
                          ><span>Alan Walker</span></a
                        >
                      </div>
                    </td>
                    <td class="text-sm">Different World</td>
                    <td class="text-sm">5 days ago</td>
                    <td class="text-sm">3:15</td>
                  </tr>
                  <tr
                    class="flex justify-around items-center text-gray-400 m-2 font-mono hover:bg-gray-200 hover:bg-opacity-10 rounded-md py-2"
                  >
                    <td class="flex justify-center items-center">
                      <p class="mr-2 text-green-500">13</p>
                      <img
                        src="images/Heading_Home.jpg"
                        alt="heading home song poster"
                        height="50px"
                        width="50px"
                      />
                      <div class="ml-3">
                        <p class="text-green-500 font-semi-bold">
                          Heading Home
                        </p>
                        <a
                          class="text-xs text-gray-400 hover:text-white hover:cursor-pointer"
                          ><span>Alan Walker, Ruben</span></a
                        >
                      </div>
                    </td>
                    <td class="text-sm">Heading Home</td>
                    <td class="text-sm">5 days ago</td>
                    <td class="text-sm">3:04</td>
                  </tr>
                  <tr
                    class="flex justify-around items-center text-gray-400 m-2 font-mono hover:bg-gray-200 hover:bg-opacity-10 rounded-md py-2"
                  >
                    <td class="flex justify-center items-center">
                      <p class="mr-2">14</p>
                      <img
                        src="images/alone.jpg"
                        alt="alone song poster"
                        height="50px"
                        width="50px"
                      />
                      <div class="ml-3">
                        <p class="text-white font-semi-bold">Alone</p>
                        <a
                          class="text-xs text-gray-400 hover:text-white hover:cursor-pointer"
                          ><span>Alan Walker</span></a
                        >
                      </div>
                    </td>
                    <td class="text-sm">Different World</td>
                    <td class="text-sm">5 days ago</td>
                    <td class="text-sm">2:40</td>
                  </tr>
                  <tr
                    class="flex justify-around items-center text-gray-400 m-2 font-mono hover:bg-gray-200 hover:bg-opacity-10 rounded-md py-2"
                  >
                    <td class="flex justify-center items-center">
                      <p class="mr-2">15</p>
                      <img
                        src="images/selfish.jpg"
                        alt="selfish alan walker remix song poster"
                        height="50px"
                        width="50px"
                      />
                      <div class="ml-3">
                        <p class="text-white font-semi-bold">Selfish</p>
                        <a
                          class="text-xs text-gray-400 hover:text-white hover:cursor-pointer"
                          ><span>Alan Walker</span></a
                        >
                      </div>
                    </td>
                    <td class="text-sm">Selfish</td>
                    <td class="text-sm">5 days ago</td>
                    <td class="text-sm">3:33</td>
                  </tr>
                  <tr
                    class="flex justify-around items-center text-gray-400 m-2 font-mono hover:bg-gray-200 hover:bg-opacity-10 rounded-md py-2"
                  >
                    <td class="flex justify-center items-center">
                      <p class="mr-2">16</p>
                      <img
                        src="images/time.jpg"
                        alt="time alan walker remix song poster"
                        height="50px"
                        width="50px"
                      />
                      <div class="ml-3">
                        <p class="text-white font-semi-bold">Time</p>
                        <a
                          class="text-xs text-gray-400 hover:text-white hover:cursor-pointer"
                          ><span>Alan Walker</span></a
                        >
                      </div>
                    </td>
                    <td class="text-sm">Time(Alan Walker Remix)</td>
                    <td class="text-sm">5 days ago</td>
                    <td class="text-sm">2:30</td>
                  </tr>
                  <tr
                    class="flex justify-around items-center text-gray-400 m-2 font-mono hover:bg-gray-200 hover:bg-opacity-10 rounded-md py-2"
                  >
                    <td class="flex justify-center items-center">
                      <p class="mr-2">17</p>
                      <img
                        src="images/strongest.jpg"
                        alt="strongest alan waker remix song poster"
                        height="50px"
                        width="50px"
                      />
                      <div class="ml-3">
                        <p class="text-white font-semi-bold">Strongest</p>
                        <a
                          class="text-xs text-gray-400 hover:text-white hover:cursor-pointer"
                          ><span>Alan Walker</span></a
                        >
                      </div>
                    </td>
                    <td class="text-sm">Strongest</td>
                    <td class="text-sm">5 days ago</td>
                    <td class="text-sm">3:30</td>
                  </tr>
                  <tr
                    class="flex justify-around items-center text-gray-400 m-2 font-mono hover:bg-gray-200 hover:bg-opacity-10 rounded-md py-2"
                  >
                    <td class="flex justify-center items-center">
                      <p class="mr-2">18</p>
                      <img
                        src="images/in-your-arms.jpg"
                        alt="in your arms song poster"
                        height="50px"
                        width="50px"
                      />
                      <div class="ml-3">
                        <p class="text-white font-semi-bold">In Your Arms</p>
                        <a
                          class="text-xs text-gray-400 hover:text-white hover:cursor-pointer"
                          ><span>Alan Walker</span></a
                        >
                      </div>
                    </td>
                    <td class="text-sm">In Your Arms(with X Ambassadors)</td>
                    <td class="text-sm">5 days ago</td>
                    <td class="text-sm">4:09</td>
                  </tr>
                  <tr
                    class="flex justify-around items-center text-gray-400 m-2 font-mono hover:bg-gray-200 hover:bg-opacity-10 rounded-md py-2"
                  >
                    <td class="flex justify-center items-center">
                      <p class="mr-2">19</p>
                      <img
                        src="images/legends_never_die.jpg"
                        alt="legends never die song poster"
                        height="50px"
                        width="50px"
                      />
                      <div class="ml-3">
                        <p class="text-white font-semi-bold">
                          Legends Never Die
                        </p>
                        <a
                          class="text-xs text-gray-400 hover:text-white hover:cursor-pointer"
                          ><span>Alan Walker</span></a
                        >
                      </div>
                    </td>
                    <td class="text-sm">Legends Never Die(Remix)</td>
                    <td class="text-sm">5 days ago</td>
                    <td class="text-sm">2:47</td>
                  </tr>
                  <tr
                    class="flex justify-around items-center text-gray-400 m-2 font-mono hover:bg-gray-200 hover:bg-opacity-10 rounded-md py-2"
                  >
                    <td class="flex justify-center items-center">
                      <p class="mr-2">20</p>
                      <img
                        src="images/avem.jpg"
                        alt="avem song poster"
                        height="50px"
                        width="50px"
                      />
                      <div class="ml-3">
                        <p class="text-white font-semi-bold">Avem</p>
                        <a
                          class="text-xs text-gray-400 hover:text-white hover:cursor-pointer"
                          ><span>Alan Walker</span></a
                        >
                      </div>
                    </td>
                    <td class="text-sm">Avem(The Aviation Theme)</td>
                    <td class="text-sm">5 days ago</td>
                    <td class="text-sm">3:19</td>
                  </tr>
                  <tr
                    class="flex justify-around items-center text-gray-400 m-2 font-mono hover:bg-gray-200 hover:bg-opacity-10 rounded-md py-2"
                  >
                    <td class="flex justify-center items-center">
                      <p class="mr-2">21</p>
                      <img
                        src="images/lost_control.jpg"
                        alt="lost control song poster"
                        height="50px"
                        width="50px"
                      />
                      <div class="ml-3">
                        <p class="text-white font-semi-bold">Lost Control</p>
                        <a
                          class="text-xs text-gray-400 hover:text-white hover:cursor-pointer"
                          ><span>Alan Walker</span></a
                        >
                      </div>
                    </td>
                    <td class="text-sm">Different World</td>
                    <td class="text-sm">5 days ago</td>
                    <td class="text-sm">3:42</td>
                  </tr>
                  <tr
                    class="flex justify-around items-center text-gray-400 m-2 font-mono hover:bg-gray-200 hover:bg-opacity-10 rounded-md py-2"
                  >
                    <td class="flex justify-center items-center">
                      <p class="mr-2">22</p>
                      <img
                        src="images/diamond-heart.jpg"
                        alt="diamond heart song poster"
                        height="50px"
                        width="50px"
                      />
                      <div class="ml-3">
                        <p class="text-white font-semi-bold">Diamond Heart</p>
                        <a
                          class="text-xs text-gray-400 hover:text-white hover:cursor-pointer"
                          ><span>Alan Walker</span></a
                        >
                      </div>
                    </td>
                    <td class="text-sm">Diamond Heart</td>
                    <td class="text-sm">5 days ago</td>
                    <td class="text-sm">4:00</td>
                  </tr>
                  <tr
                    class="flex justify-around items-center text-gray-400 m-2 font-mono hover:bg-gray-200 hover:bg-opacity-10 rounded-md py-2"
                  >
                    <td class="flex justify-center items-center">
                      <p class="mr-2">23</p>
                      <img
                        src="images/ghost.jpg"
                        alt="ghost song poster"
                        height="50px"
                        width="50px"
                      />
                      <div class="ml-3">
                        <p class="text-white font-semi-bold">Ghost</p>
                        <a
                          class="text-xs text-gray-400 hover:text-white hover:cursor-pointer"
                          ><span>Alan Walker</span></a
                        >
                      </div>
                    </td>
                    <td class="text-sm">Ghost</td>
                    <td class="text-sm">5 days ago</td>
                    <td class="text-sm">2:57</td>
                  </tr>
                  <tr
                    class="flex justify-around items-center text-gray-400 m-2 font-mono hover:bg-gray-200 hover:bg-opacity-10 rounded-md py-2"
                  >
                    <td class="flex justify-center items-center">
                      <p class="mr-2">24</p>
                      <img
                        src="images/live-fast.jpg"
                        alt="live fast song poster"
                        height="50px"
                        width="50px"
                      />
                      <div class="ml-3">
                        <p class="text-white font-semi-bold">
                          Live Fast - PUBGM
                        </p>
                        <a
                          class="text-xs text-gray-400 hover:text-white hover:cursor-pointer"
                          ><span>Alan Walker</span></a
                        >
                      </div>
                    </td>
                    <td class="text-sm">Live Fast(PUBGM)</td>
                    <td class="text-sm">5 days ago</td>
                    <td class="text-sm">3:45</td>
                  </tr>
                  <tr
                    class="flex justify-around items-center text-gray-400 m-2 font-mono hover:bg-gray-200 hover:bg-opacity-10 rounded-md py-2"
                  >
                    <td class="flex justify-center items-center">
                      <p class="mr-2">25</p>
                      <img
                        src="images/sing-me-to-sleep.jpg"
                        alt="sing me to sleep song poster"
                        height="50px"
                        width="50px"
                      />
                      <div class="ml-3">
                        <p class="text-white font-semi-bold">
                          Sing Me to Sleep
                        </p>
                        <a
                          class="text-xs text-gray-400 hover:text-white hover:cursor-pointer"
                          ><span>Alan Walker</span></a
                        >
                      </div>
                    </td>
                    <td class="text-sm">Different World</td>
                    <td class="text-sm">5 days ago</td>
                    <td class="text-sm">3:07</td>
                  </tr>
                  <tr
                    class="flex justify-around items-center text-gray-400 m-2 font-mono hover:bg-gray-200 hover:bg-opacity-10 rounded-md py-2"
                  >
                    <td class="flex justify-center items-center">
                      <p class="mr-2">26</p>
                      <img
                        src="images/fade.jpg"
                        alt="fade song poster"
                        height="50px"
                        width="50px"
                      />
                      <div class="ml-3">
                        <p class="text-white font-semi-bold">Fade</p>
                        <a
                          class="text-xs text-gray-400 hover:text-white hover:cursor-pointer"
                          ><span>Alan Walker</span></a
                        >
                      </div>
                    </td>
                    <td class="text-sm">Fade</td>
                    <td class="text-sm">5 days ago</td>
                    <td class="text-sm">4:24</td>
                  </tr>
                  <tr
                    class="flex justify-around items-center text-gray-400 m-2 font-mono hover:bg-gray-200 hover:bg-opacity-10 rounded-md py-2"
                  >
                    <td class="flex justify-center items-center">
                      <p class="mr-2">27</p>
                      <img
                        src="images/are-you-lonely.jpg"
                        alt="are you lonely song poster"
                        height="50px"
                        width="50px"
                      />
                      <div class="ml-3">
                        <p class="text-white font-semi-bold">Are You Lonely</p>
                        <a
                          class="text-xs text-gray-400 hover:text-white hover:cursor-pointer"
                          ><span>Alan Walker</span></a
                        >
                      </div>
                    </td>
                    <td class="text-sm">Neon Future IV(remixes)</td>
                    <td class="text-sm">5 days ago</td>
                    <td class="text-sm">3:25</td>
                  </tr>
                  <tr
                    class="flex justify-around items-center text-gray-400 m-2 font-mono hover:bg-gray-200 hover:bg-opacity-10 rounded-md py-2"
                  >
                    <td class="flex justify-center items-center">
                      <p class="mr-2">28</p>
                      <img
                        src="images/stranger-things.jpg"
                        alt="stranger things song poster"
                        height="50px"
                        width="50px"
                      />
                      <div class="ml-3">
                        <p class="text-white font-semi-bold">Stranger Things</p>
                        <a
                          class="text-xs text-gray-400 hover:text-white hover:cursor-pointer"
                          ><span>Alan Walker</span></a
                        >
                      </div>
                    </td>
                    <td class="text-sm">Kids in Love (Remixes)</td>
                    <td class="text-sm">5 days ago</td>
                    <td class="text-sm">2:58</td>
                  </tr>
                  <tr
                    class="flex justify-around items-center text-gray-400 m-2 font-mono hover:bg-gray-200 hover:bg-opacity-10 rounded-md py-2"
                  >
                    <td class="flex justify-center items-center">
                      <p class="mr-2">29</p>
                      <img
                        src="images/force.jpg"
                        alt="force song poster"
                        height="50px"
                        width="50px"
                      />
                      <div class="ml-3">
                        <p class="text-white font-semi-bold">Force</p>
                        <a
                          class="text-xs text-gray-400 hover:text-white hover:cursor-pointer"
                          ><span>Alan Walker</span></a
                        >
                      </div>
                    </td>
                    <td class="text-sm">Force</td>
                    <td class="text-sm">5 days ago</td>
                    <td class="text-sm">4:00</td>
                  </tr>
                  <tr
                    class="flex justify-around items-center text-gray-400 m-2 font-mono hover:bg-gray-200 hover:bg-opacity-10 rounded-md py-2"
                  >
                    <td class="flex justify-center items-center">
                      <p class="mr-2">30</p>
                      <img
                        src="images/tired.jpg"
                        alt="tired song poster"
                        height="50px"
                        width="50px"
                      />
                      <div class="ml-3">
                        <p class="text-white font-semi-bold">Tired</p>
                        <a
                          class="text-xs text-gray-400 hover:text-white hover:cursor-pointer"
                          ><span>Alan Walker</span></a
                        >
                      </div>
                    </td>
                    <td class="text-sm">Tired</td>
                    <td class="text-sm">5 days ago</td>
                    <td class="text-sm">3:12</td>
                  </tr>
                  <tr
                    class="flex justify-around items-center text-gray-400 m-2 font-mono hover:bg-gray-200 hover:bg-opacity-10 rounded-md py-2"
                  >
                    <td class="flex justify-center items-center">
                      <p class="mr-2">31</p>
                      <img
                        src="images/move-your-body.jpg"
                        alt="move your body song poster"
                        height="50px"
                        width="50px"
                      />
                      <div class="ml-3">
                        <p class="text-white font-semi-bold">Move Your Body</p>
                        <a
                          class="text-xs text-gray-400 hover:text-white hover:cursor-pointer"
                          ><span>Alan Walker</span></a
                        >
                      </div>
                    </td>
                    <td class="text-sm">Move Your Body</td>
                    <td class="text-sm">5 days ago</td>
                    <td class="text-sm">3:37</td>
                  </tr>
                  <tr
                    class="flex justify-around items-center text-gray-400 m-2 font-mono hover:bg-gray-200 hover:bg-opacity-10 rounded-md py-2"
                  >
                    <td class="flex justify-center items-center">
                      <p class="mr-2">32</p>
                      <img
                        src="images/sky.jpg"
                        alt="sky song poster"
                        height="50px"
                        width="50px"
                      />
                      <div class="ml-3">
                        <p class="text-white font-semi-bold">Sky</p>
                        <a
                          class="text-xs text-gray-400 hover:text-white hover:cursor-pointer"
                          ><span>Alan Walker</span></a
                        >
                      </div>
                    </td>
                    <td class="text-sm">Insomniac Records Presents</td>
                    <td class="text-sm">5 days ago</td>
                    <td class="text-sm">3:23</td>
                  </tr>
                  <tr
                    class="flex justify-around items-center text-gray-400 m-2 font-mono hover:bg-gray-200 hover:bg-opacity-10 rounded-md py-2"
                  >
                    <td class="flex justify-center items-center">
                      <p class="mr-2">33</p>
                      <img
                        src="images/all.jpg"
                        alt="all falls down song poster"
                        height="50px"
                        width="50px"
                      />
                      <div class="ml-3">
                        <p class="text-white font-semi-bold">All Falls Down</p>
                        <a
                          class="text-xs text-gray-400 hover:text-white hover:cursor-pointer"
                          ><span>Alan Walker</span></a
                        >
                      </div>
                    </td>
                    <td class="text-sm">All Falls Down</td>
                    <td class="text-sm">5 days ago</td>
                    <td class="text-sm">3:18</td>
                  </tr>
                  <tr
                    class="flex justify-around items-center text-gray-400 m-2 font-mono hover:bg-gray-200 hover:bg-opacity-10 rounded-md py-2"
                  >
                    <td class="flex justify-center items-center">
                      <p class="mr-2">34</p>
                      <img
                        src="images/routine.jpg"
                        alt="routine song poster"
                        height="50px"
                        width="50px"
                      />
                      <div class="ml-3">
                        <p class="text-white font-semi-bold">Routine</p>
                        <a
                          class="text-xs text-gray-400 hover:text-white hover:cursor-pointer"
                          ><span>Alan Walker</span></a
                        >
                      </div>
                    </td>
                    <td class="text-sm">Routine</td>
                    <td class="text-sm">5 days ago</td>
                    <td class="text-sm">2:46</td>
                  </tr>
                  <tr
                    class="flex justify-around items-center text-gray-400 m-2 font-mono hover:bg-gray-200 hover:bg-opacity-10 rounded-md py-2"
                  >
                    <td class="flex justify-center items-center">
                      <p class="mr-2">35</p>
                      <img
                        src="images/lonely.jpg"
                        alt="lonely song poster"
                        height="50px"
                        width="50px"
                      />
                      <div class="ml-3">
                        <p class="text-white font-semi-bold">Lonely Together</p>
                        <a
                          class="text-xs text-gray-400 hover:text-white hover:cursor-pointer"
                          ><span>Alan Walker</span></a
                        >
                      </div>
                    </td>
                    <td class="text-sm">Lonely Together</td>
                    <td class="text-sm">5 days ago</td>
                    <td class="text-sm">2:59</td>
                  </tr>
                  <tr
                    class="flex justify-around items-center text-gray-400 m-2 font-mono hover:bg-gray-200 hover:bg-opacity-10 rounded-md py-2"
                  >
                    <td class="flex justify-center items-center">
                      <p class="mr-2">36</p>
                      <img
                        src="images/i-dont-wanna-go.jpg"
                        alt="i don't wanna go song poster"
                        height="50px"
                        width="50px"
                      />
                      <div class="ml-3">
                        <p class="text-white font-semi-bold">
                          I Don't Wanna Go
                        </p>
                        <a
                          class="text-xs text-gray-400 hover:text-white hover:cursor-pointer"
                          ><span>Alan Walker</span></a
                        >
                      </div>
                    </td>
                    <td class="text-sm">Different World</td>
                    <td class="text-sm">5 days ago</td>
                    <td class="text-sm">2:41</td>
                  </tr>
                  <tr
                    class="flex justify-around items-center text-gray-400 m-2 font-mono hover:bg-gray-200 hover:bg-opacity-10 rounded-md py-2"
                  >
                    <td class="flex justify-center items-center">
                      <p class="mr-2">37</p>
                      <img
                        src="images/are-you-lonely.jpg"
                        alt="are you lonely song poster"
                        height="50px"
                        width="50px"
                      />
                      <div class="ml-3">
                        <p class="text-white font-semi-bold">Are You Lonely</p>
                        <a
                          class="text-xs text-gray-400 hover:text-white hover:cursor-pointer"
                          ><span>Alan Walker</span></a
                        >
                      </div>
                    </td>
                    <td class="text-sm">Neon Future IV</td>
                    <td class="text-sm">5 days ago</td>
                    <td class="text-sm">2:37</td>
                  </tr>
                  <tr
                    class="flex justify-around items-center text-gray-400 m-2 font-mono hover:bg-gray-200 hover:bg-opacity-10 rounded-md py-2"
                  >
                    <td class="flex justify-center items-center">
                      <p class="mr-2">38</p>
                      <img
                        src="images/all-night.jpg"
                        alt="all night song poster"
                        height="50px"
                        width="50px"
                      />
                      <div class="ml-3">
                        <p class="text-white font-semi-bold">All night</p>
                        <a
                          class="text-xs text-gray-400 hover:text-white hover:cursor-pointer"
                          ><span>Alan Walker</span></a
                        >
                      </div>
                    </td>
                    <td class="text-sm">Neon Future III</td>
                    <td class="text-sm">5 days ago</td>
                    <td class="text-sm">3:14</td>
                  </tr>
                  <tr
                    class="flex justify-around items-center text-gray-400 m-2 font-mono hover:bg-gray-200 hover:bg-opacity-10 rounded-md py-2"
                  >
                    <td class="flex justify-center items-center">
                      <p class="mr-2">39</p>
                      <img
                        src="images/back-to-beautiful.jpg"
                        alt="back to beautiful song poster"
                        height="50px"
                        width="50px"
                      />
                      <div class="ml-3">
                        <p class="text-white font-semi-bold">
                          Back to Beautiful
                        </p>
                        <a
                          class="text-xs text-gray-400 hover:text-white hover:cursor-pointer"
                          ><span>Alan Walker</span></a
                        >
                      </div>
                    </td>
                    <td class="text-sm">Back to Beautiful</td>
                    <td class="text-sm">5 days ago</td>
                    <td class="text-sm">3:22</td>
                  </tr>
                  <tr
                    class="flex justify-around items-center text-gray-400 m-2 font-mono hover:bg-gray-200 hover:bg-opacity-10 rounded-md py-2"
                  >
                    <td class="flex justify-center items-center">
                      <p class="mr-2">40</p>
                      <img
                        src="images/different-world.jpg"
                        alt="different World song poster"
                        height="50px"
                        width="50px"
                      />
                      <div class="ml-3">
                        <p class="text-white font-semi-bold">Different World</p>
                        <a
                          class="text-xs text-gray-400 hover:text-white hover:cursor-pointer"
                          ><span>Alan Walker</span></a
                        >
                      </div>
                    </td>
                    <td class="text-sm">Different World</td>
                    <td class="text-sm">5 days ago</td>
                    <td class="text-sm">3:22</td>
                  </tr>
                  <tr
                    class="flex justify-around items-center text-gray-400 m-2 font-mono hover:bg-gray-200 hover:bg-opacity-10 rounded-md py-2"
                  >
                    <td class="flex justify-center items-center">
                      <p class="mr-2">41</p>
                      <img
                        src="images/millionaire.jpg"
                        alt="millionaire song poster"
                        height="50px"
                        width="50px"
                      />
                      <div class="ml-3">
                        <p class="text-white font-semi-bold">Millionaire</p>
                        <a
                          class="text-xs text-gray-400 hover:text-white hover:cursor-pointer"
                          ><span>Alan Walker</span></a
                        >
                      </div>
                    </td>
                    <td class="text-sm">Millionaire</td>
                    <td class="text-sm">5 days ago</td>
                    <td class="text-sm">3:09</td>
                  </tr>
                  <tr
                    class="flex justify-around items-center text-gray-400 m-2 font-mono hover:bg-gray-200 hover:bg-opacity-10 rounded-md py-2"
                  >
                    <td class="flex justify-center items-center">
                      <p class="mr-2">42</p>
                      <img
                        src="images/malibu.jpg"
                        alt="malibu song poster"
                        height="50px"
                        width="50px"
                      />
                      <div class="ml-3">
                        <p class="text-white font-semi-bold">Malibu</p>
                        <a
                          class="text-xs text-gray-400 hover:text-white hover:cursor-pointer"
                          ><span>Alan Walker</span></a
                        >
                      </div>
                    </td>
                    <td class="text-sm">Malibu(The Remixes)</td>
                    <td class="text-sm">5 days ago</td>
                    <td class="text-sm">3:07</td>
                  </tr>
                  <tr
                    class="flex justify-around items-center text-gray-400 m-2 font-mono hover:bg-gray-200 hover:bg-opacity-10 rounded-md py-2"
                  >
                    <td class="flex justify-center items-center">
                      <p class="mr-2">43</p>
                      <img
                        src="images/issues.jpg"
                        alt="issues song poster"
                        height="50px"
                        width="50px"
                      />
                      <div class="ml-3">
                        <p class="text-white font-semi-bold">Issues</p>
                        <a
                          class="text-xs text-gray-400 hover:text-white hover:cursor-pointer"
                          ><span>Alan Walker</span></a
                        >
                      </div>
                    </td>
                    <td class="text-sm">Issues</td>
                    <td class="text-sm">5 days ago</td>
                    <td class="text-sm">3:01</td>
                  </tr>
                  <tr
                    class="flex justify-around items-center text-gray-400 m-2 font-mono hover:bg-gray-200 hover:bg-opacity-10 rounded-md py-2"
                  >
                    <td class="flex justify-center items-center">
                      <p class="mr-2">44</p>
                      <img
                        src="images/after-the-party.jpg"
                        alt="after the party song poster"
                        height="50px"
                        width="50px"
                      />
                      <div class="ml-3">
                        <p class="text-white font-semi-bold">
                          After the Afterparty
                        </p>
                        <a
                          class="text-xs text-gray-400 hover:text-white hover:cursor-pointer"
                          ><span>Alan Walker</span></a
                        >
                      </div>
                    </td>
                    <td class="text-sm">After the Afterparty</td>
                    <td class="text-sm">5 days ago</td>
                    <td class="text-sm">3:16</td>
                  </tr>
                  <tr
                    class="flex justify-around items-center text-gray-400 m-2 font-mono hover:bg-gray-200 hover:bg-opacity-10 rounded-md py-2"
                  >
                    <td class="flex justify-center items-center">
                      <p class="mr-2">45</p>
                      <img
                        src="images/faded-interlude.jpg"
                        alt="faded interlude song poster"
                        height="50px"
                        width="50px"
                      />
                      <div class="ml-3">
                        <p class="text-white font-semi-bold">Faded</p>
                        <a
                          class="text-xs text-gray-400 hover:text-white hover:cursor-pointer"
                          ><span>Alan Walker</span></a
                        >
                      </div>
                    </td>
                    <td class="text-sm">Different World</td>
                    <td class="text-sm">5 days ago</td>
                    <td class="text-sm">0:41</td>
                  </tr>
                  <tr
                    class="flex justify-around items-center text-gray-400 m-2 font-mono hover:bg-gray-200 hover:bg-opacity-10 rounded-md py-2"
                  >
                    <td class="flex justify-center items-center">
                      <p class="mr-2">46</p>
                      <img
                        src="images/sheep.jpg"
                        alt="sheep song poster"
                        height="50px"
                        width="50px"
                      />
                      <div class="ml-3">
                        <p class="text-white font-semi-bold">Sheep</p>
                        <a
                          class="text-xs text-gray-400 hover:text-white hover:cursor-pointer"
                          ><span>Alan Walker</span></a
                        >
                      </div>
                    </td>
                    <td class="text-sm">Sheep</td>
                    <td class="text-sm">5 days ago</td>
                    <td class="text-sm">2:36</td>
                  </tr>
                  <tr
                    class="flex justify-around items-center text-gray-400 m-2 font-mono hover:bg-gray-200 hover:bg-opacity-10 rounded-md py-2"
                  >
                    <td class="flex justify-center items-center">
                      <p class="mr-2">47</p>
                      <img
                        src="images/again.jpg"
                        alt="again song poster"
                        height="50px"
                        width="50px"
                      />
                      <div class="ml-3">
                        <p class="text-white font-semi-bold">
                          Again(feat. XXXTENTACION)
                        </p>
                        <a
                          class="text-xs text-gray-400 hover:text-white hover:cursor-pointer"
                          ><span>Alan Walker</span></a
                        >
                      </div>
                    </td>
                    <td class="text-sm">(feat. XXXTENTACION)</td>
                    <td class="text-sm">5 days ago</td>
                    <td class="text-sm">2:45</td>
                  </tr>
                  <tr
                    class="flex justify-around items-center text-gray-400 m-2 font-mono hover:bg-gray-200 hover:bg-opacity-10 rounded-md py-2"
                  >
                    <td class="flex justify-center items-center">
                      <p class="mr-2">48</p>
                      <img
                        src="images/do-it-all-for-you.jpg"
                        alt="do it all for you song poster"
                        height="50px"
                        width="50px"
                      />
                      <div class="ml-3">
                        <p class="text-white font-semi-bold">
                          Do It All for You
                        </p>
                        <a
                          class="text-xs text-gray-400 hover:text-white hover:cursor-pointer"
                          ><span>Alan Walker</span></a
                        >
                      </div>
                    </td>
                    <td class="text-sm">Different World</td>
                    <td class="text-sm">5 days ago</td>
                    <td class="text-sm">2:54</td>
                  </tr>
                  <tr
                    class="flex justify-around items-center text-gray-400 m-2 font-mono hover:bg-gray-200 hover:bg-opacity-10 rounded-md py-2"
                  >
                    <td class="flex justify-center items-center">
                      <p class="mr-2">49</p>
                      <img
                        src="images/that's-what-i-like.jpg"
                        alt="that's what I like alan walkerr remix song poster"
                        height="50px"
                        width="50px"
                      />
                      <div class="ml-3">
                        <p class="text-white font-semi-bold">
                          That's What I Like
                        </p>
                        <a
                          class="text-xs text-gray-400 hover:text-white hover:cursor-pointer"
                          ><span>Alan Walker</span></a
                        >
                      </div>
                    </td>
                    <td class="text-sm">
                      That's What I Like(Alan Walker Remixes)
                    </td>
                    <td class="text-sm">5 days ago</td>
                    <td class="text-sm">3:14</td>
                  </tr>
                  <tr
                    class="flex justify-around items-center text-gray-400 m-2 font-mono hover:bg-gray-200 hover:bg-opacity-10 rounded-md py-2"
                  >
                    <td class="flex justify-center items-center">
                      <p class="mr-2">50</p>
                      <img
                        src="images/intro.jpg"
                        alt="different world intro song poster"
                        height="50px"
                        width="50px"
                      />
                      <div class="ml-3">
                        <p class="text-white font-semi-bold">Intro</p>
                        <a
                          class="text-xs text-gray-400 hover:text-white hover:cursor-pointer"
                          ><span>Alan Walker</span></a
                        >
                      </div>
                    </td>
                    <td class="text-sm">Different World</td>
                    <td class="text-sm">5 days ago</td>
                    <td class="text-sm">1:16</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="flex justify-between items-center my-6 md:hidden">
              <button class="text-green-500">
                <svg
                  class="fill-current mr-4"
                  role="img"
                  height="24"
                  width="24"
                  viewBox="0 0 16 16"
                  class="Svg-ulyrgf-0 hJgLcF"
                >
                  <path fill="none" d="M0 0h16v16H0z"></path>
                  <path
                    d="M13.797 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253c-.77.77-1.194 1.794-1.194 2.883s.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195a4.052 4.052 0 001.195-2.883 4.057 4.057 0 00-1.196-2.883z"
                  ></path>
                </svg>
              </button>
              <p class="text-white font-semibold text-sm tracking-wider">
                Heading Home,
                <span class="text-gray-300 font-semibold text-sm"
                  >Alan Walker</span
                >
              </p>
              <button>
                <svg
                  class="text-white"
                  height="24"
                  role="img"
                  width="24"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <polygon
                    points="21.57 12 5.98 3 5.98 21 21.57 12"
                    fill="currentColor"
                  ></polygon>
                </svg>
              </button>
            </div>
            <div
              class="hidden fixed left-0 bottom-0 right-0 h-auto flex justify-between flex-row items-center md:flex"
              style="background-color: #181818; border-top: 1px solid #282828"
            >
              <div class="mx-4 my-4 flex justify-start items-center w-1/3">
                <img
                  src="images/spectre.jpg"
                  alt="heading home song by alan walker"
                  class="shadow-2xl rounded-md"
                />
                <div class="flex flex-col justify-center m-4">
                  <h5 id="song-name" class="text-white font-semi-bold text-sm text-left">
                    The Spectre
                  </h5>
                  <p id="artist-name" class="text-gray-400 font-semi-bold text-xs">
                    Alan Walker
                  </p>
                </div>
                <div class="text-gray-300 flex justify-center items-center">
                  <svg
                    class="fill-current ml-2"
                    role="img"
                    height="16"
                    width="16"
                    viewBox="0 0 16 16"
                    class="Svg-ulyrgf-0 hJgLcF"
                  >
                    <path
                      d="M13.764 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253A4.05 4.05 0 00.974 5.61c0 1.089.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195A4.052 4.052 0 0014.96 5.61a4.057 4.057 0 00-1.196-2.883zm-.722 5.098L8.58 13.048c-.307.36-.921.36-1.228 0L2.864 7.797a3.072 3.072 0 01-.905-2.187c0-.826.321-1.603.905-2.187a3.091 3.091 0 012.191-.913 3.05 3.05 0 011.957.709c.041.036.408.351.954.351.531 0 .906-.31.94-.34a3.075 3.075 0 014.161.192 3.1 3.1 0 01-.025 4.403z"
                    ></path>
                  </svg>
                  <svg
                    class="ml-4"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="currentColor" fill-rule="evenodd">
                      <path
                        d="M1 3v9h14V3H1zm0-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"
                        fill-rule="nonzero"
                      ></path>
                      <path d="M10 8h4v3h-4z"></path>
                    </g>
                  </svg>
                </div>
              </div>
              <div
                class="w-2/5 flex flex-col justify-center items-center m-0 p-0 border-0"
              >
                <div
                  class="text-gray-300 mb-3 flex justify-between w-2/5 items-center"
                >
                  <svg
                    class="fill-current"
                    role="img"
                    height="16"
                    width="16"
                    viewBox="0 0 16 16"
                    class="Svg-ulyrgf-0 hJgLcF"
                  >
                    <path
                      d="M4.5 6.8l.7-.8C4.1 4.7 2.5 4 .9 4v1c1.3 0 2.6.6 3.5 1.6l.1.2zm7.5 4.7c-1.2 0-2.3-.5-3.2-1.3l-.6.8c1 1 2.4 1.5 3.8 1.5V14l3.5-2-3.5-2v1.5zm0-6V7l3.5-2L12 3v1.5c-1.6 0-3.2.7-4.2 2l-3.4 3.9c-.9 1-2.2 1.6-3.5 1.6v1c1.6 0 3.2-.7 4.2-2l3.4-3.9c.9-1 2.2-1.6 3.5-1.6z"
                    ></path>
                  </svg>
                  <svg
                    class="fill-current"
                    role="img"
                    height="16"
                    width="16"
                    viewBox="0 0 16 16"
                    class="Svg-ulyrgf-0 hJgLcF"
                  >
                    <path d="M13 2.5L5 7.119V3H3v10h2V8.881l8 4.619z"></path>
                  </svg>
                  <button
                  id="play-btn"
                    class="bg-white rounded-full w-8 h-8 flex justify-center items-center"
                  >
                    <svg
                      role="img"
                      height="16"
                      width="16"
                      viewBox="0 0 16 16"
                      class="Svg-ulyrgf-0 hJgLcF"
                    >
                      <path fill="none" d="M0 0h16v16H0z"></path>
                      <path d="M3 2h3v12H3zM10 2h3v12h-3z"></path>
                    </svg>
                  </button>
                  <svg
                    class="fill-current"
                    role="img"
                    height="16"
                    width="16"
                    viewBox="0 0 16 16"
                    class="Svg-ulyrgf-0 hJgLcF"
                  >
                    <path d="M11 3v4.119L3 2.5v11l8-4.619V13h2V3z"></path>
                  </svg>
                  <svg
                    class="fill-current"
                    role="img"
                    height="16"
                    width="16"
                    viewBox="0 0 16 16"
                    class="Svg-ulyrgf-0 hJgLcF"
                  >
                    <path
                      d="M5.5 5H10v1.5l3.5-2-3.5-2V4H5.5C3 4 1 6 1 8.5c0 .6.1 1.2.4 1.8l.9-.5C2.1 9.4 2 9 2 8.5 2 6.6 3.6 5 5.5 5zm9.1 1.7l-.9.5c.2.4.3.8.3 1.3 0 1.9-1.6 3.5-3.5 3.5H6v-1.5l-3.5 2 3.5 2V13h4.5C13 13 15 11 15 8.5c0-.6-.1-1.2-.4-1.8z"
                    ></path>
                  </svg>
                </div>
                <div class="flex flex-row justify-between items-center w-full">
                  <div id="time-elapsed" class="text-gray-300 text-xs text-center">1:41</div>
                  <div
                    class="bg-gray-600 flex w-full h-full border border-gray-600 rounded-full mx-4"
                  >
                    <div
                    id="progress"
                      class="bg-gray-300 border border-gray-300 rounded-full w-0 h-1"
                    ></div>
                  </div>
                  <div id="duration" class="text-gray-300 text-xs text-center">3:04</div>
                </div>
              </div>
              <div class="flex flex-row justify-end items-center w-1/3 mr-4">
                <div
                  class="flex justify-center w-2/5 items-center text-gray-300"
                >
                  <svg
                    class="fill-current m-4"
                    height="20"
                    width="20"
                    viewBox="0 0 48 48"
                    width="48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h48v48H0z" fill="none" />
                    <path
                      d="M30 12H6v4h24v-4zm0 8H6v4h24v-4zM6 32h16v-4H6v4zm28-20v16.37c-.63-.23-1.29-.37-2-.37-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6V16h6v-4H34z"
                    />
                  </svg>
                  <svg
                    class="fill-current mr-2"
                    role="img"
                    height="16"
                    width="16"
                    viewBox="0 0 16 16"
                    class="Svg-ulyrgf-0 hJgLcF"
                  >
                    <path
                      d="M12.945 1.379l-.652.763c1.577 1.462 2.57 3.544 2.57 5.858s-.994 4.396-2.57 5.858l.651.763a8.966 8.966 0 00.001-13.242zm-2.272 2.66l-.651.763a4.484 4.484 0 01-.001 6.397l.651.763c1.04-1 1.691-2.404 1.691-3.961s-.65-2.962-1.69-3.962zM0 5v6h2.804L8 14V2L2.804 5H0zm7-1.268v8.536L3.072 10H1V6h2.072L7 3.732z"
                    ></path>
                  </svg>
                  <div
                    class="bg-gray-300 border border-gray-300 rounded-full w-3/5 h-1"
                  ></div>
                </div>
              </div>
            </div>
            <div
              class="flex justify-around mt-2 text-gray-200 text-xs hover:text-white md:hidden"
            >
              <button class="flex flex-col items-center">
                <svg
                  class=""
                  viewBox="0 0 512 512"
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 256.274 60.84 L 84.324 166.237 L 84.324 443.063 L 193.27 443.063 L 193.27 293.73 L 320.228 293.73 L 320.228 443.063 L 428.222 443.063 L 428.222 165.476 L 256.274 60.84 Z M 256.274 35.95 L 448.452 149.145 L 448.452 464.395 L 300 464.395 L 300 315.062 L 213.499 315.062 L 213.499 464.395 L 64.095 464.395 L 64.095 150.161 L 256.274 35.95 Z"
                    fill="currentColor"
                  ></path>
                </svg>
                Home
              </button>
              <button class="flex flex-col items-center">
                <svg
                  class=""
                  viewBox="0 0 512 512"
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z"
                    fill="currentColor"
                    fill-rule="evenodd"
                  ></path>
                </svg>
                Search
              </button>
              <button class="flex flex-col items-center">
                <svg
                  class=""
                  viewBox="0 0 512 512"
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M291.301 81.778l166.349 373.587-19.301 8.635-166.349-373.587zM64 463.746v-384h21.334v384h-21.334zM192 463.746v-384h21.334v384h-21.334z"
                    fill="currentColor"
                  ></path>
                </svg>
                Library
              </button>
              <button class="flex flex-col items-center">
                <svg
                  class="fill-current"
                  role="img"
                  height="20"
                  width="20"
                  viewBox="0 0 24 24"
                  class="Svg-ulyrgf-0 hJgLcF"
                >
                  <path
                    d="M11.5 0C5.149 0 0 5.148 0 11.5 0 17.851 5.149 23 11.5 23S23 17.851 23 11.5C23 5.148 17.851 0 11.5 0zm0 22C5.71 22 1 17.29 1 11.5S5.71 1 11.5 1 22 5.71 22 11.5 17.29 22 11.5 22zm.499-6.842V5h-1v10.149l-3.418-3.975-.758.652 4.678 5.44 4.694-5.439-.757-.653-3.439 3.984z"
                  ></path>
                </svg>
                Get App
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
  )
}

export default Sampah