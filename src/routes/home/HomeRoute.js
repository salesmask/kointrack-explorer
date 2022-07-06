import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../components/homepage/Home';
import Trending from '../../components/trending/Trending';

const HomeRoute = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<Home />}
            />
            <Route
                path="/trending"
                element={<Trending />}
            />
        </Routes>
    );
};

export default HomeRoute;
