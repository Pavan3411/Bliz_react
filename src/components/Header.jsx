import React from 'react';
import { assets, icons } from '../assets/assets';

const Header = () => {
    const { UserIcon, BellIcon, LanguageIcon, GroupsIcon, InviteIcon } = icons;
  return (
    <div className='flex justify-between bg-slate-100 px-4 py-2'>
        <div>
            <img src={assets.logo} alt="" />
        </div>
        <div className='flex items-center gap-x-4 font-light'>
            <div className='flex items-center gap-x-2'>
            <InviteIcon className='w-6 h-6' />
                <p>Invite</p>
            </div>
            <div className='flex items-center gap-x-2'>
            <GroupsIcon className='w-6 h-6' />
               <p> Group Trading</p>
               </div>
            <div className='flex items-center gap-x-2'>
            <LanguageIcon className='w-6 h-6' />
                <p>EN</p>
            </div>
            <div>
                <BellIcon className='w-6 h-6' />
            </div>
            <div>
            <UserIcon className='w-6 h-6' />
                </div>
        </div>
    </div>
  )
}

export default Header