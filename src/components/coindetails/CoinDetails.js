import React from 'react';
import './CoinDetails.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import CoinHeadDetails from './coin-head-details/CoinHeadDetails';
import Breadcrumbs from './breadcrumbs/Breadcrumbs';
import InfoSources from './info-sources/InfoSources';
import CoinMoreDetails from './coin-more-details/CoinMoreDetails';
import ChartTabs from './charttabs/ChartTabs';
import PriceEstimates from './priceestimates/PriceEstimates';
import ChartSection from './chartsection/ChartSection';

const CoinDetails = () => {
    return (
        <>
            <Header />
            <Breadcrumbs />
            <CoinHeadDetails />
            <InfoSources />
            <CoinMoreDetails />
            <ChartTabs />

            {/* Chart and gravity outer layout */}

            <section className="tabdetails__outer--container">
                <div className="tabdetails__inner--container">
                    <div className="chart-side__wrapper">
                        <ChartSection />
                    </div>
                    <div className="gravity-side__wrapper">gravity-col</div>
                </div>
            </section>

            <PriceEstimates />

            <Footer />
        </>
    );
};

export default CoinDetails;
