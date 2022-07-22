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

const Header = () => {
    const [slider, setSlider] = useState(false);
    const [logIn, setLogIn] = useState(false);
    const [signUp, setSignUp] = useState(false);

    return (
        <nav className="header__wrapper container-fluid ">
            <div className="row mx-0">
                <div className="col-11 px-0  mx-auto d-flex py-4 align-items-center">
                    <div className="container-xxl px-0 d-flex">
                        {/* <div className="container-xxl col-xxl-11 px-0 d-flex"> */}
                        {/* header logo */}

                        <Link to="/">
                            <div className="col-2  header__logo">
                                <img
                                    className="header__logo"
                                    src={header_logo}
                                    alt="header-logo"
                                ></img>
                            </div>
                        </Link>

                        {/* header links */}

                        <div className="col-3 col-md-10">
                            <div
                                className={
                                    slider
                                        ? 'header__link--mobile '
                                        : 'header__link'
                                }
                            >
                                <div className="d-flex flex-column flex-md-row">
                                    <div className="header__tabs col-6  d-flex text-light align-items-start align-items-md-center justify-content-center gap-2 flex-column flex-md-row w-auto">
                                        <li class="nav-item dropdown">
                                            <a
                                                class="nav-link dropdown-toggle fw-bolder"
                                                href="#"
                                                id="navbarDropdown"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Coins
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

                                        <li class="nav-item">
                                            <a
                                                class="nav-link fw-bolder"
                                                href="#"
                                            >
                                                Features
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a
                                                class="nav-link fw-bolder"
                                                href="#"
                                            >
                                                Pricing
                                            </a>
                                        </li>

                                        <li class="nav-item dropdown">
                                            <a
                                                class="nav-link dropdown-toggle fw-bolder"
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

                                    <div className="login__content col-6   d-flex text-light align-lg-items-center ms-auto gap-3 flex-column flex-md-row w-auto">
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
