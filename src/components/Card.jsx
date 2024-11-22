import React from 'react';
import { assets,icons } from '../assets/assets';

const Card = () => {
    const { CameraIcon, CallIcon, EditIcon, BuildingIcon, MailIcon,User2Icon,LogoutIcon,CreditIcon } = icons;
  return (
    <div className='w-80 bg-gray-300 rounded-t-3xl flex flex-col space-y-6 font-raleway'>
        <div className=''>
            <img src={assets.card_bg} alt="" className='h-24 w-80 rounded-3xl'/>
            </div>
        <div className='text-right mx-4 mr-12 relative'>
            <img src={assets.profile_logo} alt="" className='absolute -top-20 w-24 h-24'/>
            <div className='absolute left-16 -top-2 bg-blue-500 rounded-xl w-6 h-6 items-center justify-center flex '>
            <CameraIcon className='w-4 h-4'/></div>
            <p className=''>Bulan Hidayat</p>
            <h6 className='font-bold'>Manager</h6>
        </div>
        
        <div className='flex flex-col mx-3 font-montserrat'>
            <p className='flex items-center gap-3'><MailIcon/>bulanhidayat22@gmail.com</p>
            <p className='flex items-center gap-3'><CallIcon/>+62 857 34597</p>
            <p className='flex items-center gap-3'><BuildingIcon/>Blitznet<User2Icon/><EditIcon className='ml-8'/></p>
        </div>
        <div className='grid text-md grid-cols-2 text-white'>
            <button className='bg-blue-800 p-1'>
               <p className='flex items-center gap-2 justify-center'> <CreditIcon/>Apply Credit</p>
            </button>
            <button className='bg-blue-500 p-1'>
               <p className='flex items-center gap-2 justify-center'><LogoutIcon/> Logout</p>
            </button>
        </div>
    </div>
  )
}

export default Card