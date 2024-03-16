import { sliceNamesConstants } from '@/src/constants/slice-names-constants';
import { Product } from '@/src/types/products';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: sliceNamesConstants.productsApi,
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.escuelajs.co/api/v1/' }),
  endpoints(builder) {
    return {
      getProducts: builder.query<Product[], void>({
        query: () => '/products?offset=0&limit=20',
      }),
    };
  },
});

export const { useGetProductsQuery } = productsApi;
