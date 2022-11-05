import React from 'react'

import tags from "../assets/data/tags.json";

const Tags = () => {
  return (
    <>
      <div className="py-5 border-b pb-8 border-gray-200">
        <div className="flex-col space-y-2">
          <div>
            <span className="font-bold text-md">Kata kunci</span>
          </div>
          <div className="">
            <div className="flex-inline">
              {tags.map((tag, id) => (
                <button
                  key={id}
                  className="bg-[#5aa3ed] text-white rounded-sm hover:bg-blue-500 leading-none px-1.5 py-0.5 mr-1 mb-1"
                >
                  <span className="text-sm ">{tag.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tags