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

interface IPosterMovie {
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

interface IPersons {
  id: number;
  photo: string;
  name: string;
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
