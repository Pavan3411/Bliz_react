import React, { useState, useEffect } from 'react'
import { assets } from '../assets/assets'

const AddressPopup = ({
    popUp,
  setPopUp,
  selectedAddressId,
  handleSetPrimaryAddress,
  deletePopUp,
setDeletePopUp,
handleDeleteAddress,
primaryCheck,
setPrimaryCheck,

}) => {
  const [isScaled, setIsScaled] = useState(false)
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])
  console.log("selected address id", selectedAddressId);
  
  const handleWheel = (e) => {
    e.preventDefault()
    setIsScaled(true)
    setTimeout(() => setIsScaled(false), 200)
  }
  return (
    <div className="absolute z-10 top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
{popUp && (
    <div
    className={`bg-white rounded-md shadow-2xl relative z-20 transition-transform duration-200 py-5 flex flex-col gap-3 px-6 ${
      isScaled ? 'scale-110' : 'scale-100'
    }`}
    onWheel={handleWheel}
  >
    <div className="flex justify-center">
      <img src={assets.surePng} alt="" />
    </div>
    <div className="flex flex-col items-center gap-1">
      <h1 className="text-2xl text-black font-bold">Are you sure?</h1>
      <p className="text-lg text-grayTitle ">
        This address will be set as primary address.
      </p>
    </div>
    <div className="flex justify-end gap-2">
      <button
        className="bg-gray-500 rounded-md flex items-center text-black gap-1 p-2"
        onClick={() => setPopUp(false)}
      >
        <p className="text-white">Cancel</p>
      </button>
      <button
        className="bg-lightRed rounded-md flex items-center text-black gap-1 p-2 px-4"
        onClick={() => {
          handleSetPrimaryAddress(selectedAddressId)
          setPopUp(false)
        }}
      >
        <p className="text-white">OK</p>
      </button>
    </div>
  </div>
)}
      {deletePopUp && (
       <div
       className={`bg-white rounded-md shadow-2xl relative z-20 transition-transform duration-200 py-5 flex flex-col gap-3 px-6 ${
         isScaled ? 'scale-110' : 'scale-100'
       }`}
       onWheel={handleWheel}
     >
       <div className="flex justify-center">
         <img src={assets.binPng} alt="" />
       </div>
       <div className="flex flex-col items-center gap-1">
         <h1 className="text-2xl text-black font-bold">Are you sure?</h1>
         <p className="text-lg">
         Once deleted, you will not be able to recover this.
         </p>
       </div>
       <div className="flex justify-end gap-2">
         <button
           className="bg-gray-500 rounded-md flex items-center text-black gap-1 p-2"
           onClick={() => setDeletePopUp(false)}
         >
           <p className="text-white">Cancel</p>
         </button>
         <button
           className="bg-lightRed rounded-md flex items-center text-black gap-1 p-2 px-4"
           onClick={() => {
            handleDeleteAddress(selectedAddressId)
             setDeletePopUp(false)
           }}
         >
           <p className="text-white">OK</p>
         </button>
       </div>
     </div>
      )}
      {primaryCheck && (
        <div
        className={`bg-white rounded-md shadow-2xl relative z-20 transition-transform duration-200 py-5 flex flex-col gap-3 px-6 ${
          isScaled ? 'scale-110' : 'scale-100'
        }`}
        onWheel={handleWheel}
      >
        <div className="flex justify-center">
          <img src={assets.surePng} alt="" />
        </div>
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-2xl text-black font-bold">Are you sure?</h1>
          <p className="text-lg">
          First set another address as a primary address!
          </p>
        </div>
        <div className="flex justify-end gap-2">
        
          <button
            className="bg-lightRed rounded-md flex items-center text-black gap-1 p-2 px-4"
            onClick={() => {
              setPrimaryCheck(false)
            }}
          >
            <p className="text-white">OK</p>
          </button>
        </div>
      </div>
      )}
    </div>
  )
}

export default AddressPopup
