import React from 'react';
import Footer from '../../footer/Footer';
import Header from '../../header/Header';
import TrendingCarousel from '../../trending/trendingcarousel/TrendingCarousel';

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
