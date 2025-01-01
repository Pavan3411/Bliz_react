import React, {useState} from 'react';
import { assets,icons } from '../assets/assets';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const {NoteIconWhite,RightArrowIcon,PlusIcon,SwitchIcon} = icons;
    const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: "Processing ( 1 )" },
    { label: "Completed ( 0 )" },
    { label: "Expired ( 0 )" },
    { label: "Quotes ( 0 )" },
  ];
  return (
    <div className='flex flex-col items-center bg-white mt-5 rounded-md'>
    <div className='space-y-4 p-4 bg-white w-11/12 md:w-full flex flex-col justify-center rounded-md'>
        <div className='flex justify-between w-full m-1 items-center'>
            <div className=''>
                <h1 className='font-bold text-grayShade text-xl'>DASHBOARD</h1>
            </div>
            <div>
                {/* <button className='flex items-center gap-x-2 bg-buttonRed rounded-md px-2 p-1 text-white'>
                    <NoteIconWhite className='w-7 h-7 mt-1'/>
                    <Link to='/rfq-form' className='font-semibold '>Post a New RFQ</Link>
                </button> */}
            </div>
        </div>
        <div className='flex gap-10 box-border'>
            {/* <div className='lg:basis-1/3 md:basis-1/3 bg-green-100 p-3 border-[1px] shadow-lg text-base min-w-72'>
            <p className='text-blackShade font-bold lg:font-medium'>Total Commissions</p>
            <p className='text-grayShade'>Your contribution has add up to</p>
            <div className='flex items-center justify-between mt-5 custom1:mt-[110px] lg:mt-5'>
                <h1 className='font-bold text-grayShade lg:text-lg md:text-lg'>Rp 12.000.000</h1>
                <div>
                <button className='bg-buttonRed rounded-md p-2 text-white font-semibold text-sm lg:text-base hover:scale-105 transition-all'>View Details
                    </button> 
                    </div> 
            </div>
            </div> */}
            <div className='flex flex-1 justify-between whitespace-nowrap bg-white border-[1px] shadow-lg px-6 p-2 text-base base gap-4 rounded-md min-h-28'>
              <div className='flex items-center gap-4'>
                <span>
                  <button className='text-white bg-buttonRed flex justify-center items-center rounded-md w-12 h-12 border-none'>
                  <p className='text-white'>
                    <img src={assets.plus_img} alt=""  className='w-7 h-7'/>
                  </p>
                  </button>
                </span>
                <span className='leading-4'>
                  <p className='text-grayShade'>Post a new</p>
                  <p className='font-bold text-base'>Requirement</p>
                </span>
              </div>
              <div className='flex  items-end'>
                <button className='text-white bg-grayShade rounded-md px-4 p-[2px] gap-2 flex justify-around items-center text-xs'>
                  <img src={assets.repeat_png} alt="" className='w-3 h-3' />
                  <p className='font-semibold p-[2px]'>Repeat RFQs</p>
                </button>
              </div>
            </div>
            <div className='bg-white p-4 flex flex-1 justify-between items-center border-[1px] shadow-lg text-base px-6 rounded-md'>
            <span className='flex gap-4 items-center'>
            
              <span className='bg-white border-[1px] border-gray-200 flex justify-center items-center shadow-md rounded-full w-12 h-12'>
                <p className='font-bold text-2xl'>5</p>
              </span>
            
            <div className=''>
              <p className='text-sm font-sm'>new</p>
              <h1 className='font-bold text-base leading-4'>Orders Confirmed</h1>
              <p className='font-medium text-sm text-buttonRed'>Payment pending</p>
            </div>
            </span>
            <div>
              <button className='text-white bg-buttonRed flex justify-center items-center rounded-md py-3 px-4 w-[60px] h-[60px]'>
                <p className='text-sm leading-4'>Pay now</p>
              </button>
            </div>
            </div>
            {/* <div className='lg:basis-2/3 md:basis-2/3 2xl:flex flex-col lg:flex-row  justify-between whitespace-nowrap bg-white border-[1px] shadow-lg p-3 text-base base hidden'>
            <div className='flex lg:flex-row md:flex-row gap-7'>
            <div>
                <p className='text-blackShade font-bold lg:font-medium'>Total Credits</p>
                <p>Total credits used this week</p>
                <h1 className='font-bold text-grayShade lg:text-lg md:text-lg lg:mt-6 md:mt-6 mt-2'>Rp 35.000.000</h1>
            </div>
            <div className=''>
                <p className='text-blackShade font-semibold'>Today</p>
                <p>Total Credits used</p>
            </div></div>
            <div className='flex flex-col lg:gap-4 md:gap-4 mt-2 lg:mt-0 md:mt-0'>
                <div className='border-[1px] bg-gray-100 rounded-xl lg:w-36 md:w-36 w-24'>
                    <div className='bg-red-300 rounded-xl text-center h-3 flex items-center justify-center w-24 text-[7px]'>100%</div>
                </div>
                <div className='border-[1px] bg-gray-100 mt-1 lg:mt-0 md:mt-0 rounded-xl lg:w-80 md:w-80 w-52'>
                    <div className='bg-red-200 rounded-xl text-center lg:w-40 md:w-40 w-20 h-3 flex items-center justify-center text-[7px]'>40%</div>
                </div>
                <div className='justify-end flex'>
            <button className='bg-buttonRed rounded-md p-2 text-white font-semibold max-w-32 hover:scale-105 text-sm lg:text-base transition-all'>View Details</button></div>
            </div>
            </div> */}
            {/* <div className='lg:basis-2/3 md:basis-2/3 flex flex-col 2xl:flex-row justify-between whitespace-nowrap bg-pink-100 border-[1px] shadow-lg p-3 text-base base 2xl:hidden'>
            <div className='space-y-2'>
              <div className='flex w-full justify-between'>
                <span>
              <p className='text-blackShade font-bold lg:font-medium'>Total Credits</p>
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
                    <div className='bg-fadeRed rounded-xl text-center h-3 flex items-center justify-center text-[7px]'>100%</div>
                </div>
                <div className='border-[1px] bg-gray-100 mt-1 lg:mt-0 md:mt-0 rounded-xl w-44 sm:w-64'>
                    <div className='bg-fadeRed rounded-xl text-center w-20 sm:w-28 h-3 flex items-center justify-center text-[7px]'>40%</div>
                </div>
            </div>
              </div>
              <div className='justify-end flex'>
            <button className='bg-buttonRed rounded-md p-2 text-white font-semibold max-w-32 hover:scale-105 text-sm lg:text-base transition-all'>View Details</button></div>
            <div> 
            </div>
            </div>
            
            </div> */}
            
        </div>
    </div>
    <div className='bg-white shadow-lg pb-5 md:w-full w-[95%]'>
        <div className='flex flex-col lg:flex-row gap-2 p-4 pt-2 pb-'>
            <div className='border-[1px] lg:basis-1/3 sm:w-2/3 md:w-3/4 p-3 space-y-1 shadow-lg bg-white rounded-md min-h-28'>
                <h2 className='text-grayShade flex font-bold lg:font-semibold gap-2 items-center ml-1'>Total's RFQ
                    <Link to='rfq' className='w-7 h-7 flex justify-center items-center border-[1px] border-blue-200 rounded-full '><RightArrowIcon className='w-6 h-6'/></Link>
                    </h2>
                <p className='ml-1 font-bold'>2</p>
                <div className='flex gap-2 justify-between text-xs '>
                    <button className='bg-fadeRed rounded-md p-1 px-2 cursor-pointer'> 
                        <p className=''>Processing 1</p>   
                        </button>
                    <button className='bg-fadeRed rounded-md p-1 px-2 cursor-pointer'>
                        <p className=''>Completed 0</p>
                        </button>
                    <button className='bg-fadeRed rounded-md p-1 px-2 cursor-pointer'>
                        <p className=''>Canceled 0</p>
                        </button>
                </div>
            </div>
            <div className='border-[1px] lg:basis-1/3 sm:w-2/3 md:w-3/4 p-3 space-y-1 shadow-lg bg-white rounded-md'>
                <h2 className='text-grayShade flex gap-2 items-center font-bold lg:font-semibold ml-1'>Total's Orders
                    <Link to='order' className='w-7 h-7 flex justify-center items-center border-[1px] border-blue-200 rounded-full '><RightArrowIcon className='w-6 h-6'/></Link>
                    </h2>
                <p className='ml-1 font-bold'>0</p>
                <div className='flex gap-2 justify-between text-xs'>
                    <button className='bg-fadeRed rounded-md p-1 px-2 cursor-pointer'> 
                        <p className=''>Processing 1</p>   
                        </button>
                    <button className='bg-fadeRed rounded-md p-1 px-2 cursor-pointer'>
                        <p className=''>Completed 0</p>
                        </button>
                    <button className='bg-fadeRed rounded-md p-1 px-2 cursor-pointer'>
                        <p className=''>Canceled 0</p>
                        </button>
                </div>
            </div>
            <div className='border-[1px] lg:basis-1/3 sm:w-2/3 md:w-3/4 p-3 space-y-1 shadow-lg bg-white rounded-md'>
                <h2 className='text-grayShade flex gap-2 items-center font-bold lg:font-semibold ml-1'>Total's Invoices 
                    <Link to='payment' className='w-7 h-7 flex justify-center items-center border-[1px] border-blue-200 rounded-full '><RightArrowIcon className='w-6 h-6'/></Link>
                    </h2>
                <p className='ml-1 font-bold'>2</p>
                <div className='flex gap-2 justify-between text-xs'>
                    <button className='bg-fadeRed rounded-md p-1 px-2 cursor-pointer'> 
                        <p className=''>Processing 1</p>   
                        </button>
                    <button className='bg-fadeRed rounded-md p-1 px-2 cursor-pointer'>
                        <p className=''>Completed 0</p>
                        </button>
                    <button className='bg-fadeRed rounded-md p-1 px-2 cursor-pointer'>
                        <p className=''>Canceled 0</p>
                        </button>
                </div>
            </div>
        </div>
        <div className="flex gap-4 text-gray-600 font-medium text-[13px] lg:text-sm mt-5 px-4">
      {tabs.map((tab, index) => (
        <p
          key={index}
          onClick={() => setActiveTab(index)}
          className={`cursor-pointer pb-1 ${
            activeTab === index ? "border-b-2 border-grayShade text-blackShade" : ""
          }`}
        >
          {tab.label}
        </p>
      ))}
    </div>
        <hr/>
        <div className='overflow-x-auto lg:overflow-hidden md:overflow-hidden scrollbar-thin scrollbar-thumb-buttonRed scrollbar-track-blue-100 '>
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
            <button className='bg-red-100 text-red-700 whitespace-nowrap justify-self-center sm:justify-self-start rounded-md p-1 lg:w-20 md:w-12 w-12 text-xs'>credit</button>
            <p className='whitespace-nowrap flex gap-1'>06 Oct 2022 8:00 <span className=' hidden sm:block'> AM</span></p>
            <p className='whitespace-nowrap flex gap-1'>07 Oct 2022 9:00 <span className='hidden sm:block'> AM</span></p>
            <button className='bg-fadeRed text-red-700 rounded-md p-1 flex justify-center lg:w-20 md:w-20 w-16 text-[9px] lg:text-xs'>processing</button>
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