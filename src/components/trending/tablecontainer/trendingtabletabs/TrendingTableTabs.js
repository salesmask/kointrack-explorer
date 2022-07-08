import React from 'react';
import './TrendingTableTabs.css';
import { Link } from 'react-router-dom';
import ListArrow from '../../../../assets/coindetails/info-sources/list-arrow.svg';

const TrendingTableTabs = () => {
    return (
        <>
            <div className="trendingtabletabs__wrapper d-flex justify-content-between align-items-center">
                <ul className="mb-0 d-flex justify-content-start align-items-center">
                    <li>
                        <a href="">Watchlist</a>
                    </li>
                    <li>
                        <a href="">Spotlight</a>
                    </li>
                    <li>
                        <Link to="/gainers&losers">Gainers & Loser</Link>
                    </li>
                    <li className="active">
                        <Link to="/trending">Trending</Link>
                    </li>
                    <li>
                        <a href="">Most Visited</a>
                    </li>
                    <li>
                        <a href="">Recently Added</a>
                    </li>
                </ul>
                <div className="trendingtime__wrapper d-flex justify-content-center align-items-center text-nowrap">
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
        </>
    );
};

export default TrendingTableTabs;
