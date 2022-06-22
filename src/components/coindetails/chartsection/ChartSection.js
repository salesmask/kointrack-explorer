import React from 'react';
import './ChartSection.css';

import CalendarIcon from '../../../assets/coindetails/chart-section/calendar-icon.svg';
import CoinReview from './coinreview/CoinReview';
import CoinDescription from './coindescription/CoinDescription';

const ChartSection = () => {
    return (
        <div className="chart-section__wrapper">
            {' '}
            {/* can remove the div with fragments */}
            <h3 className="chart-section__heading">Bitcoin to USD Chart</h3>
            <div className="control-tabs__wrapper d-flex justify-content-between align-items-center">
                {/* Chart deciding tabs*/}

                <ul className="d-flex justify-content-start align-items-center mb-0">
                    <li className="active rounded-pill">
                        <a href="">Price</a>
                    </li>
                    <li className="rounded-pill">
                        <a href="">Market Cap</a>
                    </li>
                    <li className="rounded-pill">
                        <a href="">Trading View</a>
                    </li>
                </ul>

                <div className="d-flex justify-content-between align-items-center gap-4">
                    {/* Checkbox */}

                    <div className="checkbox__wrapper d-flex justify-content-between align-items-center">
                        <div className="d-flex justify-content-center align-items-center">
                            <input
                                class="form-check-input mt-0"
                                type="checkbox"
                                value=""
                                aria-label="Checkbox for following text input"
                            />
                            <label
                                for="vehicle1"
                                className="px-2"
                            >
                                USD
                            </label>
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                            <input
                                class="form-check-input mt-0"
                                type="checkbox"
                                value=""
                                aria-label="Checkbox for following text input"
                            />
                            <label
                                for="vehicle1"
                                className="ps-2"
                            >
                                BTC
                            </label>
                        </div>
                    </div>

                    {/* Time based tabs */}

                    <div className="time-tag__wrapper rounded-pill">
                        <ul className="d-flex justify-content-center align-items-center mb-0">
                            <li className="active">1D</li>
                            <li>7D</li>
                            <li>1M</li>
                            <li>3M</li>
                            <li>1Y</li>
                            <li>YTD</li>
                            <li>All</li>
                            <li className="calendar__icon--wrapper">
                                <img
                                    src={CalendarIcon}
                                    alt="calendar-icon"
                                    className="calender__icon"
                                />
                            </li>

                            {/* Need to remove this li for vertical line with css ::before */}

                            <li className="vertical__line">|</li>
                            <li>LOG</li>
                        </ul>
                    </div>
                </div>
                {/* Checkbox and time-tabs ends */}
            </div>
            {/* Chart-outline container */}
            <div className="chart-outline__wrapper ">
                <div className="graph__main--wrapper d-flex justify-content-center align-items-center mb-5">
                    The Chart..yyo
                </div>

                {/* Coin review section */}

                <div className="coin__review--wrapper">
                    <CoinReview />
                </div>

                {/* Coin description section */}

                <div className="coin__description--wrapper">
                    <CoinDescription />
                </div>
            </div>
        </div>
    );
};

export default ChartSection;
