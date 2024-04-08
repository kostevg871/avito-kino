import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMovies } from "../../utils/types";

const BASE_URL = process.env.BASE_API_URL;
const API_KEY = process.env.KINO_API_KEY;

interface MoviesApiResponse {
  docs: IMovies[];
  page: number;
  status: string;
}

interface ParamsType {
  page: number;
  limit: number;
}

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getMovies: builder.query<MoviesApiResponse, ParamsType>({
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
  }),
});

export const { useGetMoviesQuery } = moviesApi;
