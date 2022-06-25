import React from 'react'

import NewsList from '../components/NewsList' 
import Search from '../components/Search'

const News = () => {
  return (
    <>
        <Search />
       <main className="relative px-8 z-9 ">
        <div className="top-10 px-5 py-3 mt-5">
            <NewsList />
        </div>
      </main>
    </>
  )
}

export default News