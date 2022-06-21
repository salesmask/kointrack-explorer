import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import CoinHeadDetails from './coin-head-details/CoinHeadDetails';
import Breadcrumbs from './breadcrumbs/Breadcrumbs';
import InfoSources from './info-sources/InfoSources';

const CoinDetails = () => {
    return (
        <>
            <Header />
            <Breadcrumbs />
            <CoinHeadDetails />
            <InfoSources />
            <Footer />
        </>
    );
};

export default CoinDetails;
