import React, {useEffect, useState} from 'react'
import { assets, icons } from '../assets/assets'

const Contact = ({ onClose, onSubmit }) => {
  const { CrossIcon, PlusIcon } = icons;
  const [contactForm, setContactForm] = useState({
    salutation:'',
    fname:'',
    lname:'',
    email:'',
    salutationphone:'',
    number:'',
  })

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  },[]);

  const handleWheel = (e) => {
    e.preventDefault()
    
  }
  const handleContactForm = (event) => {
    let val = event.target.value;
    let key = event.target.name;
    console.log(`Updating key: ${key} with value: ${val}`); // Add this line
    setContactForm({...contactForm, [key]: val});
    console.log(contactForm); // Add this to verify the state
  }
  const handleSaveChanges = () => {
    onSubmit(contactForm)
    onClose()
    
    
  }
  return (
    <div className="absolute z-10 top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div
        className="bg-white rounded-md shadow-2xl lg:w-1/2 md:w-1/2 w-3/4 relative z-20 transition-transform duration-200"
        onWheel={handleWheel}
      >
        <div className="flex flex-col justify-center w-full text-sm lg:text-base md:text-base">
          <div className="flex justify-between items-center bg-darkRed w-full md:px-4 px-3  py-3 rounded-t-md p-2">
            <img src={assets.fbi_logo_white} alt="Logo" className="w-12 h-7" />
            <h1 className="text-white md:text-lg sm:text-sm text-[15px] font-semibold">
              CONTACT PERSON DETAILS
            </h1>
            <CrossIcon
              className="text-white cursor-pointer w-5 h-5"
              onClick={onClose}
            />
          </div>

          <div className="flex flex-col gap-2 mt-4 px-5">
            <span className="grid grid-cols-2 gap-4 ">
              <span>
                <label htmlFor="fname">First Name</label>
                <span className='flex'>
                  <select
                    className="border border-gray-300 p-2 border-r-0 focus:outline-none hidden sm:block"
                    name="salutation"
                    id="salutation"
                    onChange={handleContactForm}
                  >
                    <option value="mr">Mr.</option>
                    <option value="mrs">Mrs.</option>
                    <option value="ms">Ms.</option>
                  </select>
                  <input
                    type="text"
                    className="w-full border border-gray-300 p-2 focus:outline-none" name='fname' onChange={handleContactForm}
                  />
                </span>
              </span>
              <span>
                <label htmlFor="LName">Last Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 p-2 focus:outline-none" name='lname' onChange={handleContactForm}
                />
              </span>
            </span>
            <span className="grid grid-cols-2 gap-4">
              <span>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 p-2 focus:outline-none" name='email' onChange={handleContactForm}
                />
              </span>
              <span>
                <label htmlFor="number">Phone Number</label>
                <span className='flex'>
                <select
                    className="border border-gray-300 p-2 border-r-0 focus:outline-none hidden sm:block"
                    name="salutationphone"
                    id="salutationphone"
                    onChange={handleContactForm}
                  >
                    <option value="61">+61</option>
                    <option value="62">+62</option>
                    <option value="63">+63</option>
                  </select>
                <input
                  type="number"
                  className="w-full border border-gray-300 p-2 focus:outline-none" name='number'
                  onChange={handleContactForm}
                />
                </span>
              </span>
            </span>
          </div>

          <div className="flex justify-end gap-4 mt-4 sm:text-sm pr-4 mb-4">
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md  flex items-center gap-2 hover:bg-gray-300">
              <CrossIcon className="w-5 h-5" />
              Cancel
            </button>
            <button className="bg-lightRed text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-darkRed" onClick={handleSaveChanges}>
              <PlusIcon className="w-5 h-5" />
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
