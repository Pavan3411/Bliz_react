import React, { useState } from 'react'
import useFetch from '@hooks/useFetch'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import UserContext from './UserContext'
import { toast } from 'react-toastify';

const UserContextProvider = ({ children }) => {

  const fetchContact = async () => {
    try {
      const token = localStorage.getItem('token') 

      if (!token) {
        throw new Error('No token found. Please log in.')
      }
      console.log('Token:', token) 

      const response = await axios.post(
        'https://cams-exim.com/api/fetch-contact-details',
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      )

      console.log('API Response:', response.data)

      return response.data
    } catch (error) {
      console.error(
        'API Request Failed:',
        error.response ? error.response.data : error.message
      )
      throw error
    }
  }
  const {
    isLoading,
    error,
    data: contactData,
  } = useQuery({
    queryKey: ['contact'],
    queryFn: fetchContact,
    staleTime: 1000 * 60,
  })

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
  console.log('get names', addressData)
  
  const handleCountryStateCityChange = (event) => {
    setSelectedCountryId(event.target.value)
    setSelectedStateId(event.target.value)
    setSelectedCityId(event.target.value)
    
  }
  

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

    } catch (error) {
      console.error('Error deleting address:', error)
     
    }
  }


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
