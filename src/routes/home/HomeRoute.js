import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GainersLosers from '../../components/gainerslosers/GainersLosers';
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
            <Route
                path="/gainers&losers"
                element={<GainersLosers />}
            />
        </Routes>
    );
};

export default HomeRoute;
