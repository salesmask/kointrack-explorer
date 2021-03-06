import React, { useState, useRef, useEffect } from 'react';
import './Header.css';
import header_logo from '../../assets/header/Header_Logo.svg';
import header_search_icon from '../../assets/header/Header_Search_Icon.svg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';
import 'bootstrap/dist/js/bootstrap';
// import Logo from '../logo/Logo';
import { Link } from 'react-router-dom';
import LoginForm from '../loginform/LoginForm';
import SignupForm from '../signupform/SignupForm';
import HeaderLogo from '../logo/HeaderLogo';

const Header = () => {
    const [slider, setSlider] = useState(false);
    const [logIn, setLogIn] = useState(false);
    const [signUp, setSignUp] = useState(false);

    return (
        <nav className="header__wrapper container-fluid">
            <div className="row mx-0">
                <div className="col-11 px-0  mx-auto d-flex py-4 align-items-center">
                    <div className="container-xxl px-0 d-flex align-items-center">
                        {/* <div className="container-xxl col-xxl-11 px-0 d-flex"> */}
                        {/* header logo */}

                        <Link to="/">
                            <HeaderLogo />
                        </Link>

                        {/* header links */}

                        <div className="col-3 col-md-10">
                            <div
                                className={
                                    slider
                                        ? 'header__link--mobile'
                                        : 'header__link'
                                }
                            >
                                <div className="mobile__screen--tab col-12 d-flex flex-column flex-md-row">
                                    <div className="header__tabs  col-md-6  d-flex text-light align-items-start align-items-md-center justify-content-center gap-2 flex-column flex-md-row w-auto">
                                        <li class="nav-item  dropdown drop__borders header__dropdown--item">
                                            <a
                                                class="nav-link dropdown-toggle header__tabs--text"
                                                href="#"
                                                id="navbarDropdown"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Coins
                                            </a>
                                            <ul
                                                class="dropdown-menu header__dropdown--list"
                                                aria-labelledby="navbarDropdown"
                                            >
                                                <li>
                                                    <Link
                                                        to="/spotlight"
                                                        class="dropdown-item fw-bolder"
                                                        href="#"
                                                    >
                                                        Spotlight
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="/gainers&losers"
                                                        class="dropdown-item fw-bolder"
                                                        href="#"
                                                    >
                                                        Gainers & Loser
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link
                                                        to="/trending"
                                                        class="dropdown-item fw-bolder"
                                                        href="#"
                                                    >
                                                        Trending
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link
                                                        to="/most-visited"
                                                        class="dropdown-item fw-bolder"
                                                        href="#"
                                                    >
                                                        Most Visited
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link
                                                        to="/recently-added"
                                                        class="dropdown-item fw-bolder"
                                                        href="#"
                                                    >
                                                        Recently Added
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>

                                        <li class="nav-item drop__borders">
                                            <a
                                                class="nav-link header__tabs--text"
                                                href="#"
                                            >
                                                <Link
                                                    className="header__tabs--text"
                                                    to="/exchange"
                                                >
                                                    Exchange
                                                </Link>
                                            </a>
                                        </li>
                                        <li class="nav-item drop__borders">
                                            <a
                                                class="nav-link header__tabs--text"
                                                href="#"
                                            >
                                                Pricing
                                            </a>
                                        </li>

                                        <li class="nav-item dropdown drop__borders">
                                            <a
                                                class="nav-link dropdown-toggle  header__tabs--text"
                                                href="#"
                                                id="navbarDropdown"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Products
                                            </a>
                                            <ul
                                                class="dropdown-menu"
                                                aria-labelledby="navbarDropdown"
                                            >
                                                <li>
                                                    <a
                                                        class="dropdown-item fw-bolder"
                                                        href="#"
                                                    >
                                                        Action
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        class="dropdown-item fw-bolder"
                                                        href="#"
                                                    >
                                                        Another action
                                                    </a>
                                                </li>

                                                <li>
                                                    <a
                                                        class="dropdown-item fw-bolder"
                                                        href="#"
                                                    >
                                                        Something else here
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </div>

                                    {/* header login section */}

                                    <div className="login__content col-12 col-md-6   d-flex text-light align-lg-items-center ms-auto gap-3 flex-column flex-md-row ">
                                        <div className="ms-auto gap-4 d-none d-lg-block">
                                            <div className="search-box ">
                                                <input
                                                    className="search-text"
                                                    type="text"
                                                    placeholder="Search Anything"
                                                ></input>
                                                <a
                                                    href="#"
                                                    className="search-btn"
                                                >
                                                    <img
                                                        src={header_search_icon}
                                                        alt=""
                                                    ></img>
                                                </a>
                                            </div>
                                        </div>

                                        <button
                                            className="sign__up"
                                            onClick={() => setSignUp(true)}
                                        >
                                            Sign Up
                                        </button>

                                        {signUp && (
                                            <SignupForm close={setSignUp} />
                                        )}

                                        <button
                                            className="log__in"
                                            onClick={() => setLogIn(true)}
                                        >
                                            Log In
                                        </button>

                                        {logIn && (
                                            <LoginForm close={setLogIn} />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="humburger__menu ms-auto ">
                            <a
                                href="#"
                                onClick={() => setSlider(!slider)}
                            >
                                {slider ? <FaTimes /> : <GiHamburgerMenu />}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </nav>
    );
};

export default Header;
