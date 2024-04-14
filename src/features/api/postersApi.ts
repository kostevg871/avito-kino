import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPoster } from "../../utils/types";
import { BASE_API_URL } from "../../utils/constants";

const BASE_URL = BASE_API_URL;
const API_KEY = process.env.TOKEN;

interface ParamsType {
  page?: number;
  limit?: number;
  movieId: string;
}

interface PostersApiResponse {
  docs: IPoster[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}

export const postersApi = createApi({
  reducerPath: "postersApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getPostersById: builder.query<PostersApiResponse, ParamsType>({
      query: (params) => {
        const { page = 1, limit = 10, movieId } = params || {};
        return {
          url: `/v1.4/image?movieId=${movieId}`,
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

export const { useGetPostersByIdQuery } = postersApi;
