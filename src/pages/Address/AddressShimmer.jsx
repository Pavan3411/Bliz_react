import React, { useContext } from 'react'
import UserContext from '@context/UserContext'

const AddressShimmer = () => {
  // Create an array of the number of skeleton items you want to render
  const { addressDataLength } = useContext(UserContext)
  const skeletonItems = new Array(5).fill(null)

  return (
    <div className="grid grid-cols-2 gap-4 mb-5">
      {skeletonItems.map((_, index) => (
        <div key={index} className="relative skeleton-wrapper">
          <div className="rounded-md">
            <div className="flex justify-between items-center p-2 bg-[#E7E7E7] rounded-t-md">
              <div className="w-44 h-3 bg-[#F4F2F2] rounded-md"></div>
              <div className="flex gap-2">
                <div className="w-7 h-7 rounded-full bg-[#D9D9D9]"></div>
                <div className="w-7 h-7 rounded-full bg-[#D9D9D9]"></div>
                <div className="w-7 h-7 rounded-full bg-[#D9D9D9]"></div>
              </div>
            </div>
            <div className="bg-[#D9D9D9] p-2 py-5 flex flex-col gap-5 rounded-b-md">
              <div className="w-96 h-4 bg-[#E7E7E7] rounded-md"></div>
              <div className="w-52 h-4 bg-[#E7E7E7] rounded-md"></div>
            </div>
          </div>
          <div className="absolute shimmer-wrapper">
            <div className="shimmer"></div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AddressShimmer
