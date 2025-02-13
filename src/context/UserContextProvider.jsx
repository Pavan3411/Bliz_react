import React, { useState } from 'react'
import useFetch from '../components/useFetch'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import UserContext from './UserContext'
import { toast } from 'react-toastify';

const UserContextProvider = ({ children }) => {
  // const [user,setUser] = useState(null)
  // const {
  //   data: contactData,
  //   loading: contactLoading,
  //   error: contactError,
  // } = useFetch('/api/fetch-contact-details', 'POST')

  const fetchContact = async () => {
    try {
      const token = localStorage.getItem('token') // Get token from localStorage

      if (!token) {
        throw new Error('No token found. Please log in.')
      }
      console.log('Token:', token) // ✅ Log the token to verify

      const response = await axios.post(
        'https://cams-exim.com/api/fetch-contact-details',
        {}, // If the API requires a request body, add relevant data here
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      )

      console.log('API Response:', response.data) // ✅ Log the response

      return response.data
    } catch (error) {
      console.error(
        'API Request Failed:',
        error.response ? error.response.data : error.message
      )
      throw error // Ensure React Query handles the error
    }
  }
  const {
    isLoading,
    error,
    data: contactData,
  } = useQuery({
    queryKey: ['contact'],
    queryFn: fetchContact,
    staleTime: 1000 * 60, // This now includes the Authorization header
  })
  // console.log("contact Informationnnnnnnnnnn",contactData);

  const { data: notificationData } = useFetch('/api/get-notification', 'GET')

  const company_id = contactData?.data?.user_company_id
  console.log('comapny id', company_id)

  const {
    data: addressData,
    loading: addressLoading,
    error: addressError,
    setError: addressSetError,
    refetch: addressReFetch,
  } = useFetch(`/api/fetch_addresses/${company_id}`, 'POST')
  const addressDataLength = addressData?.addresses?.length || 0;
  //   const address_id = addressData?.addresses?.id;

  // const fetchCity = async (city_id) => {
  //   const res = await fetch(`/api/cities/${city_id}`);
  //   return res.json();
  // };

  // const fetchState = async (state_id) => {
  //   const res = await fetch(`/api/states/${state_id}`);
  //   return res.json();
  // };

  // const fetchCountry = async (country_id) => {
  //   const res = await fetch(`/api/countries/${country_id}`);
  //   return res.json();
  // };

  const {
    data: countryData,
    loading: countryLoading,
    error: countryError,
  } = useFetch('/api/getCountry', 'POST')
  const [selectedCountryId, setSelectedCountryId] = useState(null)
  const [selectedStateId, setSelectedStateId] = useState(null)
  const [selectedCityId, setSelectedCityId] = useState(null)

  const {
    data: stateData,
    loading: stateLoading,
    error: stateError,
  } = useFetch(`/api/getStates/${selectedCountryId}`, 'POST')

  const {
    data: cityData,
    loading: cityLoading,
    error: cityError,
  } = useFetch(`/api/getCities/${selectedStateId}`, 'POST')

  //   const getCountryName = (id) =>
  //     addressData?.addresses?.find((c) => c.country_one_id  == id)?.name || 'Loading...';
  //   const getStateName = (id) =>
  //     stateData?.data?.find((s) => s.state_id
  //   == id)?.name || 'Loading...';
  //   const getCityName = (id) =>
  //     addressData?.addresses?.find((c) => c.city_id == id)?.name || 'Loading...';

  //   // Get array of state IDs from all addresses
  // const stateIds = addressData?.addresses?.map(address => address.state_id) || [];

  // console.log("All state IDs", stateIds);

  // // If you need to fetch state names for all these IDs
  // const { data: stateNames } = useFetch(
  //   stateIds ? `/api/getStates/` : null,
  //   'POST'
  // );
  console.log('get names', addressData)
  // console.log("Country Data:", getCountryName());
  // console.log("State Data:", getStateName());
  // console.log("City Data:", getCityName());

  // Function to handle country selection
  const handleCountryStateCityChange = (event) => {
    setSelectedCountryId(event.target.value)
    setSelectedStateId(event.target.value)
    setSelectedCityId(event.target.value)
    // console.log('Selected Country ID:', event.target.value)
  }
  // console.log(selectedStateId)

  const handleDeleteAddress = async (id) => {
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
        'https://cams-exim.com/api/delete-address',
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      )

      console.log('Address deleted successfully:', response.data)
      addressReFetch()
      toast.success('Address Deleted Successfully')

      // Refetch the address data to update the UI
      // addressReFetch();
    } catch (error) {
      console.error('Error deleting address:', error)
      // if (error.response) {
      //   // addressSetError(error.response.data); // Set error from response if any
      // }
    }
  }

  // const handleUpdate = async () => {
  //   try {
  //     const response = await axios.post(
  //       "https://cams-exim.com/api/update-address",
  //       editAddress,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  
  //     alert("Address updated successfully!");
  //     setEditable(false);
  //   } catch (error) {
  //     console.error("Error updating address:", error);
  //     alert(error.response?.data?.message || "Failed to update address.");
  //   }
  // };

  return (
    <UserContext.Provider
      value={{
        fetchContact,
        addressData,
        addressLoading,
        addressReFetch,
        countryData,
        stateData,
        cityData,
        handleCountryStateCityChange,
        notificationData,
        company_id,
        isLoading,
        error,
        contactData,
        addressSetError,
        addressError,
        handleDeleteAddress,
        setSelectedCountryId,
        setSelectedStateId,
        addressDataLength,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
