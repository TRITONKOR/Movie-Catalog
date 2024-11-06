import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { UserState } from '../../store/types';

import { logout } from '../../store/userSlice';

const ProfileCard = () => {
    const username = useSelector((state: UserState) => state.user.name);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const redirectToRegisterPage = () => {
        navigate('/');
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(logout());
        redirectToRegisterPage();
    };

    return (
        <div className="profile-container">
            <h2>{username}</h2>
            <button onClick={handleClick}>Sign Out</button>
        </div>
    );
};

export default ProfileCard;
