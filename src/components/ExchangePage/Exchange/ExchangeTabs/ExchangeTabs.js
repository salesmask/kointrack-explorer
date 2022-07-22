import React from 'react';
import { Link } from 'react-router-dom';
import star from '../../../../assets/Exchange/Star.svg';
import WatchList from '../../../WatchList/WatchList';

import WatchlistStar from '../../../watchliststar/WatchlistStar';

function ExchangeTabs() {
    return (
        <>
            <div className="trendingtabletabs__wrapper d-flex justify-content-between align-items-center ">
                <ul className="mb-0 d-flex justify-content-start align-items-center gap-4">
                    <li className="d-flex align-items-center">
                        <WatchList />
                    </li>
                    <li className="active">
                        <Link to="/spot">Spot</Link>
                    </li>
                    <li>
                        <Link to="/derivatives">Derivatives</Link>
                    </li>
                    <li>
                        <Link to="/dex">Dex</Link>
                    </li>
                    <li>
                        <Link to="/leading">Leading</Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default ExchangeTabs;
