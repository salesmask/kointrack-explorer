import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import CoinHeadDetails from './coin-head-details/CoinHeadDetails';
import Breadcrumbs from './breadcrumbs/Breadcrumbs';

const CoinDetails = () => {
    return (
        <>
            <Header />
            <Breadcrumbs />
            <CoinHeadDetails />

            <Footer />
        </>
    );
};

export default CoinDetails;
