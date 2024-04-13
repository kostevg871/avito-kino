import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IReview } from "../../utils/types";

const BASE_URL = process.env.BASE_API_URL;
const API_KEY = process.env.KINO_API_KEY;

interface ParamsType {
  page?: number;
  limit?: number;
  movieId: string;
}

interface ReviewsApiResponse {
  docs: IReview[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}

export const reviewsApi = createApi({
  reducerPath: "reviewsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getReviewsById: builder.query<ReviewsApiResponse, ParamsType>({
      query: (params) => {
        const { page = 1, limit = 10, movieId } = params || {};
        return {
          url: `/v1.4/review?movieId=${movieId}`,
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

export const { useGetReviewsByIdQuery } = reviewsApi;
