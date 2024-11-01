import { useEffect, useState } from 'react';
import { Movie } from './Movie';
import MovieCard from './MovieCard/MovieCard';
import './movieSearch.scss';

const MovieSearch = () => {
    const [title, setTitle] = useState<string>('');
    const [movies, setMovies] = useState<Movie[]>([]);

    const fetchMovies = async () => {
        try {
            const url: string = title
                ? `http://localhost:3001/movies/search?title=${encodeURIComponent(title)}`
                : `http://localhost:3001/discover/movie`;
            const response: Response = await fetch(url);
            if (!response.ok) throw new Error("Failed to fetch movies");

            const data: MovieResponse = await response.json();
            setMovies(data.results || []);
        } catch (err: any) {
            console.log(err.message);
        }
    };

    useEffect(() => {
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
