import React from 'react';
import '../HighlightCards.css';
import ReadMore from '../read-more/ReadMore';
import GainerIcon from '../../../../assests/homepage/highlights/gainers/Gainers_Icon.svg';
import UpIcon from '../../../../assests/homepage/highlights/gainers/Increase_Arrow.png';
import DownIcon from '../../../../assests/homepage/highlights/gainers/Decrease_Arrow.png';

//Importing table icons
import Road from '../../../../assests/homepage/highlights/gainers/ROAD_Icon.svg';
import Sweet from '../../../../assests/homepage/highlights/gainers/Sweet SOL_Icon.svg';
import TNC from '../../../../assests/homepage/highlights/gainers/TNC Coin_Icon.svg';

const Gainers = () => {
    return (
        <section className="highlights__card--wrapper">
            {/* Heading section */}

            <div className="highlights__heading">
                <div className="highlights__title display__center">
                    <img
                        src={GainerIcon}
                        alt="icon"
                        className="highlights__title-icon"
                    />
                    <span>Biggest Gainers</span>
                </div>
                <div className="highlights__readmore">
                    <ReadMore />
                </div>
            </div>

            {/* Table section */}

            <table className="highlights__table">
                <tbody>
                    <tr>
                        <td className="slno">01</td>
                        <td className="image">
                            <img
                                src={Road}
                                alt="icon"
                                className="image__icon"
                            />
                        </td>
                        <td className="name">ROAD</td>
                        <td className="symbol">ROAD</td>
                        <td className="percent__change display__center">
                            <img
                                src={UpIcon}
                                alt="icon"
                                className="percent__change--upicon"
                            />
                            <span>10.82%</span>
                        </td>
                    </tr>
                    <tr>
                        <td className="slno">02</td>
                        <td className="image">
                            <img
                                src={Sweet}
                                alt="icon"
                                className="image__icon"
                            />
                        </td>
                        <td className="name">Sweet SOL</td>
                        <td className="symbol">SSOL</td>
                        <td className="percent__change display__center">
                            <img
                                src={UpIcon}
                                alt="icon"
                                className="percent__change--upicon"
                            />
                            <span>11.1%</span>
                        </td>
                    </tr>
                    <tr>
                        <td className="slno">03</td>
                        <td className="image">
                            <img
                                src={Road}
                                alt="icon"
                                className="image__icon"
                            />
                        </td>
                        <td className="name">ROAD</td>
                        <td className="symbol">ROAD</td>
                        <td className="percent__change display__center">
                            <img
                                src={UpIcon}
                                alt="icon"
                                className="percent__change--upicon"
                            />
                            <span>10.82%</span>
                        </td>
                    </tr>
                    <tr>
                        <td className="slno">04</td>
                        <td className="image">
                            <img
                                src={Sweet}
                                alt="icon"
                                className="image__icon"
                            />
                        </td>
                        <td className="name">Sweet SOL</td>
                        <td className="symbol">SSOL</td>
                        <td className="percent__change display__center">
                            <img
                                src={UpIcon}
                                alt="icon"
                                className="percent__change--upicon"
                            />
                            <span>11.1%</span>
                        </td>
                    </tr>
                    <tr>
                        <td className="slno">05</td>
                        <td className="image">
                            <img
                                src={TNC}
                                alt="icon"
                                className="image__icon"
                            />
                        </td>
                        <td className="name">TNC Coin</td>
                        <td className="symbol">TNC</td>
                        <td className="percent__change display__center">
                            <img
                                src={UpIcon}
                                alt="icon"
                                className="percent__change--upicon"
                            />
                            <span>8.45%</span>
                        </td>
                    </tr>
                    <tr>
                        <td className="slno">06</td>
                        <td className="image">
                            <img
                                src={Road}
                                alt="icon"
                                className="image__icon"
                            />
                        </td>
                        <td className="name">ROAD</td>
                        <td className="symbol">ROAD</td>
                        <td className="percent__change display__center">
                            <img
                                src={UpIcon}
                                alt="icon"
                                className="percent__change--upicon"
                            />
                            <span>10.82%</span>
                        </td>
                    </tr>
                    <tr>
                        <td className="slno">07</td>
                        <td className="image">
                            <img
                                src={TNC}
                                alt="icon"
                                className="image__icon"
                            />
                        </td>
                        <td className="name">TNC Coin</td>
                        <td className="symbol">TNC</td>
                        <td className="percent__change display__center">
                            <img
                                src={UpIcon}
                                alt="icon"
                                className="percent__change--upicon"
                            />
                            <span>8.45%</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
};

export default Gainers;
