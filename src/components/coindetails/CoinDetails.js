import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import PriceDetails from './pricedetails/PriceDetails';
import PriceEstimates from './priceestimates/PriceEstimates';

const CoinDetails = () => {
    return (
        <>
            <Header />
            <PriceDetails />
            <PriceEstimates />

            <Footer />
        </>
    );
};

export default CoinDetails;
