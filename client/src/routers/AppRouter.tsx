import React from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MoviePage from '../components/MoviePage/MoviePage';
import MovieSearch from '../components/MovieSearch/MovieSearch';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/search" replace />} />
                <Route path="/search" element={<MovieSearch />} />
                <Route path="/movie/:id" element={<MoviePage />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
