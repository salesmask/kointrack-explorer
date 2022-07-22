import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../components/homepage/Home';
import CoinDetails from '../components/coindetails/CoinDetails';
import Trending from '../components/trending/Trending';
import GainersLosers from '../components/gainerslosers/GainersLosers';
import MostVisited from '../components/mostvisited/MostVisited';
import RecentlyAdded from '../components/recentlyadded/RecentlyAdded';
import SpotLight from '../components/spotlight/SpotLight';
// import SignupForm from '../../components/coindetails/Signupform/SignupForm';
// import LoginForm from '../../components/coindetails/loginform/LoginForm';

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/coindetails" element={<CoinDetails />} />

            <Route path="/trending" element={<Trending />} />

            <Route path="/gainers&losers" element={<GainersLosers />} />

            <Route path="/most-visited" element={<MostVisited />} />

            <Route path="/recently-added" element={<RecentlyAdded />} />

            <Route path="/spotlight" element={<SpotLight />} />

            {/* <Route path="/signupform" element={<SignupForm />} />
            <Route path="/loginform" element={<LoginForm />} /> */}

        </Routes>
    );
};

export default MainRoutes;
