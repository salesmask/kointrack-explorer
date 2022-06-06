import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../components/homepage/Home';

const HomeRoute = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<Home />}
            />
        </Routes>
    );
};

export default HomeRoute;
