import React, {useState} from 'react'
import SidePanel from './SidePanel'
import { assets, icons } from '../assets/assets'
import Toggle from './toggle';
import {
  CitySelect,
  CountrySelect,
  StateSelect,
  LanguageSelect,
  RegionSelect,
  PhonecodeSelect
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";

const Address = () => {
  const {LocationIcon,EditFillIcon,DeleteFillIcon,CrossIcon} = icons;
  const [countryid, setCountryid] = useState(0);
  const [stateid, setstateid] = useState(0);


  const [editable, setEditable] = useState(false)
  return (
    <div className="flex bg-gray-100">
      <div className="w-1/4 lg:basis-1/4 md:basis-1/4 hidden lg:block h-screen sticky top-0">
        <SidePanel />
      </div>

      <div className="lg:w-3/4 w-full mx-2 m-4 overflow-y-auto h-screen">
        <div className='w-full py-2 bg-gray-200 justify-between flex px-5 items-center mb-4'>
          <h1 className='font-semibold text-lg'>Addresses</h1>
          <button className='border-2 border-black rounded-md text-semibold flex items-center text-black  gap-2 p-1 text-sm bg-transparent'>
            <LocationIcon className='text-lightRed text-lg'/>
            <p>Add a New Address</p>
          </button>
        </div>
        <div className='grid grid-cols-2 gap-4 px-5'>
          <div className=''>
            <div className=' flex justify-between bg-fadeRed items-center text-base p-2 border-gray-300 border-2 '>
              <span>
              <p className='text-base font-semibold'>Name</p></span>
              <span className='flex gap-2'>
              <Toggle className='w-5 h-5'/>
              <EditFillIcon className='w-5 h-5' onClick={()=> {
                setEditable(true)
              }}/>
              <DeleteFillIcon className='w-5 h-5'/>
              </span>
            </div>
            <div className='flex flex-col space-y-2 p-2 border-gray-300 border-2 border-t-0'>
              <p>Address 1</p>
              <p>Address 2</p>
            </div>
          </div>
          <div className=''>
            <div className=' flex justify-between bg-fadeRed items-center text-base p-2 border-gray-300 border-2 '>
              <span>
              <p className='text-base font-semibold'>Name</p></span>
              <span className='flex gap-2'>
              <Toggle className='w-5 h-5'/>
              <EditFillIcon className='w-5 h-5'/>
              <DeleteFillIcon className='w-5 h-5'/>
              </span>
            </div>
            <div className='flex flex-col space-y-2 p-2 border-gray-300 border-2 border-t-0'>
              <p>Address 1</p>
              <p>Address 2</p>
            </div>
          </div>
          <div className=''>
            <div className=' flex justify-between bg-fadeRed items-center text-base p-2 border-gray-300 border-2 '>
              <span>
              <p className='text-base font-semibold'>Name</p></span>
              <span className='flex gap-2'>
              <Toggle className='w-5 h-5'/>
              <EditFillIcon className='w-5 h-5'/>
              <DeleteFillIcon className='w-5 h-5'/>
              </span>
            </div>
            <div className='flex flex-col space-y-2 p-2 border-gray-300 border-2 border-t-0'>
              <p>Address 1</p>
              <p>Address 2</p>
            </div>
          </div>
        </div>
        {editable && (
          <div className='fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50'>
            <div className='bg-white shadow-lg w-2/4'>
              <div className='p-2 flex justify-between bg-gray-100 items-center'>
                <h1 className='font-semibold text-lg text-lightRed'>Edit a Address</h1>
                <CrossIcon className='w-6 h-6 text-lightRed' onClick={()=> setEditable(false)} />
              </div>
              <hr className='w-full border-[1px] border-gray-200' />
              <div className='p-2'>
                <span className='input-group'>
                <label htmlFor="address" className=''>Address</label>
                <input type="text" name='address' id='address' className='' required/></span>
                <span className='flex flex-col'>
                <label htmlFor="address1">Address</label>
                <input type="text" placeholder='Address'/></span>
              </div>
              <div>
              {/* <h6>Country</h6>
      <CountrySelect
        onChange={(e) => {
          setCountryid(e.id);
          console.log(e);
          
        }}
        placeHolder="Select Country"
        
      />
      <h6>State</h6>
      <StateSelect
      disabled={!countryid}
        countryid={countryid}
        onChange={(e) => {
          setstateid(e.id);

          
        }}
        placeHolder="Select State"
      />
      <h6>City</h6>
      <CitySelect
      disabled={!stateid}
        countryid={countryid}
        stateid={stateid}
        onChange={(e) => {
          console.log(e);
        }}
        placeHolder="Select City"
      /> */}
                save
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
  
}

export default Address
