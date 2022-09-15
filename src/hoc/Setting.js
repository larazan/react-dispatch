import React from "react";
import Avatar from "react-avatar";
import { Outlet, Link } from "react-router-dom";


function Setting(props) {

  const renderContent = () => {
    return (
      <main className="bg-[#1f364d] bg-opacity-252">
      <div className="flex flex-col translate-x-0 mt-5 translate-x-0">
        <div className="relative w-full">
          {/* <img
            className="w-full md:w-full h-full  md:object-cover"
            src="https://preview.cruip.com/mosaic/images/profile-bg.jpg"
            width="979"
            height="420"
            alt="Profile background"
          /> */}
          <button
            className="absolute left-2 block md:hidden text-white top-2 cursor-pointer"
            aria-controls="profile-sidebar"
            aria-expanded="false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 17l-5-5m0 0l5-5m-5 5h12"
              />
            </svg>
          </button>
        </div>

        <div className="px-2 pb-5 relative">
          <div className="mb-1 ">
            <div className="flex flex-row w-full px-2 md:px-4 items-center">
              <div className="w-1/4 ">
                <img
                  className="rounded-full border-8 border-[#284057]"
                  src="https://preview.cruip.com/mosaic/images/user-128-01.jpg"
                  width="128"
                  height="128"
                  alt="Avatar"
                />
              </div>

              <div className="w-3/4 ">
                <div className="flex flex-col space-y-3">
                  <div className="text-2xl text-[#b6cce2]">
                    <span className="font-semibold text-white">@vincepolston</span> Vince Polston
                  </div>
                 
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
      
    </main>
    );
  };

  return (
    <>
      <div className="flex flex-col min-h-screen">
        {renderContent()}
        <Outlet />
      </div>
    </>
  );
}

export default Setting;
