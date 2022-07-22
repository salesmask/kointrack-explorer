import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../components/homepage/Home';
import CoinDetails from '../components/coindetails/CoinDetails';
import Trending from '../components/trending/Trending';
import GainersLosers from '../components/gainerslosers/GainersLosers';
import MostVisited from '../components/mostvisited/MostVisited';

import RecentlyAdded from '../components/homepage/highlights/recently-added/RecentlyAdded';
import Exchange from '../components/ExchangePage/Exchange/Exchange';
import Derivatives from '../components/ExchangePage/Derivatives/Derivatives';
import Dex from '../components/ExchangePage/Dex/Dex';
// import SignupForm from '../../components/coindetails/Signupform/SignupForm';
// import LoginForm from '../../components/coindetails/loginform/LoginForm';

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/coindetails" element={<CoinDetails />} />

            <Route path="/trending" element={<Trending />} />

            <Route path="/gainers&losers" element={<GainersLosers />} />

            <Route path="/mostvisited" element={<MostVisited />} />
            <Route path="/exchange" element={<Exchange/>} />
            <Route path="/derivatives" element={<Derivatives/>} />
            <Route path="/Dex" element={<Dex/>} />
            <Route path="/spot" element={<Exchange/>} />
         

            {/* <Route path="/signupform" element={<SignupForm />} />
            <Route path="/loginform" element={<LoginForm />} /> */}

        </Routes>
    );
};

export default MainRoutes;
