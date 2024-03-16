import { sliceNamesConstants } from '@/src/constants/slice-names-constants';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const paymentCheckoutApi = createApi({
  reducerPath: sliceNamesConstants.paymentCheckoutApi,
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints(builder) {
    return {};
  },
});

export const {} = paymentCheckoutApi;
