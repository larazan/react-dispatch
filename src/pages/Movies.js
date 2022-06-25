import React from 'react'

import MovieList from '../components/MovieList'
import Search from '../components/Search'

const Movies = () => {
  return (
    <>
    <Search />
      <main className="relative px-0 z-9 ">
        <div className="top-10 px-5 py-3 mt-5">
            <MovieList />
        </div>
      </main>
    </>
  )
}

export default Movies