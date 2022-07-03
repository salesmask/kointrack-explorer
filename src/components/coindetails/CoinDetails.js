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
import News from './news/News';
import Gravity from './gravity/Gravity';
import BitcoinMarkets from '../bitcoinmarkets/BitcoinMarkets';

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

            <section className="tabdetails__outer--container container-fluid px-0 border border-primary">
                <div className="row mx-0 border border-primary">
                    <div className="tabdetails__inner--container col-11 mx-auto px-0">
                        <div className="row mx-0 d-flex flex-wrap  border border-danger">
                            <div className="col-12 col-lg-8 ps-0 pe-5">
                                <div className="chart-side__wrapper">
                                    <ChartSection />
                                </div>
                            </div>
                            <div className="col-12 col-lg-4 px-0">
                                <div className="gravity-side__wrapper">
                                    <Gravity />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <PriceEstimates />
            <BitcoinMarkets />

            <News />

            <Footer />
        </>
    );
};

export default CoinDetails;
