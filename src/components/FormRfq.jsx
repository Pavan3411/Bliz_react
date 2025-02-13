import React, { useState, useEffect, useContext } from 'react'
import SidePanel from './SidePanel'
import { assets, icons } from '../assets/assets'
import Toggle from './toggle'
import Delivery from './delivery'
import Contact from './Contact'
import axios from 'axios'
import { motion, AnimatePresence  } from "framer-motion";
import UserContext from '../context/UserContext'

const FormRfq = () => {
  const [popupType, setPopupType] = useState(null)
  const [deliveryDetails, setDeliveryDetails] = useState({})
  const [contactDetails, setContactDetails] = useState({})
  const [searchInput, setSearchInput] = useState('')
  const [result, setResult] = useState([])
  const [attributes, setAttributes] = useState([])
  const [showDropDown, setShowDropDown] = useState(true)
  const [productList, setProductList] = useState([])
  const [productField, setProductField] = useState({
    id: '',
    productName: '',
    qty: '',
    unit: '',
    description: '',
  })
  const [selectedCategoryId, setSelectedCategoryId] = useState(null)
  const [productAttributes, setProductAttributes] = useState([])
  const [showAttributes, setShowAttributes] = useState([])
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const { contactData } = useContext(UserContext)
  

  const handleProductField = (event) => {
    let val = event.target.value
    let key = event.target.name
    setProductField({ ...productField, [key]: val })
  }
  useEffect(() => {
    console.log("productField............",productField)
  }, [productField])

  const handleDeliveryData = (data) => {
    setDeliveryDetails(data)
    setContactDetails(data)
  }
  const handleSaveProduct = (e) => {
    e.preventDefault(); // Prevent form submission
    if (!productField.productName || !productField.description || !productField.qty || !productField.unit) {
      return; // Stop if any required field is empty
    }

    const updatedProductList = [...productList, productField]
    setProductList(updatedProductList)

    // Save the updated list to localStorage immediately
    localStorage.setItem('productList', JSON.stringify(updatedProductList))

    setProductField({
      productName: '',
      qty: '',
      unit: '',
      description: '',
      id: '',
    })
    setSearchInput('');
  
  // Reset product attributes if needed
  setProductAttributes([]); // If you have this state
  
  // Reset dropdown
  setShowDropDown(false);
  setResult([]); 
  }

  const fetchData = async (value) => {
    try {
      const response = await axios.post(
        'https://cams-exim.com/api/searchProduct',
        {
          data: value,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )

      const json = response.data

      const results =
        json.data?.filter((user) => {
          return (
            value &&
            user?.productName &&
            user.productName.toLowerCase().includes(value.toLowerCase())
          )
        }) || []

      setResult(results)
    } catch (error) {
      console.error('Error fetching data:', error)
      setResult([])
    }
  }

  const fetchAttributes = async () => {
    try {
      const response = await axios.post(
        'https://cams-exim.com/api/getUnits',
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      setAttributes(response.data)
      console.log(response.data)
    } catch (err) {
      console.log('Error Occured', err)
    }
  }
  useEffect(() => {
    fetchAttributes()
  }, [])

  const handleChange = (value) => {
    setSearchInput(value)
    fetchData(value)
    setResult([])
  }
  const handleSelect = async (product) => {
    console.log("Selected Product:", product);
  
    if (!product || !product.productId) {
      console.error("Category ID is undefined");
      return;
    }
  
    // Update the selected product details
    setProductField(prev => ({
      ...prev,
      id: product.productId, // Ensure this matches your API response key
      productName: product.productName || "",
    }));
  
    setSearchInput(product.productName || ""); // Update search input separately
    setSelectedCategoryId(product.productId);
    setShowDropDown(false);
    setResult([]);
  
    console.log("Updated Product Field:", productField); // Debugging
    await fetchProductAttributes(product.productId);
  };
  
  // console.log("id:" ,selectedCategoryId);
  
  
  const fetchProductAttributes = async (id) => {
    if (!id) {
      console.error("Category ID is missing");
      return;
    }
  
    try {
      const response = await axios.post(
        "https://cams-exim.com/api/get-product-specification",
        {
          productId: id
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      console.log("API Response for Attributes:", response.data);
  
      // Since your response has the structure response[0].data
      if (response.data && 
          Array.isArray(response.data) && 
          response.data[0] && 
          response.data[0].data) {
        setProductAttributes(response.data[0].data);
      } 
      // Fallback handling
      else {
        console.log("Unexpected response format:", response.data);
        setProductAttributes([]); // Set empty array as fallback
      }
  
    } catch (err) {
      console.error("Error fetching product attributes:", err);
      setProductAttributes([]);
    }
};

  useEffect(()=> {
    console.log(productAttributes);
  },[])
  
  
  
  useEffect(() => {
    // Get data from localStorage and sort it
    const storedProducts = localStorage.getItem('productList')
    if (storedProducts) {
      // Parse the JSON and sort in descending order
      const products = JSON.parse(storedProducts)
      
      const sortedProducts = products.sort((a, b) => b.id - a.id);

      setProductList(sortedProducts)
    }
  }, [])
  const handleDeleteProduct = (id) => {
    // Filter out the product with the given id
    const updatedProductList = productList.filter(
      (product) => product.id !== id
    )

    // Update the state with the new product list
    setProductList(updatedProductList)

    // Optionally, update localStorage if you're saving the list there as well
    localStorage.setItem('productList', JSON.stringify(updatedProductList))
  }

  // Save product list to LocalStorage whenever productList changes
  // useEffect(() => {

  // }, [productList]);

  // const products = Array.from({ length: 4 }, (_, index) => ({
  //   id: index + 1,
  //   title: 'Steel Plate - High Carbon - Steel Plate',
  //   category: '- Flat Products',
  //   quantity: '1000Pcs',
  //   description: "PLATE SPCC THK 0.5MM X 4' X COIL",
  // }))

  const openPopup = (type) => {
    setPopupType(type)
  }

  const closePopup = () => {
    setPopupType(null)
  }
  const {
    EditIcon,
    CrossIcon,
    TickIcon,
    PlusIcon,
    AttachmentIcon,
    EyeIcon,
    SearchIcon,
  } = icons
  const placeholders = [
    "Search 'Products'",
    "Search 'Steels'",
    "Search 'Services'",
    "Search 'Manufacturing'",
    "Search 'Grains'",
  ]

  const [currentPlaceholder, setCurrentPlaceholder] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  useEffect(()=>{
    console.log("productattri",productAttributes);
    console.log("productfield",productField);
    console.log('productlist',productList);
  },[productAttributes,productField,productList]);

  return (
    <div className=" flex flex-col md:flex-row lg:flex-row overflow-hidden px-5 gap-5 w-full">
      <div className="lg:basis-1/4 md:basis-1/4 hidden lg:block sticky top-0 max-h-screen">
        <SidePanel className="" />
      </div>
      <div className="w-full flex gap-5">
        <div className="w-7/12 flex flex-col sm:items-center gap-5">
          <div className="bg-white shadow-xl md:p-3 p-1 py-3 mt-5 sm:w-11/12 md:w-full rounded-md pb-0">
            <h1 className="font-extrabold md:font-bold text-lg text-lightRed px-2">
              POST A NEW REQUIREMENT
            </h1>
            <form className="flex flex-col w-full text-sm md:text-base space-y-2 p-2">
              <label for="category">
                Product Name<span className="text-red-800">*</span>
              </label>
              <span className="flex items-center justify-between w-full border-[1px] border-grayHr gap-2 rounded-md">
                <input
                  type="text"
                  className="border-none bg-transparent px-2 w-full rounded-md focus:outline-none focus:ring-0"
                  placeholder={placeholders[currentPlaceholder]}
                  onChange={(e) => {
                    handleChange(e.target.value)
                    handleProductField(e)
                  }}
                  value={searchInput}
                  onFocus={() => setShowDropDown(true)}
                  name="productName"
                  required
                />
                <button className="h-7 w-10 flex items-center justify-center border-l -[1px] border-grayHr">
                  <SearchIcon className=" w-5 h-5" />
                </button>
              </span>
              {showDropDown && searchInput && (
                <div className="bg-gray-100 p-1 px-2 mt-1 rounded-md max-h-44 overflow-y-scroll scrollbar-none scrollbar-thin scrollbar-thumb-red-100 scrollbar-track-red-100">
                  <ul className="flex flex-col gap-4">
                    {result.length > 0
                      ? result.map((result, index) => (
                          <li
                            key={index}
                            className="list-none flex gap-2 items-center"
                            onClick={() => {
                              handleSelect(result)
                              setResult([])
                            }}
                          >
                            <span className="w-8 h-8 flex justify-center items-center bg-white rounded-md">
                              <img
                                src={assets.productImage}
                                className="w-7"
                                alt="productImage"
                              />
                            </span>
                            <p className="text-sm font-medium">
                              {result.productName}
                            </p>
                          </li>
                        ))
                      : !searchInput && (
                          <p className="text-gray-500 text-center">
                            No results found
                          </p>
                        )}
                  </ul>
                </div>
              )}
              <div className="mb-2 space-y-1">
                <label htmlFor="description">
                  Product Description<span className="text-red-800">*</span>
                </label>
                <input
                  name="description"
                  className="border-[1px] border-gray-300 focus:border-gray-500 
                    outline-none px-2 w-full rounded-md"
                  onChange={handleProductField}
                  value={productField.description}
                  required 
                />
              </div>

              <div className="flex flex-col gap-12 lg:flex-row md:flex-row lg:justify-between">
                <span className="flex flex-col gap-1 w-full">
                  <label htmlFor="quantity">
                    Quantity<span className="text-red-800">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder=" 1 "
                    className="border-[1px] border-gray-300 focus:border-gray-500 outline-none px-2 rounded-md"
                    name="qty"
                    onChange={handleProductField}
                    value={productField.qty}
                    required
                  />
                </span>
                <span className="flex flex-col gap-1 w-full">
                  <label htmlFor="unit">
                    Unit<span className="text-red-800">*</span>
                  </label>
                  <select
                    name="unit"
                    className="border-[1px] border-gray-300 focus:border-gray-500 
                    outline-none rounded-md"
                    onChange={handleProductField}
                    value={productField.unit}  
                    required
                  >
                    <option value="unit">Unit</option>
                    {attributes?.data?.map((attribute, index) => (
                      <option key={index} value={attribute?.name}>
                        {attribute?.name}
                      </option>
                    ))}
                  </select>
                </span>
              </div>
              {productAttributes.length > 0 && (
  <div className="bg-gray-50 p-3 mt-2 rounded-md">
    <h3 className="font-bold text-gray-700">Product Specifications</h3>
    <ul className="mt-2 grid grid-cols-2 gap-5">
   {productAttributes.map((attr, index) => (
     <li key={index} className="flex flex-col gap-1 w-full">
       <label htmlFor={`attr-${index}`}>
         {attr.template_label}
       </label>
       <input
         type="text" 
         id={`attr-${index}`}
         className="border-[1px] border-gray-300 focus:border-gray-500 focus:outline-none px-2 p-[2px] rounded-md "
         placeholder={`Enter ${attr.template_label}`}
       />
     </li>
   ))}
 </ul>
  </div>
)}


              <div className="flex justify-end gap-x-4 text-sm pt-3">
                <button className="bg-gray-400 text-white rounded-md p-1 px-3 flex items-center gap-2">
                  <CrossIcon className="w-5 h-5" />
                  <p>Cancel</p>
                </button>
                <button
                  className="bg-lightRed text-white rounded-md p-1 px-2 flex items-center gap-2"
                  onClick={handleSaveProduct}
                  type='submit'
                >
                  <PlusIcon className="w-6 h-6" />
                  <p>Add Product</p>
                </button>
              </div>
            </form>
          </div>
          <div className="bg-white shadow-xl p-3 px-5 pb-5 space-y-1 text-sm sm:w-11/12 md:w-full lg:text-base md:text-base rounded-md">
            <label htmlFor="comment gap-1">
              Comments<span className="text-red-800">*</span>
            </label>
            <input
              name="comment"
              id="comment"
              className="border-[1px] border-gray-300 focus:border-gray-500 
                    outline-none w-full rounded-md"
            />
            <div className="flex flex-col md:flex-row gap-12 lg:flex-row justify-between">
              <span className="flex flex-col gap-1 w-full">
                <label htmlFor="attachment">
                  Upload Attachment<span className="text-red-800">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className="border-[1px] border-gray-300 focus:border-gray-500 
                    outline-none w-full rounded-md"
                  />
                  <AttachmentIcon className="absolute top-[7px] right-2 text-gray-300 cursor-pointer " />
                </div>
              </span>
              <span className="flex flex-col gap-1 w-full">
                <label htmlFor="attachment" className="whitespace-nowrap">
                  Expected Delivery Date<span className="text-red-800">*</span>
                </label>
                <input
                  type="text"
                  className="border-[1px] border-gray-300 focus:border-gray-500 
                    outline-none rounded-md"
                />
              </span>
            </div>
          </div>
          <div className="flex gap-5 p-3 bg-white shadow-lg sm:w-11/12 md:w-full text-sm lg:text-base md:text-base rounded-md">
            <span className="flex gap-2">
              <input type="checkbox" className="" />
              <label htmlFor="rental" className="mr-3">
                Need Rental Forklift
              </label>{' '}
            </span>
            <span className="flex gap-2">
              <input type="checkbox" />
              <label htmlFor="unloading">Need Unloading Service</label>
            </span>
            <span className="flex gap-2 items-center">
              <p>
                <Toggle />
              </p>
              <p>Require Credit?</p>
            </span>
          </div>

          <div className="sm:w-11/12 md:w-full">
            <button className=" w-full bg-lightRed text-white rounded-md font-light flex justify-center items-center gap-2 p-1 shadow-xl">
              <PlusIcon className="w-6 h-6" />
              <p>Post RFQ</p>
            </button>
          </div>
        </div>
        <div className="w-5/12 mt-5">
          <div className="flex gap-5">
            <div className="w-1/2 bg-white shadow-lg p-2 opacity-100 transition-opacity min-h-36 rounded-md">
              <div className="flex items-center justify-between">
                <p className="text-gray-500 text-sm font-bold sm:font-semibold lg:text-base md:text-base">
                  Delivery Details
                  <span className="text-red-800 m-[2px]">*</span>
                </p>
                <span className="flex gap-2">
                  <CrossIcon
                    className="text-red-700"
                    onClick={() => setDeliveryDetails({})}
                  />
                  <EditIcon
                    onClick={() => openPopup('delivery')}
                    className="w-5 h-5"
                  />
                  {popupType && (
                    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
                      {popupType === 'delivery' && (
                        <Delivery
                          onClose={closePopup}
                          onSubmit={handleDeliveryData}
                        />
                      )}
                      {popupType === 'contact' && (
                        <Contact
                          onClose={closePopup}
                          onSubmit={handleDeliveryData}
                        />
                      )}
                    </div>
                  )}
                </span>
              </div>
              {deliveryDetails && Object.keys(deliveryDetails).length > 0 ? (
                <>
                  {' '}
                  <p className="text-[13px] text-gray-400 font-bold mt-1">
                    {deliveryDetails.address}
                  </p>
                  <p className="text-[13px] text-gray-400 font-bold mt-1">
                    {deliveryDetails.address1}
                  </p>
                  <span className="flex gap-10">
                    <p className="text-[13px] text-gray-400 font-bold mt-1">
                      {deliveryDetails.district}
                    </p>
                    <p className="text-[13px] text-gray-400 font-bold mt-1">
                      {deliveryDetails.provinces}
                    </p>
                  </span>
                  <span className="flex gap-10">
                    <p className="text-[13px] text-gray-400 font-bold mt-1">
                      {deliveryDetails.zipcode}
                    </p>
                    <p className="text-[13px] text-gray-400 font-bold mt-1">
                      {deliveryDetails.date}
                    </p>
                  </span>{' '}
                </>
              ) : (
                <p className="text-grayShade font-medium">No data</p>
              )}
            </div>

            <div className="w-1/2 bg-white shadow-lg p-2 min-h-36 rounded-md">
              <div className="flex items-center justify-between mb-1">
                <p className="text-gray-500 font-bold sm:font-semibold text-sm lg:text-base md:text-base">
                  Contact Details<span className="text-red-800 m-[2px]">*</span>
                </p>
                <span className="flex gap-2 ">
                  <TickIcon className="text-green-700" />
                  <EditIcon
                    onClick={() => openPopup('contact')}
                    className="w-5 h-5"
                  />
                </span>
              </div>
              <span>
                {(contactDetails || contactData) && Object.keys(contactDetails || contactData).length > 0 ? (
                  <div className='flex flex-col gap-1'>
                    <p className="text-sm text-gray-800 font-semibold">
                      {contactDetails.salutation} {contactDetails.fname}
                    </p>
                    <p className="text-sm text-gray-800 font-semibold break-words">
                      {contactDetails.email}
                    </p>
                    <p className="text-sm text-gray-800 font-semibold">
                      {contactDetails.salutationphone} {contactDetails.number}
                    </p>
                  </div>
                ) : (
                  <div className='flex flex-col gap-1'>
                  <p className="text-sm text-gray-800 font-semibold">
                      {contactData?.data?.user_firstname || "Loading"} {contactData?.data?.user_lastname}
                    </p>
                    <p className="text-sm text-gray-800 font-semibold break-words">
                      {contactData?.data?.user_email}
                    </p>
                    <p className="text-sm text-gray-800 font-semibold">
                      {contactData?.data?.user_phone_code} {contactData?.data?.user_mobile}
                    </p>
                    </div>
                )}
              </span>
            </div>
          </div>
          <div className="flex flex-col ">
            <div className="bg-white shadow-lg w-full mt-5 overflow-y-scroll scrollbar-thin scrollbar-thumb-lightRed scrollbar-track-fadeRed rounded-md max-h-[440px]">
              <h1 className="px-4 font-bold pt-2 text-base tracking-wide underline underline-offset-2 text-lightRed">
                PRODUCT DETAILS
              </h1>
              {productList.length > 0 ? (
  <AnimatePresence>
    {productList.map((product) => (
      <motion.div
        key={product.id} // Ensure product.id is unique
        className="text-gray-700 text-sm p-2 px-4 relative group custom:text-xs custom1:text-sm overflow-x-hidden"
        layout // Enables smooth entrance/exit animations
        initial={{ opacity: 0, y: 20 }} // Animate newly added product from bottom
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }} // Animate removal
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <h2 className="text-base font-bold sm:font-semibold text-black">
          {product.productName}
        </h2>
        <span className="flex gap-4">
          <p>
            <span className="text-black font-bold sm:font-semibold opacity-70">
              Qty:
            </span>{" "}
            {product.qty}
          </p>
          <p>
            <span className="text-black font-bold sm:font-semibold opacity-70">
              Unit:
            </span>{" "}
            {product.unit}
          </p>
        </span>
        <p>
          <span className="text-black font-bold sm:font-semibold opacity-70">
            Description:
          </span>{" "}
          {product.description}
        </p>
        <div className="absolute transition-all duration-100 gap-4 flex right-7 top-9 lg:top-7">
          <span className="text-grayShade hover:text-black">
            <EditIcon
              style={{ width: "20px", height: "20px" }}
              className="hover:scale-110"
            />
          </span>
          <span className="text-red-700 hover:text-darkRed">
            <CrossIcon
              style={{ width: "20px", height: "20px" }}
              className="hover:scale-110"
              onClick={() => handleDeleteProduct(product.id)}
            />
          </span>
          <span className="text-garyShade hover:text-lightRed" onClick={() => {
                fetchProductAttributes(product.id);
                setHoveredProduct(product.id);
              }}
              // onMouseLeave={() => setHoveredProduct(null)}
              >
            <EyeIcon
              style={{ width: "20px", height: "20px" }}
              className="hover:scale-110"
              
            />
             {hoveredProduct === product.id && productAttributes.length > 0 && (
          <div className="absolute bg-gray-200 shadow-md p-3 rounded-md w-64 top-0 right-0">
            <h3 className="font-bold text-sm mb-2">Attributes</h3>
            <ul className="text-xs text-gray-700">
              {productAttributes.map((attr, index) => (
                <li key={index} className="py-1 border-b">
                  <span className="font-semibold">{attr.attributeName}:</span>{" "}
                  {attr.attributeValue || "N/A"}
                </li>
              ))}
               </ul>
          </div>
        )}
          </span>
        </div>
        <hr />
      </motion.div>
    ))}
  </AnimatePresence>
) : (
  <div className="px-4 p-2 flex flex-col items-center justify-center min-h-96">
    <p className="font-semibold text-lg">Add Products to see here!</p>
    <img src={assets.productImage} alt="" />
  </div>
)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormRfq
