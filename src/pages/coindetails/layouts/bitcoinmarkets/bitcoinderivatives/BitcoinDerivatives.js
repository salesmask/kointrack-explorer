import React from 'react';
import './BitcoinDerivatives.css';

const BitcoinDerivatives = () => {
    return (
        <div className="container-fluid px-0">
            <div className="row mx-0">
                <div className="col-11 d-flex pt-5 mx-auto px-0 derivatives_wrapper_table">
                    <div className="container-xxl d-flex pt-5 px-0">
                        <div className="bitcoin_market ">BitcoinMarkets</div>
                        <div className="bitcoin-derivatives d-flex gap-3">
                            <a
                                href="#"
                                class="btn  rounded-pill button_spot"
                            >
                                Spot
                            </a>
                            <a
                                href="#"
                                class="btn  rounded-pill button_perpetual"
                            >
                                Perpetual
                            </a>
                            <a
                                href="#"
                                class="btn  rounded-pill button_features"
                            >
                                Features
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BitcoinDerivatives;
