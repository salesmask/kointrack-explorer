import React from 'react';
import Footer from '../../../components/footer/Footer';
import Header from '../../../components/header/Header';
import TrendingCarousel from '../../../components/trending/trendingcarousel/TrendingCarousel';
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
