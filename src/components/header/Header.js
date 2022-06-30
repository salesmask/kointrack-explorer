import React, { useState, useRef, useEffect } from 'react';
import './Header.css';
import header_logo from '../../assets/header/Header_Logo.svg';
import header_search_icon from '../../assets/header/Header_Search_Icon.svg';
import {
    NavbarBrand,
    Navbar,
    Nav,
    NavDropdown,
    Container,
    Button,
    Form,
} from 'react-bootstrap';

const Header = () => {
    return (
        <div className="header__wrapper container-fluid">
            <Navbar
                fluid
                className="row "
                expand="lg"
            >
                <div className="col-11 mx-auto d-flex justify-content-between py-4">
                    <Navbar.Brand
                        className=""
                        href="#home"
                    >
                        <img
                            src={header_logo}
                            alt=""
                        ></img>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav " />
                    <Navbar.Collapse id="basic-navbar-nav ">
                        <Nav className="gap-lg-4 ms-lg-5 ps-lg-5">
                            <NavDropdown
                                className="nav__bar"
                                title="Coins"
                                id="basic-nav-dropdown"
                            >
                                <NavDropdown.Item href="#action/3.1">
                                    Exchanges
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Portfolio
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    Something
                                </NavDropdown.Item>

                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link href="#home">Exchanges</Nav.Link>
                            <Nav.Link href="#link">Portfolio</Nav.Link>

                            <NavDropdown
                                title="Products"
                                id="basic-nav-dropdown"
                            >
                                <NavDropdown.Item href="#action/3.1">
                                    Products
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    Something
                                </NavDropdown.Item>

                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                        {/* search box */}

                        <div className="d-flex ms-auto gap-4">
                            <div className="search-box d-none d-md-block">
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

                            <button className="sign__up">Sign Up</button>
                            <button className="log__in">Log In</button>
                        </div>
                    </Navbar.Collapse>
                </div>
            </Navbar>
            <div className="box__shadow"></div>
        </div>
    );
};

export default Header;
