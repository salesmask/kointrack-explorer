import React from 'react';
import './CoinHeadDetails.css';

import CoinImage from '../../../assets/coindetails/coin-head-details/Bitcoin.svg';
import WatchListStar from '../../../assets/coindetails/coin-head-details/Watchlist_Outline.svg';
import RangeofTimeIcon from '../../../assets/coindetails/coin-head-details/rangeoftime-down_arrow.svg';
import CurrentPriceArrowDown from '../../../assets/coindetails/coin-head-details/current-price-arrow-down.svg';
import ETHArrowUp from '../../../assets/coindetails/coin-head-details/Increase_Arrow.svg';

const CoinHeadDetails = () => {
    return (
        <div className="container-fluid px-0">
            <div className="row mx-0">
                <div className="col-11 mx-auto d-flex px-0">
                    <div className="coin-head__wrapper w-100 p-0 p-md-4 ">
                        {/* Name and details section */}

                        <div className="row mx-0 d-flex justify-content-between align-items-center">
                            <div className="col-12 col-md-5 col-lg-4 col-xl-3 px-0">
                                <div className="coin-head__name--wrapper d-flex justify-content-between align-items-start align-items-sm-center flex-column flex-sm-row flex-md-column align-items-md-start">
                                    <div className="d-flex justify-content-start align-items-center mb-3">
                                        <div className="image__wrapper pe-4">
                                            <img
                                                src={CoinImage}
                                                alt="coin"
                                            />
                                        </div>
                                        <div className="name pe-4">Bitcoin</div>
                                        <div className="symbol pe-4">BTC</div>
                                        <div
                                            className="watchlist__wrapper"
                                            role="button"
                                        >
                                            <svg
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fill-rule="nonzero"
                                                    d="M14.1399 6.24171L13.0343 2.83906C12.7088 1.83707 11.2912 1.83707 10.9657 2.83906L9.86007 6.24171C9.42328 7.58601 8.17055 8.49618 6.75706 8.49618H3.1793C2.12575 8.49618 1.6877 9.84434 2.54005 10.4636L5.43451 12.5666C6.57805 13.3974 7.05655 14.8701 6.61976 16.2144L5.51417 19.617C5.18861 20.619 6.33542 21.4522 7.18777 20.833L10.0822 18.73C11.2258 17.8992 12.7742 17.8992 13.9178 18.73L16.8122 20.833C17.6646 21.4522 18.8114 20.619 18.4858 19.617L17.3802 16.2144C16.9434 14.8701 17.422 13.3974 18.5655 12.5666L21.46 10.4636C22.3123 9.84435 21.8742 8.49618 20.8207 8.49618H17.2429C15.8295 8.49618 14.5767 7.58601 14.1399 6.24171ZM14.0687 2.50298C13.4175 0.499005 10.5825 0.499007 9.93132 2.50298L8.82574 5.90563C8.53454 6.80183 7.69938 7.40861 6.75706 7.40861H3.1793C1.0722 7.40861 0.196109 10.1049 1.90079 11.3435L4.79526 13.4464C5.55761 14.0003 5.87661 14.9821 5.58542 15.8783L4.47983 19.2809C3.8287 21.2849 6.12234 22.9513 7.82702 21.7128L10.7215 19.6099C11.4838 19.056 12.5162 19.056 13.2785 19.6099L16.173 21.7128C17.8777 22.9513 20.1713 21.2849 19.5202 19.2809L18.4146 15.8783C18.1234 14.9821 18.4424 14.0003 19.2047 13.4464L22.0992 11.3435C23.8039 10.1049 22.9278 7.40861 20.8207 7.40861H17.2429C16.3006 7.40861 15.4655 6.80183 15.1743 5.90563L14.0687 2.50298Z"
                                                    fill="none"
                                                    stroke="#B1B1B1"
                                                    stroke-width="0.5"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-start align-items-center text-nowrap">
                                        <div className="rank text-nowrap">
                                            Rank #1
                                        </div>
                                        <span>/</span>
                                        <div className="type">Coin</div>
                                        <span>/</span>
                                        <div className="watchlist-count text-nowrap">
                                            On 3,223,084 watchlists
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-6 col-xl-8 px-0">
                                <div className="row mx-0 d-flex justify-content-between align-items-center flex-column-reverse flex-xl-row gap-4">
                                    <div className="col-12 col-xl-5 px-0">
                                        {/* Range bar section */}
                                        <div className="coin-head__range--wrapper w-100 d-flex justify-content-xl-start align-items-center justify-content-md-end">
                                            <div className="range__inner--wrapper">
                                                <div className="range__lowhigh--values d-flex justify-content-between align-items-center mb-4">
                                                    <div className="low__value">
                                                        Low:
                                                        <span className="ps-2">
                                                            $26,350.49
                                                        </span>
                                                    </div>
                                                    <div className="high__value">
                                                        High:
                                                        <span className="ps-2">
                                                            $68,789.63
                                                        </span>
                                                    </div>
                                                </div>

                                                <div class="progress w-100 rounded-pill">
                                                    <div
                                                        class="progress-bar w-50 rounded-pill"
                                                        role="progressbar"
                                                        aria-valuenow="25"
                                                        aria-valuemin="0"
                                                        aria-valuemax="100"
                                                    ></div>
                                                </div>
                                            </div>
                                            <div
                                                className="range-of__time rounded-pill d-flex justify-content-between align-items-center ms-4 px-3 py-1"
                                                role="button"
                                            >
                                                <div className="pe-1 pe-sm-2 time">
                                                    24h
                                                </div>
                                                <img
                                                    src={RangeofTimeIcon}
                                                    alt="down-icon"
                                                    className="range-of-time__icon pe-xl-2"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-xl-5 px-0 mt-3 mt-sm-0">
                                        {/* Current price details section */}

                                        <div className="coin-head__price--wrapper gap-4 d-flex justify-content-between justify-content-md-end align-items-center flex-xl-column align-items-xl-end">
                                            <div className="name-symbol d-none d-xl-block">
                                                Bitcoin Price (BTC)
                                            </div>
                                            <div className="current__price--wrapper d-flex justify-content-end align-items-center">
                                                <span className="current-price">
                                                    $29,651.69
                                                </span>
                                                <span className="percent-change ms-3 py-0 px-2 py-md-1 px-md-3 rounded-pill text-nowrap">
                                                    <img
                                                        src={
                                                            CurrentPriceArrowDown
                                                        }
                                                        alt="change-icon"
                                                        className="change-icon"
                                                    />
                                                    <span className="ps-1">
                                                        6.45%
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="corresponding-current-eth d-md-none d-lg-block">
                                                <span className="eth__price">
                                                    16.48 ETH
                                                </span>
                                                <span className="eth-change ms-3">
                                                    <img
                                                        src={ETHArrowUp}
                                                        alt="eth-change"
                                                    />
                                                    <span className="ps-2">
                                                        8.45%
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoinHeadDetails;
