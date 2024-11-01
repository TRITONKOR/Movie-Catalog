import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CastBar from "./CastBar/CastBar";
import { DetailedMovie } from "./DetailedMovie";
import MovieHeader from "./MovieHeader/MovieHeader";
import "./moviePage.scss";


const MoviePage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState<DetailedMovie>();
    const [error, setError] = useState<string | null>(null);

    const fetchMovie = async () => {
        setError(null);
        try {
            const url: string = `http://localhost:3001/movie/${id}`;
            const response: Response = await fetch(url);
            if (!response.ok) throw new Error("Failed to fetch movies");

            const data: DetailedMovie = await response.json();
            setMovie(data || {});
        } catch (err: any) {
            setError(err.message);
        }
    };

    useEffect(() => {
        console.log("rendered page")
        fetchMovie();
    }, [id])

    return (
        <div className="page">
            <header>
                {movie ? <MovieHeader movie={movie} /> : <div>Loading...</div>}
            </header>
            <main>
                {movie ? <CastBar movieId={movie.id} /> : <div>Loading...</div>}
            </main>

        </div>
    );
}

export default MoviePage;
