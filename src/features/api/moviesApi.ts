import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMovie, MoviesApiResponse } from "../../utils/types";

const BASE_URL = process.env.BASE_API_URL;
const API_KEY = process.env.KINO_API_KEY;

interface ParamsType {
  page?: number;
  limit?: number;
}

interface ParamsTypeSearch extends ParamsType {
  query: string;
}

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["Movies", "MoviesSearch"],
  endpoints: (builder) => ({
    getMovies: builder.query<MoviesApiResponse, ParamsType>({
      providesTags: ["Movies"],
      query: (params) => {
        const { page = 1, limit = 10 } = params || {};
        return {
          url: "/v1.4/movie",
          params: {
            page,
            limit,
          },
          headers: {
            "X-API-KEY": API_KEY,
          },
        };
      },
    }),
    getMovieByID: builder.query<IMovie, number>({
      query: (id) => {
        return {
          url: `/v1.4/movie/${id}`,
          headers: {
            "X-API-KEY": API_KEY,
          },
        };
      },
    }),
    getMovieSearch: builder.query<MoviesApiResponse, ParamsTypeSearch>({
      query: (params) => {
        const { page = 1, limit = 10, query = "" } = params || {};
        return {
          url: `/v1.4/movie/search`,
          params: {
            page,
            limit,
            query,
          },
          headers: {
            "X-API-KEY": API_KEY,
          },
        };
      },
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetMovieByIDQuery,
  useGetMovieSearchQuery,
} = moviesApi;
