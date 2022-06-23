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

                <div className="d-flex align-items-center justify-content-start gravity__rounder px-3 py-3 mt-3 gravity__contents">
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
                        <p className="text-light ps-3 mb-0">240k Followers</p>
                    </div>
                    <div
                        type="button"
                        className="follow__button rounded-pill text-center py-2 ms-auto"
                    >
                        + Follow
                    </div>
                </div>

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
                            className="trend__button d-flex fw-bolder align-items-center text-success rounded-pill text-center py-2 justify-content-center"
                        >
                            <img
                                src={up_arrow}
                                className="gravity__arrow "
                                alt=""
                            ></img>
                            Bullish
                        </div>

                        <div
                            type="button"
                            className="trend__button d-flex text-danger fw-bolder align-items-center rounded-pill text-center py-2 justify-content-center"
                        >
                            <img
                                src={down_arrow}
                                className="gravity__arrow "
                                alt=""
                            ></img>
                            Bearish
                        </div>
                    </div>
                </div>

                <div className="d-flex align-items-center  justify-content-start rounded-pill px-2 py-2 border">
                    <h3 className="fs-3  text-primary text-center my-0">BTC</h3>
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
                            className="switch__button rounded-pill py-2 fw-bolder my-0 text-center "
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
                                src={up_arrow}
                                className="gravity__arrow "
                                alt=""
                            ></img>
                            Bullish
                        </div>
                    </div>
                </div>
                <p className="justify-content-start">
                    Well, don't look for anything right now... The whole market
                    is down. The best thing to do is to stay positive and Never
                    sell...just wait.. The whole market
                </p>

                <p className="text-primary fs-4 fw-bolder justify-content-start">
                    $MIR $BTC $ETH $CULT $SOL $DOGE $ELON $LUFFY $BNB $MKR...
                </p>
                <hr></hr>

                <div className="d-flex flex-wrap py-3 gap-3 justify-content-start align-items-center">
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
                        className="readmore__button rounded-pill text-center ms-auto py-2 "
                    >
                        Read More
                        <img
                            src={next_arrow}
                            className="gravity__arrow"
                        ></img>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gravity;
