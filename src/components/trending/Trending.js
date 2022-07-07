import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import TrendingCarousel from './trendingcarousel/TrendingCarousel';
import TrendingTableContainer from './tablecontainer/TrendingTableContainer';
import TrendingBanner from './trendingbanner/TrendingBanner';

const Trending = () => {
    return (
        <>
            <Header />
            <TrendingBanner />
            <TrendingCarousel />
            <TrendingTableContainer />
            <Footer />
        </>
    );
};

export default Trending;
