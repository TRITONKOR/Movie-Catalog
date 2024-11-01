import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard/MovieCard';
import { Movie } from './Movie';
import './movieSearch.scss';

const MovieSearch = () => {
    const [title, setTitle] = useState<string>('');
    const [movies, setMovies] = useState<Movie[]>([]);
    const [error, setError] = useState<string | null>(null);

    const fetchMovies = async () => {
        setError(null);
        try {
            const url: string = title
                ? `http://localhost:3001/movies/search?title=${encodeURIComponent(title)}`
                : `http://localhost:3001/discover/movie`;
            const response: Response = await fetch(url);
            if (!response.ok) throw new Error("Failed to fetch movies");

            const data: MovieResponse = await response.json();
            console.log(data);
            setMovies(data.results || []);
        } catch (err: any) {
            setError(err.message);
        }
    };

    useEffect(() => {
        console.log("dadada");
        fetchMovies();
    }, [])


    const handleSearch = async (e: any) => {
        e.preventDefault();
        fetchMovies();
    }

    return (
        <div className='wrapper'>
            <div className='search'>
                <form onSubmit={handleSearch}>
                    <input
                        className='search-input'
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter movie title"
                    />
                </form>
            </div>
            <div className='results'>
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default MovieSearch;

interface MovieResponse {
    results: Movie[];
    total_pages: number;
}
