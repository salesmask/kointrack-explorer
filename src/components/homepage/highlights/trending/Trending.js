import React from 'react';
import '../HighlightCards.css';
import ReadMore from '../read-more/ReadMore';
import TrendingIcon from '../../../../assests/homepage/highlights/trending/Tranding_Icon.png';
import UpIcon from '../../../../assests/homepage/highlights/trending/Increase_Arrow.png';
import DownIcon from '../../../../assests/homepage/highlights/trending/Decrease_Arrow.png';

//Importing table icons
import Satoshi from '../../../../assests/homepage/highlights/trending/Satoshi Token_Icon.svg';
import Spice from '../../../../assests/homepage/highlights/trending/Spice Trade_Icon.svg';
import Terra from '../../../../assests/homepage/highlights/trending/Terra Classic_Icon.svg';

const Gainers = () => {
    return (
        <section className="highlights__card--wrapper">
            {/* Heading section */}

            <div className="highlights__heading">
                <div className="highlights__title display__center">
                    <img
                        src={TrendingIcon}
                        alt="icon"
                        className="highlights__title-icon"
                    />
                    <span>Trending</span>
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
                                src={Satoshi}
                                alt="icon"
                                className="image__icon"
                            />
                        </td>
                        <td className="name">Terra Classic</td>
                        <td className="symbol">LUNC</td>
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
                                src={Spice}
                                alt="icon"
                                className="image__icon"
                            />
                        </td>
                        <td className="name">Green Satoshi Token (SOL)</td>
                        <td className="symbol">GST</td>
                        <td className="percent__change display__center">
                            <img
                                src={DownIcon}
                                alt="icon"
                                className="percent__change--upicon"
                            />
                            <span id="down">6.45%</span>
                        </td>
                    </tr>
                    <tr>
                        <td className="slno">03</td>
                        <td className="image">
                            <img
                                src={Satoshi}
                                alt="icon"
                                className="image__icon"
                            />
                        </td>
                        <td className="name">Terra Classic</td>
                        <td className="symbol">LUNC</td>
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
                                src={Spice}
                                alt="icon"
                                className="image__icon"
                            />
                        </td>
                        <td className="name">Green Satoshi Token (SOL)</td>
                        <td className="symbol">GST</td>
                        <td className="percent__change display__center">
                            <img
                                src={DownIcon}
                                alt="icon"
                                className="percent__change--upicon"
                            />
                            <span id="down">6.45%</span>
                        </td>
                    </tr>
                    <tr>
                        <td className="slno">05</td>
                        <td className="image">
                            <img
                                src={Terra}
                                alt="icon"
                                className="image__icon"
                            />
                        </td>
                        <td className="name">Sweet SOL</td>
                        <td className="symbol">SSOL</td>
                        <td className="percent__change display__center">
                            <img
                                src={DownIcon}
                                alt="icon"
                                className="percent__change--upicon"
                            />
                            <span id="down">8.45%</span>
                        </td>
                    </tr>
                    <tr>
                        <td className="slno">06</td>
                        <td className="image">
                            <img
                                src={Satoshi}
                                alt="icon"
                                className="image__icon"
                            />
                        </td>
                        <td className="name">Terra Classic</td>
                        <td className="symbol">LUNC</td>
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
                                src={Terra}
                                alt="icon"
                                className="image__icon"
                            />
                        </td>
                        <td className="name">Sweet SOL</td>
                        <td className="symbol">SSOL</td>
                        <td className="percent__change display__center">
                            <img
                                src={DownIcon}
                                alt="icon"
                                className="percent__change--upicon"
                            />
                            <span id="down">8.45%</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
};

export default Gainers;
