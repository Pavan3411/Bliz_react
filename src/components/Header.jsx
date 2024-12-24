import React, { useState } from 'react';
import { assets, icons } from '../assets/assets';
import { Link } from 'react-router-dom';
import Invite from './Invite';

const Header = ({toggleSidePanel}) => {
  const { InviteIcon, GroupsIcon, LanguageIcon, FilterIcon, BellIcon, UserIcon, CrossIcon } = icons;


  const [openDropdown, setOpenDropdown] = useState(null);

  
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  const toggleLanguageDropdown = () => {
    
    setOpenDropdown(openDropdown === 'language' ? null : 'language');
  };

  const selectLanguage = (lang) => {
    setSelectedLanguage(lang);
    setOpenDropdown(null);
  };

  
  const toggleUserDropdown = () => {
    
    setOpenDropdown(openDropdown === 'user' ? null : 'user');
  };

  
  const [invite, setInvite] = useState(false);
  const openInvite = () => {
    setInvite(true);
    setOpenDropdown(null); 
  };
  const closeInvite = () => setInvite(false);

  return (
    <div className="flex fixed top-0 left-0 z-50 justify-between bg-white w-full border-b-[1px] border-gray-300 px-4 py-2 sm:overflow-visible">
      
      <div className='flex gap-5 items-center'>
        <Link to="/" className="hidden lg:block md:block">
          <img src={assets.logo} alt="Logo" />
        </Link>
        <Link to="/" className="lg:hidden md:hidden block mx-0">
          <img src={assets.head_icon} alt="Head Icon" />
        </Link>
        <button className='block md:hidden lg:hidden' onClick={toggleSidePanel}>
          <FilterIcon className='w-10 h-10'/>
        </button>
      </div>

      
      <div className="flex items-center gap-x-4 font-light">
        
        <div className="flex items-center gap-x-2">
          <InviteIcon className="w-6 h-6" onClick={openInvite} />
          {invite && (
            <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
              <Invite onclose={closeInvite}/>
            </div>
          )}
          <p className="hidden lg:block md:block">Invite</p>
        </div>


        <div className="flex items-center gap-x-2">
          <GroupsIcon className="w-6 h-6" />
          <p className="hidden lg:block md:block">Group Trading</p>
        </div>

        
        <div className="relative flex items-center gap-x-2">
          <LanguageIcon className="w-5 h-5" />
          <button
            onClick={toggleLanguageDropdown}
            className="flex items-center gap-2 bg-gray-100 py-2 px-4 rounded focus:outline-none"
          >
            <img
              src={selectedLanguage === "EN" ? assets.EN : assets.ID}
              alt={selectedLanguage}
              className="w-5 h-5"
            />
            <p>{selectedLanguage}</p>
          </button>
          {openDropdown === 'language' && (
            <div className="absolute top-full mt-1 z-50 bg-white shadow-md rounded w-32">
              <div
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => selectLanguage("EN")}
              >
                <img src={assets.EN} alt="EN" className="w-5 h-5" />
                <p>EN</p>
              </div>
              <div
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => selectLanguage("ID")}
              >
                <img src={assets.ID} alt="ID" className="w-5 h-5" />
                <p>ID</p>
              </div>
            </div>
          )}
        </div>

        
        <div className='relative'>
          <button onClick={() => setOpenDropdown(openDropdown === 'notification' ? null : 'notification')}>
            <BellIcon className="w-5 h-5"/>
          </button>
          {openDropdown === 'notification' && (
            <div className='absolute z-10 top-2 -right-10 lg:right-0 md:right-0 lg:w-96 md:w-96 w-80 rounded-lg shadow-lg bg-white border-[1px] border-gray-300'>
              <div className='p-2 px-3 flex justify-between'>
                <h6 className='font-bold'>Notification</h6>
                <button onClick={() => setOpenDropdown(null)}>
                  <CrossIcon/>
                </button>
              </div>
              <div className='p-2 mx-1 space-y-1'>
                <span className='flex items-center bg-blue-100 rounded lg:gap-4 md:gap-4 gap-3'>
                  <div className='bg-gray-100 rounded-md w-12 h-8 flex justify-center ml-2 items-center'>
                    <input type='checkbox' className='border-[1px] border-gray-500 w-3 h-3'/>
                  </div>
                  <div className='font-semibold'>
                    <p>Order - BORN-760 Updated status of Credit Rejected By blitznet team</p>
                    <p className='text-gray-400'>25-08-2022 08:53:00</p>
                  </div>
                </span>
                <span className='flex items-center bg-blue-100 rounded gap-4'>
                  <div className='bg-gray-100 rounded-md w-8 h-8 flex justify-center ml-2 items-center'>
                    <input type='checkbox' className='border-[1px] border-gray-500 w-3 h-3'/>
                  </div>
                  <div className='font-semibold'>
                    <p>Order Placed - BORN-760 By Munir Malek</p>
                    <p className='text-gray-400'>25-08-2022 08:51:24</p>
                  </div>
                </span>
                <span className='flex items-center rounded gap-4'>
                  <div className='bg-gray-100 rounded-md w-12 h-8 flex justify-center ml-2 items-center'>
                    <input type='checkbox' className='border-[1px] border-gray-500 w-3 h-3'/>
                  </div>
                  <div className='font-semibold'>
                    <p>RFQ Response Received - BQTN-1367 By blitznet team</p>
                    <p className='text-gray-400'>25-08-2022 08:47:54</p>
                  </div>
                </span>
                <span className='flex items-center rounded gap-4'>
                  <div className='bg-gray-100 rounded-md w-8 h-8 flex justify-center ml-2 items-center'>
                    <input type='checkbox' className='border-[1px] border-gray-500 w-3 h-3'/>
                  </div>
                  <div className='font-semibold'>
                    <p>Address Added By</p>
                    <p className='text-gray-400'>16-08-2022 06:47:10</p>
                  </div>
                </span>
                <span className='flex items-center rounded gap-4'>
                  <div className='bg-gray-100 rounded-md w-8 h-8 flex justify-center ml-2 items-center'>
                    <input type='checkbox' className='border-[1px] border-gray-500 w-3 h-3'/>
                  </div>
                  <div className='font-semibold'>
                    <p>Address Added By</p>
                    <p className='text-gray-400'>16-08-2022 06:46:17</p>
                  </div>
                </span>
              </div>
              <div className='p-2 px-3 flex font-bold md:font-semibold justify-between'>
                <span>Mark all as read</span>
                <Link to='/login' className='text-blue-700'>View All</Link>
              </div>
            </div>
          )}
        </div>

        
        <div className="relative">
          <button
            onClick={toggleUserDropdown}
            className="p-2 rounded-full hover:bg-gray-100 focus:outline-none"
          >
            <UserIcon className="w-5 h-5" />
          </button>

          {openDropdown === 'user' && (
            <div className="absolute right-0 mt-2 bg-white shadow-md rounded w-40">
              <Link
                to="/"
                onClick={() => setOpenDropdown(null)}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-200 active:bg-blue-700 active:text-white"
              >
                Dashboard
              </Link>
              <Link to='/login'
                onClick={() => setOpenDropdown(null)}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-200 active:bg-blue-700 active:text-white"
              >
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;