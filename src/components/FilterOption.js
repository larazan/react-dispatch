import React, { useState, useEffect } from "react";

const FilterOption = () => {
  const [selected, setSelected] = useState("");

  return (
    <>
      <div className="relative mt-1">
        <select
          className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
          aria-haspopup="listbox"
          aria-expanded="true"
          aria-labelledby="listbox-label"
          value={selected}
          onChange={(e) => {
            const selectedOpt = e.target.value;
            setSelected(selectedOpt);
          }}
        >
          <option
            value={""}
            className="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9"
          >
            <div className="flex items-center">
              <span className="font-normal ml-3 block truncate">Urutkan</span>
            </div>
          </option>
          <option
            value={"baru"}
            className="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9"
          >
            <div className="flex items-center">
              <span className="font-normal ml-3 block truncate">Paling baru</span>
            </div>
          </option>
          <option
            value={"lama"}
            className="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9"
          >
            <div className="flex items-center">
              <span className="font-normal ml-3 block truncate">Paling lama</span>
            </div>
          </option>
        </select>
      </div>
    </>
  );
};

export default FilterOption;
