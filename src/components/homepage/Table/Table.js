import React from 'react';
import TableTabs from './TableTabs';
import './Table.css';
import Watchlist_Outline from '../../../assets/table/Watchlist_Outline.svg';
import Bitcoin from '../../../assets/table/Bitcoin.svg';
import Decrease_Arrow from '../../../assets/table/Decrease_Arrow.svg';
import Increase_Arrow from '../../../assets/table/Increase_Arrow.svg';
import Grapgh from '../../../assets/table/Grapgh.svg';
import More_Icon from '../../../assets/table/More_Icon.svg';
import WatchlistStar from '../../watchliststar/WatchlistStar';

export default function Table() {
    return (
        <div>
            <div>
                <TableTabs />
            </div>

            {/* Table main */}

            <div className="container-fluid px-0 my-5">
                <div className="row mx-0 my-4">
                    <div className="col-11 mx-auto px-0">
                        <div className="container-xxl px-0">
                            <div className="table__container--wrapper">
                                <table className="table__main table table-borderless">
                                    <thead className="table__head">
                                        <tr className="table__head--row">
                                            <th className="star__head"></th>
                                            <th className="me-3">#</th>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>24h %</th>
                                            <th>7d %</th>
                                            <th>Market Cap</th>
                                            <th>Volume (24h)</th>
                                            <th className="d-none d-sm-table-cell">
                                                Circulating Supply
                                            </th>
                                            <th className="d-none d-xl-table-cell">
                                                Last 7 Days
                                            </th>
                                            <th className="menu__head"></th>
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
                                                        src={Bitcoin}
                                                        alt="img"
                                                    ></img>
                                                    <div className="coin__name me-2">
                                                        Bitcoin
                                                    </div>
                                                    <div className="coin__symbol me-2 d-none d-lg-block">
                                                        BTC
                                                    </div>
                                                    <button className="buy__button">
                                                        Buy
                                                    </button>
                                                </div>
                                            </td>

                                            <td>
                                                <div>$276,435,232</div>
                                            </td>

                                            <td>
                                                <div className="one-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                                    <img
                                                        className="change__arrow--image me-2"
                                                        src={Decrease_Arrow}
                                                        alt="icon"
                                                    ></img>
                                                    <div className="value__down">
                                                        6.45%
                                                    </div>
                                                </div>
                                            </td>

                                            <td>
                                                <div className="seven-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                                    <img
                                                        className="change__arrow--image me-2"
                                                        src={Decrease_Arrow}
                                                        alt="icon"
                                                    ></img>
                                                    <div className="value__down">
                                                        6.45%
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="market__cap">
                                                <div>$571,123,345,234</div>
                                            </td>

                                            <td>
                                                <div className="day-volume">
                                                    <div className="in-currency">
                                                        $654,231,432,321
                                                    </div>
                                                    <div className="in-btc">
                                                        2,574,345 BTC
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="d-none d-sm-table-cell">
                                                <div className="circulating__supply">
                                                    <span className="circulating__supply--value">
                                                        31,432,321
                                                    </span>
                                                    <span className="circulating__supply--symbol ms-2">
                                                        BTC
                                                    </span>

                                                    <div class="progress w-75 mt-2 rounded-pill">
                                                        <div
                                                            class="progress-bar w-50 rounded-pill"
                                                            role="progressbar"
                                                            aria-valuenow="25"
                                                            aria-valuemin="0"
                                                            aria-valuemax="100"
                                                        ></div>
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

                                            <td>
                                                <div>
                                                    <img
                                                        className="more__icon"
                                                        src={More_Icon}
                                                        alt="icon"
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
                                                        src={Bitcoin}
                                                        alt="img"
                                                    ></img>
                                                    <div className="coin__name me-2">
                                                        Bitcoin
                                                    </div>
                                                    <div className="coin__symbol me-2 d-none d-lg-block">
                                                        BTC
                                                    </div>
                                                    <button className="buy__button">
                                                        Buy
                                                    </button>
                                                </div>
                                            </td>

                                            <td>
                                                <div>$276,435,232</div>
                                            </td>

                                            <td>
                                                <div className="one-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                                    <img
                                                        className="change__arrow--image me-2"
                                                        src={Increase_Arrow}
                                                        alt="icon"
                                                    ></img>
                                                    <div className="value__up">
                                                        6.45%
                                                    </div>
                                                </div>
                                            </td>

                                            <td>
                                                <div className="seven-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                                    <img
                                                        className="change__arrow--image me-2"
                                                        src={Increase_Arrow}
                                                        alt="icon"
                                                    ></img>
                                                    <div className="value__up">
                                                        6.45%
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="market__cap">
                                                <div>$571,123,345,234</div>
                                            </td>

                                            <td>
                                                <div className="day-volume">
                                                    <div className="in-currency">
                                                        $654,231,432,321
                                                    </div>
                                                    <div className="in-btc">
                                                        2,574,345 BTC
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="d-none d-sm-table-cell">
                                                <div className="circulating__supply">
                                                    <span className="circulating__supply--value">
                                                        31,432,321
                                                    </span>
                                                    <span className="circulating__supply--symbol ms-2">
                                                        BTC
                                                    </span>

                                                    <div class="progress w-75 mt-2 rounded-pill">
                                                        <div
                                                            class="progress-bar w-50 rounded-pill"
                                                            role="progressbar"
                                                            aria-valuenow="25"
                                                            aria-valuemin="0"
                                                            aria-valuemax="100"
                                                        ></div>
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

                                            <td>
                                                <div>
                                                    <img
                                                        className="more__icon"
                                                        src={More_Icon}
                                                        alt="icon"
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
                                                        src={Bitcoin}
                                                        alt="img"
                                                    ></img>
                                                    <div className="coin__name me-2">
                                                        Bitcoin
                                                    </div>
                                                    <div className="coin__symbol me-2 d-none d-lg-block">
                                                        BTC
                                                    </div>
                                                    <button className="buy__button">
                                                        Buy
                                                    </button>
                                                </div>
                                            </td>

                                            <td>
                                                <div>$276,435,232</div>
                                            </td>

                                            <td>
                                                <div className="one-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                                    <img
                                                        className="change__arrow--image me-2"
                                                        src={Increase_Arrow}
                                                        alt="icon"
                                                    ></img>
                                                    <div className="value__up">
                                                        6.45%
                                                    </div>
                                                </div>
                                            </td>

                                            <td>
                                                <div className="seven-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                                    <img
                                                        className="change__arrow--image me-2"
                                                        src={Increase_Arrow}
                                                        alt="icon"
                                                    ></img>
                                                    <div className="value__up">
                                                        6.45%
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="market__cap">
                                                <div>$571,123,345,234</div>
                                            </td>

                                            <td>
                                                <div className="day-volume">
                                                    <div className="in-currency">
                                                        $654,231,432,321
                                                    </div>
                                                    <div className="in-btc">
                                                        2,574,345 BTC
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="d-none d-sm-table-cell">
                                                <div className="circulating__supply">
                                                    <span className="circulating__supply--value">
                                                        31,432,321
                                                    </span>
                                                    <span className="circulating__supply--symbol ms-2">
                                                        BTC
                                                    </span>

                                                    <div class="progress w-75 mt-2 rounded-pill">
                                                        <div
                                                            class="progress-bar w-50 rounded-pill"
                                                            role="progressbar"
                                                            aria-valuenow="25"
                                                            aria-valuemin="0"
                                                            aria-valuemax="100"
                                                        ></div>
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

                                            <td>
                                                <div>
                                                    <img
                                                        className="more__icon"
                                                        src={More_Icon}
                                                        alt="icon"
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
                                                        src={Bitcoin}
                                                        alt="img"
                                                    ></img>
                                                    <div className="coin__name me-2">
                                                        Bitcoin
                                                    </div>
                                                    <div className="coin__symbol me-2 d-none d-lg-block">
                                                        BTC
                                                    </div>
                                                    <button className="buy__button">
                                                        Buy
                                                    </button>
                                                </div>
                                            </td>

                                            <td>
                                                <div>$276,435,232</div>
                                            </td>

                                            <td>
                                                <div className="one-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                                    <img
                                                        className="change__arrow--image me-2"
                                                        src={Decrease_Arrow}
                                                        alt="icon"
                                                    ></img>
                                                    <div className="value__down">
                                                        6.45%
                                                    </div>
                                                </div>
                                            </td>

                                            <td>
                                                <div className="seven-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                                    <img
                                                        className="change__arrow--image me-2"
                                                        src={Decrease_Arrow}
                                                        alt="icon"
                                                    ></img>
                                                    <div className="value__down">
                                                        6.45%
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="market__cap">
                                                <div>$571,123,345,234</div>
                                            </td>

                                            <td>
                                                <div className="day-volume">
                                                    <div className="in-currency">
                                                        $654,231,432,321
                                                    </div>
                                                    <div className="in-btc">
                                                        2,574,345 BTC
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="d-none d-sm-table-cell">
                                                <div className="circulating__supply">
                                                    <span className="circulating__supply--value">
                                                        31,432,321
                                                    </span>
                                                    <span className="circulating__supply--symbol ms-2">
                                                        BTC
                                                    </span>

                                                    <div class="progress w-75 mt-2 rounded-pill">
                                                        <div
                                                            class="progress-bar w-50 rounded-pill"
                                                            role="progressbar"
                                                            aria-valuenow="25"
                                                            aria-valuemin="0"
                                                            aria-valuemax="100"
                                                        ></div>
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

                                            <td>
                                                <div>
                                                    <img
                                                        className="more__icon"
                                                        src={More_Icon}
                                                        alt="icon"
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
                                                        src={Bitcoin}
                                                        alt="img"
                                                    ></img>
                                                    <div className="coin__name me-2">
                                                        Bitcoin
                                                    </div>
                                                    <div className="coin__symbol me-2 d-none d-lg-block">
                                                        BTC
                                                    </div>
                                                    <button className="buy__button">
                                                        Buy
                                                    </button>
                                                </div>
                                            </td>

                                            <td>
                                                <div>$276,435,232</div>
                                            </td>

                                            <td>
                                                <div className="one-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                                    <img
                                                        className="change__arrow--image me-2"
                                                        src={Decrease_Arrow}
                                                        alt="icon"
                                                    ></img>
                                                    <div className="value__down">
                                                        6.45%
                                                    </div>
                                                </div>
                                            </td>

                                            <td>
                                                <div className="seven-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                                    <img
                                                        className="change__arrow--image me-2"
                                                        src={Decrease_Arrow}
                                                        alt="icon"
                                                    ></img>
                                                    <div className="value__down">
                                                        6.45%
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="market__cap">
                                                <div>$571,123,345,234</div>
                                            </td>

                                            <td>
                                                <div className="day-volume">
                                                    <div className="in-currency">
                                                        $654,231,432,321
                                                    </div>
                                                    <div className="in-btc">
                                                        2,574,345 BTC
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="d-none d-sm-table-cell">
                                                <div className="circulating__supply">
                                                    <span className="circulating__supply--value">
                                                        31,432,321
                                                    </span>
                                                    <span className="circulating__supply--symbol ms-2">
                                                        BTC
                                                    </span>

                                                    <div class="progress w-75 mt-2 rounded-pill">
                                                        <div
                                                            class="progress-bar w-50 rounded-pill"
                                                            role="progressbar"
                                                            aria-valuenow="25"
                                                            aria-valuemin="0"
                                                            aria-valuemax="100"
                                                        ></div>
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

                                            <td>
                                                <div>
                                                    <img
                                                        className="more__icon"
                                                        src={More_Icon}
                                                        alt="icon"
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
                                                        src={Bitcoin}
                                                        alt="img"
                                                    ></img>
                                                    <div className="coin__name me-2">
                                                        Bitcoin
                                                    </div>
                                                    <div className="coin__symbol me-2 d-none d-lg-block">
                                                        BTC
                                                    </div>
                                                    <button className="buy__button">
                                                        Buy
                                                    </button>
                                                </div>
                                            </td>

                                            <td>
                                                <div>$276,435,232</div>
                                            </td>

                                            <td>
                                                <div className="one-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                                    <img
                                                        className="change__arrow--image me-2"
                                                        src={Increase_Arrow}
                                                        alt="icon"
                                                    ></img>
                                                    <div className="value__up">
                                                        6.45%
                                                    </div>
                                                </div>
                                            </td>

                                            <td>
                                                <div className="seven-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                                    <img
                                                        className="change__arrow--image me-2"
                                                        src={Increase_Arrow}
                                                        alt="icon"
                                                    ></img>
                                                    <div className="value__up">
                                                        6.45%
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="market__cap">
                                                <div>$571,123,345,234</div>
                                            </td>

                                            <td>
                                                <div className="day-volume">
                                                    <div className="in-currency">
                                                        $654,231,432,321
                                                    </div>
                                                    <div className="in-btc">
                                                        2,574,345 BTC
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="d-none d-sm-table-cell">
                                                <div className="circulating__supply">
                                                    <span className="circulating__supply--value">
                                                        31,432,321
                                                    </span>
                                                    <span className="circulating__supply--symbol ms-2">
                                                        BTC
                                                    </span>

                                                    <div class="progress w-75 mt-2 rounded-pill">
                                                        <div
                                                            class="progress-bar w-50 rounded-pill"
                                                            role="progressbar"
                                                            aria-valuenow="25"
                                                            aria-valuemin="0"
                                                            aria-valuemax="100"
                                                        ></div>
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

                                            <td>
                                                <div>
                                                    <img
                                                        className="more__icon"
                                                        src={More_Icon}
                                                        alt="icon"
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
                                                        src={Bitcoin}
                                                        alt="img"
                                                    ></img>
                                                    <div className="coin__name me-2">
                                                        Bitcoin
                                                    </div>
                                                    <div className="coin__symbol me-2 d-none d-lg-block">
                                                        BTC
                                                    </div>
                                                    <button className="buy__button">
                                                        Buy
                                                    </button>
                                                </div>
                                            </td>

                                            <td>
                                                <div>$276,435,232</div>
                                            </td>

                                            <td>
                                                <div className="one-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                                    <img
                                                        className="change__arrow--image me-2"
                                                        src={Decrease_Arrow}
                                                        alt="icon"
                                                    ></img>
                                                    <div className="value__down">
                                                        6.45%
                                                    </div>
                                                </div>
                                            </td>

                                            <td>
                                                <div className="seven-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                                    <img
                                                        className="change__arrow--image me-2"
                                                        src={Decrease_Arrow}
                                                        alt="icon"
                                                    ></img>
                                                    <div className="value__down">
                                                        6.45%
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="market__cap">
                                                <div>$571,123,345,234</div>
                                            </td>

                                            <td>
                                                <div className="day-volume">
                                                    <div className="in-currency">
                                                        $654,231,432,321
                                                    </div>
                                                    <div className="in-btc">
                                                        2,574,345 BTC
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="d-none d-sm-table-cell">
                                                <div className="circulating__supply">
                                                    <span className="circulating__supply--value">
                                                        31,432,321
                                                    </span>
                                                    <span className="circulating__supply--symbol ms-2">
                                                        BTC
                                                    </span>

                                                    <div class="progress w-75 mt-2 rounded-pill">
                                                        <div
                                                            class="progress-bar w-50 rounded-pill"
                                                            role="progressbar"
                                                            aria-valuenow="25"
                                                            aria-valuemin="0"
                                                            aria-valuemax="100"
                                                        ></div>
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

                                            <td>
                                                <div>
                                                    <img
                                                        className="more__icon"
                                                        src={More_Icon}
                                                        alt="icon"
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
                                                        src={Bitcoin}
                                                        alt="img"
                                                    ></img>
                                                    <div className="coin__name me-2">
                                                        Bitcoin
                                                    </div>
                                                    <div className="coin__symbol me-2 d-none d-lg-block">
                                                        BTC
                                                    </div>
                                                    <button className="buy__button">
                                                        Buy
                                                    </button>
                                                </div>
                                            </td>

                                            <td>
                                                <div>$276,435,232</div>
                                            </td>

                                            <td>
                                                <div className="one-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                                    <img
                                                        className="change__arrow--image me-2"
                                                        src={Increase_Arrow}
                                                        alt="icon"
                                                    ></img>
                                                    <div className="value__up">
                                                        6.45%
                                                    </div>
                                                </div>
                                            </td>

                                            <td>
                                                <div className="seven-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                                    <img
                                                        className="change__arrow--image me-2"
                                                        src={Increase_Arrow}
                                                        alt="icon"
                                                    ></img>
                                                    <div className="value__up">
                                                        6.45%
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="market__cap">
                                                <div>$571,123,345,234</div>
                                            </td>

                                            <td>
                                                <div className="day-volume">
                                                    <div className="in-currency">
                                                        $654,231,432,321
                                                    </div>
                                                    <div className="in-btc">
                                                        2,574,345 BTC
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="d-none d-sm-table-cell">
                                                <div className="circulating__supply">
                                                    <span className="circulating__supply--value">
                                                        31,432,321
                                                    </span>
                                                    <span className="circulating__supply--symbol ms-2">
                                                        BTC
                                                    </span>

                                                    <div class="progress w-75 mt-2 rounded-pill">
                                                        <div
                                                            class="progress-bar w-50 rounded-pill"
                                                            role="progressbar"
                                                            aria-valuenow="25"
                                                            aria-valuemin="0"
                                                            aria-valuemax="100"
                                                        ></div>
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

                                            <td>
                                                <div>
                                                    <img
                                                        className="more__icon"
                                                        src={More_Icon}
                                                        alt="icon"
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
                                                        src={Bitcoin}
                                                        alt="img"
                                                    ></img>
                                                    <div className="coin__name me-2">
                                                        Bitcoin
                                                    </div>
                                                    <div className="coin__symbol me-2 d-none d-lg-block">
                                                        BTC
                                                    </div>
                                                    <button className="buy__button">
                                                        Buy
                                                    </button>
                                                </div>
                                            </td>

                                            <td>
                                                <div>$276,435,232</div>
                                            </td>

                                            <td>
                                                <div className="one-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                                    <img
                                                        className="change__arrow--image me-2"
                                                        src={Decrease_Arrow}
                                                        alt="icon"
                                                    ></img>
                                                    <div className="value__down">
                                                        6.45%
                                                    </div>
                                                </div>
                                            </td>

                                            <td>
                                                <div className="seven-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                                    <img
                                                        className="change__arrow--image me-2"
                                                        src={Decrease_Arrow}
                                                        alt="icon"
                                                    ></img>
                                                    <div className="value__down">
                                                        6.45%
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="market__cap">
                                                <div>$571,123,345,234</div>
                                            </td>

                                            <td>
                                                <div className="day-volume">
                                                    <div className="in-currency">
                                                        $654,231,432,321
                                                    </div>
                                                    <div className="in-btc">
                                                        2,574,345 BTC
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="d-none d-sm-table-cell">
                                                <div className="circulating__supply">
                                                    <span className="circulating__supply--value">
                                                        31,432,321
                                                    </span>
                                                    <span className="circulating__supply--symbol ms-2">
                                                        BTC
                                                    </span>

                                                    <div class="progress w-75 mt-2 rounded-pill">
                                                        <div
                                                            class="progress-bar w-50 rounded-pill"
                                                            role="progressbar"
                                                            aria-valuenow="25"
                                                            aria-valuemin="0"
                                                            aria-valuemax="100"
                                                        ></div>
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

                                            <td>
                                                <div>
                                                    <img
                                                        className="more__icon"
                                                        src={More_Icon}
                                                        alt="icon"
                                                    ></img>
                                                </div>
                                            </td>
                                        </tr>

                                        {/* Row ten */}

                                        <tr className="table__body--row align-middle">
                                            <td>
                                                <WatchlistStar />
                                            </td>

                                            <td>
                                                <div className="serial_number">
                                                    <span>10</span>
                                                </div>
                                            </td>

                                            <td>
                                                <div className="namecell__wrapper d-flex justify-content-start align-items-center pe-5 pe-md-0">
                                                    <img
                                                        className="coin__image me-2"
                                                        src={Bitcoin}
                                                        alt="img"
                                                    ></img>
                                                    <div className="coin__name me-2">
                                                        Bitcoin
                                                    </div>
                                                    <div className="coin__symbol me-2 d-none d-lg-block">
                                                        BTC
                                                    </div>
                                                    <button className="buy__button">
                                                        Buy
                                                    </button>
                                                </div>
                                            </td>

                                            <td>
                                                <div>$276,435,232</div>
                                            </td>

                                            <td>
                                                <div className="one-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                                    <img
                                                        className="change__arrow--image me-2"
                                                        src={Increase_Arrow}
                                                        alt="icon"
                                                    ></img>
                                                    <div className="value__up">
                                                        6.45%
                                                    </div>
                                                </div>
                                            </td>

                                            <td>
                                                <div className="seven-day__pricechange d-flex justify-content-start align-items-center pe-3 pe-md-0">
                                                    <img
                                                        className="change__arrow--image me-2"
                                                        src={Increase_Arrow}
                                                        alt="icon"
                                                    ></img>
                                                    <div className="value__up">
                                                        6.45%
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="market__cap">
                                                <div>$571,123,345,234</div>
                                            </td>

                                            <td>
                                                <div className="day-volume">
                                                    <div className="in-currency">
                                                        $654,231,432,321
                                                    </div>
                                                    <div className="in-btc">
                                                        2,574,345 BTC
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="d-none d-sm-table-cell">
                                                <div className="circulating__supply">
                                                    <span className="circulating__supply--value">
                                                        31,432,321
                                                    </span>
                                                    <span className="circulating__supply--symbol ms-2">
                                                        BTC
                                                    </span>

                                                    <div class="progress w-75 mt-2 rounded-pill">
                                                        <div
                                                            class="progress-bar w-50 rounded-pill"
                                                            role="progressbar"
                                                            aria-valuenow="25"
                                                            aria-valuemin="0"
                                                            aria-valuemax="100"
                                                        ></div>
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

                                            <td>
                                                <div className="more__icon--wrapper">
                                                    <img
                                                        className="more__icon"
                                                        src={More_Icon}
                                                        alt="icon"
                                                    ></img>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <nav aria-label="Page navigation example">
                                    <ul class="pagination">
                                        <li class="page-item">
                                            <a
                                                class="page-link"
                                                href="#"
                                            >
                                                Prev
                                            </a>
                                        </li>
                                        <li class="page-item">
                                            <a
                                                class="page-link"
                                                href="#"
                                            >
                                                1
                                            </a>
                                        </li>
                                        <li class="page-item">
                                            <a
                                                class="page-link"
                                                href="#"
                                            >
                                                2
                                            </a>
                                        </li>
                                        <li class="page-item">
                                            <a
                                                class="page-link"
                                                href="#"
                                            >
                                                3
                                            </a>
                                        </li>
                                        <li class="page-item">
                                            <a
                                                class="page-link"
                                                href="#"
                                            >
                                                Next
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
