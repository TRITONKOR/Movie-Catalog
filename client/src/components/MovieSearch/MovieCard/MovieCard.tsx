import "./movieCard.scss";
import { Movie } from "../Movie";
import React from "react";

interface MovieCardProps {
    movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {

    return (
        <div className="card">
            <div className="wrapper">
                <div className="poster">
                    <a className="result" href={`http://localhost:3000/movie/${movie.id}`} >
                        <img className="poster-image" src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} />
                    </a>
                </div>
                <div className="details">
                    <div className="wrapper">
                        <div className="title">
                            <div>
                                <a className="result" href={`http://localhost:3000/movie/${movie.id}`} >{movie.title}</a>
                            </div>
                            <span className="release_date">{movie.release_date}</span>
                        </div>
                    </div>
                    <section className="overview">
                        <p>{movie.overview}</p>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;
