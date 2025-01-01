import React, {useState} from 'react';
import { assets,icons } from '../assets/assets';
import { Link } from 'react-router-dom';

const Card = ({}) => {
    const { CameraIcon, CallIcon, SwitchIcon, BuildingIcon, MailIcon,User2Icon,LogoutIcon,CreditIcon,CrossIcon, SettingIcon } = icons;
    const [isEditing, setIsEditing] = useState(false);
    const handleEditClick = (e) => {
      e.stopPropagation(); // Prevent event bubbling to parent components
      setIsEditing((prev) => !prev);  
  };
  return (
    <div className='xl:w-80 w-11/12 bg-white shadow-2xl mb-5  flex flex-col space-y-2 font-raleway p-2 rounded-md'>
        <div className=''>
            <img src={assets.fbi_white} alt="" className='h-24 w-80'/>
            </div>
        
            <div className='flex justify-between mx-4 items-end'>
            <img src={assets.ps} alt="avatar" className='w-16 h-16 border-2'/>
            <div className='flex gap-4 items-end'>
              <p>Loader</p>
              <span className='border-2 p-1 rounded-md border-darkRed relative group'>
            <Link to='/setting' className=''><SettingIcon className='w-5 h-5 appearance-none'/></Link>
            <div className='bg-grayShade opacity-0 absolute group-hover:opacity-100 -top-1 transform -translate-y-full transition-opacity duration-200 p-1'>
              <p className='text-white whitespace-nowrap text-xs'>Edit profile</p>
            </div>
            </span>
            </div>
            </div>
        <span className=' mx-4'>
            <p className='text-lightRed font-semibold'>Bulan Hidayat</p>
            <p className='font-bold'>Manager</p></span>
        <div className='flex mx-3 justify-between font-montserrat relative'>
          <div>
            <p className='flex items-center text-[14px] font-medium gap-3'><MailIcon/>bulanhidayat22@gmail.com</p>
            <p className='flex items-center text-[14px] font-medium  gap-3'><CallIcon/>+62 857 34597</p>
            <p className='flex items-center text-[14px] font-medium gap-3'><BuildingIcon/>FBIndustries</p></div>
            <div>
            <span onClick={handleEditClick}
        className="ml-4 w-5 h-5 cursor-pointer">
            {isEditing ? (
          <CrossIcon className="w-5 h-5 text-lightRed" />
        ) : ( <span className='relative group
        '>
          <SwitchIcon className="w-5 h-5 text-grayShade " />
          <div className='bg-grayShade opacity-0 absolute group-hover:opacity-100 top-0 transform -translate-y-1/6 transition-opacity duration-200 p-1'>
              <p className='text-white whitespace-nowrap text-xs'>Switch company</p>
            </div></span>
        )}</span>
        {isEditing && (
  <div className="absolute -top-1/2 -translate-x-full bg-white border border-gray-300 shadow-lg rounded-md mt-1 w-56">
    <ul className="space-y-2">
        <div className='bg-lightRed rounded-md'>
      <li className="text-sm text-white font-medium p-2">Companies List</li></div>
      <div className='flex items-center p-1 cursor-pointer'>
        <span className='h-6 w-6 rounded-full border-[1px] border-red-300 flex justify-center items-center bg-red-200 p-1'><p className='font-bold text-xs'>BS</p></span>
      <li className="text-sm p-1 px-2">Bharti Soft</li>
      <User2Icon className='w-4 h-4 ml-20'/>
      </div>
      <div className='flex  items-center p-1 cursor-pointer'>
        <span className='h-6 w-6 rounded-full border-[1px] border-red-300 flex justify-center items-center bg-red-200 p-1'><p className='font-bold text-xs'>B</p></span>
      <li className="text-sm p-1 px-2">BCS</li>
      <button className='text-[9px] bg-green-200 border-[1px] border-green-300 text-green-700 p-2 w-12 h-4 rounded-full flex items-center justify-center ml-24'>Active</button>
      </div>
    </ul>
  </div>
)}
</div>


            
        </div>
        {/* <div className='grid text-md text-white whitespace-nowrap'>
          
            <button className='bg-lightRed hover:bg-darkRed p-1 tracking-wider'>
               <p className='flex items-center gap-2 text-sm justify-center cursor-pointer'><LogoutIcon/> Logout</p>
               
            </button>
        </div> */}
    </div>
  )
}

export default Card