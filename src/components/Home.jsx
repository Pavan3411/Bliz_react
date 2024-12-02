import React from 'react'
import SidePanel from './SidePanel'
import Dashboard from './Dashboard'

const Home = () => {
  return (
    <div className='flex bg-gray-100 justify-center overflow-hidden'>
      <div className='w-1/4 lg:basis-1/4 md:basis-1/4 hidden lg:block'>
      <SidePanel/>
      </div>
      <div className='lg:w-3/4 w-full mx-2'>
      <Dashboard/>
      </div>
    </div>
  )
}

export default Home