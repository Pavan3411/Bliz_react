import { createSlice } from "@reduxjs/toolkit";\

export const

export const address = createSlice({
    name: "address",
    initialState: {
        address: [],
        loading: false,
        error: null
    },
})