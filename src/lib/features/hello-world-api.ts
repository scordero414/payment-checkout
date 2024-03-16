import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const helloWorldApi = createApi({
  reducerPath: 'helloWorldApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints(builder) {
    return {};
  },
});

export const {} = helloWorldApi;
