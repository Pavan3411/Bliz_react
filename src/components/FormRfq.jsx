import React, {useState} from 'react'
import SidePanel from './SidePanel'
import { assets,icons } from '../assets/assets'
import Toggle from './toggle'
import Delivery from './delivery'
import Contact from './Contact'

const FormRfq = () => {
  const [popupType, setPopupType] = useState(null); 

    const products = Array.from({ length: 11 }, (index) => ({
        id: index + 1,
        title: "Steel Plate - High Carbon - Steel Plate",
        category: "- Flat Products",
        quantity: "1000Pcs",
        description: "PLATE SPCC THK 0.5MM X 4' X COIL",
      }));
      
      const openPopup = (type) => {
        setPopupType(type);
      };
    
      const closePopup = () => {
        setPopupType(null); 
      };
    const {EditIcon,CrossIcon,TickIcon,PlusIcon,AttachmentIcon} = icons
  return (
    <div className=' flex flex-col md:flex-row lg:flex-row bg-gray-100 overflow-hidden'>
        <div className='lg:basis-3/12 w-full md:basis-3/12 hidden lg:block'>
        <SidePanel className=''/>
        </div>
        <div className='lg:basis-5/12 w-full flex flex-col sm:items-center md:basis-4/12 lg:mx-2'>
        <div className='bg-white shadow-xl md:p-4 p-1 py-3 mt-5 flex flex-col sm:w-11/12 md:w-full m-2'>
            <h1 className='text-blue-700 font-extrabold md:font-bold'>POST A NEW REQUIREMENT</h1>
            <p className='text-gray-600 font-bold md:font-medium'>Product Details</p>
            <form className='flex flex-col w-full text-sm md:text-base space-y-2 p-2 mt-1'>
                <label htmlFor='category'>Product Category<span className='text-red-800'>*</span></label>
                <select name="category" id="category" className='border-[1px] border-gray-300 focus:border-gray-500 outline-none h-6'>
                    <option value="steel">Steel</option>
                    <option value="steel">Steel</option>
                    <option value="steel">Steel</option>
                    <option value="steel">Steel</option>
                </select>
                <label for='category'>Product Sub Category<span className='text-red-800'>*</span></label>
                <select name="sub-category" id="sub-category" className='border-[1px] border-gray-300 focus:border-gray-500 outline-none h-6'>
                    <option value="steel">Steel</option>
                    <option value="steel">Steel</option>
                    <option value="steel">Steel</option>
                    <option value="steel">Steel</option>
                </select>
                <label for='category'>Product Name<span className='text-red-800'>*</span></label>
                <select name="productname" id="productname" className='border-[1px] border-gray-300 focus:border-gray-500 outline-none h-6'>
                    <option value="steel">Steel</option>
                    <option value="steel">Steel</option>
                    <option value="steel">Steel</option>
                    <option value="steel">Steel</option>
                </select>
                <div className='flex flex-col gap-2 lg:flex-row md:flex-row lg:justify-between'>
                    <span className='flex flex-col gap-1 w-full md:w-5/12 lg:w-5/12'>
                    <label htmlFor="quantity">Quantity<span className='text-red-800'>*</span></label>
                    <input type="text" placeholder=' 1 ' className='border-[1px] border-gray-300 focus:border-gray-500 outline-none h-6'/></span>
                    <span className='flex flex-col gap-1 w-full lg:w-5/12'>
                    <label htmlFor="unit">Unit<span className='text-red-800'>*</span></label>
                    <select name="productname" id="productname" className='border-[1px] border-gray-300 focus:border-gray-500 
                    outline-none h-6'>
                    <option value="steel">KG</option>
                    <option value="steel">MG</option>
                    <option value="steel">TON</option>
                    <option value="steel">ML</option>
                    </select>
                    </span>
                                    </div>
                                    <div className='mb-2 space-y-1'>
                                    <label htmlFor="description">Product Description<span className='text-red-800'>*</span></label>
                    <textarea name="description" rows="3" className='border-[1px] border-gray-300 focus:border-gray-500 
                    outline-none p-2 mb-2 w-full'/></div>

                <div className='flex justify-end gap-x-4 text-sm'>
                    <button className='bg-gray-400 text-white rounded-full p-1 px-3 flex items-center gap-2'>
                        <CrossIcon className='w-5 h-5'/>
                        <p>Cancel</p>
                    </button>
                    <button className='bg-blue-700 text-white rounded-full p-1 px-2 flex items-center gap-2'>
                        <PlusIcon className='w-6 h-6'/>
                        <p>Add Product</p>
                    </button>
                </div>
            </form>
        </div>
        <div className='bg-white shadow-xl p-4 mt-2 space-y-1 text-sm sm:w-11/12 md:w-full lg:text-base md:text-base m-2'>
            <label htmlFor="comment gap-1">Comments<span className='text-red-800'>*</span></label>
            <textarea name="comment" id="comment" rows="3" className='border-[1px] border-gray-300 focus:border-gray-500 
                    outline-none w-full'/>
            <div className='flex flex-col md:flex-row gap-2 lg:flex-row justify-between'>
            <span className='flex flex-col gap-1 w-full md:w-5/12 lg:w-5/12'>
                <label htmlFor="attachment">Upload Attachment<span className='text-red-800'>*</span></label>
                <div className='relative'>
                <input type="text" className='border-[1px] border-gray-300 h-6 focus:border-gray-500 
                    outline-none w-full'/><AttachmentIcon className='absolute top-1 right-2 text-gray-300 cursor-pointer '/></div></span>
                <span className='flex flex-col gap-1 w-full md:w-5/12 lg:w-5/12'>
                <label htmlFor="commercial">Commercial T&C<span className='text-red-800'>*</span></label>
                <div className='relative'>
                <input type="text" className='border-[1px] border-gray-300 h-6 focus:border-gray-500 
                    outline-none w-full' /><AttachmentIcon className='absolute top-1 right-2 text-gray-300 cursor-pointer '/></div></span>
            </div>
            <div className='flex flex-col md:flex-row gap-2 lg:flex-row justify-between'>
            <span className='flex flex-col gap-1 w-full md:w-5/12 lg:w-5/12'>
                <label htmlFor="attachment" className='whitespace-nowrap'>Expected Delivery Date<span className='text-red-800'>*</span></label>
                <input type="text" className='border-[1px] border-gray-300 h-6 focus:border-gray-500 
                    outline-none'/></span>
                <span className='flex flex-col gap-1 w-full md:w-5/12 lg:w-5/12'>
                <label htmlFor="commercial">Response Deadline<span className='text-red-800'>*</span></label>
                <input type="text" className='border-[1px] border-gray-300 h-6 focus:border-gray-500 
                    outline-none' /></span>
            </div>
        </div>
        <div className='flex gap-2 p-3 bg-white mt-2 shadow-lg sm:w-11/12 md:w-full text-sm lg:text-base md:text-base m-2'>
            <input type="checkbox" />
            <label htmlFor="rental" className='mr-3'>Need Rental Forklift</label>
            <input type="checkbox" />
            <label htmlFor="unloading">Need Unloading Service</label>
        </div>
        <div className='flex justify-between flex-wrap lg:flex-row items-center p-3 bg-white m-2 sm:w-11/12 md:w-full mt-2 shadow-lg text-sm lg:text-base md:text-base whitespace-nowrap space-y-1 md:space-y-0'>
        
            <span className='space-x-4 flex items-center'>
            <input type="checkbox" />
            <label htmlFor="supplier" className='mr-3  white'>All Suppliers</label></span>
            <span className='space-x-4 flex items-center'>
            <input type="checkbox" />
            <label htmlFor="p_supplier">Preffered Suppliers Only</label></span>
            <span className='space-x-2'><EditIcon className='sm:w-5 sm:h-7 w-6 h-6'/></span>
                <span className='flex space-x-1'><Toggle/>
                <p>Require Credit?</p></span>
        </div>
        <div className='sm:w-11/12 md:w-full m-2'>
            <button className=' w-full bg-blue-700 text-white rounded font-light flex justify-center items-center gap-2 p-1 mt-2 shadow-xl'>
                <PlusIcon className='w-6 h-6'/>
                <p>Post RFQ</p>
            </button>
        </div>
        </div>
        <div className='lg:basis-4/12 md:basis-10/12 w-full mt-3'>
        <div className='flex justify-evenly mt-2'>
        <div className='w-5/12 bg-white shadow-lg p-2 opacity-100 transition-opacity'>
  <div className="flex items-center justify-between">
    <p className="text-gray-500 text-sm font-bold sm:font-semibold lg:text-base md:text-base">
      Delivery Details<span className="text-red-800 m-[2px]">*</span>
    </p>
    <span className="flex gap-2">
      <CrossIcon className="text-red-700" />
      <EditIcon onClick={() => openPopup('delivery')} />
      {popupType && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          {popupType === 'delivery' && <Delivery onClose={closePopup} />}
          {popupType === 'contact' && <Contact onClose={closePopup} />}
        </div>
      )}
    </span>
  </div>
  <p className="text-[13px] text-gray-400 font-bold mt-1">No Data</p>
</div>


            <div className='w-5/12 bg-white shadow-lg p-2 h-36'>
            <div className='flex items-center justify-between mb-1'>
                <p className='text-gray-500 font-bold sm:font-semibold text-sm lg:text-base md:text-base'>Contact Details<span className='text-red-800 m-[2px]'>*</span></p>
                <span className='flex gap-2 '>
                <TickIcon className='text-green-700'/>
                <EditIcon onClick={() => openPopup('contact')} />
      </span>
                </div>
                <p className='text-xs text-gray-800 font-semibold'>Bulan Hidayat</p>
                <p className='text-xs text-gray-800 font-semibold break-words'>bulanhidayat22@gmail.com</p>
                <p className='text-xs text-gray-800 font-semibold'>+62 85770345978</p>
            </div>
        </div>
        <div className='flex flex-col m-2 items-center'>
        <div className='bg-white shadow-lg w-full sm:w-11/12 mt-5 h-[672px] overflow-y-scroll scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-100'>
  {products.map((product) => (
    <div key={product.id} className='text-gray-700 text-sm p-2 px-4 relative group custom:text-xs custom1:text-sm'>
      <h2 className='text-base font-bold sm:font-semibold text-black'>{product.title}</h2>
      <p><span className='font-bold sm:font-semibold  opacity-70 text-black'>Steel</span> {product.category}</p>
      <p>
        <span className='text-black font-bold sm:font-semibold opacity-70'>Qty:</span> {product.quantity}
      </p>
      <p>
        <span className='text-black font-bold sm:font-semibold opacity-70'>Description:</span> {product.description}
      </p>
      <div className='opacity-0 absolute group-hover:opacity-100 transition-all duration-100 gap-1 flex right-12 top-9 lg:top-7'>
        <span className='text-gray-900 w-12 '>
          <EditIcon style={{ width: '20px', height: '20px' }} />
        </span>
        <span className='text-red-700'>
          <CrossIcon style={{ width: '20px', height: '20px' }} />
        </span>
      </div>
      <hr />
    </div>
  ))}
</div>
</div>

        </div>
    </div>
  )
}

export default FormRfq