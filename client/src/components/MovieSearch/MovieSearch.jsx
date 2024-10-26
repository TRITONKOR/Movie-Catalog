import React, { useEffect, useState } from 'react';

const MovieSearch = () => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const [title, setTitle] = useState('');
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log("rendered")
    }, [movies])


    const handleSearch = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await fetch(`http://localhost:3001/movies/search?title=${encodeURIComponent(title)}`);
            if (!response.ok) throw new Error("Failed to fetch movies");

            const data = await response.json();
            console.log(data)
            setMovies(data.results || []);
        } catch (err) {
            setError(err.message)
        }
    }

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Введіть назву фільма"
                />
                <button type="submit">Пошук</button>
            </form>
            {error && <p>{error}</p>}
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>{movie.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default MovieSearch;
