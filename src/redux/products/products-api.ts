import { sliceNamesConstants } from '@/constants/slice-names-constants';
import { Product } from '@/types/products';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: sliceNamesConstants.productsApi,
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_PRODUCTS_BASE_URL,
  }),
  endpoints(builder) {
    return {
      getProducts: builder.query<Product[], void>({
        query: () => '/products',
      }),
    };
  },
});

export const { useGetProductsQuery } = productsApi;
