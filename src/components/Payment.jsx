import React, {useState} from 'react';
import SidePanel from './SidePanel';
import { assets,icons } from '../assets/assets';
import { Link } from 'react-router-dom';

const Payment = () => {
    const {SearchIcon,FilterIcon,NoteIcon} = icons

    const [activeTab, setActiveTab] = useState(0);
    const [isOpen, setIsOpen] = useState(true);

    const handleToggle = () => {
        setIsOpen(!isOpen);
      };

  const tabs = [
    { label: "Processing ( 1 )" },
    { label: "Completed ( 0 )" },
    { label: "Expired ( 0 )" },
    { label: "Quotes ( 0 )" },
  ];
  return (
    <div className='flex bg-gray-100 overflow-hidden'>
        <div className='w-1/4 lg:basis-1/4 md:basis-1/4 hidden lg:block'>
        <SidePanel/>
        </div>
        <div className='lg:w-3/4 md:3/4 w-full mt-2 p-1 lg:p-3 md:p-3 mr-3'>
        <div className='flex flex-col sm:flex-row sm:justify-between bg-white shadow-lg p-4 w-full sm:items-center'>
            <h1 className='font-bold text-lg sm:text-xl text-blue-700'>PAYMENT</h1>
            <div className='flex space-x-3 justify-between mt-2 sm:mt-0'>
                <span className='relative'>
                <input type="text" placeholder='Search' className='rounded-full border-[1px] border-gray-200 p-2 focus:outline-none placeholder:text-center placeholder:text-sm w-28' />
                <SearchIcon className='absolute top-3 left-2 text-gray-400 w-5 h-5'/>
                </span>
                <span>
                <button className='rounded-full border-[1px] border-gray-200 p-[10px] flex items-center justify-center gap-2'>
                    <FilterIcon className='w-5 h-5'/>
                    <p className='text-sm'>Filter</p>
                    </button></span>
                <button className='text-white px-3 font-medium border-[1px] bg-blue-700 p-2 rounded-full flex gap-2 items-center'>
                    <NoteIcon className='w-6 h-6'/>
                    <Link to='/rfq-form' className='text-xs lg:text-base whitespace-nowrap'>Post a New RFQ</Link>
                </button>
            </div>
        </div>
        <div className='bg-white shadow-lg p-2 mt-3 '>
        <div className="flex gap-4 text-gray-600 font-medium text-[13px] mt-5 px-2 ">
      {tabs.map((tab, index) => (
        <p
          key={index}
          onClick={() => setActiveTab(index)}
          className={`cursor-pointer pb-1 text-xs lg:text-sm md:text-sm ${
            activeTab === index ? "border-b-2 border-blue-700 text-blue-700" : ""
          }`}
        >
          {tab.label}
        </p>
      ))}
    </div>
    <div className='overflow-x-auto scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-100 lg:w-full md:w-full'>
        <hr className=' bg-gray-500 h-[2px] w-[130%] lg:w-full md:w-full mt-4'/>
        <div className='text-gray-400 overflow-x-auto text-sm grid grid-cols-[0.2fr,repeat(4,1fr)] mt-4 items-center font-semibold p-2 w-[130%] lg:w-full md:w-full'>
            <input type='checkbox' className='border-[1px] border-gray-500 w-4 h-4'/>
            <p>Account Name</p>
            <p className='flex justify-center'>No. of Quotes</p>
            <p className='flex justify-center'>Total Value</p>
            <p className='flex justify-end pr-8'>Status</p>
        </div>
            <div className='border-[1px] border-gray-300 w-[130%] lg:w-full md:w-full'>
            <div className='text-sm grid grid-cols-[0.2fr,repeat(4,1fr)] items-center font-semibold border-b-[1px]  p-2 border-gray-300 bg-blue-50' onClick={handleToggle}>
            <input type='checkbox' className='border-[1px] border-gray-500 w-4 h-4'/>
            <p>Budi Hariman</p>
            <p className='flex justify-center'>2</p>
            <p className='flex justify-center'>Rp.300,000,000</p>
            <span className='flex justify-end pr-3'>
            <button className='bg-blue-100 text-blue-900 font-semibold rounded-full text-[10px] border-[1px] border-blue-300 w-16 h-4 flex justify-center items-center'>processing</button></span>
        </div>
        {isOpen && (
            <div>
        <div className='flex justify-between items-center mx-3 px-3 p-2'>
        <h1 className='text-blue-700 font-bold'>
        Payment Details
        </h1>
        <span className='flex items-center gap-2'>
        <input type='checkbox' className='border-[1px] border-gray-500 w-4 h-4'/>
        <p className='text-sm'>Select All</p>
        </span>
    </div>
    <span className='flex justify-center'>
    <hr className=' border-gray-300 h-[1px] mt-1 w-[97%]'/></span>
    <div className='text-[13px] grid grid-cols-[0.3fr,repeat(4,1fr)] mt-1 mx-3 items-center font-semibold p-2'>
        <input type='checkbox' className='border-[1px] border-gray-500 w-4 h-4'/>
        <span className=''>
            <p className='text-blue-700 mb-[2px]'>Quote Number</p>
            <p>BTN-1607</p>
        </span>
        <span>
            <p className='text-blue-700 mb-[2px]'>Products</p>
            <p>Steel</p>
        </span>
        <span>
            <p className='text-blue-700 mb-[2px] justify-self-center'>Payment terms</p>
            <button className='bg-red-100 text-red-900 border-[1px] border-red-300 text-[9px] font-semibold rounded-full flex justify-center items-center w-8 h-4 justify-self-center -ml-5 sm:ml-0'>LC</button>
        </span>
        <span>
            <p className='text-blue-700 v'>Total Price</p>
            <p>Rp. 6,141,892,00</p>
        </span>
    </div>
    <span className='flex justify-center'>
    <hr className='border-gray-300 h-[1px] mt-1 mb-2 w-[97%]'/></span>
    <div className='text-[13px] grid grid-cols-[0.3fr,repeat(4,1fr)] mt-1 mx-3 items-center font-semibold p-2'>
        <input type='checkbox' className='border-[1px] border-gray-500 w-4 h-4'/>
        <span className=''>
            <p className='text-blue-700 mb-[2px]'>Quote Number</p>
            <p>BTN-1607</p>
        </span>
        <span>
            <p className='text-blue-700 mb-[2px]'>Products</p>
            <p>5 Products</p>
        </span>
        <span>
            <p className='text-blue-700 mb-[2px] justify-self-center'>Payment terms</p>
            <button className='bg-blue-50 text-blue-900 text-[9px] border-[1px] border-blue-200 font-semibold rounded-full flex justify-center items-center w-12 h-4 justify-self-center -ml-5 sm:ml-0'>SKBDN</button>
        </span>
        <span>
            <p className='text-blue-700 v'>Total Price</p>
            <p>Rp. 6,141,892,00</p>
        </span>
    </div>
    <span className='flex justify-center'>
    <hr className='border-gray-300 h-[1px] mt-1 mb-3 w-[97%]'/></span>
    </div>
        )}
        <div className="">
        {activeTab === 0 && (
          <div>
            <h2 className="px-4 p-2">Processing Content</h2>
            
          </div>
        )}
        {activeTab === 1 && (
          <div>
            <h2 className="px-4 p-2">Completed Content</h2>
            
          </div>
        )}
        {activeTab === 2 && (
          <div>
            <h2 className="px-4 p-2">Expired Content</h2>
            
          </div>
        )}
        {activeTab === 3 && (
          <div>
            <h2 className="px-4 p-2">Quotes Content</h2>
        
          </div>
        )}
      </div>

            </div>
            <span className='flex justify-center'><hr className='border-gray-300 h-[1px] mt-8 mb-2 w-[97%]'/></span>  
        </div>
        </div>
        </div>
    </div>
  )
}

export default Payment