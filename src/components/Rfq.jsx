import React, {useState} from 'react';
import { assets,icons } from '../assets/assets';
import SidePanel from './SidePanel';
import { Link } from 'react-router-dom';

const Rfq = () => {
    const {NoteIcon,SearchIcon,FilterIcon,ThreeDotsIcon,User2Icon,EditIcon,TickIcon,TruckIcon,PaymentIcon,ChatIcon,PrintIcon,CrossIcon,ApprovalIcon} = icons
    const [activeTab, setActiveTab] = useState(0);
    const [isOpen, setIsOpen] = useState(false); 

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
        <div className='lg:w-3/4 w-full mt-2 p-1 lg:p-3 md:p-3 mr-3'>
        <div className='flex flex-col sm:flex-row sm:justify-between bg-white shadow-lg p-4 w-full sm:items-center'>
            <h1 className='font-bold text-lg sm:text-xl text-blue-700'>Total RFQ</h1>
            <div className='flex space-x-3 justify-between mt-2  md:mt-0'>
                <span className='relative'>
                <input type="text" placeholder='Search' className='rounded-full border-[1px] border-gray-200 p-2 focus:outline-none placeholder:text-center  placeholder:text-sm w-28' />
                <SearchIcon className='absolute top-3 left-2 text-gray-400 w-5 h-5'/>
                </span>
                <span>
                <button className='rounded-full border-[1px] border-gray-200 p-[10px] flex items-center justify-center gap-2'>
                    <FilterIcon className='w-5 h-5'/>
                    <p className='lg:text-sm md:text-sm text-[11px]'>Filter</p>
                    </button></span>
                <button className='text-white px-3 font-medium border-[1px] bg-blue-700 p-2 rounded-full flex gap-2 items-center'>
                    <NoteIcon className='w-6 h-6'/>
                    <Link to='/rfq-form' className='text-xs lg:text-base whitespace-nowrap'>Post a New RFQ</Link>
                </button>
            </div>
        </div>
        <div className='bg-white shadow-lg py-3 pb-6 mt-4 mb-5 w-full'>
        <div className="flex gap-4 text-gray-600 font-medium text-[13px] mt-5 px-2">
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
        <hr className=' bg-gray-500 h-[2px] mt-3'/>
        <div className='overflow-x-auto bg-white md:overflow-hidden scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-100 lg:w-full md:w-full'>
    <div className='text-gray-400 xl:text-sm text-xs grid items-center w-[150%] md:w-[98%] grid-cols-[0.4fr,2fr,1.6fr,2fr,2fr,1fr] mt-7 lg:mx-4 md:mx-4 mx-2  font-semibold'>
            <input type='checkbox' className='border-[1px] border-gray-500 w-4 h-4'/>
            <p>Order ID</p>
            <p>Payment Method</p>
            <p>Date Created</p>
            <p>Expected Delivery Date</p>
            <p>Status</p>
        </div>
        <div className='xl:text-sm text-xs grid w-[150%] md:w-[98%] grid-cols-[0.4fr,2fr,1.6fr,2fr,2fr,1fr] mt-7 lg:mx-3 md:mx-3 mx-[5px] items-center border-[1px] border-gray-300 p-1 py-3 bg-blue-50' onClick={handleToggle}>
            <input checked={isOpen} readOnly type='checkbox' className='border-[1px] border-gray-500 w-4 h-4'/>
            <p className='font-bold'>RFQ _12039020841</p>
            <button className='bg-red-100 text-red-900 text-[10px] font-semibold border-[1px] border-red-200 rounded-full flex justify-center items-center w-16 h-4'>Credit</button>
            <p className='lg:font-semibold font-bold'>06 Oct 2022 8:00 AM</p>
            <p className='lg:font-semibold font-bold'>07 Oct 2022 9:00 AM</p>
            <button className='bg-blue-100 text-blue-900 text-[10px] border-[1px] border-blue-200  font-semibold rounded-full lg:w-20 md:w-20 h-6 flex justify-center items-center'>Processing</button>
            </div>
            {isOpen && (
                <div className='md:border lg:mx-3 md:mx-3 mx-1 md:w-[98%]  w-[150%]'>
                    <div className='grid lg:grid-cols-[1.5fr,1fr,1fr,1fr,0.3fr] md:grid-cols-[1.5fr,1fr,1fr,1fr,0.3fr] grid-cols-[1.2fr,1fr,1fr,1fr,0.3fr] items-center p-3 py-6'>
                    <h2 className='font-semibold lg:text-sm md:text-sm text-xs flex flex-col gap-1 lg:flex-row'><span className='font-bold'><p>RFQ No: </p></span> RFQ_12039020841</h2>
                    <div className='space-y-[2px]'>
                        <p className='lg:text-sm text-xs text-blue-700'>Date Created</p>
                        <p className='lg:text-[14px] md:text-[14px] text-xs font-medium'>06 Oct 2022 8:00AM</p>
                    </div>
                    <div className='space-y-[2px]'>
                        <p className='lg:text-sm text-xs text-blue-700'>Last Updated</p>
                        <p className='lg:text-[14px] md:text-[14px] text-xs font-medium'>06 Oct 2022 8:00AM</p>
                    </div>
                    <div className='space-y-[2px]'>
                        <p className='lg:text-sm text-xs text-blue-700 ml-4'>Status</p>
                        <button className='bg-blue-100 text-blue-900 text-[10px] border-[1px] border-blue-200  font-semibold rounded-full lg:w-20 md:w-20 w-16 h-6 flex justify-center items-center'>processing</button>
                    </div>
                    <div>
                        <ThreeDotsIcon className='w-5 h-5 text-blue-600'/>
                    </div>
                    </div>
                    <hr className='md:w-11//12 w-full flex justify-center'/>
                    <div className='flex justify-start md:justify-around gap-4 lg:gap-2 xl:gap-4 whitespace-nowrap mx-1 md:w-[98%]'>
                        <div className='flex xl:gap-5 gap-0'>
                            <div className='py-2 hidden md:inline-block lg:hidden xl:inline-block'>
                                <span className='xl:h-12 xl:w-12 h-9 w-9 bg-gray-300 rounded-full flex items-center justify-center'>
                                    <User2Icon className='xl:h-6 xl:w-6 w-5 h-5 text-blue-700'/></span>
                            </div>
                            <div className='flex flex-col gap-y-2 p-2 py-3'>
                                <span className='flex gap-2 items-center'>
                                    <p className='text-blue-700 font-bold text-sm xl:text-base whitespace-nowrap'>Contact Person</p>
                                    <TickIcon className='text-green-700 w-5 h-5'/>
                                    <EditIcon/>
                                </span>
                                <span className='text-sm text-gray-600'>
                                    <p>Jane Doe</p>
                                    <p>jane.doe@gmail.com</p>
                                    <p>+1246756423565</p>
                                </span>
                            </div>
                        </div>
                        <div className='flex xl:gap-5 gap-0'>
                            <div className='p-2 hidden md:inline-block lg:hidden xl:inline-block'>
                                <span className='xl:h-12 xl:w-12 h-9 w-9 bg-gray-300 rounded-full flex items-center justify-center'>
                                    <TruckIcon className='xl:h-6 xl:w-6 w-5 h-5 text-blue-700'/></span>
                            </div>
                            <div className='flex flex-col gap-y-2 py-3'>
                                <span className='flex gap-2 items-center'>
                                    <p className='text-blue-700 font-bold text-sm xl:text-base whitespace-nowrap'>Delivery Info </p>
                                    <TickIcon className='text-green-700 w-5 h-5 '/>
                                    <EditIcon/>
                                </span>
                                <span className='text-sm lg:ml-0 md:ml-0 text-gray-600'>
                                    <p>Shipping: Express</p>
                                    <p>Address: Minnesota 14274</p>
                                    <p>Expected Delivery Date: 30 Oct 2022</p>
                                </span>
                            </div>
                        </div>
                        <div className='flex lg:gap-5 gap-0'>
                            <div className='p-2 hidden md:inline-block lg:hidden xl:inline-block'>
                                <span className='xl:h-12 xl:w-12  h-9 w-9 bg-gray-300 rounded-full flex items-center justify-center'>
                                    <PaymentIcon className='xl:h-6 xl:w-6 w-5 h-5 text-blue-700'/></span>
                            </div>
                            <div className='flex flex-col gap-y-2 py-3'>
                                <span className='flex gap-2 items-center'>
                                    <p className='text-blue-700 font-bold text-sm whitespace-nowrap xl:text-base'>Payment Method</p>
                                    <TickIcon className='text-green-700 w-5 h-5 '/>
                                    <EditIcon/>
                                </span>
                                <span className='text-sm mr-2 text-gray-600'>
                                    <p>Credit</p>
                                    <p>XA Finance (Name of Creditor)</p>
                                </span>
                            </div>
                        </div>
                        
                    </div>
                    <hr />
                    <div className='flex justify-between px-5 mt-2 items-center'>
                        <h2 className='text-blue-700 font-bold my-4'>Products(2)</h2>
                        <div className='bg-blue-700 rounded-full w-28 lg:w-8 h-8 flex place-content-center'>
                        <button className='text-white flex gap-2 items-center'>
                            <p className='flex lg:hidden text-sm'>Messages</p>
                        <ChatIcon/>
                        </button> </div>
                    </div>
                    <div className='gap-5 flex flex-col lg:flex-row justify-between  lg:px-5 md:px-4 px-2 mt-2'>
                        <div className='w-full space-y-3 h-28 overflow-y-scroll scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-100 '>
                            <div className='grid grid-cols-[0.3fr,1.3fr,1fr,1fr,1fr,0.5fr] text-sm white text-gray-400 lg:font-semibold font-bold w-full items-center '>
                                <input type="checkbox" className='w-3 h-3'/>
                                <p>Product Category</p>
                                <p> Product Name</p>
                                <p>Quantity</p>
                                <p>Description</p>
                            </div>
                            <hr />
                            <div className='grid grid-cols-[0.3fr,1.3fr,1fr,1fr,1fr,0.5fr] text-[12px] font-semibold w-full items-center'>
                            <input type="checkbox" className='w-3 h-3'/>
                                <p>Steel</p>
                                <p>Stainless Steel</p>
                                <p>3 KG</p>
                                <p>Regular Pipe 10 cm</p>
                                <EditIcon className='w-5 h-5'/>
                            </div>
                            <hr />
                            <div className='grid grid-cols-[0.3fr,1.3fr,1fr,1fr,1fr,0.5fr] text-[12px] font-semibold w-full items-center'>
                            <input type="checkbox" className='w-3 h-3'/>
                                <p>Steel</p>
                                <p>Stainless Steel</p>
                                <p>3 KG</p>
                                <p>Cylinders 10 cm</p>
                                <EditIcon className='w-5 h-5'/>
                            </div>
                            <hr />
                            <div className='grid grid-cols-[0.3fr,1.3fr,1fr,1fr,1fr,0.5fr] text-[12px] font-semibold w-full items-center'>
                            <input type="checkbox" className='w-3 h-3'/>
                                <p>Steel</p>
                                <p>Stainless Steel</p>
                                <p>3 KG</p>
                                <p>Cylinders 10 cm</p>
                                <EditIcon className='w-5 h-5'/>
                            </div>
                            <hr />
                            <div className='grid grid-cols-[0.3fr,1.3fr,1fr,1fr,1fr,0.5fr] text-[12px] font-semibold w-full items-center'>
                            <input type="checkbox" className='w-3 h-3'/>
                                <p>Steel</p>
                                <p>Stainless Steel</p>
                                <p>3 KG</p>
                                <p>Cylinders 10 cm</p>
                                <EditIcon className='w-5 h-5'/>
                            </div>
                            <hr />
                            <div className='grid grid-cols-[0.3fr,1.3fr,1fr,1fr,1fr,0.5fr] text-[12px] font-semibold w-full items-center'>
                            <input type="checkbox" className='w-3 h-3'/>
                                <p>Steel</p>
                                <p>Stainless Steel</p>
                                <p>3 KG</p>
                                <p>Cylinders 10 cm</p>
                                <EditIcon className='w-5 h-5'/>
                            </div>
                            <hr /></div>
                        <div className='flex flex-col gap-y-2'>
                            <div className='flex gap-3'>
                            <p>Comment</p>
                            <span><EditIcon className='w-5 h-5'/></span></div>
                            <textarea name="comment" id="comment" rows="3" className='focus:outline-none p-2 border-[1px] focus:border-gray-500 w-7/12 lg:w-full'></textarea>
                        </div>
                    </div>
                    <div className='mt-4 bg-blue rounded-md xl:flex gap-10 text-sm justify-between items-center text-black font-medium mx-3 bg-blue-50 p-3 hidden'>
                        <span>
                            <p className='text-blue-700 font-bold'>Quote Number</p>
                            <p>BTN-1607</p>
                        </span>
                        <span>
                            <p className='text-blue-700 font-bold'>Date</p>
                            <p>06 Oct 2022 15:00 </p>
                        </span>
                        <span>
                            <p className='text-blue-700 font-bold'>Products</p>
                            <p>1 Product</p>
                        </span>
                        <span>
                            <p className='text-blue-700 font-bold'>Total Price</p>
                            <p>Rp 6,1414,892.00</p>
                        </span>
                        <span>
                            <p className='text-blue-700 font-bold'>Valid Till</p>
                            <p>12 Oct 2022 15:00</p>
                            </span>
                        <span className='flex gap-2'>
                            <button className='bg-blue-300 rounded-md w-7 h-6 text-white flex justify-center items-center '>
                                <ChatIcon className='w-4 h-4'/>
                            </button>
                            <button className='bg-blue-700 rounded-md w-7 h-6 text-white flex justify-center items-center'>
                            <PrintIcon className='w-4 h-4'/>
                            </button>
                        </span>
                        <span className='flex gap-2'>
                            <button className='bg-green-600 p-1 px-2 w-15 h-7 rounded-md text-white flex justify-center items-center '>
                                Approve
                            </button>
                            <button className='bg-red-600 rounded-md w-7 h-7 p-1 text-white flex justify-center items-center '>
                                <CrossIcon className='w-4 h-4'/>
                            </button>
                        </span>
                        <span>
                            <ThreeDotsIcon className='w-6 h-6 text-blue-700'/>
                        </span>
                    </div>
                    <div className='mt-4 bg-blue rounded-md flex-col space-y-4 gap-10 text-sm justify-between items-center text-black font-semibold l mx-3 bg-blue-50 p-3 xl:hidden'>
                        <div className='flex justify-between sm:justify-around'>
                        <span>
                            <p className='text-blue-700 font-bold'>Quote Number</p>
                            <p>BTN-1607</p>
                        </span>
                        <span>
                            <p className='text-blue-700 font-bold'>Date</p>
                            <p>06 Oct 2022 15:00 </p>
                        </span>
                        <span>
                            <p className='text-blue-700 font-bold'>Products</p>
                            <p>1 Product</p>
                        </span>
                        <span>
                            <p className='text-blue-700 font-bold'>Total Price</p>
                            <p>Rp 6,1414,892.00</p>
                        </span>
                        <span>
                            <p className='text-blue-700 font-bold'>Valid Till</p>
                            <p>12 Oct 2022 15:00</p>
                            </span></div>
                            <div className='flex justify-around'>
                        
                            <button className='bg-blue-300 rounded-md w-24 h-7 gap-2 text-white flex justify-center items-center '>Message
                                <ChatIcon className='w-4 h-4'/>
                            </button>
                            <button className='bg-blue-700 rounded-md w-16 h-7 text-white flex justify-center gap-2 items-center'>Print
                            <PrintIcon className='w-4 h-4'/>
                            </button>
                        
                        
                            <button className='bg-green-600 p-1 px-2 w-24 h-7 gap-2 rounded-md text-white flex justify-center items-center '>
                                Approve
                                <ApprovalIcon className='w-4 h-4'/>
                            </button>
                            <button className='bg-red-600 rounded-md w-20 h-7 p-1 gap-2 text-white flex justify-center items-center '>Cancel
                                <CrossIcon className='w-4 h-4'/>
                            </button>
                        
                        
                            <ThreeDotsIcon className='w-6 h-6 text-blue-700'/>
                        </div>
                    </div>
                    <div className='flex justify-end mt-2 mb-4 mr-3'>
                        <button className='bg-gray-200 rounded-md text-blue-700 text-sm p-1 px-2 font-bold'>Compare Quotes</button>
                    </div>
                </div>
            )}
            </div>
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
    </div>
    
  )
}

export default Rfq