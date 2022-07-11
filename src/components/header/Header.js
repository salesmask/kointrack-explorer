import React, { useState, useRef, useEffect } from 'react';
import './Header.css';
import header_logo from '../../assets/header/Header_Logo.svg';
import header_search_icon from '../../assets/header/Header_Search_Icon.svg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';
import 'bootstrap/dist/js/bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../logo/Logo';
import SignupForm from '../coindetails/Signupform/SignupForm';
import { Link } from 'react-router-dom';
// import LoginForm from '../coindetails/loginform/LoginForm';
// import SignupForm from './../signupform/SignupForm';
import LoginForm from '../coindetails/loginform/LoginForm';

const Header = () => {
    const [slider, setSlider] = useState(false);
    const [signUp, setSignUp] = useState(false);
    const [logIn, setLogIn] = useState(false);

    // const[openSignup, setopenSignup] = useState(false);

    return (
        <nav className="header__wrapper container-fluid">
            <div className="row ">
                <div className="col-11 mx-auto d-flex py-4 align-items-center">
                    {/* header logo */}

                    <Logo />

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
                                            class="nav-link dropdown-toggle"
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
                                                    class="dropdown-item"
                                                    href="#"
                                                >
                                                    Action
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    class="dropdown-item"
                                                    href="#"
                                                >
                                                    Another action
                                                </a>
                                            </li>

                                            <li>
                                                <a
                                                    class="dropdown-item"
                                                    href="#"
                                                >
                                                    Something else here
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li class="nav-item">
                                        <a
                                            class="nav-link"
                                            href="#"
                                        >
                                            Features
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a
                                            class="nav-link"
                                            href="#"
                                        >
                                            Pricing
                                        </a>
                                    </li>

                                    <li class="nav-item dropdown">
                                        <a
                                            class="nav-link dropdown-toggle"
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
                                                    class="dropdown-item"
                                                    href="#"
                                                >
                                                    Action
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    class="dropdown-item"
                                                    href="#"
                                                >
                                                    Another action
                                                </a>
                                            </li>

                                            <li>
                                                <a
                                                    class="dropdown-item"
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
                                        onClick={() => setSignUp(!signUp)}
                                    >
                                        Sign Up
                                        {signUp ? <SignupForm /> : null}
                                    </button>

                                    <button
                                        className="log__in"
                                        onClick={() => setLogIn(!logIn)}
                                    >
                                        Log In
                                        {logIn ? <LoginForm /> : null}
                                    </button>
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
        </nav>
    );
};

export default Header;
