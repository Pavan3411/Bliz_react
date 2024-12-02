import React from 'react'
import { assets, icons } from '../assets/assets'

const Contact = ({ onClose }) => {
  const { CrossIcon, PlusIcon } = icons

  const handleWheel = (e) => {
    e.preventDefault()
    
  }
  return (
    <div className="absolute z-10 top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div
        className="bg-white rounded-lg shadow-2xl lg:w-1/2 md:w-1/2 w-2/3 relative z-20 transition-transform duration-200"
        onWheel={handleWheel}
      >
        <div className="flex flex-col justify-center w-full text-xs lg:text-base md:text-base">
          <div className="flex justify-between items-center bg-blue-700 w-full px-4 py-3 rounded-t-lg p-2">
            <img src={assets.Modal_logo} alt="Logo" className="w-8 h-8" />
            <h1 className="text-white md:text-lg sm:text-sm text-[13px] font-semibold">
              CONTACT PERSON DETAILS
            </h1>
            <CrossIcon
              className="text-white cursor-pointer"
              onClick={onClose}
            />
          </div>

          <div className="flex flex-col gap-2 mt-4 px-5">
            <span className="grid grid-cols-2 gap-4 ">
              <span>
                <label htmlFor="FName">First Name</label>
                <span className='flex'>
                  <select
                    className="border border-gray-300 p-2 border-r-0 focus:outline-none hidden sm:block"
                    name="salutation"
                    id="salutation"
                  >
                    <option value="mr">Mr.</option>
                    <option value="mrs">Mrs.</option>
                    <option value="ms">Ms.</option>
                  </select>
                  <input
                    type="text"
                    className="w-full border border-gray-300 p-2 focus:outline-none "
                  />
                </span>
              </span>
              <span>
                <label htmlFor="LName">Last Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 p-2 focus:outline-none"
                />
              </span>
            </span>
            <span className="grid grid-cols-2 gap-4">
              <span>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 p-2 focus:outline-none"
                />
              </span>
              <span>
                <label htmlFor="number">Phone Number</label>
                <span className='flex'>
                <select
                    className="border border-gray-300 p-2 border-r-0 focus:outline-none hidden sm:block"
                    name="salutation"
                    id="salutation"
                  >
                    <option value="61">+61</option>
                    <option value="62">+62</option>
                    <option value="63">+63</option>
                  </select>
                <input
                  type="number"
                  className="w-full border border-gray-300 p-2 focus:outline-none"
                />
                </span>
              </span>
            </span>
          </div>

          <div className="flex justify-end gap-4 mt-4 sm:text-sm pr-4 mb-4">
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full  flex items-center gap-2 hover:bg-gray-300">
              <CrossIcon className="w-5 h-5" />
              Cancel
            </button>
            <button className="bg-blue-700 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-blue-800">
              <PlusIcon className="w-5 h-5" />
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
