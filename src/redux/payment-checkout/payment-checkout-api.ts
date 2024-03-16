import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const paymentCheckoutApi = createApi({
  reducerPath: 'helloWorldApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints(builder) {
    return {};
  },
});

export const {} = paymentCheckoutApi;
