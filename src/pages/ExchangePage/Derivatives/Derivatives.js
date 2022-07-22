import React from 'react';
import Footer from '../../../components/footer/Footer';
import Header from '../../../components/header/Header';
import TrendingCarousel from '../../../components/trending/trendingcarousel/TrendingCarousel';
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
