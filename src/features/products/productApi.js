import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseURL = import.meta.env.VITE_API_BASE_URL
export const formApi = createApi({
  reducerPath: 'formApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    getProductList: builder.query({
      query: (data) => ({
        url: '/api/searchProduct',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: {data}
      }),
    }),
    getProductAttributes: builder.query({
      query: (productId) => ({
        url: '/api/get-product-specification',
        method: 'POST',
        body: productId,
      }),
    }),
  }),
})

export const { useGetProductListQuery, useGetProductAttributesQuery } = formApi;
