import React from 'react';
import './ChartSection.css';

import CalendarIcon from '../../../assets/coindetails/chart-section/calendar-icon.svg';
import CoinReview from './coinreview/CoinReview';
import CoinDescription from './coindescription/CoinDescription';
import Chart from './chart/Chart';

const ChartSection = () => {
    return (
        <div className="chart-section__wrapper">
            {/* can remove the div with fragments */}
            <h3 className="chart-section__heading">Bitcoin to USD Chart</h3>
            <div className="control-tabs__wrapper row justify-content-between align-items-center flex-xl-nowrap mx-0">
                {/* Chart deciding tabs*/}
                <div className="chart-decide-tabs__wrapper col-12 col-sm-7 col-xl-5 px-0 ">
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
                </div>
                {/* Checkbox */}

                <div className="col-12 col-sm-3 col-xl-2 px-0 mt-3 mt-sm-0 d-flex justify-content-start justify-content-sm-end align-items-center">
                    <div className="checkbox__wrapper d-flex justify-content-end align-items-center">
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
                </div>

                {/* Time based tabs */}
                <div className="col-xl-5 w-auto mt-3 mt-xl-0 px-0">
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
                                {/* <img
                                    src={CalendarIcon}
                                    alt="calendar-icon"
                                    className="calender__icon"
                                /> */}
                                <svg
                                    width="16"
                                    height="17"
                                    viewBox="0 0 16 17"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect
                                        x="1"
                                        y="4"
                                        width="14"
                                        height="12"
                                        rx="2"
                                        stroke="#1E202B"
                                        stroke-width="2"
                                    />
                                    <rect
                                        x="4"
                                        width="2"
                                        height="5"
                                        rx="1"
                                        fill="#1E202B"
                                    />
                                    <rect
                                        y="7"
                                        width="16"
                                        height="2"
                                        rx="1"
                                        fill="#1E202B"
                                    />
                                    <rect
                                        x="10"
                                        width="2"
                                        height="5"
                                        rx="1"
                                        fill="#1E202B"
                                    />
                                </svg>
                            </li>

                            {/* Need to remove this li for vertical line with css ::before */}

                            <li className="vertical__line">|</li>
                            <li>LOG</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Chart-outline container */}
            <div className="chart-outline__wrapper ">
                <div
                    className="chart__main--wrapper container-fluid mb-5 w-100 px-0"
                    id="chartwrapper"
                >
                    <Chart />
                </div>

                {/* Coin review section */}

                <div className="coin__review--wrapper mx-2 mx-md-4 p-3 p-md-4">
                    <CoinReview />
                </div>

                {/* Coin description section */}

                <div className="coin__description--wrapper my-3 mx-2 m-md-4">
                    <CoinDescription />
                </div>
            </div>
        </div>
    );
};

export default ChartSection;
