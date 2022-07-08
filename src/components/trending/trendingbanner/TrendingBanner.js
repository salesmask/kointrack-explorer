import React from 'react';
import './TrendingBanner.css';

const TrendingBanner = () => {
    return (
        <>
            <div className="banner__outer--wrapper container-fluid my-5 py-4 px-0">
                <div className="row h-100 mx-0">
                    <div className="banner__inner--wrapper py-5 px-5 col-11 mx-auto px-0">
                        <div className="container-xxl px-0">
                            <div className="contents__wrapper">
                                <h1 className="heading mb-4">
                                    What are the trending Cryptocurrencies on
                                    KOINTRACK?
                                </h1>
                                <p className="description">
                                    Below is a list of the trending
                                    cryptocurrencies that people are searching
                                    for on KOINTRACK.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TrendingBanner;
