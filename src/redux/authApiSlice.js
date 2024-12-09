import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://be.papersdock.com' }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (userData) => ({
        url: '/users/login-user',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'lms_API',
        },
        body: JSON.stringify(userData),
      }),
      
    }),
  }),
});

export const { useLoginUserMutation } = apiSlice;