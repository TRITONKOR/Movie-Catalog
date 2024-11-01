import React, { useEffect } from "react";
import RatingIndicator from "./RatingIndicator/RatingIndicator";
import './movieHeader.scss';
import { DetailedMovie, Genre } from "../DetailedMovie";

interface MovieHeaderProps {
    movie: DetailedMovie;
}

const MovieHeader: React.FC<MovieHeaderProps> = ({ movie }) => {
    useEffect(() => {
        console.log("rendered header");
    }, [movie]);

    const rating: number = Math.round(movie.vote_average * 10);
    const backdropUrl: string = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
    const posterUrl: string = `https://image.tmdb.org/t/p/original${movie.poster_path}`;


    return (
        <div className="header" style={{ backgroundImage: `url(${backdropUrl})` }}>
            <div className="wrapper">
                <div className="poster">
                    <img className="poster-image" src={posterUrl} />
                </div>
                <div className="header-details">
                    <section className="film-details">
                        <div className="title">
                            <h2>{movie.title}</h2>
                            <div className="facts">
                                <div className="certification"></div>
                                <div className="release">{movie.release_date}</div>
                                <div className="genres">
                                    {movie.genres && movie.genres.map((genre: Genre) => genre.name).join(", ")}
                                </div>
                            </div>
                        </div>
                        <div className="rating">
                            <RatingIndicator rating={rating} />
                            <div className="text">
                                Оцінка
                                <br></br>
                                користувачів
                            </div>
                        </div>
                        <div className="header-info">
                            <h2>Опис</h2>
                            <div className="overview">
                                <p></p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default MovieHeader;
