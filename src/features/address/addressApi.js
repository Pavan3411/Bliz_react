import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const baseURL = import.meta.env.VITE_API_BASE_URL

// const { company_id } = useContext(UserContext)
export const addressApi = createApi({
  reducerPath: 'addressApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  tagTypes: ['Addresses'],
  endpoints: (builder) => ({
    getAddress: builder.mutation({
      query: ({ company_id, token }) => ({
        url: `/api/fetch_addresses/${company_id}`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }),
      // transformResponse: (address) => [...address].reverse(),
      providesTags: ['Addresses'],
    }),
    saveAddress: builder.mutation({

    }),
    editAddress: builder.mutation({
      query: ({}) => ({
        url: '/api/update-address',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: updateData,
      }),
    }),
    deleteAddress: builder.mutation({
      query: ({}) => ({
        url: '/api/delete-address',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: {
          company_id: company_id,
          id: id,
        },
      }),
    }),
  }),
})

export const { useGetAddressMutation, useDeleteAddressMutation } = addressApi
