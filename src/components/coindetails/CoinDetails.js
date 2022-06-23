import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import PriceDetails from './pricedetails/PriceDetails';
import PriceEstimates from './priceestimates/PriceEstimates';
import BitcoinMarkets from './../../components/bitcoinmarkets/BitcoinMarkets';
const CoinDetails = () => {
    return (
        <>
            <Header />
            {/* <PriceDetails /> */}
            <PriceEstimates />
            <BitcoinMarkets />

            <Footer />
        </>
    );
};

export default CoinDetails;
