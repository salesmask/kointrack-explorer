import React from 'react';
import './HeaderLogo.css';
import header_logo from '../../assets/header/Header_Logo.svg';
import { Link } from 'react-router-dom';

const HeaderLogo = () => {
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

export default HeaderLogo;
