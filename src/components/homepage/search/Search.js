import React from 'react';
import './Search.css';
import SearchIcon from '../../../assets/homepage/search/Search_Icon.svg';
import DownIcon from '../../../assets/homepage/search/Decrease_Arrow.svg';

const Search = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="container-xxl px-0">
                            <div className="home__search text-center p-4 mb-5 mt-5">
                                <h1 className="home__search--heading mb-4">
                                    Today's Cryptocurrency Prices by Market Cap
                                </h1>
                                <span className="home__search--description">
                                    The global crypto market cap is $1.28T, a
                                    <span className="change__wrapper mx-2">
                                        <img
                                            src={DownIcon}
                                            alt="icon"
                                            className="arrow_icon"
                                        />
                                        <span className="price__change">
                                            3.52%
                                        </span>
                                    </span>
                                    decrease over the last day.
                                </span>

                                <div className="search__main--wrapper mt-5 container-fluid">
                                    <div className="row mx-auto">
                                        <div className="col-11 col-sm-9 col-md-8 col-xl-7 mx-auto">
                                            <div className="search__wrapper w-100 rounded-pill mx-auto">
                                                <input
                                                    type="text"
                                                    placeholder="Search Coin / Token or Exchange"
                                                    className="search__input w-100 rounded-pill"
                                                />
                                                <button
                                                    className="search__button d-flex justify-content-center align-items-center"
                                                    role="button"
                                                >
                                                    <img
                                                        src={SearchIcon}
                                                        alt="icon"
                                                        className="w-50"
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Search;
