import { configureStore } from '@reduxjs/toolkit'
import { ProductApi } from './query/ProductQuery'
import { setupListeners } from '@reduxjs/toolkit/query'
import { ProductSlice } from './slices/Product'

export const store = configureStore({
  reducer: {
    ProductApi:ProductApi.reducer,
    [ProductSlice.reducerPath]:ProductSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(ProductApi.middleware),
})

setupListeners(store.dispatch)