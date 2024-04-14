export interface IMovies {
  rating: IRaiting;
  id: number;
  name: string;
  description: string;
  year: number;
  poster: IPosterMovie;
  genres: IGenres[];
  pages: number;
}

export interface MoviesApiResponse {
  docs: IMovies[];
  page: number;
  limit: number;
  pages: number;
  status: string;
  total: number;
  isSeries: boolean;
}

export interface IPosterMovie {
  url: string;
  previewUrl: string;
}

interface IGenres {
  name: string;
}

interface IRaiting {
  kp: number;
  imdb: number;
  filmCritics: number;
}

export interface IPersons {
  id: number;
  photo: string;
  name: string;
  description: string;
}

export interface IMovie {
  id: number;
  name: string;
  type: string;
  year: number;
  description: string;
  rating: IRaiting;
  persons: IPersons[];
  poster: IPosterMovie;
  genres: IGenres[];
  isSeries: boolean;
}

export interface IReview {
  id: number;
  title: string;
  review: string;
  data: string;
}

export interface ISeason {
  movieId: number;
  number: number;
  episodes: ISeries[];
  episodesCount: number;
}

interface ISeries {
  number: number;
  name: string;
  still: IStill;
}

interface IStill {
  url: string;
}

export interface IReview {
  title: string;
  review: string;
  date: string;
  author: string;
  userRating: number;
  createdAt: string;
}

export interface IPoster {
  url: string;
  movieId: string;
  id: string;
}
