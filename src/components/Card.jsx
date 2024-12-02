import React, {useState} from 'react';
import { assets,icons } from '../assets/assets';

const Card = ({}) => {
    const { CameraIcon, CallIcon, EditIcon, BuildingIcon, MailIcon,User2Icon,LogoutIcon,CreditIcon,CrossIcon } = icons;
    const [isEditing, setIsEditing] = useState(false);
    const handleEditClick = (e) => {
      e.stopPropagation(); // Prevent event bubbling to parent components
      setIsEditing((prev) => !prev);  
  };
  return (
    <div className='xl:w-72 w-11/12 bg-white shadow-lg rounded-t-3xl  flex flex-col space-y-6 font-raleway'>
        <div className=''>
            <img src={assets.card_bg} alt="" className='h-24 w-80 rounded-3xl'/>
            </div>
        <div className='text-right mx-4 lg:mr-1 xl:mx-4 mr-12 relative flex justify-between items-center'>
            <div>
            <img src={assets.profile_logo} alt="" className='absolute -top-20 w-24 h-24'/>
            <span className='absolute left-16 -top-2 bg-blue-500 rounded-xl w-6 h-6 items-center justify-center flex '>
            <CameraIcon className='w-4 h-4 cursor-pointer'/></span></div>
            <span className='text-left lg:text-right'>
            <p className=''>Bulan Hidayat</p>
            <p className='font-bold'>Manager</p></span>
        </div>
        
        <div className='flex flex-col mx-3 font-montserrat relative'>
            <p className='flex items-center text-[13px] font-medium gap-3'><MailIcon/>bulanhidayat22@gmail.com</p>
            <p className='flex items-center text-[13px] font-medium  gap-3'><CallIcon/>+62 857 34597</p>
            <p className='flex items-center text-[13px] font-medium gap-3'><BuildingIcon/>Blitznet<User2Icon/>
            <span onClick={handleEditClick}
        className="ml-4 w-5 h-5 cursor-pointer">
            {isEditing ? (
          <CrossIcon className="w-5 h-5 text-red-500" />
        ) : (
          <EditIcon className="w-5 h-5 text-blue-500" />
        )}</span>
        {isEditing && (
  <div className="absolute top-0 -translate-y-full bg-white border border-gray-300 shadow-lg rounded-md mt-1 w-56">
    <ul className="space-y-2">
        <div className='bg-blue-700 rounded-md'>
      <li className="text-sm text-white font-medium p-2">Companies List</li></div>
      <div className='flex items-center p-1 cursor-pointer'>
        <span className='h-6 w-6 rounded-full border-[1px] border-blue-300 flex justify-center items-center bg-blue-200 p-1'><p className='font-bold text-xs'>BS</p></span>
      <li className="text-sm p-1 px-2">Bharti Soft</li>
      <User2Icon className='w-4 h-4 ml-20'/>
      </div>
      <div className='flex  items-center p-1 cursor-pointer'>
        <span className='h-6 w-6 rounded-full border-[1px] border-blue-300 flex justify-center items-center bg-blue-200 p-1'><p className='font-bold text-xs'>B</p></span>
      <li className="text-sm p-1 px-2">BCS</li>
      <button className='text-[9px] bg-green-200 border-[1px] border-green-300 text-green-700 p-2 w-12 h-4 rounded-full flex items-center justify-center ml-24'>Active</button>
      </div>
    </ul>
  </div>
)}
            </p>
        </div>
        <div className='grid text-md grid-cols-2 text-white whitespace-nowrap'>
            <button className='bg-blue-800 hover:bg-blue-900 p-1'>
               <p className='flex items-center gap-2 text-sm justify-center cursor-pointer'> <CreditIcon/>Apply Credit</p>
            </button>
            <button className='bg-blue-500 hover:bg-blue-600 p-1'>
               <p className='flex items-center gap-2 text-sm justify-center cursor-pointer'><LogoutIcon/> Logout</p>
            </button>
        </div>
    </div>
  )
}

export default Card