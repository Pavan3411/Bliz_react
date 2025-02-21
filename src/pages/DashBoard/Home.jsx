import React from 'react'
import SidePanel from '@reusables/SidePanel'
import Dashboard from '@pages/DashBoard/Dashboard'

const Home = () => {
  return (
    <div className="flex gap-5 w-full justify-center overflow-hidden px-5">
      <div className=" lg:basis-1/4 md:basis-1/4 hidden lg:block">
        <SidePanel />
      </div>
      <div className="w-full">
        <Dashboard />
      </div>
    </div>
  )
}

export default Home
