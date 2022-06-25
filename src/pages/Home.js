import React from 'react'

import Jumbotron from '../components/Jumbotron'
import NewsHome from '../components/NewsHome'

const Home = () => {
  return (
    <>
      <Jumbotron />
      <main className="relative px-8 z-9 ">
        <div className="top-10 px-5 py-3 mt-5">
            <NewsHome />
        </div>
      </main>
    </>
  )
}

export default Home