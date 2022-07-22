import React from 'react';
import './CoinHeadDetails.css';

import CoinImage from '../../../assets/coindetails/coin-head-details/Bitcoin.svg';
import WatchListStar from '../../../assets/coindetails/coin-head-details/Watchlist_Outline.svg';
import RangeofTimeIcon from '../../../assets/coindetails/coin-head-details/rangeoftime-down_arrow.svg';
import CurrentPriceArrowDown from '../../../assets/coindetails/coin-head-details/current-price-arrow-down.svg';
import ETHArrowUp from '../../../assets/coindetails/coin-head-details/Increase_Arrow.svg';
import WatchlistStar from '../../watchliststar/WatchlistStar';
import CoinHeadProgressbar from './progressbar/CoinHeadProgressbar';

const CoinHeadDetails = () => {
    return (
        <div className="container-fluid px-0">
            <div className="row mx-0">
                <div className="col-11 mx-auto px-0 d-flex ">
                    <div className="coin-head__wrapper w-100 p-0 p-md-4 ">
                        <div className="container-xxl px-0">
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
                                            <div className="name pe-4">
                                                Bitcoin
                                            </div>
                                            <div className="symbol pe-4">
                                                BTC
                                            </div>
                                            <div
                                                className="watchlist__wrapper"
                                                role="button"
                                            >
                                                <WatchlistStar />
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

                                                    {/* Progress bar */}

                                                    <CoinHeadProgressbar />

                                                    {/* ******* */}
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
        </div>
    );
};

export default CoinHeadDetails;
