import { sliceNamesConstants } from '@/constants/slice-names-constants';
import { ProcessPaymentData } from '@/types/payment-checkout';
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
      processPayment: builder.mutation<unknown, ProcessPaymentData>({
        query: params => ({
          url: `/products/${params.product.id}`,
          method: 'PUT',
          body: params.product,
        }),
      }),
      processBadPayment: builder.mutation<unknown, ProcessPaymentData>({
        query: params => ({
          url: `/products/${params.product.id}`,
          method: 'POST',
          body: params,
        }),
      }),
    };
  },
});

export const {
  useGetProductsQuery,
  useProcessBadPaymentMutation,
  useProcessPaymentMutation,
} = productsApi;
