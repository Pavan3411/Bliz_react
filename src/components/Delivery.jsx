import React, {useEffect,useState} from 'react';
import { assets, icons } from '../assets/assets';

const delivery = ({ onClose, onSubmit}) => {
  const { CrossIcon, PlusIcon } = icons;
  const [isScaled, setIsScaled] = useState(false);
  const [formField, setFormField] = useState({
    address:'',
    address1:'',
    address2:'',
    subdistrict:'',
    district:'',
    provinces:'',
    regency:'',
    zipcode:'',
    date:'',
  })

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);
  const handleWheel = (e) => {
    e.preventDefault();
    setIsScaled(true);
    setTimeout(() => setIsScaled(false), 200);
  };
  const handleFormfield = (event) => {
    let val = event.target.value;
    let key = event.target.name;
    setFormField({...formField,[key]:val})
  }
  const handleSaveChanges = () => {
    onSubmit(formField);
    onClose();
  }
  return (
    <div className="absolute z-10 top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div  className={`bg-white rounded-md shadow-2xl lg:w-1/2 md:w-1/2 w-11/12 relative z-20 transition-transform duration-200 ${
          isScaled ? 'scale-110' : 'scale-100'
        }`}
        onWheel={handleWheel}>
        <div className="flex flex-col justify-center w-full">
          <div className="flex justify-between items-center bg-darkRed w-full px-4 py-3 rounded-t-md p-2">
            <img src={assets.fbi_logo_white} alt="Logo" className="w-12 h-7" />
            <h1 className="text-white text-lg font-semibold">DELIVERY DETAILS</h1>
            <CrossIcon className="text-white cursor-pointer w-5 h-5" onClick={onClose} />
          </div>

          <div className="flex flex-col gap-2 mt-4 px-5 text-xs lg:text-base md:text-sm">
          <span>
                <label htmlFor="regency">Select Address</label>
                <select name="regency" id="regency" className="w-full border border-gray-300 p-2 rounded" onChange={handleFormfield}>
                <option value="" disabled selected>
                      Select Address
                    </option>

                  <option value="one">One</option>
                  <option value="two">Two</option>
                  
                </select>
              </span>
            <span>
              <label htmlFor="add">Address Name</label>
              <input type="text" name="address" className="w-full border border-gray-300 p-2 rounded" onChange={handleFormfield} />
            </span>
            <span>
              <label htmlFor="add">Address Line 1</label>
              <input type="text" name="address1" className="w-full border border-gray-300 p-2 rounded" onChange={handleFormfield} />
            </span>
            <span>
              <label htmlFor="add">Address Line 2</label>
              <input type="text" name='address2' className="w-full border border-gray-300 p-2 rounded" onChange={handleFormfield} />
            </span>
            <span className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <span>
                <label htmlFor="sub">Sub District</label>
                <input type="text" name='subdistrict' className="w-full border border-gray-300 p-2 rounded" onChange={handleFormfield} />
              </span>
              <span>
                <label htmlFor="dis">District</label>
                <input type="text" name='district' className="w-full border border-gray-300 p-2 rounded" onChange={handleFormfield} />
              </span>
              <span>
                <label htmlFor="provinces">Provinces</label>
                <select name="provinces" id="provinces" className="w-full border border-gray-300 p-2 rounded" onChange={handleFormfield}>
                  <option value=""></option>
                  <option value="one">One</option>
                  <option value="two">Two</option>
                  <option value="three">Three</option>
                </select>
              </span>
              <span>
                <label htmlFor="regency">City Regency</label>
                <select name="regency" id="regency" className="w-full border border-gray-300 p-2 rounded" onChange={handleFormfield}>
                  <option value=""></option>
                  <option value="one">One</option>
                  <option value="two">Two</option>
                  <option value="three">Three</option>
                </select>
              </span>
            </span>
            <span className="grid grid-cols-2 gap-4">
              <span>
                <label htmlFor="delivery">Delivery Zip Code</label>
                <input type="text" name='zipcode' className="w-full border border-gray-300 p-2 rounded" onChange={handleFormfield} />
              </span>
              <span>
                <label htmlFor="date">Expected Delivery Date</label>
                <input type="date" name='date' className="w-full border border-gray-300 p-2 rounded" onChange={handleFormfield} />
              </span>
            </span>
          </div>

          <div className="flex justify-end gap-4 mt-4 pr-4 mb-4">
            <button
              className="bg-gray-200 text-grayShade px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-300"
            >
              <CrossIcon className="w-5 h-5" />
              Cancel
            </button>
            <button type='button' onClick={handleSaveChanges} className="bg-lightRed text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-darkRed">
              <PlusIcon className="w-5 h-5" />
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default delivery;
