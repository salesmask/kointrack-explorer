import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CoinDetails from '../../components/coindetails/CoinDetails';

const CoinDetailsRoute = () => {
    return (
        <Routes>
            <Route
                path="/coindetails"
                element={<CoinDetails />}
            />
        </Routes>
    );
};

export default CoinDetailsRoute;
