import React from 'react'
import { assets, icons } from '../assets/assets'

const Invite = ({ onclose }) => {
  const { CrossIcon,} = icons

  const handleWheel = (e) => {
    e.preventDefault()
    
  }
  return (
    <div className="absolute z-10 top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div
        className="bg-white shadow-2xl relative z-20 transition-transform duration-200"
        onWheel={handleWheel}
      >
        <div className="flex flex-col justify-center w-full">
          <div className="flex justify-between items-center bg-darkRed w-full px-4 py-2 p-2">
            <img src={assets.App_Logo} alt="Logo" className="w-12 h-7" />
            <h1 className="text-white text-lg font-semibold">
              INVITE BUYER/SUPLLIER
            </h1>
            <CrossIcon
              className="text-white cursor-pointer"
              onClick={onclose}
            />
          </div>    

          <div className="flex flex-col mt-4 px-5">
            <span className="grid grid-cols-[1fr,1fr] gap-10">
                <div className='border-[1px] flex justify-around p-1    '>
                    <span>
                    <input type="checkbox" className='' /></span>
                    <span className=''>
                        <img src={assets.three_user} alt=""  className='lg:w-24 lg:h-24 md:w-24 md:h-24 w-16 h-16 '/>
                    <label htmlFor="buyer" className='font-semibold'>Buyer</label></span>

                </div>
                <div className='border-[1px] flex justify-around p-1'>
                    <span>
                    <input type="checkbox" className='' /></span>
                    <span className=''>
                        <img src={assets.supplier_dash} alt="" className='lg:w-24 lg:h-24 md:w-24 md:h-24 w-16 h-16'/>
                    <label htmlFor="buyer" className='font-semibold'>Supplier</label></span>

                </div>
            </span>
            <span className="grid grid-cols-[3fr,1fr] gap-3 items-center justify-between py-2">
            <div>
                <input type="text" className='border-[1px] h-6 w-full' />
            </div>
            <span className='flex justify-end'>
            <button className='bg-lightRed text-white font-semibold h-6 w-11/12'>
                Invite
            </button></span>
            </span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Invite
