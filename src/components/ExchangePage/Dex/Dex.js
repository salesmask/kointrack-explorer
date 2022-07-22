import React from 'react';
import Footer from '../../footer/Footer';
import Header from '../../header/Header';
import TrendingCarousel from '../../trending/trendingcarousel/TrendingCarousel';
import DexBanner from './DexBanner/DexBanner';
import DexContainer from './DexContainer/DexContainer';

const Dex = () => {
    return (
        <div>
            <Header />
            <DexBanner />
            <TrendingCarousel />
            <DexContainer />
            <Footer />
        </div>
    );
};

export default Dex;
