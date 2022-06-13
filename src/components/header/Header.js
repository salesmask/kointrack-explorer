import React, { useState, useRef, useEffect } from 'react';

// import './Header.css';
import header_logo from '../../assests/header/Header_Logo.png';
import header_search_icon from '../../assests/header/Header_Search_Icon.png';

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
                <div class="container">
                    <a
                        href="#"
                        class="navbar-brand"
                    >
                        Frontend Bootcamp
                    </a>

                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navmenu"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div
                        class="collapse navbar-collapse"
                        id="navmenu"
                    >
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a
                                    href="#learn"
                                    class="nav-link"
                                >
                                    What You'll Learn
                                </a>
                            </li>
                            <li class="nav-item">
                                <a
                                    href="#questions"
                                    class="nav-link"
                                >
                                    Questions
                                </a>
                            </li>
                            <li class="nav-item">
                                <a
                                    href="#instructors"
                                    class="nav-link"
                                >
                                    Instructors
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
