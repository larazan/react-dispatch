import React from "react";

const Breadcrumb = () => {
  return (
    <>
      <div className="flex items-center">
        <ol className="flex items-center w-full space-x-2 overflow-hidden">
          <li className="text-sm text-body transition duration-200 ease-in first:ps-0 last:pe-0 hover:text-heading">
            <a href="/">Home</a>
          </li>

          <li className="text-base text-body mt-0.5 ">/</li>

          <li className="text-sm text-body transition duration-200 ease-in first:ps-0 last:pe-0 hover:text-heading ">
            <a className="capitalize" href="">
              Hanna Hijab Blus Cassey Wanita 090922
            </a>
          </li>
        </ol>
      </div>
    </>
  );
};

export default Breadcrumb;
