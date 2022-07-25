import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import CoinDetails from '../pages/coindetails/CoinDetails';
import Trending from '../components/trending/Trending';
import GainersLosers from '../components/gainerslosers/GainersLosers';
import MostVisited from '../components/mostvisited/MostVisited';


import Exchange from '../pages/ExchangePage/layouts/Exchange/Exchange';
import Derivatives from '../pages/ExchangePage/layouts/Derivatives/Derivatives';
import Dex from '../pages/ExchangePage/layouts/Dex/Dex';
import RecentlyAdded from '../components/recentlyadded/RecentlyAdded';
import SpotLight from '../components/spotlight/SpotLight';
import SignupForm from '../components/signupform/SignupForm'
import LoginForm from '../components/loginform/LoginForm';

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/home" element={<Home />} />

            <Route path="/coindetails" element={<CoinDetails />} />

            <Route path="/trending" element={<Trending />} />

            <Route path="/gainers&losers" element={<GainersLosers />} />

            <Route path="/mostvisited" element={<MostVisited />} />
            
            <Route path="/exchange" element={<Exchange/>} />
            <Route path="/derivatives" element={<Derivatives/>} />
            <Route path="/Dex" element={<Dex/>} />
            <Route path="/spot" element={<Exchange/>} />
         
            <Route path="/most-visited" element={<MostVisited />} />

            <Route path="/recently-added" element={<RecentlyAdded />} />

            <Route path="/spotlight" element={<SpotLight />} />

            <Route path="/signupform" element={<SignupForm />} />
            <Route path="/loginform" element={<LoginForm />} />

        </Routes>
    );
};

export default MainRoutes;
