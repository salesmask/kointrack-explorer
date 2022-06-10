import React, { useState, useRef, useEffect } from 'react';
import './Header.css';
import header_logo from '../../assets/header/Header_Logo.png';
import header_search_icon from '../../assets/header/Header_Search_Icon.png';

const Header = () => {
    return (
        <div>
            <div className="header__container">
                <div className="header__box">
                    <div className="header__logo">
                        <img
                            src={header_logo}
                            alt="Kointrack"
                        />
                        <a
                            className="nav-link"
                            href="#"
                        ></a>
                    </div>
                    <div>
                        <select className="select__coin">
                            <option defaultValue="coin">
                                <a
                                    className="nav-link"
                                    href="#"
                                >
                                    Coin
                                </a>
                            </option>
                            <option value="">
                                <a
                                    className="nav-link"
                                    href="#"
                                >
                                    Link
                                </a>
                            </option>
                            <option value="coconut">
                                <a
                                    className="nav-link"
                                    href="#"
                                >
                                    Link
                                </a>
                            </option>
                            <option value="mango">
                                <a
                                    className="nav-link"
                                    href="#"
                                >
                                    Link
                                </a>
                            </option>
                        </select>
                    </div>

                    <div>
                        <a
                            className="nav-link"
                            href="#"
                        >
                            Exchange
                        </a>
                    </div>
                    <div>
                        <a
                            className="nav-link"
                            href="#"
                        >
                            Portfolio
                        </a>
                    </div>
                    <div>
                        <select className="select__product">
                            <option defaultValue="portfolio">
                                <a
                                    className="nav-link"
                                    href="#"
                                >
                                    Products
                                </a>
                            </option>
                            <option value="">
                                <a
                                    className="nav-link"
                                    href="#"
                                >
                                    Link
                                </a>
                            </option>
                            <option value="coconut">
                                <a
                                    className="nav-link"
                                    href="#"
                                >
                                    Link
                                </a>
                            </option>
                            <option value="mango">
                                <a
                                    className="nav-link"
                                    href="#"
                                >
                                    Link
                                </a>
                            </option>
                        </select>
                    </div>
                    <div className="left__headerwrapper">
                        <div>
                            <img
                                src={header_search_icon}
                                alt="header-icon"
                            ></img>
                        </div>

                        <div className="sign__up display__center">
                            <a href="#">Sign Up</a>
                        </div>

                        <div className="log__in display__center">
                            <a href="#">Log In </a>
                        </div>
                    </div>
                </div>
                <hr className="hr"></hr>
            </div>
        </div>
    );
};

export default Header;
