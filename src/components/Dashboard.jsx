import React, {useState} from 'react';
import { assets,icons } from '../assets/assets';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const {NoteIconWhite,RightArrowIcon} = icons;
    const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: "Processing ( 1 )" },
    { label: "Completed ( 0 )" },
    { label: "Expired ( 0 )" },
    { label: "Quotes ( 0 )" },
  ];
  return (
    <div className='flex flex-col items-center justify-center bg-white mt-5 lg:mx-0 md:mx-6 gap-6'>
    <div className='space-y-4 p-2 bg-white w-11/12 md:w-full flex flex-col pb-4 shadow-lg justify-center'>
        <div className='flex justify-between w-full m-1 items-center'>
            <div className=''>
                <h1 className='font-bold text-blue-700 text-xl'>DASHBOARD</h1>
            </div>
            <div>
                <button className='flex items-center gap-x-2 bg-blue-700 rounded-full px-2 p-1 text-white'>
                    <NoteIconWhite className='w-7 h-7 mt-1'/>
                    <Link to='/rfq-form' className='font-semibold '>Post a New RFQ</Link>
                </button>
            </div>
        </div>
        <div className='flex flex-col custom1:flex-row gap-2 w-full box-border'>
            <div className='lg:basis-1/3 md:basis-1/3 bg-white p-3 border-[1px] shadow-lg text-base min-w-72'>
            <p className='text-blue-600 font-bold lg:font-medium'>Total Commissions</p>
            <p className='text-gray-700'>Your contribution has add up to</p>
            <div className='flex items-center justify-between mt-5 custom1:mt-[110px] lg:mt-5'>
                <h1 className='font-bold lg:text-lg md:text-lg'>Rp 12.000.000</h1>
                <div>
                <button className='bg-blue-600 rounded-full p-2 text-white font-semibold text-sm lg:text-base hover:scale-105 transition-all'>View Details
                    </button> 
                    </div> 
            </div>
            </div>
            <div className='lg:basis-2/3 md:basis-2/3 2xl:flex flex-col lg:flex-row  justify-between whitespace-nowrap bg-white border-[1px] shadow-lg p-3 text-base base hidden'>
            <div className='flex lg:flex-row md:flex-row gap-7'>
            <div>
                <p className='text-blue-600 font-bold lg:font-medium'>Total Credits</p>
                <p>Total credits used this week</p>
                <h1 className='font-bold lg:text-lg md:text-lg lg:mt-6 md:mt-6 mt-2'>Rp 35.000.000</h1>
            </div>
            <div className=''>
                <p className=''>Today</p>
                <p>Total Credits used</p>
            </div></div>
            <div className='flex flex-col lg:gap-4 md:gap-4 mt-2 lg:mt-0 md:mt-0'>
                <div className='border-[1px] bg-gray-100 rounded-xl lg:w-36 md:w-36 w-24'>
                    <div className='bg-yellow-400 rounded-xl text-center h-3 flex items-center justify-center w-24 text-[7px]'>100%</div>
                </div>
                <div className='border-[1px] bg-gray-100 mt-1 lg:mt-0 md:mt-0 rounded-xl lg:w-80 md:w-80 w-52'>
                    <div className='bg-blue-500 rounded-xl text-center lg:w-40 md:w-40 w-20 h-3 flex items-center justify-center text-[7px]'>40%</div>
                </div>
                <div className='justify-end flex'>
            <button className='bg-blue-600 rounded-full p-2 text-white font-semibold max-w-32 hover:scale-105 text-sm lg:text-base transition-all'>View Details</button></div>
            </div>
            </div>
            <div className='lg:basis-2/3 md:basis-2/3 flex flex-col 2xl:flex-row justify-between whitespace-nowrap bg-blue-100 border-[1px] shadow-lg p-3 text-base base 2xl:hidden'>
            <div className='space-y-2'>
              <div className='flex w-full justify-between'>
                <span>
              <p className='text-blue-600 font-bold lg:font-medium'>Total Credits</p>
              <p>Total credits used this week</p></span>
              <h1 className='font-bold lg:text-lg md:text-lg lg:mt-6 md:mt-6 mt-2'>Rp 35.000.000</h1>
              </div>
              <div className='flex justify-between'>
              <div className='font-raleway font-semibold'>
                <p className=''>Today</p>
                <p>Total Credits used</p>
            </div>
            <div className='flex flex-col lg:gap-4 md:gap-4 mt-2 lg:mt-0 md:mt-0'>
                <div className='border-[1px] bg-gray-100 rounded-xl w-24 sm:w-44'>
                    <div className='bg-yellow-400 rounded-xl text-center h-3 flex items-center justify-center text-[7px]'>100%</div>
                </div>
                <div className='border-[1px] bg-gray-100 mt-1 lg:mt-0 md:mt-0 rounded-xl w-44 sm:w-64'>
                    <div className='bg-blue-500 rounded-xl text-center w-20 sm:w-28 h-3 flex items-center justify-center text-[7px]'>40%</div>
                </div>
            </div>
              </div>
              <div className='justify-end flex'>
            <button className='bg-blue-600 rounded-full p-2 text-white font-semibold max-w-32 hover:scale-105 text-sm lg:text-base transition-all'>View Details</button></div>
            <div> 
            </div>
            </div>
            
            </div>
        </div>
    </div>
    <div className='bg-white shadow-lg pb-5 md:w-full w-[95%]'>
        <div className='flex flex-col lg:flex-row gap-2 p-2 pb-7'>
            <div className='border-[1px] lg:basis-1/3 sm:w-2/3 md:w-3/4 p-3 space-y-1 shadow-lg bg-white rounded-md'>
                <h2 className='text-blue-600 flex font-bold lg:font-semibold gap-2 items-center ml-1'>Today's RFQ
                    <Link to='rfq' className='w-7 h-7 flex justify-center items-center border-[1px] border-blue-200 rounded-full '><RightArrowIcon className='w-6 h-6'/></Link>
                    </h2>
                <p className='ml-1 font-bold'>2</p>
                <div className='flex gap-2 justify-between text-xs'>
                    <button className='bg-blue-100 rounded-md p-1 px-2 cursor-pointer'> 
                        <p className=''>Processing 1</p>   
                        </button>
                    <button className='bg-green-100 rounded-md p-1 px-2 cursor-pointer'>
                        <p className=''>Completed 0</p>
                        </button>
                    <button className='bg-red-100 rounded-md p-1 px-2 cursor-pointer'>
                        <p className=''>Canceled 0</p>
                        </button>
                </div>
            </div>
            <div className='border-[1px] lg:basis-1/3 sm:w-2/3 md:w-3/4 p-3 space-y-1 shadow-lg bg-white rounded-md'>
                <h2 className='text-blue-600 flex gap-2 items-center font-bold lg:font-semibold ml-1'>Today's Orders
                    <Link to='order' className='w-7 h-7 flex justify-center items-center border-[1px] border-blue-200 rounded-full '><RightArrowIcon className='w-6 h-6'/></Link>
                    </h2>
                <p className='ml-1 font-bold'>0</p>
                <div className='flex gap-2 justify-between text-xs'>
                    <button className='bg-blue-100 rounded-md p-1 px-2 cursor-pointer'> 
                        <p className=''>Processing 1</p>   
                        </button>
                    <button className='bg-green-100 rounded-md p-1 px-2 cursor-pointer'>
                        <p className=''>Completed 0</p>
                        </button>
                    <button className='bg-red-100 rounded-md p-1 px-2 cursor-pointer'>
                        <p className=''>Canceled 0</p>
                        </button>
                </div>
            </div>
            <div className='border-[1px] lg:basis-1/3 sm:w-2/3 md:w-3/4 p-3 space-y-1 shadow-lg bg-white rounded-md'>
                <h2 className='text-blue-600 flex gap-2 items-center font-bold lg:font-semibold ml-1'>Today's Invoices 
                    <Link to='payment' className='w-7 h-7 flex justify-center items-center border-[1px] border-blue-200 rounded-full '><RightArrowIcon className='w-6 h-6'/></Link>
                    </h2>
                <p className='ml-1 font-bold'>2</p>
                <div className='flex gap-2 justify-between text-xs'>
                    <button className='bg-blue-100 rounded-md p-1 px-2 cursor-pointer'> 
                        <p className=''>Processing 1</p>   
                        </button>
                    <button className='bg-green-100 rounded-md p-1 px-2 cursor-pointer'>
                        <p className=''>Completed 0</p>
                        </button>
                    <button className='bg-red-100 rounded-md p-1 px-2 cursor-pointer'>
                        <p className=''>Canceled 0</p>
                        </button>
                </div>
            </div>
        </div>
        <div className="flex gap-4 text-gray-600 font-medium text-[13px] lg:text-sm mt-5 px-2">
      {tabs.map((tab, index) => (
        <p
          key={index}
          onClick={() => setActiveTab(index)}
          className={`cursor-pointer pb-1 ${
            activeTab === index ? "border-b-2 border-blue-700 text-blue-700" : ""
          }`}
        >
          {tab.label}
        </p>
      ))}
    </div>
        <hr/>
        <div className='overflow-x-auto lg:overflow-hidden md:overflow-hidden scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-100 '>
    <div className='text-gray-400 text-[13px] lg:text-base grid items-center w-[140%] sm:w-full grid-cols-[0.2fr,1fr,1fr,1fr,1fr,1fr] mt-7 lg:mx-12 md:mx-6 mx-2 font-semibold'>
            <span className='border-[1px] border-gray-500 w-3 h-3 rounded-sm'></span>
            <p className='whitespace-nowrap'>Order ID</p>
            <p className='whitespace-nowrap'>Payment Method</p>
            <p className='whitespace-nowrap'>Date Created</p>
            <p className='whitespace-nowrap flex gap-1'><span className='hidden sm:block'>Expected</span> Delivery Date</p>
            <p className='whitespace-nowrap'>Status</p>
        </div>
        <div className='text-gray-600 grid lg:text-sm text-xs items-center w-[140%] sm:w-full mb-4 grid-cols-[0.2fr,1fr,1fr,1fr,1fr,1fr] mt-7 lg:mx-12 md:mx-6 mx-2 font-semibold'>
            <span className='border-[1px] border-gray-500 w-3 h-3 rounded-sm whitespace-nowrap'></span>
            <Link to='/rfq' className='font-bold whitespace-nowrap text-[11px] sm:text-xs md:text-sm'>RFQ _12039020841</Link>
            <button className='bg-red-100 text-red-700 whitespace-nowrap justify-self-center sm:justify-self-start rounded-full p-1 lg:w-20 md:w-12 w-12 text-xs'>credit</button>
            <p className='whitespace-nowrap flex gap-1'>06 Oct 2022 8:00 <span className=' hidden sm:block'> AM</span></p>
            <p className='whitespace-nowrap flex gap-1'>07 Oct 2022 9:00 <span className='hidden sm:block'> AM</span></p>
            <button className='bg-blue-100 text-blue-800 rounded-full p-1 flex justify-center lg:w-20 md:w-20 w-16 text-[9px] lg:text-xs'>processing</button>
        </div></div>
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
    </div>
  )
}

export default Dashboard