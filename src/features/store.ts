import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";

import { moviesApi } from "./api/moviesApi";
import { reviewsApi } from "./api/reviewsApi";
import { postersApi } from "./api/postersApi";
import { seriesApi } from "./api/seriesApi";

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    [reviewsApi.reducerPath]: reviewsApi.reducer,
    [postersApi.reducerPath]: postersApi.reducer,
    [seriesApi.reducerPath]: seriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      moviesApi.middleware,
      reviewsApi.middleware,
      postersApi.middleware,
      seriesApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
