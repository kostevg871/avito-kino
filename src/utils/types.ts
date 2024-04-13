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
}

export interface IReview {
  id: number;
  title: string;
  review: string;
  data: string;
}
