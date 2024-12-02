import React, {useEffect,useState} from 'react';
import { assets, icons } from '../assets/assets';

const Delivery = ({ onClose }) => {
  const { CrossIcon, PlusIcon } = icons;
  const [isScaled, setIsScaled] = useState(false);
 

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
  return (
    <div className="absolute z-10 top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div  className={`bg-white rounded-lg shadow-2xl lg:w-1/2 md:w-1/2 w-11/12 relative z-20 transition-transform duration-200 ${
          isScaled ? 'scale-110' : 'scale-100'
        }`}
        onWheel={handleWheel}>
        <div className="flex flex-col justify-center w-full">
          <div className="flex justify-between items-center bg-blue-700 w-full px-4 py-3 rounded-t-lg p-2">
            <img src={assets.Modal_logo} alt="Logo" className="w-8 h-8" />
            <h1 className="text-white text-lg font-semibold">DELIVERY DETAILS</h1>
            <CrossIcon className="text-white cursor-pointer" onClick={onClose} />
          </div>

          <div className="flex flex-col gap-2 mt-4 px-5 text-xs lg:text-base md:text-sm">
            <span>
              <label htmlFor="add">Address Name</label>
              <input type="text" className="w-full border border-gray-300 p-2 rounded" />
            </span>
            <span>
              <label htmlFor="add">Address Line 1</label>
              <input type="text" className="w-full border border-gray-300 p-2 rounded" />
            </span>
            <span>
              <label htmlFor="add">Address Line 2</label>
              <input type="text" className="w-full border border-gray-300 p-2 rounded" />
            </span>
            <span className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <span>
                <label htmlFor="sub">Sub District</label>
                <input type="text" className="w-full border border-gray-300 p-2 rounded" />
              </span>
              <span>
                <label htmlFor="dis">District</label>
                <input type="text" className="w-full border border-gray-300 p-2 rounded" />
              </span>
              <span>
                <label htmlFor="provinces">Provinces</label>
                <select name="provinces" id="provinces" className="w-full border border-gray-300 p-2 rounded">
                  <option value=""></option>
                  <option value="one">One</option>
                  <option value="two">Two</option>
                  <option value="three">Three</option>
                </select>
              </span>
              <span>
                <label htmlFor="regency">City Regency</label>
                <select name="regency" id="regency" className="w-full border border-gray-300 p-2 rounded">
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
                <input type="text" className="w-full border border-gray-300 p-2 rounded" />
              </span>
              <span>
                <label htmlFor="date">Expected Delivery Date</label>
                <input type="date" className="w-full border border-gray-300 p-2 rounded" />
              </span>
            </span>
          </div>

          <div className="flex justify-end gap-4 mt-4 pr-4 mb-4">
            <button
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full flex items-center gap-2 hover:bg-gray-300"
            >
              <CrossIcon className="w-5 h-5" />
              Cancel
            </button>
            <button className="bg-blue-700 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-blue-800">
              <PlusIcon className="w-5 h-5" />
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
