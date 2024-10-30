import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieHeader from "./MovieHeader/MovieHeader";


const MoviePage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [error, setError] = useState(null);

    const fetchMovie = async () => {
        setError(null);
        try {
            const url = `http://localhost:3001/movie/${id}`;
            const response = await fetch(url);
            if (!response.ok) throw new Error("Failed to fetch movies");

            const data = await response.json();
            setMovie(data || []);
        } catch (err) {
            setError(err.message);
        }
    };

    useEffect(() => {
        fetchMovie();
    }, [])

    return (
        <div className="page">
            <header>
                <MovieHeader movie={movie} />
            </header>
            <main>

            </main>
        </div>
    );
}

export default MoviePage;
