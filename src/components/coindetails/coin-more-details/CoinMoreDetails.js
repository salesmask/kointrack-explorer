import React from 'react';
import './CoinMoreDetails.css';

import ToolTip from '../../../assets/coindetails/coin-more-details/tooltip-icon.svg';
import DownArrow from '../../../assets/coindetails/coin-more-details/Decrease_Arrow.svg';
import UpArrow from '../../../assets/coindetails/coin-more-details/Increase_Arrow.svg';

const CoinMoreDetails = () => {
    return (
        <div className="more-details__wrapper container px-0">
            <div className="more-details__inner--wrapper d-flex justify-content-between align-items-stretch gap-4">
                {/* Supply counts */}

                <div class="supply__wrapper p-4">
                    {/* Circulating supply */}

                    <div className="circulating__supply d-flex justify-content-between align-items-center gap-5">
                        <div className="range__wrapper me-4 mb-4">75%</div>
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
                            <div className="value">19,055,662.00 BTC</div>
                        </div>
                    </div>

                    {/* Total and maximum supply counts */}

                    <div className="other-supply__wrapper pe-4">
                        <li className="d-flex justify-content-between align-items-center mb-2">
                            <div className="heading__wrapper d-flex justify-content-center align-items-center">
                                <div className="heading me-3">Max Supply</div>
                                <img
                                    src={ToolTip}
                                    alt="tooltip"
                                    className="help__tooltip"
                                />
                            </div>
                            <div className="value">21,000,000</div>
                        </li>

                        <li className="d-flex justify-content-between align-items-center">
                            <div className="heading__wrapper d-flex justify-content-center align-items-center">
                                <div className="heading me-3">Total Supply</div>
                                <img
                                    src={ToolTip}
                                    alt="tooltip"
                                    className="help__tooltip"
                                />
                            </div>
                            <div className="value">19,055,712</div>
                        </li>
                    </div>
                </div>

                {/* Market capital */}

                <div class="market-capital__wrapper d-flex py-5 px-4 ">
                    <div className="market__cap d-flex flex-column justify-content-start align-items-start pe-4">
                        <div className="heading__wrapper d-flex justify-content-center align-items-center mb-2">
                            <div className="heading me-3">Market Cap</div>
                            <img
                                src={ToolTip}
                                alt="tooltip"
                                className="help__tooltip"
                            />
                        </div>
                        <div className="value mb-2">$564,346,560,569</div>
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
                    <div className="diluted__cap d-flex flex-column justify-content-start px-4">
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
                        <div className="value mb-2">$621,927,838,327</div>
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
                    <div className="day__volume d-flex flex-column justify-content-start ps-4">
                        <div className="heading__wrapper d-flex justify-content-center align-items-center mb-2">
                            <div className="heading me-3">Volume 24h</div>
                            <img
                                src={ToolTip}
                                alt="tooltip"
                                className="help__tooltip"
                            />
                        </div>
                        <div className="value mb-2">$40,086,576,636</div>
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

                {/* Tags */}

                <div class="tags__wrapper p-3">
                    <div className="heading py-2 ps-1">Tags:</div>
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
    );
};

export default CoinMoreDetails;
