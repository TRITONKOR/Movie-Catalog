import React, { useEffect, useState } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './movieSearch.scss';

const MovieSearch = () => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const [title, setTitle] = useState('');
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    const fetchMovies = async () => {
        setError(null);
        try {
            const url = title
                ? `http://localhost:3001/movies/search?title=${encodeURIComponent(title)}`
                : `http://localhost:3001/discover/movie`;
            const response = await fetch(url);
            if (!response.ok) throw new Error("Failed to fetch movies");

            const data = await response.json();
            setMovies(data.results || []);
        } catch (err) {
            setError(err.message);
        }
    };

    useEffect(() => {

        fetchMovies();
    }, [])


    const handleSearch = async (e) => {
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
                    <MovieCard movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default MovieSearch;
