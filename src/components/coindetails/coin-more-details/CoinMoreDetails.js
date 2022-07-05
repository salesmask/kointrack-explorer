import React from 'react';
import './CoinMoreDetails.css';

import ToolTip from '../../../assets/coindetails/coin-more-details/tooltip-icon.svg';
import DownArrow from '../../../assets/coindetails/coin-more-details/Decrease_Arrow.svg';
import UpArrow from '../../../assets/coindetails/coin-more-details/Increase_Arrow.svg';

const CoinMoreDetails = () => {
    return (
        <div className="more-details__wrapper container-fluid px-0">
            <div className="row mx-0 ">
                <div className="col-11 mx-auto px-0 ">
                    <div className="more-details__inner--wrapper ">
                        <div className="row mx-0 justify-content-between">
                            <div className="col-12 col-md-5 col-lg-4 col-xl-3 px-0">
                                {/* Supply counts section */}

                                <div class="supply__wrapper p-3">
                                    {/* Circulating supply */}

                                    <div className="circulating__supply d-flex justify-content-between align-items-center gap-0 gap-sm-5 gap-lg-1 gap-xl-3 gap-xxl-5">
                                        <div className="range__wrapper me-4 mb-4">
                                            75%
                                        </div>
                                        <div className="value__wrapper">
                                            <div className="d-flex justify-content-center align-items-center">
                                                <div className="heading me-3">
                                                    Circulating Supply
                                                </div>
                                                <img
                                                    src={ToolTip}
                                                    alt="tooltip"
                                                    className="help__tooltip"
                                                />
                                            </div>
                                            <div className="value">
                                                19,055,662.00 BTC
                                            </div>
                                        </div>
                                    </div>

                                    {/* Total and maximum supply counts */}

                                    <div className="other-supply__wrapper pe-4">
                                        <li className="d-flex justify-content-between align-items-center mb-2">
                                            <div className="heading__wrapper d-flex justify-content-center align-items-center">
                                                <div className="heading me-3">
                                                    Max Supply
                                                </div>
                                                <img
                                                    src={ToolTip}
                                                    alt="tooltip"
                                                    className="help__tooltip"
                                                />
                                            </div>
                                            <div className="value">
                                                21,000,000
                                            </div>
                                        </li>

                                        <li className="d-flex justify-content-between align-items-center">
                                            <div className="heading__wrapper d-flex justify-content-center align-items-center">
                                                <div className="heading me-3">
                                                    Total Supply
                                                </div>
                                                <img
                                                    src={ToolTip}
                                                    alt="tooltip"
                                                    className="help__tooltip"
                                                />
                                            </div>
                                            <div className="value">
                                                19,055,712
                                            </div>
                                        </li>
                                    </div>
                                </div>
                            </div>

                            <div className="market-capital__wrapper col-12 col-md-6 col-lg-5 col-xl-6 p-3">
                                <div className="row mx-0 justify-content-between">
                                    <div className="col-12 col-lg-5 col-xl-4  px-0 mb-4">
                                        {/* Market capital section*/}

                                        <div className="market__capital d-flex flox-row flex-md-column justify-content-between align-items-start">
                                            <div className="heading__wrapper d-flex justify-content-center align-items-center mb-2">
                                                <div className="heading me-3">
                                                    Market Cap
                                                </div>
                                                <img
                                                    src={ToolTip}
                                                    alt="tooltip"
                                                    className="help__tooltip"
                                                />
                                            </div>

                                            <div className="d-flex flex-row flex-lg-column">
                                                <div className="value mb-2">
                                                    $564,346,560,569
                                                </div>
                                                <div className="percent__change--wrapper">
                                                    <img
                                                        src={DownArrow}
                                                        alt="icon"
                                                        className="percent__arrow--icon me-2"
                                                    />
                                                    <span className="percent__change--value down">
                                                        10.82%
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6 col-xl-5 px-0">
                                        <div className="diluted__cap d-flex flex-row flex-md-column justify-content-between align-items-start">
                                            <div className="heading__wrapper d-flex justify-content-center align-items-center mb-2">
                                                <div className="heading me-3">
                                                    Fully Diluted Market Cap
                                                </div>
                                                <img
                                                    src={ToolTip}
                                                    alt="tooltip"
                                                    className="help__tooltip"
                                                />
                                            </div>

                                            <div className="d-flex flex-row flex-lg-column">
                                                <div className="value mb-2">
                                                    $621,927,838,327
                                                </div>
                                                <div className="percent__change--wrapper">
                                                    <img
                                                        src={DownArrow}
                                                        alt="icon"
                                                        className="percent__arrow--icon me-2"
                                                    />
                                                    <span className="percent__change--value down">
                                                        10.82%
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 px-0 mt-4 mt-xl-0">
                                        <div className="day__volume d-flex flex-row flex-md-column justify-content-between align-items-start">
                                            <div className="heading__wrapper d-flex justify-content-center align-items-center mb-2">
                                                <div className="heading me-3">
                                                    Volume 24h
                                                </div>
                                                <img
                                                    src={ToolTip}
                                                    alt="tooltip"
                                                    className="help__tooltip"
                                                />
                                            </div>

                                            <div className="d-flex flex-row flex-lg-column">
                                                <div className="value mb-2">
                                                    $40,086,576,636
                                                </div>
                                                <div className="percent__change--wrapper">
                                                    <img
                                                        src={UpArrow}
                                                        alt="icon"
                                                        className="percent__arrow--icon me-2"
                                                    />
                                                    <span className="percent__change--value up">
                                                        10.82%
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ************** */}

                            <div className="col-12 col-lg-2 px-0">
                                {/* Tags section*/}

                                <div class="tags__wrapper p-3">
                                    <div className="heading py-2 ps-1">
                                        Tags:
                                    </div>
                                    <ul className="mt-3 tags__list--container">
                                        <li>
                                            <a href="">Mineable</a>
                                        </li>
                                        <li>
                                            <a href="">PoW</a>
                                        </li>
                                        <li>
                                            <a href="">SHA-256</a>
                                        </li>
                                        <li>
                                            <a href="">Store Of Value</a>
                                        </li>
                                        <li>
                                            <a href="">Store Of Value</a>
                                        </li>
                                        <li className="view__all">
                                            <a href="">View all</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoinMoreDetails;
