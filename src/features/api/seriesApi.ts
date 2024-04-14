import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ISeason } from "../../utils/types";
import { BASE_API_URL } from "../../utils/constants";

const BASE_URL = BASE_API_URL;
const API_KEY = process.env.TOKEN;

interface ApiResponse {
  docs: ISeason[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}

export const seriesApi = createApi({
  reducerPath: "seriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getSeriesById: builder.query<ApiResponse, number>({
      query: (id) => {
        return {
          url: `/v1.4/season?&movieId=${id}&sortField=number&sortType=1`,
          headers: {
            "X-API-KEY": API_KEY,
          },
        };
      },
    }),
  }),
});

export const { useGetSeriesByIdQuery } = seriesApi;
