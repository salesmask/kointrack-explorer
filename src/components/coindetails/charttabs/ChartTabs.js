import React from 'react';
import './ChartTabs.css';

const ChartTabs = () => {
    return (
        <div className="charttabs__wrapper">
            <ul className="charttabs__inner--wrapper d-flex justify-content-start align-items-center">
                <li className="active">
                    <a href="">Overview</a>
                </li>
                <li>
                    <a href="">Market</a>
                </li>
                <li>
                    <a href="">Historical Data</a>
                </li>
                <li>
                    <a href="">Holders</a>
                </li>
                <li>
                    <a href="">Project Info</a>
                </li>
                <li>
                    <a href="">Wallets</a>
                </li>
                <li>
                    <a href="">News</a>
                </li>
                <li>
                    <a href="">Socials</a>
                </li>
                <li>
                    <a href="">Ratings</a>
                </li>
                <li>
                    <a href="">Analysis</a>
                </li>
                <li>
                    <a href="">Price Estimates</a>
                </li>
            </ul>
        </div>
    );
};

export default ChartTabs;
