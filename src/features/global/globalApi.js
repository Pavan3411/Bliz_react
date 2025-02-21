import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query"; 
const baseURL = import.meta.env.VITE_API_BASE_URL

export const globalApi = createApi({
    reducerPath: "globalApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseURL}),
    endpoints: (builder) => ({
        getContact: builder.query({
            query: () => "/contact",
            providesTags: ["Contact"],
        }),
    }),
});

export const {   } = globalApi