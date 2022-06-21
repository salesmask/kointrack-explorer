import React from 'react';
import './CoinHeadDetails.css';

import CoinImage from '../../../assets/coindetails/coin-head-details/Bitcoin.svg';
import WatchListStar from '../../../assets/coindetails/coin-head-details/Watchlist_Outline.svg';
import RangeofTimeIcon from '../../../assets/coindetails/coin-head-details/rangeoftime-down_arrow.svg';
import CurrentPriceArrowDown from '../../../assets/coindetails/coin-head-details/current-price-arrow-down.svg';
import ETHArrowUp from '../../../assets/coindetails/coin-head-details/Increase_Arrow.svg';

const CoinHeadDetails = () => {
    return (
        <div className="head-details__wrapper p-4 d-flex justify-content-between align-items-center">
            {/* Name and details section */}

            <div className="head-details__name--wrapper">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="image__wrapper">
                        <img
                            src={CoinImage}
                            alt="coin"
                        />
                    </div>
                    <div className="name">Bitcoin</div>
                    <div className="symbol">BTC</div>
                    <div className="watchlist__wrapper">
                        <img
                            src={WatchListStar}
                            alt="star-icon"
                        />
                    </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="rank">Rank #1</div>
                    <span>/</span>
                    <div className="type">Coin</div>
                    <span>/</span>
                    <div className="watchlist-count">
                        On 3,223,084 watchlists
                    </div>
                </div>
            </div>

            {/* Range section */}
            <div className="head-details__range--wrapper d-flex justify-content-between align-items-center d-none d-xl-flex">
                <div className="range__inner--wrapper">
                    <div className="range__lowhigh--values d-flex justify-content-between align-items-center mb-4">
                        <div className="low__value">
                            Low:
                            <span className="ps-2">$26,350.49</span>
                        </div>
                        <div className="high__value">
                            High:
                            <span className="ps-2">$68,789.63</span>
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
                <div className="range-of__time rounded-pill d-flex justify-content-between align-items-center ms-5 px-3 py-1">
                    <div className="pe-3 time">24h</div>
                    <img
                        src={RangeofTimeIcon}
                        alt="down-icon"
                        className="range-of-time__icon"
                    />
                </div>
            </div>

            {/* Current price details section */}

            <div className="head-details__price--wrapper text-end">
                <div className="name-symbol">Bitcoin Price (BTC)</div>
                <div className="current__price d-flex justify-content-center align-items-center">
                    <span className="price">$29,651.69</span>
                    <span className="percent-change ms-3 py-1 px-2 rounded-pill">
                        <img
                            src={CurrentPriceArrowDown}
                            alt="change-icon"
                            className="current__price--image"
                        />
                        <span className="ps-1">6.45%</span>
                    </span>
                </div>
                <div className="corresponding-current-eth">
                    <span className="eth__price">16.48 ETH</span>
                    <span className="eth-change ms-3">
                        <img
                            src={ETHArrowUp}
                            alt="eth-change"
                        />
                        <span className="ps-2">8.45%</span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CoinHeadDetails;
