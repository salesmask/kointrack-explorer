import React from 'react';
import Footer from '../../../../components/footer/Footer';
import Header from '../../../../components/header/Header';
import TrendingCarousel from '../../../../components/trending/trendingcarousel/TrendingCarousel';

import ExchangeBanner from './ExchangeBanner/Exchangebanner';
import ExchangeContainer from './ExchangeContainer/ExchangeContainer';

const Exchange = () => {
    return (
        <div>
            <Header />
            <ExchangeBanner />
            <TrendingCarousel />
            <ExchangeContainer />
            <Footer />
        </div>
    );
};

export default Exchange;
