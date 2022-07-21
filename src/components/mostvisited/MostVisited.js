import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import TrendingBanner from '../trending/trendingbanner/TrendingBanner';
import TrendingCarousel from '../trending/trendingcarousel/TrendingCarousel';
import MostVisitedTableContainer from './tablecontainer/MostVisitedTableContainer';

const MostVisited = () => {
    return (
        <>
            <Header />

            {/* Gainers & Losers Banner and Carouser has been added directly from Trending page */}

            <TrendingBanner />
            <TrendingCarousel />

            {/* ****** */}

            <MostVisitedTableContainer />

            <Footer />
        </>
    );
};

export default MostVisited;
