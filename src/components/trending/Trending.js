import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import TrendingCarousel from './trendingcarousel/TrendingCarousel';
import TableContainer from './tablecontainer/TableContainer';
import TrendingBanner from './trendingbanner/TrendingBanner';

const Trending = () => {
    return (
        <>
            <Header />
            <TrendingBanner />
            <TrendingCarousel />
            <TableContainer />
            <Footer />
        </>
    );
};

export default Trending;
