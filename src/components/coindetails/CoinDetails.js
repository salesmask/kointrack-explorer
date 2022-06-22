import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import CoinHeadDetails from './coin-head-details/CoinHeadDetails';
import Breadcrumbs from './breadcrumbs/Breadcrumbs';
import InfoSources from './info-sources/InfoSources';
import CoinMoreDetails from './coin-more-details/CoinMoreDetails';
import ChartTabs from './charttabs/ChartTabs';

const CoinDetails = () => {
    return (
        <>
            <Header />
            <Breadcrumbs />
            <CoinHeadDetails />
            <InfoSources />
            <CoinMoreDetails />
            <ChartTabs />
            <Footer />
        </>
    );
};

export default CoinDetails;