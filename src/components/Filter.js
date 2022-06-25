import React from "react";

const faqs = [
  {
    title: "Sort by",
    desc: "",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
  },
  {
    title: "Type",
    desc: "",
    content: "content",
  },
  {
    title: "Country",
    desc: "",
    content: "content",
  },
  {
    title: "Tags",
    desc: "Click to include genre, or double click to exclude genre",
    content: "content",
  },
  {
    title: "Relese date",
    desc: "",
    content: "content",
  },
  {
    title: "Rating",
    desc: "",
    content: "content",
  },
  {
    title: "Status",
    desc: "",
    content: "content",
  },
];

const Filter = () => {
  return (
    <>
      <div>
        <div className="my-2 drop-shadow-sm shadow hover:drop-shadow-lg flex-col">
          <div className="w-full bg-[#f3f8fc] p-2 rounded">
            <div className="py-2 px-2">
              <div className="">
                <span className="text-gray-600 font-semibold">
                  Advance filter
                </span>
              </div>
            </div>
          </div>
          <div className="w-full bg-white p-0 ">
            <div className="">
              {faqs.map((item, key) => (
                <div className="relative overflow-hidden border-b items-center ">
                  <input
                    type="checkbox"
                    className=" peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                  />
                  <div className="min-h-[50px] py-2 w-[250px] pl-3 flex-col items-center leading-none">
                    <div className="py-2">
                      <h1 className="font-semibold">{item.title}</h1>
                    </div>
                    <span className="text-[12px] text-gray-400 font-thin ">
                      {item.desc}
                    </span>
                  </div>
                  <div className="absolute top-4 right-2 transition-transform duration-500 rotate-0 peer-checked:-rotate-90">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="overflow-hidden bg-white transition-all duration-500 max-h-0 peer-checked:max-h-40">
                    <div className="pl-3 py-3">
                      <span className="">{item.content}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="my-5 w-full justify-center items-center text-center">
          <button className="border border-blue-500 bg-sky-600 hover:bg-sky-700 text-lg text-white block rounded-full font-bold py-3 w-full  mr-2 ">
           <span>Search</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Filter;
