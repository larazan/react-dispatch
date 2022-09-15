import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import RatingChart from '../components/RatingChart'
import WatchChart from '../components/WatchChart'

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
    <main className='container mx-auto mb-20'>
      <div className='flex flex-col space-y-6 min-h-full relative py-4'>
        <div>
          <div className='py-1'>
            <span className='text-xl font-semibold'>Statistik</span>
          </div>
          <div>
          <div className='grid grid-flow-row gap-8 grid-cols-3 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4'>
            <div className='flex flex-col space-y-2'>
              <div>
                <span className='text-md'>Jumlah Suntingan</span>
              </div>
              <div>
                <span className='text-4xl font-semibold'>
                  1M
                </span>
              </div>
            </div>
            <div className='flex flex-col space-y-2'>
              <div>
                <span className='text-md'>Total rating</span>
              </div>
              <div>
                <span className='text-4xl font-semibold'>
                  1088
                </span>
              </div>
            </div>
            <div className='flex flex-col space-y-2'>
              <div>
                <span className='text-md'>Rating Overview</span>
              </div>
              <div className=''>
                <div className='w-80' >
                  <RatingChart chartData={userData} />
                </div>
              </div>
            </div>
            <div className='flex flex-col space-y-2'>
              <div>
                <span className='text-md'>Most Watched Genres</span>
              </div>
              <div className='mx-auto'>
                <div className='w-60'>
                  <WatchChart chartData={userData} />
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div>
          <div className='py-3'>
            <span className='text-xl font-semibold'>Yang akan datang dari daftar tonton</span>
          </div>
        </div>
        <div>
          <div className='py-3'>
            <span className='text-xl font-semibold'>Diskusi Terbaru</span>
          </div>
        </div>
        <div>
          <div className='py-3 flex justify-between items-center'>
            <span className='text-xl font-semibold'>Aktivitas terbaru</span>
            <div>
            <Link to={"movies"}>
              <div className="flex items-center">
                <span className="font-semibold text-sm">View All</span>
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
            </Link>
          </div>
          </div>
          <div>
            <NewActivity />
          </div>
        </div>
      </div>
      </main>
    </>
  )
}

export default Overview