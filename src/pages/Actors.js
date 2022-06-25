import React from 'react'

import ActorList from '../components/ActorList'

const Actors = () => {
  return (
    <>
        <main className="relative px-0 z-9 ">
        <div className="top-10 px-5 py-3 mt-5">
            <ActorList />
        </div>
        </main>
    </>
  )
}

export default Actors