import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import PriceDetails from './pricedetails/PriceDetails';
import Breadcrumbs from './breadcrumbs/Breadcrumbs';

const CoinDetails = () => {
    return (
        <>
            <Header />
            <Breadcrumbs />
            <PriceDetails />

            <Footer />
        </>
    );
};

export default CoinDetails;
