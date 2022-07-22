import React from 'react';
import { Link } from 'react-router-dom';
import ListArrow from '../../../../assets/coindetails/info-sources/list-arrow.svg';

const RecentlyAddedTableTabs = () => {
    return (
        <>
            <div className="trendingtabletabs__wrapper d-flex justify-content-between align-items-center">
                <ul className="mb-0 d-flex justify-content-start align-items-center">
                    <li>
                        <a href="">Watchlist</a>
                    </li>
                    <li>
                        <Link to="/spotlight">Spotlight</Link>
                    </li>
                    <li>
                        <Link to="/gainers&losers">Gainers & Loser</Link>
                    </li>
                    <li>
                        <Link to="/trending">Trending</Link>
                    </li>
                    <li>
                        <Link to="/most-visited">Most Visited</Link>
                    </li>
                    <li className="active">
                        <Link to="/recently-added">Recently Added</Link>
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

export default RecentlyAddedTableTabs;
