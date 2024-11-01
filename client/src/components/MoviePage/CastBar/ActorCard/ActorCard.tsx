import React, { useState } from "react";
import { Actor } from "../Actor";

interface ActorCardProps {
    actor: Actor;
}

const ActorCard: React.FC<ActorCardProps> = ({ actor }) => {

    const [profileImage, setProfileImage] = useState(`https://media.themoviedb.org/t/p/w138_and_h175_face/${actor.profile_path}`);

    const handleImageError = () => {
        setProfileImage('/no-profile.jpg');
    };

    return (
        <>
            <a href={`https://www.themoviedb.org/person/${actor.id}`}>
                <div className="profile-container">
                    <img className="profile"
                        loading="lazy"
                        src={profileImage}
                        onError={handleImageError}
                        alt={actor.original_name} />
                </div>
            </a>
            <p>
                <a href={`https://www.themoviedb.org/person/${actor.id}`}>{actor.original_name}</a>
            </p>
            <p className="character">{actor.character}</p>
        </>
    );
}

export default ActorCard;
