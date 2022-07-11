import React from 'react';
import './Logo.css';
import header_logo from '../../assets/header/Header_Logo.svg';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <>
            <Link to="/">
                <div className="col-2  header__logo">
                    <img
                        className="header__logo"
                        src={header_logo}
                        alt="header-logo"
                    ></img>
                </div>
            </Link>
        </>
    );
};

export default Logo;
