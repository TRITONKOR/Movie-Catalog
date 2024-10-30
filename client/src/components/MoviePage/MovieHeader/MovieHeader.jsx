import { useEffect } from "react";
import RatingIndicator from "./RatingIndicator/RatingIndicator";
import './movieHeader.scss';

const MovieHeader = ({ movie }) => {
    useEffect(() => {
        console.log(movie.genres);
        if (!movie) {
            return <div>Loading...</div>;
        }

    }, []);
    const rating = movie && movie.vote_average !== undefined ? Math.round(movie.vote_average * 10) : 0;

    return (
        <div className="header">
            <div className="wrapper">
                <div className="poster">
                    <img className="poster-image" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
                </div>
                <div className="header-details">
                    <section className="film-details">
                        <div className="title">
                            <h2>{movie.title}</h2>
                            <div className="facts">
                                <div className="certification"></div>
                                <div className="release">{movie.release_date}</div>
                                <div className="genres">
                                    {movie?.genres?.map((genre) => {
                                        <span key={genre.id}>{genre.name}</span>
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="rating">
                            <RatingIndicator rating={rating} />
                            <h2>Оцінка користувачів</h2>
                        </div>
                        <div className="header-info">
                            <h3>Опис</h3>
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
