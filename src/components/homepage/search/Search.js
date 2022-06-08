import React from 'react';
import './Search.css';
import SearchIcon from '../../../assests/homepage/search/Search_Icon.svg';
import DownIcon from '../../../assests/homepage/search/Decrease_Arrow.svg';

const Search = () => {
    return (
        <div className="home__search">
            <h1 className="home__search--heading">
                Today's Cryptocurrency Prices by Market Cap
            </h1>
            <span className="home__search--description">
                The global crypto market cap is $1.28T, a
                <span className="change__wrapper">
                    <img
                        src={DownIcon}
                        alt="icon"
                        className="arrow_icon"
                    />
                    <span className="price__change">123</span>
                </span>
                decrease over the last day.
            </span>
            <div className="search__main--wrapper"></div>
            <div className="search__wrapper">
                <input
                    type="text"
                    placeholder="Search Coin / Token or Exchange"
                    className="search__input"
                />
                <button className="search__button display__center">
                    <img
                        src={SearchIcon}
                        alt="icon"
                    />
                </button>
            </div>
        </div>
    );
};

export default Search;
