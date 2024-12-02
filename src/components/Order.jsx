import React, {useState} from 'react'
import SidePanel from './SidePanel'
import { assets, icons } from '../assets/assets'
import { Link } from 'react-router-dom'

const Order = () => {
    const {NoteIcon,SearchIcon,FilterIcon,ThreeDotsIcon,User2Icon,EditIcon,TickIcon,TruckIcon,PaymentIcon,ChatIcon,PrintIcon,CrossIcon,BriefCaseIcon} = icons
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
        <div className='w-1/4 md:w-1/4 xl:basis-1/4 hidden lg:block'>
        <SidePanel/>
        </div>
        <div className='lg:w-3/4 w-full mt-2 p-1 lg:p-3 md:p-3 mr-3'>
        <div className='flex flex-col sm:flex-row sm:justify-between  bg-white shadow-lg p-4 w-full sm:items-center'>
            <h1 className='font-bold text-lg sm:text-xl text-blue-700'>Order</h1>
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
        <div className='bg-white shadow-lg px-2 py-3 pb-6 mt-4 mb-5 '>
        <div className="flex gap-4 text-gray-600 font-medium text-sm mt-5 px-2">
      {tabs.map((tab, index) => (
        <p
          key={index}
          onClick={() => setActiveTab(index)}
          className={`cursor-pointer pb-1 text-[13px] md:text-sm ${
            activeTab === index ? "border-b-2 border-blue-700 text-blue-700" : ""
          }`}
        >
          {tab.label}
        </p>
      ))}
    </div>
    <div className='overflow-x-auto lg:overflow-hidden md:overflow-hidden scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-100  w-full'>
        <hr className=' bg-gray-500 h-[2px] w-[140%] lg:w-full md:w-full mt-3'/>
    <div className='text-gray-400 xl:text-sm text-[13px] grid sm:grid-cols-[0.2fr,1fr,1.5fr,2fr,1fr] grid-cols-[0.2fr,1fr,1.5fr,2fr,1fr] mt-4 md:mx-2 mx-0 items-center font-semibold p-2 w-[140%] lg:w-full md:w-full'>
            <input type='checkbox' className='border-[1px] border-gray-500 w-4 h-4'/>
            <p className=''>Order No.</p>
            <p className=''>Date of Order</p>
            <p className='whitespace-nowrap '>Expected Date of Completion</p>
            <p className=''>Status</p>
        </div>
        <div className='xl:text-sm text-xs grid sm:grid-cols-[0.2fr,1fr,1.5fr,2fr,1fr] grid-cols-[0.2fr,1fr,1.5fr,2fr,1fr] mt-3 2xl:mx-2 mx-0 items-center border-[1px] border-gray-300 p-2 py-3 bg-blue-50 w-[140%] lg:w-[98%] md:w-full' onClick={handleToggle}>
            <input checked={!isOpen} readOnly type='checkbox' className='border-[1px] border-gray-500 w-4 h-4'/>
            <p className='font-bold flex'><span className='hidden lg:block'>Order No.</span>BORN-873</p>
            <p className='font-semibold -ml-3 sm:ml-0'>14 Sept 2023 15:06 PM</p>
            <p className='font-semibold ml-4 sm:ml-0'>30 Oct 2023 12:00 PM</p>
            <button className='bg-blue-100 text-blue-900 lg:text-[10px] text-[9px] border-[1px] border-blue-200  font-semibold rounded-full w-20 h-6 flex justify-center items-center -ml-3 sm:ml-0'>Order Recieved</button>
            </div>
            {isOpen && (
                <div className='lg:border md:border 2xl:mx-2 lg:w-[98%] '>
                    <div className='pl-2 my-3'>
                        <p className='font-bold  text-blue-700 px-2'>Order No.BORN-873</p>
                    </div>
                    <hr className='md:w-full w-[140%] lg:w-full flex justify-center'/>
                    <div className='flex justify-between lg:p-1 w-[140%] sm:w-full'>
                        <div className='flex'>
                            <div className='md:p-2 p-1'>
                                <span className='xl:h-12 xl:w-12 md:h-10 md:w-10 h-9 w-9 bg-gray-300 rounded-full sm:flex items-center justify-center hidden'>
                                    <User2Icon className='lg:h-6 lg:w-6 h-4 w-6 text-blue-700 '/></span>
                            </div>
                            <div className='flex flex-col gap-y-2 p-2 py-2'>
                                <span className='flex xl:gap-5 md:gap-2 gap-1 items-center'>
                                    <p className='text-blue-700 font-bold text-sm lg:text-base whitespace-nowrap'>Customer Info</p>
                                    <TickIcon className='text-green-700 lg:w-6 lg:h-6 md:w-5 md:h-5 h-5 w-5'/>
                                    <EditIcon className=''/>
                                </span>
                                <span className='text-xs text-gray-600'>
                                    <p>Jane Doe</p>
                                    <p>jane.doe@gmail.com</p>
                                    <p>+1246756423565</p>
                                </span>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='p-2'>
                                <span className='xl:h-12 xl:w-12 md:h-10 md:w-10 h-9 w-9 bg-gray-300 rounded-full sm:flex hidden items-center justify-center'>
                                    <BriefCaseIcon className='lg:h-6 lg:w-6 h-4 w-6 text-blue-700'/></span>
                            </div>
                            <div className='flex flex-col gap-y-2 p-2'>
                                <span className='flex xl:gap-5 md:gap-2 gap-1 items-center'>
                                    <p className='text-blue-700 font-bold whitespace-nowrap text-sm lg:text-base '>Company Info </p>
                                    <TickIcon className='text-green-700 lg:w-6 lg:h-6 md:w-5 md:h-5 h-5 w-5'/>
                                    <EditIcon/>
                                </span>
                                <span className='text-xs mr-2 text-gray-600'>
                                    <p>PT Blitznet</p>
                                    <p>+179263</p>
                                </span>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='p-2'>
                                <span className='xl:h-12 xl:w-12 md:h-10 md:w-10 h-9 w-9 bg-gray-300 rounded-full sm:flex hidden items-center justify-center'>
                                    <TruckIcon className='lg:h-6 lg:w-6 h-4 w-6 text-blue-700'/></span>
                            </div>
                            <div className='flex flex-col gap-y-2 p-2'>
                                <span className='flex xl:gap-5 md:gap-2 gap-1 items-center'>
                                    <p className='text-blue-700 font-bold whitespace-nowrap text-sm lg:text-base '>Delivery Info</p>
                                    <TickIcon className='text-green-700  lg:w-6 lg:h-6 md:w-5 md:h-5 h-5 w-5'/>
                                    <EditIcon/>
                                </span>
                                <span className='text-xs lg:mx-0 md:mx-0 text-gray-600'>
                                    <p><span className='font-bold lg:font-semibold'>Shipping:</span> Express</p>
                                    <p><span className='font-bold lg:font-semibold'>Address:</span> Minnesota 14274</p>
                                    <p><span className='font-bold lg:font-semibold'>Expected Delivery Date:</span> 30 Oct 2023</p>
                                </span>
                            </div>
                        </div>
                        
                    </div>
                    <hr />
                    <div className='flex justify-center mt-4 w-[135%] md:w-full'>
                    <div className='border-[1px] bg-gray-100 rounded-xl w-[135%] md:w-11/12'>
                    <div className='bg-blue-500 rounded-xl h-[6px] text-center w-[40%] md:w-96 text-[7px]'></div></div>
                </div>
                <div className='flex justify-around lg:text-sm w-[135%] text-[13px] md:w-full font-bold lg:font-semibold'>
                    <span className='whitespace-nowrap'>
                        <p>Order Recieved</p>
                        <p className='text-blue-700 font-bold text-[10px]'>14-10-2023 18:11:08</p>
                    </span>
                    <span className='whitespace-nowrap'>
                        <p>Order Confirmed</p>
                        <p className='text-blue-700 font-bold text-[10px]'>14-10-2023 18:11:08</p>
                    </span>
                    <p className='whitespace-nowrap'>Payment Done</p>
                    <p className='whitespace-nowrap'>Order Delivered</p>
                    <p className='whitespace-nowrap'>Order Completed</p>
                </div>
                    <div className='flex lg:px-5 md:px-3 px-2 mt-2 items-center'>
                        <h2 className='text-blue-700 font-bold my-4'>Products</h2>
                        
                    </div>
                    <div className='gap-5 lg:px-5 md:px-3 px-2'>
                        <div className='w-full h-32'>
                            <div className='grid grid-cols-[0.3fr,1.5fr,1fr,1fr,1fr] p-3 text-sm bg-lightYellow font-semibold  lg:w-full md:w-full w-[144%] items-center'>
                                <input type="checkbox" className='w-3 h-3'/>
                                <p>Product Description</p>
                                <p>Quantity</p>
                                <p>Status</p>
                                <p>Total Amount</p>
                            </div> 
                            <hr className='mb-2' />
                            
                            <div className='grid grid-cols-[0.3fr,1.5fr,1fr,1fr,1fr] text-[13px] p-2 font-semibold lg:w-full md:w-full w-[144%] items-center'>
                            <input type="checkbox" className='w-3 h-3'/>
                                <p>Steel</p>
                                <p>Stainless Steel</p>
                                <button className='bg-red-100 text-red-900 border-[1px] border-red-300 text-[8px] md:text-[9px] lg:text-[9px] font-semibold rounded-full flex justify-center items-center lg:w-24 md:w-24 w-20 h-4 p-2'>Not Available Yet</button>
                                <p>Rp 1.329.000</p>
                            </div>
                            <hr className='mt-2' />
                            <div className='text-red-600 text-[13px] flex flex-col lg:flex-row lg:gap-4 gap-1 font-semibold p-2 lg:w-full md:w-full w-[144%] whitespace-nowrap'>
                                <p>* All transaction cost will be paid by buyer.</p>
                                <p>* Order will be confirmed on receipt of the payment.</p>
                            </div>
                            </div>
                            <div className="mt-4 lg:mt-0">
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
                    
                </div>
            )}
        </div>
        </div>
        </div>
    </div>
  )
}

export default Order