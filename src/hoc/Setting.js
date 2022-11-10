import React from "react";
import Avatar from "react-avatar";
import { Outlet, Link } from "react-router-dom";
import { useOnClickOutside } from "../hooks/useOnClickOutside";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Setting(props) {

  const renderContent = () => {
    return (
      <main className="bg-[#1f364d] bg-opacity-252">
        <div className="flex flex-col translate-x-0 mt-5 pb-8 translate-x-0">
          <div className="relative w-full">
            {/* <img
            className="w-full md:w-full h-full  md:object-cover"
            src="https://preview.cruip.com/mosaic/images/profile-bg.jpg"
            width="979"
            height="420"
            alt="Profile background"
          /> */}
            <button
              className="absolute left-2 block md:hidden text-white top-0 -mt-2 cursor-pointer"
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

          <div className="px-2  relative">
            <div className="mb-1">
              <div className="hidden md:flex flex-col md:flex-row w-full px-2 md:px-4 items-center">
                <div className="md:w-1/4 ">
                  {/* <img
                  className="rounded-full border-8 border-[#284057]"
                  src="https://preview.cruip.com/mosaic/images/user-128-01.jpg"
                  width="158"
                  height="158"
                  alt="Avatar"
                /> */}
                  <Avatar
                    name={"Selena gomes"}
                    size={"140"}
                    round={true}
                    textSizeRatio={3}
                  />
                </div>

                <div className="w-3/4 ">
                  <div className="flex flex-col space-y-3">
                    <div className="text-2xl text-[#b6cce2]">
                      <span className="font-semibold text-white">
                        @vincepolston
                      </span>{" "}
                      Vince Polston
                    </div>
                    
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:hidden w-full px-2 space-y-4">
                <div className="flex justify-center items-center w-full space-x-3">
                  <div>
                    {/* <img
                  className="rounded-full border-8 border-[#284057]"
                  src="https://preview.cruip.com/mosaic/images/user-128-01.jpg"
                  width="158"
                  height="158"
                  alt="Avatar"
                /> */}
                    <Avatar
                      name={"Selena gomes"}
                      size={"80"}
                      round={true}
                      textSizeRatio={3}
                    />
                  </div>
                  <div>
                    <div className="text-lg text-[#b6cce2] leading-tight">
                      <span className="font-semibold text-white capitalize">
                        selena gomes
                      </span>
                      <br />
                      <span className="text-white text-sm text-[#b2b7b8] font-semibold">
                        Anggota sejak juni 2022
                      </span>
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
