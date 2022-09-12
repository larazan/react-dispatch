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
        <div class=" h-72 flex items-center justify-center">
	<div class=" text-center">
		<div class="text-7xl text-blue-300 leading-5">”</div>
		<div class="font-medium max-w-xl text-xl">
			We know the ecosystem very well and they provides the speed, flexible account model and API-first approach
			that no one else can. These aspects are essential to building certain products that power our customers'
			growth.
		</div>
		<div class="mt-5">
			<span class="font-bold">Henrique Dubugras</span><span class="text-gray-500 font-medium"> — Co-Founder and CEO, Acme</span>
		</div>
	</div>
</div>
      </main>
    </>
  )
}

export default Home