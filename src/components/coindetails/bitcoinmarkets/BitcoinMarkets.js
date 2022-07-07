import React from 'react';
import './BitcoinMarkets.css';
import Binance_Logo from './../../../assets/bitcoinmarkets/image 21.svg';
// import { Link } from 'react-router-dom';

const BitcoinMarkets = () => {
    return (
        <div className="container-fluid bitcoin_market_styles">
            <div className="bitcoin_heading_derivatives d-flex gap-3 text-align-center">
                <div className="bitcoin_market ">BitcoinMarkets</div>
                <div className="bitcoin-derivatives d-flex gap-3">
                    <a
                        href="#"
                        class="btn  rounded-pill button_spot"
                    >
                        Spot
                    </a>
                    <a
                        href="#"
                        class="btn  rounded-pill button_perpetual"
                    >
                        Perpetual
                    </a>
                    <a
                        href="#"
                        class="btn  rounded-pill button_features"
                    >
                        Features
                    </a>
                </div>
            </div>

            <div className="table_main_layout bg-white yo-yo">
                <div className="table_main border ">
                    <table class="table  table_styles table-borderless ">
                        <thead>
                            <tr class="table top_border ">
                                <th scope="col">#</th>
                                <th scope="col">Source</th>
                                <th scope="col">Pairs</th>
                                <th scope="col">Price</th>
                                <th scope="col">+2% Depth</th>
                                <th scope="col">-2% Depth</th>
                                <th scope="col">Volume</th>
                                <th
                                    scope="col"
                                    className="table___volume"
                                >
                                    Volume %
                                </th>
                                <th scope="col">Confidence</th>
                                <th scope="col">Liquidity</th>
                                <th scope="col">Updated</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr className="before_after">
                                <td scope="row">01</td>

                                <td className=" align-items-center parent_binance_logo">
                                    <div className="logo_max_content">
                                        <img
                                            src={Binance_Logo}
                                            className="binance_logo "
                                        />

                                        <span className="ps-3 source">
                                            Binance
                                        </span>
                                    </div>
                                </td>

                                <td className="btc_color">BTC/USDT</td>

                                <td>$29,820.42</td>
                                <td>$14,539,994.72</td>
                                <td>$16,697,927.67</td>
                                <td>$3,120,563,182</td>
                                <td>7.52%</td>
                                <td className="button_high_parent">
                                    <a
                                        href="#"
                                        class="btn  rounded-pill button_high "
                                    >
                                        High
                                    </a>
                                </td>
                                <td>1,033</td>
                                <td className="estimate__hour">1 hour ago</td>
                            </tr>
                            <tr className="before_after">
                                <td scope="row">02</td>
                                <td className="align-items-center parent_binance_logo">
                                    <img
                                        src={Binance_Logo}
                                        className="binance_logo"
                                    />
                                    <span className="ps-3 source">Binance</span>
                                </td>
                                <td className="btc_color">BTC/USDT</td>
                                <td>$29,820.42</td>
                                <td>$14,539,994.72</td>
                                <td>$16,697,927.67</td>
                                <td>$3,120,563,182</td>
                                <td>7.52%</td>
                                <td className="button_high_parent">
                                    <a
                                        href="#"
                                        class="btn  rounded-pill button_high"
                                    >
                                        High
                                    </a>
                                </td>
                                <td>1,033</td>
                                <td>1 hour ago</td>
                            </tr>
                            <tr className="before_after">
                                <td scope="row">03</td>
                                <td className="align-items-center parent_binance_logo">
                                    <img
                                        src={Binance_Logo}
                                        className="binance_logo"
                                    />
                                    <span className="ps-3 source">Binance</span>
                                </td>
                                <td className="btc_color">BTC/USDT</td>
                                <td>$29,820.42</td>
                                <td>$14,539,994.72</td>
                                <td>$16,697,927.67</td>
                                <td>$3,120,563,182</td>
                                <td>7.52%</td>
                                <td className="button_high_parent">
                                    <a
                                        href="#"
                                        class="btn  rounded-pill button_high"
                                    >
                                        High
                                    </a>
                                </td>
                                <td>1,033</td>
                                <td className="estimate__hour">1 hour ago</td>
                            </tr>

                            <tr className="before_after">
                                <td scope="row">04</td>
                                <td className="align-items-center parent_binance_logo">
                                    <img
                                        src={Binance_Logo}
                                        className="binance_logo"
                                    />
                                    <span className="ps-3 source">Binance</span>
                                </td>
                                <td className="btc_color">BTC/USDT</td>
                                <td>$29,820.42</td>
                                <td>$14,539,994.72</td>
                                <td>$16,697,927.67</td>
                                <td>$3,120,563,182</td>
                                <td>7.52%</td>
                                <td className="button_high_parent">
                                    <a
                                        href="#"
                                        class="btn  rounded-pill button_high"
                                    >
                                        High
                                    </a>
                                </td>
                                <td>1,033</td>
                                <td>1 hour ago</td>
                            </tr>

                            <tr className="before_after">
                                <td scope="row">05</td>
                                <td className="align-items-center parent_binance_logo">
                                    <img
                                        src={Binance_Logo}
                                        className="binance_logo"
                                    />
                                    <span className="ps-3 source">Binance</span>
                                </td>
                                <td className="btc_color">BTC/USDT</td>
                                <td>$29,820.42</td>
                                <td>$14,539,994.72</td>
                                <td>$16,697,927.67</td>
                                <td>$3,120,563,182</td>
                                <td>7.52%</td>
                                <td className="button_high_parent">
                                    <a
                                        href="#"
                                        class="btn  rounded-pill button_high"
                                    >
                                        High
                                    </a>
                                </td>
                                <td>1,033</td>
                                <td className="estimate__hour">1 hour ago</td>
                            </tr>

                            <tr className="before_after">
                                <td scope="row">06</td>
                                <td className="align-items-center parent_binance_logo">
                                    <img
                                        src={Binance_Logo}
                                        className="binance_logo"
                                    />
                                    <span className="ps-3 source">Binance</span>
                                </td>
                                <td className="btc_color">BTC/USDT</td>
                                <td>$29,820.42</td>
                                <td>$14,539,994.72</td>
                                <td>$16,697,927.67</td>
                                <td>$3,120,563,182</td>
                                <td>7.52%</td>
                                <td className="button_high_parent">
                                    <a
                                        href="#"
                                        class="btn  rounded-pill button_high"
                                    >
                                        High
                                    </a>
                                </td>
                                <td>1,033</td>
                                <td className="estimate__hour">1 hour ago</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="button_down_market">
                    <a
                        href="#"
                        class="btn  rounded-pill button_show_all"
                    >
                        Show All Markets
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BitcoinMarkets;
