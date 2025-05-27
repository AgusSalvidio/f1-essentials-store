import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { configurationProvider } from "../config/configurationProvider";

const { databaseUrl } = configurationProvider;

export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({ baseUrl: databaseUrl }),
  tagTypes: ["profileImageGet"],
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "categories.json",
    }),
    getProductsByCategory: builder.query({
      query: (category) =>
        `products.json?orderBy="category"&equalTo="${category}"`,
      transformResponse: (response) => {
        const responseTransformed = Object.values(response);
        return responseTransformed;
      },
    }),
    getProductById: builder.query({
      query: (productId) => `products.json?orderBy="id"&equalTo=${productId}`,
      transformResponse: (response) => {
        const responseTransformed = Object.values(response);
        if (responseTransformed.length) return responseTransformed[0];
        return null;
      },
    }),
    postOrder: builder.mutation({}),
    getProfileImage: builder.query({
      query: (localId) => `profileImages/${localId}.json`,
      providesTags: ["profileImageGet"],
    }),
    postProfileImage: builder.mutation({
      query: ({ image, localId }) => ({
        url: `profileImages/${localId}.json`,
        method: "PUT",
        body: {
          image: image,
        },
      }),
      invalidatesTags: ["profileImageGet"],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetProductsByCategoryQuery,
  useGetProductByIdQuery,
  usePostOrderMutation,
  useGetProfileImageQuery,
  usePostProfileImageMutation,
} = shopApi;
