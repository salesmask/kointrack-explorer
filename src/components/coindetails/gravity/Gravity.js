import React from 'react';
import './Gravity.css';
import logo_symbol from '../../../assets/coindata/Logo Symbol.svg';
import user_icon from '../../../assets/coindata/User Icon.svg';
import up_arrow from '../../../assets/coindata/Up Down Arrow.svg';
import down_arrow from '../../../assets/coindata/Down Arrow.svg';
import bitcoin_small from '../../../assets/coindata/Bitcoin Small.svg';
import refresh from '../../../assets/coindata/Referesh Icon.svg';
import usa from '../../../assets/coindata/USA-HDR.svg';
import comment from '../../../assets/coindata/Comments.svg';
import like from '../../../assets/coindata/Like.svg';
import next_arrow from '../../../assets/coindata/Next Arrow.svg';
import fire from '../../../assets/coindata/fire.svg';
import shoe_coin from '../../../assets/coindata/shoecoin.svg';
import green__up from '../../../assets/coindata/green__up.svg';
import red__down from '../../../assets/coindata/red__down.svg';
import white__up from '../../../assets/coindata/white__up.svg';
import black__left from '../../../assets/coindata/black__left.svg';

const Gravity = () => {
    return (
        <div>
            <div className="container">
                <div className="d-flex align-items-center">
                    <h4 className="">Gravity</h4>
                    <div
                        type="button"
                        className="gravity__button rounded-pill text-light text-center py-2 ms-4"
                    >
                        BETA
                    </div>
                    <div
                        type="button"
                        className="showmore__button rounded-pill text-center ms-auto py-2 "
                    >
                        Show More
                    </div>
                </div>

                <div className="rounded__border border mt-4">
                    <div className="d-flex align-items-center justify-content-start gravity__rounder px-3 py-3  gravity__contents ">
                        <div className=" rounded-circle">
                            <img
                                src={logo_symbol}
                                alt=""
                            ></img>
                        </div>
                        <div className="">
                            <h3 className="text-light fs-4  ps-3 mb-0">
                                Kointrack
                            </h3>
                            <p className="text-light ps-3 mb-0">
                                240k Followers
                            </p>
                        </div>
                        <div
                            type="button"
                            className="follow__button rounded-pill text-center py-2 ms-auto"
                        >
                            + Follow
                        </div>
                    </div>

                    <div className="px-3">
                        <h2 className="fs-4 py-4">Live Bitcoin Chat</h2>

                        <div className="d-flex align-items-center justify-content-start rounded-2  py-3 mt-3 ">
                            <div className=" rounded-circle">
                                <img
                                    src={user_icon}
                                    alt=""
                                ></img>
                            </div>

                            <h3 className=" fs-4  ps-3 mb-0">Guest</h3>

                            <div className="ms-auto d-flex flex-wrap gap-3">
                                <div
                                    type="button"
                                    className="trend__button d-flex fw-bolder align-items-center text-success rounded-pill text-center py-2 justify-content-center gap-1"
                                >
                                    <img
                                        src={green__up}
                                        className="gravity__arrow "
                                        alt=""
                                    ></img>
                                    Bullish
                                </div>

                                <div
                                    type="button"
                                    className="trend__button  d-flex text-danger fw-bolder align-items-center rounded-pill text-center py-2 justify-content-center gap-1"
                                >
                                    <img
                                        src={red__down}
                                        className="gravity__arrow  "
                                        alt=""
                                    ></img>
                                    Bearish
                                </div>
                            </div>
                        </div>

                        <div className="d-flex mt-2 align-items-center  justify-content-start rounded-pill px-2 py-2 border btc__background">
                            <h3 className="fs-3  text-primary text-center my-0">
                                BTC
                            </h3>
                            <div className="ms-auto me-2">
                                <img
                                    src={bitcoin_small}
                                    className="ms-auto"
                                    alt=""
                                ></img>
                            </div>
                        </div>

                        <div className="py-4 ms-auto">
                            <div
                                type="button"
                                className="Post__button text-light text-center fw-bolder rounded-pill  py-2 px-2 ms-auto"
                            >
                                Post
                            </div>
                        </div>

                        <div className="d-flex flex-wrap py-4 ms-auto ">
                            <div className="switch__box d-flex flex-wrap rounded-pill gap-2 justify-items-start align-items-center">
                                <div
                                    type="button"
                                    className="switch__button rounded-pill py-2 fw-bolder my-0 text-center text-light "
                                >
                                    Top
                                </div>
                                <div
                                    type="button"
                                    className=" rounded-pill px-5 my-0 text-center fw-bolder "
                                >
                                    Latest
                                </div>
                            </div>

                            <div className="d-flex p-2 gap-1 ms-auto">
                                <img
                                    src={refresh}
                                    alt=""
                                    className="refresh__icon "
                                ></img>
                                <h3 className="fs-4 fw-bolder  font-primary">
                                    Refresh
                                </h3>
                            </div>
                        </div>

                        <div className="d-flex align-items-center justify-content-start rounded-2  py-3 mt-3 ">
                            <div className=" rounded-circle">
                                <img
                                    src={usa}
                                    alt=""
                                ></img>
                            </div>

                            <h3 className=" fs-4  ps-3 mb-0">USA_HDR</h3>

                            <div className="ms-auto d-flex flex-wrap gap-3">
                                <div
                                    type="button"
                                    className=" button__chat px-3 d-flex fw-bolder align-items-center  gap-2 text-light rounded-pill text-center py-2 justify-content-center"
                                >
                                    <img
                                        src={white__up}
                                        className="gravity__arrow "
                                        alt=""
                                    ></img>
                                    Bullish
                                </div>
                            </div>
                        </div>
                        <p className="justify-content-start">
                            Well, don't look for anything right now... The whole
                            market is down. The best thing to do is to stay
                            positive and Never sell...just wait.. The whole
                            market
                        </p>

                        <p className="text-primary fs-4 fw-bolder justify-content-start">
                            $MIR $BTC $ETH $CULT $SOL $DOGE $ELON $LUFFY $BNB
                            $MKR...
                        </p>
                        <hr></hr>

                        <div className="d-flex flex-wrap  gap-3 justify-content-start align-items-center">
                            <div className="d-flex gap-2">
                                <img
                                    src={comment}
                                    className="refresh_icon"
                                ></img>
                                <h3 className="fs-3">225</h3>
                            </div>
                            <div className="d-flex gap-2">
                                <img
                                    src={like}
                                    className="refresh_icon"
                                ></img>
                                <h3 className="fs-3">1k</h3>
                            </div>

                            <div
                                type="button"
                                className="readmore__button rounded-pill text-center ms-auto py-2"
                            >
                                Read More
                                <img
                                    src={black__left}
                                    className="gravity__arrow"
                                ></img>
                            </div>
                        </div>
                        <hr></hr>
                    </div>
                </div>

                {/* BTC Price Statics */}

                <div className="justify-content-start align-item-center border rounded__border mt-4">
                    <h3 className="fs-3 fw-bold py-4 rounded__border ps-2 border">
                        BTC Price Statics
                    </h3>

                    <p className="fw-bolder my-3 ms-2">Bitcoin Price Today </p>

                    {/* tiles Section */}

                    <div className="d-flex flex-wrap align-items-center mx-2 bg__tile px-3   py-3 my-3">
                        <p className=" font__style  my-0">Bitcoin Price </p>
                        <p className="ms-auto font__style--right   my-0">
                            $29,625,29
                        </p>
                    </div>

                    <div className="d-flex flex-wrap align-items-center mx-2 bg__tile px-3  my-3 ">
                        <p className=" font__style  my-0">Price Change 24h</p>

                        <div className="ms-auto">
                            <p className="font__style--right   mb-0 ">
                                $29,625,29
                            </p>
                            <div
                                type="button"
                                className="d-flex text-danger font__style--right   align-items-center text-center justify-content-end gap-1"
                            >
                                <img
                                    src={red__down}
                                    className="gravity__arrow"
                                    alt=""
                                ></img>
                                10.82%
                            </div>
                        </div>
                    </div>

                    <div className="d-flex flex-wrap align-items-center mx-2 bg__tile px-3   py-3 my-3">
                        <p className=" font__style  my-0">
                            24h Low
                            <span className="fw-semibold">/</span>
                            <span className="font__style">24h High</span>
                        </p>
                        <p className="ms-auto font__style--right  my-0">
                            $29,625,29
                            <span className="fw-semibold">/</span>
                            <span className="font__style--right  ">
                                $31,848.82
                            </span>
                        </p>
                    </div>

                    <div className="d-flex flex-wrap align-items-center mx-2 bg__tile px-3  my-3 ">
                        <p className=" font__style  my-0">
                            Tranding Volume 24h
                        </p>

                        <div className="ms-auto">
                            <p className="font__style--right   mb-0 ">
                                $41,877,243,038.37
                            </p>
                            <div
                                type="button"
                                className="d-flex text-success font__style--right   align-items-center text-center justify-content-end gap-1"
                            >
                                <img
                                    src={green__up}
                                    className="gravity__arrow"
                                    alt=""
                                ></img>
                                10.82%
                            </div>
                        </div>
                    </div>

                    <div
                        type="button"
                        className=" rounded-pill px-3 py-3 mx-auto my-4 showmore__button"
                    >
                        Show More
                    </div>
                </div>

                {/* Trending Coins And Statics*/}

                <div className="justify-content-start my-4 align-items-center border rounded__border ">
                    <h3 className="fs-3 fw-bold py-3 rounded__border ps-2 border">
                        <img
                            src={fire}
                            className="mb-2 me-2"
                            alt=""
                            style={{ width: '23px', height: '23px' }}
                        ></img>
                        Trending Coins and Tokens
                    </h3>

                    {/* tiles Section */}

                    <div className="d-flex flex-wrap align-items-center mx-2 bg__tile px-3   py-3 my-3">
                        <p className=" font__style  my-0">
                            <img
                                src={shoe_coin}
                                className=" me-2"
                                alt=""
                                style={{ width: '23px', height: '23px' }}
                            ></img>
                            Green Satoshi Token (SQL){' '}
                            <span className="text-muted fw-normal">GST</span>
                        </p>
                        <p className="ms-auto fw-bolder   my-0">#351</p>
                    </div>

                    <div className="d-flex flex-wrap align-items-center mx-2 bg__tile px-3   py-3 my-3">
                        <p className=" font__style  my-0">
                            <img
                                src={shoe_coin}
                                className=" me-2"
                                alt=""
                                style={{ width: '23px', height: '23px' }}
                            ></img>
                            Green Satoshi Token (SQL){' '}
                            <span className="text-muted fw-normal">GST</span>
                        </p>
                        <p className="ms-auto fw-bolder   my-0">#2809</p>
                    </div>

                    <div className="d-flex flex-wrap align-items-center mx-2 bg__tile px-3   py-3 my-3">
                        <p className=" font__style  my-0">
                            <img
                                src={shoe_coin}
                                className=" me-2"
                                alt=""
                                style={{ width: '23px', height: '23px' }}
                            ></img>
                            Green Satoshi Token (SQL){' '}
                            <span className="text-muted fw-normal">GST</span>
                        </p>
                        <p className="ms-auto fw-bolder   my-0">#2809</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gravity;
