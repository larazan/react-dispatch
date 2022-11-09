import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import RatingChart from '../components/RatingChart'
import WatchChart from '../components/WatchChart'
import Medsos from "../components/Medsos";

import { UserData } from "../assets/data/users";
import NewActivity from '../components/NewActivity';

const Overview = () => {
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
      <main className="container mx-auto mb-20 px-3">
        <div className="flex flex-col space-y-6 min-h-full relative md:py-4">
          <div></div>
          <div>
            <div className="py-1">
              <span className="text-md md:text-xl font-semibold">
                Statistik
              </span>
            </div>
            <div>
              <div className="grid grid-flow-row gap-5 md:gap-8 grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
                <div className="flex flex-col space-y-2">
                  <div>
                    <span className="text-md">Jumlah Suntingan</span>
                  </div>
                  <div>
                    <span className="text-4xl font-semibold">1M</span>
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <div>
                    <span className="text-md">Total rating</span>
                  </div>
                  <div>
                    <span className="text-4xl font-semibold">1088</span>
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <div>
                    <span className="text-md">Rating Overview</span>
                  </div>
                  <div className="">
                    <div className="w-72 md:w-80">
                      <RatingChart chartData={userData} />
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex flex-col space-y-2">
                  <div>
                    <span className="text-md">Most Watched Genres</span>
                  </div>
                  <div className="mx-auto">
                    <div className="w-60">
                      <WatchChart chartData={userData} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:hidden flex flex-col space-y-2 mt-8">
                <div>
                  <span className="text-md">Most Watched Genres</span>
                </div>
                <div className="">
                  <div className="w-52">
                    <WatchChart chartData={userData} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="py-3">
              <span className="md:text-xl font-semibold">
                Yang akan datang dari daftar tonton
              </span>
            </div>
          </div>
          <div>
            <div className="py-3">
              <span className="md:text-xl font-semibold">Diskusi Terbaru</span>
              {/* <Medsos /> */}
              <div className="pt-1">
                <div className="drop-shadow-md">
                  <div className="flex w-full justify-between bg-white border rounded shadow-sm px-3 md:px-3 py-3">
                    <span className="text-sm">
                      Kamu tidak mengikuti diskusi manapun.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <NewActivity />
          </div>
        </div>
      </main>
    </>
  );
}

export default Overview