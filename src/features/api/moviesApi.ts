import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMovie, MoviesApiResponse } from "../../utils/types";
import { BASE_API_URL } from "../../utils/constants";

const BASE_URL = BASE_API_URL;
const API_KEY = process.env.TOKEN;

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
    getMovies: builder.query<MoviesApiResponse, ParamsTypeSearch>({
      providesTags: ["Movies"],
      query: (params) => {
        const { page = 1, limit = 10, query } = params || {};
        if (query === "" || undefined) {
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
        } else {
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
        }
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
  }),
});

export const { useGetMoviesQuery, useGetMovieByIDQuery } = moviesApi;
