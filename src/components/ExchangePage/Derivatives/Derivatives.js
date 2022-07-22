import React from 'react';
import Footer from '../../footer/Footer';
import Header from '../../header/Header';
import TrendingCarousel from '../../trending/trendingcarousel/TrendingCarousel';
import DerivativesBanner from './DerivativesBanner/DerivativesBanner';
import DerivativesContainer from './DerivativesContainer/DerivativesContainer';

const Derivatives = () => {
    return (
        <div>
            <Header />
            <DerivativesBanner />
            <TrendingCarousel />
            <DerivativesContainer />
            <Footer />
        </div>
    );
};

export default Derivatives;
