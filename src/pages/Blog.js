import React, { useEffect } from "react";

import DetailComment from "../components/DetailComment";

const Blog = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container w-full md:max-w-3xl mx-auto pt-4 md:pt-10">
        <div className="w-full px-4 md:px-6 text-lg text-gray-800 leading-normal">
          <div className="font-sans">
            <div className=" flex justify-between items-center text-base md:text-sm text-green-500 font-bold">
              <div className="flex ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <a
                href="#"
                className="text-sm md:text-sm text-green-500 font-bold no-underline hover:underline"
              >
                BACK
              </a>
              </div>
              <div className="flex justify-end space-x-2">
                <button>
                <div class="border hover:bg-[#1877f2] w-9 h-9 fill-[#1877f2] hover:fill-white border-[#5aa3ed] rounded-full flex items-center justify-center hover:shadow-blue-500/50 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path></svg></div>
                </button>
                <button>
                <div class="border hover:bg-[#1d9bf0] w-9 h-9 fill-[#1d9bf0] hover:fill-white border-[#5aa3ed] rounded-full flex items-center justify-center hover:shadow-sky-500/50 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path></svg></div>
                </button>
              </div>
            </div>
            <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-2xl md:text-4xl">
              Welcome to Minimal Blog
            </h1>
            <p className="text-sm md:text-base font-normal text-gray-400">
              Published 19 February 2019
            </p>
          </div>

          <p className="py-3">
            👋 Welcome fellow{" "}
            <a
              className="text-green-500 no-underline hover:underline"
              href="https://www.tailwindcss.com"
            >
              Tailwind CSS
            </a>{" "}
            and miminal monochrome blog fan. This starter template provides a
            starting point to create your own minimal monochrome blog using
            Tailwind CSS and vanilla Javascript.
          </p>

          <p className="py-3">
            The basic blog page layout is available and all using the default
            Tailwind CSS classes (although there are a few hardcoded style
            tags). If you are going to use this in your project, you will want
            to convert the classes into components.
          </p>

          <p className="py-3">
            Sed dignissim lectus ut tincidunt vulputate. Fusce tincidunt lacus
            purus, in mattis tortor sollicitudin pretium. Phasellus at diam
            posuere, scelerisque nisl sit amet, tincidunt urna. Cras nisi diam,
            pulvinar ut molestie eget, eleifend ac magna. Sed at lorem
            condimentum, dignissim lorem eu, blandit massa. Phasellus eleifend
            turpis vel erat bibendum scelerisque. Maecenas id risus dictum,
            rhoncus odio vitae, maximus purus. Etiam efficitur dolor in dolor
            molestie ornare. Aenean pulvinar diam nec neque tincidunt, vitae
            molestie quam fermentum. Donec ac pretium diam. Suspendisse sed odio
            risus. Nunc nec luctus nisi. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Duis nec nulla
            eget sem dictum elementum.
          </p>

          <ol>
            <li className="py-3">
              Maecenas accumsan lacus sit amet elementum porta. Aliquam eu
              libero lectus. Fusce vehicula dictum mi. In non dolor at sem
              ullamcorper venenatis ut sed dui. Ut ut est quam. Suspendisse quam
              quam, commodo sit amet placerat in, interdum a ipsum. Morbi sit
              amet tellus scelerisque tortor semper posuere.
            </li>
            <li className="py-3">
              Morbi varius posuere blandit. Praesent gravida bibendum neque eget
              commodo. Duis auctor ornare mauris, eu accumsan odio viverra in.
              Proin sagittis maximus pharetra. Nullam lorem mauris, faucibus ut
              odio tempus, ultrices aliquet ex. Nam id quam eget ipsum luctus
              hendrerit. Ut eros magna, eleifend ac ornare vulputate, pretium
              nec felis.
            </li>
            <li className="py-3">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Nunc vitae pretium elit. Cras leo mauris,
              tristique in risus ac, tristique rutrum velit. Mauris accumsan
              tempor felis vitae gravida. Cras egestas convallis malesuada.
              Etiam ac ante id tortor vulputate pretium. Maecenas vel sapien
              suscipit, elementum odio et, consequat tellus.
            </li>
          </ol>

          <blockquote className="border-l-4 border-green-500 italic my-8 pl-8 md:pl-12">
            Example of blockquote - Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit
            amet ligula.
          </blockquote>
        </div>

        <div className="md:text-sm text-gray-500 px-4 py-3">
              Source:{" "}
              <a href="https://mydramalist.com/article/an-ultra-fan-guide-to-lee-elijah" className="italic underline">https://mydramalist.com/article/an-ultra-fan-guide-to-lee-elijah</a>
        </div>

        <div className="text-base md:text-sm text-gray-500 px-4 py-2">
          Tags:{" "}
          <a
            href="#"
            className="text-xs md:text-xs text-white py-1 px-2 rounded-full bg-green-500 no-underline hover:underline"
          >
            Link
          </a>{" "}
          {" "}
          <a
            href="#"
            className="text-xs md:text-xs text-white py-1 px-2 rounded-full bg-green-500 no-underline hover:underline"
          >
            Link
          </a>
        </div>

        {/* <hr className="border-b-2 border-gray-400 mb-8 mx-4" /> */}

        <div className="flex w-full items-center font-sans px-4 py-8">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src="http://i.pravatar.cc/300"
            alt="Avatar of Author"
          />
          <div className="flex-1 px-2">
            <p className="text-base font-bold text-base md:text-xl leading-none mb-2">
              Jo Bloggerson
            </p>
            <p className="text-gray-600 text-xs md:text-base">
              Minimal Blog Tailwind CSS template by{" "}
              <a
                className="text-green-500 no-underline hover:underline"
                href="https://www.tailwindtoolbox.com"
              >
                TailwindToolbox.com
              </a>
            </p>
          </div>
          <div className="justify-end">
            <button className="bg-transparent border border-gray-500 hover:border-green-500 text-xs text-gray-500 hover:text-green-500 font-bold py-2 px-4 rounded-full">
              Read More
            </button>
          </div>
        </div>
              <DetailComment />
        {/* <hr className="border-b-2 border-gray-400 mb-8 mx-4" /> */}
      </div>
    </>
  );
};

export default Blog;
