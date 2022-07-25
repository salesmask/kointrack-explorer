import React from 'react';
import './CoinDetails.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import CoinHeadDetails from './layouts/coin-head-details/CoinHeadDetails';
import Breadcrumbs from './layouts/breadcrumbs/Breadcrumbs';
import InfoSources from './layouts/info-sources/InfoSources';
import CoinMoreDetails from './layouts/coin-more-details/CoinMoreDetails';
import ChartTabs from './layouts/charttabs/ChartTabs';
import PriceEstimates from './layouts/priceestimates/PriceEstimates';
import ChartSection from './layouts/chartsection/ChartSection';
import News from './layouts/news/News';
import Gravity from './layouts/gravity/Gravity';
import BitcoinMarkets from './layouts/bitcoinmarkets/BitcoinMarkets';
import BitcoinDerivatives from './layouts/bitcoinmarkets/bitcoinderivatives/BitcoinDerivatives';
// import SignupForm from './Signupform/SignupForm';
// import LoginForm from './loginform/LoginForm';

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

            <section className="tabdetails__outer--container container-fluid px-0">
                <div className="row mx-0">
                    <div className="tabdetails__inner--container col-11 mx-auto px-0">
                        <div className="container-xxl px-0">
                            <div className="row mx-0 d-flex flex-wrap">
                                <div className="col-12 col-lg-8 px-0 pe-lg-5">
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
                </div>
            </section>

            <PriceEstimates />
            <BitcoinDerivatives />
            <BitcoinMarkets />

            <News />
            {/* <LoginForm /> */}
            {/* <SignupForm /> */}

            <Footer />
        </>
    );
};

export default CoinDetails;
