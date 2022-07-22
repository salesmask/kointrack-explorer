import React from 'react';
import './ExchangeTable.css';
import Decrease_Arrow from '../../../../assets/table/Decrease_Arrow.svg';
import Increase_Arrow from '../../../../assets/table/Increase_Arrow.svg';
import Grapgh from '../../../../assets/table/Grapgh.svg';
import WatchlistStar from '../../../../components/WatchList/WatchList';
import binance from '../../../../assets/Exchange/binance.svg';
import bitmex from '../../../../assets/Exchange/bitmex.svg';
import bittrex from '../../../../assets/Exchange/bittrex.svg';
import coinbase from '../../../../assets/Exchange/coinbase.svg';
import ftx from '../../../../assets/Exchange/ftx.svg';
import zoomex from '../../../../assets/Exchange/zoomex.svg';
import zb from '../../../../assets/Exchange/zb.svg';
import green_up from '../../../../assets/Exchange/green_up.svg';
import red_down from '../../../../assets/Exchange/red_down.svg';

import tooltip from '../../../../assets/Exchange/tooltip-icon.svg';

function ExchangeTable() {
    return (
        <>
            <div className="trendingtable__wrapper mt-5">
                {/* table starting */}

                <table className="table__main table table-borderless">
                    <thead className="table__head ">
                        <tr className="table__head--row">
                            <th className="star__head"></th>
                            <th className="me-3">#</th>
                            <th>Name</th>
                            <th>
                                Exchange Score{' '}
                                <img
                                    src={tooltip}
                                    style={{ width: 15, height: 15 }}
                                    alt=""
                                />
                            </th>
                            <th>Volume 24h</th>
                            <th>Avg. Liquidity</th>
                            <th>
                                Weekly Visits{' '}
                                <img
                                    src={tooltip}
                                    style={{ width: 15, height: 15 }}
                                    alt=""
                                />
                            </th>
                            <th># Markets</th>
                            <th># Coins</th>
                            <th>Fiat Supported</th>
                            <th className="d-none d-xl-table-cell">
                                Volume Graph (7d)
                            </th>
                        </tr>
                    </thead>

                    <tbody className="table__body--bg">
                        {/* Row One */}

                        <tr className="table__body--row align-middle">
                            <td>
                                <WatchlistStar />
                            </td>

                            <td>
                                <div className="serial_number">
                                    <span>01</span>
                                </div>
                            </td>

                            <td>
                                <div className="namecell__wrapper d-flex justify-content-start align-items-center pe-5 pe-md-0">
                                    <img
                                        className="coin__image me-2"
                                        src={binance}
                                        alt="img"
                                    ></img>
                                    <div className="coin__name me-2">
                                        Binance
                                    </div>
                                    {/* <div className="coin__symbol me-2 d-none d-lg-block">
                                        CAKE
                                    </div> */}
                                </div>
                            </td>

                            <td>
                                <div className="d-flex align-items-center exchange__pill--green">
                                    <div className="">9.9</div>
                                </div>
                            </td>

                            <td>
                                <div className="one-day__pricechange  justify-content-start align-items-center pe-3 pe-md-0">
                                    <div className="">$23,289,267,614</div>
                                    <div className="d-flex align-items-center">
                                        <img
                                            className="change__arrow--image me-2"
                                            src={Decrease_Arrow}
                                            alt="icon"
                                        ></img>
                                        <div className="value__down">
                                            11.87%
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className="seven-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                    <div className="">882</div>
                                </div>
                            </td>

                            <td>
                                <div className="thirty-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                    <div className="">20,960,370</div>
                                </div>
                            </td>

                            <td className="market__cap">
                                <div>1683</div>
                            </td>

                            <td>
                                <div className="day-volume">
                                    <div className="in-currency">394</div>
                                </div>
                            </td>
                            <td>
                                <div className="day-volume">
                                    <div className="in-currency">
                                        AED, ARS, AUD
                                    </div>
                                    <div className="muted__text">
                                        and +43 more
                                        <span>
                                            {' '}
                                            <img
                                                src={tooltip}
                                                style={{
                                                    width: 15,
                                                    height: 15,
                                                }}
                                                alt=""
                                            />
                                        </span>
                                    </div>
                                </div>
                            </td>

                            <td className="d-none d-xl-table-cell">
                                <div>
                                    <img
                                        className="graph__image"
                                        src={Grapgh}
                                        alt="graph"
                                    ></img>
                                </div>
                            </td>
                        </tr>

                        {/* Row two */}

                        <tr className="table__body--row align-middle">
                            <td>
                                <WatchlistStar />
                            </td>

                            <td>
                                <div className="serial_number">
                                    <span>02</span>
                                </div>
                            </td>

                            <td>
                                <div className="namecell__wrapper d-flex justify-content-start align-items-center pe-5 pe-md-0">
                                    <img
                                        className="coin__image me-2"
                                        src={bitmex}
                                        alt="img"
                                    ></img>
                                    <div className="coin__name me-2">
                                        Binance
                                    </div>
                                    {/* <div className="coin__symbol me-2 d-none d-lg-block">
                                        CAKE
                                    </div> */}
                                </div>
                            </td>

                            <td>
                                <div className="d-flex align-items-center exchange__pill--green">
                                    <div className="">9.9</div>
                                </div>
                            </td>

                            <td>
                                <div className="one-day__pricechange  justify-content-start align-items-center pe-3 pe-md-0">
                                    <div className="">$23,289,267,614</div>
                                    <div className="d-flex align-items-center">
                                        <img
                                            className="change__arrow--image me-2"
                                            src={Decrease_Arrow}
                                            alt="icon"
                                        ></img>
                                        <div className="value__down">
                                            11.87%
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className="seven-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                    <div className="">882</div>
                                </div>
                            </td>

                            <td>
                                <div className="thirty-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                    <div className="">20,960,370</div>
                                </div>
                            </td>

                            <td className="market__cap">
                                <div>1683</div>
                            </td>

                            <td>
                                <div className="day-volume">
                                    <div className="in-currency">394</div>
                                </div>
                            </td>
                            <td>
                                <div className="day-volume">
                                    <div className="in-currency">
                                        AED, ARS, AUD
                                    </div>
                                    <div className="muted__text">
                                        and +43 more
                                        <span>
                                            {' '}
                                            <img
                                                src={tooltip}
                                                style={{
                                                    width: 15,
                                                    height: 15,
                                                }}
                                                alt=""
                                            />
                                        </span>
                                    </div>
                                </div>
                            </td>

                            <td className="d-none d-xl-table-cell">
                                <div>
                                    <img
                                        className="graph__image"
                                        src={Grapgh}
                                        alt="graph"
                                    ></img>
                                </div>
                            </td>
                        </tr>
                        {/* Row three */}

                        <tr className="table__body--row align-middle">
                            <td>
                                <WatchlistStar />
                            </td>

                            <td>
                                <div className="serial_number">
                                    <span>03</span>
                                </div>
                            </td>

                            <td>
                                <div className="namecell__wrapper d-flex justify-content-start align-items-center pe-5 pe-md-0">
                                    <img
                                        className="coin__image me-2"
                                        src={bittrex}
                                        alt="img"
                                    ></img>
                                    <div className="coin__name me-2">
                                        Binance
                                    </div>
                                    {/* <div className="coin__symbol me-2 d-none d-lg-block">
                                        CAKE
                                    </div> */}
                                </div>
                            </td>

                            <td>
                                <div className="d-flex align-items-center exchange__pill--green">
                                    <div className="">9.9</div>
                                </div>
                            </td>

                            <td>
                                <div className="one-day__pricechange  justify-content-start align-items-center pe-3 pe-md-0">
                                    <div className="">$23,289,267,614</div>
                                    <div className="d-flex align-items-center">
                                        <img
                                            className="change__arrow--image me-2"
                                            src={Decrease_Arrow}
                                            alt="icon"
                                        ></img>
                                        <div className="value__down">
                                            11.87%
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className="seven-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                    <div className="">882</div>
                                </div>
                            </td>

                            <td>
                                <div className="thirty-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                    <div className="">20,960,370</div>
                                </div>
                            </td>

                            <td className="market__cap">
                                <div>1683</div>
                            </td>

                            <td>
                                <div className="day-volume">
                                    <div className="in-currency">394</div>
                                </div>
                            </td>
                            <td>
                                <div className="day-volume">
                                    <div className="in-currency">
                                        AED, ARS, AUD
                                    </div>
                                    <div className="muted__text">
                                        and +43 more
                                        <span>
                                            {' '}
                                            <img
                                                src={tooltip}
                                                style={{
                                                    width: 15,
                                                    height: 15,
                                                }}
                                                alt=""
                                            />
                                        </span>
                                    </div>
                                </div>
                            </td>

                            <td className="d-none d-xl-table-cell">
                                <div>
                                    <img
                                        className="graph__image"
                                        src={Grapgh}
                                        alt="graph"
                                    ></img>
                                </div>
                            </td>
                        </tr>

                        {/* Row four */}

                        <tr className="table__body--row align-middle">
                            <td>
                                <WatchlistStar />
                            </td>

                            <td>
                                <div className="serial_number">
                                    <span>04</span>
                                </div>
                            </td>

                            <td>
                                <div className="namecell__wrapper d-flex justify-content-start align-items-center pe-5 pe-md-0">
                                    <img
                                        className="coin__image me-2"
                                        src={coinbase}
                                        alt="img"
                                    ></img>
                                    <div className="coin__name me-2">
                                        Binance
                                    </div>
                                    {/* <div className="coin__symbol me-2 d-none d-lg-block">
                                        CAKE
                                    </div> */}
                                </div>
                            </td>

                            <td>
                                <div className="d-flex align-items-center exchange__pill--yellow">
                                    <div className="">9.9</div>
                                </div>
                            </td>

                            <td>
                                <div className="one-day__pricechange  justify-content-start align-items-center pe-3 pe-md-0">
                                    <div className="">$23,289,267,614</div>
                                    <div className="d-flex align-items-center">
                                        <img
                                            className="change__arrow--image me-2"
                                            src={Increase_Arrow}
                                            alt="icon"
                                        ></img>
                                        <div className="value__up">11.87%</div>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className="seven-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                    <div className="">882</div>
                                </div>
                            </td>

                            <td>
                                <div className="thirty-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                    <div className="">20,960,370</div>
                                </div>
                            </td>

                            <td className="market__cap">
                                <div>1683</div>
                            </td>

                            <td>
                                <div className="day-volume">
                                    <div className="in-currency">394</div>
                                </div>
                            </td>
                            <td>
                                <div className="day-volume">
                                    <div className="in-currency">
                                        AED, ARS, AUD
                                    </div>
                                    <div className="muted__text">
                                        and +43 more
                                        <span>
                                            {' '}
                                            <img
                                                src={tooltip}
                                                style={{
                                                    width: 15,
                                                    height: 15,
                                                }}
                                                alt=""
                                            />
                                        </span>
                                    </div>
                                </div>
                            </td>

                            <td className="d-none d-xl-table-cell">
                                <div>
                                    <img
                                        className="graph__image"
                                        src={Grapgh}
                                        alt="graph"
                                    ></img>
                                </div>
                            </td>
                        </tr>

                        {/* Row five */}

                        <tr className="table__body--row align-middle">
                            <td>
                                <WatchlistStar />
                            </td>

                            <td>
                                <div className="serial_number">
                                    <span>05</span>
                                </div>
                            </td>

                            <td>
                                <div className="namecell__wrapper d-flex justify-content-start align-items-center pe-5 pe-md-0">
                                    <img
                                        className="coin__image me-2"
                                        src={ftx}
                                        alt="img"
                                    ></img>
                                    <div className="coin__name me-2">
                                        Binance
                                    </div>
                                    {/* <div className="coin__symbol me-2 d-none d-lg-block">
                                        CAKE
                                    </div> */}
                                </div>
                            </td>

                            <td>
                                <div className="d-flex align-items-center exchange__pill--yellow">
                                    <div className="">9.9</div>
                                </div>
                            </td>

                            <td>
                                <div className="one-day__pricechange  justify-content-start align-items-center pe-3 pe-md-0">
                                    <div className="">$23,289,267,614</div>
                                    <div className="d-flex align-items-center">
                                        <img
                                            className="change__arrow--image me-2"
                                            src={Increase_Arrow}
                                            alt="icon"
                                        ></img>
                                        <div className="value__up">11.87%</div>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className="seven-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                    <div className="">882</div>
                                </div>
                            </td>

                            <td>
                                <div className="thirty-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                    <div className="">20,960,370</div>
                                </div>
                            </td>

                            <td className="market__cap">
                                <div>1683</div>
                            </td>

                            <td>
                                <div className="day-volume">
                                    <div className="in-currency">394</div>
                                </div>
                            </td>
                            <td>
                                <div className="day-volume">
                                    <div className="in-currency">
                                        AED, ARS, AUD
                                    </div>
                                    <div className="muted__text">
                                        and +43 more
                                        <span>
                                            {' '}
                                            <img
                                                src={tooltip}
                                                style={{
                                                    width: 15,
                                                    height: 15,
                                                }}
                                                alt=""
                                            />
                                        </span>
                                    </div>
                                </div>
                            </td>

                            <td className="d-none d-xl-table-cell">
                                <div>
                                    <img
                                        className="graph__image"
                                        src={Grapgh}
                                        alt="graph"
                                    ></img>
                                </div>
                            </td>
                        </tr>

                        {/* Row six */}

                        <tr className="table__body--row align-middle">
                            <td>
                                <WatchlistStar />
                            </td>

                            <td>
                                <div className="serial_number">
                                    <span>06</span>
                                </div>
                            </td>

                            <td>
                                <div className="namecell__wrapper d-flex justify-content-start align-items-center pe-5 pe-md-0">
                                    <img
                                        className="coin__image me-2"
                                        src={zoomex}
                                        alt="img"
                                    ></img>
                                    <div className="coin__name me-2">
                                        Binance
                                    </div>
                                    {/* <div className="coin__symbol me-2 d-none d-lg-block">
                                        CAKE
                                    </div> */}
                                </div>
                            </td>

                            <td>
                                <div className="d-flex align-items-center exchange__pill--yellow">
                                    <div className="">9.9</div>
                                </div>
                            </td>

                            <td>
                                <div className="one-day__pricechange  justify-content-start align-items-center pe-3 pe-md-0">
                                    <div className="">$23,289,267,614</div>
                                    <div className="d-flex align-items-center">
                                        <img
                                            className="change__arrow--image me-2"
                                            src={Increase_Arrow}
                                            alt="icon"
                                        ></img>
                                        <div className="value__up">11.87%</div>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className="seven-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                    <div className="">882</div>
                                </div>
                            </td>

                            <td>
                                <div className="thirty-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                    <div className="">20,960,370</div>
                                </div>
                            </td>

                            <td className="market__cap">
                                <div>1683</div>
                            </td>

                            <td>
                                <div className="day-volume">
                                    <div className="in-currency">394</div>
                                </div>
                            </td>
                            <td>
                                <div className="day-volume">
                                    <div className="in-currency">
                                        AED, ARS, AUD
                                    </div>
                                    <div className="muted__text">
                                        and +43 more
                                        <span>
                                            {' '}
                                            <img
                                                src={tooltip}
                                                style={{
                                                    width: 15,
                                                    height: 15,
                                                }}
                                                alt=""
                                            />
                                        </span>
                                    </div>
                                </div>
                            </td>

                            <td className="d-none d-xl-table-cell">
                                <div>
                                    <img
                                        className="graph__image"
                                        src={Grapgh}
                                        alt="graph"
                                    ></img>
                                </div>
                            </td>
                        </tr>

                        {/* Row seven */}

                        <tr className="table__body--row align-middle">
                            <td>
                                <WatchlistStar />
                            </td>

                            <td>
                                <div className="serial_number">
                                    <span>07</span>
                                </div>
                            </td>

                            <td>
                                <div className="namecell__wrapper d-flex justify-content-start align-items-center pe-5 pe-md-0">
                                    <img
                                        className="coin__image me-2"
                                        src={zb}
                                        alt="img"
                                    ></img>
                                    <div className="coin__name me-2">
                                        Binance
                                    </div>
                                    {/* <div className="coin__symbol me-2 d-none d-lg-block">
                                        CAKE
                                    </div> */}
                                </div>
                            </td>

                            <td>
                                <div className="d-flex align-items-center exchange__pill--red">
                                    <div className="">9.9</div>
                                </div>
                            </td>

                            <td>
                                <div className="one-day__pricechange  justify-content-start align-items-center pe-3 pe-md-0">
                                    <div className="">-</div>
                                    <div className="d-flex align-items-center">
                                        <img
                                            className="change__arrow--image me-2"
                                            src={Decrease_Arrow}
                                            alt="icon"
                                        ></img>
                                        <div className="value__down">
                                            13.87%
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className="seven-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                    <div className="dotted_empty">--</div>
                                </div>
                            </td>

                            <td>
                                <div className="thirty-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                    <div className="">20,960,370</div>
                                </div>
                            </td>

                            <td className="market__cap">
                                <div>1683</div>
                            </td>

                            <td>
                                <div className="day-volume">
                                    <div className="in-currency">394</div>
                                </div>
                            </td>
                            <td>
                                <div className="day-volume">
                                    <div className="dotted_empty">--</div>
                                    {/* <div className="in-currency">
                                    AED, ARS, AUD
                                    </div>
                                    <div className="muted__text">and +43 more
                                    <span>{" "}<img src={tooltip} style={{width:15 , height: 15}}alt=""/></span>
                                    </div> */}
                                </div>
                            </td>

                            <td className="d-none d-xl-table-cell">
                                <div>
                                    <img
                                        className="graph__image"
                                        src={Grapgh}
                                        alt="graph"
                                    ></img>
                                </div>
                            </td>
                        </tr>

                        {/* Row eight */}

                        <tr className="table__body--row align-middle">
                            <td>
                                <WatchlistStar />
                            </td>

                            <td>
                                <div className="serial_number">
                                    <span>08</span>
                                </div>
                            </td>

                            <td>
                                <div className="namecell__wrapper d-flex justify-content-start align-items-center pe-5 pe-md-0">
                                    <img
                                        className="coin__image me-2"
                                        src={coinbase}
                                        alt="img"
                                    ></img>
                                    <div className="coin__name me-2">
                                        Binance
                                    </div>
                                    {/* <div className="coin__symbol me-2 d-none d-lg-block">
                                        CAKE
                                    </div> */}
                                </div>
                            </td>

                            <td>
                                <div className="d-flex align-items-center exchange__pill--green">
                                    <div className="">9.9</div>
                                </div>
                            </td>

                            <td>
                                <div className="one-day__pricechange  justify-content-start align-items-center pe-3 pe-md-0">
                                    <div className="">$23,289,267,614</div>
                                    <div className="d-flex align-items-center">
                                        <img
                                            className="change__arrow--image me-2"
                                            src={Decrease_Arrow}
                                            alt="icon"
                                        ></img>
                                        <div className="value__down">
                                            11.87%
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className="seven-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                    <div className="">882</div>
                                </div>
                            </td>

                            <td>
                                <div className="thirty-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                    <div className="">20,960,370</div>
                                </div>
                            </td>

                            <td className="market__cap">
                                <div>1683</div>
                            </td>

                            <td>
                                <div className="day-volume">
                                    <div className="in-currency">394</div>
                                </div>
                            </td>
                            <td>
                                <div className="day-volume">
                                    <div className="in-currency">
                                        AED, ARS, AUD
                                    </div>
                                    <div className="muted__text">
                                        and +43 more
                                        <span>
                                            {' '}
                                            <img
                                                src={tooltip}
                                                style={{
                                                    width: 15,
                                                    height: 15,
                                                }}
                                                alt=""
                                            />
                                        </span>
                                    </div>
                                </div>
                            </td>

                            <td className="d-none d-xl-table-cell">
                                <div>
                                    <img
                                        className="graph__image"
                                        src={Grapgh}
                                        alt="graph"
                                    ></img>
                                </div>
                            </td>
                        </tr>

                        {/* Row nine */}

                        <tr className="table__body--row align-middle">
                            <td>
                                <WatchlistStar />
                            </td>

                            <td>
                                <div className="serial_number">
                                    <span>09</span>
                                </div>
                            </td>

                            <td>
                                <div className="namecell__wrapper d-flex justify-content-start align-items-center pe-5 pe-md-0">
                                    <img
                                        className="coin__image me-2"
                                        src={bitmex}
                                        alt="img"
                                    ></img>
                                    <div className="coin__name me-2">
                                        Binance
                                    </div>
                                    {/* <div className="coin__symbol me-2 d-none d-lg-block">
                                        CAKE
                                    </div> */}
                                </div>
                            </td>

                            <td>
                                <div className="d-flex align-items-center exchange__pill--green">
                                    <div className="">9.9</div>
                                </div>
                            </td>

                            <td>
                                <div className="one-day__pricechange  justify-content-start align-items-center pe-3 pe-md-0">
                                    <div className="">$23,289,267,614</div>
                                    <div className="d-flex align-items-center">
                                        <img
                                            className="change__arrow--image me-2"
                                            src={Decrease_Arrow}
                                            alt="icon"
                                        ></img>
                                        <div className="value__down">
                                            11.87%
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className="seven-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                    <div className="">882</div>
                                </div>
                            </td>

                            <td>
                                <div className="thirty-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                    <div className="">20,960,370</div>
                                </div>
                            </td>

                            <td className="market__cap">
                                <div>1683</div>
                            </td>

                            <td>
                                <div className="day-volume">
                                    <div className="in-currency">394</div>
                                </div>
                            </td>
                            <td>
                                <div className="day-volume">
                                    <div className="in-currency">
                                        AED, ARS, AUD
                                    </div>
                                    <div className="muted__text">
                                        and +43 more
                                        <span>
                                            {' '}
                                            <img
                                                src={tooltip}
                                                style={{
                                                    width: 15,
                                                    height: 15,
                                                }}
                                                alt=""
                                            />
                                        </span>
                                    </div>
                                </div>
                            </td>

                            <td className="d-none d-xl-table-cell">
                                <div>
                                    <img
                                        className="graph__image"
                                        src={Grapgh}
                                        alt="graph"
                                    ></img>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

                {/* **************** */}
            </div>
        </>
    );
}

export default ExchangeTable;
