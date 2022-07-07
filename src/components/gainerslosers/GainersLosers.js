import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import TrendingBanner from '../trending/trendingbanner/TrendingBanner';
import TrendingCarousel from '../trending/trendingcarousel/TrendingCarousel';
import './GainersLosers.css';
import GainerLoserTableContainer from './tablecontainer/GainerLoserTableContainer';

const GainersLosers = () => {
    return (
        <>
            <Header />

            {/* Gainers & Losers Banner and Carouser has been added directly from Trending page */}

            <TrendingBanner />
            <TrendingCarousel />

            {/* ****** */}

            <GainerLoserTableContainer />

            <div className="gainerslosers__wrapper">Gainers & Losers</div>

            <Footer />
        </>
    );
};

export default GainersLosers;
