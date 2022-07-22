import React from 'react';
import './WatchList.css';
import star from '../../assets/Exchange/Star.svg';

const WatchList = () => {
    return (
        <div className="watchlist__button gap-2">
            <img
                src={star}
                alt=""
            ></img>
            WatchList
        </div>
    );
};

export default WatchList;
