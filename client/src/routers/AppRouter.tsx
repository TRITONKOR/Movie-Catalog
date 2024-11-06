import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm/RegisterForm';
import MoviePage from '../pages/movie';
import SearchPage from '../pages/search';

const AppRouter = () => {
    //<Navigate to="/search" replace />} />
    return (
        <Router>
            <Routes>
                <Route path="/" element={<RegisterForm />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/movie/:id" element={<MoviePage />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
