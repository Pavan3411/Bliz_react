import React, { useContext, useEffect, useState } from 'react'
import SidePanel from './SidePanel'
import { assets, icons } from '../assets/assets'
import Toggle from './toggle'
import useFetch from './useFetch'
import UserContext from '../context/UserContext'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import * as Yup from 'yup'
import AddressShimmer from './AddressShimmer'
import AddressPopup from './AddressPopup'
import { toast } from 'react-toastify';

const Address = () => {
  const { LocationIcon, EditFillIcon, DeleteFillIcon, CrossIcon } = icons

  const {
    addressData,
    addressLoading,
    addressReFetch,
    countryData,
    stateData,
    cityData,
    handleCountryStateCityChange,
    handleDeleteAddress,
    company_id,
    addressSetError,
    addressError,
    setSelectedCountryId,
    setSelectedStateId,
  } = useContext(UserContext)

  console.log(addressData)
  const [addAddress, setAddAddress] = useState(false)
  const [editable, setEditable] = useState(false)
  const [errors, setErrors] = useState({})
  const [isScaled, setIsScaled] = useState(false)
  const [selectedAddressId, setSelectedAddressId] = useState(null)
  const [popUp, setPopUp] = useState(false)
  const [deletePopUp, setDeletePopUp] = useState(false)
  const [primaryCheck, setPrimaryCheck] = useState(false)

  const [editAddress, setEditAddress] = useState({
    address_name: '',
    address_line_1: '',
    address_line_2: '',
    sub_district: '',
    district: '',
    country_one_id: '',
    state_id: '',
    city_id: '',
    pincode: '',
    company_id: '' || company_id,
    id: '' || selectedAddressId,
  })
  const [saveAddress, setsaveAddress] = useState({
    company_id: company_id || '',
    address_name: '',
    address_line_1: '',
    address_line_2: '',
    sub_district: '',
    district: '',
    country_one_id: '',
    state_id: '',
    city_id: '',
    pincode: '',
  })

  const primaryIndex = addressData?.addresses?.findIndex(address => address.is_primary === true);

  if (primaryIndex !== -1) {
    console.log(`Primary address is at index: ${primaryIndex}`);
  } else {
    console.log("No primary address found");
  }
  const handleEditOrDelete = (index) => {
    if (index === primaryIndex) {
      
      setPrimaryCheck(true)
      return false; // Stop further execution
    }
    return true;
    setPrimaryCheck(false) // Allow execution
  };  
  
  const handleUpdate = async () => {
    const token = localStorage.getItem('token')
    if (!token) {
      console.error('Authorization token is missing')
      return
    }
    try {
      // Make sure editAddress includes both id and company_id
      const updateData = {
        ...editAddress.data,
        id: selectedAddressId, // Make sure this is defined
        company_id: company_id, // Make sure this is defined
      }

      const response = await axios.post(
        'https://cams-exim.com/api/update-address',
        updateData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      )

      toast.success('Address updated successfully!')
      setEditable(false)
      addressReFetch()
    } catch (error) {
      console.error('Error updating address:', error)
      alert(error.response?.data?.message || 'Failed to update address.')
    }
  }

  const validationSchema = Yup.object({
    address_name: Yup.string()
      .required('Address name is required')
      .min(5, 'Minimum 5 character is required'),
    address_line_1: Yup.string()
      .required('Address is required')
      .min(5, 'Minimum 5 character is required'),
    sub_district: Yup.string().required('This Sub district is required'),
    district: Yup.string().required('This district is required'),
    pincode: Yup.string()
      .required('Pincode is required')
      .min(5, 'Pincode must be 5 or 6 characters')
      .max(6, 'Pincode must be 5 or 6 characters'),
    country_one_id: Yup.string().required('Please select country'),
    state_id: Yup.string().required('Please select Province'),
    city_id: Yup.string().required('Please select city'),
  })

  const handleWheel = (e) => {
    e.preventDefault()
    setIsScaled(true)
    setTimeout(() => setIsScaled(false), 200)
  }

  const handleEditAddress = async (id, company_id) => {
    const token = localStorage.getItem('token')

    if (!token) {
      console.error('Authorization token is missing')
      return
    }
    try {
      const data = {
        company_id: company_id,
        id: id,
      }
      console.log('data of data', data)
      const response = await axios.post(
        'https://www.cams-exim.com/api/edit-address',
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      )
      const flattenedData = {
        ...response.data, // Spread the nested data object
        id: '1390', // Add id separately
        company_id: company_id, // Add company_id separately
      }

      setEditAddress(flattenedData) // Update state with flattened object

      console.log(
        'Edit address recieved successfully....................................:',
        editAddress
      )
      addressReFetch()
    } catch (error) {
      console.log('Error deleting address:', error)
    }
  }

  console.log('State name from id', addressData)

  const handleAddressSubmit = async () => {
    console.log('Submitting Address:', saveAddress)

    try {
      await validationSchema.validate(saveAddress, { abortEarly: false })
      console.log('Address Validated', saveAddress)

      const token = localStorage.getItem('token')
      if (!token) {
        console.error('Authorization token is missing')
        return
      }

      try {
        const res = await axios.post(
          'https://cams-exim.com/api/save-address',
          saveAddress,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        )
        console.log('Address saved successfully:', res.data)
        addressReFetch()
        setsaveAddress({
          company_id: company_id || '',
          address_name: '',
          address_line_1: '',
          address_line_2: '',
          sub_district: '',
          district: '',
          country_one_id: '',
          state_id: '',
          city_id: '',
          pincode: '',
        })
        toast.success('Address Added Successfully')
        return true
      } catch (err) {
        if (err.response) {
          console.error('Error saving address:', err.response.data)
        } else {
          console.error('Error saving address:', err.message)
        }
        return false
      }
    } catch (error) {
      const newErrors = {}
      error.inner.forEach((err) => {
        newErrors[err.path] = err.message
      })
      setErrors(newErrors)
      console.error('Validation failed', newErrors)
      return false
    }
  }

  const handleCombinedChange = (e) => {
    handleCountryStateCityChange(e)
    handleInputChange(e)
  }

  const setPrimaryAddress = async (id) => {
    const token = localStorage.getItem('token')

    try {
      const response = await axios.post(
        'https://cams-exim.com/api/primaryAddress',
        { id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      )

      console.log('Primary address set successfully:', response.data)
      return response.data
    } catch (error) {
      console.error('Error setting primary address:', error)
      throw error
    }
  }
  const handleSetPrimaryAddress = async (id) => {
    try {
      const response = await axios.post(
        'https://cams-exim.com/api/primaryAddress',
        { id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
          },
        }
      )

      console.log(`New primary address ID: ${id}`)

      // ✅ Refetch the addresses from the API to update the UI
      addressReFetch()
      toast.success('Address data change successfully.')
    } catch (error) {
      console.error('Failed to set primary address:', error)
    }
  }

  useEffect(() => {
    if (addAddress || editable) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [addAddress, editable])

  const handleInputChange = async (e) => {
    const { name, value } = e.target

    // Update the state
    setsaveAddress((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Validate the specific field dynamically
    try {
      await validationSchema.validateAt(name, { [name]: value })

      // If validation passes, remove the error
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors }
        delete newErrors[name]
        return newErrors
      })
    } catch (err) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: err.message, // Update error for the specific field
      }))
    }
  }
  useEffect(() => {
    if (editAddress?.data?.country_one_id) {
      setSelectedCountryId(editAddress.data.country_one_id)
    }
    console.log(setSelectedCountryId)
  }, [editAddress?.data?.country_one_id])
  useEffect(() => {
    if (editAddress?.data?.state_id) {
      setSelectedStateId(editAddress.data.state_id)
    }
    console.log(setSelectedStateId)
  }, [editAddress?.data?.state_id])

  return (
    <div className="flex gap-5 w-full px-5">
      <div className="w-1/4 md:basis-1/4 hidden lg:block h-screen sticky top-0">
        <SidePanel />
      </div>

      <div className="w-full mt-5">
        <div className="w-full py-2 bg-white rounded-md justify-between flex px-2 items-center mb-4">
          <h1 className="font-bold text-xl">Addresses</h1>
          <button
            className="bg-lightRed rounded-md flex items-center text-black gap-1 p-2 text-sm"
            onClick={() => setAddAddress(true)}
          >
            <LocationIcon className="text-white w-5 h-5" />
            <p className="text-white">Add a New Address</p>
          </button>
        </div>

        {addressLoading && (
          <div>
            <AddressShimmer />
          </div>
        )}
        {addressData && (
          <div>
            <div className="grid grid-cols-2 gap-4 mb-5">
              {addressData?.addresses.map((address, index) => (
                <div className="bg-white rounded-md" key={index}>
                  <div className=" flex justify-between items-center text-base p-2  bg-fadeRed rounded-md rounded-b-none">
                    <span>
                      <p className="text-lg font-semibold">
                        {address?.address_name || 'address name'}
                      </p>
                    </span>
                    <span className="flex gap-2">
                      <Toggle
                        className="w-6 h-6"
                        isPrimary={address.is_primary}
                        // onClick={() => handleSetPrimaryAddress(address?.id)}
                        onClick={() => {
                          if (handleEditOrDelete(index)) {  // Only proceed if not primary
                            setPopUp(true);
                            setSelectedAddressId(address?.id);
                            setDeletePopUp(false);
                          }
                        }}
                      />
                      <p>{address?.id}</p>
                      <EditFillIcon
                        className="w-6 h-6"
                        onClick={() => {
                          setEditable(true)
                          setSelectedAddressId(address?.id),
                            handleEditAddress(address?.id, company_id)
                            
                        }}
                      />
                      <DeleteFillIcon
                        className="w-6 h-6 text-lightRed"
                        // onClick={() => handleDeleteAddress(address?.id)}
                        onClick={() => {
                          if (handleEditOrDelete(index)) {
                            setDeletePopUp(true);
                            setSelectedAddressId(address?.id)
                            setPopUp(false);
                          }
                        }}
                      />
                    </span>
                  </div>
                  <hr className="border-grayHr" />
                  <div className="flex flex-col space-y-2 p-2">
                    <p>{`${address?.address_line_1} , ${address?.sub_district} , ${address?.district}`}</p>
                    <p>{`${address?.state_name} , ${address?.city_name} , ${address?.pincode}`}</p>
                    <p></p>
                  </div>
                </div>
              ))}
            </div>
            {editable && (
              <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50 w-full">
                <div
                  className={`bg-white w-1/2 flex flex-col transition-transform duration-300 ${
                    isScaled ? 'scale-105' : 'scale-100'
                  }`}
                  onWheel={handleWheel}
                >
                  <div className="bg-gray-100 p-3 flex justify-between items-center border-b-[1px] border-grayHr">
                    <p className="font-medium text-lightRed text-lg">
                      Edit a Address
                    </p>
                    <CrossIcon
                      className="w-6 h-6 text-grayBorder"
                      onClick={() => setEditable(false)}
                    />
                  </div>
                  <div className="p-4 py-6 flex flex-col gap-5">
                    <span className="relative">
                      <label
                        htmlFor="address_name"
                        className="absolute bg-white -top-2 left-2 text-xs px-1 flex items-center gap-[1px] "
                      >
                        <p>Address Name</p>
                        <span className="text-darkRed">*</span>
                      </label>

                      <input
                        name="address_name"
                        className="border-2 rounded p-1 w-full focus:outline-none focus:ring-1 focus:ring-red-300 h-12 "
                        required
                        value={editAddress?.data?.address_name || ''}
                        onChange={(e) =>
                          setEditAddress((prev) => ({
                            ...prev,
                            data: {
                              ...prev.data,
                              address_name: e.target.value,
                            },
                          }))
                        }
                      />
                    </span>
                    <span className="relative">
                      <label
                        htmlFor="address_line_1"
                        className="absolute bg-white -top-2 left-2 text-xs px-1 flex items-center gap-[1px] "
                      >
                        <p>Address Line 1</p>
                        <span className="text-darkRed">*</span>
                      </label>

                      <input
                        name="address_line_1"
                        className="border-2 rounded p-1 w-full focus:outline-none focus:ring-1 focus:ring-red-300 h-12 "
                        required
                        value={editAddress?.data?.address_line_1 || ''}
                        onChange={(e) =>
                          setEditAddress((prev) => ({
                            ...prev,
                            data: {
                              ...prev.data,
                              address_line_1: e.target.value,
                            },
                          }))
                        }
                      />
                    </span>
                    <span className="relative">
                      <label
                        htmlFor="address_line_2"
                        className="absolute bg-white -top-2 left-2 text-xs px-1"
                      >
                        <p>Address Line 2</p>
                      </label>

                      <input
                        name="address_line_2"
                        className="border-2 rounded p-1 w-full focus:outline-none focus:ring-1 focus:ring-red-300 h-12 "
                        value={editAddress?.data?.address_line_2 || ''}
                        onChange={(e) =>
                          setEditAddress((prev) => ({
                            ...prev,
                            data: {
                              ...prev.data,
                              address_line_2: e.target.value,
                            },
                          }))
                        }
                      />
                    </span>
                    <span className="flex gap-5">
                      <span className="relative w-1/2">
                        <label
                          htmlFor="sub_district"
                          className="absolute bg-white -top-2 left-2 text-xs px-1 flex items-center gap-[1px] "
                        >
                          <p>Sub District</p>
                          <span className="text-darkRed">*</span>
                        </label>

                        <input
                          name="sub_district"
                          className="border-2 rounded p-1 w-full focus:outline-none focus:ring-1 focus:ring-red-300 h-12 "
                          required
                          value={editAddress?.data?.sub_district || ''}
                          onChange={(e) =>
                            setEditAddress((prev) => ({
                              ...prev,
                              data: {
                                ...prev.data,
                                sub_district: e.target.value,
                              },
                            }))
                          }
                        />
                      </span>
                      <span className="relative w-1/2">
                        <label
                          htmlFor="district"
                          className="absolute bg-white -top-2 left-2 text-xs px-1 flex items-center gap-[1px] "
                        >
                          <p>District</p>
                          <span className="text-darkRed">*</span>
                        </label>

                        <input
                          name="district"
                          className="border-2 rounded p-1 w-full focus:outline-none focus:ring-1 focus:ring-red-300 h-12 "
                          required
                          value={editAddress?.data?.district || ''}
                          onChange={(e) =>
                            setEditAddress((prev) => ({
                              ...prev,
                              data: {
                                ...prev.data,
                                district: e.target.value,
                              },
                            }))
                          }
                        />
                      </span>
                    </span>
                    <span className="relative col-span-1">
                      <label
                        htmlFor="country_one_id"
                        className="absolute bg-white -top-2 left-2 text-xs px-1 flex items-center gap-[1px] "
                      >
                        <p>Country</p>
                        <span className="text-darkRed">*</span>
                      </label>

                      <select
                        name="country_one_id"
                        className="border-2 rounded p-1 w-full focus:outline-none focus:ring-1 focus:ring-red-300 h-12"
                        required
                        value={editAddress?.data?.country_one_id || ''}
                        onChange={(e) =>
                          setEditAddress((prev) => ({
                            ...prev,
                            data: {
                              ...prev.data,
                              country_one_id: e.target.value, // Update the country_id or the corresponding field
                            },
                          }))
                        }
                      >
                        <option value="" disabled selected>
                          Select Country
                        </option>

                        {countryData?.data?.map((country, index) => (
                          <option key={index} value={country?.id}>
                            {country?.name}
                          </option>
                        ))}
                      </select>
                    </span>
                    <span className="grid grid-cols-2 gap-5">
                      <span className="relative col-span-1">
                        <label
                          htmlFor="province"
                          className="absolute bg-white -top-2 left-2 text-xs px-1 flex items-center gap-[1px] "
                        >
                          <p>Provinces</p>
                          <span className="text-darkRed">*</span>
                        </label>

                        <select
                          name="province"
                          className="border-2 rounded p-1 w-full focus:outline-none focus:ring-1 focus:ring-red-300 h-12"
                          required
                          value={editAddress?.data?.state_id || ''}
                          onChange={(e) =>
                            setEditAddress((prev) => ({
                              ...prev,
                              data: {
                                ...prev.data,
                                state_id: e.target.value, // Update the country_id or the corresponding field
                              },
                            }))
                          }
                        >
                          <option value="" disabled selected>
                            Select Provinces
                          </option>

                          {stateData?.data?.map((province, index) => (
                            <option value={province?.id} key={index}>
                              {province?.name}
                            </option>
                          ))}
                        </select>
                      </span>
                      <span className="relative col-span-1">
                        <label
                          htmlFor="city"
                          className="absolute bg-white -top-2 left-2 text-xs px-1 flex items-center gap-[1px] "
                        >
                          <p>City</p>
                          <span className="text-darkRed">*</span>
                        </label>

                        <select
                          name="city"
                          className="border-2 rounded p-1 w-full focus:outline-none focus:ring-1 focus:ring-red-300 h-12"
                          required
                          value={editAddress?.data?.city_id || ''}
                          onChange={(e) =>
                            setEditAddress((prev) => ({
                              ...prev,
                              data: {
                                ...prev.data,
                                city_id: e.target.value, // Update the country_id or the corresponding field
                              },
                            }))
                          }
                        >
                          <option value="" disabled selected>
                            Select City
                          </option>

                          {cityData?.data?.map((city, index) => (
                            <option value={city?.id} key={index}>
                              {city?.name}
                            </option>
                          ))}
                        </select>
                      </span>
                    </span>
                    <span className="relative grid grid-cols-2 gap-5">
                      <label
                        htmlFor="pincode"
                        className="absolute bg-white -top-2 left-2 text-xs px-1 flex items-center gap-[1px] "
                      >
                        <p>Pincode</p>
                        <span className="text-darkRed">*</span>
                      </label>

                      <input
                        name="pincode"
                        className="border-2 rounded p-1 w-full focus:outline-none focus:ring-1 focus:ring-red-300 h-12 "
                        required
                        value={editAddress?.data?.pincode || ''}
                        onChange={(e) =>
                          setEditAddress((prev) => ({
                            ...prev,
                            data: {
                              ...prev.data,
                              pincode: e.target.value,
                            },
                          }))
                        }
                      />
                    </span>
                    <span className="flex gap-2 items-center">
                      <Toggle className="" />
                      <p>Set as Default Address</p>
                    </span>
                  </div>
                  <div className="p-2 flex justify-end border-t-[1px] border-garyBorder">
                    <button
                      className="bg-lightRed rounded-md flex items-center text-black gap-1 p-2"
                      onClick={() => {
                        setEditable(false)
                        handleUpdate()
                      }}
                    >
                      <LocationIcon className="text-white w-5 h-5" />
                      <p className="text-white text-base">Save</p>
                    </button>
                  </div>
                </div>
              </div>
            )}
            {addAddress && (
              <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50 w-full">
                <div
                  className={`bg-white w-1/2 flex flex-col transition-transform duration-300 ${
                    isScaled ? 'scale-105' : 'scale-100'
                  }`}
                  onWheel={handleWheel}
                >
                  <div className="bg-gray-100 p-3 flex justify-between items-center border-b-[1px] border-grayHr">
                    <p className="font-medium text-lightRed text-lg">
                      Add a New Address
                    </p>
                    <CrossIcon
                      className="w-6 h-6 text-grayBorder"
                      onClick={() => setAddAddress(false)}
                    />
                  </div>
                  <div
                    className={`p-4 flex flex-col ${
                      Object.keys(errors).length > 0
                        ? 'gap-3 py-3'
                        : 'gap-5 py-6'
                    }`}
                  >
                    <span className="relative">
                      <label
                        htmlFor="address_name"
                        className="absolute bg-white -top-2 left-2 text-xs px-1 flex items-center gap-[1px] "
                      >
                        <p>Address Name</p>
                        <span className="text-darkRed">*</span>
                      </label>

                      <input
                        name="address_name"
                        value={saveAddress.address_name}
                        onChange={handleInputChange}
                        className="border-2 rounded p-1 w-full focus:outline-none focus:ring-1 focus:ring-red-300 h-12 "
                        required
                      />
                      {errors.address_name && (
                        <p className="text-red-500 text-xs">
                          {errors.address_name}
                        </p>
                      )}
                    </span>
                    <span className="relative">
                      <label
                        htmlFor="address_line_1"
                        className="absolute bg-white -top-2 left-2 text-xs px-1 flex items-center gap-[1px] "
                      >
                        <p>Address Line 1</p>
                        <span className="text-darkRed">*</span>
                      </label>

                      <input
                        name="address_line_1"
                        value={saveAddress.address_line_1}
                        onChange={handleInputChange}
                        className="border-2 rounded p-1 w-full focus:outline-none focus:ring-1 focus:ring-red-300 h-12 "
                        required
                      />
                      {errors.address_line_1 && (
                        <p className="text-red-500 text-xs">
                          {errors.address_line_1}
                        </p>
                      )}
                    </span>
                    <span className="relative">
                      <label
                        htmlFor="address_line_2"
                        className="absolute bg-white -top-2 left-2 text-xs px-1"
                      >
                        <p>Address Line 2</p>
                      </label>

                      <input
                        name="address_line_2"
                        value={saveAddress.address_line_2}
                        onChange={handleInputChange}
                        className="border-2 rounded p-1 w-full focus:outline-none focus:ring-1 focus:ring-red-300 h-12 "
                      />
                    </span>
                    <span className="flex gap-5">
                      <span className="relative w-1/2">
                        <label
                          htmlFor="sub_district"
                          className="absolute bg-white -top-2 left-2 text-xs px-1 flex items-center gap-[1px] "
                        >
                          <p>Sub District</p>
                          <span className="text-darkRed">*</span>
                        </label>

                        <input
                          name="sub_district"
                          value={saveAddress.sub_district}
                          onChange={handleInputChange}
                          className="border-2 rounded p-1 w-full focus:outline-none focus:ring-1 focus:ring-red-300 h-12 "
                          required
                        />
                        {errors.sub_district && (
                          <p className="text-red-500 text-xs">
                            {errors.sub_district}
                          </p>
                        )}
                      </span>
                      <span className="relative w-1/2">
                        <label
                          htmlFor="district"
                          className="absolute bg-white -top-2 left-2 text-xs px-1 flex items-center gap-[1px] "
                        >
                          <p>District</p>
                          <span className="text-darkRed">*</span>
                        </label>

                        <input
                          name="district"
                          value={saveAddress.district}
                          onChange={handleInputChange}
                          className="border-2 rounded p-1 w-full focus:outline-none focus:ring-1 focus:ring-red-300 h-12 "
                          required
                        />
                        {errors.district && (
                          <p className="text-red-500 text-xs">
                            {errors.district}
                          </p>
                        )}
                      </span>
                    </span>
                    <span className="relative col-span-1">
                      <label
                        htmlFor="country_one_id"
                        className="absolute bg-white -top-2 left-2 text-xs px-1 flex items-center gap-[1px] "
                      >
                        <p>Country</p>
                        <span className="text-darkRed">*</span>
                      </label>

                      <select
                        name="country_one_id"
                        onChange={handleCombinedChange}
                        className="border-2 rounded p-1 w-full focus:outline-none focus:ring-1 focus:ring-red-300 h-12"
                        required
                      >
                        <option value="" disabled selected>
                          Select Country
                        </option>

                        {countryData?.data?.map((country, index) => (
                          <option key={index} value={country?.id}>
                            {country?.name}
                          </option>
                        ))}
                      </select>
                      {errors.country_one_id && (
                        <p className="text-red-500 text-xs">
                          {errors.country_one_id}
                        </p>
                      )}
                    </span>
                    <span className="grid grid-cols-2 gap-5">
                      <span className="relative col-span-1">
                        <label
                          htmlFor="state_id"
                          className="absolute bg-white -top-2 left-2 text-xs px-1 flex items-center gap-[1px] "
                        >
                          <p>Provinces</p>
                          <span className="text-darkRed">*</span>
                        </label>

                        <select
                          name="state_id"
                          onChange={handleCombinedChange}
                          className="border-2 rounded p-1 w-full focus:outline-none focus:ring-1 focus:ring-red-300 h-12"
                          required
                        >
                          <option value="" disabled selected>
                            Select Provinces
                          </option>

                          {stateData?.data?.map((province, index) => (
                            <option value={province?.id} key={index}>
                              {province?.name}
                            </option>
                          ))}
                        </select>
                        {errors.state_id && (
                          <p className="text-red-500 text-xs">
                            {errors.state_id}
                          </p>
                        )}
                      </span>
                      <span className="relative col-span-1">
                        <label
                          htmlFor="city_id"
                          className="absolute bg-white -top-2 left-2 text-xs px-1 flex items-center gap-[1px] "
                        >
                          <p>City</p>
                          <span className="text-darkRed">*</span>
                        </label>

                        <select
                          name="city_id"
                          onChange={handleCombinedChange}
                          className="border-2 rounded p-1 w-full focus:outline-none focus:ring-1 focus:ring-red-300 h-12"
                          required
                        >
                          <option value="" disabled selected>
                            Select City
                          </option>

                          {cityData?.data?.map((city, index) => (
                            <option value={city?.id} key={index}>
                              {city?.name}
                            </option>
                          ))}
                        </select>
                        {errors.city_id && (
                          <p className="text-red-500 text-xs">
                            {errors.city_id}
                          </p>
                        )}
                      </span>
                    </span>
                    <span className="relative grid grid-cols-2 gap-5">
                      <label
                        htmlFor="pincode"
                        className="absolute bg-white -top-2 left-2 text-xs px-1 flex items-center gap-[1px] "
                      >
                        <p>Pincode</p>
                        <span className="text-darkRed">*</span>
                      </label>

                      <input
                        name="pincode"
                        value={saveAddress.pincode}
                        onChange={handleInputChange}
                        className="border-2 rounded p-1 w-full focus:outline-none focus:ring-1 focus:ring-red-300 h-12 "
                        required
                      />
                    </span>
                    {errors.pincode && (
                      <p className="text-red-500 text-xs -mt-3">
                        {errors.pincode}
                      </p>
                    )}

                    <span className="flex gap-2 items-center">
                      <Toggle className="" />
                      <p>Set as Primary</p>
                    </span>
                  </div>
                  <div className="p-2 flex justify-end border-t-[1px] border-grayHr">
                    <button
                      className="bg-lightRed rounded-md flex items-center text-black gap-1 p-2"
                      onClick={async () => {
                        const isValidAndSaved = await handleAddressSubmit()
                        if (isValidAndSaved) {
                          setAddAddress(false)
                        }
                      }}
                    >
                      <LocationIcon className="text-white w-5 h-5" />
                      <p className="text-white">Add Address</p>
                    </button>
                  </div>
                </div>
              </div>
            )}
            {(popUp || deletePopUp || primaryCheck) && (
              <AddressPopup
                setPopUp={setPopUp}
                popUp={popUp}
                deletePopUp={deletePopUp}
                setDeletePopUp={setDeletePopUp}
                selectedAddressId={selectedAddressId}
                handleSetPrimaryAddress={handleSetPrimaryAddress}
                handleDeleteAddress={handleDeleteAddress}
                primaryCheck={primaryCheck}
                setPrimaryCheck={setPrimaryCheck}
              />
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Address
