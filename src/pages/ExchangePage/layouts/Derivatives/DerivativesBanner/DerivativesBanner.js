import React from 'react';
import './DerivativesBanner.css';

const DerivativesBanner = () => {
    return (
        <>
            <div className="banner__outer--wrapper container-fluid my-5 py-4 px-0">
                <div className="row h-100 mx-0">
                    <div className="banner__inner--wrapper col-11 mx-auto px-0">
                        <div className="container-xxl px-0 banner__container py-5 px-5">
                            <div className="contents__wrapper">
                                <h1 className="heading mb-4">
                                    Top Cryptocurrency Derivatives Exchanges
                                </h1>
                                <p className="description">
                                    KOINTRACK ranks the top cryptocurrency
                                    derivatives exchanges using an algorithm
                                    based on multiple factors including
                                    liquidity and normalized volume.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DerivativesBanner;
