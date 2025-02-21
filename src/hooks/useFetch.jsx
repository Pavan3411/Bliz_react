import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetch = (endpoint, method = 'GET') => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const baseURL = import.meta.env.VITE_API_BASE_URL

  // Move fetchData outside useEffect so we can reuse it
  const fetchData = async () => {
    const token = localStorage.getItem('token')

    if (!token) {
      setError('No token found. Please log in.')
      setLoading(false)
      return
    }

    try {
      setLoading(true)
      const response = await axios({
        method,
        url: `${baseURL}${endpoint}`,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })

      setData(response.data)
      setError(null) // Clear any previous errors
    } catch (err) {
      setError('Failed to fetch data. Token might be invalid.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [baseURL, endpoint, method])

  // Return the fetchData function as refetch along with other data
  return { 
    data, 
    loading, 
    error,
    refetch: fetchData 
  }
}

export default useFetch