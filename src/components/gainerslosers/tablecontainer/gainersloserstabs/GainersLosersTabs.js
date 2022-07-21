import React from 'react';
import './GainersLosersTabs.css';
import { Link } from 'react-router-dom';
import ListArrow from '../../../../assets/coindetails/info-sources/list-arrow.svg';

const GainersLosersTabs = () => {
    return (
        <>
            <div className="gainersloserstabletabs__wrapper d-flex justify-content-between align-items-center">
                <ul className="mb-0 d-flex justify-content-start align-items-center">
                    <li>
                        <a href="">Watchlist</a>
                    </li>
                    <li>
                        <a href="">Spotlight</a>
                    </li>
                    <li className="active">
                        <Link to="/gainers&losers">Gainers & Loser</Link>
                    </li>
                    <li>
                        <Link to="/trending">Trending</Link>
                    </li>
                    <li>
                        <Link to="/mostvisited">Most Visited</Link>
                    </li>
                    <li>
                        <a href="">Recently Added</a>
                    </li>
                </ul>

                <div className="d-flex justify-content-center align-items-center">
                    <div className="coinfilter__wrapper d-flex justify-content-center align-items-center text-nowrap">
                        <span className="pe-2">Coins :</span>
                        <li className="coinfilter__wrapper--button">
                            <span className="pe-2">All</span>
                            <img
                                src={ListArrow}
                                alt="icon"
                            />
                        </li>
                    </div>

                    <div className="gainersloserstime__wrapper d-flex justify-content-center align-items-center text-nowrap">
                        <span className="pe-2">Timeframe :</span>
                        <li className="trendingtime__wrapper--button">
                            <span className="pe-2">24h</span>
                            <img
                                src={ListArrow}
                                alt="icon"
                            />
                        </li>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GainersLosersTabs;
