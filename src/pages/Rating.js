import React, { useState } from 'react'

import RatingChart from '../components/RatingChart'
import { UserData } from "../assets/data/users";

const Rating = () => {
  const [openTab, setOpenTab] = useState(1);
  const [color, setColor] = useState("green");
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <>
      <main className="container mx-auto mb-20">
        <div className="flex flex-col space-y-6 min-h-full relative py-4">
          <div>
            <div className="py-1">
              <span className="text-xl font-semibold">
                Rating berdasarkan tahun
              </span>
            </div>
            <div className="">
              <div className="w-80">
                <RatingChart chartData={userData} />
              </div>
            </div>
          </div>
          <div>
            <div className="py-1">
              <span className="text-xl font-semibold">Rating saya</span>
            </div>
            <div className="flex justify-between w-full items-center">
              <ul
                className="flex mb-0 list-none flex-row2 border-b justify-start"
                role="tablist"
              >
                <li
                  className={
                    "-mb-px mr-2 last:mr-0 flex-auto2 text-center " +
                    (openTab === 1 ? "border-b-4 border-indigo-400" : "")
                  }
                >
                  <a
                    className="text-sm font-bold px-5 py-2 block leading-normal"
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(1);
                    }}
                    data-toggle="tab"
                    href="#link1"
                    role="tablist"
                  >
                    <div className="flex flex-col items-center hidden md:flex">
                      <span className="text-md font-semibold text-gray-800">
                        Film
                      </span>
                    </div>
                  </a>
                </li>
                <li
                  className={
                    "-mb-px mr-2 last:mr-0 flex-auto2 text-center " +
                    (openTab === 2 ? "border-b-4 border-indigo-400" : "")
                  }
                >
                  <a
                    className="text-sm font-bold px-5 py-2 block leading-normal"
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(2);
                    }}
                    data-toggle="tab"
                    href="#link2"
                    role="tablist"
                  >
                    <div className="flex flex-col items-center hidden md:flex">
                      <span className="text-md font-semibold text-gray-800">
                        TV
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
              <div>
                <span>urutkan</span>
              </div>
            </div>
            <div className="tab-content tab-space">
              <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                tab 1
              </div>
              <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                tab 2
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Rating