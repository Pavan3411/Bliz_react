import { configureStore } from "@reduxjs/toolkit";
import { addressApi } from "../features/address/addressApi";
import { formApi } from "../features/products/productApi";

export const store = configureStore({
  reducer: {
    [addressApi.reducerPath]: addressApi.reducer,
    [formApi.reducerPath]: formApi.reducer,
    // product: productReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(addressApi.middleware, formApi.middleware),
});

export default store;
