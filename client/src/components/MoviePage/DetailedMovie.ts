import { Movie } from "../MovieSearch/Movie";

export interface DetailedMovie extends Movie {
    runtime: number;
    genres: Genre[];
    cast: string[];
    vote_average: number;
    backdrop_path: string;
    tagline: string;
}

export interface Genre {
    id: number;
    name: string;
}
