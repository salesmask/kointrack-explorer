import React from 'react';
import './Search.css';
import Search_Icon from '../../../assests/homepage/search/Search_Icon.svg';

const Search = () => {
    return (
        <div className="home__search">
            <h1 className="home__search--heading">
                Today's Cryptocurrency Prices by Market Cap
            </h1>
            <p className="home__search--description">
                The global crypto market cap is $1.28T, a<span>123</span>
                decrease over the last day.
            </p>
            <div className="search__wrapper">
                <input
                    type="text"
                    placeholder="Search Coin / Token or Exchange"
                    className="search__input"
                />
                <button className="search__button display__center">
                    <img
                        src={Search_Icon}
                        alt="icon"
                    />
                </button>
            </div>
        </div>
    );
};

export default Search;
