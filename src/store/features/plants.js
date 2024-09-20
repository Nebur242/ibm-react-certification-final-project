import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const plantsApi = createApi({
  reducerPath: "plantsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (builder) => ({
    getPlants: builder.query({
      query: () => `data/plants.json`,
    }),
  }),
});

export const { useGetPlantsQuery } = plantsApi;
