// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const ProductApi = createApi({
  reducerPath: 'ProductApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
        query: () => ({
          url:`/products`,
          method:'GET'
        })
      }),
      singleProductFetch : builder.query({
                query:(id)=>({
                    url:`/products/${id}`,
                    method:'GET'
                })
      })
    }),
  })

  export const  { useGetAllProductsQuery,useSingleProductFetchQuery } = ProductApi