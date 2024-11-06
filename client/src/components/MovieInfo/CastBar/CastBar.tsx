import React, { useEffect, useState } from "react";
import { Actor } from "./Actor";
import ActorCard from "./ActorCard/ActorCard";
import "./castBar.scss";

interface CastBarProps {
    movieId: number;
}

const CastBar: React.FC<CastBarProps> = ({ movieId }) => {
    const [cast, setCast] = useState<Actor[]>([]);

    const fetchCast = async () => {
        try {
            const url = `http://localhost:3001/movie/${movieId}/credits`;
            const response: Response = await fetch(url);
            if (!response.ok) throw new Error("Failed to fetch cast");

            const data: CastResponse = await response.json();
            console.log(data);
            setCast(data.cast || []);
        } catch (err: any) {
            console.log(err.message);
        }
    };
    useEffect(() => {
        fetchCast();
    }, []);

    return (
        <div>
            <section className="panel">
                <h3>У головних ролях</h3>
                <div className="cast-scroll">
                    <ol className="people-scroll">
                        {
                            cast.map((actor: Actor) => (
                                <li key={actor.id} className="card">
                                    <ActorCard actor={actor} />
                                </li>
                            ))
                        }
                    </ol>
                </div>
            </section>
        </div>
    );
}

export default CastBar;

interface CastResponse {
    cast: Actor[];
}
