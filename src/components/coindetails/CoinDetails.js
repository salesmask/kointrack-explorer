import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import PriceDetails from './pricedetails/PriceDetails';
import PriceEstimates from './priceestimates/PriceEstimates';
import News from './news/News';

const CoinDetails = () => {
    return (
        <>
            <Header />
            <PriceDetails />
            <PriceEstimates />
            <News />

            <Footer />
        </>
    );
};

export default CoinDetails;
