import React from 'react'

const CardShimmer = () => {
  return (
    <div className="xl:w-80 w-11/12 bg-[#DBDBDB] rounded-md min-h-72 flex flex-col font-raleway mb-5 justify-between relative skeleton-wrapper">
      <div className="mb-5">
        <div className="h-24 bg-[#EBEAEA] rounded-md ">
          <div></div>
        </div>
        <div className="absolute top-12 flex items-end px-3 gap-7">
          <div className="w-20 h-20 rounded-full bg-[#F4F2F2]"></div>
          <div className="w-28 h-3 bg-[#F4F2F2] rounded-md"></div>
        </div>
      </div>
      <div className="flex flex-col gap-2 px-2">
        <span className="flex items-center gap-6">
          <div className="w-7 h-7 rounded-full bg-[#EBEAEA]"></div>
          <div className="w-48 h-3 bg-[#EBEAEA] rounded-md"></div>
        </span>
        <span className="flex items-center gap-6">
          <div className="w-7 h-7 rounded-full bg-[#EBEAEA]"></div>
          <div className="w-40 h-3 bg-[#EBEAEA] rounded-md"></div>
        </span>
        <span className="flex items-center gap-6">
          <div className="w-7 h-7 rounded-full bg-[#EBEAEA]"></div>
          <div className="w-28 h-3 bg-[#EBEAEA] rounded-md"></div>
          <div className="w-7 h-7 rounded-full bg-[#EBEAEA]"></div>
          <div className="w-7 h-7 rounded-full bg-[#EBEAEA]"></div>
        </span>
      </div>
      <div className="bg-[#EBEAEA] rounded-md h-10 flex items-center">
        <div className="w-1/2 bg-[#EBEAEA] flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-[#DBDBDB]"></div>
          <div className="w-28 h-3 bg-[#DBDBDB] rounded-md"></div>
        </div>
        <div className="w-1/2 bg-[#EBEAEA] flex items-center gap-3 ">
          <div className="w-7 h-7 rounded-full bg-[#DBDBDB]"></div>
          <div className="w-28 h-3 bg-[#DBDBDB] rounded-md"></div>
        </div>
      </div>
      <div className="absolute shimmer-wrapper">
        <div className="shimmer"></div>
      </div>
    </div>
  )
}

export default CardShimmer
