import React from 'react'
import SidePanel from './SidePanel'

const Quotes = () => {
  return (
    <div className='flex bg-grayBg justify-center w-full gap-5 overflow-hidden px-5'>
      <div className='w-1/4 lg:basis-1/4 md:basis-1/4 hidden lg:block'>
      <SidePanel/>
      </div>
      <div className='w-full bg-white mt-5 p-4 rounded-md'>
      Quotes 
      </div>
    </div>
  )
}

export default Quotes